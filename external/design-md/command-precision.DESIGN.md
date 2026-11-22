---
schema: unvibe-design-md/v1
themeId: "command-precision"
name: "Command Precision"
pack: "professional"
defaultMode: "dark"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#F1F2F6"
    bgCanvas: "#FCFCFD"
    bgCard: "#FFFFFF"
    bgRaised: "#EEF0F6"
    textPrimary: "#111217"
    textSecondary: "#494C5A"
    textMuted: "#626675"
    borderHairline: "#E2E4EC"
    borderStrong: "#C4C8D6"
    accent: "#4752C4"
    accentHover: "#3B45AD"
    accentInk: "#FFFFFF"
    accentSoft: "#EDEFFC"
    focusRing: "#4752C4"
    positive: "#167E4D"
    warning: "#A15C07"
    negative: "#C92A2A"
  dark:
    bgDeep: "#060708"
    bgCanvas: "#090A0C"
    bgCard: "#111215"
    bgRaised: "#1B1D22"
    textPrimary: "#F5F6F8"
    textSecondary: "#B3B8C4"
    textMuted: "#8B91A0"
    borderHairline: "rgba(255, 255, 255, 0.085)"
    borderStrong: "#2F323B"
    accent: "#7D88F0"
    accentHover: "#97A0F5"
    accentInk: "#080914"
    accentSoft: "#191D38"
    focusRing: "#7D88F0"
    positive: "#46C488"
    warning: "#F5B841"
    negative: "#F87171"
typography:
  display: "Inter, ui-sans-serif, system-ui, sans-serif"
  body: "Inter, ui-sans-serif, system-ui, sans-serif"
  mono: "\"JetBrains Mono\", ui-monospace, monospace"
  displayWeight: 500
  bodyWeight: 400
  trackingDisplay: "-0.025em"
radius:
  control: "6px"
  card: "10px"
  panel: "14px"
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
  fastMs: 110
  mediumMs: 170
  slowMs: 260
---

# DESIGN.md — Command Precision

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `command-precision`
- **Pack:** `professional`
- **Default Mode:** `dark`
- **Mood:** technical, exact, dense, keyboard-first
- **Recommended Surface Modes:** operate, persuade
- **Best For:** issue trackers, developer tools, monitoring consoles, roadmaps, IDEs

## 1. Visual Theme & Atmosphere

**Void-black software-craft workbench with 1px hairline structure and crisp indigo telemetry.**

Built for issue trackers, developer workbenches, and high-speed operational tooling. Combines near-black layered panels, subtle top hairline highlights, dense keyboard-shortcut affordances, and a single crisp indigo focus accent without decorative noise.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#F1F2F6` | Sidebar / recessed shell |
| `--bg-canvas` | `#FCFCFD` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#EEF0F6` | Active rows, inputs, secondary pills |
| `--text-primary` | `#111217` | Headings and primary copy |
| `--text-secondary` | `#494C5A` | Supporting descriptions |
| `--text-muted` | `#626675` | Captions, axis labels, timestamps |
| `--border-hairline` | `#E2E4EC` | Subtle structural dividers |
| `--border-strong` | `#C4C8D6` | Interactive input and hover borders |
| `--accent` | `#4752C4` | Primary CTA and focus highlight |
| `--accent-hover` | `#3B45AD` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#EDEFFC` | Subtle selection wash |
| `--focus-ring` | `#4752C4` | Keyboard focus indicator |
| `--positive` | `#167E4D` | Success / growth delta |
| `--warning` | `#A15C07` | Caution state |
| `--negative` | `#C92A2A` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#060708` | Sidebar / recessed shell |
| `--bg-canvas` | `#090A0C` | Main viewport ground |
| `--bg-card` | `#111215` | Elevated cards and panels |
| `--bg-raised` | `#1B1D22` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F5F6F8` | Headings and primary copy |
| `--text-secondary` | `#B3B8C4` | Supporting descriptions |
| `--text-muted` | `#8B91A0` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(255, 255, 255, 0.085)` | Subtle structural dividers |
| `--border-strong` | `#2F323B` | Interactive input and hover borders |
| `--accent` | `#7D88F0` | Primary CTA and focus highlight |
| `--accent-hover` | `#97A0F5` | Interactive hover accent |
| `--accent-ink` | `#080914` | Text inside filled accent controls |
| `--accent-soft` | `#191D38` | Subtle selection wash |
| `--focus-ring` | `#7D88F0` | Keyboard focus indicator |
| `--positive` | `#46C488` | Success / growth delta |
| `--warning` | `#F5B841` | Caution state |
| `--negative` | `#F87171` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#111217` on `#FCFCFD` | **18.24:1** (Lc 103.5) |
| Light | Secondary Text / Canvas | `#494C5A` on `#FCFCFD` | **8.31:1** (Lc 87.6) |
| Light | Muted Text / Canvas | `#626675` on `#FCFCFD` | **5.57:1** (Lc 76.8) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#4752C4` | **6.42:1** (Lc -86.6) |
| Dark | Primary Text / Canvas | `#F5F6F8` on `#090A0C` | **18.32:1** (Lc -101.8) |
| Dark | Secondary Text / Canvas | `#B3B8C4` on `#090A0C` | **9.97:1** (Lc -63.8) |
| Dark | Muted Text / Canvas | `#8B91A0` on `#090A0C` | **6.28:1** (Lc -42.9) |
| Dark | Accent Ink / Accent Fill | `#080914` on `#7D88F0` | **6.28:1** (Lc 45.3) |

