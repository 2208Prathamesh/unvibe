---
schema: unvibe-design-md/v1
themeId: "midcentury-studio"
name: "Midcentury Studio"
pack: "vintage"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#E5E0D5"
    bgCanvas: "#EFECE4"
    bgCard: "#F8F6F0"
    bgRaised: "#E2DDD0"
    textPrimary: "#1C1B19"
    textSecondary: "#45423C"
    textMuted: "#5E5A52"
    borderHairline: "#C7C0B2"
    borderStrong: "#1C1B19"
    accent: "#B84014"
    accentHover: "#94320E"
    accentInk: "#FFFFFF"
    accentSoft: "#F7E6DF"
    focusRing: "#1E4D8C"
    positive: "#1F6840"
    warning: "#995B00"
    negative: "#B8251E"
  dark:
    bgDeep: "#141311"
    bgCanvas: "#1C1B19"
    bgCard: "#262522"
    bgRaised: "#33312D"
    textPrimary: "#F2EFE8"
    textSecondary: "#C4BEB2"
    textMuted: "#999386"
    borderHairline: "#3D3A34"
    borderStrong: "#F2EFE8"
    accent: "#F07C4A"
    accentHover: "#F5966E"
    accentInk: "#1C0D06"
    accentSoft: "#382117"
    focusRing: "#78A9FF"
    positive: "#58BA84"
    warning: "#F0B449"
    negative: "#F47068"
typography:
  display: "\"Jost\", Futura, sans-serif"
  body: "\"Karla\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  displayWeight: 600
  bodyWeight: 400
  trackingDisplay: "-0.015em"
radius:
  control: "2px"
  card: "2px"
  panel: "4px"
  pill: "2px"
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
  fastMs: 120
  mediumMs: 180
  slowMs: 260
---

# DESIGN.md — Midcentury Studio

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `midcentury-studio`
- **Pack:** `vintage`
- **Default Mode:** `light`
- **Mood:** retro-modern, tactile, geometric, craftsman
- **Recommended Surface Modes:** persuade, read, operate
- **Best For:** creative schools, hardware studios, design agencies, events & exhibitions, independent software

## 1. Visual Theme & Atmosphere

**1960s industrial workshop prospectus with warm putty ground, bold geometric caps, and signal vermilion.**

Channels mid-century European industrial design schools and tactile workshop manuals: warm putty stock, crisp 2px ink framing, geometric sans titles paired with practical readable body text, and bold flat primary accents used with architectural discipline.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#E5E0D5` | Sidebar / recessed shell |
| `--bg-canvas` | `#EFECE4` | Main viewport ground |
| `--bg-card` | `#F8F6F0` | Elevated cards and panels |
| `--bg-raised` | `#E2DDD0` | Active rows, inputs, secondary pills |
| `--text-primary` | `#1C1B19` | Headings and primary copy |
| `--text-secondary` | `#45423C` | Supporting descriptions |
| `--text-muted` | `#5E5A52` | Captions, axis labels, timestamps |
| `--border-hairline` | `#C7C0B2` | Subtle structural dividers |
| `--border-strong` | `#1C1B19` | Interactive input and hover borders |
| `--accent` | `#B84014` | Primary CTA and focus highlight |
| `--accent-hover` | `#94320E` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#F7E6DF` | Subtle selection wash |
| `--focus-ring` | `#1E4D8C` | Keyboard focus indicator |
| `--positive` | `#1F6840` | Success / growth delta |
| `--warning` | `#995B00` | Caution state |
| `--negative` | `#B8251E` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#141311` | Sidebar / recessed shell |
| `--bg-canvas` | `#1C1B19` | Main viewport ground |
| `--bg-card` | `#262522` | Elevated cards and panels |
| `--bg-raised` | `#33312D` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F2EFE8` | Headings and primary copy |
| `--text-secondary` | `#C4BEB2` | Supporting descriptions |
| `--text-muted` | `#999386` | Captions, axis labels, timestamps |
| `--border-hairline` | `#3D3A34` | Subtle structural dividers |
| `--border-strong` | `#F2EFE8` | Interactive input and hover borders |
| `--accent` | `#F07C4A` | Primary CTA and focus highlight |
| `--accent-hover` | `#F5966E` | Interactive hover accent |
| `--accent-ink` | `#1C0D06` | Text inside filled accent controls |
| `--accent-soft` | `#382117` | Subtle selection wash |
| `--focus-ring` | `#78A9FF` | Keyboard focus indicator |
| `--positive` | `#58BA84` | Success / growth delta |
| `--warning` | `#F0B449` | Caution state |
| `--negative` | `#F47068` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#1C1B19` on `#EFECE4` | **14.58:1** (Lc 92.9) |
| Light | Secondary Text / Canvas | `#45423C` on `#EFECE4` | **8.48:1** (Lc 82) |
| Light | Muted Text / Canvas | `#5E5A52` on `#EFECE4` | **5.81:1** (Lc 72.5) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#B84014` | **5.55:1** (Lc -82.1) |
| Dark | Primary Text / Canvas | `#F2EFE8` on `#1C1B19` | **14.99:1** (Lc -96) |
| Dark | Secondary Text / Canvas | `#C4BEB2` on `#1C1B19` | **9.31:1** (Lc -66.3) |
| Dark | Muted Text / Canvas | `#999386` on `#1C1B19` | **5.63:1** (Lc -42.9) |
| Dark | Accent Ink / Accent Fill | `#1C0D06` on `#F07C4A` | **6.93:1** (Lc 50.9) |

