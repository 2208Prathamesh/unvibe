---
schema: unvibe-design-md/v1
themeId: "monochrome-edge"
name: "Monochrome Edge"
pack: "modern"
defaultMode: "dark"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#F4F4F4"
    bgCanvas: "#FFFFFF"
    bgCard: "#FAFAFA"
    bgRaised: "#EFEFEF"
    textPrimary: "#0A0A0A"
    textSecondary: "#4D4D4D"
    textMuted: "#666666"
    borderHairline: "#E5E5E5"
    borderStrong: "#C4C4C4"
    accent: "#0A0A0A"
    accentHover: "#2E2E2E"
    accentInk: "#FFFFFF"
    accentSoft: "#EFEFEF"
    focusRing: "#0066CC"
    positive: "#0E7A48"
    warning: "#9C5B00"
    negative: "#C92A2A"
  dark:
    bgDeep: "#000000"
    bgCanvas: "#000000"
    bgCard: "#0D0D0D"
    bgRaised: "#1A1A1A"
    textPrimary: "#EDEDED"
    textSecondary: "#A6A6A6"
    textMuted: "#888888"
    borderHairline: "#262626"
    borderStrong: "#404040"
    accent: "#EDEDED"
    accentHover: "#FFFFFF"
    accentInk: "#0A0A0A"
    accentSoft: "#1F1F1F"
    focusRing: "#4DA3FF"
    positive: "#3EC98A"
    warning: "#F5B841"
    negative: "#F87171"
typography:
  display: "Inter, ui-sans-serif, system-ui, sans-serif"
  body: "Inter, ui-sans-serif, system-ui, sans-serif"
  mono: "\"JetBrains Mono\", ui-monospace, monospace"
  displayWeight: 600
  bodyWeight: 400
  trackingDisplay: "-0.03em"
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
  slowMs: 280
---

# DESIGN.md — Monochrome Edge

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `monochrome-edge`
- **Pack:** `modern`
- **Default Mode:** `dark`
- **Mood:** achromatic, stark, technical, decisive
- **Recommended Surface Modes:** operate, persuade
- **Best For:** cloud platforms, CLI tools, API docs, deployment dashboards, developer SaaS

## 1. Visual Theme & Atmosphere

**Stark achromatic developer platform with razor-sharp contrast and zero chromatic clutter.**

Strips away color noise completely into pure black, white, and finely calibrated neutral steps. Highlights product capabilities with crisp inverted CTAs, exposed 1px hairlines, and clean technical typography—ideal when code and shipping speed are the story.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#F4F4F4` | Sidebar / recessed shell |
| `--bg-canvas` | `#FFFFFF` | Main viewport ground |
| `--bg-card` | `#FAFAFA` | Elevated cards and panels |
| `--bg-raised` | `#EFEFEF` | Active rows, inputs, secondary pills |
| `--text-primary` | `#0A0A0A` | Headings and primary copy |
| `--text-secondary` | `#4D4D4D` | Supporting descriptions |
| `--text-muted` | `#666666` | Captions, axis labels, timestamps |
| `--border-hairline` | `#E5E5E5` | Subtle structural dividers |
| `--border-strong` | `#C4C4C4` | Interactive input and hover borders |
| `--accent` | `#0A0A0A` | Primary CTA and focus highlight |
| `--accent-hover` | `#2E2E2E` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#EFEFEF` | Subtle selection wash |
| `--focus-ring` | `#0066CC` | Keyboard focus indicator |
| `--positive` | `#0E7A48` | Success / growth delta |
| `--warning` | `#9C5B00` | Caution state |
| `--negative` | `#C92A2A` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#000000` | Sidebar / recessed shell |
| `--bg-canvas` | `#000000` | Main viewport ground |
| `--bg-card` | `#0D0D0D` | Elevated cards and panels |
| `--bg-raised` | `#1A1A1A` | Active rows, inputs, secondary pills |
| `--text-primary` | `#EDEDED` | Headings and primary copy |
| `--text-secondary` | `#A6A6A6` | Supporting descriptions |
| `--text-muted` | `#888888` | Captions, axis labels, timestamps |
| `--border-hairline` | `#262626` | Subtle structural dividers |
| `--border-strong` | `#404040` | Interactive input and hover borders |
| `--accent` | `#EDEDED` | Primary CTA and focus highlight |
| `--accent-hover` | `#FFFFFF` | Interactive hover accent |
| `--accent-ink` | `#0A0A0A` | Text inside filled accent controls |
| `--accent-soft` | `#1F1F1F` | Subtle selection wash |
| `--focus-ring` | `#4DA3FF` | Keyboard focus indicator |
| `--positive` | `#3EC98A` | Success / growth delta |
| `--warning` | `#F5B841` | Caution state |
| `--negative` | `#F87171` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#0A0A0A` on `#FFFFFF` | **19.8:1** (Lc 105.8) |
| Light | Secondary Text / Canvas | `#4D4D4D` on `#FFFFFF` | **8.45:1** (Lc 89.1) |
| Light | Muted Text / Canvas | `#666666` on `#FFFFFF` | **5.74:1** (Lc 78.8) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#0A0A0A` | **19.8:1** (Lc -107.7) |
| Dark | Primary Text / Canvas | `#EDEDED` on `#000000` | **17.94:1** (Lc -96.1) |
| Dark | Secondary Text / Canvas | `#A6A6A6` on `#000000` | **8.63:1** (Lc -54.1) |
| Dark | Muted Text / Canvas | `#888888` on `#000000` | **5.92:1** (Lc -38.6) |
| Dark | Accent Ink / Accent Fill | `#0A0A0A` on `#EDEDED` | **16.91:1** (Lc 95.2) |

