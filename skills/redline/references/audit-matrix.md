# Redline Diagnostic Audit Matrix

Quick reference linking common AI-generated UI failure patterns (aligned with Unvibe's 22 static linter checks) to exact UI fixes. Do not alter application data flow or event logic when resolving these findings.

## 1. Color, Gradients & Elevation

| Failure Tell | Severity | Engineering Fix |
| :--- | :--- | :--- |
| `bg-gradient-to-*` purple/violet-to-blue or pink-to-cyan surfaces | `P1-SLOP` | Replace with solid tinted neutrals (`--bg-canvas`, `--bg-card`) and a single accent (`--accent`) on `<=5%` of the viewport |
| Gradient-clipped headline text (`bg-clip-text text-transparent`) | `P1-SLOP` | Render headings in solid high-contrast `--text-primary` (`>=7.0:1` on surface) |
| Colored neon glow shadows (`0 0 24px rgba(...)`) | `P1-SLOP` | Replace with `1px solid var(--border-hairline)` in dark mode or quiet neutral shadows in light mode |
| Floating radial blur orbs behind hero copy | `P1-SLOP` | Delete blurred background blobs; establish focal weight through typography and real UI previews |
| Unverified grey muted text on dark/light backgrounds | `P0-BLOCKER` | Measure via `unvibe-mcp` `check_contrast` and enforce `>=4.5:1` AA on secondary/muted copy and button text |

## 2. Spacing & Geometry

| Failure Tell | Severity | Engineering Fix |
| :--- | :--- | :--- |
| Arbitrary pixel offsets (`p-[13px]`, `mt-[19px]`, `gap: 11px`) | `P1-SLOP` | Snap every margin, padding, and gap onto strict `4px` multiples (`4, 8, 12, 16, 20, 24, 32, 48`) |
| Mismatched nested corner radii (`card` 16px containing `button` 16px) | `P2-POLISH` | Apply concentric math: `innerRadius = max(4px, outerRadius - padding)` (or `0–2px` on crisp grid themes) |
| Nested cards stacked three levels deep (`shadow` inside `shadow`) | `P1-SLOP` | Flatten hierarchy using `--bg-deep` -> `--bg-canvas` -> `--bg-card` surface steps and `1px` borders |
| Uneven sibling row heights in nav rails or tables | `P2-POLISH` | Lock compact sidebar rows to `32–36px` height and mobile touch rows to `>=44px` |

## 3. Typography & Numeric Alignment

| Failure Tell | Severity | Engineering Fix |
| :--- | :--- | :--- |
| Heavy `font-black` (`800–900`) UI buttons or metric labels | `P1-SLOP` | Constrain UI weights to `400–600`; reserve `>=700` strictly for themes explicitly typed for display weight |
| Wide-tracked uppercase eyebrow labels (`tracking-widest uppercase`) | `P1-SLOP` | Rewrite labels, section titles, and table headers in sentence case with normal tracking |
| Shifting columns on counters, prices, or telemetry tables | `P2-POLISH` | Add `font-variant-numeric: tabular-nums` (`tabular-nums`) to every numeric metric and table cell |
| Italic styling used as general UI emphasis | `P2-POLISH` | Remove `italic` on labels/buttons/callouts; communicate priority through color contrast or weight `500` |
| Prose lines spanning 110+ characters across wide monitors | `P2-POLISH` | Cap reading paragraphs at `62ch–72ch` |

## 4. Iconography, Copy & Data Realism

| Failure Tell | Severity | Engineering Fix |
| :--- | :--- | :--- |
| UI emojis (`✨`, `🚀`, `🔥`, `👋`, `💡`) in nav items, pills, or headings | `P1-SLOP` | Replace with one consistent `16–18px` SVG line icon family (`stroke-width: 1.5`) aligned inside a fixed `16–20px` track |
| Greeting headers (`Welcome back, Alex! 👋`) or hype copy (`Supercharge!!`, `AI-powered`) | `P1-SLOP` | Replace with concrete workspace titles (`October telemetry`, `Release queue`), remove `!`, and name actual capabilities |
| Unverified vanity metrics (`Trusted by 10,000+`, `$123,456`, `Lorem ipsum`) | `P1-SLOP` | Populate realistic domain values and always pair percentage deltas with a timeframe (`+12% vs last month`) |
| `New ✨` or `PRO` pill spam next to normal menu items | `P1-SLOP` | Delete decorative badges; reserve pills strictly for genuine status counts or keyboard shortcuts (`<kbd>`) |

## 5. Layout, Motion & Accessibility

| Failure Tell | Severity | Engineering Fix |
| :--- | :--- | :--- |
| `width: 100vw` causing horizontal scrollbar on Windows | `P0-BLOCKER` | Replace `100vw` with `100%` and set `overflow-x: clip` on `html, body` (never `overflow-x: hidden` when sticky headers exist) |
| Flex children truncating without `min-w-0` | `P1-SLOP` | Add `min-w-0` on flexible text containers alongside `truncate` / ellipsis |
| `transition: all` or animating `width`, `height`, `top`, `left` | `P1-SLOP` | Transition only compositor/paint-cheap properties (`transform`, `opacity`, `color`, `background-color`, `border-color`) |
| Looping `animate-pulse` / `animate-bounce` on static badges or cards | `P1-SLOP` | Remove idle loops; reserve pulse strictly for genuine active skeleton loaders or live status telemetry dots |
| Missing `:focus-visible` or bare `outline: none` | `P0-BLOCKER` | Style clear `2px solid var(--focus-ring); outline-offset: 2px` on `:focus-visible` |
| Clickable `<div onClick>` navigation or controls | `P0-BLOCKER` | Use native `<button type="button">`, `<a href>`, and `<label for="...">` elements |
| `<input>` below `16px` on mobile or `user-scalable=no` viewport meta | `P0-BLOCKER` | Set `text-base md:text-sm` (`>=16px` mobile) and remove zoom-locking viewport attributes |
| Dark-mode `<select>` menus flashing white OS popups | `P1-SLOP` | Set `color-scheme: dark` on `:root` / `[data-theme="dark"]` plus explicit `<select>` `background-color` and `color` |
