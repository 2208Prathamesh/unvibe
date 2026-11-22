#!/usr/bin/env node
/**
 * Zero-dependency CLI wrapper for Unvibe themes, token generation, theme export, contrast checks, and slop linting.
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { evaluateContrast } from './contrast.mjs';
import { auditCode } from './linter.mjs';
import {
  generateDesignMd,
  generateTokens,
  getChecklist,
  getTheme,
  listThemes,
  recommendThemes,
} from './themes-engine.mjs';

function printHelp() {
  console.log(`unvibe CLI

Usage:
  node cli.mjs list [--pack <pack>] [--mode light|dark] [--surface <mode>] [--search <query>]
  node cli.mjs get <theme-id>
  node cli.mjs recommend "<project description>" [--mode light|dark] [--surface <mode>] [--pack <pack>]
  node cli.mjs generate <theme-id> [--format css|tailwind-v4|tailwind-v3|design-md] [--mode both|light|dark]
  node cli.mjs export <theme-id> <dest-dir>
  node cli.mjs audit <file-or-directory>
  node cli.mjs contrast <fg-hex> <bg-hex>
  node cli.mjs checklist <redline|new-build|accessibility|motion|forms|dashboard|landing>
`);
}

function parseArgs(argv) {
  const positional = [];
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
    } else {
      positional.push(token);
    }
  }
  return { positional, flags };
}

try {
  const { positional, flags } = parseArgs(process.argv.slice(2));
  const cmd = positional[0];

  if (!cmd || cmd === 'help' || flags.help) {
    printHelp();
    process.exit(0);
  }

  if (cmd === 'list') {
    const res = listThemes({
      pack: flags.pack,
      defaultMode: flags.mode,
      surfaceMode: flags.surface,
      search: flags.search,
    });
    console.log(JSON.stringify(res, null, 2));
  } else if (cmd === 'get') {
    if (!positional[1]) throw new Error('Missing <theme-id>');
    console.log(JSON.stringify(getTheme(positional[1]), null, 2));
  } else if (cmd === 'recommend') {
    if (!positional[1]) throw new Error('Missing "<project description>"');
    const res = recommendThemes({
      projectDescription: positional[1],
      preferredMode: flags.mode,
      surfaceMode: flags.surface,
      pack: flags.pack,
    });
    console.log(JSON.stringify(res, null, 2));
  } else if (cmd === 'generate') {
    if (!positional[1]) throw new Error('Missing <theme-id>');
    const res = generateTokens({
      themeId: positional[1],
      format: flags.format || 'css',
      mode: flags.mode || 'both',
    });
    if (flags.json) {
      console.log(JSON.stringify(res, null, 2));
    } else {
      console.log(res.content);
    }
  } else if (cmd === 'export') {
    if (!positional[1]) throw new Error('Usage: export <theme-id> <dest-dir>');
    const theme = getTheme(positional[1]);
    const destDir = resolve(positional[2] || process.cwd());
    mkdirSync(destDir, { recursive: true });
    writeFileSync(join(destDir, 'DESIGN.md'), generateDesignMd(theme), 'utf8');
    writeFileSync(
      join(destDir, 'tokens.css'),
      generateTokens({ themeId: theme.id, format: 'css', mode: 'both' }).content,
      'utf8'
    );
    console.log(`Exported ${theme.id} (DESIGN.md + tokens.css) to ${destDir}`);
  } else if (cmd === 'audit') {
    if (!positional[1]) throw new Error('Missing <file-or-directory>');
    const res = auditCode({ path: positional[1] });
    console.log(JSON.stringify(res, null, 2));
    if (res.summary.p0Blockers > 0) process.exitCode = 1;
  } else if (cmd === 'contrast') {
    if (!positional[1] || !positional[2]) throw new Error('Usage: contrast <fg-hex> <bg-hex>');
    console.log(JSON.stringify(evaluateContrast(positional[1], positional[2]), null, 2));
  } else if (cmd === 'checklist') {
    if (!positional[1]) throw new Error('Missing <workflow>');
    console.log(JSON.stringify(getChecklist(positional[1]), null, 2));
  } else {
    throw new Error(`Unknown command "${cmd}". Run with "help" for usage.`);
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
