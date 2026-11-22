---
schema: unvibe-design-md/v1
themeId: "ledger-trust"
name: "Ledger Trust"
pack: "professional"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#EDF2F7"
    bgCanvas: "#F6F9FC"
    bgCard: "#FFFFFF"
    bgRaised: "#EEF3F9"
    textPrimary: "#0A2540"
    textSecondary: "#3C4E62"
    textMuted: "#59697D"
    borderHairline: "#E3E8EE"
    borderStrong: "#C7D2DE"
    accent: "#5145E5"
    accentHover: "#3E32CC"
    accentInk: "#FFFFFF"
    accentSoft: "#EEF0FF"
    focusRing: "#5145E5"
    positive: "#0D7A4E"
    warning: "#A65B00"
    negative: "#C92A2A"
  dark:
    bgDeep: "#07101B"
    bgCanvas: "#0B1726"
    bgCard: "#122338"
    bgRaised: "#1A2F4A"
    textPrimary: "#F1F5F9"
    textSecondary: "#B8C7D9"
    textMuted: "#8CA0B8"
    borderHairline: "rgba(241, 245, 249, 0.11)"
    borderStrong: "#2C425E"
    accent: "#8C84FF"
    accentHover: "#A7A0FF"
    accentInk: "#0A1024"
    accentSoft: "#1C244D"
    focusRing: "#8C84FF"
    positive: "#34D399"
    warning: "#FBBF24"
    negative: "#FB7185"
typography:
  display: "\"Plus Jakarta Sans\", ui-sans-serif, system-ui, sans-serif"
  body: "\"Plus Jakarta Sans\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  displayWeight: 600
  bodyWeight: 400
  trackingDisplay: "-0.025em"
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
  fastMs: 140
  mediumMs: 200
  slowMs: 320
---

# DESIGN.md — Ledger Trust

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `ledger-trust`
- **Pack:** `professional`
- **Default Mode:** `light`
- **Mood:** authoritative, financial, precise, trustworthy
- **Recommended Surface Modes:** operate, persuade
- **Best For:** fintech, billing platforms, checkout flows, accounting tools, enterprise SaaS

## 1. Visual Theme & Atmosphere

**Authoritative slate-navy ink on alabaster-blue surfaces with crisp indigo checkout precision.**

Designed for financial tools, payments, invoicing, and enterprise infrastructure where immediate credibility matters. Anchors typography in deep slate-navy rather than pure black, separating crisp cards over cool alabaster surfaces with disciplined blurple accents.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#EDF2F7` | Sidebar / recessed shell |
| `--bg-canvas` | `#F6F9FC` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#EEF3F9` | Active rows, inputs, secondary pills |
| `--text-primary` | `#0A2540` | Headings and primary copy |
| `--text-secondary` | `#3C4E62` | Supporting descriptions |
| `--text-muted` | `#59697D` | Captions, axis labels, timestamps |
| `--border-hairline` | `#E3E8EE` | Subtle structural dividers |
| `--border-strong` | `#C7D2DE` | Interactive input and hover borders |
| `--accent` | `#5145E5` | Primary CTA and focus highlight |
| `--accent-hover` | `#3E32CC` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#EEF0FF` | Subtle selection wash |
| `--focus-ring` | `#5145E5` | Keyboard focus indicator |
| `--positive` | `#0D7A4E` | Success / growth delta |
| `--warning` | `#A65B00` | Caution state |
| `--negative` | `#C92A2A` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#07101B` | Sidebar / recessed shell |
| `--bg-canvas` | `#0B1726` | Main viewport ground |
| `--bg-card` | `#122338` | Elevated cards and panels |
| `--bg-raised` | `#1A2F4A` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F1F5F9` | Headings and primary copy |
| `--text-secondary` | `#B8C7D9` | Supporting descriptions |
| `--text-muted` | `#8CA0B8` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(241, 245, 249, 0.11)` | Subtle structural dividers |
| `--border-strong` | `#2C425E` | Interactive input and hover borders |
| `--accent` | `#8C84FF` | Primary CTA and focus highlight |
| `--accent-hover` | `#A7A0FF` | Interactive hover accent |
| `--accent-ink` | `#0A1024` | Text inside filled accent controls |
| `--accent-soft` | `#1C244D` | Subtle selection wash |
| `--focus-ring` | `#8C84FF` | Keyboard focus indicator |
| `--positive` | `#34D399` | Success / growth delta |
| `--warning` | `#FBBF24` | Caution state |
| `--negative` | `#FB7185` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#0A2540` on `#F6F9FC` | **14.7:1** (Lc 98.4) |
| Light | Secondary Text / Canvas | `#3C4E62` on `#F6F9FC` | **8.08:1** (Lc 85.5) |
| Light | Muted Text / Canvas | `#59697D` on `#F6F9FC` | **5.31:1** (Lc 74.2) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#5145E5` | **6.3:1** (Lc -85.7) |
| Dark | Primary Text / Canvas | `#F1F5F9` on `#0B1726` | **16.46:1** (Lc -99.9) |
| Dark | Secondary Text / Canvas | `#B8C7D9` on `#0B1726` | **10.48:1** (Lc -70.7) |
| Dark | Muted Text / Canvas | `#8CA0B8` on `#0B1726` | **6.73:1** (Lc -48.8) |
| Dark | Accent Ink / Accent Fill | `#0A1024` on `#8C84FF` | **6.17:1** (Lc 46) |

