# Unvibe Baseline Tokens & Geometry Scales

Reference values extracted directly from verified themes in `data/themes.json` (each dual-mode pair passes all WCAG 2.1 AA/AAA checks). Prefer running `unvibe-mcp` `generate_tokens` for any of the 24 full themes before hand-authoring custom variables.

---

## 1. Strict 4px Spacing Scale & App Dimensions

| Token | Value | Primary Use |
| :--- | :--- | :--- |
| `--space-1` | `4px` | Icon-to-label tight gap, compact tag padding |
| `--space-2` | `8px` | Sibling input/label spacing, compact list vertical gap |
| `--space-3` | `12px` | Inline button horizontal gaps, dense panel padding |
| `--space-4` | `16px` | Standard control padding, form row gap |
| `--space-6` | `24px` | Card internal padding, multi-column grid gutter |
| `--space-8` | `32px` | Section internal spacing, split panel separation |
| `--space-12` | `48px` | Major band transitions |

```css
:root {
  --shell-sidebar-w: 256px;     /* Desktop navigation rail (240–280px range) */
  --shell-topbar-h: 52px;       /* Compact header bar */
  --row-nav-h: 34px;            /* Uniform desktop sidebar item (32–36px) */
  --touch-min: 44px;            /* Minimum mobile interactive target */
  --measure-prose: 68ch;        /* Optimal reading line width (62–72ch) */
  --container-app: 1440px;      /* Workspace max width */
}
```

## 2. Concentric Radii & Motion Timing

```css
:root {
  /* Concentric rule: inner = max(4px, outer - padding) */
  --radius-control: 6px;
  --radius-card: 10px;
  --radius-panel: 14px;
  --radius-pill: 9999px;

  /* Single purposeful easing curve across transitions */
  --ease-craft: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 150ms;    /* hover, border, button press */
  --dur-medium: 200ms;  /* dropdowns, tooltips, panels */
  --dur-slow: 320ms;    /* modal/drawer entry */
}
```

## 3. Verified Starter Palettes (`data/themes.json`)

### A. `graphite-studio` (Default Dark — Technical Operations & Dashboards)

```css
:root {
  color-scheme: dark;
  --bg-deep: #0F0F10;
  --bg-canvas: #141416;
  --bg-card: #1A1A1D;
  --bg-raised: #222226;
  --text-primary: #F3F3F5;
  --text-secondary: #B4B4BC;
  --text-muted: #84848E;
  --border-hairline: #27272B;
  --border-strong: #38383F;
  --accent: #60A5FA;
  --accent-hover: #3B82F6;
  --accent-ink: #071426;
  --accent-soft: #1E2E4A;
  --focus-ring: #93C5FD;
}
```

### B. `parchment-editorial` (Default Light — Reading, Writing & Editorial)

```css
:root {
  color-scheme: light;
  --bg-deep: #EFECE5;
  --bg-canvas: #FAF8F3;
  --bg-card: #FFFFFF;
  --bg-raised: #F3F0E8;
  --text-primary: #1A1916;
  --text-secondary: #4E4B44;
  --text-muted: #706B62;
  --border-hairline: #E3DFD6;
  --border-strong: #CBC5B9;
  --accent: #AE4F2E;
  --accent-hover: #8F3E21;
  --accent-ink: #FFFFFF;
  --accent-soft: #FBECE6;
  --focus-ring: #AE4F2E;
}
```

### C. `cobalt-drafting` (Light Blueprint — Technical Specs & Spatial Tools)

```css
:root {
  color-scheme: light;
  --bg-deep: #EDF2FA;
  --bg-canvas: #F8FAFE;
  --bg-card: #FFFFFF;
  --bg-raised: #E4ECFA;
  --text-primary: #101A30;
  --text-secondary: #374764;
  --text-muted: #5A6B88;
  --border-hairline: #D4DFEF;
  --border-strong: #ADC1E0;
  --accent: #1D4ED8;
  --accent-hover: #1E40AF;
  --accent-ink: #FFFFFF;
  --accent-soft: #E0E9FF;
  --focus-ring: #1D4ED8;
}
```
