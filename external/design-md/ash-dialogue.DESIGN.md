---
schema: unvibe-design-md/v1
themeId: "ash-dialogue"
name: "Ash Dialogue"
pack: "everyday-apps"
defaultMode: "dark"
scope: "UI/UX & Visual Theming Only"
colors:
  light:
    bgDeep: "#F4F4F4"
    bgCanvas: "#FFFFFF"
    bgCard: "#F9F9F9"
    bgRaised: "#EFEFEF"
    textPrimary: "#0D0D0D"
    textSecondary: "#4A4A4A"
    textMuted: "#6B6B6B"
    borderHairline: "rgba(13, 13, 13, 0.09)"
    borderStrong: "#D6D6D6"
    accent: "#0E7A5F"
    accentHover: "#0A614B"
    accentInk: "#FFFFFF"
    accentSoft: "#E7F6F1"
    focusRing: "#0E7A5F"
    positive: "#0E7A5F"
    warning: "#B45309"
    negative: "#C81E1E"
  dark:
    bgDeep: "#171717"
    bgCanvas: "#212121"
    bgCard: "#292929"
    bgRaised: "#333333"
    textPrimary: "#ECECEC"
    textSecondary: "#B4B4B4"
    textMuted: "#969696"
    borderHairline: "rgba(255, 255, 255, 0.09)"
    borderStrong: "#424242"
    accent: "#19B38B"
    accentHover: "#24C99E"
    accentInk: "#06211A"
    accentSoft: "#132E27"
    focusRing: "#19B38B"
    positive: "#2DD49F"
    warning: "#F59E0B"
    negative: "#F87171"
typography:
  display: "Inter, ui-sans-serif, system-ui, sans-serif"
  body: "Inter, ui-sans-serif, system-ui, sans-serif"
  mono: "\"JetBrains Mono\", ui-monospace, monospace"
  displayWeight: 500
  bodyWeight: 400
  trackingDisplay: "-0.015em"
radius:
  control: "10px"
  card: "16px"
  panel: "20px"
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
  slowMs: 300
---

# DESIGN.md — Ash Dialogue

> **Drop-In Spec (UI/UX & Visual Theming Only):** Place this file at your project root as `DESIGN.md`, or paste it into any external AI coding agent or web chatbot before requesting interface code. This spec governs **UI/UX, visual styling, layout, typography, motion, and accessibility ONLY**—never alter backend logic, API contracts, data schemas, or non-UI code when applying it.

- **Theme ID:** `ash-dialogue`
- **Pack:** `everyday-apps`
- **Default Mode:** `dark`
- **Mood:** conversational, matte, focused, calm
- **Recommended Surface Modes:** operate, read
- **Best For:** AI assistants, chat interfaces, support consoles, prompt workbenches, copilots

## 1. Visual Theme & Atmosphere

**Warm matte charcoal conversational workspace built for long-form prompts and side-by-side reasoning.**

Designed around distraction-free dialogue streams, code blocks, and collapsible history drawers. Soft matte charcoal layers eliminate pure-black halation while keeping contrast crisp and readable, anchored by one restrained emerald utility accent.

## 2. Color System & Verified Contrast

### Light Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#F4F4F4` | Sidebar / recessed shell |
| `--bg-canvas` | `#FFFFFF` | Main viewport ground |
| `--bg-card` | `#F9F9F9` | Elevated cards and panels |
| `--bg-raised` | `#EFEFEF` | Active rows, inputs, secondary pills |
| `--text-primary` | `#0D0D0D` | Headings and primary copy |
| `--text-secondary` | `#4A4A4A` | Supporting descriptions |
| `--text-muted` | `#6B6B6B` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(13, 13, 13, 0.09)` | Subtle structural dividers |
| `--border-strong` | `#D6D6D6` | Interactive input and hover borders |
| `--accent` | `#0E7A5F` | Primary CTA and focus highlight |
| `--accent-hover` | `#0A614B` | Interactive hover accent |
| `--accent-ink` | `#FFFFFF` | Text inside filled accent controls |
| `--accent-soft` | `#E7F6F1` | Subtle selection wash |
| `--focus-ring` | `#0E7A5F` | Keyboard focus indicator |
| `--positive` | `#0E7A5F` | Success / growth delta |
| `--warning` | `#B45309` | Caution state |
| `--negative` | `#C81E1E` | Error / destructive state |