## 3. Typography & Scale

- **Display:** "Jost", Futura, sans-serif (Weight `600`, Tracking `-0.015em`)
- **Body:** "Karla", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "IBM Plex Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Karla:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
```
- **Notes:** Set structural numbers, workshop dates, and module indexes large in Jost.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `600` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `600` | Tracking `-0.015em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `2px`, Card `2px`, Panel `4px`, Pill `2px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1260px` | **Density:** `comfortable`
- **Light Elevation:** Card `none` | Float `0 6px 18px rgba(28, 27, 25, 0.12)`
- **Dark Elevation:** Warm chalk-on-blackboard (#1C1B19 canvas, #262522 panels) with warm orange signal.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`120ms` fast / `180ms` medium / `260ms` slow) — Direct mechanical press.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid signal burnt-orange or ink fill, 2px crisp border, 2px corners.
- **Secondary Button:** Putty card fill with crisp 2px ink border.
- **Card:** Boxed 2px ink-ruled timetable/specification cells on warm paper.
- **Input:** Crisp 2px bordered field with zero drop shadow.
- **Nav Item:** Numbered or tabular grid navigation.
- **Badge / Status:** Flat rectangular index tag.

### Interactive State Matrix

| State | Visual & Token Behavior | Accessibility Rule |
| :--- | :--- | :--- |
| **Default** | Surface `--bg-card` / `--bg-raised`, border `--border-hairline`, text `--text-primary` | Native `<button>` / `<a>` semantics; hit area `>=24px` desktop (`>=44px` touch) |
| **Hover** | Shift accent fill to `--accent-hover` or step surface to `--bg-raised` (`120ms` color transition) | Never jump layout dimensions or trigger large `scale()` transforms |
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
| **Wide** | `> 1440px` | Center container at `1260px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Practical, studio-direct, concrete specifications and dates.

## 8. Theme Do's & Don'ts

### Do
- Box specifications, timetables, and specs cleanly with 1px and 2px ink rules.
- Contrast warm putty paper (#EFECE4) against brighter card stock (#F8F6F0).
- Use geometric numerals confidently at display scale.
- Keep photography high-contrast and honest.

### Don't
- Never add blurred background blobs or translucent glass panels.
- Never use soft 16px pill corners on vintage prospectus layouts.
- Never scatter rainbow gradients—keep accents flat and graphic.
- Never invent fake awards or filler hype copy.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Midcentury Studio (midcentury-studio) | Pack: vintage | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Karla:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #E5E0D5;
  --bg-canvas: #EFECE4;
  --bg-card: #F8F6F0;
  --bg-raised: #E2DDD0;
  --text-primary: #1C1B19;
  --text-secondary: #45423C;
  --text-muted: #5E5A52;
  --border-hairline: #C7C0B2;
  --border-strong: #1C1B19;
  --accent: #B84014;
  --accent-hover: #94320E;
  --accent-ink: #FFFFFF;
  --accent-soft: #F7E6DF;
  --focus-ring: #1E4D8C;
  --positive: #1F6840;
  --warning: #995B00;
  --negative: #B8251E;
  --font-display: "Jost", Futura, sans-serif;
  --font-body: "Karla", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-weight-display: 600;
  --font-weight-body: 400;
  --tracking-display: -0.015em;
  --radius-control: 2px;
  --radius-card: 2px;
  --radius-panel: 4px;
  --radius-pill: 2px;
  --border-width: 2px;
  --container-max: 1260px;
  --shadow-card: none;
  --shadow-float: 0 6px 18px rgba(28, 27, 25, 0.12);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 120ms;
  --dur-medium: 180ms;
  --dur-slow: 260ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #141311;
  --bg-canvas: #1C1B19;
  --bg-card: #262522;
  --bg-raised: #33312D;
  --text-primary: #F2EFE8;
  --text-secondary: #C4BEB2;
  --text-muted: #999386;
  --border-hairline: #3D3A34;
  --border-strong: #F2EFE8;
  --accent: #F07C4A;
  --accent-hover: #F5966E;
  --accent-ink: #1C0D06;
  --accent-soft: #382117;
  --focus-ring: #78A9FF;
  --positive: #58BA84;
  --warning: #F0B449;
  --negative: #F47068;
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
