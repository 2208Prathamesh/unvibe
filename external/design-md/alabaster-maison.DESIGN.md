---
schema: unvibe-design-md/v1
themeId: "alabaster-maison"
name: "Alabaster Maison"
pack: "premium"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#EEEAE3"
    bgCanvas: "#FAF9F7"
    bgCard: "#F4F1EC"
    bgRaised: "#EAE5DD"
    textPrimary: "#211E1C"
    textSecondary: "#4F4944"
    textMuted: "#6B645D"
    borderHairline: "rgba(33, 30, 28, 0.12)"
    borderStrong: "#C8C1B8"
    accent: "#262321"
    accentHover: "#3E3936"
    accentInk: "#FAF9F7"
    accentSoft: "#EAE5DD"
    focusRing: "#262321"
    positive: "#246342"
    warning: "#8A5614"
    negative: "#9E2A2B"
  dark:
    bgDeep: "#0E0D0C"
    bgCanvas: "#151412"
    bgCard: "#1E1C1A"
    bgRaised: "#292623"
    textPrimary: "#F5F2EC"
    textSecondary: "#C4BEB4"
    textMuted: "#989186"
    borderHairline: "rgba(245, 242, 236, 0.11)"
    borderStrong: "#423D37"
    accent: "#E6DFD5"
    accentHover: "#F5F2EC"
    accentInk: "#151412"
    accentSoft: "#292623"
    focusRing: "#E6DFD5"
    positive: "#66C28F"
    warning: "#E3AA4D"
    negative: "#E57373"
typography:
  display: "\"Cormorant Garamond\", Georgia, serif"
  body: "\"DM Sans\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  displayWeight: 500
  bodyWeight: 400
  trackingDisplay: "-0.02em"
radius:
  control: "2px"
  card: "4px"
  panel: "6px"
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
  fastMs: 180
  mediumMs: 280
  slowMs: 450
---

# DESIGN.md — Alabaster Maison

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `alabaster-maison`
- **Pack:** `premium`
- **Default Mode:** `light`
- **Mood:** architectural, gallery, sculptural, poised
- **Recommended Surface Modes:** editorial, persuade, read
- **Best For:** fashion houses, interior architecture, design portfolios, wine & culinary ateliers, cultural institutions

## 1. Visual Theme & Atmosphere

**Daylight architectural gallery aesthetic with sculptural contrast serifs and warm limestone paper.**

Exudes gallery-grade permanence in bright daylight: warm alabaster paper, deep charcoal-espresso ink, high-contrast editorial serifs, and understated matte-ink actions. Relies on typography scale, proportions, and photography rather than bright accent hues.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#EEEAE3` | Sidebar / recessed shell |
| `--bg-canvas` | `#FAF9F7` | Main viewport ground |
| `--bg-card` | `#F4F1EC` | Elevated cards and panels |
| `--bg-raised` | `#EAE5DD` | Active rows, inputs, secondary pills |
| `--text-primary` | `#211E1C` | Headings and primary copy |
| `--text-secondary` | `#4F4944` | Supporting descriptions |
| `--text-muted` | `#6B645D` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(33, 30, 28, 0.12)` | Subtle structural dividers |
| `--border-strong` | `#C8C1B8` | Interactive input and hover borders |
| `--accent` | `#262321` | Primary CTA and focus highlight |
| `--accent-hover` | `#3E3936` | Interactive hover accent |
| `--accent-ink` | `#FAF9F7` | Text inside filled accent controls |
| `--accent-soft` | `#EAE5DD` | Subtle selection wash |
| `--focus-ring` | `#262321` | Keyboard focus indicator |
| `--positive` | `#246342` | Success / growth delta |
| `--warning` | `#8A5614` | Caution state |
| `--negative` | `#9E2A2B` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#0E0D0C` | Sidebar / recessed shell |
| `--bg-canvas` | `#151412` | Main viewport ground |
| `--bg-card` | `#1E1C1A` | Elevated cards and panels |
| `--bg-raised` | `#292623` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F5F2EC` | Headings and primary copy |
| `--text-secondary` | `#C4BEB4` | Supporting descriptions |
| `--text-muted` | `#989186` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(245, 242, 236, 0.11)` | Subtle structural dividers |
| `--border-strong` | `#423D37` | Interactive input and hover borders |
| `--accent` | `#E6DFD5` | Primary CTA and focus highlight |
| `--accent-hover` | `#F5F2EC` | Interactive hover accent |
| `--accent-ink` | `#151412` | Text inside filled accent controls |
| `--accent-soft` | `#292623` | Subtle selection wash |
| `--focus-ring` | `#E6DFD5` | Keyboard focus indicator |
| `--positive` | `#66C28F` | Success / growth delta |
| `--warning` | `#E3AA4D` | Caution state |
| `--negative` | `#E57373` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#211E1C` on `#FAF9F7` | **15.75:1** (Lc 100) |
| Light | Secondary Text / Canvas | `#4F4944` on `#FAF9F7` | **8.42:1** (Lc 86.8) |
| Light | Muted Text / Canvas | `#6B645D` on `#FAF9F7` | **5.53:1** (Lc 75.6) |
| Light | Accent Ink / Accent Fill | `#FAF9F7` on `#262321` | **14.84:1** (Lc -101.3) |
| Dark | Primary Text / Canvas | `#F5F2EC` on `#151412` | **16.48:1** (Lc -98.7) |
| Dark | Secondary Text / Canvas | `#C4BEB4` on `#151412` | **9.97:1** (Lc -67.1) |
| Dark | Muted Text / Canvas | `#989186` on `#151412` | **5.9:1** (Lc -42.8) |
| Dark | Accent Ink / Accent Fill | `#151412` on `#E6DFD5` | **13.92:1** (Lc 86.7) |

