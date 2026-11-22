---
schema: unvibe-design-md/v1
themeId: "phosphor-shell"
name: "Phosphor Shell"
pack: "cool"
defaultMode: "dark"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#EAEFEA"
    bgCanvas: "#F4F7F4"
    bgCard: "#FFFFFF"
    bgRaised: "#E7EEE7"
    textPrimary: "#111A14"
    textSecondary: "#3D4C42"
    textMuted: "#58685E"
    borderHairline: "#D0DBD1"
    borderStrong: "#9BB09E"
    accent: "#0E6B4F"
    accentHover: "#0A523C"
    accentInk: "#FFFFFF"
    accentSoft: "#E2F4ED"
    focusRing: "#0E6B4F"
    positive: "#0E6B4F"
    warning: "#995B00"
    negative: "#C42B2B"
  dark:
    bgDeep: "#090C0A"
    bgCanvas: "#0E1210"
    bgCard: "#141A17"
    bgRaised: "#1D2621"
    textPrimary: "#ECF2EE"
    textSecondary: "#AFC0B5"
    textMuted: "#85998D"
    borderHairline: "rgba(236, 242, 238, 0.10)"
    borderStrong: "#314038"
    accent: "#3BD69A"
    accentHover: "#61E0AF"
    accentInk: "#081710"
    accentSoft: "#122E22"
    focusRing: "#3BD69A"
    positive: "#3BD69A"
    warning: "#F0B449"
    negative: "#F87171"
typography:
  display: "\"JetBrains Mono\", ui-monospace, monospace"
  body: "\"IBM Plex Sans\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"JetBrains Mono\", ui-monospace, monospace"
  displayWeight: 500
  bodyWeight: 400
  trackingDisplay: "-0.02em"
radius:
  control: "4px"
  card: "6px"
  panel: "8px"
  pill: "4px"
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
  easing: "cubic-bezier(0.22, 1, 0.36, 1)"
  fastMs: 100
  mediumMs: 150
  slowMs: 220
---

# DESIGN.md — Phosphor Shell

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `phosphor-shell`
- **Pack:** `cool`
- **Default Mode:** `dark`
- **Mood:** shell-native, technical, crisp, understated
- **Recommended Surface Modes:** operate, read, persuade
- **Best For:** CLI products, developer tools, CI/CD monitors, SDK landing pages, log viewers

## 1. Visual Theme & Atmosphere

**Matte pine-obsidian shell aesthetic with disciplined terminal mint and crisp monospace cadence.**

