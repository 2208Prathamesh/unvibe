---
schema: unvibe-design-md/v1
themeId: "amber-instrument"
name: "Amber Instrument"
pack: "vintage"
defaultMode: "dark"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#E8E3D9"
    bgCanvas: "#F2EFE9"
    bgCard: "#FAF8F3"
    bgRaised: "#E5DFD3"
    textPrimary: "#1B1916"
    textSecondary: "#48433B"
    textMuted: "#625B50"
    borderHairline: "#CEC7B8"
    borderStrong: "#9C9280"
    accent: "#944E0E"
    accentHover: "#783E0A"
    accentInk: "#FFFFFF"
    accentSoft: "#F7E9D9"
    focusRing: "#944E0E"
    positive: "#1D6B43"
    warning: "#944E0E"
    negative: "#B42B22"
  dark:
    bgDeep: "#0F0E0C"
    bgCanvas: "#141311"
    bgCard: "#1C1B18"
    bgRaised: "#262420"
    textPrimary: "#EFECE4"
    textSecondary: "#BDB6A7"
    textMuted: "#968E7F"
    borderHairline: "rgba(239, 236, 228, 0.10)"
    borderStrong: "#454038"
    accent: "#E59235"
    accentHover: "#F0A756"
    accentInk: "#170F05"
    accentSoft: "#2E2112"
    focusRing: "#E59235"
    positive: "#58BA84"
    warning: "#E59235"
    negative: "#F06E63"
typography:
  display: "\"Space Grotesk\", ui-sans-serif, sans-serif"
  body: "\"IBM Plex Sans\", ui-sans-serif, sans-serif"
  mono: "\"JetBrains Mono\", ui-monospace, monospace"
  displayWeight: 500
  bodyWeight: 400
  trackingDisplay: "-0.02em"
radius:
  control: "4px"
  card: "8px"
  panel: "10px"
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
  fastMs: 100
  mediumMs: 160
  slowMs: 240
---

# DESIGN.md — Amber Instrument

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `amber-instrument`
- **Pack:** `vintage`
- **Default Mode:** `dark`
- **Mood:** analog, tactile, calibrated, retro-technical
- **Recommended Surface Modes:** operate, persuade
- **Best For:** audio plugins, hardware companions, synthesizers, telemetry meters, retro developer tools

## 1. Visual Theme & Atmosphere

**Anodized analog hardware chassis with tactile phosphor-amber telemetry and precision mono readouts.**

Inspired by vintage audio synthesizers, precision field instruments, and anodized dark control decks. Uses warm gunmetal chassis layers, calibrated amber numeric readouts, and tight mechanical borders instead of clichéd neon CRT green or cyber-slop.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#E8E3D9` | Sidebar / recessed shell |
| `--bg-canvas` | `#F2EFE9` | Main viewport ground |
| `--bg-card` | `#FAF8F3` | Elevated cards and panels |
| `--bg-raised` | `#E5DFD3` | Active rows, inputs, secondary pills |
| `--text-primary` | `#1B1916` | Headings and primary copy |
| `--text-secondary` | `#48433B` | Supporting descriptions |
| `--text-muted` | `#625B50` | Captions, axis labels, timestamps |
| `--border-hairline` | `#CEC7B8` | Subtle structural dividers |
| `--border-strong` | `#9C9280` | Interactive input and hover borders |
| `--accent` | `#944E0E` | Primary CTA and focus highlight |
| `--accent-hover` | `#783E0A` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#F7E9D9` | Subtle selection wash |
| `--focus-ring` | `#944E0E` | Keyboard focus indicator |
| `--positive` | `#1D6B43` | Success / growth delta |
| `--warning` | `#944E0E` | Caution state |
| `--negative` | `#B42B22` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#0F0E0C` | Sidebar / recessed shell |
| `--bg-canvas` | `#141311` | Main viewport ground |
| `--bg-card` | `#1C1B18` | Elevated cards and panels |
| `--bg-raised` | `#262420` | Active rows, inputs, secondary pills |
| `--text-primary` | `#EFECE4` | Headings and primary copy |
| `--text-secondary` | `#BDB6A7` | Supporting descriptions |
| `--text-muted` | `#968E7F` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(239, 236, 228, 0.10)` | Subtle structural dividers |
| `--border-strong` | `#454038` | Interactive input and hover borders |
| `--accent` | `#E59235` | Primary CTA and focus highlight |
| `--accent-hover` | `#F0A756` | Interactive hover accent |
| `--accent-ink` | `#170F05` | Text inside filled accent controls |
| `--accent-soft` | `#2E2112` | Subtle selection wash |
| `--focus-ring` | `#E59235` | Keyboard focus indicator |
| `--positive` | `#58BA84` | Success / growth delta |
| `--warning` | `#E59235` | Caution state |
| `--negative` | `#F06E63` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#1B1916` on `#F2EFE9` | **15.28:1** (Lc 95) |
| Light | Secondary Text / Canvas | `#48433B` on `#F2EFE9` | **8.54:1** (Lc 83.4) |
| Light | Muted Text / Canvas | `#625B50` on `#F2EFE9` | **5.84:1** (Lc 73.7) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#944E0E` | **6.26:1** (Lc -85.9) |
| Dark | Primary Text / Canvas | `#EFECE4` on `#141311` | **15.73:1** (Lc -94.9) |
| Dark | Secondary Text / Canvas | `#BDB6A7` on `#141311` | **9.21:1** (Lc -62.5) |
| Dark | Muted Text / Canvas | `#968E7F` on `#141311` | **5.72:1** (Lc -41.3) |
| Dark | Accent Ink / Accent Fill | `#170F05` on `#E59235` | **7.67:1** (Lc 55.1) |

