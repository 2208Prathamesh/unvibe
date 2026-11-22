#!/usr/bin/env node
/**
 * Zero-dependency MCP (Model Context Protocol) JSON-RPC 2.0 Server over stdio for Unvibe.
 * Exposes theme packs, recommender, token/DESIGN.md generator, WCAG/APCA contrast checker,
 * AI-slop static linter, and craft checklists (strictly UI/UX & theming only).
 */

import { createInterface } from 'node:readline';
import { evaluateContrast } from '../scripts/contrast.mjs';
import { auditCode } from '../scripts/linter.mjs';
import {
  generateDesignMd,
  generateTokens,
  getChecklist,
  getTheme,
  listThemes,
  recommendThemes,
} from '../scripts/themes-engine.mjs';

const SERVER_INFO = {
  name: 'unvibe-mcp',
  version: '1.0.0',
};

const TOOLS = [
  {
    name: 'list_themes',
    description:
      'List available Unvibe themes across the 6 curated packs (everyday-apps, professional, modern, premium, vintage, cool). Filter optionally by pack, defaultMode, surfaceMode, or search query.',
    inputSchema: {
      type: 'object',
      properties: {
        pack: {
          type: 'string',
          enum: ['everyday-apps', 'professional', 'modern', 'premium', 'vintage', 'cool'],
          description: 'Filter by theme pack.',
        },
        defaultMode: {
          type: 'string',
          enum: ['light', 'dark'],
          description: 'Filter by default color mode.',
        },
        surfaceMode: {
          type: 'string',
          enum: ['operate', 'read', 'persuade', 'social', 'editorial'],
          description: 'Filter by intended interface surface mode.',
        },
        search: {
          type: 'string',
          description: 'Free-text keyword filter across theme names, mood, and bestFor.',
        },
      },
      additionalProperties: false,
    },
  },
  {
    name: 'get_theme',
    description:
      'Fetch the complete specification, light & dark hex palettes, font pairings, geometry, motion, and DESIGN.md preview for a specific theme ID.',
    inputSchema: {
      type: 'object',
      properties: {
        themeId: {
          type: 'string',
          description: 'Kebab-case theme identifier (e.g., "graphite-studio", "parchment-editorial").',
        },
      },
      required: ['themeId'],
      additionalProperties: false,
    },
  },
  {
    name: 'recommend_themes',
    description:
      'Score all 24 curated Unvibe themes against a product/project description and return the top 3 concrete matches with rationale and verified contrast scores.',
    inputSchema: {
      type: 'object',
      properties: {
        projectDescription: {
          type: 'string',
          description: 'Plain description of the product, audience, and vibe (e.g., "minimalist fintech invoice dashboard").',
        },
        surfaceMode: {
          type: 'string',
          enum: ['operate', 'read', 'persuade', 'social', 'editorial'],
          description: 'Primary surface mode.',
        },
        preferredMode: {
          type: 'string',
          enum: ['light', 'dark'],
          description: 'Preferred default color mode.',
        },
        pack: {
          type: 'string',
          enum: ['everyday-apps', 'professional', 'modern', 'premium', 'vintage', 'cool'],
          description: 'Optional preferred theme pack.',
        },
      },
      required: ['projectDescription'],
      additionalProperties: false,
    },
  },
  {
    name: 'generate_tokens',
    description:
      'Generate ready-to-paste CSS custom properties (tokens.css), Tailwind v4 @theme CSS, Tailwind v3 config extension, or a drop-in project DESIGN.md file for a chosen Unvibe theme.',
    inputSchema: {
      type: 'object',
      properties: {
        themeId: {
          type: 'string',
          description: 'Theme ID to generate tokens for.',
        },
        format: {
          type: 'string',
          enum: ['css', 'tailwind-v4', 'tailwind-v3', 'design-md'],
          default: 'css',
          description: 'Output token format.',
        },
        mode: {
          type: 'string',
          enum: ['both', 'light', 'dark'],
          default: 'both',
          description: 'Include both light/dark selectors or lock to one mode.',
        },
      },
      required: ['themeId'],
      additionalProperties: false,
    },
  },
  {
    name: 'audit_slop',
    description:
      'Run the 22-rule deterministic static AI-slop, motion, spacing, layout, and accessibility linter on a UI file path, frontend directory, or inline UI code snippet.',
    inputSchema: {
      type: 'object',
      properties: {
        path: {
          type: 'string',
          description: 'File or directory path to audit recursively.',
        },
        code: {
          type: 'string',
          description: 'Raw HTML/CSS/JSX/TSX/Vue/Svelte source code to audit directly.',
        },
        filename: {
          type: 'string',
          description: 'Optional virtual filename (e.g., "Hero.tsx", "styles.css") when passing raw code.',
        },
      },
      additionalProperties: false,
    },
  },
  {
    name: 'check_contrast',
    description:
      'Calculate exact WCAG 2.1 ratio and APCA Lc perceptual contrast between foreground and background hex colors, and suggest an accessible lightness-adjusted hex if body AA (<4.5:1) fails.',
    inputSchema: {
      type: 'object',
      properties: {
        foreground: {
          type: 'string',
          description: 'Foreground text/icon hex color (e.g., "#6B7280").',
        },
        background: {
          type: 'string',
          description: 'Background surface hex color (e.g., "#FFFFFF").',
        },
      },
      required: ['foreground', 'background'],
      additionalProperties: false,
    },
  },
  {
    name: 'get_checklist',
    description:
      'Return an actionable UI/UX engineering & craft checklist for a specific workflow.',
    inputSchema: {
      type: 'object',
      properties: {
        workflow: {
          type: 'string',
          enum: [
            'redline',
            'new-build',
            'accessibility',
            'motion',
            'forms',
            'dashboard',
            'landing',
          ],
          description: 'Target UI/UX workflow checklist.',
        },
      },
      required: ['workflow'],
      additionalProperties: false,
    },
  },
];