Built for developers who live in the terminal without drifting into cliché green-on-black Matrix costumes. Uses subtle pine-tinted dark surfaces, calm readable sans/mono pairing, and restrained terminal-mint highlights for commands, diffs, and live checks.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#EAEFEA` | Sidebar / recessed shell |
| `--bg-canvas` | `#F4F7F4` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#E7EEE7` | Active rows, inputs, secondary pills |
| `--text-primary` | `#111A14` | Headings and primary copy |
| `--text-secondary` | `#3D4C42` | Supporting descriptions |
| `--text-muted` | `#58685E` | Captions, axis labels, timestamps |
| `--border-hairline` | `#D0DBD1` | Subtle structural dividers |
| `--border-strong` | `#9BB09E` | Interactive input and hover borders |
| `--accent` | `#0E6B4F` | Primary CTA and focus highlight |
| `--accent-hover` | `#0A523C` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#E2F4ED` | Subtle selection wash |
| `--focus-ring` | `#0E6B4F` | Keyboard focus indicator |
| `--positive` | `#0E6B4F` | Success / growth delta |
| `--warning` | `#995B00` | Caution state |
| `--negative` | `#C42B2B` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#090C0A` | Sidebar / recessed shell |
| `--bg-canvas` | `#0E1210` | Main viewport ground |
| `--bg-card` | `#141A17` | Elevated cards and panels |
| `--bg-raised` | `#1D2621` | Active rows, inputs, secondary pills |
| `--text-primary` | `#ECF2EE` | Headings and primary copy |
| `--text-secondary` | `#AFC0B5` | Supporting descriptions |
| `--text-muted` | `#85998D` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(236, 242, 238, 0.10)` | Subtle structural dividers |
| `--border-strong` | `#314038` | Interactive input and hover borders |
| `--accent` | `#3BD69A` | Primary CTA and focus highlight |
| `--accent-hover` | `#61E0AF` | Interactive hover accent |
| `--accent-ink` | `#081710` | Text inside filled accent controls |
| `--accent-soft` | `#122E22` | Subtle selection wash |
| `--focus-ring` | `#3BD69A` | Keyboard focus indicator |
| `--positive` | `#3BD69A` | Success / growth delta |
| `--warning` | `#F0B449` | Caution state |
| `--negative` | `#F87171` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#111A14` on `#F4F7F4` | **16.47:1** (Lc 99.3) |
| Light | Secondary Text / Canvas | `#3D4C42` on `#F4F7F4` | **8.42:1** (Lc 85.6) |
| Light | Muted Text / Canvas | `#58685E` on `#F4F7F4` | **5.47:1** (Lc 74.3) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#0E6B4F` | **6.49:1** (Lc -86.9) |
| Dark | Primary Text / Canvas | `#ECF2EE` on `#0E1210` | **16.63:1** (Lc -97.8) |
| Dark | Secondary Text / Canvas | `#AFC0B5` on `#0E1210` | **9.91:1** (Lc -65.7) |
| Dark | Muted Text / Canvas | `#85998D` on `#0E1210` | **6.24:1** (Lc -44.2) |
| Dark | Accent Ink / Accent Fill | `#081710` on `#3BD69A` | **9.88:1** (Lc 68.1) |

## 3. Typography & Scale

