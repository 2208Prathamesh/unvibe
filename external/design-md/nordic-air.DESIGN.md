---
schema: unvibe-design-md/v1
themeId: "nordic-air"
name: "Nordic Air"
pack: "modern"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#EBEEEC"
    bgCanvas: "#F5F7F5"
    bgCard: "#FFFFFF"
    bgRaised: "#E8ECE9"
    textPrimary: "#151D19"
    textSecondary: "#435049"
    textMuted: "#5E6B64"
    borderHairline: "rgba(21, 29, 25, 0.09)"
    borderStrong: "#C5CEC9"
    accent: "#235A42"
    accentHover: "#1A4633"
    accentInk: "#FFFFFF"
    accentSoft: "#E6F0EB"
    focusRing: "#235A42"
    positive: "#1F6F49"
    warning: "#9A5B13"
    negative: "#B8332A"
  dark:
    bgDeep: "#0D110F"
    bgCanvas: "#121714"
    bgCard: "#1A211D"
    bgRaised: "#242D28"
    textPrimary: "#EDF2EE"
    textSecondary: "#B5C2BA"
    textMuted: "#8B9B92"
    borderHairline: "rgba(237, 242, 238, 0.10)"
    borderStrong: "#35423B"
    accent: "#63C79B"
    accentHover: "#80D6B0"
    accentInk: "#0A1B13"
    accentSoft: "#173025"
    focusRing: "#63C79B"
    positive: "#63C79B"
    warning: "#E8B04F"
    negative: "#F87171"
typography:
  display: "\"Instrument Sans\", ui-sans-serif, system-ui, sans-serif"
  body: "\"Instrument Sans\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  displayWeight: 500
  bodyWeight: 400
  trackingDisplay: "-0.02em"
radius:
  control: "10px"
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
  fastMs: 160
  mediumMs: 240
  slowMs: 400
---

# DESIGN.md — Nordic Air

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `nordic-air`
- **Pack:** `modern`
- **Default Mode:** `light`
- **Mood:** serene, scandinavian, spatial, natural
- **Recommended Surface Modes:** persuade, read, operate
- **Best For:** climate tech, health & wellness, habit trackers, consumer apps, studio sites

## 1. Visual Theme & Atmosphere

**Scandinavian spatial calm built on mist-white stone, sage moss ink, and generous breathing room.**

Pairs cool stone-tinted whites with deep fjord moss accents and open typographic proportions. Designed for wellness, sustainability, climate, and calm consumer products that need serene clarity without drifting into cold sterile clinical white.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#EBEEEC` | Sidebar / recessed shell |
| `--bg-canvas` | `#F5F7F5` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#E8ECE9` | Active rows, inputs, secondary pills |
| `--text-primary` | `#151D19` | Headings and primary copy |
| `--text-secondary` | `#435049` | Supporting descriptions |
| `--text-muted` | `#5E6B64` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(21, 29, 25, 0.09)` | Subtle structural dividers |
| `--border-strong` | `#C5CEC9` | Interactive input and hover borders |
| `--accent` | `#235A42` | Primary CTA and focus highlight |
| `--accent-hover` | `#1A4633` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#E6F0EB` | Subtle selection wash |
| `--focus-ring` | `#235A42` | Keyboard focus indicator |
| `--positive` | `#1F6F49` | Success / growth delta |
| `--warning` | `#9A5B13` | Caution state |
| `--negative` | `#B8332A` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#0D110F` | Sidebar / recessed shell |
| `--bg-canvas` | `#121714` | Main viewport ground |
| `--bg-card` | `#1A211D` | Elevated cards and panels |
| `--bg-raised` | `#242D28` | Active rows, inputs, secondary pills |
| `--text-primary` | `#EDF2EE` | Headings and primary copy |
| `--text-secondary` | `#B5C2BA` | Supporting descriptions |
| `--text-muted` | `#8B9B92` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(237, 242, 238, 0.10)` | Subtle structural dividers |
| `--border-strong` | `#35423B` | Interactive input and hover borders |
| `--accent` | `#63C79B` | Primary CTA and focus highlight |
| `--accent-hover` | `#80D6B0` | Interactive hover accent |
| `--accent-ink` | `#0A1B13` | Text inside filled accent controls |
| `--accent-soft` | `#173025` | Subtle selection wash |
| `--focus-ring` | `#63C79B` | Keyboard focus indicator |
| `--positive` | `#63C79B` | Success / growth delta |
| `--warning` | `#E8B04F` | Caution state |
| `--negative` | `#F87171` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#151D19` on `#F5F7F5` | **15.97:1** (Lc 99) |
| Light | Secondary Text / Canvas | `#435049` on `#F5F7F5` | **7.86:1** (Lc 84) |
| Light | Muted Text / Canvas | `#5E6B64` on `#F5F7F5` | **5.18:1** (Lc 72.8) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#235A42` | **8.04:1** (Lc -92.3) |
| Dark | Primary Text / Canvas | `#EDF2EE` on `#121714` | **16:1** (Lc -97.6) |
| Dark | Secondary Text / Canvas | `#B5C2BA` on `#121714` | **9.83:1** (Lc -67) |
| Dark | Muted Text / Canvas | `#8B9B92` on `#121714` | **6.22:1** (Lc -45.3) |
| Dark | Accent Ink / Accent Fill | `#0A1B13` on `#63C79B` | **8.63:1** (Lc 62.4) |

