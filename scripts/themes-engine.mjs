/**
 * Theme catalog, domain-aware recommender, token/DESIGN.md generator, and workflow checklists.
 * Zero dependencies. Strictly scoped to UI/UX and visual theming.
 */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { evaluateContrast } from './contrast.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const THEMES_PATH = join(__dirname, '..', 'data', 'themes.json');

let cachedData = null;

export function loadThemes() {
  if (!cachedData) {
    const raw = readFileSync(THEMES_PATH, 'utf8');
    cachedData = JSON.parse(raw);
  }
  return cachedData;
}

export function listThemes({ pack, defaultMode, surfaceMode, search } = {}) {
  const { packs, themes } = loadThemes();
  let items = themes;

  if (pack) {
    const p = pack.trim().toLowerCase();
    items = items.filter((t) => t.pack === p);
  }
  if (defaultMode) {
    const m = defaultMode.trim().toLowerCase();
    items = items.filter((t) => t.defaultMode === m);
  }
  if (surfaceMode) {
    const sm = surfaceMode.trim().toLowerCase();
    items = items.filter((t) => t.surfaceModes.includes(sm));
  }
  if (search && search.trim()) {
    const q = search.trim().toLowerCase();
    items = items.filter((t) => {
      const hay = [
        t.id,
        t.name,
        t.pack,
        t.tagline,
        t.description,
        ...t.mood,
        ...t.bestFor,
        ...t.keywords,
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }

  return {
    total: items.length,
    packs,
    themes: items.map((t) => ({
      id: t.id,
      name: t.name,
      pack: t.pack,
      defaultMode: t.defaultMode,
      tagline: t.tagline,
      mood: t.mood,
      surfaceModes: t.surfaceModes,
      bestFor: t.bestFor,
      accentLight: t.light.accent,
      accentDark: t.dark.accent,
    })),
  };
}

export function getTheme(themeId) {
  const { themes } = loadThemes();
  const id = String(themeId || '').trim().toLowerCase();
  const found = themes.find((t) => t.id === id);
  if (!found) {
    const validIds = themes.map((t) => t.id).join(', ');
    throw new Error(`Unknown themeId "${themeId}". Valid IDs: ${validIds}`);
  }
  return found;
}

export function recommendThemes({ projectDescription, surfaceMode, preferredMode, pack } = {}) {
  if (!projectDescription || !String(projectDescription).trim()) {
    throw new Error('recommendThemes requires a non-empty "projectDescription".');
  }
  const { themes } = loadThemes();
  const query = String(projectDescription).toLowerCase();
  const tokens = query
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 2);

  const scored = themes.map((theme) => {
    let score = 0;
    const reasons = [];

    if (pack && theme.pack === pack.toLowerCase()) {
      score += 18;
      reasons.push(`matches requested pack "${pack}"`);
    }
    if (preferredMode && theme.defaultMode === preferredMode.toLowerCase()) {
      score += 8;
      reasons.push(`defaults to ${preferredMode} mode`);
    }
    if (surfaceMode && theme.surfaceModes.includes(surfaceMode.toLowerCase())) {
      score += 12;
      reasons.push(`tuned for "${surfaceMode}" surface mode`);
    }

    const matchedKeywords = new Set();
    for (const kw of theme.keywords) {
      if (query.includes(kw.toLowerCase())) {
        score += 9;
        matchedKeywords.add(kw);
      } else {
        for (const tok of tokens) {
          if (kw.includes(tok) || tok.includes(kw)) {
            score += 4;
            matchedKeywords.add(kw);
          }
        }
      }
    }

    for (const domain of theme.bestFor) {
      const dl = domain.toLowerCase();
      if (query.includes(dl)) {
        score += 14;
        reasons.push(`strong fit for ${domain}`);
      } else {
        for (const tok of tokens) {
          if (dl.includes(tok)) {
            score += 5;
          }
        }
      }
    }

    for (const m of theme.mood) {
      if (query.includes(m.toLowerCase())) {
        score += 6;
        reasons.push(`aligns with "${m}" tone`);
      }
    }

    if (matchedKeywords.size > 0) {
      reasons.unshift(`keyword matches: ${Array.from(matchedKeywords).slice(0, 5).join(', ')}`);
    }

    const activePalette = preferredMode === 'light' || preferredMode === 'dark'
      ? theme[preferredMode]
      : theme[theme.defaultMode];
    const bodyContrast = evaluateContrast(activePalette.textPrimary, activePalette.bgCanvas);
    const accentContrast = evaluateContrast(activePalette.accentInk, activePalette.accent);

    return {
      id: theme.id,
      name: theme.name,
      pack: theme.pack,
      defaultMode: theme.defaultMode,
      tagline: theme.tagline,
      score,
      reasons: reasons.length ? reasons : [`versatile ${theme.pack} baseline`],
      contrastSummary: {
        mode: preferredMode === 'light' || preferredMode === 'dark' ? preferredMode : theme.defaultMode,
        bodyRatio: bodyContrast.wcagRatio,
        accentButtonRatio: accentContrast.wcagRatio,
      },
    };
  });

  scored.sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  return {
    query: projectDescription,
    recommendations: scored.slice(0, 3),
  };
}

function buildPaletteVars(p) {
  return [
    `  --bg-deep: ${p.bgDeep};`,
    `  --bg-canvas: ${p.bgCanvas};`,
    `  --bg-card: ${p.bgCard};`,
    `  --bg-raised: ${p.bgRaised};`,
    `  --text-primary: ${p.textPrimary};`,
    `  --text-secondary: ${p.textSecondary};`,
    `  --text-muted: ${p.textMuted};`,
    `  --border-hairline: ${p.borderHairline};`,
    `  --border-strong: ${p.borderStrong};`,
    `  --accent: ${p.accent};`,
    `  --accent-hover: ${p.accentHover};`,
    `  --accent-ink: ${p.accentInk};`,
    `  --accent-soft: ${p.accentSoft};`,
    `  --focus-ring: ${p.focusRing};`,
    `  --positive: ${p.positive};`,
    `  --warning: ${p.warning};`,
    `  --negative: ${p.negative};`,
  ].join('\n');
}

function generateCss(theme, mode = 'both') {
  const sharedVars = [
    `  --font-display: ${theme.fonts.display};`,
    `  --font-body: ${theme.fonts.body};`,
    `  --font-mono: ${theme.fonts.mono};`,
    `  --font-weight-display: ${theme.fonts.displayWeight};`,
    `  --font-weight-body: ${theme.fonts.bodyWeight};`,
    `  --tracking-display: ${theme.fonts.trackingDisplay};`,
    `  --radius-control: ${theme.geometry.radiusControl};`,
    `  --radius-card: ${theme.geometry.radiusCard};`,
    `  --radius-panel: ${theme.geometry.radiusPanel};`,
    `  --radius-pill: ${theme.geometry.radiusPill};`,
    `  --border-width: ${theme.geometry.borderWidth};`,
    `  --container-max: ${theme.geometry.maxWidth};`,
    `  --shadow-card: ${theme.elevation.lightCardShadow};`,
    `  --shadow-float: ${theme.elevation.lightFloatShadow};`,
    `  --ease-craft: ${theme.motion.easing};`,
    `  --dur-fast: ${theme.motion.fastMs}ms;`,
    `  --dur-medium: ${theme.motion.mediumMs}ms;`,
    `  --dur-slow: ${theme.motion.slowMs}ms;`,
  ].join('\n');

  const blocks = [];
  blocks.push(`/* Theme: ${theme.name} (${theme.id}) | Pack: ${theme.pack} | Default: ${theme.defaultMode} */`);
  blocks.push(`/* Webfont: <link rel="stylesheet" href="${theme.fonts.googleFontsUrl}"> */\n`);

  if (mode === 'light') {
    blocks.push(`:root {\n  color-scheme: light;\n${buildPaletteVars(theme.light)}\n${sharedVars}\n}`);
  } else if (mode === 'dark') {
    blocks.push(`:root {\n  color-scheme: dark;\n${buildPaletteVars(theme.dark)}\n${sharedVars}\n}`);
  } else {
    const primaryMode = theme.defaultMode;
    const altMode = primaryMode === 'dark' ? 'light' : 'dark';
    blocks.push(
      `:root {\n  color-scheme: ${primaryMode};\n${buildPaletteVars(theme[primaryMode])}\n${sharedVars}\n}\n\n[data-theme="${altMode}"] {\n  color-scheme: ${altMode};\n${buildPaletteVars(theme[altMode])}\n}`
    );
  }

  blocks.push(`
html, body {
  overflow-x: clip;
  background-color: var(--bg-canvas);
  color: var(--text-primary);
  font-family: var(--font-body);
}

::selection {
  background-color: var(--accent-soft);
  color: var(--text-primary);
}

:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

select {
  background-color: var(--bg-card);
  color: var(--text-primary);
}

.tabular-nums {
  font-variant-numeric: tabular-nums;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`);

  return blocks.join('\n');
}

function generateTailwindV4(theme, mode = 'both') {
  const css = generateCss(theme, mode);
  const themeBlock = `@theme inline {
  --color-bg-deep: var(--bg-deep);
  --color-bg-canvas: var(--bg-canvas);
  --color-bg-card: var(--bg-card);
  --color-bg-raised: var(--bg-raised);
  --color-ink: var(--text-primary);
  --color-ink-secondary: var(--text-secondary);
  --color-ink-muted: var(--text-muted);
  --color-hairline: var(--border-hairline);
  --color-border-strong: var(--border-strong);
  --color-accent: var(--accent);
  --color-accent-hover: var(--accent-hover);
  --color-accent-ink: var(--accent-ink);
  --color-accent-soft: var(--accent-soft);
  --color-positive: var(--positive);
  --color-warning: var(--warning);
  --color-negative: var(--negative);

  --font-display: var(--font-display);
  --font-sans: var(--font-body);
  --font-mono: var(--font-mono);

  --radius-control: var(--radius-control);
  --radius-card: var(--radius-card);
  --radius-panel: var(--radius-panel);
}`;
  return `${css}\n${themeBlock}\n`;
}

function generateTailwindV3(theme) {
  const configObj = {
    theme: {
      extend: {
        colors: {
          'bg-deep': 'var(--bg-deep)',
          'bg-canvas': 'var(--bg-canvas)',
          'bg-card': 'var(--bg-card)',
          'bg-raised': 'var(--bg-raised)',
          ink: 'var(--text-primary)',
          'ink-secondary': 'var(--text-secondary)',
          'ink-muted': 'var(--text-muted)',
          hairline: 'var(--border-hairline)',
          'border-strong': 'var(--border-strong)',
          accent: {
            DEFAULT: 'var(--accent)',
            hover: 'var(--accent-hover)',
            ink: 'var(--accent-ink)',
            soft: 'var(--accent-soft)',
          },
          positive: 'var(--positive)',
          warning: 'var(--warning)',
          negative: 'var(--negative)',
        },
        fontFamily: {
          display: ['var(--font-display)'],
          sans: ['var(--font-body)'],
          mono: ['var(--font-mono)'],
        },
        borderRadius: {
          control: 'var(--radius-control)',
          card: 'var(--radius-card)',
          panel: 'var(--radius-panel)',
        },
      },
    },
  };
  return `// Add generated CSS variables from \`--format css\` to your globals.css, then extend tailwind.config.js:\nmodule.exports = ${JSON.stringify(configObj, null, 2)};\n`;
}

function yamlStr(val) {
  return JSON.stringify(String(val));
}

function yamlPaletteBlock(p) {
  return [
    `    bgDeep: ${yamlStr(p.bgDeep)}`,
    `    bgCanvas: ${yamlStr(p.bgCanvas)}`,
    `    bgCard: ${yamlStr(p.bgCard)}`,
    `    bgRaised: ${yamlStr(p.bgRaised)}`,
    `    textPrimary: ${yamlStr(p.textPrimary)}`,
    `    textSecondary: ${yamlStr(p.textSecondary)}`,
    `    textMuted: ${yamlStr(p.textMuted)}`,
    `    borderHairline: ${yamlStr(p.borderHairline)}`,
    `    borderStrong: ${yamlStr(p.borderStrong)}`,
    `    accent: ${yamlStr(p.accent)}`,
    `    accentHover: ${yamlStr(p.accentHover)}`,
    `    accentInk: ${yamlStr(p.accentInk)}`,
    `    accentSoft: ${yamlStr(p.accentSoft)}`,
    `    focusRing: ${yamlStr(p.focusRing)}`,
    `    positive: ${yamlStr(p.positive)}`,
    `    warning: ${yamlStr(p.warning)}`,
    `    negative: ${yamlStr(p.negative)}`,
  ].join('\n');
}

export function generateDesignMd(theme) {
  const palTable = (label, p) => `### ${label} Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| \`--bg-deep\` | \`${p.bgDeep}\` | Sidebar / recessed shell |
| \`--bg-canvas\` | \`${p.bgCanvas}\` | Main viewport ground |
| \`--bg-card\` | \`${p.bgCard}\` | Elevated cards and panels |
| \`--bg-raised\` | \`${p.bgRaised}\` | Active rows, inputs, secondary pills |
| \`--text-primary\` | \`${p.textPrimary}\` | Headings and primary copy |
| \`--text-secondary\` | \`${p.textSecondary}\` | Supporting descriptions |
| \`--text-muted\` | \`${p.textMuted}\` | Captions, axis labels, timestamps |
| \`--border-hairline\` | \`${p.borderHairline}\` | Subtle structural dividers |
| \`--border-strong\` | \`${p.borderStrong}\` | Interactive input and hover borders |
| \`--accent\` | \`${p.accent}\` | Primary CTA and focus highlight |
| \`--accent-hover\` | \`${p.accentHover}\` | Interactive hover accent |
| \`--accent-ink\` | \`${p.accentInk}\` | Text inside filled accent controls |
| \`--accent-soft\` | \`${p.accentSoft}\` | Subtle selection wash |
| \`--focus-ring\` | \`${p.focusRing}\` | Keyboard focus indicator |
| \`--positive\` | \`${p.positive}\` | Success / growth delta |
| \`--warning\` | \`${p.warning}\` | Caution state |
| \`--negative\` | \`${p.negative}\` | Error / destructive state |`;

  const buildContrastRow = (modeLabel, p) => {
    const cPrim = evaluateContrast(p.textPrimary, p.bgCanvas);
    const cSec = evaluateContrast(p.textSecondary, p.bgCanvas);
    const cMut = evaluateContrast(p.textMuted, p.bgCanvas);
    const cBtn = evaluateContrast(p.accentInk, p.accent);
    return [
      `| ${modeLabel} | Primary Text / Canvas | \`${p.textPrimary}\` on \`${p.bgCanvas}\` | **${cPrim.wcagRatio}:1** (Lc ${cPrim.apcaLc}) |`,
      `| ${modeLabel} | Secondary Text / Canvas | \`${p.textSecondary}\` on \`${p.bgCanvas}\` | **${cSec.wcagRatio}:1** (Lc ${cSec.apcaLc}) |`,
      `| ${modeLabel} | Muted Text / Canvas | \`${p.textMuted}\` on \`${p.bgCanvas}\` | **${cMut.wcagRatio}:1** (Lc ${cMut.apcaLc}) |`,
      `| ${modeLabel} | Accent Ink / Accent Fill | \`${p.accentInk}\` on \`${p.accent}\` | **${cBtn.wcagRatio}:1** (Lc ${cBtn.apcaLc}) |`,
    ].join('\n');
  };

  const frontmatter = `---
schema: unvibe-design-md/v1
themeId: ${yamlStr(theme.id)}
name: ${yamlStr(theme.name)}
pack: ${yamlStr(theme.pack)}
defaultMode: ${yamlStr(theme.defaultMode)}
scope: "UI/UX & Visual Theming Only"
colors:
  light:
${yamlPaletteBlock(theme.light)}
  dark:
${yamlPaletteBlock(theme.dark)}
typography:
  display: ${yamlStr(theme.fonts.display)}
  body: ${yamlStr(theme.fonts.body)}
  mono: ${yamlStr(theme.fonts.mono)}
  displayWeight: ${theme.fonts.displayWeight}
  bodyWeight: ${theme.fonts.bodyWeight}
  trackingDisplay: ${yamlStr(theme.fonts.trackingDisplay)}
radius:
  control: ${yamlStr(theme.geometry.radiusControl)}
  card: ${yamlStr(theme.geometry.radiusCard)}
  panel: ${yamlStr(theme.geometry.radiusPanel)}
  pill: ${yamlStr(theme.geometry.radiusPill)}
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "96px"
motion:
  easing: ${yamlStr(theme.motion.easing)}
  fastMs: ${theme.motion.fastMs}
  mediumMs: ${theme.motion.mediumMs}
  slowMs: ${theme.motion.slowMs}
---`;

  const cssSnapshot = generateCss(theme, 'both').trim();

  return `${frontmatter}

# DESIGN.md — ${theme.name}

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as \`DESIGN.md\`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** \`${theme.id}\`
- **Pack:** \`${theme.pack}\`
- **Default Mode:** \`${theme.defaultMode}\`
- **Mood:** ${theme.mood.join(', ')}
- **Recommended Surface Modes:** ${theme.surfaceModes.join(', ')}
- **Best For:** ${theme.bestFor.join(', ')}

## 1. Visual Theme & Atmosphere

**${theme.tagline}**

${theme.description}

## 2. Color System & Verified Contrast

${palTable('Light Mode', theme.light)}

${palTable('Dark Mode', theme.dark)}

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
${buildContrastRow('Light', theme.light)}
${buildContrastRow('Dark', theme.dark)}

## 3. Typography & Scale

- **Display:** ${theme.fonts.display} (Weight \`${theme.fonts.displayWeight}\`, Tracking \`${theme.fonts.trackingDisplay}\`)
- **Body:** ${theme.fonts.body} (Weight \`${theme.fonts.bodyWeight}\`)
- **Monospace:** ${theme.fonts.mono}
- **Webfont Stylesheet Tag:**
\`\`\`html
<link rel="stylesheet" href="${theme.fonts.googleFontsUrl}">
\`\`\`
- **Notes:** ${theme.fonts.notes}

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | \`12px\` | \`16px\` | \`400\` | Mono allowed; sentence case |
| Secondary copy | \`13–14px\` | \`20px\` | \`400\` | Use \`--text-secondary\` |
| Body / nav item | \`14–15px\` | \`22px\` | \`400–500\` | Max \`72ch\` reading measure |
| Card figure / KPI | \`28–32px\` | \`1.1\` | \`500–600\` | Enforce \`tabular-nums\` |
| Section title (\`h2\`) | \`28–36px\` | \`1.15\` | \`${theme.fonts.displayWeight}\` | Display stack |
| Hero display (\`h1\`) | \`48–56px\` | \`1.06\` | \`${theme.fonts.displayWeight}\` | Tracking \`${theme.fonts.trackingDisplay}\` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (\`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…\`). Keep list row heights uniform (\`32–36px\` compact nav, \`44px+\` mobile touch targets).
- **Concentric Radii:** Control \`${theme.geometry.radiusControl}\`, Card \`${theme.geometry.radiusCard}\`, Panel \`${theme.geometry.radiusPanel}\`, Pill \`${theme.geometry.radiusPill}\` (\`inner = outer - padding\`, min \`4px\` unless sharp \`0–2px\` theme).
- **Container Max Width:** \`${theme.geometry.maxWidth}\` | **Density:** \`${theme.geometry.density}\`
- **Light Elevation:** Card \`${theme.elevation.lightCardShadow}\` | Float \`${theme.elevation.lightFloatShadow}\`
- **Dark Elevation:** ${theme.elevation.darkTreatment}
- **Motion:** \`${theme.motion.easing}\` (\`${theme.motion.fastMs}ms\` fast / \`${theme.motion.mediumMs}ms\` medium / \`${theme.motion.slowMs}ms\` slow) — ${theme.motion.style}

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** ${theme.components.primaryButton}
- **Secondary Button:** ${theme.components.secondaryButton}
- **Card:** ${theme.components.card}
- **Input:** ${theme.components.input}
- **Nav Item:** ${theme.components.navItem}
- **Badge / Status:** ${theme.components.badge}

### Interactive State Matrix

| State | Visual & Token Behavior | Accessibility Rule |
| :--- | :--- | :--- |
| **Default** | Surface \`--bg-card\` / \`--bg-raised\`, border \`--border-hairline\`, text \`--text-primary\` | Native \`<button>\` / \`<a>\` semantics; hit area \`>=24px\` desktop (\`>=44px\` touch) |
| **Hover** | Shift accent fill to \`--accent-hover\` or step surface to \`--bg-raised\` (\`${theme.motion.fastMs}ms\` color transition) | Never jump layout dimensions or trigger large \`scale()\` transforms |
| **Active / Pressed** | Subtle press feedback (\`transform: scale(0.98)\` on buttons) or darker tonal step | Immediate feedback without bouncy overshoot |
| **Focus-Visible** | \`outline: 2px solid var(--focus-ring); outline-offset: 2px\` | Never suppress with bare \`outline: none\`; sticky chrome never covers focused element |
| **Disabled** | Muted surface \`--bg-raised\`, text \`--text-muted\`, subtle \`--border-hairline\`, \`cursor: not-allowed\` | Keep \`disabled\` attribute honest; preserve readable contrast for pending status |
| **Loading** | Static shape-matched skeleton in \`--bg-raised\` (or inline spinner + original button text) | Prevent layout shift (CLS); lock duplicate submit while request is in flight |
| **Empty** | Calm surface block with plain sentence explaining what appears here + single primary recovery button | Zero decorative blobs or mascot illustrations |
| **Error** | Inline message in \`--negative\` directly adjacent to field/region + \`--negative\` border | Plain cause + recovery action; focus first invalid field on form submit |

## 6. Responsive Breakpoints & Collapsing Strategy

| Breakpoint | Width | Layout & Component Behavior |
| :--- | :--- | :--- |
| **Mobile** | \`< 768px\` | Single-column stack; collapse top/side nav into accessible drawer; drop hero \`h1\` cleanly to \`32–40px\`; enforce \`>=44x44px\` hit targets and \`>=16px\` \`<input>\` text to prevent mobile browser auto-zoom |
| **Tablet** | \`768–1024px\` | 2-column content grids; collapsible sidebar rail; preserve horizontal scroll inside code blocks or dense tables with \`min-w-0\` |
| **Desktop** | \`1024–1440px\` | Full app shell (\`240–280px\` sidebar + fluid workspace) or asymmetric landing split; cap prose around \`65–72ch\` |
| **Wide** | \`> 1440px\` | Center container at \`${theme.geometry.maxWidth}\`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

${theme.voice}

## 8. Theme Do's & Don'ts

### Do
${theme.dos.map((d) => `- ${d}`).join('\n')}

### Don't
${theme.donts.map((d) => `- ${d}`).join('\n')}

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (\`✨\`, \`🚀\`, \`🔥\`, \`👋\`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (\`NAVIGATION\`), exclamation marks, greeting headers (\`Welcome back!\`), hype words (\`supercharge\`, \`seamless\`, \`AI-powered\`), or dummy \`$123,456\` data; enforce \`tabular-nums\`.
4. **Compositor motion only:** Never use \`transition: all\` or animate \`width\`/\`height\`/\`top\`/\`left\`; honor \`@media (prefers-reduced-motion: reduce)\`.
5. **Layout & browser chrome:** Keep \`overflow-x: clip\` (never \`100vw\`), \`min-w-0\` on truncating flex items, \`color-scheme\` matching active mode, and explicit \`<select>\` colors.

## 10. Ready-to-Paste CSS Variables (\`tokens.css\`)

\`\`\`css
${cssSnapshot}
\`\`\`
`;
}

export function generateTokens({ themeId, format = 'css', mode = 'both' } = {}) {
  const theme = getTheme(themeId);
  const fmt = String(format).trim().toLowerCase();
  const m = String(mode).trim().toLowerCase();
  if (!['both', 'light', 'dark'].includes(m)) {
    throw new Error(`Invalid mode "${mode}". Expected: both | light | dark`);
  }

  let output;
  if (fmt === 'css') output = generateCss(theme, m);
  else if (fmt === 'tailwind-v4') output = generateTailwindV4(theme, m);
  else if (fmt === 'tailwind-v3') output = generateTailwindV3(theme);
  else if (fmt === 'design-md') output = generateDesignMd(theme);
  else {
    throw new Error(`Invalid format "${format}". Expected: css | tailwind-v4 | tailwind-v3 | design-md`);
  }

  return {
    themeId: theme.id,
    themeName: theme.name,
    format: fmt,
    mode: m,
    googleFontsUrl: theme.fonts.googleFontsUrl,
    content: output,
  };
}

export function getChecklist(workflow) {
  const key = String(workflow || '').trim().toLowerCase();
  const lists = {
    redline: {
      title: 'Unvibe 7-Stage Redline Workflow (UI/UX Only)',
      steps: [
        'Pre-Flight Scope: Keep all working handlers, state hooks, routes, API calls, and business logic untouched.',
        'Audit & Direction: Run audit_slop across UI files, inspect screenshots, and draft a 5-line Visual Brief (Product, Surface Mode, Character, Material Palette, Focal Element).',
        'Stage 1 (Layout & Viewport): Enforce 240-280px sidebar + 1440px workspace or above-the-fold hero split; replace 100vw with 100% + overflow-x: clip; add min-w-0 to truncating flex items.',
        'Stage 2 (4px Grid & Radii): Snap padding/margins/gaps onto 4px multiples; equalize sibling nav rows (32-36px desktop, >=44px mobile); apply inner = max(4px, outer - padding) and unwrap nested cards.',
        'Stage 3 (Neutral Ramp & Contrast): Remove multi-hue gradients, gradient text, neon glows, and background blobs; apply 1 neutral ramp, 3 text roles, 1 accent (<=5%), verified via check_contrast (>=4.5:1 AA).',
        'Stage 4 (Typography & Numerals): Cap to 2 font families + mono, weights 400-600, sentence case labels (no tracked uppercase eyebrows), tabular-nums on metrics, 62-72ch reading measure.',
        'Stage 5 (Line Icons & Media): Remove all UI emojis; use 1 SVG line icon family (16-18px, stroke-width 1.5); swap fake orbs for real UI previews or explicit aspect-ratio media.',
        'Stage 6 (Grounded Copy & States): Strip greeting headers, exclamation marks, hype adjectives, unverified counts, and $123,456 data; pair deltas with baselines; implement hover, focus, active, disabled, skeleton, empty, and error states.',
        'Stage 7 (Motion, Chrome & A11y): Eliminate transition: all and idle animate-pulse; animate transform/opacity with cubic-bezier(0.22, 1, 0.36, 1) and prefers-reduced-motion; enforce <button>/<a>, :focus-visible, >=16px mobile inputs, and color-scheme + <select> colors.',
        'Final Gate: Re-run audit_slop for 0 P0-BLOCKER and 0 P1-SLOP findings across desktop (1440px) and mobile (390px).',
      ],
    },
    'new-build': {
      title: 'New UI Build Craft Checklist (UI/UX & Themes Only)',
      steps: [
        'Check for existing DESIGN.md or brand tokens; preserve them if present.',
        'Define 5-line Direction + Surface Mode (operate | read | persuade | social | editorial).',
        'Select a theme pack via recommend_themes and generate tokens.css + DESIGN.md.',
        'Theme browser surfaces (::selection, :focus-visible, scrollbars, color-scheme, <select>).',
        'Design empty, loading (matching layout skeletons), and error recovery states.',
        'Verify contrast with check_contrast and run audit_slop before completion.',
      ],
    },
    accessibility: {
      title: 'Accessibility & Interaction Checklist',
      steps: [
        'Visible :focus-visible rings on every interactive control; never bare outline: none.',
        'Semantic HTML (<button>, <a>, <label>, <table>) instead of <div onClick>.',
        'Descriptive aria-label on all icon-only buttons; aria-hidden on decorative visuals.',
        'Hit targets >= 24px desktop and >= 44px mobile; mobile <input> font-size >= 16px.',
        'Never disable viewport pinch zoom (no user-scalable=no or maximum-scale=1).',
        'Body/muted contrast >= 4.5:1 WCAG AA; large text >= 3:1.',
        'Keyboard-accessible modals/drawers with focus trap and overscroll-behavior: contain.',
      ],
    },
    motion: {
      title: 'Motion & Performance Checklist',
      steps: [
        'Never write transition: all or transition-all; list explicit properties.',
        'Animate GPU compositor properties only (transform, opacity, filter); avoid width/height/top/left.',
        'Use one consistent easing curve: cubic-bezier(0.22, 1, 0.36, 1).',
        'Durations: 120-180ms hover/press, 160-220ms menus/popovers, 300-500ms entrances.',
        'Remove idle animate-pulse/ping/bounce except explicit loading skeletons or live telemetry dots.',
        'Provide @media (prefers-reduced-motion: reduce) fallbacks.',
      ],
    },
    forms: {
      title: 'Forms & Validation Checklist',
      steps: [
        'Proper <label> linked to inputs; clicking label activates control.',
        'Set meaningful name, type, inputmode, and autocomplete; never block paste.',
        'Mobile input text size >= 16px to prevent iOS Safari zoom.',
        'Submit stays clickable until request starts, then disables with spinner + original label.',
        'Display inline field errors next to inputs and focus first error on submit.',
        'Confirm destructive actions or offer Undo.',
      ],
    },
    dashboard: {
      title: 'Dashboard & App Proportions Checklist',
      steps: [
        'Full viewport shell: 240-280px sidebar + fluid content up to 1440-1600px.',
        'Sidebar rows 32-36px tall, 2-4px gap, 16px Lucide icon column aligned vertically.',
        'Keep app chrome strictly neutral so charts and real product status carry color.',
        'Compact stat cards hold label + tabular figure + compared delta (no decorative sparklines in every box).',
        'One wide primary chart (280-360px tall) paired with a narrow ranked list or table—never twin identical charts.',
      ],
    },
    landing: {
      title: 'Landing Page & Hero Checklist',
      steps: [
        'Headline states specifically what the product does and for whom.',
        'No floating eyebrow pill ("Introducing X 2.0 ✨") above the hero title.',
        'Asymmetric split (text + product preview/scene) or strong bottom-rising product view visible above 1280x800 fold.',
        'Maximum 1 primary CTA + 1 quiet secondary action; no avatar/badge clutter beneath buttons.',
        'Vary section rhythm and container widths; end on the visitor core action rather than a generic newsletter box.',
      ],
    },
  };

  if (!lists[key]) {
    throw new Error(`Unknown workflow "${workflow}". Valid workflows: ${Object.keys(lists).join(', ')}`);
  }
  return lists[key];
}
