#!/usr/bin/env node
/**
 * Automated verification suite for the unvibe repository/plugin:
 * 1. Theme schema, pack counts (24 themes across 6 packs), and dual-mode WCAG contrast across all 48 palettes
 * 2. On-disk per-theme themes/<pack>/<id>/DESIGN.md + tokens.css + external/design-md/<id>.DESIGN.md checks
 * 3. Structured Redline reference suite (6 guides + SKILL.md + openai.yaml) + external/UNVIBE-SKILL.md
 * 4. Trademark cleanliness, zero forbidden external/legacy names across the entire tree
 * 5. Static AI-slop linter accuracy on slopped vs clean craft fixtures
 * 6. End-to-end MCP stdio server initialization (unvibe-mcp) and invocation of all 7 tools
 * 7. Multi-agent repo artifacts, assets/banner.svg, + before/after example HTML validation (when running in repo root)
 */

import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { evaluateContrast } from './contrast.mjs';
import { auditCode } from './linter.mjs';
import { generateTokens, loadThemes } from './themes-engine.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const EXPECTED_PACKS = {
  'everyday-apps': 6,
  professional: 4,
  modern: 4,
  premium: 4,
  vintage: 4,
  cool: 2,
};

const TRADEMARK_RE =
  /\b(instagram|chatgpt|openai|claude|anthropic|linkedin|google|apple|linear|stripe|notion|vercel|airbnb|pinterest|spotify|facebook|meta|twitter|material)\b/gi;

const STALE_NAME_RE =
  /\b(ui-craft|ui-craft-mcp|UI-CRAFT-SKILL|UI Craft|kanso-ui|kanso-ui-mcp|KANSO-UI-SKILL|Kanso UI)\b/;

// Built from concatenated segments so verify.mjs contains zero literal forbidden matches.
const FORBIDDEN_REF_RE = new RegExp(
  [
    '\\b(?:' +
      [
        'un' + 'slop',
        'hey' + 'damir',
        'sokol' + 'ovsky',
        'impec' + 'cable',
        'hall' + 'mark',
        'awesome-' + 'design-md',
        'ui-ux-' + 'pro-max',
        'web-interface-' + 'guidelines',
        'pba' + 'kaus',
        'nut' + 'lope',
        'volt' + 'agent',
        'nextlevel' + 'builder',
      ].join('|') +
      ')\\b',
    'CC BY ' + '4\\.0',
    'CC-BY-' + '4\\.0',
  ].join('|'),
  'i'
);

const BINARY_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.zip']);

