---
schema: unvibe-design-md/v1
themeId: "tonal-workspace"
name: "Tonal Workspace"
pack: "everyday-apps"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#F0F4F9"
    bgCanvas: "#F8FAFD"
    bgCard: "#FFFFFF"
    bgRaised: "#E6ECF5"
    textPrimary: "#1F1F1F"
    textSecondary: "#444746"
    textMuted: "#62666B"
    borderHairline: "rgba(31, 31, 31, 0.08)"
    borderStrong: "#C4C7C5"
    accent: "#0B57D0"
    accentHover: "#0842A0"
    accentInk: "#FFFFFF"
    accentSoft: "#D3E3FD"
    focusRing: "#0B57D0"
    positive: "#146C2E"
    warning: "#A25800"
    negative: "#B3261E"
  dark:
    bgDeep: "#131314"
    bgCanvas: "#1B1C1E"
    bgCard: "#222326"
    bgRaised: "#2D2F33"
    textPrimary: "#E3E3E3"
    textSecondary: "#C4C7C5"
    textMuted: "#989B9D"
    borderHairline: "rgba(227, 227, 227, 0.09)"
    borderStrong: "#444746"
    accent: "#A8C7FA"
    accentHover: "#C2D8FC"
    accentInk: "#062E6F"
    accentSoft: "#1F3557"
    focusRing: "#A8C7FA"
    positive: "#6DD58C"
    warning: "#F5B841"
    negative: "#F28B82"
typography:
  display: "\"DM Sans\", ui-sans-serif, system-ui, sans-serif"
  body: "\"DM Sans\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"Roboto Mono\", ui-monospace, monospace"
  displayWeight: 500
  bodyWeight: 400
  trackingDisplay: "-0.015em"
radius:
  control: "9999px"
  card: "16px"
  panel: "24px"
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
  fastMs: 140
  mediumMs: 220
  slowMs: 320
---

# DESIGN.md — Tonal Workspace

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `tonal-workspace`
- **Pack:** `everyday-apps`
- **Default Mode:** `light`
- **Mood:** airy, tonal, approachable, productive
- **Recommended Surface Modes:** operate, read
- **Best For:** mail clients, cloud drives, calendars, document suites, education portals

## 1. Visual Theme & Atmosphere

**Cool daylight tonal surface hierarchy with pill navigation and zero visual clutter.**

Inspired by modern productivity suites that replace harsh borders with gentle cool-blue tonal layering. Light-filled backgrounds separate navigation rails, active search bars, and working sheets effortlessly, keeping complex multi-pane tools calm and approachable.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#F0F4F9` | Sidebar / recessed shell |
| `--bg-canvas` | `#F8FAFD` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#E6ECF5` | Active rows, inputs, secondary pills |
| `--text-primary` | `#1F1F1F` | Headings and primary copy |
| `--text-secondary` | `#444746` | Supporting descriptions |
| `--text-muted` | `#62666B` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(31, 31, 31, 0.08)` | Subtle structural dividers |
| `--border-strong` | `#C4C7C5` | Interactive input and hover borders |
| `--accent` | `#0B57D0` | Primary CTA and focus highlight |
| `--accent-hover` | `#0842A0` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#D3E3FD` | Subtle selection wash |
| `--focus-ring` | `#0B57D0` | Keyboard focus indicator |
| `--positive` | `#146C2E` | Success / growth delta |
| `--warning` | `#A25800` | Caution state |
| `--negative` | `#B3261E` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#131314` | Sidebar / recessed shell |
| `--bg-canvas` | `#1B1C1E` | Main viewport ground |
| `--bg-card` | `#222326` | Elevated cards and panels |
| `--bg-raised` | `#2D2F33` | Active rows, inputs, secondary pills |
| `--text-primary` | `#E3E3E3` | Headings and primary copy |
| `--text-secondary` | `#C4C7C5` | Supporting descriptions |
| `--text-muted` | `#989B9D` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(227, 227, 227, 0.09)` | Subtle structural dividers |
| `--border-strong` | `#444746` | Interactive input and hover borders |
| `--accent` | `#A8C7FA` | Primary CTA and focus highlight |
| `--accent-hover` | `#C2D8FC` | Interactive hover accent |
| `--accent-ink` | `#062E6F` | Text inside filled accent controls |
| `--accent-soft` | `#1F3557` | Subtle selection wash |
| `--focus-ring` | `#A8C7FA` | Keyboard focus indicator |
| `--positive` | `#6DD58C` | Success / growth delta |
| `--warning` | `#F5B841` | Caution state |
| `--negative` | `#F28B82` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#1F1F1F` on `#F8FAFD` | **15.76:1** (Lc 100.3) |
| Light | Secondary Text / Canvas | `#444746` on `#F8FAFD` | **8.98:1** (Lc 88.6) |
| Light | Muted Text / Canvas | `#62666B` on `#F8FAFD` | **5.53:1** (Lc 75.8) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#0B57D0` | **6.39:1** (Lc -86) |
| Dark | Primary Text / Canvas | `#E3E3E3` on `#1B1C1E` | **13.29:1** (Lc -88.2) |
| Dark | Secondary Text / Canvas | `#C4C7C5` on `#1B1C1E` | **10.01:1** (Lc -70.7) |
| Dark | Muted Text / Canvas | `#989B9D` on `#1B1C1E` | **6.1:1** (Lc -46.4) |
| Dark | Accent Ink / Accent Fill | `#062E6F` on `#A8C7FA` | **7.5:1** (Lc 65.3) |

