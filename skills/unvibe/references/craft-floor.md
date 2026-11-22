# Unvibe Floor & Engineering Standards

Synthesized engineering and design reflexes that bind every interface regardless of theme pack.

## Hard Visual Bans
- **No multi-hue slop gradients:** Never use purple/violet-to-blue or pink-to-cyan gradients on cards, buttons, hero washes, or active nav items.
- **No gradient text:** Keep display heads and KPI figures in solid primary ink.
- **No neon glows or floating blobs:** Depth comes from surface tonal steps, 1px hairline borders, and soft neutral offset shadows—never `0 0 24px rgba(...)` halos or blurred decorative orbs.
- **No nested cards:** Never place bordered/shadowed cards inside other bordered/shadowed cards. Use flat hairlines, spacing, or stepped surface fills instead.
- **No emoji icons:** Replace `✨`, `🚀`, `🔥`, `👋`, `💡`, `📥` in UI chrome with one consistent SVG line icon set (e.g., Lucide, 16–18px, stroke 1.5) colored by text role.
- **No tracked-uppercase eyebrows:** Never stack `NEW ✨` or `TRACKED UPPERCASE` kickers above headlines. Let headings carry their own weight in sentence case.

## Browser Surface Theming
Unskilled models leave native browser chrome unstyled, which breaks visual cohesion immediately:
- **Color scheme:** Declare `color-scheme: dark` (or `light`) on `:root` / `[data-theme="dark"]` so scrollbars, date pickers, and form widgets match the canvas.
- **Native `<select>` Windows fix:** Explicitly set `background-color` and `color` on `<select>` and `<option>` elements so Windows dark mode does not render white text on a white popup menu.
- **Selection & caret:** Theme `::selection` with `--accent-soft` and `--text-primary` (plus `caret-color: var(--accent)`).
- **Focus rings:** Keep visible `:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }`. Never write bare `outline: none` without a clear replacement.
- **Root overflow:** Always set `overflow-x: clip` (never `overflow-x: hidden`, which breaks `position: sticky`, and never `width: 100vw`, which causes horizontal scrollbars).

## Accessibility & Input Resilience
- **Semantic actions:** Use native `<button type="button">` for actions and `<a href>` for navigation. Never attach `onClick` to a bare `<div>` or `<span>`.
- **Hit targets:** Desktop controls `>=24px` (32–36px nav, 44–48px hero); mobile touch targets `>=44x44px`.
- **Mobile iOS zoom guard:** Set `<input>` / `<textarea>` / `<select>` font sizes to `>=16px` on mobile viewports (`text-base md:text-sm`). Never disable pinch-zoom (`user-scalable=no` or `maximum-scale=1`).
- **Accessible names:** Every icon-only button requires a clear `aria-label`; decorative SVGs require `aria-hidden="true"`.
- **Flex truncation:** Add `min-w-0` on flex children holding `truncate` or `line-clamp-*` text so long user strings never blow out cards or sidebars.
- **States:** Design loading skeletons matching final layout geometry, crisp empty states with a single next step, and inline validation errors that focus the first invalid field on submit.

## Contrast Floors
- Body text, input values, placeholders, and muted captions: **`>=4.5:1` WCAG AA**.
- Large display text (`>=24px` regular or `>=18.66px` bold): **`>=3.0:1`**.
- Interactive boundaries and focus rings: **`>=3.0:1`** against adjacent surface.
- Verify custom combinations using `unvibe-mcp` `check_contrast`.
