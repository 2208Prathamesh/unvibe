---
schema: unvibe-design-md/v1
themeId: "canvas-docs"
name: "Canvas Docs"
pack: "professional"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#F7F6F3"
    bgCanvas: "#FFFFFF"
    bgCard: "#FFFFFF"
    bgRaised: "#F1F0EC"
    textPrimary: "#37352F"
    textSecondary: "#5C5A54"
    textMuted: "#706E67"
    borderHairline: "rgba(55, 53, 47, 0.09)"
    borderStrong: "#DFDDD8"
    accent: "#1B6EC2"
    accentHover: "#15579C"
    accentInk: "#FFFFFF"
    accentSoft: "#EAF3FC"
    focusRing: "#1B6EC2"
    positive: "#18794E"
    warning: "#9C5B12"
    negative: "#C92A2A"
  dark:
    bgDeep: "#202020"
    bgCanvas: "#191919"
    bgCard: "#222222"
    bgRaised: "#2D2D2D"
    textPrimary: "#EBEBEB"
    textSecondary: "#B3B3B3"
    textMuted: "#919191"
    borderHairline: "rgba(255, 255, 255, 0.09)"
    borderStrong: "#3D3D3D"
    accent: "#6CB4EE"
    accentHover: "#8AC6F5"
    accentInk: "#0A1B29"
    accentSoft: "#182D40"
    focusRing: "#6CB4EE"
    positive: "#4CC38A"
    warning: "#F5B841"
    negative: "#F87171"
typography:
  display: "Inter, ui-sans-serif, system-ui, sans-serif"
  body: "Inter, ui-sans-serif, system-ui, sans-serif"
  mono: "\"JetBrains Mono\", ui-monospace, monospace"
  displayWeight: 600
  bodyWeight: 400
  trackingDisplay: "-0.02em"
radius:
  control: "6px"
  card: "8px"
  panel: "12px"
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
  slowMs: 260
---

# DESIGN.md — Canvas Docs

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `canvas-docs`
- **Pack:** `professional`
- **Default Mode:** `light`
- **Mood:** paper-first, quiet, organized, distraction-free
- **Recommended Surface Modes:** read, operate
- **Best For:** wikis, documentation, knowledge bases, CRM tables, roadmap planners

## 1. Visual Theme & Atmosphere

**Paper-first block workspace with warm espresso ink and ultra-quiet chrome.**

Designed for documents, wikis, databases, and collaborative knowledge bases. Removes nearly all decorative framing so authored headings, tables, callouts, and prose hold 90% of visual attention over warm white paper and quiet stone sidebars.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#F7F6F3` | Sidebar / recessed shell |
| `--bg-canvas` | `#FFFFFF` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#F1F0EC` | Active rows, inputs, secondary pills |
| `--text-primary` | `#37352F` | Headings and primary copy |
| `--text-secondary` | `#5C5A54` | Supporting descriptions |
| `--text-muted` | `#706E67` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(55, 53, 47, 0.09)` | Subtle structural dividers |
| `--border-strong` | `#DFDDD8` | Interactive input and hover borders |
| `--accent` | `#1B6EC2` | Primary CTA and focus highlight |
| `--accent-hover` | `#15579C` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#EAF3FC` | Subtle selection wash |
| `--focus-ring` | `#1B6EC2` | Keyboard focus indicator |
| `--positive` | `#18794E` | Success / growth delta |
| `--warning` | `#9C5B12` | Caution state |
| `--negative` | `#C92A2A` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#202020` | Sidebar / recessed shell |
| `--bg-canvas` | `#191919` | Main viewport ground |
| `--bg-card` | `#222222` | Elevated cards and panels |
| `--bg-raised` | `#2D2D2D` | Active rows, inputs, secondary pills |
| `--text-primary` | `#EBEBEB` | Headings and primary copy |
| `--text-secondary` | `#B3B3B3` | Supporting descriptions |
| `--text-muted` | `#919191` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(255, 255, 255, 0.09)` | Subtle structural dividers |
| `--border-strong` | `#3D3D3D` | Interactive input and hover borders |
| `--accent` | `#6CB4EE` | Primary CTA and focus highlight |
| `--accent-hover` | `#8AC6F5` | Interactive hover accent |
| `--accent-ink` | `#0A1B29` | Text inside filled accent controls |
| `--accent-soft` | `#182D40` | Subtle selection wash |
| `--focus-ring` | `#6CB4EE` | Keyboard focus indicator |
| `--positive` | `#4CC38A` | Success / growth delta |
| `--warning` | `#F5B841` | Caution state |
| `--negative` | `#F87171` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#37352F` on `#FFFFFF` | **12.26:1** (Lc 98) |
| Light | Secondary Text / Canvas | `#5C5A54` on `#FFFFFF` | **6.9:1** (Lc 83.9) |
| Light | Muted Text / Canvas | `#706E67` on `#FFFFFF` | **5.1:1** (Lc 75.2) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#1B6EC2` | **5.18:1** (Lc -80.5) |
| Dark | Primary Text / Canvas | `#EBEBEB` on `#191919` | **14.75:1** (Lc -93.6) |
| Dark | Secondary Text / Canvas | `#B3B3B3` on `#191919` | **8.39:1** (Lc -60) |
| Dark | Muted Text / Canvas | `#919191` on `#191919` | **5.58:1** (Lc -41.9) |
| Dark | Accent Ink / Accent Fill | `#0A1B29` on `#6CB4EE` | **7.82:1** (Lc 58.3) |

