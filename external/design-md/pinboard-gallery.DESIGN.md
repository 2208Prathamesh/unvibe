---
schema: unvibe-design-md/v1
themeId: "pinboard-gallery"
name: "Pinboard Gallery"
pack: "modern"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#F4F3EE"
    bgCanvas: "#FFFFFF"
    bgCard: "#FBFBF9"
    bgRaised: "#ECEBE4"
    textPrimary: "#1A1816"
    textSecondary: "#4B4842"
    textMuted: "#66635B"
    borderHairline: "#E5E4DE"
    borderStrong: "#C8C7BE"
    accent: "#C4001D"
    accentHover: "#9E0017"
    accentInk: "#FFFFFF"
    accentSoft: "#FDECEF"
    focusRing: "#2B4CE6"
    positive: "#166E3E"
    warning: "#995700"
    negative: "#C4001D"
  dark:
    bgDeep: "#0E0E0D"
    bgCanvas: "#151514"
    bgCard: "#1F1F1D"
    bgRaised: "#2B2B28"
    textPrimary: "#F5F4F0"
    textSecondary: "#C4C2BA"
    textMuted: "#98968E"
    borderHairline: "rgba(245, 244, 240, 0.10)"
    borderStrong: "#42423D"
    accent: "#FF5C6C"
    accentHover: "#FF7A87"
    accentInk: "#1C0407"
    accentSoft: "#36161A"
    focusRing: "#7A94FF"
    positive: "#4CC38A"
    warning: "#F5B841"
    negative: "#FF5C6C"
typography:
  display: "\"DM Sans\", ui-sans-serif, system-ui, sans-serif"
  body: "\"DM Sans\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  displayWeight: 600
  bodyWeight: 400
  trackingDisplay: "-0.02em"
radius:
  control: "9999px"
  card: "16px"
  panel: "20px"
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
  slowMs: 320
---

# DESIGN.md — Pinboard Gallery

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `pinboard-gallery`
- **Pack:** `modern`
- **Default Mode:** `light`
- **Mood:** curated, visual-first, warm-white, playful-clean
- **Recommended Surface Modes:** social, read
- **Best For:** moodboards, asset libraries, design galleries, recipe collections, curated directories

## 1. Visual Theme & Atmosphere

**Warm cream visual discovery masonry canvas anchored by one crisp crimson action accent.**

Engineered for visual bookmarking, moodboards, inspiration indexes, and creative asset libraries. Pairs warm alabaster chrome with generous 16px-radius media tiles and tight 12-16px gutters so curated imagery reads like a contemporary gallery catalog.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#F4F3EE` | Sidebar / recessed shell |
| `--bg-canvas` | `#FFFFFF` | Main viewport ground |
| `--bg-card` | `#FBFBF9` | Elevated cards and panels |
| `--bg-raised` | `#ECEBE4` | Active rows, inputs, secondary pills |
| `--text-primary` | `#1A1816` | Headings and primary copy |
| `--text-secondary` | `#4B4842` | Supporting descriptions |
| `--text-muted` | `#66635B` | Captions, axis labels, timestamps |
| `--border-hairline` | `#E5E4DE` | Subtle structural dividers |
| `--border-strong` | `#C8C7BE` | Interactive input and hover borders |
| `--accent` | `#C4001D` | Primary CTA and focus highlight |
| `--accent-hover` | `#9E0017` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#FDECEF` | Subtle selection wash |
| `--focus-ring` | `#2B4CE6` | Keyboard focus indicator |
| `--positive` | `#166E3E` | Success / growth delta |
| `--warning` | `#995700` | Caution state |
| `--negative` | `#C4001D` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#0E0E0D` | Sidebar / recessed shell |
| `--bg-canvas` | `#151514` | Main viewport ground |
| `--bg-card` | `#1F1F1D` | Elevated cards and panels |
| `--bg-raised` | `#2B2B28` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F5F4F0` | Headings and primary copy |
| `--text-secondary` | `#C4C2BA` | Supporting descriptions |
| `--text-muted` | `#98968E` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(245, 244, 240, 0.10)` | Subtle structural dividers |
| `--border-strong` | `#42423D` | Interactive input and hover borders |
| `--accent` | `#FF5C6C` | Primary CTA and focus highlight |
| `--accent-hover` | `#FF7A87` | Interactive hover accent |
| `--accent-ink` | `#1C0407` | Text inside filled accent controls |
| `--accent-soft` | `#36161A` | Subtle selection wash |
| `--focus-ring` | `#7A94FF` | Keyboard focus indicator |
| `--positive` | `#4CC38A` | Success / growth delta |
| `--warning` | `#F5B841` | Caution state |
| `--negative` | `#FF5C6C` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#1A1816` on `#FFFFFF` | **17.7:1** (Lc 104.5) |
| Light | Secondary Text / Canvas | `#4B4842` on `#FFFFFF` | **9.11:1** (Lc 91) |
| Light | Muted Text / Canvas | `#66635B` on `#FFFFFF` | **6:1** (Lc 80) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#C4001D` | **6.24:1** (Lc -83.6) |
| Dark | Primary Text / Canvas | `#F5F4F0` on `#151514` | **16.6:1** (Lc -99.8) |
| Dark | Secondary Text / Canvas | `#C4C2BA` on `#151514` | **10.24:1** (Lc -68.9) |
| Dark | Muted Text / Canvas | `#98968E` on `#151514` | **6.17:1** (Lc -44.8) |
| Dark | Accent Ink / Accent Fill | `#1C0407` on `#FF5C6C` | **6.54:1** (Lc 47.8) |

