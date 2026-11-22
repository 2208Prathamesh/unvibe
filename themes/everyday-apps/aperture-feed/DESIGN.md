---
schema: unvibe-design-md/v1
themeId: "aperture-feed"
name: "Aperture Feed"
pack: "everyday-apps"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#F5F5F5"
    bgCanvas: "#FFFFFF"
    bgCard: "#FFFFFF"
    bgRaised: "#EFEFEF"
    textPrimary: "#1A1A1A"
    textSecondary: "#525252"
    textMuted: "#6E6E6E"
    borderHairline: "#E5E5E5"
    borderStrong: "#C7C7C7"
    accent: "#006EC7"
    accentHover: "#0059A3"
    accentInk: "#FFFFFF"
    accentSoft: "#EBF5FF"
    focusRing: "#006EC7"
    positive: "#16803C"
    warning: "#B45309"
    negative: "#D92D20"
  dark:
    bgDeep: "#000000"
    bgCanvas: "#000000"
    bgCard: "#121212"
    bgRaised: "#222222"
    textPrimary: "#F5F5F5"
    textSecondary: "#A8A8A8"
    textMuted: "#8E8E8E"
    borderHairline: "#262626"
    borderStrong: "#383838"
    accent: "#4DAEFF"
    accentHover: "#73BFFF"
    accentInk: "#041629"
    accentSoft: "#0C2338"
    focusRing: "#4DAEFF"
    positive: "#4CC38A"
    warning: "#F59E0B"
    negative: "#FF5C6C"
typography:
  display: "Inter, ui-sans-serif, system-ui, sans-serif"
  body: "Inter, ui-sans-serif, system-ui, sans-serif"
  mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  displayWeight: 600
  bodyWeight: 400
  trackingDisplay: "-0.015em"
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
  fastMs: 120
  mediumMs: 180
  slowMs: 280
---

# DESIGN.md — Aperture Feed

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `aperture-feed`
- **Pack:** `everyday-apps`
- **Default Mode:** `light`
- **Mood:** photographic, minimal, crisp, unobtrusive
- **Recommended Surface Modes:** social, operate
- **Best For:** photo feeds, creator networks, media galleries, community streams, mobile-first social apps

## 1. Visual Theme & Atmosphere

**Edge-to-edge photography-first social stream with whisper-quiet monochrome chrome.**

Engineered so user photography, carousels, and visual media carry 100% of the color on screen. The interface steps back into pure white or obsidian black with hairline separators, clean 44px touch targets, and a single crisp action blue.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#F5F5F5` | Sidebar / recessed shell |
| `--bg-canvas` | `#FFFFFF` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#EFEFEF` | Active rows, inputs, secondary pills |
| `--text-primary` | `#1A1A1A` | Headings and primary copy |
| `--text-secondary` | `#525252` | Supporting descriptions |
| `--text-muted` | `#6E6E6E` | Captions, axis labels, timestamps |
| `--border-hairline` | `#E5E5E5` | Subtle structural dividers |
| `--border-strong` | `#C7C7C7` | Interactive input and hover borders |
| `--accent` | `#006EC7` | Primary CTA and focus highlight |
| `--accent-hover` | `#0059A3` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#EBF5FF` | Subtle selection wash |
| `--focus-ring` | `#006EC7` | Keyboard focus indicator |
| `--positive` | `#16803C` | Success / growth delta |
| `--warning` | `#B45309` | Caution state |
| `--negative` | `#D92D20` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#000000` | Sidebar / recessed shell |
| `--bg-canvas` | `#000000` | Main viewport ground |
| `--bg-card` | `#121212` | Elevated cards and panels |
| `--bg-raised` | `#222222` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F5F5F5` | Headings and primary copy |
| `--text-secondary` | `#A8A8A8` | Supporting descriptions |
| `--text-muted` | `#8E8E8E` | Captions, axis labels, timestamps |
| `--border-hairline` | `#262626` | Subtle structural dividers |
| `--border-strong` | `#383838` | Interactive input and hover borders |
| `--accent` | `#4DAEFF` | Primary CTA and focus highlight |
| `--accent-hover` | `#73BFFF` | Interactive hover accent |
| `--accent-ink` | `#041629` | Text inside filled accent controls |
| `--accent-soft` | `#0C2338` | Subtle selection wash |
| `--focus-ring` | `#4DAEFF` | Keyboard focus indicator |
| `--positive` | `#4CC38A` | Success / growth delta |
| `--warning` | `#F59E0B` | Caution state |
| `--negative` | `#FF5C6C` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#1A1A1A` on `#FFFFFF` | **17.4:1** (Lc 104.3) |
| Light | Secondary Text / Canvas | `#525252` on `#FFFFFF` | **7.81:1** (Lc 87.2) |
| Light | Muted Text / Canvas | `#6E6E6E` on `#FFFFFF` | **5.1:1** (Lc 75.2) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#006EC7` | **5.18:1** (Lc -80.3) |
| Dark | Primary Text / Canvas | `#F5F5F5` on `#000000` | **19.26:1** (Lc -101.3) |
| Dark | Secondary Text / Canvas | `#A8A8A8` on `#000000` | **8.83:1** (Lc -55.2) |
| Dark | Muted Text / Canvas | `#8E8E8E` on `#000000` | **6.41:1** (Lc -41.6) |
| Dark | Accent Ink / Accent Fill | `#041629` on `#4DAEFF` | **7.65:1** (Lc 56.1) |

