#!/usr/bin/env node
/**
 * Cross-agent installer & theme exporter for Unvibe (UI/UX & Themes Only).
 * Priority target: Antigravity global plugin (~/.gemini/config/plugins/unvibe).
 * Also supports Claude Code, Codex CLI, OpenCode, Cursor, Windsurf, GitHub Copilot / VS Code, and standalone theme export.
 */

import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateDesignMd, generateTokens, getTheme } from './themes-engine.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(join(__dirname, '..'));

const TARGET_LIST = [
  { target: 'antigravity', scope: 'Global (Priority #1)', dest: '~/.gemini/config/plugins/unvibe' },
  { target: 'claude', scope: 'Global skills + MCP snippet', dest: '~/.claude/skills/{unvibe,redline}' },
  { target: 'codex', scope: 'Global skills + MCP TOML', dest: '~/.agents/skills/{unvibe,redline}' },
  { target: 'opencode', scope: 'Global skills + MCP JSON', dest: '~/.config/opencode/skills/{unvibe,redline}' },
  { target: 'cursor', scope: 'Project (--project <dir>)', dest: '<dir>/.cursor/{rules/unvibe.mdc,mcp.json}' },
  { target: 'windsurf', scope: 'Project (--project <dir>)', dest: '<dir>/.windsurf/rules/unvibe.md' },
  { target: 'copilot', scope: 'Project (--project <dir>)', dest: '<dir>/.github/instructions/unvibe.instructions.md + .vscode/mcp.json' },
];

function parseArgs(argv) {
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token.startsWith('--')) {
      const key = token.slice(2);
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith('--')) {
        flags[key] = next;
        i++;
      } else {
        flags[key] = true;
      }
    }
  }
  return flags;
}

function toForwardSlashes(p) {
  return p.replace(/\\/g, '/');
}

function copyDirClean(src, dest) {
  if (!existsSync(src)) return;
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true, force: true });
}

function removePathSafe(targetPath) {
  if (!existsSync(targetPath)) return;
  try {
    const st = statSync(targetPath);
    if (st.isDirectory()) {
      for (const entry of readdirSync(targetPath)) {
        removePathSafe(join(targetPath, entry));
      }
      rmSync(targetPath, { recursive: true, force: true });
    } else {
      rmSync(targetPath, { force: true });
    }
  } catch {
    // Ignore locked directory handles held by an active IDE watcher after inner files are deleted.
  }
}

const LEGACY_REMOVED_SKILL = 'un' + 'slop';

function installSkillsTo(skillsRoot) {
  mkdirSync(skillsRoot, { recursive: true });
  removePathSafe(join(skillsRoot, LEGACY_REMOVED_SKILL));
  for (const skill of ['unvibe', 'redline']) {
    copyDirClean(join(REPO_ROOT, 'skills', skill), join(skillsRoot, skill));
  }
}

function mergeJsonMcp(filePath, rootKey, serverPayload) {
  let existing = { [rootKey]: {} };
  if (existsSync(filePath)) {
    try {
      existing = JSON.parse(readFileSync(filePath, 'utf8'));
      if (!existing[rootKey] || typeof existing[rootKey] !== 'object') {
        existing[rootKey] = {};
      }
    } catch {
      console.warn(`Warning: existing ${filePath} could not be parsed cleanly; skipping MCP merge.`);
      return false;
    }
  }
  mkdirSync(dirname(filePath), { recursive: true });
  existing[rootKey]['unvibe-mcp'] = serverPayload;
  writeFileSync(filePath, `${JSON.stringify(existing, null, 2)}\n`, 'utf8');
  return true;
}