- **Display:** "JetBrains Mono", ui-monospace, monospace (Weight `500`, Tracking `-0.02em`)
- **Body:** "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "JetBrains Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap">
```
- **Notes:** Keep prose paragraphs in IBM Plex Sans for effortless reading; use JetBrains Mono for hero titles, commands, and metrics.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `500` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `500` | Tracking `-0.02em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `4px`, Card `6px`, Panel `8px`, Pill `4px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1240px` | **Density:** `compact`
- **Light Elevation:** Card `0 1px 2px rgba(13, 18, 14, 0.05)` | Float `0 8px 24px rgba(13, 18, 14, 0.09)`
- **Dark Elevation:** Subtle pine-charcoal layering (#0B0E0C -> #121714 -> #1B231E) with hairline structural rules.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`100ms` fast / `150ms` medium / `220ms` slow) — Instant terminal-grade feedback.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid terminal mint button with dark pine ink (dark) or deep forest fill (light), 4px radius.
- **Secondary Button:** Raised pine surface with 1px border.
- **Card:** Crisp 6px container with top status rule and clean code/diff spacing.
- **Input:** Shell-styled CLI input with subtle `$` prefix and instant copy feedback.
- **Nav Item:** Sharp mono links with subtle active background fill.
- **Badge / Status:** Compact keycap or version tag in muted mono.

### Interactive State Matrix

| State | Visual & Token Behavior | Accessibility Rule |
| :--- | :--- | :--- |
| **Default** | Surface `--bg-card` / `--bg-raised`, border `--border-hairline`, text `--text-primary` | Native `<button>` / `<a>` semantics; hit area `>=24px` desktop (`>=44px` touch) |
| **Hover** | Shift accent fill to `--accent-hover` or step surface to `--bg-raised` (`100ms` color transition) | Never jump layout dimensions or trigger large `scale()` transforms |
| **Active / Pressed** | Subtle press feedback (`transform: scale(0.98)` on buttons) or darker tonal step | Immediate feedback without bouncy overshoot |
| **Focus-Visible** | `outline: 2px solid var(--focus-ring); outline-offset: 2px` | Never suppress with bare `outline: none`; sticky chrome never covers focused element |
| **Disabled** | Muted surface `--bg-raised`, text `--text-muted`, subtle `--border-hairline`, `cursor: not-allowed` | Keep `disabled` attribute honest; preserve readable contrast for pending status |
| **Loading** | Static shape-matched skeleton in `--bg-raised` (or inline spinner + original button text) | Prevent layout shift (CLS); lock duplicate submit while request is in flight |
| **Empty** | Calm surface block with plain sentence explaining what appears here + single primary recovery button | Zero decorative blobs or mascot illustrations |
| **Error** | Inline message in `--negative` directly adjacent to field/region + `--negative` border | Plain cause + recovery action; focus first invalid field on form submit |

## 6. Responsive Breakpoints & Collapsing Strategy

| Breakpoint | Width | Layout & Component Behavior |
| :--- | :--- | :--- |
| **Mobile** | `< 768px` | Single-column stack; collapse top/side nav into accessible drawer; drop hero `h1` cleanly to `32–40px`; enforce `>=44x44px` hit targets and `>=16px` `<input>` text to prevent mobile browser auto-zoom |
| **Tablet** | `768–1024px` | 2-column content grids; collapsible sidebar rail; preserve horizontal scroll inside code blocks or dense tables with `min-w-0` |
| **Desktop** | `1024–1440px` | Full app shell (`240–280px` sidebar + fluid workspace) or asymmetric landing split; cap prose around `65–72ch` |
| **Wide** | `> 1440px` | Center container at `1240px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Terse, command-verified, engineer-to-engineer.

## 8. Theme Do's & Don'ts

### Do
- Set install snippets and CLI blocks inside bgDeep with one-click copy.
- Use real diff syntax coloring tuned smoothly into the palette.
- Keep buttons sharp at 4px radius.
- Display build status and latency in tabular figures.

### Don't
- Never draw fake macOS red-yellow-green traffic-light window dots around every card.
- Never use glowing #00FF00 text shadows.
- Never place emojis in command documentation.
- Never animate typing loops endlessly.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Phosphor Shell (phosphor-shell) | Pack: cool | Default: dark */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"> */

:root {
  color-scheme: dark;
  --bg-deep: #090C0A;
  --bg-canvas: #0E1210;
  --bg-card: #141A17;
  --bg-raised: #1D2621;
  --text-primary: #ECF2EE;
  --text-secondary: #AFC0B5;
  --text-muted: #85998D;
  --border-hairline: rgba(236, 242, 238, 0.10);
  --border-strong: #314038;
  --accent: #3BD69A;
  --accent-hover: #61E0AF;
  --accent-ink: #081710;
  --accent-soft: #122E22;
  --focus-ring: #3BD69A;
  --positive: #3BD69A;
  --warning: #F0B449;
  --negative: #F87171;
  --font-display: "JetBrains Mono", ui-monospace, monospace;
  --font-body: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-weight-display: 500;
  --font-weight-body: 400;
  --tracking-display: -0.02em;
  --radius-control: 4px;
  --radius-card: 6px;
  --radius-panel: 8px;
  --radius-pill: 4px;
  --border-width: 1px;
  --container-max: 1240px;
  --shadow-card: 0 1px 2px rgba(13, 18, 14, 0.05);
  --shadow-float: 0 8px 24px rgba(13, 18, 14, 0.09);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 100ms;
  --dur-medium: 150ms;
  --dur-slow: 220ms;
}

[data-theme="light"] {
  color-scheme: light;
  --bg-deep: #EAEFEA;
  --bg-canvas: #F4F7F4;
  --bg-card: #FFFFFF;
  --bg-raised: #E7EEE7;
  --text-primary: #111A14;
  --text-secondary: #3D4C42;
  --text-muted: #58685E;
  --border-hairline: #D0DBD1;
  --border-strong: #9BB09E;
  --accent: #0E6B4F;
  --accent-hover: #0A523C;
  --accent-ink: #FFFFFF;
  --accent-soft: #E2F4ED;
  --focus-ring: #0E6B4F;
  --positive: #0E6B4F;
  --warning: #995B00;
  --negative: #C42B2B;
}

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
```
