# Tokens, Typography, Radii & Motion Rules

## 1. Spacing Scale (Strict 4px Grid)
Allowed base steps: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px`.
- Inside controls: `4–12px`
- Between sibling list items/rows: `2–8px`
- Between related group label and items: `8–12px` (always tighter than gap *above* the label, e.g., `24px` above vs `8px` below)
- Card internal padding: `20–24px` (`16px` for compact sidebars/panels)
- Between sections: `32–64px` in apps, `80–128px` on landing pages

Ban arbitrary off-grid classes like `mt-[13px]`, `p-[11px]`, `gap-[7px]` (only `1px`/`2px` hairlines and optical nudges are exempt).

## 2. Concentric Radius Math
Compute nested radii strictly:
`innerRadius = Math.max(4, outerRadius - padding)` (unless the chosen theme uses sharp `0px–2px` geometry everywhere).
- Small tags/keycaps: `4–6px`
- Inputs, buttons, rows: `6–10px` (or full pill `9999px` when theme specifies pills)
- Cards: `12–16px`
- Outer panels/modals: `14–22px`

## 3. Typography Discipline
- **Families:** Maximum 2 font families per project (Display + Body), plus an optional monospace font strictly for code, shortcuts, IDs, or numeric tables.
- **Weights:** Use `400` and `500` primarily (`600` selectively for emphasis). Avoid `800–900` weights unless the chosen theme's display voice explicitly calls for heavy slab/grotesk type.
- **Case & Tracking:** Use **sentence case** for navigation, table headers, tabs, and labels. Reserve negative tracking (`-0.02em` to `-0.03em`) for large headings (`>=32px`); keep body and small labels at `0` or `+0.01em`.
- **Numbers:** Apply `font-variant-numeric: tabular-nums` and consistent decimal precision across every metric card, price, and table column.

## 4. Icons & Charts
- **Icons:** Single SVG line set (Lucide recommended), `16px` or `18px`, `1.5` stroke weight, colored with `--text-secondary` or `--text-muted`, fixed width box + `8–10px` gap before labels.
- **Charts:** One or two series in muted ramp steps + **one** highlighted accent series. Quiet gridlines, tabular mono axis labels, never rainbow bars or glowing strokes.

## 5. Motion Curve & Durations
- **Single easing:** `cubic-bezier(0.22, 1, 0.36, 1)`
- **Tiers:** Hover/press/toggle `120–180ms` | Popovers/menus `160–220ms` | Sheet/panel entrances `300–500ms`.
- **Allowed properties:** `transform`, `opacity`, `background-color`, `border-color`, `color`, `box-shadow` (explicitly listed—never `transition: all`).
- **Banned properties:** Never transition `width`, `height`, `top`, `left`, `margin`, or `padding`.
- **Reduced motion:** Always include `@media (prefers-reduced-motion: reduce)`.