## 3. Typography & Scale

- **Display:** "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif (Weight `600`, Tracking `-0.025em`)
- **Body:** "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "IBM Plex Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap">
```
- **Notes:** Always enforce tabular-nums on currency amounts, percentages, and invoice IDs.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `600` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `600` | Tracking `-0.025em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `8px`, Card `12px`, Panel `16px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1240px` | **Density:** `comfortable`
- **Light Elevation:** Card `0 2px 6px rgba(10, 37, 64, 0.05), 0 1px 2px rgba(10, 37, 64, 0.04)` | Float `0 16px 36px rgba(10, 37, 64, 0.12)`
- **Dark Elevation:** Deep maritime navy (#0A1624 canvas, #112236 cards) with subtle slate hairlines.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`140ms` fast / `200ms` medium / `320ms` slow) — Crisp mechanical snap on toggles and tabular number clarity.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid indigo CTA, 8px radius, crisp 500 text, subtle top inset highlight.
- **Secondary Button:** White/card surface with navy text and 1px hairline border.
- **Card:** Crisp card with soft cool-navy micro-shadow and generous 24px padding.
- **Input:** Sharp 8px field with explicit label, clear error recovery text, and tabular digits.
- **Nav Item:** Clean navy text links with gentle accent hover.
- **Badge / Status:** Subtle tinted pill for invoice states (Paid, Pending, Overdue).

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
| **Wide** | `> 1440px` | Center container at `1240px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Precise, transparent, audit-ready financial language.

## 8. Theme Do's & Don'ts

### Do
- Pair deep navy ink (#0A2540) with cool alabaster (#F6F9FC) rather than harsh black on white.
- Format every financial figure consistently with decimals aligned.
- Show real comparison baselines on revenue metrics.
- Use crisp API/code preview panels where developer products apply.

### Don't
- Never use glowing neon blurs behind payment cards.
- Never mix rounded pill containers with sharp rectangular inputs.
- Never invent fake $123,456 placeholder figures.
- Never omit error states on checkout or billing inputs.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Ledger Trust (ledger-trust) | Pack: professional | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #EDF2F7;
  --bg-canvas: #F6F9FC;
  --bg-card: #FFFFFF;
  --bg-raised: #EEF3F9;
  --text-primary: #0A2540;
  --text-secondary: #3C4E62;
  --text-muted: #59697D;
  --border-hairline: #E3E8EE;
  --border-strong: #C7D2DE;
  --accent: #5145E5;
  --accent-hover: #3E32CC;
  --accent-ink: #FFFFFF;
  --accent-soft: #EEF0FF;
  --focus-ring: #5145E5;
  --positive: #0D7A4E;
  --warning: #A65B00;
  --negative: #C92A2A;
  --font-display: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-weight-display: 600;
  --font-weight-body: 400;
  --tracking-display: -0.025em;
  --radius-control: 8px;
  --radius-card: 12px;
  --radius-panel: 16px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1240px;
  --shadow-card: 0 2px 6px rgba(10, 37, 64, 0.05), 0 1px 2px rgba(10, 37, 64, 0.04);
  --shadow-float: 0 16px 36px rgba(10, 37, 64, 0.12);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 140ms;
  --dur-medium: 200ms;
  --dur-slow: 320ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #07101B;
  --bg-canvas: #0B1726;
  --bg-card: #122338;
  --bg-raised: #1A2F4A;
  --text-primary: #F1F5F9;
  --text-secondary: #B8C7D9;
  --text-muted: #8CA0B8;
  --border-hairline: rgba(241, 245, 249, 0.11);
  --border-strong: #2C425E;
  --accent: #8C84FF;
  --accent-hover: #A7A0FF;
  --accent-ink: #0A1024;
  --accent-soft: #1C244D;
  --focus-ring: #8C84FF;
  --positive: #34D399;
  --warning: #FBBF24;
  --negative: #FB7185;
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
