---
schema: unvibe-design-md/v1
themeId: "archival-vellum"
name: "Archival Vellum"
pack: "vintage"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#EBE1CE"
    bgCanvas: "#F5EFE2"
    bgCard: "#FAF6EC"
    bgRaised: "#E9DEC8"
    textPrimary: "#2B2219"
    textSecondary: "#524436"
    textMuted: "#6B5B4A"
    borderHairline: "#D4C6AD"
    borderStrong: "#8F7D63"
    accent: "#253F8A"
    accentHover: "#1B2E66"
    accentInk: "#FFFFFF"
    accentSoft: "#E7ECF7"
    focusRing: "#253F8A"
    positive: "#246342"
    warning: "#8A5412"
    negative: "#9C2B23"
  dark:
    bgDeep: "#120F0D"
    bgCanvas: "#191512"
    bgCard: "#231D18"
    bgRaised: "#302821"
    textPrimary: "#F2EAD9"
    textSecondary: "#C9BFA9"
    textMuted: "#9D917B"
    borderHairline: "#3D332A"
    borderStrong: "#7A6A57"
    accent: "#88A6F2"
    accentHover: "#A5BDF6"
    accentInk: "#0E1529"
    accentSoft: "#1B2542"
    focusRing: "#88A6F2"
    positive: "#5DB882"
    warning: "#E8A64D"
    negative: "#EB6F65"
typography:
  display: "\"Fraunces\", Georgia, serif"
  body: "\"Hanken Grotesk\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  displayWeight: 400
  bodyWeight: 400
  trackingDisplay: "-0.015em"
radius:
  control: "3px"
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
  fastMs: 150
  mediumMs: 230
  slowMs: 360
---

# DESIGN.md — Archival Vellum

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `archival-vellum`
- **Pack:** `vintage`
- **Default Mode:** `light`
- **Mood:** artisanal, heritage, bookish, authentic
- **Recommended Surface Modes:** editorial, read, persuade
- **Best For:** coffee roasteries, bookshops, artisan commerce, museums, cultural journals

## 1. Visual Theme & Atmosphere

**Old-world bookshop and letterpress parchment paired with umber ink and ultramarine pigment.**

Designed for roasteries, artisan goods, bookshops, heritage archives, and craft makers. Anchors warm parchment stock and deep umber ink with expressive serif headings, hairline double-rules, and one genuine ultramarine pigment accent.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#EBE1CE` | Sidebar / recessed shell |
| `--bg-canvas` | `#F5EFE2` | Main viewport ground |
| `--bg-card` | `#FAF6EC` | Elevated cards and panels |
| `--bg-raised` | `#E9DEC8` | Active rows, inputs, secondary pills |
| `--text-primary` | `#2B2219` | Headings and primary copy |
| `--text-secondary` | `#524436` | Supporting descriptions |
| `--text-muted` | `#6B5B4A` | Captions, axis labels, timestamps |
| `--border-hairline` | `#D4C6AD` | Subtle structural dividers |
| `--border-strong` | `#8F7D63` | Interactive input and hover borders |
| `--accent` | `#253F8A` | Primary CTA and focus highlight |
| `--accent-hover` | `#1B2E66` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#E7ECF7` | Subtle selection wash |
| `--focus-ring` | `#253F8A` | Keyboard focus indicator |
| `--positive` | `#246342` | Success / growth delta |
| `--warning` | `#8A5412` | Caution state |
| `--negative` | `#9C2B23` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#120F0D` | Sidebar / recessed shell |
| `--bg-canvas` | `#191512` | Main viewport ground |
| `--bg-card` | `#231D18` | Elevated cards and panels |
| `--bg-raised` | `#302821` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F2EAD9` | Headings and primary copy |
| `--text-secondary` | `#C9BFA9` | Supporting descriptions |
| `--text-muted` | `#9D917B` | Captions, axis labels, timestamps |
| `--border-hairline` | `#3D332A` | Subtle structural dividers |
| `--border-strong` | `#7A6A57` | Interactive input and hover borders |
| `--accent` | `#88A6F2` | Primary CTA and focus highlight |
| `--accent-hover` | `#A5BDF6` | Interactive hover accent |
| `--accent-ink` | `#0E1529` | Text inside filled accent controls |
| `--accent-soft` | `#1B2542` | Subtle selection wash |
| `--focus-ring` | `#88A6F2` | Keyboard focus indicator |
| `--positive` | `#5DB882` | Success / growth delta |
| `--warning` | `#E8A64D` | Caution state |
| `--negative` | `#EB6F65` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#2B2219` on `#F5EFE2` | **13.62:1** (Lc 93.3) |
| Light | Secondary Text / Canvas | `#524436` on `#F5EFE2` | **8.19:1** (Lc 82.4) |
| Light | Muted Text / Canvas | `#6B5B4A` on `#F5EFE2` | **5.69:1** (Lc 73) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#253F8A` | **9.74:1** (Lc -96.4) |
| Dark | Primary Text / Canvas | `#F2EAD9` on `#191512` | **15.16:1** (Lc -93.7) |
| Dark | Secondary Text / Canvas | `#C9BFA9` on `#191512` | **9.94:1** (Lc -67.6) |
| Dark | Muted Text / Canvas | `#9D917B` on `#191512` | **5.85:1** (Lc -42.8) |
| Dark | Accent Ink / Accent Fill | `#0E1529` on `#88A6F2` | **7.59:1** (Lc 55.7) |