## 3. Typography & Scale

- **Display:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `600`, Tracking `-0.03em`)
- **Body:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "JetBrains Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
```
- **Notes:** Use tight -0.03em tracking on hero display heads and crisp JetBrains Mono for terminal commands and status codes.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `600` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `600` | Tracking `-0.03em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `6px`, Card `8px`, Panel `12px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1200px` | **Density:** `comfortable`
- **Light Elevation:** Card `0 1px 2px rgba(0, 0, 0, 0.04)` | Float `0 12px 32px rgba(0, 0, 0, 0.08)`
- **Dark Elevation:** Pure #000000 canvas + #0F0F0F cards + #242424 crisp hairline borders.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`120ms` fast / `180ms` medium / `280ms` slow) — Clean inverted state shifts.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Pure inverted contrast (#EDEDED with #0A0A0A text on dark; #0A0A0A with #FFFFFF on light).
- **Secondary Button:** Transparent or bgCard with 1px #262626/#E5E5E5 border.
- **Card:** Crisp 8px rectangle bounded by 1px hairline border.
- **Input:** 6px clean field with high-contrast focus ring.
- **Nav Item:** Sharp text links shifting from textSecondary to textPrimary on hover.
- **Badge / Status:** Subtle semantic dot + monospace text for live status only.

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
| **Wide** | `> 1440px` | Center container at `1200px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Confident, minimal, developer-grade precision.

## 8. Theme Do's & Don'ts

### Do
- Rely on pure value contrast instead of decorative brand colors.
- Use clean 1px grids to structure features and comparison matrices.
- Reserve chromatic hues exclusively for semantic status (passing, warning, error).
- Keep navigation minimal and scannable.

### Don't
- Never add glowing rainbow borders around black cards.
- Never drop neon purple gradients into monochrome pages.
- Never use soft blurry shadows on dark mode panels.
- Never clutter headings with eyebrow badges.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Monochrome Edge (monochrome-edge) | Pack: modern | Default: dark */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: dark;
  --bg-deep: #000000;
  --bg-canvas: #000000;
  --bg-card: #0D0D0D;
  --bg-raised: #1A1A1A;
  --text-primary: #EDEDED;
  --text-secondary: #A6A6A6;
  --text-muted: #888888;
  --border-hairline: #262626;
  --border-strong: #404040;
  --accent: #EDEDED;
  --accent-hover: #FFFFFF;
  --accent-ink: #0A0A0A;
  --accent-soft: #1F1F1F;
  --focus-ring: #4DA3FF;
  --positive: #3EC98A;
  --warning: #F5B841;
  --negative: #F87171;
  --font-display: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-body: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-weight-display: 600;
  --font-weight-body: 400;
  --tracking-display: -0.03em;
  --radius-control: 6px;
  --radius-card: 8px;
  --radius-panel: 12px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1200px;
  --shadow-card: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-float: 0 12px 32px rgba(0, 0, 0, 0.08);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 120ms;
  --dur-medium: 180ms;
  --dur-slow: 280ms;
}

[data-theme="light"] {
  color-scheme: light;
  --bg-deep: #F4F4F4;
  --bg-canvas: #FFFFFF;
  --bg-card: #FAFAFA;
  --bg-raised: #EFEFEF;
  --text-primary: #0A0A0A;
  --text-secondary: #4D4D4D;
  --text-muted: #666666;
  --border-hairline: #E5E5E5;
  --border-strong: #C4C4C4;
  --accent: #0A0A0A;
  --accent-hover: #2E2E2E;
  --accent-ink: #FFFFFF;
  --accent-soft: #EFEFEF;
  --focus-ring: #0066CC;
  --positive: #0E7A48;
  --warning: #9C5B00;
  --negative: #C92A2A;
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
