# Internationalization (i18n) & Right-to-Left (RTL) UI Rules

Building or refactoring Arabic, Persian, Urdu, or Hebrew interfaces requires logical flow discipline rather than manual string-direction hacks.

---

## 1. Document Direction & Native Typography

- Declare direction on the root element (`<html lang="ar" dir="rtl">` or `<html lang="he" dir="rtl">`) rather than scattering `dir="rtl"` inconsistently across child blocks.
- Load authentic native script families instead of letting Latin fonts fall back to generic system defaults:
  - **Arabic / Persian:** `'IBM Plex Sans Arabic'`, `'Noto Sans Arabic'`, or `'Cairo'`
  - **Hebrew:** `'Heebo'`, `'Assistant'`, or `'Noto Sans Hebrew'`
- **Never apply positive `letter-spacing` to Arabic, Persian, or Urdu text:** separating characters breaks cursive ligature joins and renders headings illegible. Reset headings cleanly with `letter-spacing: 0`.
- Keep line height generous (`1.6–1.75`) to preserve vertical breathing room for ascenders, descenders, and diacritical marks.

## 2. CSS & Tailwind Logical Properties

Replace physical left/right rules universally with logical inline properties so LTR and RTL share one clean stylesheet:

| Avoid (Physical) | Use (Logical CSS) | Tailwind Utility |
| :--- | :--- | :--- |
| `margin-left` / `margin-right` | `margin-inline-start` / `margin-inline-end` | `ms-*` / `me-*` |
| `padding-left` / `padding-right` | `padding-inline-start` / `padding-inline-end` | `ps-*` / `pe-*` |
| `left` / `right` | `inset-inline-start` / `inset-inline-end` | `start-*` / `end-*` |
| `border-left` / `border-right` | `border-inline-start` / `border-inline-end` | `border-s` / `border-e` |
| `text-align: left` / `right` | `text-align: start` / `end` | `text-start` / `text-end` |
| `rounded-l-*` / `rounded-r-*` | `border-start-start-radius`, etc. | `rounded-s-*` / `rounded-e-*` |

## 3. Directional Icon Mirroring Rules

- **Mirror horizontally (`rtl:scale-x-[-1]`):** directional chevrons, back/forward arrows, reply/undo arrows, list-indent icons, and reading progress bars.
- **Do NOT mirror:** checkmarks, plus/minus/close glyphs, clocks, play/pause media controls (time flows left-to-right), question marks inside circular badges (unless locale-specific), brand marks, or symmetric settings gears.

## 4. Bidirectional Isolation & Number Formatting

- Wrap embedded LTR identifiers inside RTL sentences (URLs, email addresses, `@handles`, version tags, telephone numbers, code snippets) in `<bdi>` or `dir="ltr"` with `unicode-bidi: isolate` so punctuation never jumps to the wrong side of a sentence.
- Keep `<input type="email">`, `<input type="url">`, `<input type="tel">`, and `<pre>` / `<code>` explicitly `dir="ltr"` with `text-align: start` (or end-aligned cleanly) so editing cursor movement remains predictable.
- Use standard `Intl.NumberFormat` and `Intl.DateTimeFormat` for locale-appropriate grouping and digits while retaining `font-variant-numeric: tabular-nums` inside aligned financial and status tables.