## 3. Typography & Scale

- **Display:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `500`, Tracking `-0.025em`)
- **Body:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "JetBrains Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
```
- **Notes:** Display titles stay tight at -0.025em; shortcut keycaps and issue IDs (ENG-412) always set in JetBrains Mono.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `500` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `500` | Tracking `-0.025em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `6px`, Card `10px`, Panel `14px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1440px` | **Density:** `compact`
- **Light Elevation:** Card `0 1px 2px rgba(9, 10, 14, 0.05)` | Float `0 12px 32px rgba(9, 10, 14, 0.10)`
- **Dark Elevation:** Void ground (#08090A) with layered charcoal panels (#111214 / #18191D) and crisp 8-10% hairlines.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`110ms` fast / `170ms` medium / `260ms` slow) — Immediate keyboard-speed response.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** 6px radius solid accent button with sharp 500 label.
- **Secondary Button:** Raised panel fill with 1px top highlight and crisp hairline.
- **Card:** Hairline-framed panel in bgCard with zero drop-shadow clutter.
- **Input:** Compact command bar / filter input with kbd shortcut hint.
- **Nav Item:** 32px compact row with 16px SVG icon and muted count on right.
- **Badge / Status:** Small bordered mono chip or status ring icon.

### Interactive State Matrix

| State | Visual & Token Behavior | Accessibility Rule |
| :--- | :--- | :--- |
| **Default** | Surface `--bg-card` / `--bg-raised`, border `--border-hairline`, text `--text-primary` | Native `<button>` / `<a>` semantics; hit area `>=24px` desktop (`>=44px` touch) |
| **Hover** | Shift accent fill to `--accent-hover` or step surface to `--bg-raised` (`110ms` color transition) | Never jump layout dimensions or trigger large `scale()` transforms |
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

Terse, operational, unambiguous engineering labels.

## 8. Theme Do's & Don'ts

### Do
- Expose keyboard shortcuts cleanly inside small <kbd> keycaps.
- Use subtle 1px hairlines and stepped blacks instead of blur glow shadows.
- Keep list rows uniform in height (32-36px) with aligned columns.
- Use muted slate for secondary metadata and IDs.

### Don't
- Never apply purple-to-pink glowing borders around cards.
- Never slow down interactions with 500ms float animations.
- Never use vague marketing jargon in operational screens.
- Never omit keyboard focus rings on list rows.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Command Precision (command-precision) | Pack: professional | Default: dark */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: dark;
  --bg-deep: #060708;
  --bg-canvas: #090A0C;
  --bg-card: #111215;
  --bg-raised: #1B1D22;
  --text-primary: #F5F6F8;
  --text-secondary: #B3B8C4;
  --text-muted: #8B91A0;
  --border-hairline: rgba(255, 255, 255, 0.085);
  --border-strong: #2F323B;
  --accent: #7D88F0;
  --accent-hover: #97A0F5;
  --accent-ink: #080914;
  --accent-soft: #191D38;
  --focus-ring: #7D88F0;
  --positive: #46C488;
  --warning: #F5B841;
  --negative: #F87171;
  --font-display: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-body: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-weight-display: 500;
  --font-weight-body: 400;
  --tracking-display: -0.025em;
  --radius-control: 6px;
  --radius-card: 10px;
  --radius-panel: 14px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1440px;
  --shadow-card: 0 1px 2px rgba(9, 10, 14, 0.05);
  --shadow-float: 0 12px 32px rgba(9, 10, 14, 0.10);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 110ms;
  --dur-medium: 170ms;
  --dur-slow: 260ms;
}

[data-theme="light"] {
  color-scheme: light;
  --bg-deep: #F1F2F6;
  --bg-canvas: #FCFCFD;
  --bg-card: #FFFFFF;
  --bg-raised: #EEF0F6;
  --text-primary: #111217;
  --text-secondary: #494C5A;
  --text-muted: #626675;
  --border-hairline: #E2E4EC;
  --border-strong: #C4C8D6;
  --accent: #4752C4;
  --accent-hover: #3B45AD;
  --accent-ink: #FFFFFF;
  --accent-soft: #EDEFFC;
  --focus-ring: #4752C4;
  --positive: #167E4D;
  --warning: #A15C07;
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