## 3. Typography & Scale

- **Display:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `600`, Tracking `-0.015em`)
- **Body:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "IBM Plex Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
```
- **Notes:** Keep profile handles at 600 weight, captions at 400, and timestamp metadata muted at 12px.

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
- **Concentric Radii:** Control `8px`, Card `12px`, Panel `16px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1040px` | **Density:** `comfortable`
- **Light Elevation:** Card `none` | Float `0 8px 24px rgba(0, 0, 0, 0.12)`
- **Dark Elevation:** Pure #000000 canvas with #121212 modals and 1px #262626 dividers for true OLED contrast behind imagery.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`120ms` fast / `180ms` medium / `280ms` slow) — Responsive micro-scale press on action icons and smooth modal sheet reveal.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid signal blue button, 8px radius, 32-36px height, crisp white or dark ink.
- **Secondary Button:** Neutral bgRaised pill/button with zero heavy border.
- **Card:** Borderless feed stream separated by 1px horizontal rules, or clean 12px media tiles.
- **Input:** Soft bgRaised search pill without heavy border until focused.
- **Nav Item:** 24px fixed icon rail with bold active state; collapses cleanly on mobile.
- **Badge / Status:** Minimal ring border for live/active story avatars only; avoid badge clutter on posts.

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
| **Wide** | `> 1440px` | Center container at `1040px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Invisible utility labels (Follow, Save, Reply, 2h) so user content speaks.

## 8. Theme Do's & Don'ts

### Do
- Keep feed chrome completely monochrome so photos never clash with UI colors.
- Use crisp 1px dividers between feed items on desktop and seamless vertical flow on mobile.
- Enforce explicit aspect ratios (1:1, 4:5, 16:9) on media slots to prevent layout shift.
- Keep touch targets at least 44x44px for like, save, and share controls.

### Don't
- Never apply colored gradients across navigation bars or buttons.
- Never put drop shadows behind every post in a vertical feed.
- Never truncate user names poorly—always apply min-w-0.
- Never use rainbow badges or animated sparkles.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Aperture Feed (aperture-feed) | Pack: everyday-apps | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #F5F5F5;
  --bg-canvas: #FFFFFF;
  --bg-card: #FFFFFF;
  --bg-raised: #EFEFEF;
  --text-primary: #1A1A1A;
  --text-secondary: #525252;
  --text-muted: #6E6E6E;
  --border-hairline: #E5E5E5;
  --border-strong: #C7C7C7;
  --accent: #006EC7;
  --accent-hover: #0059A3;
  --accent-ink: #FFFFFF;
  --accent-soft: #EBF5FF;
  --focus-ring: #006EC7;
  --positive: #16803C;
  --warning: #B45309;
  --negative: #D92D20;
  --font-display: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-body: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-weight-display: 600;
  --font-weight-body: 400;
  --tracking-display: -0.015em;
  --radius-control: 8px;
  --radius-card: 12px;
  --radius-panel: 16px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1040px;
  --shadow-card: none;
  --shadow-float: 0 8px 24px rgba(0, 0, 0, 0.12);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 120ms;
  --dur-medium: 180ms;
  --dur-slow: 280ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #000000;
  --bg-canvas: #000000;
  --bg-card: #121212;
  --bg-raised: #222222;
  --text-primary: #F5F5F5;
  --text-secondary: #A8A8A8;
  --text-muted: #8E8E8E;
  --border-hairline: #262626;
  --border-strong: #383838;
  --accent: #4DAEFF;
  --accent-hover: #73BFFF;
  --accent-ink: #041629;
  --accent-soft: #0C2338;
  --focus-ring: #4DAEFF;
  --positive: #4CC38A;
  --warning: #F59E0B;
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
