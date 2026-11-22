# Redline Reference Suite

Structured documentation for auditing and refactoring existing user interfaces under **Unvibe** (`MIT`). Every guideline applies **strictly to UI/UX, styling, layout, typography, motion, and accessibility**—preserve all business logic, state wiring, and API contracts intact.

## Recommended Reading Order

| Order | File | Purpose |
| :--- | :--- | :--- |
| 1 | [audit-matrix.md](./audit-matrix.md) | Fast lookup table pairing visual/a11y failure tells with concrete CSS and markup fixes |
| 2 | [stages.md](./stages.md) | Step-by-step **7-Stage Redline Workflow** executed in strict structural order |
| 3 | [baseline-tokens.md](./baseline-tokens.md) | Verified Unvibe baseline scales, dual-mode ramps, concentric radius math, and motion tokens |
| 4 | [media-and-surfaces.md](./media-and-surfaces.md) | Product screenshot framing, CLS-safe image ratios, subtle masks, and GPU surface limits |
| 5 | [i18n-rtl.md](./i18n-rtl.md) | RTL layout mirroring, CSS logical properties, `<bdi>` isolation, and cursive script typography |

## Pairing With `unvibe-mcp`

- **Initial Diagnosis:** Run `audit_slop` against the directory or component file before editing.
- **Stage Tracking:** Call `get_checklist` with `{ "workflow": "redline" }`.
- **Contrast Proof:** Verify every custom text/surface/accent hex pair using `check_contrast` (`>=4.5:1` WCAG AA minimum).
- **Theme Adoption:** If no brand system exists yet, call `recommend_themes` and `generate_tokens` to emit a cohesive `:root` + `[data-theme]` token sheet.
