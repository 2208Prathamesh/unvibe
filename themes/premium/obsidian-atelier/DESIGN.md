---
schema: unvibe-design-md/v1
themeId: "obsidian-atelier"
name: "Obsidian Atelier"
pack: "premium"
defaultMode: "dark"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#ECE8DF"
    bgCanvas: "#F6F4EF"
    bgCard: "#FDFCF9"
    bgRaised: "#EFECE4"
    textPrimary: "#171512"
    textSecondary: "#4B463F"
    textMuted: "#696258"
    borderHairline: "rgba(23, 21, 18, 0.11)"
    borderStrong: "#CCC4B6"
    accent: "#755720"
    accentHover: "#5D4518"
    accentInk: "#FFFFFF"
    accentSoft: "#F4EDE0"
    focusRing: "#755720"
    positive: "#266847"
    warning: "#8A5616"
    negative: "#A6322B"
  dark:
    bgDeep: "#080807"
    bgCanvas: "#0E0E0C"
    bgCard: "#161513"
    bgRaised: "#21201C"
    textPrimary: "#F3EFE6"
    textSecondary: "#BDB6A8"
    textMuted: "#968E80"
    borderHairline: "rgba(243, 239, 230, 0.10)"
    borderStrong: "#3A362E"
    accent: "#CCA85E"
    accentHover: "#DBBC7A"
    accentInk: "#141008"
    accentSoft: "#292214"
    focusRing: "#CCA85E"
    positive: "#66C28F"
    warning: "#E3AA4D"
    negative: "#E56B63"
typography:
  display: "\"Instrument Serif\", Georgia, serif"
  body: "\"Plus Jakarta Sans\", ui-sans-serif, system-ui, sans-serif"
  mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  displayWeight: 400
  bodyWeight: 400
  trackingDisplay: "-0.02em"
radius:
  control: "4px"
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
  fastMs: 180
  mediumMs: 280
  slowMs: 460
---

# DESIGN.md — Obsidian Atelier

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `obsidian-atelier`
- **Pack:** `premium`
- **Default Mode:** `dark`
- **Mood:** quiet-luxury, sculpted, intimate, refined
- **Recommended Surface Modes:** persuade, read, editorial
- **Best For:** luxury brands, bespoke studios, flagship launches, concierge services, hospitality

## 1. Visual Theme & Atmosphere

**Quiet warm-obsidian luxury with editorial serif titles and brushed champagne brass highlights.**

Delivers unmistakable high-end restraint through warm near-black obsidian depths, ivory ink, classical display serifs, and brushed champagne accents. Rejects flashy neon or gold gradients in favor of gallery-grade restraint and razor-fine hairlines.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#ECE8DF` | Sidebar / recessed shell |
| `--bg-canvas` | `#F6F4EF` | Main viewport ground |
| `--bg-card` | `#FDFCF9` | Elevated cards and panels |
| `--bg-raised` | `#EFECE4` | Active rows, inputs, secondary pills |
| `--text-primary` | `#171512` | Headings and primary copy |
| `--text-secondary` | `#4B463F` | Supporting descriptions |
| `--text-muted` | `#696258` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(23, 21, 18, 0.11)` | Subtle structural dividers |
| `--border-strong` | `#CCC4B6` | Interactive input and hover borders |
| `--accent` | `#755720` | Primary CTA and focus highlight |
| `--accent-hover` | `#5D4518` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#F4EDE0` | Subtle selection wash |
| `--focus-ring` | `#755720` | Keyboard focus indicator |
| `--positive` | `#266847` | Success / growth delta |
| `--warning` | `#8A5616` | Caution state |
| `--negative` | `#A6322B` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#080807` | Sidebar / recessed shell |
| `--bg-canvas` | `#0E0E0C` | Main viewport ground |
| `--bg-card` | `#161513` | Elevated cards and panels |
| `--bg-raised` | `#21201C` | Active rows, inputs, secondary pills |
| `--text-primary` | `#F3EFE6` | Headings and primary copy |
| `--text-secondary` | `#BDB6A8` | Supporting descriptions |
| `--text-muted` | `#968E80` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(243, 239, 230, 0.10)` | Subtle structural dividers |
| `--border-strong` | `#3A362E` | Interactive input and hover borders |
| `--accent` | `#CCA85E` | Primary CTA and focus highlight |
| `--accent-hover` | `#DBBC7A` | Interactive hover accent |
| `--accent-ink` | `#141008` | Text inside filled accent controls |
| `--accent-soft` | `#292214` | Subtle selection wash |
| `--focus-ring` | `#CCA85E` | Keyboard focus indicator |
| `--positive` | `#66C28F` | Success / growth delta |
| `--warning` | `#E3AA4D` | Caution state |
| `--negative` | `#E56B63` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#171512` on `#F6F4EF` | **16.58:1** (Lc 98.4) |
| Light | Secondary Text / Canvas | `#4B463F` on `#F6F4EF` | **8.5:1** (Lc 85.1) |
| Light | Muted Text / Canvas | `#696258` on `#F6F4EF` | **5.48:1** (Lc 73.6) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#755720` | **6.69:1** (Lc -87.9) |
| Dark | Primary Text / Canvas | `#F3EFE6` on `#0E0E0C` | **16.84:1** (Lc -97.2) |
| Dark | Secondary Text / Canvas | `#BDB6A8` on `#0E0E0C` | **9.59:1** (Lc -62.9) |
| Dark | Muted Text / Canvas | `#968E80` on `#0E0E0C` | **5.96:1** (Lc -41.7) |
| Dark | Accent Ink / Accent Fill | `#141008` on `#CCA85E` | **8.43:1** (Lc 59) |

