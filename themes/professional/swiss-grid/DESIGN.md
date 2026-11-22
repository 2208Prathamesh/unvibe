---
schema: unvibe-design-md/v1
themeId: "swiss-grid"
name: "Swiss Grid"
pack: "professional"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#EBEBEB"
    bgCanvas: "#FFFFFF"
    bgCard: "#F7F7F7"
    bgRaised: "#ECECEC"
    textPrimary: "#111111"
    textSecondary: "#424242"
    textMuted: "#636363"
    borderHairline: "#D4D4D4"
    borderStrong: "#111111"
    accent: "#C82323"
    accentHover: "#A31B1B"
    accentInk: "#FFFFFF"
    accentSoft: "#FDECEC"
    focusRing: "#C82323"
    positive: "#157A3D"
    warning: "#9C5B00"
    negative: "#C82323"
  dark:
    bgDeep: "#0A0A0A"
    bgCanvas: "#111111"
    bgCard: "#1A1A1A"
    bgRaised: "#262626"
    textPrimary: "#F5F5F5"
    textSecondary: "#C2C2C2"
    textMuted: "#949494"
    borderHairline: "#2E2E2E"
    borderStrong: "#F5F5F5"
    accent: "#FF6B6B"
    accentHover: "#FF8787"
    accentInk: "#140505"
    accentSoft: "#361717"
    focusRing: "#FF6B6B"
    positive: "#4CC38A"
    warning: "#F5B841"
    negative: "#FF6B6B"
typography:
  display: "\"IBM Plex Sans\", ui-sans-serif, system-ui, sans-serif"
  body: "\"IBM Plex Sans\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  displayWeight: 600
  bodyWeight: 400
  trackingDisplay: "-0.03em"
radius:
  control: "2px"
  card: "0px"
  panel: "0px"
  pill: "2px"
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

# DESIGN.md — Swiss Grid

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `swiss-grid`
- **Pack:** `professional`
- **Default Mode:** `light`
- **Mood:** architectural, objective, structural, crisp
- **Recommended Surface Modes:** persuade, read, operate
- **Best For:** architecture firms, data journals, enterprise platforms, design systems, conference sites

## 1. Visual Theme & Atmosphere

**International Typographic Style built on strict architectural rules, stark ink, and vermilion signal.**

Inspired by mid-century Swiss modernist systems: razor-sharp 0px-2px geometry, exposed structural grid rules, generous negative space paired with bold tabular alignment, and one uncompromising vermilion red signal.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#EBEBEB` | Sidebar / recessed shell |
| `--bg-canvas` | `#FFFFFF` | Main viewport ground |
| `--bg-card` | `#F7F7F7` | Elevated cards and panels |
| `--bg-raised` | `#ECECEC` | Active rows, inputs, secondary pills |
| `--text-primary` | `#111111` | Headings and primary copy |
| `--text-secondary` | `#424242` | Supporting descriptions |
| `--text-muted` | `#636363` | Captions, axis labels, timestamps |
| `--border-hairline` | `#D4D4D4` | Subtle structural dividers |
| `--border-strong` | `#111111` | Interactive input and hover borders |
| `--accent` | `#C82323` | Primary CTA and focus highlight |
| `--accent-hover` | `#A31B1B` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#FDECEC` | Subtle selection wash |
| `--focus-ring` | `#C82323` | Keyboard focus indicator |
| `--positive` | `#157A3D` | Success / growth delta |
| `--warning` | `#9C5B00` | Caution state |
| `--negative` | `#C82323` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#0A0A0A` | Sidebar / recessed shell |
| `--bg-canvas` | `#111111` | Main viewport ground |
| `--bg-card` | `#1A1A1A` | Elevated cards and panels |
| `--bg-raised` | `#262626` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F5F5F5` | Headings and primary copy |
| `--text-secondary` | `#C2C2C2` | Supporting descriptions |
| `--text-muted` | `#949494` | Captions, axis labels, timestamps |
| `--border-hairline` | `#2E2E2E` | Subtle structural dividers |
| `--border-strong` | `#F5F5F5` | Interactive input and hover borders |
| `--accent` | `#FF6B6B` | Primary CTA and focus highlight |
| `--accent-hover` | `#FF8787` | Interactive hover accent |
| `--accent-ink` | `#140505` | Text inside filled accent controls |
| `--accent-soft` | `#361717` | Subtle selection wash |
| `--focus-ring` | `#FF6B6B` | Keyboard focus indicator |
| `--positive` | `#4CC38A` | Success / growth delta |
| `--warning` | `#F5B841` | Caution state |
| `--negative` | `#FF6B6B` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#111111` on `#FFFFFF` | **18.88:1** (Lc 105.4) |
| Light | Secondary Text / Canvas | `#424242` on `#FFFFFF` | **10.05:1** (Lc 93.4) |
| Light | Muted Text / Canvas | `#636363` on `#FFFFFF` | **6.01:1** (Lc 80.1) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#C82323` | **5.64:1** (Lc -81.7) |
| Dark | Primary Text / Canvas | `#F5F5F5` on `#111111` | **17.32:1** (Lc -100.8) |
| Dark | Secondary Text / Canvas | `#C2C2C2` on `#111111` | **10.6:1** (Lc -69.3) |
| Dark | Muted Text / Canvas | `#949494` on `#111111` | **6.22:1** (Lc -44.1) |
| Dark | Accent Ink / Accent Fill | `#140505` on `#FF6B6B` | **7.18:1** (Lc 51) |