## 3. Typography & Scale

- **Display:** "Instrument Sans", ui-sans-serif, system-ui, sans-serif (Weight `500`, Tracking `-0.02em`)
- **Body:** "Instrument Sans", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "IBM Plex Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
```
- **Notes:** Keep Instrument Sans at 400 and 500 weights with spacious line-height (1.6) for calm readability.

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
- **Concentric Radii:** Control `10px`, Card `16px`, Panel `20px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1240px` | **Density:** `spacious`
- **Light Elevation:** Card `0 1px 3px rgba(17, 30, 24, 0.04)` | Float `0 12px 30px rgba(17, 30, 24, 0.08)`
- **Dark Elevation:** Deep spruce-slate dark mode (#101412 canvas, #181E1B cards) with soft moss accents.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`160ms` fast / `240ms` medium / `400ms` slow) — Unhurried, calm transitions with gentle fade-and-rise.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid fjord moss button, 10px radius, generous horizontal padding.
- **Secondary Button:** Soft stone fill in bgRaised with 1px subtle border.
- **Card:** Clean white or spruce-slate panel with 24-28px internal breathing room.
- **Input:** Soft stone border with rounded 10px geometry.
- **Nav Item:** Calm horizontal links with ample spacing and subtle hover ink shift.
- **Badge / Status:** Soft sage tint chip with primary moss ink.

### Interactive State Matrix

| State | Visual & Token Behavior | Accessibility Rule |
| :--- | :--- | :--- |
| **Default** | Surface `--bg-card` / `--bg-raised`, border `--border-hairline`, text `--text-primary` | Native `<button>` / `<a>` semantics; hit area `>=24px` desktop (`>=44px` touch) |
| **Hover** | Shift accent fill to `--accent-hover` or step surface to `--bg-raised` (`160ms` color transition) | Never jump layout dimensions or trigger large `scale()` transforms |
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

Calm, grounded, honest, free of hyperbole.

## 8. Theme Do's & Don'ts

### Do
- Use generous vertical padding between sections (96-128px on landing pages).
- Tint grays subtly toward pine/stone so surfaces feel cohesive.
- Use natural daylight photography with subtle muted warmth.
- Keep typography airy and unhurried.

### Don't
- Never overcrowd screens with dense stat boxes.
- Never introduce neon greens or electric cyan accents.
- Never use harsh pure-black borders on soft mist backgrounds.
- Never hurry transitions with jerky keyframes.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Nordic Air (nordic-air) | Pack: modern | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #EBEEEC;
  --bg-canvas: #F5F7F5;
  --bg-card: #FFFFFF;
  --bg-raised: #E8ECE9;
  --text-primary: #151D19;
  --text-secondary: #435049;
  --text-muted: #5E6B64;
  --border-hairline: rgba(21, 29, 25, 0.09);
  --border-strong: #C5CEC9;
  --accent: #235A42;
  --accent-hover: #1A4633;
  --accent-ink: #FFFFFF;
  --accent-soft: #E6F0EB;
  --focus-ring: #235A42;
  --positive: #1F6F49;
  --warning: #9A5B13;
  --negative: #B8332A;
  --font-display: "Instrument Sans", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Instrument Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-weight-display: 500;
  --font-weight-body: 400;
  --tracking-display: -0.02em;
  --radius-control: 10px;
  --radius-card: 16px;
  --radius-panel: 20px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1240px;
  --shadow-card: 0 1px 3px rgba(17, 30, 24, 0.04);
  --shadow-float: 0 12px 30px rgba(17, 30, 24, 0.08);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 160ms;
  --dur-medium: 240ms;
  --dur-slow: 400ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #0D110F;
  --bg-canvas: #121714;
  --bg-card: #1A211D;
  --bg-raised: #242D28;
  --text-primary: #EDF2EE;
  --text-secondary: #B5C2BA;
  --text-muted: #8B9B92;
  --border-hairline: rgba(237, 242, 238, 0.10);
  --border-strong: #35423B;
  --accent: #63C79B;
  --accent-hover: #80D6B0;
  --accent-ink: #0A1B13;
  --accent-soft: #173025;
  --focus-ring: #63C79B;
  --positive: #63C79B;
  --warning: #E8B04F;
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
