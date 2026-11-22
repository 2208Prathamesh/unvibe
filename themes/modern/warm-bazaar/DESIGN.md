---
schema: unvibe-design-md/v1
themeId: "warm-bazaar"
name: "Warm Bazaar"
pack: "modern"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#F2F2F2"
    bgCanvas: "#FFFFFF"
    bgCard: "#FFFFFF"
    bgRaised: "#F7F7F7"
    textPrimary: "#222222"
    textSecondary: "#525252"
    textMuted: "#6A6A6A"
    borderHairline: "#EBEBEB"
    borderStrong: "#C8C8C8"
    accent: "#D4143D"
    accentHover: "#B50F33"
    accentInk: "#FFFFFF"
    accentSoft: "#FFF0F3"
    focusRing: "#222222"
    positive: "#0F7A48"
    warning: "#9C5B00"
    negative: "#C13515"
  dark:
    bgDeep: "#0D0D0D"
    bgCanvas: "#141414"
    bgCard: "#1F1F1F"
    bgRaised: "#2B2B2B"
    textPrimary: "#F5F5F5"
    textSecondary: "#BCBCBC"
    textMuted: "#969696"
    borderHairline: "rgba(255, 255, 255, 0.10)"
    borderStrong: "#424242"
    accent: "#FF6B86"
    accentHover: "#FF8BA0"
    accentInk: "#1C050A"
    accentSoft: "#381820"
    focusRing: "#F5F5F5"
    positive: "#46C488"
    warning: "#F5B841"
    negative: "#FF756B"
typography:
  display: "\"Plus Jakarta Sans\", ui-sans-serif, system-ui, sans-serif"
  body: "\"Plus Jakarta Sans\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"JetBrains Mono\", ui-monospace, monospace"
  displayWeight: 600
  bodyWeight: 400
  trackingDisplay: "-0.02em"
radius:
  control: "9999px"
  card: "14px"
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
  fastMs: 140
  mediumMs: 220
  slowMs: 340
---

# DESIGN.md — Warm Bazaar

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `warm-bazaar`
- **Pack:** `modern`
- **Default Mode:** `light`
- **Mood:** humanist, welcoming, tactile, vibrant
- **Recommended Surface Modes:** persuade, social, operate
- **Best For:** marketplaces, booking platforms, e-commerce, local discovery, hospitality

## 1. Visual Theme & Atmosphere

**Humanist marketplace canvas where vivid photography meets soft coral CTAs and friendly geometry.**

Designed for travel, booking, commerce, and local discovery apps where visual cards and search pills make browsing effortless. Keeps chrome pure white and warm soft-gray so product photography leads, energized by one vibrant coral-rose action color.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#F2F2F2` | Sidebar / recessed shell |
| `--bg-canvas` | `#FFFFFF` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#F7F7F7` | Active rows, inputs, secondary pills |
| `--text-primary` | `#222222` | Headings and primary copy |
| `--text-secondary` | `#525252` | Supporting descriptions |
| `--text-muted` | `#6A6A6A` | Captions, axis labels, timestamps |
| `--border-hairline` | `#EBEBEB` | Subtle structural dividers |
| `--border-strong` | `#C8C8C8` | Interactive input and hover borders |
| `--accent` | `#D4143D` | Primary CTA and focus highlight |
| `--accent-hover` | `#B50F33` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#FFF0F3` | Subtle selection wash |
| `--focus-ring` | `#222222` | Keyboard focus indicator |
| `--positive` | `#0F7A48` | Success / growth delta |
| `--warning` | `#9C5B00` | Caution state |
| `--negative` | `#C13515` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#0D0D0D` | Sidebar / recessed shell |
| `--bg-canvas` | `#141414` | Main viewport ground |
| `--bg-card` | `#1F1F1F` | Elevated cards and panels |
| `--bg-raised` | `#2B2B2B` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F5F5F5` | Headings and primary copy |
| `--text-secondary` | `#BCBCBC` | Supporting descriptions |
| `--text-muted` | `#969696` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(255, 255, 255, 0.10)` | Subtle structural dividers |
| `--border-strong` | `#424242` | Interactive input and hover borders |
| `--accent` | `#FF6B86` | Primary CTA and focus highlight |
| `--accent-hover` | `#FF8BA0` | Interactive hover accent |
| `--accent-ink` | `#1C050A` | Text inside filled accent controls |
| `--accent-soft` | `#381820` | Subtle selection wash |
| `--focus-ring` | `#F5F5F5` | Keyboard focus indicator |
| `--positive` | `#46C488` | Success / growth delta |
| `--warning` | `#F5B841` | Caution state |
| `--negative` | `#FF756B` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#222222` on `#FFFFFF` | **15.91:1** (Lc 102.9) |
| Light | Secondary Text / Canvas | `#525252` on `#FFFFFF` | **7.81:1** (Lc 87.2) |
| Light | Muted Text / Canvas | `#6A6A6A` on `#FFFFFF` | **5.41:1** (Lc 77) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#D4143D` | **5.29:1** (Lc -79.5) |
| Dark | Primary Text / Canvas | `#F5F5F5` on `#141414` | **16.9:1** (Lc -100.6) |
| Dark | Secondary Text / Canvas | `#BCBCBC` on `#141414` | **9.7:1** (Lc -65.6) |
| Dark | Muted Text / Canvas | `#969696` on `#141414` | **6.23:1** (Lc -44.9) |
| Dark | Accent Ink / Accent Fill | `#1C050A` on `#FF6B86` | **7.16:1** (Lc 51.4) |

