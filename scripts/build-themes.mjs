#!/usr/bin/env node
/**
 * Generates standalone DESIGN.md + tokens.css folders for all 24 Unvibe themes
 * AND flat external-ready <theme-id>.DESIGN.md files under external/design-md/.
 * Zero dependencies.
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateDesignMd, generateTokens, loadThemes } from './themes-engine.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const THEMES_DIR = join(ROOT, 'themes');
const EXTERNAL_DIR = join(ROOT, 'external');
const EXTERNAL_DESIGN_MD_DIR = join(EXTERNAL_DIR, 'design-md');

function main() {
  const { packs, themes } = loadThemes();
  mkdirSync(THEMES_DIR, { recursive: true });
  mkdirSync(EXTERNAL_DESIGN_MD_DIR, { recursive: true });

  let writtenFiles = 0;

  for (const theme of themes) {
    const themeDir = join(THEMES_DIR, theme.pack, theme.id);
    mkdirSync(themeDir, { recursive: true });

    const designMd = generateDesignMd(theme);
    const cssTokens = generateTokens({ themeId: theme.id, format: 'css', mode: 'both' }).content;

    writeFileSync(join(themeDir, 'DESIGN.md'), designMd, 'utf8');
    writeFileSync(join(themeDir, 'tokens.css'), cssTokens, 'utf8');
    writeFileSync(join(EXTERNAL_DESIGN_MD_DIR, `${theme.id}.DESIGN.md`), designMd, 'utf8');
    writtenFiles += 3;
  }

  // 1. Build themes/README.md
  const themeSections = [];
  themeSections.push('# Unvibe Theme Packs (24 Standalone `DESIGN.md` + `tokens.css` Themes)\n');
  themeSections.push(
    'Every folder below contains a complete, self-contained `DESIGN.md` (with YAML token frontmatter, contrast matrix, interactive states, responsive breakpoints, and CSS variables) alongside `tokens.css`.\n'
  );

  for (const pack of packs) {
    const packThemes = themes.filter((t) => t.pack === pack.id);
    themeSections.push(`## ${pack.name} (\`${pack.id}\`, ${packThemes.length} themes)\n`);
    themeSections.push(`${pack.description}\n`);
    themeSections.push('| Theme | Files | Default Mode | Accents (Light / Dark) | Best For |');
    themeSections.push('| :--- | :--- | :--- | :--- | :--- |');
    for (const t of packThemes) {
      const relMd = `./${t.pack}/${t.id}/DESIGN.md`;
      const relCss = `./${t.pack}/${t.id}/tokens.css`;
      themeSections.push(
        `| **${t.name}** (\`${t.id}\`) | [DESIGN.md](${relMd}) · [tokens.css](${relCss}) | \`${t.defaultMode}\` | \`${t.light.accent}\` / \`${t.dark.accent}\` | ${t.bestFor.slice(0, 3).join(', ')} |`
      );
    }
    themeSections.push('');
  }

  writeFileSync(join(THEMES_DIR, 'README.md'), themeSections.join('\n'), 'utf8');
  writtenFiles += 1;

  // 2. Build external/README.md
  const extSections = [];
  extSections.push('# Unvibe — External AI Agent & Web Chatbot Drop-In Pack (UI/UX & Themes Only)\n');
  extSections.push(
    'Use this folder when working outside Antigravity—in any external AI coding agent, IDE custom instruction box, or web chatbot. Every file here focuses **exclusively on UI/UX, visual design, layout, accessibility, and theming**.\n'
  );
  extSections.push('## Quick Start\n');
  extSections.push('1. **One-File External Skill:** Upload or paste [UNVIBE-SKILL.md](./UNVIBE-SKILL.md) into your external agent or chatbot custom instructions.');
  extSections.push('2. **Pick One Theme Spec:** Attach or paste any single file from `design-md/<theme-id>.DESIGN.md` below (or copy it to your project root as `DESIGN.md`).');
  extSections.push('3. **Optional Prompt Wrappers:** Use [chatbot-system-prompt.md](../prompts/chatbot-system-prompt.md) for new UI or [redline-prompt.md](../prompts/redline-prompt.md) to clean up existing UI code.\n');

  extSections.push('## All 24 Standalone External `.DESIGN.md` Files\n');
  for (const pack of packs) {
    const packThemes = themes.filter((t) => t.pack === pack.id);
    extSections.push(`### ${pack.name} (\`${pack.id}\`)\n`);
    extSections.push('| Theme | External `.DESIGN.md` File | Default | Light / Dark Accents | Best For |');
    extSections.push('| :--- | :--- | :--- | :--- | :--- |');
    for (const t of packThemes) {
      extSections.push(
        `| **${t.name}** | [${t.id}.DESIGN.md](./design-md/${t.id}.DESIGN.md) | \`${t.defaultMode}\` | \`${t.light.accent}\` / \`${t.dark.accent}\` | ${t.bestFor.slice(0, 3).join(', ')} |`
      );
    }
    extSections.push('');
  }

  writeFileSync(join(EXTERNAL_DIR, 'README.md'), extSections.join('\n'), 'utf8');
  writtenFiles += 1;

  console.log(
    `Generated ${themes.length} themes (${writtenFiles - 2} files across themes/ & external/design-md/) + themes/README.md + external/README.md.`
  );
}

main();
