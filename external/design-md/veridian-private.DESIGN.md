---
schema: unvibe-design-md/v1
themeId: "veridian-private"
name: "Veridian Private"
pack: "premium"
defaultMode: "light"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#ECEAE2"
    bgCanvas: "#F7F6F1"
    bgCard: "#FFFFFF"
    bgRaised: "#EFECE3"
    textPrimary: "#131C18"
    textSecondary: "#404E47"
    textMuted: "#5C6B63"
    borderHairline: "rgba(19, 28, 24, 0.10)"
    borderStrong: "#C4C2B7"
    accent: "#184A3B"
    accentHover: "#11362B"
    accentInk: "#FFFFFF"
    accentSoft: "#E6EFEA"
    focusRing: "#184A3B"
    positive: "#185E42"
    warning: "#8F5A12"
    negative: "#A62B2B"
  dark:
    bgDeep: "#08100D"
    bgCanvas: "#0D1713"
    bgCard: "#14221C"
    bgRaised: "#1D2F27"
    textPrimary: "#F2F1EB"
    textSecondary: "#BCC6BF"
    textMuted: "#8FA197"
    borderHairline: "rgba(242, 241, 235, 0.11)"
    borderStrong: "#2E453B"
    accent: "#5AC29B"
    accentHover: "#79D1B0"
    accentInk: "#081610"
    accentSoft: "#153226"
    focusRing: "#5AC29B"
    positive: "#5AC29B"
    warning: "#E6AF4B"
    negative: "#F87171"
typography:
  display: "\"Fraunces\", Georgia, serif"
  body: "\"IBM Plex Sans\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  displayWeight: 500
  bodyWeight: 400
  trackingDisplay: "-0.02em"
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
  fastMs: 160
  mediumMs: 240
  slowMs: 380
---

# DESIGN.md — Veridian Private

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `veridian-private`
- **Pack:** `premium`
- **Default Mode:** `light`
- **Mood:** heritage, dignified, trustworthy, composed
- **Recommended Surface Modes:** read, persuade, operate
- **Best For:** wealth management, legal practices, private clubs, executive reporting, real estate advisory

## 1. Visual Theme & Atmosphere

**Heritage racing-emerald and soft ivory palette crafted for executive advisory and private banking.**

Combines soft ivory paper with deep British racing-emerald accents and dignified Fraunces display typography. Evokes private wealth advisory, legal firms, and timeless member institutions without leaning on clichés or dated ornamentation.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#ECEAE2` | Sidebar / recessed shell |
| `--bg-canvas` | `#F7F6F1` | Main viewport ground |
| `--bg-card` | `#FFFFFF` | Elevated cards and panels |
| `--bg-raised` | `#EFECE3` | Active rows, inputs, secondary pills |
| `--text-primary` | `#131C18` | Headings and primary copy |
| `--text-secondary` | `#404E47` | Supporting descriptions |
| `--text-muted` | `#5C6B63` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(19, 28, 24, 0.10)` | Subtle structural dividers |
| `--border-strong` | `#C4C2B7` | Interactive input and hover borders |
| `--accent` | `#184A3B` | Primary CTA and focus highlight |
| `--accent-hover` | `#11362B` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#E6EFEA` | Subtle selection wash |
| `--focus-ring` | `#184A3B` | Keyboard focus indicator |
| `--positive` | `#185E42` | Success / growth delta |
| `--warning` | `#8F5A12` | Caution state |
| `--negative` | `#A62B2B` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#08100D` | Sidebar / recessed shell |
| `--bg-canvas` | `#0D1713` | Main viewport ground |
| `--bg-card` | `#14221C` | Elevated cards and panels |
| `--bg-raised` | `#1D2F27` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F2F1EB` | Headings and primary copy |
| `--text-secondary` | `#BCC6BF` | Supporting descriptions |
| `--text-muted` | `#8FA197` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(242, 241, 235, 0.11)` | Subtle structural dividers |
| `--border-strong` | `#2E453B` | Interactive input and hover borders |
| `--accent` | `#5AC29B` | Primary CTA and focus highlight |
| `--accent-hover` | `#79D1B0` | Interactive hover accent |
| `--accent-ink` | `#081610` | Text inside filled accent controls |
| `--accent-soft` | `#153226` | Subtle selection wash |
| `--focus-ring` | `#5AC29B` | Keyboard focus indicator |
| `--positive` | `#5AC29B` | Success / growth delta |
| `--warning` | `#E6AF4B` | Caution state |
| `--negative` | `#F87171` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#131C18` on `#F7F6F1` | **16.08:1** (Lc 98.8) |
| Light | Secondary Text / Canvas | `#404E47` on `#F7F6F1` | **8.09:1** (Lc 84.5) |
| Light | Muted Text / Canvas | `#5C6B63` on `#F7F6F1` | **5.19:1** (Lc 72.6) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#184A3B` | **10.09:1** (Lc -97.3) |
| Dark | Primary Text / Canvas | `#F2F1EB` on `#0D1713` | **16.15:1** (Lc -97.7) |
| Dark | Secondary Text / Canvas | `#BCC6BF` on `#0D1713` | **10.42:1** (Lc -69.8) |
| Dark | Muted Text / Canvas | `#8FA197` on `#0D1713` | **6.71:1** (Lc -48.3) |
| Dark | Accent Ink / Accent Fill | `#081610` on `#5AC29B` | **8.5:1** (Lc 60.3) |

