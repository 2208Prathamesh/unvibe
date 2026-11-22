---
schema: unvibe-design-md/v1
themeId: "cobalt-drafting"
name: "Cobalt Drafting"
pack: "cool"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#E9EFF8"
    bgCanvas: "#F4F7FB"
    bgCard: "#FFFFFF"
    bgRaised: "#E6EDF8"
    textPrimary: "#0F172A"
    textSecondary: "#3D4B63"
    textMuted: "#596882"
    borderHairline: "#D3DEEE"
    borderStrong: "#9BB2D4"
    accent: "#1D4ED8"
    accentHover: "#1E40AF"
    accentInk: "#FFFFFF"
    accentSoft: "#E8F0FE"
    focusRing: "#1D4ED8"
    positive: "#137547"
    warning: "#9C5B00"
    negative: "#C92A2A"
  dark:
    bgDeep: "#070C17"
    bgCanvas: "#0B1220"
    bgCard: "#121D33"
    bgRaised: "#1A2947"
    textPrimary: "#EDF2FA"
    textSecondary: "#B5C3DB"
    textMuted: "#8B9EBF"
    borderHairline: "rgba(181, 195, 219, 0.14)"
    borderStrong: "#354B73"
    accent: "#6EA8FE"
    accentHover: "#92BFFE"
    accentInk: "#071226"
    accentSoft: "#182A4A"
    focusRing: "#6EA8FE"
    positive: "#46C488"
    warning: "#F5B841"
    negative: "#F87171"
typography:
  display: "\"Space Grotesk\", ui-sans-serif, sans-serif"
  body: "Inter, ui-sans-serif, system-ui, sans-serif"
  mono: "\"JetBrains Mono\", ui-monospace, monospace"
  displayWeight: 600
  bodyWeight: 400
  trackingDisplay: "-0.025em"
radius:
  control: "4px"
  card: "6px"
  panel: "8px"
  pill: "9999px"
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
  fastMs: 130
  mediumMs: 200
  slowMs: 300
---

# DESIGN.md — Cobalt Drafting

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `cobalt-drafting`
- **Pack:** `cool`
- **Default Mode:** `light`
- **Mood:** architectural, blueprint, cool, technical
- **Recommended Surface Modes:** persuade, operate, read
- **Best For:** CAD/3D tools, mapping & spatial apps, infrastructure diagrams, engineering agencies, hardware specs

## 1. Visual Theme & Atmosphere

**Architectural drafting-table precision with blueprint cobalt highlights and crisp technical grids.**

Inspired by engineering CAD blueprints and architectural drafting vellum. Pairs crisp cool drafting paper (or deep midnight-indigo blueprint mode) with structural grid lines, Space Grotesk headings, and vivid drafting cobalt for active schematics and primary CTAs.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#E9EFF8` | Sidebar / recessed shell |
| `--bg-canvas` | `#F4F7FB` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#E6EDF8` | Active rows, inputs, secondary pills |
| `--text-primary` | `#0F172A` | Headings and primary copy |
| `--text-secondary` | `#3D4B63` | Supporting descriptions |
| `--text-muted` | `#596882` | Captions, axis labels, timestamps |
| `--border-hairline` | `#D3DEEE` | Subtle structural dividers |
| `--border-strong` | `#9BB2D4` | Interactive input and hover borders |
| `--accent` | `#1D4ED8` | Primary CTA and focus highlight |
| `--accent-hover` | `#1E40AF` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#E8F0FE` | Subtle selection wash |
| `--focus-ring` | `#1D4ED8` | Keyboard focus indicator |
| `--positive` | `#137547` | Success / growth delta |
| `--warning` | `#9C5B00` | Caution state |
| `--negative` | `#C92A2A` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#070C17` | Sidebar / recessed shell |
| `--bg-canvas` | `#0B1220` | Main viewport ground |
| `--bg-card` | `#121D33` | Elevated cards and panels |
| `--bg-raised` | `#1A2947` | Active rows, inputs, secondary pills |
| `--text-primary` | `#EDF2FA` | Headings and primary copy |
| `--text-secondary` | `#B5C3DB` | Supporting descriptions |
| `--text-muted` | `#8B9EBF` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(181, 195, 219, 0.14)` | Subtle structural dividers |
| `--border-strong` | `#354B73` | Interactive input and hover borders |
| `--accent` | `#6EA8FE` | Primary CTA and focus highlight |
| `--accent-hover` | `#92BFFE` | Interactive hover accent |
| `--accent-ink` | `#071226` | Text inside filled accent controls |
| `--accent-soft` | `#182A4A` | Subtle selection wash |
| `--focus-ring` | `#6EA8FE` | Keyboard focus indicator |
| `--positive` | `#46C488` | Success / growth delta |
| `--warning` | `#F5B841` | Caution state |
| `--negative` | `#F87171` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#0F172A` on `#F4F7FB` | **16.61:1** (Lc 99.6) |
| Light | Secondary Text / Canvas | `#3D4B63` on `#F4F7FB` | **8.19:1** (Lc 85.1) |
| Light | Muted Text / Canvas | `#596882` on `#F4F7FB` | **5.24:1** (Lc 73.2) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#1D4ED8` | **6.7:1** (Lc -87.2) |
| Dark | Primary Text / Canvas | `#EDF2FA` on `#0B1220` | **16.66:1** (Lc -98.4) |
| Dark | Secondary Text / Canvas | `#B5C3DB` on `#0B1220` | **10.51:1** (Lc -69.2) |
| Dark | Muted Text / Canvas | `#8B9EBF` on `#0B1220` | **6.9:1** (Lc -48.7) |
| Dark | Accent Ink / Accent Fill | `#071226` on `#6EA8FE` | **7.74:1** (Lc 55.7) |