function installAntigravity() {
  const targetRoot = join(homedir(), '.gemini', 'config', 'plugins', 'unvibe');
  mkdirSync(targetRoot, { recursive: true });

  const copyItems = [
    'plugin.json',
    'README.md',
    'LICENSE',
    'CONTRIBUTING.md',
    'assets',
    'data',
    'themes',
    'external',
    'scripts',
    'mcp',
    'prompts',
    'skills',
  ];

  for (const item of copyItems) {
    const src = join(REPO_ROOT, item);
    const dest = join(targetRoot, item);
    if (!existsSync(src)) continue;
    if (
      item === 'plugin.json' ||
      item === 'README.md' ||
      item === 'LICENSE' ||
      item === 'CONTRIBUTING.md'
    ) {
      cpSync(src, dest, { force: true });
    } else {
      copyDirClean(src, dest);
    }
  }

  // Clean up any legacy retired skill/prompt files inside existing plugin installs
  removePathSafe(join(targetRoot, 'skills', LEGACY_REMOVED_SKILL));
  removePathSafe(join(targetRoot, 'prompts', `${LEGACY_REMOVED_SKILL}-prompt.md`));

  // Copy only Antigravity's always-on AGENTS.md rule (exclude IDE-specific rules)
  const rulesDir = join(targetRoot, 'rules');
  mkdirSync(rulesDir, { recursive: true });
  cpSync(join(REPO_ROOT, 'rules', 'AGENTS.md'), join(rulesDir, 'AGENTS.md'), { force: true });

  // Write machine-resolved mcp_config.json for reliable Antigravity Language Server startup
  const mcpServerAbs = toForwardSlashes(join(targetRoot, 'mcp', 'server.mjs'));
  const mcpConfig = {
    mcpServers: {
      'unvibe-mcp': {
        command: process.execPath,
        args: [mcpServerAbs],
      },
    },
  };
  writeFileSync(join(targetRoot, 'mcp_config.json'), `${JSON.stringify(mcpConfig, null, 2)}\n`, 'utf8');

  console.log(`Installed Unvibe plugin for Antigravity at: ${targetRoot}`);
  console.log(`MCP server registered: ${process.execPath} ${mcpServerAbs}`);
}

function installClaude() {
  const claudeSkillsDir = join(homedir(), '.claude', 'skills');
  installSkillsTo(claudeSkillsDir);

  const serverPath = toForwardSlashes(join(REPO_ROOT, 'mcp', 'server.mjs'));
  console.log(`Installed skills (unvibe, redline) into: ${claudeSkillsDir}`);
  console.log('\nAdd this to your project .mcp.json or Claude Code MCP config:');
  console.log(
    JSON.stringify(
      {
        mcpServers: {
          'unvibe-mcp': {
            command: process.execPath,
            args: [serverPath],
          },
        },
      },
      null,
      2
    )
  );
}

function installCodex() {
  const codexSkillsDir = join(homedir(), '.agents', 'skills');
  installSkillsTo(codexSkillsDir);

  const serverPath = toForwardSlashes(join(REPO_ROOT, 'mcp', 'server.mjs'));
  console.log(`Installed skills (unvibe, redline + openai.yaml) into: ${codexSkillsDir}`);
  console.log('\nRegister MCP server in Codex CLI (~/.codex/config.toml):');
  console.log(`[mcp_servers.unvibe-mcp]\ncommand = "${toForwardSlashes(process.execPath)}"\nargs = ["${serverPath}"]`);
}

function installOpenCode() {
  const openCodeSkillsDir = join(homedir(), '.config', 'opencode', 'skills');
  installSkillsTo(openCodeSkillsDir);

  const serverPath = toForwardSlashes(join(REPO_ROOT, 'mcp', 'server.mjs'));
  console.log(`Installed skills (unvibe, redline) into: ${openCodeSkillsDir}`);
  console.log('\nAdd this to opencode.json under "mcp":');
  console.log(
    JSON.stringify(
      {
        'unvibe-mcp': {
          type: 'local',
          command: [process.execPath, serverPath],
          enabled: true,
        },
      },
      null,
      2
    )
  );
}

function installCursorProject(projectDir) {
  if (!projectDir) {
    throw new Error('--project <dir> is required for --target cursor');
  }
  const absProject = resolve(projectDir);
  const rulesDest = join(absProject, '.cursor', 'rules', 'unvibe.mdc');
  mkdirSync(dirname(rulesDest), { recursive: true });
  cpSync(join(REPO_ROOT, 'rules', 'cursor-unvibe.mdc'), rulesDest, { force: true });

  const mcpDest = join(absProject, '.cursor', 'mcp.json');
  const serverPath = toForwardSlashes(join(REPO_ROOT, 'mcp', 'server.mjs'));
  const merged = mergeJsonMcp(mcpDest, 'mcpServers', {
    command: process.execPath,
    args: [serverPath],
  });

  console.log(`Installed Cursor rule at: ${rulesDest}`);
  if (merged) console.log(`Updated Cursor MCP config at: ${mcpDest}`);
}

