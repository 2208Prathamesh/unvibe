---
schema: unvibe-design-md/v1
themeId: "cupertino-glass"
name: "Cupertino Anodized"
pack: "premium"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#ECECEF"
    bgCanvas: "#F5F5F7"
    bgCard: "#FFFFFF"
    bgRaised: "#E8E8ED"
    textPrimary: "#1D1D1F"
    textSecondary: "#49494D"
    textMuted: "#66666B"
    borderHairline: "rgba(29, 29, 31, 0.09)"
    borderStrong: "#C7C7CC"
    accent: "#0062C4"
    accentHover: "#004D99"
    accentInk: "#FFFFFF"
    accentSoft: "#E8F2FC"
    focusRing: "#0062C4"
    positive: "#167A3C"
    warning: "#9C5B00"
    negative: "#C92A2A"
  dark:
    bgDeep: "#000000"
    bgCanvas: "#0E0E0F"
    bgCard: "#1A1A1C"
    bgRaised: "#262629"
    textPrimary: "#F5F5F7"
    textSecondary: "#B8B8BE"
    textMuted: "#8E8E95"
    borderHairline: "rgba(255, 255, 255, 0.11)"
    borderStrong: "#3D3D42"
    accent: "#52A8FF"
    accentHover: "#78BCFF"
    accentInk: "#041629"
    accentSoft: "#132940"
    focusRing: "#52A8FF"
    positive: "#30D158"
    warning: "#FFD60A"
    negative: "#FF6961"
typography:
  display: "Inter, ui-sans-serif, system-ui, sans-serif"
  body: "Inter, ui-sans-serif, system-ui, sans-serif"
  mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  displayWeight: 600
  bodyWeight: 400
  trackingDisplay: "-0.025em"
radius:
  control: "10px"
  card: "18px"
  panel: "22px"
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
  slowMs: 360
---

# DESIGN.md — Cupertino Anodized

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `cupertino-glass`
- **Pack:** `premium`
- **Default Mode:** `light`
- **Mood:** precision, anodized, crisp, tactile
- **Recommended Surface Modes:** operate, persuade
- **Best For:** consumer hardware, native-feeling web apps, audio/video tools, desktop companions, product showcases

## 1. Visual Theme & Atmosphere

**Precision-milled aluminum silver grounds, crisp typography, and disciplined sapphire focus.**

Inspired by precision industrial hardware: ultra-clean cool silver canvases paired with pure white hardware sheets, tight display typography, and calibrated sapphire action accents. Uses subtle translucent backdrop blur strictly on sticky top navigation rails rather than floating cards.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#ECECEF` | Sidebar / recessed shell |
| `--bg-canvas` | `#F5F5F7` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#E8E8ED` | Active rows, inputs, secondary pills |
| `--text-primary` | `#1D1D1F` | Headings and primary copy |
| `--text-secondary` | `#49494D` | Supporting descriptions |
| `--text-muted` | `#66666B` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(29, 29, 31, 0.09)` | Subtle structural dividers |
| `--border-strong` | `#C7C7CC` | Interactive input and hover borders |
| `--accent` | `#0062C4` | Primary CTA and focus highlight |
| `--accent-hover` | `#004D99` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#E8F2FC` | Subtle selection wash |
| `--focus-ring` | `#0062C4` | Keyboard focus indicator |
| `--positive` | `#167A3C` | Success / growth delta |
| `--warning` | `#9C5B00` | Caution state |
| `--negative` | `#C92A2A` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#000000` | Sidebar / recessed shell |
| `--bg-canvas` | `#0E0E0F` | Main viewport ground |
| `--bg-card` | `#1A1A1C` | Elevated cards and panels |
| `--bg-raised` | `#262629` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F5F5F7` | Headings and primary copy |
| `--text-secondary` | `#B8B8BE` | Supporting descriptions |
| `--text-muted` | `#8E8E95` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(255, 255, 255, 0.11)` | Subtle structural dividers |
| `--border-strong` | `#3D3D42` | Interactive input and hover borders |
| `--accent` | `#52A8FF` | Primary CTA and focus highlight |
| `--accent-hover` | `#78BCFF` | Interactive hover accent |
| `--accent-ink` | `#041629` | Text inside filled accent controls |
| `--accent-soft` | `#132940` | Subtle selection wash |
| `--focus-ring` | `#52A8FF` | Keyboard focus indicator |
| `--positive` | `#30D158` | Success / growth delta |
| `--warning` | `#FFD60A` | Caution state |
| `--negative` | `#FF6961` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#1D1D1F` on `#F5F5F7` | **15.46:1** (Lc 97.9) |
| Light | Secondary Text / Canvas | `#49494D` on `#F5F5F7` | **8.23:1** (Lc 84.7) |
| Light | Muted Text / Canvas | `#66666B` on `#F5F5F7` | **5.24:1** (Lc 72.7) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#0062C4` | **5.93:1** (Lc -84.1) |
| Dark | Primary Text / Canvas | `#F5F5F7` on `#0E0E0F` | **17.72:1** (Lc -101.1) |
| Dark | Secondary Text / Canvas | `#B8B8BE` on `#0E0E0F` | **9.77:1** (Lc -64) |
| Dark | Muted Text / Canvas | `#8E8E95` on `#0E0E0F` | **5.93:1** (Lc -41.5) |
| Dark | Accent Ink / Accent Fill | `#041629` on `#52A8FF` | **7.3:1** (Lc 54) |

