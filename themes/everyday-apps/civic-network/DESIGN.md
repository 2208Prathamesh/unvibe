---
schema: unvibe-design-md/v1
themeId: "civic-network"
name: "Civic Network"
pack: "everyday-apps"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#EAE7E1"
    bgCanvas: "#F4F2EE"
    bgCard: "#FFFFFF"
    bgRaised: "#EEF3F8"
    textPrimary: "#191919"
    textSecondary: "#484848"
    textMuted: "#666666"
    borderHairline: "rgba(0, 0, 0, 0.09)"
    borderStrong: "#BDBBB5"
    accent: "#0A66C2"
    accentHover: "#004182"
    accentInk: "#FFFFFF"
    accentSoft: "#EBF4FD"
    focusRing: "#0A66C2"
    positive: "#057642"
    warning: "#915907"
    negative: "#CC1016"
  dark:
    bgDeep: "#0A0D10"
    bgCanvas: "#111519"
    bgCard: "#1B2026"
    bgRaised: "#262D35"
    textPrimary: "#F0F2F5"
    textSecondary: "#B8C0C8"
    textMuted: "#8E99A4"
    borderHairline: "rgba(240, 242, 245, 0.11)"
    borderStrong: "#38414C"
    accent: "#70B5F9"
    accentHover: "#95C9FA"
    accentInk: "#081726"
    accentSoft: "#13293F"
    focusRing: "#70B5F9"
    positive: "#46C488"
    warning: "#E8A638"
    negative: "#F87171"
typography:
  display: "\"Source Sans 3\", ui-sans-serif, system-ui, sans-serif"
  body: "\"Source Sans 3\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  displayWeight: 600
  bodyWeight: 400
  trackingDisplay: "-0.01em"
radius:
  control: "9999px"
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
  fastMs: 130
  mediumMs: 190
  slowMs: 280
---

# DESIGN.md — Civic Network

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `civic-network`
- **Pack:** `everyday-apps`
- **Default Mode:** `light`
- **Mood:** structured, trustworthy, organized, readable
- **Recommended Surface Modes:** social, operate, read
- **Best For:** professional networks, job boards, alumni portals, B2B directories, knowledge communities

## 1. Visual Theme & Atmosphere

**Structured warm-stone directory and professional community layout with high-clarity cards.**

Built for multi-column feeds, profile cards, job boards, and structured professional directories. Sits cleanly on a warm stone ground so crisp white 8px cards read immediately as organized modules without heavy shadows, accented by trustworthy civic blue.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#EAE7E1` | Sidebar / recessed shell |
| `--bg-canvas` | `#F4F2EE` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#EEF3F8` | Active rows, inputs, secondary pills |
| `--text-primary` | `#191919` | Headings and primary copy |
| `--text-secondary` | `#484848` | Supporting descriptions |
| `--text-muted` | `#666666` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(0, 0, 0, 0.09)` | Subtle structural dividers |
| `--border-strong` | `#BDBBB5` | Interactive input and hover borders |
| `--accent` | `#0A66C2` | Primary CTA and focus highlight |
| `--accent-hover` | `#004182` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#EBF4FD` | Subtle selection wash |
| `--focus-ring` | `#0A66C2` | Keyboard focus indicator |
| `--positive` | `#057642` | Success / growth delta |
| `--warning` | `#915907` | Caution state |
| `--negative` | `#CC1016` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#0A0D10` | Sidebar / recessed shell |
| `--bg-canvas` | `#111519` | Main viewport ground |
| `--bg-card` | `#1B2026` | Elevated cards and panels |
| `--bg-raised` | `#262D35` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F0F2F5` | Headings and primary copy |
| `--text-secondary` | `#B8C0C8` | Supporting descriptions |
| `--text-muted` | `#8E99A4` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(240, 242, 245, 0.11)` | Subtle structural dividers |
| `--border-strong` | `#38414C` | Interactive input and hover borders |
| `--accent` | `#70B5F9` | Primary CTA and focus highlight |
| `--accent-hover` | `#95C9FA` | Interactive hover accent |
| `--accent-ink` | `#081726` | Text inside filled accent controls |
| `--accent-soft` | `#13293F` | Subtle selection wash |
| `--focus-ring` | `#70B5F9` | Keyboard focus indicator |
| `--positive` | `#46C488` | Success / growth delta |
| `--warning` | `#E8A638` | Caution state |
| `--negative` | `#F87171` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#191919` on `#F4F2EE` | **15.72:1** (Lc 96.8) |
| Light | Secondary Text / Canvas | `#484848` on `#F4F2EE` | **8.18:1** (Lc 83.4) |
| Light | Muted Text / Canvas | `#666666` on `#F4F2EE` | **5.14:1** (Lc 71.1) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#0A66C2` | **5.69:1** (Lc -83.1) |
| Dark | Primary Text / Canvas | `#F0F2F5` on `#111519` | **16.35:1** (Lc -98.4) |
| Dark | Secondary Text / Canvas | `#B8C0C8` on `#111519` | **9.97:1** (Lc -67.2) |
| Dark | Muted Text / Canvas | `#8E99A4` on `#111519` | **6.32:1** (Lc -45.7) |
| Dark | Accent Ink / Accent Fill | `#081726` on `#70B5F9` | **8.33:1** (Lc 60.1) |