## 3. Typography & Scale

- **Display:** "Fraunces", Georgia, serif (Weight `500`, Tracking `-0.02em`)
- **Body:** "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "IBM Plex Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
```
- **Notes:** Use Fraunces at optical display sizes (32-60px) and IBM Plex Sans + Mono for financial figures and body text.

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
- **Concentric Radii:** Control `6px`, Card `10px`, Panel `14px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1220px` | **Density:** `spacious`
- **Light Elevation:** Card `0 1px 3px rgba(12, 22, 18, 0.05)` | Float `0 12px 32px rgba(12, 22, 18, 0.10)`
- **Dark Elevation:** Deep forest obsidian (#0C1612 canvas, #13211B cards) with muted sage-gold hairlines.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`160ms` fast / `240ms` medium / `380ms` slow) — Composed, dignified transitions.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid racing-emerald fill with crisp ivory text and 6px corners.
- **Secondary Button:** 1px hairline framed white/forest card button.
- **Card:** Crisp white card on ivory ground with thin horizontal rule inside headers.
- **Input:** Sharp 6px bordered fields with tabular numeric formatting.
- **Nav Item:** Calm horizontal menu with subtle emerald underline for active route.
- **Badge / Status:** Subtle warm stone tag with mono typography.

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
| **Wide** | `> 1440px` | Center container at `1220px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Composed, authoritative, clear, zero slang or hype.

## 8. Theme Do's & Don'ts

### Do
- Set portfolio numbers and yield metrics in tabular monospace or aligned sans.
- Pair racing emerald cleanly with ivory paper and warm black ink.
- Keep lines and rules crisp and architectural.
- Design clear multi-step disclosure panels for complex data.

### Don't
- Never use crypto-style neon greens or glowing badges.
- Never add stock handshake clichés or unverified stat counters.
- Never over-round buttons into toy pills.
- Never use thin gray text on dark green without verifying 4.5:1 contrast.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Veridian Private (veridian-private) | Pack: premium | Default: light */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: light;
  --bg-deep: #ECEAE2;
  --bg-canvas: #F7F6F1;
  --bg-card: #FFFFFF;
  --bg-raised: #EFECE3;
  --text-primary: #131C18;
  --text-secondary: #404E47;
  --text-muted: #5C6B63;
  --border-hairline: rgba(19, 28, 24, 0.10);
  --border-strong: #C4C2B7;
  --accent: #184A3B;
  --accent-hover: #11362B;
  --accent-ink: #FFFFFF;
  --accent-soft: #E6EFEA;
  --focus-ring: #184A3B;
  --positive: #185E42;
  --warning: #8F5A12;
  --negative: #A62B2B;
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-weight-display: 500;
  --font-weight-body: 400;
  --tracking-display: -0.02em;
  --radius-control: 6px;
  --radius-card: 10px;
  --radius-panel: 14px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1220px;
  --shadow-card: 0 1px 3px rgba(12, 22, 18, 0.05);
  --shadow-float: 0 12px 32px rgba(12, 22, 18, 0.10);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 160ms;
  --dur-medium: 240ms;
  --dur-slow: 380ms;
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg-deep: #08100D;
  --bg-canvas: #0D1713;
  --bg-card: #14221C;
  --bg-raised: #1D2F27;
  --text-primary: #F2F1EB;
  --text-secondary: #BCC6BF;
  --text-muted: #8FA197;
  --border-hairline: rgba(242, 241, 235, 0.11);
  --border-strong: #2E453B;
  --accent: #5AC29B;
  --accent-hover: #79D1B0;
  --accent-ink: #081610;
  --accent-soft: #153226;
  --focus-ring: #5AC29B;
  --positive: #5AC29B;
  --warning: #E6AF4B;
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