## 3. Typography & Scale

- **Display:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `600`, Tracking `-0.025em`)
- **Body:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "IBM Plex Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
```
- **Notes:** Use crisp -0.025em display tracking and keep line lengths comfortable around 60-68ch.

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
- **Concentric Radii:** Control `10px`, Card `18px`, Panel `22px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1200px` | **Density:** `comfortable`
- **Light Elevation:** Card `0 2px 8px rgba(0, 0, 0, 0.04)` | Float `0 12px 32px rgba(0, 0, 0, 0.10)`
- **Dark Elevation:** Deep anodized black (#000000 / #161617 / #222224) with crisp 1px specular borders.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`140ms` fast / `220ms` medium / `360ms` slow) — Silky, calibrated hardware-grade deceleration.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Full-pill sapphire blue CTA with crisp 500 label.
- **Secondary Button:** Outlined pill or subtle silver fill with dark ink.
- **Card:** Clean 18px rounded white/dark-anodized module with generous internal padding.
- **Input:** 10px rounded input with subtle inner contrast and sharp sapphire focus ring.
- **Nav Item:** Sticky translucent top nav bar (48-52px tall) with clean centered links.
- **Badge / Status:** Understated hairline tag without glow.

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
| **Wide** | `> 1440px` | Center container at `1200px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Crystal clear, confident, product-led specifications.

## 8. Theme Do's & Don'ts

### Do
- Set sticky top bars with subtle backdrop-filter blur and 1px hairline bottom border.
- Contrast crisp #FFFFFF modules cleanly against #F5F5F7 silver canvas.
- Use high-resolution product visuals on clean neutral grounds.
- Keep buttons generous with smooth concentric corners.

### Don't
- Never apply frosted glass over unreadable busy backgrounds.
- Never mix noisy multi-hue gradients onto hardware showcases.
- Never cram dense tables into large-radius consumer showcase cards.
- Never use exclamation marks on feature titles.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Cupertino Anodized (cupertino-glass) | Pack: premium | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #ECECEF;
  --bg-canvas: #F5F5F7;
  --bg-card: #FFFFFF;
  --bg-raised: #E8E8ED;
  --text-primary: #1D1D1F;
  --text-secondary: #49494D;
  --text-muted: #66666B;
  --border-hairline: rgba(29, 29, 31, 0.09);
  --border-strong: #C7C7CC;
  --accent: #0062C4;
  --accent-hover: #004D99;
  --accent-ink: #FFFFFF;
  --accent-soft: #E8F2FC;
  --focus-ring: #0062C4;
  --positive: #167A3C;
  --warning: #9C5B00;
  --negative: #C92A2A;
  --font-display: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-body: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-weight-display: 600;
  --font-weight-body: 400;
  --tracking-display: -0.025em;
  --radius-control: 10px;
  --radius-card: 18px;
  --radius-panel: 22px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1200px;
  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-float: 0 12px 32px rgba(0, 0, 0, 0.10);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 140ms;
  --dur-medium: 220ms;
  --dur-slow: 360ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #000000;
  --bg-canvas: #0E0E0F;
  --bg-card: #1A1A1C;
  --bg-raised: #262629;
  --text-primary: #F5F5F7;
  --text-secondary: #B8B8BE;
  --text-muted: #8E8E95;
  --border-hairline: rgba(255, 255, 255, 0.11);
  --border-strong: #3D3D42;
  --accent: #52A8FF;
  --accent-hover: #78BCFF;
  --accent-ink: #041629;
  --accent-soft: #132940;
  --focus-ring: #52A8FF;
  --positive: #30D158;
  --warning: #FFD60A;
  --negative: #FF6961;
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
