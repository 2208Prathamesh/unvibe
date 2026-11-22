---
schema: unvibe-design-md/v1
themeId: "broadsheet-press"
name: "Broadsheet Press"
pack: "vintage"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#E6E0D3"
    bgCanvas: "#F3EFE6"
    bgCard: "#EAE4D7"
    bgRaised: "#DFD7C6"
    textPrimary: "#1A1815"
    textSecondary: "#3D3933"
    textMuted: "#5E584F"
    borderHairline: "#C7BFAE"
    borderStrong: "#2B2823"
    accent: "#992626"
    accentHover: "#781C1C"
    accentInk: "#FFFFFF"
    accentSoft: "#F2DFDC"
    focusRing: "#992626"
    positive: "#1F6642"
    warning: "#8A5212"
    negative: "#992626"
  dark:
    bgDeep: "#11100E"
    bgCanvas: "#181714"
    bgCard: "#22201C"
    bgRaised: "#2D2A24"
    textPrimary: "#EFEAE0"
    textSecondary: "#C4BDB0"
    textMuted: "#999184"
    borderHairline: "#38342D"
    borderStrong: "#C4BDB0"
    accent: "#E87461"
    accentHover: "#F09080"
    accentInk: "#1C0C09"
    accentSoft: "#361D19"
    focusRing: "#E87461"
    positive: "#58BA84"
    warning: "#E8A64D"
    negative: "#E87461"
typography:
  display: "\"Zilla Slab\", Georgia, serif"
  body: "\"Spectral\", Georgia, serif"
  mono: "\"Libre Franklin\", ui-sans-serif, sans-serif"
  displayWeight: 700
  bodyWeight: 400
  trackingDisplay: "-0.02em"
radius:
  control: "0px"
  card: "0px"
  panel: "0px"
  pill: "0px"
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
  fastMs: 110
  mediumMs: 170
  slowMs: 260
---

# DESIGN.md — Broadsheet Press

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `broadsheet-press`
- **Pack:** `vintage`
- **Default Mode:** `light`
- **Mood:** editorial, reported, archival, tactile
- **Recommended Surface Modes:** editorial, read
- **Best For:** newsletters, publications, essays, journals, research digests

## 1. Visual Theme & Atmosphere

**Printed newspaper stock, blunt slab headlines, hairline column rules, and dried-brick editorial ink.**

Translates authentic print broadsheet typography to the browser: pale newsprint stock, warm black ink, Zilla Slab headlines over calm Spectral book prose, exposed column dividers, and a single dried-brick editorial signal. Reads reported and edited rather than assembled.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#E6E0D3` | Sidebar / recessed shell |
| `--bg-canvas` | `#F3EFE6` | Main viewport ground |
| `--bg-card` | `#EAE4D7` | Elevated cards and panels |
| `--bg-raised` | `#DFD7C6` | Active rows, inputs, secondary pills |
| `--text-primary` | `#1A1815` | Headings and primary copy |
| `--text-secondary` | `#3D3933` | Supporting descriptions |
| `--text-muted` | `#5E584F` | Captions, axis labels, timestamps |
| `--border-hairline` | `#C7BFAE` | Subtle structural dividers |
| `--border-strong` | `#2B2823` | Interactive input and hover borders |
| `--accent` | `#992626` | Primary CTA and focus highlight |
| `--accent-hover` | `#781C1C` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#F2DFDC` | Subtle selection wash |
| `--focus-ring` | `#992626` | Keyboard focus indicator |
| `--positive` | `#1F6642` | Success / growth delta |
| `--warning` | `#8A5212` | Caution state |
| `--negative` | `#992626` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#11100E` | Sidebar / recessed shell |
| `--bg-canvas` | `#181714` | Main viewport ground |
| `--bg-card` | `#22201C` | Elevated cards and panels |
| `--bg-raised` | `#2D2A24` | Active rows, inputs, secondary pills |
| `--text-primary` | `#EFEAE0` | Headings and primary copy |
| `--text-secondary` | `#C4BDB0` | Supporting descriptions |
| `--text-muted` | `#999184` | Captions, axis labels, timestamps |
| `--border-hairline` | `#38342D` | Subtle structural dividers |
| `--border-strong` | `#C4BDB0` | Interactive input and hover borders |
| `--accent` | `#E87461` | Primary CTA and focus highlight |
| `--accent-hover` | `#F09080` | Interactive hover accent |
| `--accent-ink` | `#1C0C09` | Text inside filled accent controls |
| `--accent-soft` | `#361D19` | Subtle selection wash |
| `--focus-ring` | `#E87461` | Keyboard focus indicator |
| `--positive` | `#58BA84` | Success / growth delta |
| `--warning` | `#E8A64D` | Caution state |
| `--negative` | `#E87461` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#1A1815` on `#F3EFE6` | **15.44:1** (Lc 95.1) |
| Light | Secondary Text / Canvas | `#3D3933` on `#F3EFE6` | **9.99:1** (Lc 87.1) |
| Light | Muted Text / Canvas | `#5E584F` on `#F3EFE6` | **6.13:1** (Lc 75) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#992626` | **7.9:1** (Lc -91) |
| Dark | Primary Text / Canvas | `#EFEAE0` on `#181714` | **14.95:1** (Lc -93.4) |
| Dark | Secondary Text / Canvas | `#C4BDB0` on `#181714` | **9.61:1** (Lc -66.2) |
| Dark | Muted Text / Canvas | `#999184` on `#181714` | **5.75:1** (Lc -42.5) |
| Dark | Accent Ink / Accent Fill | `#1C0C09` on `#E87461` | **6.42:1** (Lc 47.7) |