## 3. Typography & Scale

- **Display:** "Instrument Serif", Georgia, serif (Weight `400`, Tracking `-0.02em`)
- **Body:** "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "IBM Plex Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
```
- **Notes:** Set Instrument Serif generously large (48-72px) at 400 regular weight; keep UI copy in crisp Plus Jakarta Sans.

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
- **Concentric Radii:** Control `4px`, Card `8px`, Panel `12px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `1280px` | **Density:** `spacious`
- **Light Elevation:** Card `0 2px 10px rgba(20, 18, 15, 0.05)` | Float `0 16px 40px rgba(20, 18, 15, 0.12)`
- **Dark Elevation:** Warm obsidian (#0C0C0B) -> bronze-charcoal (#161513) -> brushed hairline borders.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`180ms` fast / `280ms` medium / `460ms` slow) — Slow, poised architectural reveals.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** Solid brushed champagne on dark (or deep antique bronze on light), sharp 4px corners.
- **Secondary Button:** 1px hairline border button with ivory text and subtle surface fill on hover.
- **Card:** Sharp-radiused 8px surface with 1px warm border and generous 32px padding.
- **Input:** Bottom-ruled or 4px bordered field with calm serif or clean sans labels.
- **Nav Item:** Quiet spaced links with subtle underline transition.
- **Badge / Status:** Ultra-minimal numbered edition mark in IBM Plex Mono.

### Interactive State Matrix

| State | Visual & Token Behavior | Accessibility Rule |
| :--- | :--- | :--- |
| **Default** | Surface `--bg-card` / `--bg-raised`, border `--border-hairline`, text `--text-primary` | Native `<button>` / `<a>` semantics; hit area `>=24px` desktop (`>=44px` touch) |
| **Hover** | Shift accent fill to `--accent-hover` or step surface to `--bg-raised` (`180ms` color transition) | Never jump layout dimensions or trigger large `scale()` transforms |
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
| **Wide** | `> 1440px` | Center container at `1280px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Poised, concise, concrete about craft and provenance; never salesy.

## 8. Theme Do's & Don'ts

### Do
- Give headlines ample empty dark/ivory canvas to breathe.
- Use brushed champagne sparingly—never metallic CSS gradients.
- Let photography feature rich natural directional shadows.
- Use fine 1px rules between specifications.

### Don't
- Never apply shiny gradient text or fake gold-foil CSS shaders.
- Never use puffy 24px rounded cards or bouncy hover jumps.
- Never write hype adjectives like 'luxury revolutionized'.
- Never clutter nav bars with notification bells or pill badges.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Obsidian Atelier (obsidian-atelier) | Pack: premium | Default: dark */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: dark;
  --bg-deep: #080807;
  --bg-canvas: #0E0E0C;
  --bg-card: #161513;
  --bg-raised: #21201C;
  --text-primary: #F3EFE6;
  --text-secondary: #BDB6A8;
  --text-muted: #968E80;
  --border-hairline: rgba(243, 239, 230, 0.10);
  --border-strong: #3A362E;
  --accent: #CCA85E;
  --accent-hover: #DBBC7A;
  --accent-ink: #141008;
  --accent-soft: #292214;
  --focus-ring: #CCA85E;
  --positive: #66C28F;
  --warning: #E3AA4D;
  --negative: #E56B63;
  --font-display: "Instrument Serif", Georgia, serif;
  --font-body: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-weight-display: 400;
  --font-weight-body: 400;
  --tracking-display: -0.02em;
  --radius-control: 4px;
  --radius-card: 8px;
  --radius-panel: 12px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 1280px;
  --shadow-card: 0 2px 10px rgba(20, 18, 15, 0.05);
  --shadow-float: 0 16px 40px rgba(20, 18, 15, 0.12);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 180ms;
  --dur-medium: 280ms;
  --dur-slow: 460ms;
}

[data-theme="light"] {
  color-scheme: light;
  --bg-deep: #ECE8DF;
  --bg-canvas: #F6F4EF;
  --bg-card: #FDFCF9;
  --bg-raised: #EFECE4;
  --text-primary: #171512;
  --text-secondary: #4B463F;
  --text-muted: #696258;
  --border-hairline: rgba(23, 21, 18, 0.11);
  --border-strong: #CCC4B6;
  --accent: #755720;
  --accent-hover: #5D4518;
  --accent-ink: #FFFFFF;
  --accent-soft: #F4EDE0;
  --focus-ring: #755720;
  --positive: #266847;
  --warning: #8A5616;
  --negative: #A6322B;
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
