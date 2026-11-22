---
schema: unvibe-design-md/v1
themeId: "parchment-editorial"
name: "Parchment Editorial"
pack: "everyday-apps"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#EFE9DE"
    bgCanvas: "#FAF9F5"
    bgCard: "#FFFFFF"
    bgRaised: "#F3EFE6"
    textPrimary: "#141413"
    textSecondary: "#4F4D47"
    textMuted: "#69665E"
    borderHairline: "rgba(20, 20, 19, 0.10)"
    borderStrong: "#D8D0C3"
    accent: "#AE4F2E"
    accentHover: "#923F22"
    accentInk: "#FFFFFF"
    accentSoft: "#F9EBE5"
    focusRing: "#AE4F2E"
    positive: "#246A46"
    warning: "#9C5B12"
    negative: "#B42318"
  dark:
    bgDeep: "#141311"
    bgCanvas: "#1B1A17"
    bgCard: "#23211D"
    bgRaised: "#2D2A25"
    textPrimary: "#F5F2EB"
    textSecondary: "#C0BBB0"
    textMuted: "#999387"
    borderHairline: "rgba(245, 242, 235, 0.10)"
    borderStrong: "#3E3A33"
    accent: "#E08463"
    accentHover: "#EA9A7D"
    accentInk: "#18120F"
    accentSoft: "#32221C"
    focusRing: "#E08463"
    positive: "#5DB872"
    warning: "#E8A55A"
    negative: "#F87171"
typography:
  display: "\"Newsreader\", Georgia, serif"
  body: "\"Plus Jakarta Sans\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"JetBrains Mono\", ui-monospace, monospace"
  displayWeight: 400
  bodyWeight: 400
  trackingDisplay: "-0.02em"
radius:
  control: "8px"
  card: "14px"
  panel: "18px"
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
  mediumMs: 220
  slowMs: 360
---

# DESIGN.md — Parchment Editorial

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `parchment-editorial`
- **Pack:** `everyday-apps`
- **Default Mode:** `light`
- **Mood:** warm, humanist, literary, thoughtful
- **Recommended Surface Modes:** read, operate, persuade
- **Best For:** writing studios, AI knowledge assistants, note apps, journal tools, essays

## 1. Visual Theme & Atmosphere

**Warm cream paper canvas with humanist serif headlines and terracotta focus accents.**

An inviting editorial workspace anchored on warm archival cream rather than cold stark white. Pairs crisp humanist serif display type with clean sans body controls and an earthy terracotta signal, giving writing tools and intelligent workspaces warmth without visual noise.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#EFE9DE` | Sidebar / recessed shell |
| `--bg-canvas` | `#FAF9F5` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#F3EFE6` | Active rows, inputs, secondary pills |
| `--text-primary` | `#141413` | Headings and primary copy |
| `--text-secondary` | `#4F4D47` | Supporting descriptions |
| `--text-muted` | `#69665E` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(20, 20, 19, 0.10)` | Subtle structural dividers |
| `--border-strong` | `#D8D0C3` | Interactive input and hover borders |
| `--accent` | `#AE4F2E` | Primary CTA and focus highlight |
| `--accent-hover` | `#923F22` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#F9EBE5` | Subtle selection wash |
| `--focus-ring` | `#AE4F2E` | Keyboard focus indicator |
| `--positive` | `#246A46` | Success / growth delta |
| `--warning` | `#9C5B12` | Caution state |
| `--negative` | `#B42318` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#141311` | Sidebar / recessed shell |
| `--bg-canvas` | `#1B1A17` | Main viewport ground |
| `--bg-card` | `#23211D` | Elevated cards and panels |
| `--bg-raised` | `#2D2A25` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F5F2EB` | Headings and primary copy |
| `--text-secondary` | `#C0BBB0` | Supporting descriptions |
| `--text-muted` | `#999387` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(245, 242, 235, 0.10)` | Subtle structural dividers |
| `--border-strong` | `#3E3A33` | Interactive input and hover borders |
| `--accent` | `#E08463` | Primary CTA and focus highlight |
| `--accent-hover` | `#EA9A7D` | Interactive hover accent |
| `--accent-ink` | `#18120F` | Text inside filled accent controls |
| `--accent-soft` | `#32221C` | Subtle selection wash |
| `--focus-ring` | `#E08463` | Keyboard focus indicator |
| `--positive` | `#5DB872` | Success / growth delta |
| `--warning` | `#E8A55A` | Caution state |
| `--negative` | `#F87171` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#141413` on `#FAF9F5` | **17.5:1** (Lc 101.4) |
| Light | Secondary Text / Canvas | `#4F4D47` on `#FAF9F5` | **8.02:1** (Lc 85.5) |
| Light | Muted Text / Canvas | `#69665E` on `#FAF9F5` | **5.44:1** (Lc 75.1) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#AE4F2E` | **5.31:1** (Lc -81.2) |
| Dark | Primary Text / Canvas | `#F5F2EB` on `#1B1A17` | **15.57:1** (Lc -98.1) |
| Dark | Secondary Text / Canvas | `#C0BBB0` on `#1B1A17` | **9.1:1** (Lc -64.6) |
| Dark | Muted Text / Canvas | `#999387` on `#1B1A17` | **5.7:1** (Lc -43) |
| Dark | Accent Ink / Accent Fill | `#18120F` on `#E08463` | **6.76:1** (Lc 50.4) |