function installWindsurfProject(projectDir) {
  if (!projectDir) {
    throw new Error('--project <dir> is required for --target windsurf');
  }
  const absProject = resolve(projectDir);
  const rulesDest = join(absProject, '.windsurf', 'rules', 'unvibe.md');
  mkdirSync(dirname(rulesDest), { recursive: true });
  cpSync(join(REPO_ROOT, 'rules', 'windsurf-unvibe.md'), rulesDest, { force: true });

  const serverPath = toForwardSlashes(join(REPO_ROOT, 'mcp', 'server.mjs'));
  console.log(`Installed Windsurf rule at: ${rulesDest}`);
  console.log('\nAdd this to ~/.codeium/windsurf/mcp_config.json:');
  console.log(
    JSON.stringify(
      {
        mcpServers: {
          'unvibe-mcp': {
            command: process.execPath,
            args: [serverPath],
          },
        },
      },
      null,
      2
    )
  );
}

function installCopilotProject(projectDir) {
  if (!projectDir) {
    throw new Error('--project <dir> is required for --target copilot');
  }
  const absProject = resolve(projectDir);
  const instDest = join(absProject, '.github', 'instructions', 'unvibe.instructions.md');
  mkdirSync(dirname(instDest), { recursive: true });
  cpSync(join(REPO_ROOT, 'rules', 'copilot-unvibe.instructions.md'), instDest, { force: true });

  const mcpDest = join(absProject, '.vscode', 'mcp.json');
  const serverPath = toForwardSlashes(join(REPO_ROOT, 'mcp', 'server.mjs'));
  const merged = mergeJsonMcp(mcpDest, 'servers', {
    type: 'stdio',
    command: process.execPath,
    args: [serverPath],
  });

  console.log(`Installed GitHub Copilot instructions at: ${instDest}`);
  if (merged) console.log(`Updated VS Code MCP config at: ${mcpDest}`);
}

function exportTheme(themeId, destDir) {
  const theme = getTheme(themeId);
  const absDest = resolve(destDir || process.cwd());
  mkdirSync(absDest, { recursive: true });

  const designMd = generateDesignMd(theme);
  const css = generateTokens({ themeId: theme.id, format: 'css', mode: 'both' }).content;

  writeFileSync(join(absDest, 'DESIGN.md'), designMd, 'utf8');
  writeFileSync(join(absDest, 'tokens.css'), css, 'utf8');

  console.log(`Exported theme "${theme.id}" -> DESIGN.md + tokens.css in: ${absDest}`);
}

function main() {
  const flags = parseArgs(process.argv.slice(2));

  if (flags['list-targets']) {
    console.log('Supported install targets:\n');
    for (const t of TARGET_LIST) {
      console.log(`- ${t.target.padEnd(12)} | ${t.scope.padEnd(28)} | ${t.dest}`);
    }
    return;
  }

  if (flags.help || flags.h) {
    console.log(`Unvibe Multi-Agent Installer

Usage:
  node scripts/install.mjs --list-targets
  node scripts/install.mjs --target antigravity
  node scripts/install.mjs --target claude
  node scripts/install.mjs --target codex
  node scripts/install.mjs --target opencode
  node scripts/install.mjs --target cursor --project <path>
  node scripts/install.mjs --target windsurf --project <path>
  node scripts/install.mjs --target copilot --project <path>
  node scripts/install.mjs --export-theme <theme-id> --to <project-dir>
`);
    process.exit(0);
  }

  if (flags['export-theme']) {
    exportTheme(flags['export-theme'], flags.to);
    return;
  }

  const target = String(flags.target || 'antigravity').trim().toLowerCase();
  switch (target) {
    case 'antigravity':
      installAntigravity();
      break;
    case 'claude':
      installClaude();
      break;
    case 'codex':
      installCodex();
      break;
    case 'opencode':
      installOpenCode();
      break;
    case 'cursor':
    case 'cursor-project':
      installCursorProject(flags.project);
      break;
    case 'windsurf':
      installWindsurfProject(flags.project);
      break;
    case 'copilot':
      installCopilotProject(flags.project);
      break;
    default:
      throw new Error(
        `Unknown install target "${target}". Run --list-targets to see supported targets.`
      );
  }
}

try {
  main();
} catch (err) {
  console.error(`Install error: ${err.message}`);
  process.exit(1);
}