## 3. Typography & Scale

- **Display:** "Space Grotesk", ui-sans-serif, sans-serif (Weight `600`, Tracking `-0.025em`)
- **Body:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "JetBrains Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap">
```
- **Notes:** Keep coordinates, tolerances, and blueprint indices in JetBrains Mono; use Space Grotesk strictly for headings and hero titles.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `600` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `600` | Tracking `-0.025em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `4px`, Card `6px`, Panel `8px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1320px` | **Density:** `comfortable`
- **Light Elevation:** Card `0 1px 2px rgba(15, 29, 64, 0.05)` | Float `0 12px 28px rgba(15, 29, 64, 0.12)`
- **Dark Elevation:** Deep cyanotype midnight (#0B1220 canvas, #111C30 cards) with crisp drafting blue hairlines.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`130ms` fast / `200ms` medium / `300ms` slow) — Vector-crisp snaps along axis.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid drafting cobalt CTA, 4px crisp architectural corners.
- **Secondary Button:** White/midnight surface with 1px structural hairline border.
- **Card:** 6px clean schematic card with faint crosshairs or coordinate labels when meaningful.
- **Input:** Crisp 4px bordered input with monospace focus states.
- **Nav Item:** Technical index tabs with cobalt active rule.
- **Badge / Status:** Small bordered mono badge for version or scale specs.

### Interactive State Matrix

| State | Visual & Token Behavior | Accessibility Rule |
| :--- | :--- | :--- |
| **Default** | Surface `--bg-card` / `--bg-raised`, border `--border-hairline`, text `--text-primary` | Native `<button>` / `<a>` semantics; hit area `>=24px` desktop (`>=44px` touch) |
| **Hover** | Shift accent fill to `--accent-hover` or step surface to `--bg-raised` (`130ms` color transition) | Never jump layout dimensions or trigger large `scale()` transforms |
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
| **Wide** | `> 1440px` | Center container at `1320px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Exact, measured, spatial-technical clarity.

## 8. Theme Do's & Don'ts

### Do
- Use crisp 1px cool-slate borders and clean grid coordinates.
- Keep cobalt focused on primary buttons, active diagram states, and links.
- Present technical specs in aligned key-value tables.
- Maintain sharp 4-6px corner geometry consistently.

### Don't
- Never scatter glowing futuristic HUD rings across the background.
- Never use purple-to-cyan gradients.
- Never write vague copy where exact dimensions or metrics fit.
- Never round structural cards into soft consumer bubbles.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Cobalt Drafting (cobalt-drafting) | Pack: cool | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #E9EFF8;
  --bg-canvas: #F4F7FB;
  --bg-card: #FFFFFF;
  --bg-raised: #E6EDF8;
  --text-primary: #0F172A;
  --text-secondary: #3D4B63;
  --text-muted: #596882;
  --border-hairline: #D3DEEE;
  --border-strong: #9BB2D4;
  --accent: #1D4ED8;
  --accent-hover: #1E40AF;
  --accent-ink: #FFFFFF;
  --accent-soft: #E8F0FE;
  --focus-ring: #1D4ED8;
  --positive: #137547;
  --warning: #9C5B00;
  --negative: #C92A2A;
  --font-display: "Space Grotesk", ui-sans-serif, sans-serif;
  --font-body: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-weight-display: 600;
  --font-weight-body: 400;
  --tracking-display: -0.025em;
  --radius-control: 4px;
  --radius-card: 6px;
  --radius-panel: 8px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1320px;
  --shadow-card: 0 1px 2px rgba(15, 29, 64, 0.05);
  --shadow-float: 0 12px 28px rgba(15, 29, 64, 0.12);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 130ms;
  --dur-medium: 200ms;
  --dur-slow: 300ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #070C17;
  --bg-canvas: #0B1220;
  --bg-card: #121D33;
  --bg-raised: #1A2947;
  --text-primary: #EDF2FA;
  --text-secondary: #B5C3DB;
  --text-muted: #8B9EBF;
  --border-hairline: rgba(181, 195, 219, 0.14);
  --border-strong: #354B73;
  --accent: #6EA8FE;
  --accent-hover: #92BFFE;
  --accent-ink: #071226;
  --accent-soft: #182A4A;
  --focus-ring: #6EA8FE;
  --positive: #46C488;
  --warning: #F5B841;
  --negative: #F87171;
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