## 3. Typography & Scale

- **Display:** "Space Grotesk", ui-sans-serif, sans-serif (Weight `500`, Tracking `-0.02em`)
- **Body:** "IBM Plex Sans", ui-sans-serif, sans-serif (Weight `400`)
- **Monospace:** "JetBrains Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600&family=IBM+Plex+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap">
```
- **Notes:** Set dial readouts, dB values, and frequencies in tabular JetBrains Mono.

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
- **Concentric Radii:** Control `4px`, Card `8px`, Panel `10px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1320px` | **Density:** `compact`
- **Light Elevation:** Card `0 1px 2px rgba(20, 19, 17, 0.06)` | Float `0 10px 24px rgba(20, 19, 17, 0.12)`
- **Dark Elevation:** Anodized gunmetal surfaces (#141311 / #1C1B18 / #262420) with subtle 1px top bezel highlights.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`100ms` fast / `160ms` medium / `240ms` slow) — Detented hardware switch snaps.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid phosphor-amber control with dark ink on dark chassis, crisp 4px radius.
- **Secondary Button:** Gunmetal raised keycap with 1px hairline border.
- **Card:** Recessed or raised instrument rack module with crisp 1px edge and subtle top bevel.
- **Input:** Monospace numeric input inside recessed dark well.
- **Nav Item:** Tactile tab selector with active amber status dot (live state only).
- **Badge / Status:** Calibrated monospace readout label.

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
| **Wide** | `> 1440px` | Center container at `1320px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Technical, tactile, hardware-authentic.

## 8. Theme Do's & Don'ts

### Do
- Pair warm gunmetal surfaces with warm amber readouts.
- Use monospace tabular numbers for every telemetry reading.
- Keep borders razor-clean at 4-8px radius.
- Provide crisp keyboard navigation across control banks.

### Don't
- Never simulate blurry CRT scanline filters over readable body text.
- Never add neon purple glow effects behind dials.
- Never animate dials or meters continuously without live data.
- Never use low-contrast gray-on-black text for technical parameters.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Amber Instrument (amber-instrument) | Pack: vintage | Default: dark */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600&family=IBM+Plex+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: dark;
  --bg-deep: #0F0E0C;
  --bg-canvas: #141311;
  --bg-card: #1C1B18;
  --bg-raised: #262420;
  --text-primary: #EFECE4;
  --text-secondary: #BDB6A7;
  --text-muted: #968E7F;
  --border-hairline: rgba(239, 236, 228, 0.10);
  --border-strong: #454038;
  --accent: #E59235;
  --accent-hover: #F0A756;
  --accent-ink: #170F05;
  --accent-soft: #2E2112;
  --focus-ring: #E59235;
  --positive: #58BA84;
  --warning: #E59235;
  --negative: #F06E63;
  --font-display: "Space Grotesk", ui-sans-serif, sans-serif;
  --font-body: "IBM Plex Sans", ui-sans-serif, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-weight-display: 500;
  --font-weight-body: 400;
  --tracking-display: -0.02em;
  --radius-control: 4px;
  --radius-card: 8px;
  --radius-panel: 10px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1320px;
  --shadow-card: 0 1px 2px rgba(20, 19, 17, 0.06);
  --shadow-float: 0 10px 24px rgba(20, 19, 17, 0.12);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 100ms;
  --dur-medium: 160ms;
  --dur-slow: 240ms;
}

[data-theme="light"] {
  color-scheme: light;
  --bg-deep: #E8E3D9;
  --bg-canvas: #F2EFE9;
  --bg-card: #FAF8F3;
  --bg-raised: #E5DFD3;
  --text-primary: #1B1916;
  --text-secondary: #48433B;
  --text-muted: #625B50;
  --border-hairline: #CEC7B8;
  --border-strong: #9C9280;
  --accent: #944E0E;
  --accent-hover: #783E0A;
  --accent-ink: #FFFFFF;
  --accent-soft: #F7E9D9;
  --focus-ring: #944E0E;
  --positive: #1D6B43;
  --warning: #944E0E;
  --negative: #B42B22;
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