## 3. Typography & Scale

- **Display:** "Fraunces", Georgia, serif (Weight `400`, Tracking `-0.015em`)
- **Body:** "Hanken Grotesk", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "IBM Plex Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Hanken+Grotesk:wght@400;500;600&family=IBM+Plex+Mono:wght@400&display=swap">
```
- **Notes:** Pair soft Fraunces display heads with clean Hanken Grotesk body copy for effortless modern readability on old-world stock.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `400` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `400` | Tracking `-0.015em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `3px`, Card `4px`, Panel `6px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1160px` | **Density:** `spacious`
- **Light Elevation:** Card `0 2px 6px rgba(46, 36, 24, 0.06)` | Float `0 12px 28px rgba(46, 36, 24, 0.12)`
- **Dark Elevation:** Warm library-leather umber (#191512 canvas, #231D18 stock) with pale vellum ink.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`150ms` fast / `230ms` medium / `360ms` slow) — Unhurried editorial pacing.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid ultramarine pigment or 1px ink outline button, crisp 3px radius.
- **Secondary Button:** Warm card stock button with subtle hairline.
- **Card:** Light cotton-vellum card with inner hairline rule and warm micro-shadow.
- **Input:** Bottom-ruled or 1px tan-bordered field.
- **Nav Item:** Clean horizontal ledger links with ultramarine underline on active.
- **Badge / Status:** Numbered edition label in muted mono.

### Interactive State Matrix

| State | Visual & Token Behavior | Accessibility Rule |
| :--- | :--- | :--- |
| **Default** | Surface `--bg-card` / `--bg-raised`, border `--border-hairline`, text `--text-primary` | Native `<button>` / `<a>` semantics; hit area `>=24px` desktop (`>=44px` touch) |
| **Hover** | Shift accent fill to `--accent-hover` or step surface to `--bg-raised` (`150ms` color transition) | Never jump layout dimensions or trigger large `scale()` transforms |
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
| **Wide** | `> 1440px` | Center container at `1160px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Object-precise, tactile, unhurried heritage tone.

## 8. Theme Do's & Don'ts

### Do
- Set long headlines in light Fraunces with generous breathing space.
- Keep ultramarine pigment rare—underlines, primary buttons, and active markers.
- Use warm umber text (#2B2219) instead of cold #000000.
- Frame product photos with clean warm daylight tones.

### Don't
- Never apply distressed grunge textures or fake coffee-stain graphics.
- Never mix futuristic neon cyan or purple accents into parchment.
- Never set body paragraphs in heavy display serifs.
- Never use generic 'Shop Now!' hype copy.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Archival Vellum (archival-vellum) | Pack: vintage | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Hanken+Grotesk:wght@400;500;600&family=IBM+Plex+Mono:wght@400&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #EBE1CE;
  --bg-canvas: #F5EFE2;
  --bg-card: #FAF6EC;
  --bg-raised: #E9DEC8;
  --text-primary: #2B2219;
  --text-secondary: #524436;
  --text-muted: #6B5B4A;
  --border-hairline: #D4C6AD;
  --border-strong: #8F7D63;
  --accent: #253F8A;
  --accent-hover: #1B2E66;
  --accent-ink: #FFFFFF;
  --accent-soft: #E7ECF7;
  --focus-ring: #253F8A;
  --positive: #246342;
  --warning: #8A5412;
  --negative: #9C2B23;
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Hanken Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-weight-display: 400;
  --font-weight-body: 400;
  --tracking-display: -0.015em;
  --radius-control: 3px;
  --radius-card: 4px;
  --radius-panel: 6px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1160px;
  --shadow-card: 0 2px 6px rgba(46, 36, 24, 0.06);
  --shadow-float: 0 12px 28px rgba(46, 36, 24, 0.12);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 150ms;
  --dur-medium: 230ms;
  --dur-slow: 360ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #120F0D;
  --bg-canvas: #191512;
  --bg-card: #231D18;
  --bg-raised: #302821;
  --text-primary: #F2EAD9;
  --text-secondary: #C9BFA9;
  --text-muted: #9D917B;
  --border-hairline: #3D332A;
  --border-strong: #7A6A57;
  --accent: #88A6F2;
  --accent-hover: #A5BDF6;
  --accent-ink: #0E1529;
  --accent-soft: #1B2542;
  --focus-ring: #88A6F2;
  --positive: #5DB882;
  --warning: #E8A64D;
  --negative: #EB6F65;
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