## 3. Typography & Scale

- **Display:** "Zilla Slab", Georgia, serif (Weight `700`, Tracking `-0.02em`)
- **Body:** "Spectral", Georgia, serif (Weight `400`)
- **Monospace:** "Libre Franklin", ui-sans-serif, sans-serif
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=Spectral:ital,wght@0,400;0,500;1,400&family=Libre+Franklin:wght@400;500&display=swap">
```
- **Notes:** Use Libre Franklin strictly as compact tabular agate for dates, tables, and listings; keep headings in Zilla Slab and reading body in Spectral.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `700` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `700` | Tracking `-0.02em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `0px`, Card `0px`, Panel `0px`, Pill `0px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1240px` | **Density:** `comfortable`
- **Light Elevation:** Card `none` | Float `0 8px 24px rgba(24, 23, 20, 0.12)`
- **Dark Elevation:** Warm charcoal news-desk mode (#161512 canvas, #201E1A panels) with faded newsprint ink.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`110ms` fast / `170ms` medium / `260ms` slow) — Instant print-press ink snaps; zero decorative motion.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Square 0px button in ink or dried brick, crisp 1px borders.
- **Secondary Button:** Square outline button with 1px ink border.
- **Card:** 0px ruled block separated by 1px column hairlines and 3px double top rules.
- **Input:** Square 1px ruled field on pale newsprint stock.
- **Nav Item:** Masthead-ruled horizontal tabs separated by vertical hairlines.
- **Badge / Status:** Bracketed plain text edition tag in dried brick or muted ink.

### Interactive State Matrix

| State | Visual & Token Behavior | Accessibility Rule |
| :--- | :--- | :--- |
| **Default** | Surface `--bg-card` / `--bg-raised`, border `--border-hairline`, text `--text-primary` | Native `<button>` / `<a>` semantics; hit area `>=24px` desktop (`>=44px` touch) |
| **Hover** | Shift accent fill to `--accent-hover` or step surface to `--bg-raised` (`110ms` color transition) | Never jump layout dimensions or trigger large `scale()` transforms |
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

Reported, factual, dateline-clear, unhurried editorial prose.

## 8. Theme Do's & Don'ts

### Do
- Use 0px corners everywhere—cards, buttons, inputs, images.
- Structure layouts with hairline column dividers and solid 2-3px section top rules.
- Treat photographs with subtle monochrome or warm print tone.
- Include clean datelines and bylines in muted Spectral.

### Don't
- Never add rounded cards or drop shadows on newsprint.
- Never place neon accent buttons onto broadsheet layouts.
- Never use wide-tracked uppercase sans eyebrows.
- Never mix casual emojis into printed prose.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Broadsheet Press (broadsheet-press) | Pack: vintage | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=Spectral:ital,wght@0,400;0,500;1,400&family=Libre+Franklin:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #E6E0D3;
  --bg-canvas: #F3EFE6;
  --bg-card: #EAE4D7;
  --bg-raised: #DFD7C6;
  --text-primary: #1A1815;
  --text-secondary: #3D3933;
  --text-muted: #5E584F;
  --border-hairline: #C7BFAE;
  --border-strong: #2B2823;
  --accent: #992626;
  --accent-hover: #781C1C;
  --accent-ink: #FFFFFF;
  --accent-soft: #F2DFDC;
  --focus-ring: #992626;
  --positive: #1F6642;
  --warning: #8A5212;
  --negative: #992626;
  --font-display: "Zilla Slab", Georgia, serif;
  --font-body: "Spectral", Georgia, serif;
  --font-mono: "Libre Franklin", ui-sans-serif, sans-serif;
  --font-weight-display: 700;
  --font-weight-body: 400;
  --tracking-display: -0.02em;
  --radius-control: 0px;
  --radius-card: 0px;
  --radius-panel: 0px;
  --radius-pill: 0px;
  --border-width: 1px;
  --container-max: 1240px;
  --shadow-card: none;
  --shadow-float: 0 8px 24px rgba(24, 23, 20, 0.12);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 110ms;
  --dur-medium: 170ms;
  --dur-slow: 260ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #11100E;
  --bg-canvas: #181714;
  --bg-card: #22201C;
  --bg-raised: #2D2A24;
  --text-primary: #EFEAE0;
  --text-secondary: #C4BDB0;
  --text-muted: #999184;
  --border-hairline: #38342D;
  --border-strong: #C4BDB0;
  --accent: #E87461;
  --accent-hover: #F09080;
  --accent-ink: #1C0C09;
  --accent-soft: #361D19;
  --focus-ring: #E87461;
  --positive: #58BA84;
  --warning: #E8A64D;
  --negative: #E87461;
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
