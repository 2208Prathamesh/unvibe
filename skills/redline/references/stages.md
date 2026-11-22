# The 7-Stage Redline Workflow

Execute these seven structural stages **in order** when refactoring existing frontend code. Work bottom-up from structural layout to fine interaction details so earlier layout repairs never invalidate later visual polish. Keep every data prop, handler, validation rule, and API integration unchanged.

---

## Stage 1 — Layout Architecture & Viewport Proportions
- Fix outer viewport framing first: desktop application shells use a `240–280px` left sidebar paired with a fluid workspace capped cleanly around `1440–1600px`.
- Landing heroes must communicate value and show the primary action or product preview within a `1280x800` fold without forcing vertical scroll past empty padding.
- Remove `width: 100vw` across containers (which overflows when scrollbars appear) and apply `overflow-x: clip` on root wrappers so `position: sticky` continues working cleanly.
- Add `min-w-0` to flex/grid columns holding long file names, URLs, or truncated titles.

## Stage 2 — 4px Spacing Grid & Concentric Geometry
- Normalize every padding, margin, gap, and row height onto strict `4px` increments (`4, 8, 12, 16, 20, 24, 32, 48, 64`). Replace arbitrary values like `13px`, `18px`, or `22px`.
- Apply proximity discipline: inner spacing inside a related group stays tighter than outer separation between distinct groups (e.g., `8px` between label and field, `20px` between form sections).
- Compute nested border radii using `innerRadius = max(4px, outerRadius - padding)` unless working inside an intentionally sharp `0–2px` architectural grid theme.
- Unwrap nested bordered cards inside cards; flatten inner subsections using subtle background contrast steps (`--bg-raised`) or hairline dividers.

## Stage 3 — Tinted Neutral Ramps, Single Accent & Mathematical Contrast
- Remove multi-hue gradient panels, gradient headline text, radial glow halos, and decorative blurred background shapes.
- Anchor every surface on one cohesive tinted neutral ramp (`--bg-deep`, `--bg-canvas`, `--bg-card`, `--bg-raised`) paired with three clear text roles (`--text-primary`, `--text-secondary`, `--text-muted`).
- Limit `--accent` to primary buttons, active selections, key focus rings, or one highlighted series—roughly `<=5%` of the visible viewport.
- Run `check_contrast` via `unvibe-mcp` on modified color pairings (`>=7.0:1` primary copy, `>=4.5:1` secondary/muted copy and filled button labels).

## Stage 4 — Typography Hierarchy & Numeric Precision
- Restrict each interface to at most two font families (plus monospace strictly for code, hashes, timestamps, and numeric tables).
- Keep UI typography weights in `400–600` (reserve heavy `>=700` display weights only where an intentional editorial/vintage display theme specifies them).
- Convert tracked uppercase eyebrow tags (`TRACKED UPPERCASE`) and table headers into natural sentence case with `62–72ch` max measure on longform reading prose.
- Apply `font-variant-numeric: tabular-nums` to all KPIs, prices, percentages, and data columns; strip decorative italics from UI controls.

## Stage 5 — Consistent Line Iconography & Media Framing
- Purge all UI emojis (`✨`, `🚀`, `🔥`, `👋`, `💡`, `⚡`) from navigation items, status badges, buttons, and section headers.
- Standardize on one geometric SVG line icon family (`16–18px`, uniform `stroke-width: 1.5`) inheriting color from surrounding text roles inside aligned fixed-width columns.
- Replace abstract geometric spheres, isometric cubes, and generic illustrations with authentic coded interface previews, real data tables, or cleanly masked domain photography (see [media-and-surfaces.md](./media-and-surfaces.md)).

## Stage 6 — Grounded Microcopy & Complete UI States
- Remove greeting headlines, exclamation marks (`!!`), promotional filler (*seamless, supercharge, revolutionize, AI-powered*), unverified volume claims, and placeholder `$123,456` / `Lorem ipsum` strings.
- Attach time baselines to every metric delta (`+12% vs last month`, `42 ms p95`) so numbers carry real meaning.
- Verify every interactive component ships complete states matching the chosen surface theme:
  - Hover and pressed micro-feedback
  - Shape-matched loading skeletons (never jumping container heights)
  - Plain empty state explaining what populates the view + one primary action
  - Inline adjacent error messaging with recovery path

## Stage 7 — Compositor Motion, Browser Surfaces & Accessibility
- Delete `transition: all` and transition only explicit cheap properties (`color`, `background-color`, `border-color`, `opacity`, `transform`). Never animate layout geometry (`width`, `height`, `top`, `left`, `margin`, `padding`).
- Remove idle `animate-pulse`, `animate-ping`, or `animate-bounce` loops on static cards or CTAs; standardize on `cubic-bezier(0.22, 1, 0.36, 1)` and wrap animations with `@media (prefers-reduced-motion: reduce)`.
- Replace `<div onClick>` navigation/triggers with semantic `<button type="button">` and `<a href>`; give every icon-only button a descriptive `aria-label`.
- Restore visible `:focus-visible` outlines (`2px solid var(--focus-ring)`), ensure mobile `<input>` sizing `>=16px`, enforce `>=44px` mobile hit areas, remove `user-scalable=no`, and style browser chrome (`color-scheme`, `<select>`, `::selection`).