## 3. Typography & Scale

- **Display:** "Cormorant Garamond", Georgia, serif (Weight `500`, Tracking `-0.02em`)
- **Body:** "DM Sans", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "IBM Plex Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400&display=swap">
```
- **Notes:** Ensure Cormorant Garamond is never set smaller than 24px; use DM Sans for all body paragraphs and controls.

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
- **Concentric Radii:** Control `2px`, Card `4px`, Panel `6px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1320px` | **Density:** `spacious`
- **Light Elevation:** Card `none` | Float `0 12px 36px rgba(38, 35, 33, 0.09)`
- **Dark Elevation:** Deep gallery slate-umber (#141312) with warm limestone typography.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`180ms` fast / `280ms` medium / `450ms` slow) — Measured gallery transitions.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid espresso ink button with alabaster text, 2px sharp corners.
- **Secondary Button:** Hairline bordered outline button with subtle hover fill.
- **Card:** Frameless or 1px hairline limestone panel; avoid rounded bubbles.
- **Input:** Underline or thin-bordered input field with high whitespace.
- **Nav Item:** Calm editorial links aligned cleanly along a 1px bottom rule.
- **Badge / Status:** Plain small-size mono text label.

### Interactive State Matrix

| State | Visual & Token Behavior | Accessibility Rule |
| :--- | :--- | :--- |
| **Default** | Surface `--bg-card` / `--bg-raised`, border `--border-hairline`, text `--text-primary` | Native `<button>` / `<a>` semantics; hit area `>=24px` desktop (`>=44px` touch) |
| **Hover** | Shift accent fill to `--accent-hover` or step surface to `--bg-raised` (`180ms` color transition) | Never jump layout dimensions or trigger large `scale()` transforms |
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

Understated, tactile, architectural.

## 8. Theme Do's & Don'ts

### Do
- Let photography sit in crisp asymmetric proportions (e.g. 7 columns image, 5 columns text).
- Keep buttons architectural with 0-2px corner radii.
- Use warm matte ink instead of saturated blue or purple CTAs.
- Use generous vertical margins between editorial passages.

### Don't
- Never set tiny 14px UI labels in Cormorant Garamond.
- Never drop loud saturated accent pills onto limestone paper.
- Never add drop shadows behind gallery photographs.
- Never use generic SaaS feature-icon grids.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Alabaster Maison (alabaster-maison) | Pack: premium | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #EEEAE3;
  --bg-canvas: #FAF9F7;
  --bg-card: #F4F1EC;
  --bg-raised: #EAE5DD;
  --text-primary: #211E1C;
  --text-secondary: #4F4944;
  --text-muted: #6B645D;
  --border-hairline: rgba(33, 30, 28, 0.12);
  --border-strong: #C8C1B8;
  --accent: #262321;
  --accent-hover: #3E3936;
  --accent-ink: #FAF9F7;
  --accent-soft: #EAE5DD;
  --focus-ring: #262321;
  --positive: #246342;
  --warning: #8A5614;
  --negative: #9E2A2B;
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-weight-display: 500;
  --font-weight-body: 400;
  --tracking-display: -0.02em;
  --radius-control: 2px;
  --radius-card: 4px;
  --radius-panel: 6px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1320px;
  --shadow-card: none;
  --shadow-float: 0 12px 36px rgba(38, 35, 33, 0.09);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 180ms;
  --dur-medium: 280ms;
  --dur-slow: 450ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #0E0D0C;
  --bg-canvas: #151412;
  --bg-card: #1E1C1A;
  --bg-raised: #292623;
  --text-primary: #F5F2EC;
  --text-secondary: #C4BEB4;
  --text-muted: #989186;
  --border-hairline: rgba(245, 242, 236, 0.11);
  --border-strong: #423D37;
  --accent: #E6DFD5;
  --accent-hover: #F5F2EC;
  --accent-ink: #151412;
  --accent-soft: #292623;
  --focus-ring: #E6DFD5;
  --positive: #66C28F;
  --warning: #E3AA4D;
  --negative: #E57373;
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