## 3. Typography & Scale

- **Display:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `600`, Tracking `-0.02em`)
- **Body:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "JetBrains Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
```
- **Notes:** Keep prose columns under 72ch; reserve monospace for inline code tokens and database property badges.

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
- **Concentric Radii:** Control `6px`, Card `8px`, Panel `12px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1120px` | **Density:** `compact`
- **Light Elevation:** Card `0 1px 2px rgba(55, 53, 47, 0.04)` | Float `0 8px 24px rgba(55, 53, 47, 0.10)`
- **Dark Elevation:** Warm charcoal dark mode (#191919 canvas, #202020 sidebar, #2C2C2C hover) with zero glare.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`120ms` fast / `180ms` medium / `260ms` slow) — Near-instant hover highlights and crisp menu popovers.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Compact 6px rounded accent fill or solid charcoal fill.
- **Secondary Button:** Subtle ghost button that reveals bgRaised fill on hover.
- **Card:** Clean hairline-bounded database/board card with 6-8px radius.
- **Input:** Inline editable text or subtle bgRaised search input.
- **Nav Item:** 28-32px dense tree items with collapsible disclosure carets.
- **Badge / Status:** Soft pastel tag pills with high-contrast ink for table statuses.

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
| **Wide** | `> 1440px` | Center container at `1120px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Neutral, concise, document-centric.

## 8. Theme Do's & Don'ts

### Do
- Keep page chrome ultra-light so the user's writing stands out.
- Use warm espresso ink (#37352F) instead of harsh #000000.
- Maintain dense, clean 1px hairlines inside tables and tree sidebars.
- Support keyboard-first slash/command interactions.

### Don't
- Never wrap paragraphs of prose inside heavy shadowed cards.
- Never use random emojis for database rows unless user-authored content requires it.
- Never crowd sidebars with decorative dividers.
- Never use wide-tracked uppercase table headers.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Canvas Docs (canvas-docs) | Pack: professional | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #F7F6F3;
  --bg-canvas: #FFFFFF;
  --bg-card: #FFFFFF;
  --bg-raised: #F1F0EC;
  --text-primary: #37352F;
  --text-secondary: #5C5A54;
  --text-muted: #706E67;
  --border-hairline: rgba(55, 53, 47, 0.09);
  --border-strong: #DFDDD8;
  --accent: #1B6EC2;
  --accent-hover: #15579C;
  --accent-ink: #FFFFFF;
  --accent-soft: #EAF3FC;
  --focus-ring: #1B6EC2;
  --positive: #18794E;
  --warning: #9C5B12;
  --negative: #C92A2A;
  --font-display: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-body: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-weight-display: 600;
  --font-weight-body: 400;
  --tracking-display: -0.02em;
  --radius-control: 6px;
  --radius-card: 8px;
  --radius-panel: 12px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1120px;
  --shadow-card: 0 1px 2px rgba(55, 53, 47, 0.04);
  --shadow-float: 0 8px 24px rgba(55, 53, 47, 0.10);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 120ms;
  --dur-medium: 180ms;
  --dur-slow: 260ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #202020;
  --bg-canvas: #191919;
  --bg-card: #222222;
  --bg-raised: #2D2D2D;
  --text-primary: #EBEBEB;
  --text-secondary: #B3B3B3;
  --text-muted: #919191;
  --border-hairline: rgba(255, 255, 255, 0.09);
  --border-strong: #3D3D3D;
  --accent: #6CB4EE;
  --accent-hover: #8AC6F5;
  --accent-ink: #0A1B29;
  --accent-soft: #182D40;
  --focus-ring: #6CB4EE;
  --positive: #4CC38A;
  --warning: #F5B841;
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