### Dark Mode Palette
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--bg-deep` | `#171717` | Sidebar / recessed shell |
| `--bg-canvas` | `#212121` | Main viewport ground |
| `--bg-card` | `#292929` | Elevated cards and panels |
| `--bg-raised` | `#333333` | Active rows, inputs, secondary pills |
| `--text-primary` | `#ECECEC` | Headings and primary copy |
| `--text-secondary` | `#B4B4B4` | Supporting descriptions |
| `--text-muted` | `#969696` | Captions, axis labels, timestamps |
| `--border-hairline` | `rgba(255, 255, 255, 0.09)` | Subtle structural dividers |
| `--border-strong` | `#424242` | Interactive input and hover borders |
| `--accent` | `#19B38B` | Primary CTA and focus highlight |
| `--accent-hover` | `#24C99E` | Interactive hover accent |
| `--accent-ink` | `#06211A` | Text inside filled accent controls |
| `--accent-soft` | `#132E27` | Subtle selection wash |
| `--focus-ring` | `#19B38B` | Keyboard focus indicator |
| `--positive` | `#2DD49F` | Success / growth delta |
| `--warning` | `#F59E0B` | Caution state |
| `--negative` | `#F87171` | Error / destructive state |

### Verified Contrast Matrix (WCAG 2.1 + APCA)

| Mode | Pair | Hex Values | Measured Contrast |
| :--- | :--- | :--- | :--- |
| Light | Primary Text / Canvas | `#0D0D0D` on `#FFFFFF` | **19.44:1** (Lc 105.7) |
| Light | Secondary Text / Canvas | `#4A4A4A` on `#FFFFFF` | **8.86:1** (Lc 90.3) |
| Light | Muted Text / Canvas | `#6B6B6B` on `#FFFFFF` | **5.33:1** (Lc 76.5) |
| Light | Accent Ink / Accent Fill | `#FFFFFF` on `#0E7A5F` | **5.29:1** (Lc -81.2) |
| Dark | Primary Text / Canvas | `#ECECEC` on `#212121` | **13.63:1** (Lc -93.2) |
| Dark | Secondary Text / Canvas | `#B4B4B4` on `#212121` | **7.77:1** (Lc -59.5) |
| Dark | Muted Text / Canvas | `#969696` on `#212121` | **5.44:1** (Lc -43.4) |
| Dark | Accent Ink / Accent Fill | `#06211A` on `#19B38B` | **6.34:1** (Lc 50.3) |

## 3. Typography & Scale