## 3. Typography & Scale

- **Display:** "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif (Weight `600`, Tracking `-0.03em`)
- **Body:** "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "IBM Plex Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap">
```
- **Notes:** Hold strict alignment across grid columns; use IBM Plex Mono for coordinates, dates, and index numbers.

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
- **Concentric Radii:** Control `2px`, Card `0px`, Panel `0px`, Pill `2px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1360px` | **Density:** `comfortable`
- **Light Elevation:** Card `none` | Float `0 4px 12px rgba(0, 0, 0, 0.08)`
- **Dark Elevation:** Crisp #111111 canvas with exposed #2E2E2E grid lines and stark #F5F5F5 typography.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`100ms` fast / `160ms` medium / `240ms` slow) — Direct, architectural snaps with zero wobble.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** 0px-2px square solid vermilion or black fill, inverted on hover.
- **Secondary Button:** 1px solid ink border with 0-2px corners.
- **Card:** Square ruled cell separated by crisp 1px horizontal and vertical lines.
- **Input:** Square or bottom-ruled field with 0-2px radius and bold focus rule.
- **Nav Item:** Grid-aligned nav items with solid accent square indicator when active.
- **Badge / Status:** Square mono index tag with 1px rule.

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
| **Wide** | `> 1440px` | Center container at `1360px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Objective, concise, declarative clarity.

## 8. Theme Do's & Don'ts

### Do
- Expose horizontal and vertical 1px structural rules intentionally.
- Align every headline edge strictly to the underlying column grid.
- Use stark black/white contrast plus one single vermilion red accent.
- Keep corners 0px to 2px consistently across every component.

### Don't
- Never use soft shadows, glass blur, or pill buttons.
- Never center-align multi-line body blocks against left-aligned grid rules.
- Never mix rounded cards inside a square grid.
- Never dilute contrast with muddy gray-on-gray text.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Swiss Grid (swiss-grid) | Pack: professional | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #EBEBEB;
  --bg-canvas: #FFFFFF;
  --bg-card: #F7F7F7;
  --bg-raised: #ECECEC;
  --text-primary: #111111;
  --text-secondary: #424242;
  --text-muted: #636363;
  --border-hairline: #D4D4D4;
  --border-strong: #111111;
  --accent: #C82323;
  --accent-hover: #A31B1B;
  --accent-ink: #FFFFFF;
  --accent-soft: #FDECEC;
  --focus-ring: #C82323;
  --positive: #157A3D;
  --warning: #9C5B00;
  --negative: #C82323;
  --font-display: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
  --font-body: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-weight-display: 600;
  --font-weight-body: 400;
  --tracking-display: -0.03em;
  --radius-control: 2px;
  --radius-card: 0px;
  --radius-panel: 0px;
  --radius-pill: 2px;
  --border-width: 1px;
  --container-max: 1360px;
  --shadow-card: none;
  --shadow-float: 0 4px 12px rgba(0, 0, 0, 0.08);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 100ms;
  --dur-medium: 160ms;
  --dur-slow: 240ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #0A0A0A;
  --bg-canvas: #111111;
  --bg-card: #1A1A1A;
  --bg-raised: #262626;
  --text-primary: #F5F5F5;
  --text-secondary: #C2C2C2;
  --text-muted: #949494;
  --border-hairline: #2E2E2E;
  --border-strong: #F5F5F5;
  --accent: #FF6B6B;
  --accent-hover: #FF8787;
  --accent-ink: #140505;
  --accent-soft: #361717;
  --focus-ring: #FF6B6B;
  --positive: #4CC38A;
  --warning: #F5B841;
  --negative: #FF6B6B;
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