## 3. Typography & Scale

- **Display:** "DM Sans", ui-sans-serif, system-ui, sans-serif (Weight `500`, Tracking `-0.015em`)
- **Body:** "DM Sans", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "Roboto Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Roboto+Mono:wght@400;500&display=swap">
```
- **Notes:** Keep weights 400 and 500 for friendly legibility across long tables, sidebars, and event blocks.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `500` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `500` | Tracking `-0.015em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `9999px`, Card `16px`, Panel `24px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1520px` | **Density:** `comfortable`
- **Light Elevation:** Card `0 1px 2px rgba(15, 23, 42, 0.04)` | Float `0 8px 20px rgba(15, 23, 42, 0.10)`
- **Dark Elevation:** Neutral dark tonal containers (#131314 -> #1E1F20 -> #282A2C) with soft sky-blue active pills.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`140ms` fast / `220ms` medium / `320ms` slow) — Fluid pill state fills and calm drawer reveals.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Full-pill primary CTA or soft tonal floating action button (16px rounded square).
- **Secondary Button:** Transparent or soft tonal pill with clear text label.
- **Card:** 16px rounded surface separated primarily by cool-gray tonal fill rather than heavy outlines.
- **Input:** Full-pill global search bar in bgRaised (#E9EEF6 light) with 48px height.
- **Nav Item:** Full-pill sidebar item highlighted with accentSoft (#D3E3FD) and bold accent text.
- **Badge / Status:** Soft rectangular status chip with 6px radius.

### Interactive State Matrix

| State | Visual & Token Behavior | Accessibility Rule |
| :--- | :--- | :--- |
| **Default** | Surface `--bg-card` / `--bg-raised`, border `--border-hairline`, text `--text-primary` | Native `<button>` / `<a>` semantics; hit area `>=24px` desktop (`>=44px` touch) |
| **Hover** | Shift accent fill to `--accent-hover` or step surface to `--bg-raised` (`140ms` color transition) | Never jump layout dimensions or trigger large `scale()` transforms |
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
| **Wide** | `> 1440px` | Center container at `1520px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Helpful, crisp utility labels with clear undo and recovery actions.

## 8. Theme Do's & Don'ts

### Do
- Separate sidebar shell (#F0F4F9) from main working document card (#FFFFFF) cleanly.
- Use pill active navigation highlights in accentSoft.
- Keep action toolbars tidy with icon+label clarity.
- Ensure all interactive rows have at least 36px height.

### Don't
- Never add dark heavy borders around tonal cards.
- Never use saturated multi-color backgrounds across workspace panes.
- Never hide primary actions behind hover-only triggers on mobile.
- Never shrink search bar fonts below 15px.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Tonal Workspace (tonal-workspace) | Pack: everyday-apps | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Roboto+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #F0F4F9;
  --bg-canvas: #F8FAFD;
  --bg-card: #FFFFFF;
  --bg-raised: #E6ECF5;
  --text-primary: #1F1F1F;
  --text-secondary: #444746;
  --text-muted: #62666B;
  --border-hairline: rgba(31, 31, 31, 0.08);
  --border-strong: #C4C7C5;
  --accent: #0B57D0;
  --accent-hover: #0842A0;
  --accent-ink: #FFFFFF;
  --accent-soft: #D3E3FD;
  --focus-ring: #0B57D0;
  --positive: #146C2E;
  --warning: #A25800;
  --negative: #B3261E;
  --font-display: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-body: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Roboto Mono", ui-monospace, monospace;
  --font-weight-display: 500;
  --font-weight-body: 400;
  --tracking-display: -0.015em;
  --radius-control: 9999px;
  --radius-card: 16px;
  --radius-panel: 24px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1520px;
  --shadow-card: 0 1px 2px rgba(15, 23, 42, 0.04);
  --shadow-float: 0 8px 20px rgba(15, 23, 42, 0.10);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 140ms;
  --dur-medium: 220ms;
  --dur-slow: 320ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #131314;
  --bg-canvas: #1B1C1E;
  --bg-card: #222326;
  --bg-raised: #2D2F33;
  --text-primary: #E3E3E3;
  --text-secondary: #C4C7C5;
  --text-muted: #989B9D;
  --border-hairline: rgba(227, 227, 227, 0.09);
  --border-strong: #444746;
  --accent: #A8C7FA;
  --accent-hover: #C2D8FC;
  --accent-ink: #062E6F;
  --accent-soft: #1F3557;
  --focus-ring: #A8C7FA;
  --positive: #6DD58C;
  --warning: #F5B841;
  --negative: #F28B82;
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
