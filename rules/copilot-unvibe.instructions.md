---
description: "Unvibe anti-slop craft floor and theme guardrails (UI/UX & themes only)"
applyTo: "**/*.html,**/*.css,**/*.scss,**/*.jsx,**/*.tsx,**/*.vue,**/*.svelte,**/*.astro"
---

# Unvibe — Anti-Slop Floor

> **STRICT SCOPE — UI/UX & THEMES ONLY:** This rule applies **exclusively** to visual design, layout, styling, themes, typography, motion, and frontend UX polish (HTML, CSS, Tailwind, React, Vue, Svelte, Astro, or UI templates). **Completely ignore this rule for backend, API, database, algorithm, CLI, ML, DevOps, or non-UI tasks.** Never alter business logic, API contracts, data schemas, or non-UI code while applying UI/UX or theme rules.

## 12 Non-Negotiable UI/UX & Theme Rules

1. **Honor existing systems first; otherwise choose a real theme.** Preserve existing `DESIGN.md`, CSS variables, or Tailwind tokens. When starting fresh, call `unvibe-mcp` (`recommend_themes` / `get_theme`) or read `themes/<pack>/<id>/DESIGN.md` (`external/design-md/<id>.DESIGN.md`).
2. **Quiet chrome, one bright focal element.** Build from one tinted neutral ramp with three text roles (`primary`, `secondary`, `muted`) and one deliberate accent used on `<=5%` of the viewport.
3. **Ban generic AI visual tropes.** Never default to purple/violet-to-blue gradients, gradient text, neon halo glows, floating radial blobs, rainbow chart palettes, or decorative glassmorphism.
4. **Strict 4px grid & concentric radii.** Keep margins, paddings, and gaps on multiples of 4px. Compute nested radii as `inner = outer - padding` (minimum 4px). Never nest cards inside cards.
5. **Consistent line icons; zero UI emoji.** Never use emojis (`✨`, `🚀`, `🔥`, `👋`, `💡`, `📥`) as nav icons, badges, or status pills. Standardize on one SVG line icon set (Lucide, 16–18px, stroke 1.5) colored by text role.
6. **Typography restraint & alignment.** Max 2 font families (+ optional mono), UI weights `400–600`, sentence case labels (never wide-tracked uppercase eyebrows), `tabular-nums` on figures, and never italics for UI emphasis.
7. **Grounded, specific UI copy.** Ban greeting headlines (`Welcome back, Alex! 👋`), exclamation marks, hype words (`supercharge`, `seamless`, `AI-powered`), unverified claims (`Trusted by 10,000+`), `New ✨` / `PRO` badge spam, and fake data (`$123,456`, `Lorem ipsum`).
8. **Purposeful, compositor-only motion.** Never use `transition: all` or animate layout props (`width`, `height`, `top`, `left`, `margin`, `padding`). Never add idle `animate-pulse`/`animate-ping`/`animate-bounce` to non-live decoration. Use `cubic-bezier(0.22, 1, 0.36, 1)` and `@media (prefers-reduced-motion: reduce)`.
9. **Accessibility & layout engineering floor.** Keep visible `:focus-visible` rings (never bare `outline: none`), native `<button>`/`<a>` semantics (never `<div onClick>`), `aria-label` on icon-only buttons, `>=44px` mobile hit areas, `>=16px` mobile `<input>` text, `min-w-0` on truncating flex items, `overflow-x: clip` (never `100vw`), and `color-scheme: dark` + explicit `<select>` styling on dark surfaces.
10. **Verify contrast mathematically.** Maintain `>=4.5:1` WCAG AA for body/muted text (`>=3:1` large); verify uncertain pairings via `unvibe-mcp` `check_contrast`.
11. **Design complete real UI states.** Implement hover, active, focus, loading skeleton, empty state, and inline error recovery.
12. **Audit touched UI files before handoff.** Run `audit_slop` via `unvibe-mcp` (or `node scripts/cli.mjs audit`) **only** when UI/frontend files were edited, and fix all `P0-BLOCKER` and `P1-SLOP` findings.
