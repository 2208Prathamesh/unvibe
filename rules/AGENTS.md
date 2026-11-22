# Unvibe — Always-On Anti-Slop Floor

> **STRICT SCOPE — UI/UX & THEMES ONLY:** This rule applies **exclusively** to visual design, layout, styling, themes, typography, motion, and frontend UX polish (HTML, CSS, Tailwind, React, Vue, Svelte, Astro, or UI templates). **Completely ignore this rule for backend, API, database, algorithm, CLI, ML, DevOps, or non-UI tasks.** Never alter business logic, API contracts, data schemas, or non-UI code while applying UI/UX or theme rules.

## 12 Non-Negotiable UI/UX & Theme Rules

1. **Honor existing systems first; otherwise choose a real theme.**
   If the project already has a `DESIGN.md`, CSS variables, Tailwind theme tokens, or an established brand palette, preserve and extend them. When starting fresh without a design system, call `unvibe-mcp` (`recommend_themes` / `get_theme`) or load the `unvibe` skill before writing UI code.

2. **Quiet chrome, one bright focal element.**
   Build from one tinted neutral ramp with three text roles (`primary`, `secondary`, `muted`) and one deliberate accent used on at most ~5% of the screen (primary CTA, active selection, or single key figure).

3. **Ban generic AI visual tropes.**
   Never default to purple/violet-to-blue gradients, gradient text, neon glows (`0 0 20px rgba(...)`), floating radial blobs, rainbow chart palettes, or decorative glassmorphism cards.

4. **Strict 4px grid & concentric radii.**
   Keep margins, paddings, gaps, and control heights on the 4px scale (`4, 8, 12, 16, 20, 24, 32, 40, 48…`). Compute nested radii as `inner = outer - padding` (minimum 4px). Never nest cards inside cards.

5. **Consistent line icons; zero UI emoji.**
   Never use emoji (`✨`, `🚀`, `🔥`, `👋`, `💡`, `📥`) as navigation icons, badges, button prefixes, or status indicators. Use one SVG line icon set (e.g., Lucide, 16–18px, stroke 1.5) colored by text role.

6. **Typography restraint & alignment.**
   Use at most 2 font families (plus optional monospace for numeric/code data). Stick to weights `400–600` for UI (only use `700+` when a selected display theme specifies it). Use sentence case for labels, nav, and table headers—never wide-tracked uppercase eyebrows. Set `font-variant-numeric: tabular-nums` on metrics, tables, and prices. Never use italics for UI emphasis.

7. **Grounded, specific UI copy.**
   Ban greeting headlines (`Welcome back, Alex! 👋`), exclamation marks, hype words (`supercharge`, `seamless`, `unlock`, `revolutionize`, `AI-powered`), unverified claims (`Trusted by 10,000+ teams`), `New ✨` / `PRO` badge spam, and fake data (`$123,456`, `Lorem ipsum`).

8. **Purposeful, compositor-only motion.**
   Never use `transition: all`. Never animate `width`, `height`, `top`, `left`, `margin`, or `padding`. Never add looping `animate-pulse`, `animate-ping`, or `animate-bounce` to non-live decoration. Animate `transform`, `opacity`, and colors with one easing curve (`cubic-bezier(0.22, 1, 0.36, 1)`) and honor `@media (prefers-reduced-motion: reduce)`.

9. **Accessibility & layout engineering floor.**
   Keep visible `:focus-visible` rings (never bare `outline: none`). Use native `<button>` and `<a>` (never `<div onClick>` navigation). Add `aria-label` to icon-only buttons. Target `>=44px` hit areas and `>=16px` `<input>` font size on mobile. Put `min-w-0` on truncating flex children and `overflow-x: clip` (never `100vw` width) on root containers. Set `color-scheme: dark` and explicit `<select>` background/text colors on dark surfaces.

10. **Verify contrast mathematically.**
    Keep body and muted text at `>=4.5:1` WCAG AA (`>=3:1` for large text `>=18px` bold / `>=24px`). Check uncertain foreground/background or button accent pairings with `unvibe-mcp` `check_contrast`.

11. **Design complete real UI states.**
    Implement realistic hover, active, focus, loading, empty, and error states with domain-appropriate numbers and recovery actions.

12. **Audit touched UI files before handoff.**
    Run `audit_slop` via `unvibe-mcp` (or `scripts/cli.mjs audit`) **only** when UI/frontend files were edited (never on backend or non-UI work), and resolve all `P0-BLOCKER` and `P1-SLOP` findings.