function collectTextFiles(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      collectTextFiles(full, out);
    } else if (entry.isFile() && !BINARY_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

function checkTrademarks(label, text, allowGoogleFontsUrl = false) {
  let clean = text;
  if (allowGoogleFontsUrl) {
    clean = clean.replace(/https:\/\/fonts\.googleapis\.com[^\s"'`]*/g, '');
  }
  const matches = clean.match(TRADEMARK_RE);
  if (matches && matches.length > 0) {
    throw new Error(`Trademark violation in ${label}: ${Array.from(new Set(matches)).join(', ')}`);
  }
}

function checkNoStaleNames(relPath) {
  const full = join(ROOT, relPath);
  const text = readFileSync(full, 'utf8');
  const m = text.match(STALE_NAME_RE);
  if (m) {
    throw new Error(`Stale legacy name "${m[0]}" found in ${relPath}`);
  }
}

async function runMcpE2eTest() {
  const serverPath = join(ROOT, 'mcp', 'server.mjs');
  const child = spawn(process.execPath, [serverPath], {
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  let stdoutBuf = '';
  let stderrBuf = '';
  const pending = new Map();

  child.stderr.on('data', (chunk) => {
    stderrBuf += chunk.toString('utf8');
  });

  child.stdout.on('data', (chunk) => {
    stdoutBuf += chunk.toString('utf8');
    let nlIdx;
    while ((nlIdx = stdoutBuf.indexOf('\n')) !== -1) {
      const line = stdoutBuf.slice(0, nlIdx).trim();
      stdoutBuf = stdoutBuf.slice(nlIdx + 1);
      if (!line) continue;
      const msg = JSON.parse(line);
      if (msg.id !== undefined && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(new Error(`RPC ${msg.id} error: ${JSON.stringify(msg.error)}`));
        else resolve(msg.result);
      }
    }
  });

  const rpc = (id, method, params = {}) =>
    new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject });
      child.stdin.write(`${JSON.stringify({ jsonrpc: '2.0', id, method, params })}\n`);
    });

  const notify = (method, params = {}) => {
    child.stdin.write(`${JSON.stringify({ jsonrpc: '2.0', method, params })}\n`);
  };

  try {
    const init = await rpc(1, 'initialize', {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'verify-suite', version: '1.0.0' },
    });
    assert.equal(init.serverInfo.name, 'unvibe-mcp');
    notify('notifications/initialized');

    const ping = await rpc(2, 'ping');
    assert.deepEqual(ping, {});

    const listRes = await rpc(3, 'tools/list');
    assert.equal(listRes.tools.length, 7, 'Expected exactly 7 MCP tools');
    const toolNames = listRes.tools.map((t) => t.name).sort();
    assert.deepEqual(toolNames, [
      'audit_slop',
      'check_contrast',
      'generate_tokens',
      'get_checklist',
      'get_theme',
      'list_themes',
      'recommend_themes',
    ]);

    const t1 = await rpc(4, 'tools/call', {
      name: 'list_themes',
      arguments: { pack: 'vintage' },
    });
    assert.notEqual(t1.isError, true);
    assert.equal(JSON.parse(t1.content[0].text).total, 4);

    const t2 = await rpc(5, 'tools/call', {
      name: 'get_theme',
      arguments: { themeId: 'graphite-studio' },
    });
    assert.notEqual(t2.isError, true);
    assert.ok(JSON.parse(t2.content[0].text).designMdPreview.includes('# DESIGN.md'));

    const t3 = await rpc(6, 'tools/call', {
      name: 'recommend_themes',
      arguments: {
        projectDescription: 'warm editorial writing assistant with parchment paper',
        surfaceMode: 'read',
        preferredMode: 'light',
      },
    });
    assert.notEqual(t3.isError, true);
    const recs = JSON.parse(t3.content[0].text).recommendations;
    assert.equal(recs.length, 3);
    assert.equal(recs[0].id, 'parchment-editorial');

    for (const [idx, fmt] of ['css', 'tailwind-v4', 'design-md'].entries()) {
      const t4 = await rpc(7 + idx, 'tools/call', {
        name: 'generate_tokens',
        arguments: { themeId: 'command-precision', format: fmt },
      });
      assert.notEqual(t4.isError, true);
      assert.ok(JSON.parse(t4.content[0].text).content.length > 100);
    }

    const t5 = await rpc(10, 'tools/call', {
      name: 'audit_slop',
      arguments: {
        code: '<div onClick={fn} className="bg-gradient-to-r from-purple-600 to-blue-500 transition-all">Welcome back! ✨</div>',
        filename: 'Bad.tsx',
      },
    });
    assert.notEqual(t5.isError, true);
    const audit = JSON.parse(t5.content[0].text);
    assert.ok(audit.summary.totalIssues >= 4);

    const t6 = await rpc(11, 'tools/call', {
      name: 'check_contrast',
      arguments: { foreground: '#999999', background: '#FFFFFF' },
    });
    assert.notEqual(t6.isError, true);
    const contrast = JSON.parse(t6.content[0].text);
    assert.equal(contrast.wcagAA, false);
    assert.ok(contrast.suggestedFix);

    const t7 = await rpc(12, 'tools/call', {
      name: 'get_checklist',
      arguments: { workflow: 'redline' },
    });
    assert.notEqual(t7.isError, true);
    assert.ok(JSON.parse(t7.content[0].text).steps.length >= 10);

    assert.equal(stderrBuf.trim(), '', `Unexpected MCP stderr: ${stderrBuf}`);
  } finally {
    child.stdin.end();
    child.kill();
  }
}