## 3. Typography & Scale

- **Display:** "Source Sans 3", ui-sans-serif, system-ui, sans-serif (Weight `600`, Tracking `-0.01em`)
- **Body:** "Source Sans 3", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "IBM Plex Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
```
- **Notes:** Use 600 for card headings and names; keep secondary job titles and timestamps in muted gray.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `600` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `600` | Tracking `-0.01em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `9999px`, Card `8px`, Panel `12px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1180px` | **Density:** `comfortable`
- **Light Elevation:** Card `0 0 0 1px rgba(0, 0, 0, 0.08)` | Float `0 6px 18px rgba(0, 0, 0, 0.12)`
- **Dark Elevation:** Deep slate-charcoal (#0D1114 canvas, #181D22 cards) with clean 1px #2B333B hairline borders.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`130ms` fast / `190ms` medium / `280ms` slow) — Direct, zero-fluff state transitions.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Full pill button in trust blue with white or dark-slate ink.
- **Secondary Button:** Outlined pill with 1px solid accent or dark neutral border.
- **Card:** 8px rounded crisp card sitting on warm stone canvas with 1px border.
- **Input:** Subtle tinted search field (#EEF3F8 light / #262D35 dark) with crisp focus outline.
- **Nav Item:** Top bar icon-over-label tab with 2px bottom indicator bar when active.
- **Badge / Status:** Soft pill status chip with muted border for skills or roles.

### Interactive State Matrix

| State | Visual & Token Behavior | Accessibility Rule |
| :--- | :--- | :--- |
| **Default** | Surface `--bg-card` / `--bg-raised`, border `--border-hairline`, text `--text-primary` | Native `<button>` / `<a>` semantics; hit area `>=24px` desktop (`>=44px` touch) |
| **Hover** | Shift accent fill to `--accent-hover` or step surface to `--bg-raised` (`130ms` color transition) | Never jump layout dimensions or trigger large `scale()` transforms |
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
| **Wide** | `> 1440px` | Center container at `1180px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Clear, objective, credential-respecting community prose.

## 8. Theme Do's & Don'ts

### Do
- Contrast crisp white cards against the warm stone #F4F2EE page canvas.
- Use clear asymmetric 3-column or 2-column directory grids (240px rail + main feed + 300px context).
- Keep pill CTAs sharp and well-spaced.
- Display verified counts and dates in tabular figures.

### Don't
- Never nest cards inside cards inside feed posts.
- Never use heavy drop shadows where a 1px border over warm stone works cleanly.
- Never overcrowd navigation bars with more than 6 top-level items.
- Never use neon gradients on profile headers.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Civic Network (civic-network) | Pack: everyday-apps | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #EAE7E1;
  --bg-canvas: #F4F2EE;
  --bg-card: #FFFFFF;
  --bg-raised: #EEF3F8;
  --text-primary: #191919;
  --text-secondary: #484848;
  --text-muted: #666666;
  --border-hairline: rgba(0, 0, 0, 0.09);
  --border-strong: #BDBBB5;
  --accent: #0A66C2;
  --accent-hover: #004182;
  --accent-ink: #FFFFFF;
  --accent-soft: #EBF4FD;
  --focus-ring: #0A66C2;
  --positive: #057642;
  --warning: #915907;
  --negative: #CC1016;
  --font-display: "Source Sans 3", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Source Sans 3", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-weight-display: 600;
  --font-weight-body: 400;
  --tracking-display: -0.01em;
  --radius-control: 9999px;
  --radius-card: 8px;
  --radius-panel: 12px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1180px;
  --shadow-card: 0 0 0 1px rgba(0, 0, 0, 0.08);
  --shadow-float: 0 6px 18px rgba(0, 0, 0, 0.12);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 130ms;
  --dur-medium: 190ms;
  --dur-slow: 280ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #0A0D10;
  --bg-canvas: #111519;
  --bg-card: #1B2026;
  --bg-raised: #262D35;
  --text-primary: #F0F2F5;
  --text-secondary: #B8C0C8;
  --text-muted: #8E99A4;
  --border-hairline: rgba(240, 242, 245, 0.11);
  --border-strong: #38414C;
  --accent: #70B5F9;
  --accent-hover: #95C9FA;
  --accent-ink: #081726;
  --accent-soft: #13293F;
  --focus-ring: #70B5F9;
  --positive: #46C488;
  --warning: #E8A638;
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