function writeMessage(obj) {
  process.stdout.write(`${JSON.stringify(obj)}\n`);
}

function sendResult(id, result) {
  writeMessage({ jsonrpc: '2.0', id, result });
}

function sendError(id, code, message, data) {
  const err = { code, message };
  if (data !== undefined) err.data = data;
  writeMessage({ jsonrpc: '2.0', id: id ?? null, error: err });
}

function formatToolResponse(payload) {
  return {
    content: [
      {
        type: 'text',
        text: typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2),
      },
    ],
    isError: false,
  };
}

function formatToolError(err) {
  return {
    content: [
      {
        type: 'text',
        text: `Error: ${err instanceof Error ? err.message : String(err)}`,
      },
    ],
    isError: true,
  };
}

function handleToolCall(name, args = {}) {
  switch (name) {
    case 'list_themes':
      return formatToolResponse(listThemes(args));
    case 'get_theme': {
      const theme = getTheme(args.themeId);
      return formatToolResponse({
        theme,
        designMdPreview: generateDesignMd(theme),
      });
    }
    case 'recommend_themes':
      return formatToolResponse(recommendThemes(args));
    case 'generate_tokens':
      return formatToolResponse(generateTokens(args));
    case 'audit_slop':
      return formatToolResponse(auditCode(args));
    case 'check_contrast':
      return formatToolResponse(evaluateContrast(args.foreground, args.background));
    case 'get_checklist':
      return formatToolResponse(getChecklist(args.workflow));
    default:
      throw new Error(`Unknown tool: "${name}"`);
  }
}

function handleRequest(msg) {
  if (!msg || typeof msg !== 'object' || msg.jsonrpc !== '2.0') {
    sendError(msg?.id, -32600, 'Invalid JSON-RPC 2.0 Request');
    return;
  }

  const { id, method, params } = msg;

  // Notifications carry no id and expect no response
  if (id === undefined || id === null) {
    return;
  }

  try {
    switch (method) {
      case 'initialize': {
        const clientVersion = params?.protocolVersion || '2024-11-05';
        sendResult(id, {
          protocolVersion: clientVersion,
          capabilities: {
            tools: {},
          },
          serverInfo: SERVER_INFO,
        });
        break;
      }
      case 'ping':
        sendResult(id, {});
        break;
      case 'tools/list':
        sendResult(id, { tools: TOOLS });
        break;
      case 'tools/call': {
        const toolName = params?.name;
        const toolArgs = params?.arguments || {};
        try {
          sendResult(id, handleToolCall(toolName, toolArgs));
        } catch (toolErr) {
          sendResult(id, formatToolError(toolErr));
        }
        break;
      }
      default:
        sendError(id, -32601, `Method not found: ${method}`);
    }
  } catch (err) {
    process.stderr.write(`[unvibe-mcp] Internal error: ${err?.stack || err}\n`);
    sendError(id, -32603, err?.message || 'Internal error');
  }
}

const rl = createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

rl.on('line', (rawLine) => {
  const line = rawLine.trim();
  if (!line) return;
  try {
    const parsed = JSON.parse(line);
    handleRequest(parsed);
  } catch (parseErr) {
    process.stderr.write(`[unvibe-mcp] JSON parse error: ${parseErr.message}\n`);
    sendError(null, -32700, 'Parse error');
  }
});

rl.on('close', () => {
  process.exit(0);
});