## 3. Typography & Scale

- **Display:** "DM Sans", ui-sans-serif, system-ui, sans-serif (Weight `600`, Tracking `-0.02em`)
- **Body:** "DM Sans", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "IBM Plex Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
```
- **Notes:** Keep board titles crisp and short; use muted mono only for item counts and image dimensions.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `600` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `600` | Tracking `-0.02em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `9999px`, Card `16px`, Panel `20px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1440px` | **Density:** `comfortable`
- **Light Elevation:** Card `0 1px 2px rgba(33, 25, 34, 0.04)` | Float `0 10px 28px rgba(33, 25, 34, 0.12)`
- **Dark Elevation:** Deep warm charcoal (#141413 canvas, #1E1E1C surfaces) so colorful curated tiles stay balanced.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`130ms` fast / `200ms` medium / `320ms` slow) — Subtle hover scrim reveal on tiles; no erratic card scaling.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Full-pill crimson Save/Create button.
- **Secondary Button:** Warm stone pill (#ECEBE4 light) with dark ink.
- **Card:** 16px rounded media card with clean gutter spacing and subtle hover Save overlay.
- **Input:** Full-pill global search bar in bgRaised with clear keyboard shortcut.
- **Nav Item:** Pill navigation tabs with inverted dark active state.
- **Badge / Status:** Minimal format tag in muted warm ink.

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
| **Wide** | `> 1440px` | Center container at `1440px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Crisp, tactile curator language (Save, Board, Collect).

## 8. Theme Do's & Don'ts

### Do
- Give visual tiles generous 16px corners and uniform 12px or 16px masonry gutters.
- Keep header and chrome in warm whites/creams so imagery remains focal.
- Show clear Save / Organize action on focus and hover.
- Include real aspect-ratio sizing to eliminate masonry reflow jumps.

### Don't
- Never wrap masonry images in thick colored borders.
- Never add flashy bounce animations on grid load.
- Never crowd tile captions beyond 1-2 lines.
- Never use blue-purple gradients anywhere on the board.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Pinboard Gallery (pinboard-gallery) | Pack: modern | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #F4F3EE;
  --bg-canvas: #FFFFFF;
  --bg-card: #FBFBF9;
  --bg-raised: #ECEBE4;
  --text-primary: #1A1816;
  --text-secondary: #4B4842;
  --text-muted: #66635B;
  --border-hairline: #E5E4DE;
  --border-strong: #C8C7BE;
  --accent: #C4001D;
  --accent-hover: #9E0017;
  --accent-ink: #FFFFFF;
  --accent-soft: #FDECEF;
  --focus-ring: #2B4CE6;
  --positive: #166E3E;
  --warning: #995700;
  --negative: #C4001D;
  --font-display: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-body: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-weight-display: 600;
  --font-weight-body: 400;
  --tracking-display: -0.02em;
  --radius-control: 9999px;
  --radius-card: 16px;
  --radius-panel: 20px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1440px;
  --shadow-card: 0 1px 2px rgba(33, 25, 34, 0.04);
  --shadow-float: 0 10px 28px rgba(33, 25, 34, 0.12);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 130ms;
  --dur-medium: 200ms;
  --dur-slow: 320ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #0E0E0D;
  --bg-canvas: #151514;
  --bg-card: #1F1F1D;
  --bg-raised: #2B2B28;
  --text-primary: #F5F4F0;
  --text-secondary: #C4C2BA;
  --text-muted: #98968E;
  --border-hairline: rgba(245, 244, 240, 0.10);
  --border-strong: #42423D;
  --accent: #FF5C6C;
  --accent-hover: #FF7A87;
  --accent-ink: #1C0407;
  --accent-soft: #36161A;
  --focus-ring: #7A94FF;
  --positive: #4CC38A;
  --warning: #F5B841;
  --negative: #FF5C6C;
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