## 3. Typography & Scale

- **Display:** "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif (Weight `600`, Tracking `-0.02em`)
- **Body:** "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "JetBrains Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
```
- **Notes:** Keep card titles concise (1 line with ellipsis or 2 lines max) and align prices clearly below titles.

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
- **Concentric Radii:** Control `9999px`, Card `14px`, Panel `20px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1320px` | **Density:** `spacious`
- **Light Elevation:** Card `0 1px 2px rgba(0, 0, 0, 0.05)` | Float `0 10px 28px rgba(0, 0, 0, 0.12)`
- **Dark Elevation:** Warm obsidian (#121212 canvas, #1E1E1E cards) with accessible coral-rose accents.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`140ms` fast / `220ms` medium / `340ms` slow) — Responsive micro-press on pill controls and crisp image hover zoom within overflow-hidden frames.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid coral-rose 8px or full-pill button for primary booking/search CTA.
- **Secondary Button:** Crisp white/charcoal button with 1px dark ink border.
- **Card:** Photography-led 14px card with minimal metadata lines underneath and no enclosing box clutter.
- **Input:** Segmented pill search bar with subtle shadow and crisp dividers.
- **Nav Item:** Icon-above-label category strip with 2px dark underline for active filter.
- **Badge / Status:** Compact corner badge overlaid lightly on listing image only when genuinely relevant.

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
| **Wide** | `> 1440px` | Center container at `1320px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Warm, concrete, transparent pricing and clear availability.

## 8. Theme Do's & Don'ts

### Do
- Let photography occupy clean fixed-aspect containers without cluttered text overlays.
- Keep search bars tactile with 44px+ hit targets.
- Place key metadata (rating, location, price) in consistent 3-line structure.
- Use coral-rose sparingly for the main CTA and active search button.

### Don't
- Never box every listing inside heavy gray rectangles if borderless spacing looks cleaner.
- Never use fake urgency banners or pulsing discount badges.
- Never mix jagged 0px buttons with 20px rounded cards.
- Never hide critical fee details until final step.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Warm Bazaar (warm-bazaar) | Pack: modern | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #F2F2F2;
  --bg-canvas: #FFFFFF;
  --bg-card: #FFFFFF;
  --bg-raised: #F7F7F7;
  --text-primary: #222222;
  --text-secondary: #525252;
  --text-muted: #6A6A6A;
  --border-hairline: #EBEBEB;
  --border-strong: #C8C8C8;
  --accent: #D4143D;
  --accent-hover: #B50F33;
  --accent-ink: #FFFFFF;
  --accent-soft: #FFF0F3;
  --focus-ring: #222222;
  --positive: #0F7A48;
  --warning: #9C5B00;
  --negative: #C13515;
  --font-display: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-weight-display: 600;
  --font-weight-body: 400;
  --tracking-display: -0.02em;
  --radius-control: 9999px;
  --radius-card: 14px;
  --radius-panel: 20px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1320px;
  --shadow-card: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-float: 0 10px 28px rgba(0, 0, 0, 0.12);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 140ms;
  --dur-medium: 220ms;
  --dur-slow: 340ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #0D0D0D;
  --bg-canvas: #141414;
  --bg-card: #1F1F1F;
  --bg-raised: #2B2B2B;
  --text-primary: #F5F5F5;
  --text-secondary: #BCBCBC;
  --text-muted: #969696;
  --border-hairline: rgba(255, 255, 255, 0.10);
  --border-strong: #424242;
  --accent: #FF6B86;
  --accent-hover: #FF8BA0;
  --accent-ink: #1C050A;
  --accent-soft: #381820;
  --focus-ring: #F5F5F5;
  --positive: #46C488;
  --warning: #F5B841;
  --negative: #FF756B;
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
