---
schema: unvibe-design-md/v1
themeId: "graphite-studio"
name: "Graphite Studio"
pack: "everyday-apps"
defaultMode: "dark"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#F2F2F4"
    bgCanvas: "#FAFAFA"
    bgCard: "#FFFFFF"
    bgRaised: "#F4F4F5"
    textPrimary: "#171717"
    textSecondary: "#525252"
    textMuted: "#6B6B72"
    borderHairline: "rgba(23, 23, 23, 0.09)"
    borderStrong: "#D4D4D8"
    accent: "#1D4ED8"
    accentHover: "#1E40AF"
    accentInk: "#FFFFFF"
    accentSoft: "#EFF6FF"
    focusRing: "#2563EB"
    positive: "#15803D"
    warning: "#B45309"
    negative: "#DC2626"
  dark:
    bgDeep: "#0F0F10"
    bgCanvas: "#141415"
    bgCard: "#19191B"
    bgRaised: "#232326"
    textPrimary: "#EDEDED"
    textSecondary: "#A1A1A6"
    textMuted: "#8B8B92"
    borderHairline: "rgba(237, 237, 237, 0.09)"
    borderStrong: "#343438"
    accent: "#60A5FA"
    accentHover: "#93C5FD"
    accentInk: "#0A1424"
    accentSoft: "#17253B"
    focusRing: "#60A5FA"
    positive: "#4CC38A"
    warning: "#F59E0B"
    negative: "#F87171"
typography:
  display: "Inter, ui-sans-serif, system-ui, sans-serif"
  body: "Inter, ui-sans-serif, system-ui, sans-serif"
  mono: "\"JetBrains Mono\", ui-monospace, monospace"
  displayWeight: 500
  bodyWeight: 400
  trackingDisplay: "-0.02em"
radius:
  control: "8px"
  card: "12px"
  panel: "16px"
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
  mediumMs: 200
  slowMs: 320
---

# DESIGN.md — Graphite Studio

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `graphite-studio`
- **Pack:** `everyday-apps`
- **Default Mode:** `dark`
- **Mood:** neutral, disciplined, ergonomic, quiet
- **Recommended Surface Modes:** operate, read
- **Best For:** SaaS dashboards, analytics suites, admin portals, project trackers

## 1. Visual Theme & Atmosphere

**Quiet neutral graphite surfaces that put charts, tables, and product content first.**

A disciplined, neutral graphite ramp paired with one crisp cobalt signal. Surfaces step cleanly without muddy tints or colored glows, letting dense operational interfaces breathe for eight-hour sessions. Never flashy, never saturated across chrome.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#F2F2F4` | Sidebar / recessed shell |
| `--bg-canvas` | `#FAFAFA` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#F4F4F5` | Active rows, inputs, secondary pills |
| `--text-primary` | `#171717` | Headings and primary copy |
| `--text-secondary` | `#525252` | Supporting descriptions |
| `--text-muted` | `#6B6B72` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(23, 23, 23, 0.09)` | Subtle structural dividers |
| `--border-strong` | `#D4D4D8` | Interactive input and hover borders |
| `--accent` | `#1D4ED8` | Primary CTA and focus highlight |
| `--accent-hover` | `#1E40AF` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#EFF6FF` | Subtle selection wash |
| `--focus-ring` | `#2563EB` | Keyboard focus indicator |
| `--positive` | `#15803D` | Success / growth delta |
| `--warning` | `#B45309` | Caution state |
| `--negative` | `#DC2626` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#0F0F10` | Sidebar / recessed shell |
| `--bg-canvas` | `#141415` | Main viewport ground |
| `--bg-card` | `#19191B` | Elevated cards and panels |
| `--bg-raised` | `#232326` | Active rows, inputs, secondary pills |
| `--text-primary` | `#EDEDED` | Headings and primary copy |
| `--text-secondary` | `#A1A1A6` | Supporting descriptions |
| `--text-muted` | `#8B8B92` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(237, 237, 237, 0.09)` | Subtle structural dividers |
| `--border-strong` | `#343438` | Interactive input and hover borders |
| `--accent` | `#60A5FA` | Primary CTA and focus highlight |
| `--accent-hover` | `#93C5FD` | Interactive hover accent |
| `--accent-ink` | `#0A1424` | Text inside filled accent controls |
| `--accent-soft` | `#17253B` | Subtle selection wash |
| `--focus-ring` | `#60A5FA` | Keyboard focus indicator |
| `--positive` | `#4CC38A` | Success / growth delta |
| `--warning` | `#F59E0B` | Caution state |
| `--negative` | `#F87171` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#171717` on `#FAFAFA` | **17.18:1** (Lc 101.7) |
| Light | Secondary Text / Canvas | `#525252` on `#FAFAFA` | **7.49:1** (Lc 84.2) |
| Light | Muted Text / Canvas | `#6B6B72` on `#FAFAFA` | **5.07:1** (Lc 73.3) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#1D4ED8` | **6.7:1** (Lc -87.2) |
| Dark | Primary Text / Canvas | `#EDEDED` on `#141415` | **15.73:1** (Lc -95.4) |
| Dark | Secondary Text / Canvas | `#A1A1A6` on `#141415` | **7.16:1** (Lc -50.8) |
| Dark | Muted Text / Canvas | `#8B8B92` on `#141415` | **5.44:1** (Lc -39.6) |
| Dark | Accent Ink / Accent Fill | `#0A1424` on `#60A5FA` | **7.26:1** (Lc 53.4) |