## 3. Typography & Scale

- **Display:** "Newsreader", Georgia, serif (Weight `400`, Tracking `-0.02em`)
- **Body:** "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "JetBrains Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
```
- **Notes:** Display serif reserved strictly for h1/h2 and pull quotes; keep UI buttons, tables, and labels in Plus Jakarta Sans.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `400` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `400` | Tracking `-0.02em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `8px`, Card `14px`, Panel `18px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1160px` | **Density:** `comfortable`
- **Light Elevation:** Card `0 1px 2px rgba(20, 20, 19, 0.04)` | Float `0 10px 28px rgba(20, 20, 19, 0.08)`
- **Dark Elevation:** Warm espresso charcoal surfaces (#181715 / #211F1C) with muted parchment ink.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`150ms` fast / `220ms` medium / `360ms` slow) — Gentle ink-and-paper fades.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid terracotta or deep charcoal button, 8px radius, crisp 500 sans label.
- **Secondary Button:** Warm card fill with 1px warm border.
- **Card:** Crisp white or soft stone card over cream canvas with subtle warm hairline.
- **Input:** Soft recessed parchment well, 1px warm border, focus outline in terracotta.
- **Nav Item:** Calm sans text links with subtle warm highlight background on active.
- **Badge / Status:** Soft cream tag in bgRaised; avoid saturated pills.

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

Thoughtful, plainspoken, unhurried editorial prose.

## 8. Theme Do's & Don'ts

### Do
- Set major headlines in Newsreader at 400 or 500 weight.
- Let generous warm parchment space frame content.
- Use terracotta sparingly for primary actions and active states.
- Pair warm neutral borders instead of cool slate borders.

### Don't
- Never mix cool blue-gray borders onto warm cream surfaces.
- Never use serif typography inside small 12px UI controls.
- Never add neon highlights or glowing drop shadows.
- Never shout with all-caps bold headings.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Parchment Editorial (parchment-editorial) | Pack: everyday-apps | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #EFE9DE;
  --bg-canvas: #FAF9F5;
  --bg-card: #FFFFFF;
  --bg-raised: #F3EFE6;
  --text-primary: #141413;
  --text-secondary: #4F4D47;
  --text-muted: #69665E;
  --border-hairline: rgba(20, 20, 19, 0.10);
  --border-strong: #D8D0C3;
  --accent: #AE4F2E;
  --accent-hover: #923F22;
  --accent-ink: #FFFFFF;
  --accent-soft: #F9EBE5;
  --focus-ring: #AE4F2E;
  --positive: #246A46;
  --warning: #9C5B12;
  --negative: #B42318;
  --font-display: "Newsreader", Georgia, serif;
  --font-body: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-weight-display: 400;
  --font-weight-body: 400;
  --tracking-display: -0.02em;
  --radius-control: 8px;
  --radius-card: 14px;
  --radius-panel: 18px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1160px;
  --shadow-card: 0 1px 2px rgba(20, 20, 19, 0.04);
  --shadow-float: 0 10px 28px rgba(20, 20, 19, 0.08);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 150ms;
  --dur-medium: 220ms;
  --dur-slow: 360ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #141311;
  --bg-canvas: #1B1A17;
  --bg-card: #23211D;
  --bg-raised: #2D2A25;
  --text-primary: #F5F2EB;
  --text-secondary: #C0BBB0;
  --text-muted: #999387;
  --border-hairline: rgba(245, 242, 235, 0.10);
  --border-strong: #3E3A33;
  --accent: #E08463;
  --accent-hover: #EA9A7D;
  --accent-ink: #18120F;
  --accent-soft: #32221C;
  --focus-ring: #E08463;
  --positive: #5DB872;
  --warning: #E8A55A;
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