async function main() {
  console.log('1. Checking theme counts, schema, and dual-mode contrast across all 48 palettes...');
  const data = loadThemes();
  assert.equal(data.themes.length, 24, `Expected 24 themes, got ${data.themes.length}`);

  const packCounts = {};
  const contrastFailures = [];
  const requiredPaletteKeys = [
    'bgDeep',
    'bgCanvas',
    'bgCard',
    'bgRaised',
    'textPrimary',
    'textSecondary',
    'textMuted',
    'borderHairline',
    'borderStrong',
    'accent',
    'accentHover',
    'accentInk',
    'accentSoft',
    'focusRing',
    'positive',
    'warning',
    'negative',
  ];

  for (const theme of data.themes) {
    packCounts[theme.pack] = (packCounts[theme.pack] || 0) + 1;

    for (const mode of ['light', 'dark']) {
      const p = theme[mode];
      assert.ok(p, `Missing ${mode} palette on ${theme.id}`);
      for (const key of requiredPaletteKeys) {
        assert.ok(p[key], `Missing ${mode}.${key} on ${theme.id}`);
      }

      const checks = [
        ['textPrimary on bgCanvas', p.textPrimary, p.bgCanvas, 7.0],
        ['textPrimary on bgCard', p.textPrimary, p.bgCard, 7.0],
        ['textPrimary on bgRaised', p.textPrimary, p.bgRaised, 4.5],
        ['textSecondary on bgCanvas', p.textSecondary, p.bgCanvas, 4.5],
        ['textSecondary on bgCard', p.textSecondary, p.bgCard, 4.5],
        ['textMuted on bgCanvas', p.textMuted, p.bgCanvas, 4.5],
        ['textMuted on bgCard', p.textMuted, p.bgCard, 4.5],
        ['accentInk on accent', p.accentInk, p.accent, 4.5],
      ];

      for (const [label, fg, bg, minRatio] of checks) {
        const res = evaluateContrast(fg, bg);
        if (res.wcagRatio < minRatio) {
          contrastFailures.push({
            theme: theme.id,
            mode,
            pair: label,
            fg,
            bg,
            ratio: res.wcagRatio,
            minRatio,
            suggestedFix: res.suggestedFix,
          });
        }
      }
    }
  }

  assert.deepEqual(packCounts, EXPECTED_PACKS, `Pack counts mismatch: ${JSON.stringify(packCounts)}`);
  if (contrastFailures.length > 0) {
    console.error('Contrast failures detected:');
    console.table(contrastFailures);
    process.exit(1);
  }
  console.log('   PASS: 24/24 themes and 48/48 palettes passed all 384 WCAG contrast checks.');

  console.log('2. Checking on-disk themes/, external/design-md/, external/UNVIBE-SKILL.md, and trademarks...');
  const themesReadmePath = join(ROOT, 'themes', 'README.md');
  assert.ok(existsSync(themesReadmePath), 'Missing themes/README.md (run scripts/build-themes.mjs)');
  const themesReadmeText = readFileSync(themesReadmePath, 'utf8');
  checkTrademarks('themes/README.md', themesReadmeText, true);

  const extSkillPath = join(ROOT, 'external', 'UNVIBE-SKILL.md');
  const extReadmePath = join(ROOT, 'external', 'README.md');
  assert.ok(existsSync(extSkillPath), 'Missing external/UNVIBE-SKILL.md');
  assert.ok(existsSync(extReadmePath), 'Missing external/README.md');
  const extSkillText = readFileSync(extSkillPath, 'utf8');
  const extReadmeText = readFileSync(extReadmePath, 'utf8');
  assert.ok(extSkillText.includes('STRICT SCOPE — UI/UX & THEMES ONLY'), 'external/UNVIBE-SKILL.md missing strict UI/UX scope');
  checkTrademarks('external/UNVIBE-SKILL.md', extSkillText, true);
  checkTrademarks('external/README.md', extReadmeText, true);

  const rawThemesJson = readFileSync(join(ROOT, 'data', 'themes.json'), 'utf8');
  checkTrademarks('data/themes.json', rawThemesJson, true);
  const catalogMd = readFileSync(join(ROOT, 'skills', 'unvibe', 'references', 'theme-catalog.md'), 'utf8');
  checkTrademarks('theme-catalog.md', catalogMd, false);

  for (const theme of data.themes) {
    const mdPath = join(ROOT, 'themes', theme.pack, theme.id, 'DESIGN.md');
    const cssPath = join(ROOT, 'themes', theme.pack, theme.id, 'tokens.css');
    const extMdPath = join(ROOT, 'external', 'design-md', `${theme.id}.DESIGN.md`);
    assert.ok(existsSync(mdPath), `Missing on-disk DESIGN.md for ${theme.id}`);
    assert.ok(existsSync(cssPath), `Missing on-disk tokens.css for ${theme.id}`);
    assert.ok(existsSync(extMdPath), `Missing flat external DESIGN.md for ${theme.id}`);
    assert.ok(themesReadmeText.includes(theme.id), `themes/README.md missing link to ${theme.id}`);
    assert.ok(extReadmeText.includes(`${theme.id}.DESIGN.md`), `external/README.md missing link to ${theme.id}.DESIGN.md`);

    const mdText = readFileSync(mdPath, 'utf8');
    const extMdText = readFileSync(extMdPath, 'utf8');
    assert.equal(extMdText, mdText, `Mismatch between themes/.../DESIGN.md and external/design-md/${theme.id}.DESIGN.md`);
    assert.ok(mdText.includes('schema: unvibe-design-md/v1'), `DESIGN.md missing YAML schema header: ${theme.id}`);
    assert.ok(mdText.includes('UI/UX & Visual Theming Only'), `DESIGN.md missing UI/UX-only scope: ${theme.id}`);
    assert.ok(mdText.includes('Verified Contrast Matrix'), `DESIGN.md missing contrast matrix: ${theme.id}`);
    assert.ok(mdText.includes('Interactive State Matrix'), `DESIGN.md missing interactive states: ${theme.id}`);
    assert.ok(mdText.includes('Responsive Breakpoints'), `DESIGN.md missing responsive breakpoints: ${theme.id}`);
    assert.ok(mdText.includes(':root {'), `DESIGN.md missing CSS tokens snippet: ${theme.id}`);
    checkTrademarks(`themes/${theme.pack}/${theme.id}/DESIGN.md`, mdText, true);

    const gen = generateTokens({ themeId: theme.id, format: 'design-md' });
    checkTrademarks(`generated DESIGN.md (${theme.id})`, gen.content, true);
  }
  console.log('   PASS: All 24 DESIGN.md, tokens.css, flat external .DESIGN.md, and UNVIBE-SKILL.md verified with zero trademarks.');

  console.log('3. Checking structured Redline reference suite, openai.yaml metadata & zero forbidden/stale references...');
  assert.ok(existsSync(join(ROOT, 'skills', 'unvibe', 'SKILL.md')), 'Missing skills/unvibe/SKILL.md');
  assert.ok(existsSync(join(ROOT, 'skills', 'unvibe', 'agents', 'openai.yaml')), 'Missing skills/unvibe/agents/openai.yaml');
  assert.ok(existsSync(join(ROOT, 'skills', 'redline', 'agents', 'openai.yaml')), 'Missing skills/redline/agents/openai.yaml');
  assert.ok(existsSync(join(ROOT, 'prompts', 'redline-prompt.md')), 'Missing prompts/redline-prompt.md');
  assert.ok(existsSync(join(ROOT, 'assets', 'banner.svg')), 'Missing assets/banner.svg');
  assert.ok(existsSync(join(ROOT, 'assets', 'logo.svg')), 'Missing assets/logo.svg');
  for (const svgAsset of ['before-after-preview.svg', 'theme-swatches.svg', 'contrast-coverage.svg']) {
    const svgPath = join(ROOT, 'assets', svgAsset);
    assert.ok(existsSync(svgPath), `Missing assets/${svgAsset}`);
    assert.ok(readFileSync(svgPath, 'utf8').trimStart().startsWith('<svg'), `Invalid SVG header in assets/${svgAsset}`);
  }

  const legacyRetiredSkill = 'un' + 'slop';
  assert.ok(!existsSync(join(ROOT, 'skills', legacyRetiredSkill, 'SKILL.md')), 'Retired legacy skill SKILL.md should not exist');
  assert.ok(!existsSync(join(ROOT, 'prompts', `${legacyRetiredSkill}-prompt.md`)), 'Retired legacy prompt file should not exist');

  const redlineRefs = [
    'README.md',
    'audit-matrix.md',
    'stages.md',
    'baseline-tokens.md',
    'media-and-surfaces.md',
    'i18n-rtl.md',
  ];
  const redlineSkillText = readFileSync(join(ROOT, 'skills', 'redline', 'SKILL.md'), 'utf8');
  assert.ok(redlineSkillText.includes('license: MIT'), 'skills/redline/SKILL.md must declare MIT license');
  for (const rf of redlineRefs) {
    const p = join(ROOT, 'skills', 'redline', 'references', rf);
    assert.ok(existsSync(p), `Missing structured Redline reference: skills/redline/references/${rf}`);
  }

  const requiredStaleCheck = [
    'plugin.json',
    'mcp_config.json',
    'LICENSE',
    'rules/AGENTS.md',
    'skills/unvibe/SKILL.md',
    'skills/unvibe/agents/openai.yaml',
    'skills/unvibe/references/craft-floor.md',
    'skills/unvibe/references/theme-catalog.md',
    'skills/redline/SKILL.md',
    'skills/redline/agents/openai.yaml',
    'skills/redline/references/README.md',
    'skills/redline/references/stages.md',
    'skills/redline/references/baseline-tokens.md',
    'external/UNVIBE-SKILL.md',
    'external/README.md',
    'mcp/server.mjs',
  ];
  const repoOnlyStaleCheck = [
    'package.json',
    '.mcp.json',
    '.vscode/mcp.json',
    'gemini-extension.json',
    'AGENTS.md',
    'README.md',
    'CITATION.cff',
    '.claude-plugin/plugin.json',
    '.claude-plugin/marketplace.json',
    'rules/cursor-unvibe.mdc',
    'rules/windsurf-unvibe.md',
    'rules/copilot-unvibe.instructions.md',
    'docs/AGENT-SETUP.md',
  ];
  for (const rel of requiredStaleCheck) {
    checkNoStaleNames(rel);
  }
  for (const rel of repoOnlyStaleCheck) {
    if (existsSync(join(ROOT, rel))) {
      checkNoStaleNames(rel);
    }
  }

  const forbiddenHits = [];
  for (const absPath of collectTextFiles(ROOT)) {
    const text = readFileSync(absPath, 'utf8');
    const match = text.match(FORBIDDEN_REF_RE);
    if (match) {
      forbiddenHits.push(`${absPath}: matched "${match[0]}"`);
    }
  }
  assert.equal(forbiddenHits.length, 0, `Forbidden third-party/legacy references detected:\n${forbiddenHits.join('\n')}`);
  console.log('   PASS: Structured Redline references, openai.yaml files, MIT license & zero forbidden/stale references verified.');

  console.log('4. Checking AI-slop linter accuracy...');
  const sloppedFixture = `
<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
  <style>
    html, body { overflow-x: hidden; background: #0f0f15; }
    .hero-btn { transition: all 0.3s ease; outline: none; width: 100vw; }
    .eyebrow { text-transform: uppercase; letter-spacing: 0.2em; }
    @keyframes floaty { from { transform: translateY(0); } to { transform: translateY(6px); } }
  </style>
</head>
<body>
  <div class="bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_25px_rgba(139,92,246,0.6)]">
    <span class="uppercase tracking-widest">Introducing Acme 2.0 ✨</span>
    <h1 class="bg-clip-text text-transparent font-black">Welcome back, Alex! 👋</h1>
    <p>Supercharge your AI-powered workflow today!! Trusted by 10,000+ teams for $123,456.</p>
    <div onClick="openModal()" class="mt-[13px] animate-pulse transition-all outline-none">Get Started 🚀</div>
    <input type="text" class="text-xs" placeholder="Search anything..." />
  </div>
</body>
</html>`;

  const slopRes = auditCode({ code: sloppedFixture, filename: 'slop-test.html' });
  const distinctRules = new Set(slopRes.findings.map((f) => f.ruleId));
  assert.ok(distinctRules.size >= 12, `Expected >=12 distinct rules, got ${distinctRules.size}: ${[...distinctRules].join(', ')}`);
  assert.ok(slopRes.summary.p0Blockers >= 3, `Expected >=3 P0 blockers, got ${slopRes.summary.p0Blockers}`);

  const cleanTokens = generateTokens({ themeId: 'graphite-studio', format: 'css' }).content;
  const cleanFixture = `<!doctype html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>${cleanTokens}</style>
</head>
<body>
  <main class="max-w-6xl mx-auto p-6">
    <h1 class="text-3xl font-medium">October 2026 ledger</h1>
    <p>Monthly recurring revenue reached $48,210 (+12% vs last month).</p>
    <button type="button" class="px-4 py-2 transition-colors focus-visible:outline-2">Export report</button>
    <label for="search-input">Filter</label>
    <input id="search-input" type="search" class="text-base md:text-sm" placeholder="Search" />
  </main>
</body>
</html>`;
  const cleanRes = auditCode({ code: cleanFixture, filename: 'clean-test.html' });
  assert.equal(cleanRes.summary.p0Blockers, 0, `Clean fixture had P0 blockers: ${JSON.stringify(cleanRes.findings)}`);
  assert.equal(cleanRes.summary.p1Slop, 0, `Clean fixture had P1 slop: ${JSON.stringify(cleanRes.findings)}`);
  console.log(`   PASS: Linter detected ${distinctRules.size} distinct slop rules (${slopRes.summary.p0Blockers} P0) and scored clean craft fixture ${cleanRes.summary.score}/100 (Grade ${cleanRes.summary.grade}).`);

  console.log('5. Running end-to-end MCP stdio server test across all 7 tools...');
  await runMcpE2eTest();
  console.log('   PASS: MCP stdio server (unvibe-mcp) initialized cleanly and executed all 7 tools.');

  if (existsSync(join(ROOT, 'package.json'))) {
    console.log('6. Checking multi-agent repo artifacts & before/after visual examples...');
    const requiredRepoFiles = [
      'gemini-extension.json',
      'AGENTS.md',
      'CHANGELOG.md',
      'SECURITY.md',
      'CODE_OF_CONDUCT.md',
      'CITATION.cff',
      'docs/AGENT-SETUP.md',
      '.vscode/mcp.json',
      'rules/windsurf-unvibe.md',
      'rules/copilot-unvibe.instructions.md',
      '.github/workflows/verify.yml',
      '.github/pull_request_template.md',
      '.github/ISSUE_TEMPLATE/bug_report.yml',
      '.github/ISSUE_TEMPLATE/new_theme.yml',
      '.github/ISSUE_TEMPLATE/linter_rule.yml',
      '.github/ISSUE_TEMPLATE/config.yml',
      'examples/before-slop.html',
      'examples/after-unvibe.html',
    ];
    for (const rel of requiredRepoFiles) {
      assert.ok(existsSync(join(ROOT, rel)), `Missing repo artifact: ${rel}`);
    }
    for (const jsonRel of ['gemini-extension.json', '.vscode/mcp.json', '.mcp.json', '.claude-plugin/plugin.json', '.claude-plugin/marketplace.json', 'package.json']) {
      JSON.parse(readFileSync(join(ROOT, jsonRel), 'utf8'));
    }

    const beforeAudit = auditCode({ path: join(ROOT, 'examples', 'before-slop.html') });
    assert.equal(beforeAudit.summary.grade, 'F', `Expected before-slop.html Grade F, got ${beforeAudit.summary.grade}`);
    assert.ok(beforeAudit.summary.totalIssues >= 10, `Expected >=10 issues on before-slop.html, got ${beforeAudit.summary.totalIssues}`);
    assert.ok(beforeAudit.summary.p0Blockers >= 3, `Expected >=3 P0 blockers on before-slop.html, got ${beforeAudit.summary.p0Blockers}`);

    const afterAudit = auditCode({ path: join(ROOT, 'examples', 'after-unvibe.html') });
    assert.equal(afterAudit.summary.grade, 'A', `Expected after-unvibe.html Grade A, got ${afterAudit.summary.grade}: ${JSON.stringify(afterAudit.findings)}`);
    assert.equal(afterAudit.summary.score, 100, `Expected after-unvibe.html score 100, got ${afterAudit.summary.score}`);
    assert.equal(afterAudit.summary.p0Blockers, 0, `Expected 0 P0 blockers on after-unvibe.html`);
    assert.equal(afterAudit.summary.p1Slop, 0, `Expected 0 P1 slop on after-unvibe.html`);
    assert.equal(afterAudit.summary.p2Polish, 0, `Expected 0 P2 polish on after-unvibe.html`);

    console.log(
      `   PASS: Multi-agent configs valid; examples/before-slop.html=${beforeAudit.summary.score}/100 (Grade ${beforeAudit.summary.grade}, ${beforeAudit.summary.totalIssues} issues) -> examples/after-unvibe.html=${afterAudit.summary.score}/100 (Grade ${afterAudit.summary.grade}).`
    );
  }

  console.log('\nALL VERIFICATION CHECKS PASSED.');
}

main().catch((err) => {
  console.error('\nVERIFICATION FAILED:', err);
  process.exit(1);
});