- **Display:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `500`, Tracking `-0.015em`)
- **Body:** Inter, ui-sans-serif, system-ui, sans-serif (Weight `400`)
- **Monospace:** "JetBrains Mono", ui-monospace, monospace
- **Webfont Stylesheet Tag:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
```
- **Notes:** Cap reading stream around 70ch; keep user message bubbles in subtle bgRaised and assistant turns borderless on bgCanvas.

| Role | Size | Line Height | Weight | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Small caption / count | `12px` | `16px` | `400` | Mono allowed; sentence case |
| Secondary copy | `13–14px` | `20px` | `400` | Use `--text-secondary` |
| Body / nav item | `14–15px` | `22px` | `400–500` | Max `72ch` reading measure |
| Card figure / KPI | `28–32px` | `1.1` | `500–600` | Enforce `tabular-nums` |
| Section title (`h2`) | `28–36px` | `1.15` | `500` | Display stack |
| Hero display (`h1`) | `48–56px` | `1.06` | `500` | Tracking `-0.015em` |

## 4. Spacing, Geometry, Elevation & Motion

- **4px Grid:** Use strictly multiples of 4 (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64…`). Keep list row heights uniform (`32–36px` compact nav, `44px+` mobile touch targets).
- **Concentric Radii:** Control `10px`, Card `16px`, Panel `20px`, Pill `9999px` (`inner = outer - padding`, min `4px` unless sharp `0–2px` theme).
- **Container Max Width:** `960px` | **Density:** `comfortable`
- **Light Elevation:** Card `0 1px 3px rgba(0, 0, 0, 0.06)` | Float `0 10px 28px rgba(0, 0, 0, 0.09)`
- **Dark Elevation:** Matte ash tonal separation (#171717 sidebar -> #212121 canvas -> #2F2F2F composer) with subtle 8% hairlines.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` (`140ms` fast / `200ms` medium / `300ms` slow) — Instant composer feedback and gentle drawer slide.

## 5. Component Specifications & Interactive State Matrix

- **Primary Button:** High-contrast pill send button (inverted ink on canvas) or solid emerald CTA.
- **Secondary Button:** Subtle ghost or raised pill with 1px hairline.
- **Card:** Soft 16px rounded composer dock and flat 12px code containers with header strip.
- **Input:** Multi-line auto-growing composer in bgRaised with 20px radius and bottom toolbar.
- **Nav Item:** Thread list row 36px tall, truncated cleanly with min-w-0.
- **Badge / Status:** Compact model switcher pill in bgRaised; zero neon glows.

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
| **Wide** | `> 1440px` | Center container at `960px`; grow outer gutters rather than stretching text lines or multi-column grids endlessly |

## 7. Voice & Microcopy

Helpful, concise, clear tool labels; zero hype phrasing.

## 8. Theme Do's & Don'ts

### Do
- Keep assistant prose unboxed on the main canvas for easy reading.
- Constrain message stream width to 46-48rem.
- Provide crisp keyboard shortcut hints and copy controls on code blocks.
- Separate sidebar thread list cleanly with bgDeep.

### Don't
- Never box every chat message in heavy drop-shadowed cards.
- Never use sparkle emojis in model selector labels.
- Never wash the background in purple/cyan ambient blurs.
- Never leave raw text wider than 80 characters per line.

## 9. Universal Anti-Slop Floor (UI/UX Only)

1. **No AI gradient tropes:** Never add purple/violet-to-blue gradients, gradient text fills, neon halo glows, blurred floating background blobs, or nested cards inside cards.
2. **Zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`) in navigation links, pills, or headings; use one consistent 16–18px SVG line icon set.
3. **Sentence case & real numbers:** Never write wide-tracked uppercase eyebrows (`NAVIGATION`), exclamation marks, greeting headers (`Welcome back!`), hype words (`supercharge`, `seamless`, `AI-powered`), or dummy `$123,456` data; enforce `tabular-nums`.
4. **Compositor motion only:** Never use `transition: all` or animate `width`/`height`/`top`/`left`; honor `@media (prefers-reduced-motion: reduce)`.
5. **Layout & browser chrome:** Keep `overflow-x: clip` (never `100vw`), `min-w-0` on truncating flex items, `color-scheme` matching active mode, and explicit `<select>` colors.

## 10. Ready-to-Paste CSS Variables (`tokens.css`)

```css
/* Theme: Ash Dialogue (ash-dialogue) | Pack: everyday-apps | Default: dark */
/* Webfont: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"> */

:root {
  color-scheme: dark;
  --bg-deep: #171717;
  --bg-canvas: #212121;
  --bg-card: #292929;
  --bg-raised: #333333;
  --text-primary: #ECECEC;
  --text-secondary: #B4B4B4;
  --text-muted: #969696;
  --border-hairline: rgba(255, 255, 255, 0.09);
  --border-strong: #424242;
  --accent: #19B38B;
  --accent-hover: #24C99E;
  --accent-ink: #06211A;
  --accent-soft: #132E27;
  --focus-ring: #19B38B;
  --positive: #2DD49F;
  --warning: #F59E0B;
  --negative: #F87171;
  --font-display: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-body: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-weight-display: 500;
  --font-weight-body: 400;
  --tracking-display: -0.015em;
  --radius-control: 10px;
  --radius-card: 16px;
  --radius-panel: 20px;
  --radius-pill: 9999px;
  --border-width: 1px;
  --container-max: 960px;
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.06);
  --shadow-float: 0 10px 28px rgba(0, 0, 0, 0.09);
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 140ms;
  --dur-medium: 200ms;
  --dur-slow: 300ms;
}

[data-theme="light"] {
  color-scheme: light;
  --bg-deep: #F4F4F4;
  --bg-canvas: #FFFFFF;
  --bg-card: #F9F9F9;
  --bg-raised: #EFEFEF;
  --text-primary: #0D0D0D;
  --text-secondary: #4A4A4A;
  --text-muted: #6B6B6B;
  --border-hairline: rgba(13, 13, 13, 0.09);
  --border-strong: #D6D6D6;
  --accent: #0E7A5F;
  --accent-hover: #0A614B;
  --accent-ink: #FFFFFF;
  --accent-soft: #E7F6F1;
  --focus-ring: #0E7A5F;
  --positive: #0E7A5F;
  --warning: #B45309;
  --negative: #C81E1E;
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