## 3. Typography & Scale

- **Display:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `500`, Tracking `-0.02em`)
- **Body:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "JetBrains Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
```
- **Notes:** Keep headings at 500 weight and tabular-nums on all metrics and timestamps.

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
- **Concentric Radii:** Control `8px`, Card `12px`, Panel `16px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1440px` | **Density:** `compact`
- **Light Elevation:** Card `0 1px 2px rgba(0, 0, 0, 0.05)` | Float `0 8px 24px rgba(0, 0, 0, 0.08)`
- **Dark Elevation:** Surface value steps + 1px hairline borders; optional inset 0 1px 0 rgba(255,255,255,0.08) on raised controls.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`140ms` fast / `200ms` medium / `320ms` slow) — Snappy surface and color transitions only; zero bounce.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid accent or high-contrast neutral fill, 36px nav / 44px hero, 8px radius, font-weight 500.
- **Secondary Button:** Raised background with 1px hairline border and primary ink.
- **Card:** Flat card background, 1px hairline border, 20-24px inner padding, 12px radius; no nested cards.
- **Input:** Raised background, 1px border-strong on hover, accent focus ring.
- **Nav Item:** 34px row height, 16px Lucide icon column, active state uses raised step + hairline.
- **Badge / Status:** Quiet monospace text on bgRaised; never neon or glowing pill.

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
| **Wide** | `> 1440px` | Center container at `1440px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Direct, factual, sentence case, comparison context on all deltas.

## 8. Theme Do's & Don'ts

### Do
- Keep sidebar and top chrome strictly neutral.
- Reserve cobalt accent for the single primary CTA, active tab, and chart focus series.
- Use tabular-nums on every KPI and table column.
- Align icons in one fixed column.

### Don't
- Never add purple/blue gradient fills or glowing card borders.
- Never place emojis next to sidebar headings.
- Never exceed 600 font-weight in application chrome.
- Never stack three equal sparkline cards if one primary chart suffices.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Graphite Studio (graphite-studio) | Pack: everyday-apps | Default: dark */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: dark;
  --bg-deep: #0F0F10;
  --bg-canvas: #141415;
  --bg-card: #19191B;
  --bg-raised: #232326;
  --text-primary: #EDEDED;
  --text-secondary: #A1A1A6;
  --text-muted: #8B8B92;
  --border-hairline: rgba(237, 237, 237, 0.09);
  --border-strong: #343438;
  --accent: #60A5FA;
  --accent-hover: #93C5FD;
  --accent-ink: #0A1424;
  --accent-soft: #17253B;
  --focus-ring: #60A5FA;
  --positive: #4CC38A;
  --warning: #F59E0B;
  --negative: #F87171;
  --font-display: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-body: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-weight-display: 500;
  --font-weight-body: 400;
  --tracking-display: -0.02em;
  --radius-control: 8px;
  --radius-card: 12px;
  --radius-panel: 16px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1440px;
  --shadow-card: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-float: 0 8px 24px rgba(0, 0, 0, 0.08);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 140ms;
  --dur-medium: 200ms;
  --dur-slow: 320ms;
}

[data-theme="light"] {
  color-scheme: light;
  --bg-deep: #F2F2F4;
  --bg-canvas: #FAFAFA;
  --bg-card: #FFFFFF;
  --bg-raised: #F4F4F5;
  --text-primary: #171717;
  --text-secondary: #525252;
  --text-muted: #6B6B72;
  --border-hairline: rgba(23, 23, 23, 0.09);
  --border-strong: #D4D4D8;
  --accent: #1D4ED8;
  --accent-hover: #1E40AF;
  --accent-ink: #FFFFFF;
  --accent-soft: #EFF6FF;
  --focus-ring: #2563EB;
  --positive: #15803D;
  --warning: #B45309;
  --negative: #DC2626;
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
