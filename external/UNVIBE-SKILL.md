---
name: unvibe-external
description: >-
  Self-contained Unvibe skill for external AI coding agents and web chatbots. Strictly for
  UI/UX, visual design, layout, typography, motion, accessibility, and theming ONLY — never for
  backend, API, database, or non-UI code.
license: MIT
---

# Unvibe — Self-Contained External Skill (UI/UX & Themes Only)

> **STRICT SCOPE — UI/UX & THEMES ONLY:** Use this skill **exclusively** for interface design, visual layout, CSS/Tailwind styling, color tokens, typography, motion, accessibility, and frontend UX states. **Never modify backend code, API contracts, database schemas, or non-UI business logic, and completely ignore these rules on non-UI tasks.**

Use this single file on its own inside any external AI coding agent, custom instruction slot, or web chatbot—no MCP server required. Pair it with any standalone theme file from `external/design-md/<theme-id>.DESIGN.md`.

---

## 1. The 12-Rule Anti-Slop Craft Floor

1. **Preserve existing brand systems first:** If the project already has a `DESIGN.md`, CSS variables, or Tailwind theme tokens, extend them rather than replacing real brand identity. Otherwise pick one cohesive theme before writing UI code.
2. **Quiet chrome, one bright focal element:** Build from one tinted neutral ramp (`--bg-deep`, `--bg-canvas`, `--bg-card`, `--bg-raised`), 3 text roles (`primary`, `secondary`, `muted`), and **one** deliberate `--accent` used on `<=5%` of the viewport.
3. **Zero generic AI visual tropes:** Ban purple/violet-to-blue gradients, pink-to-cyan gradients, gradient text fills, neon halo glows (`0 0 20px rgba(...)`), floating blurred blobs, rainbow chart palettes, decorative glassmorphism, and nested cards inside cards.
4. **Strict 4px spacing grid & concentric radii:** Keep padding, margins, gaps, and control heights on multiples of `4px` (`4, 8, 12, 16, 20, 24, 32, 48…`). Compute nested radii as `inner = outer - padding` (minimum `4px`, unless using a sharp `0–2px` theme).
5. **Consistent SVG line icons; zero UI emoji:** Never place emojis (`✨`, `🚀`, `🔥`, `👋`, `💡`, `📥`) inside nav menus, labels, pills, or headings. Use one consistent `16–18px` SVG line icon set (`stroke-width: 1.5`) colored by text role and aligned in a fixed-width column.
6. **Typography restraint & numeric alignment:** Max 2 font families (+ optional mono for numeric columns/code). Keep UI weights `400–600`, use **sentence case** everywhere (never wide-tracked uppercase eyebrows), apply `font-variant-numeric: tabular-nums` to KPIs/prices/tables, and never use italics for UI emphasis.
7. **Grounded, specific UI copy:** Ban greeting headlines (`Welcome back, Alex! 👋`), exclamation marks (`!!`), hype words (`supercharge`, `seamless`, `unlock`, `revolutionize`, `AI-powered`), unverified claims (`Trusted by 10,000+`), `New ✨` / `PRO` badge spam, and dummy `$123,456` / `Lorem ipsum` data.
8. **Compositor-only motion:** Never write `transition: all` or animate `width`, `height`, `top`, `left`, `margin`, or `padding`. Never add idle `animate-pulse`, `animate-ping`, or `animate-bounce` to static decoration. Use `cubic-bezier(0.22, 1, 0.36, 1)` (`120–180ms` hover, `160–220ms` menus, `300–450ms` entrances) and honor `@media (prefers-reduced-motion: reduce)`.
9. **Accessibility & browser-surface floor:** Keep visible `:focus-visible` rings (never bare `outline: none`), native `<button>`/`<a>` semantics (never `<div onClick>`), `aria-label` on icon-only buttons, `>=44x44px` touch targets, `>=16px` mobile `<input>` text, `min-w-0` on truncating flex children, `overflow-x: clip` (never `100vw`), `color-scheme: dark` + explicit `<select>` background/text colors on dark themes, and styled `::selection`.
10. **Mathematical contrast:** Keep body, placeholder, and muted text at `>=4.5:1` WCAG AA (`>=3.0:1` large display text `>=24px` or `>=18.66px` bold).
11. **Complete real UI states:** Implement hover, active/pressed, focus-visible, disabled, shape-matched loading skeletons, calm empty states with a single next action, and inline error recovery.
12. **Template-swap sanity check:** Before handing back UI code, verify that swapping the product name for another product would *not* leave the interface looking generic.

---

## 2. Design Direction & Surface Modes (Before Coding)

Write 5 concise lines before generating new UI:
- **Product:** What it does and for whom in one plain sentence.
- **Surface Mode:**
  - `Operate` (apps/dashboards): `240–280px` sidebar + fluid `1440–1600px` main container, `32–36px` nav rows, compact stat cards (number + label + baseline delta—no decorative sparklines), 1 primary wide chart + narrow list.
  - `Read` (docs/articles): `62–72ch` column measure, `1.55–1.65` line height, clean typographic hierarchy.
  - `Persuade` (landing pages): Hero visible at `1280x800` without scrolling, asymmetric split or bottom-rising product preview, max 1 primary + 1 quiet secondary CTA, varied section rhythm, task-authentic ending.
  - `Social` (feeds/communities): Monochrome chrome letting user imagery carry color, explicit aspect ratios, `44px` touch controls.
  - `Editorial` (publications/portfolios): Classical display contrast, ruled columns, generous negative space.
- **Character:** 2–3 concrete adjectives (never vague *clean/sleek/modern/premium* alone).
- **Surface World:** Physical stock, contrast level, and lighting.
- **Bright Moment & Signature Detail:** One rich focal moment + one consistent domain signature.

---

## 3. Quick Theme Selector (24 Dual-Mode Themes Across 6 Packs)

Pick the best match below (or paste the corresponding file from `external/design-md/<theme-id>.DESIGN.md`). Every theme defines complete **Light** and **Dark** WCAG AA contrast-verified palettes:

| Theme ID | Pack | Default | Accent (Light / Dark) | Best For |
| :--- | :--- | :--- | :--- | :--- |
| `graphite-studio` | Everyday Apps | Dark | `#1D4ED8` / `#60A5FA` | SaaS dashboards, analytics, admin portals |
| `ash-dialogue` | Everyday Apps | Dark | `#0E7A5F` / `#19B38B` | Conversational workspaces, copilots, prompt shells |
| `parchment-editorial` | Everyday Apps | Light | `#AE4F2E` / `#E08463` | Writing studios, intelligent readers, journals |
| `aperture-feed` | Everyday Apps | Light | `#006EC7` / `#4DAEFF` | Photo streams, creator galleries, media feeds |
| `civic-network` | Everyday Apps | Light | `#0A66C2` / `#70B5F9` | Professional networks, job boards, B2B directories |
| `tonal-workspace` | Everyday Apps | Light | `#0B57D0` / `#A8C7FA` | Mail clients, cloud drives, calendars, doc suites |
| `ledger-trust` | Professional | Light | `#5145E5` / `#8C84FF` | Fintech, billing, checkout, enterprise SaaS |
| `canvas-docs` | Professional | Light | `#1B6EC2` / `#6CB4EE` | Wikis, docs, knowledge bases, tables |
| `command-precision` | Professional | Dark | `#4752C4` / `#7D88F0` | Issue trackers, devtools, engineering workbenches |
| `swiss-grid` | Professional | Light | `#C82323` / `#FF6B6B` | Architectural grids, data portals, enterprise systems |
| `monochrome-edge` | Modern | Dark | `#0A0A0A` / `#EDEDED` | Cloud platforms, CLI dashboards, API docs |
| `warm-bazaar` | Modern | Light | `#D4143D` / `#FF6B86` | Marketplaces, travel booking, e-commerce |
| `pinboard-gallery` | Modern | Light | `#C4001D` / `#FF5C6C` | Visual discovery, moodboards, asset libraries |
| `nordic-air` | Modern | Light | `#235A42` / `#63C79B` | Climate tech, wellness, calm consumer apps |
| `obsidian-atelier` | Premium | Dark | `#755720` / `#CCA85E` | Quiet luxury, flagship launches, bespoke studios |
| `alabaster-maison` | Premium | Light | `#262321` / `#E6DFD5` | Architectural galleries, fashion houses, portfolios |
| `cupertino-glass` | Premium | Light | `#0062C4` / `#52A8FF` | Hardware showcases, native-feel desktop/audio apps |
| `veridian-private` | Premium | Light | `#184A3B` / `#5AC29B` | Wealth advisory, legal practices, private institutions |
| `broadsheet-press` | Vintage | Light | `#992626` / `#E87461` | Broadsheets, newsletters, longform publications |
| `midcentury-studio` | Vintage | Light | `#B84014` / `#F07C4A` | 1960s workshop posters, hardware studios, schools |
| `archival-vellum` | Vintage | Light | `#253F8A` / `#88A6F2` | Bookshops, coffee roasteries, artisan heritage goods |
| `amber-instrument` | Vintage | Dark | `#944E0E` / `#E59235` | Analog synthesizers, audio tools, field instruments |
| `phosphor-shell` | Cool | Dark | `#0E6B4F` / `#3BD69A` | Terminal tools, CI/CD monitors, SDK landing pages |
| `cobalt-drafting` | Cool | Light | `#1D4ED8` / `#6EA8FE` | Blueprint/CAD tools, spatial maps, technical specs |

---

## 4. The 7-Stage Redline Cleanup Sequence (UI/UX Only)

When auditing or refactoring an existing UI, keep all real application features, event handlers, and API calls untouched, then apply these seven structural stages in order:

1. **Layout & Viewport Proportions:** Anchor desktop app shells on a `240–280px` left rail plus fluid main workspace (`<=1440px`), frame landing heroes cleanly inside a `1280x800` fold, replace `width: 100vw` with `100%` + `overflow-x: clip`, and add `min-w-0` on truncating flex columns.
2. **4px Grid & Concentric Geometry:** Snap margins, padding, gaps, and control heights onto multiples of `4px`; equalize sibling nav rows (`32–36px` desktop, `>=44px` mobile); match nested radii (`inner = max(4px, outer - padding)`) and unwrap nested card-in-card boxes.
3. **Neutral Ramps & Contrast Verification:** Strip purple/blue gradients, gradient text, neon glows, and background blobs; unify on one tinted neutral surface ramp (`--bg-deep`, `--bg-canvas`, `--bg-card`, `--bg-raised`), three contrast-verified text roles (`>=7.0:1` primary, `>=4.5:1` secondary/muted), `1px` structural hairlines, and one accent (`<=5%` viewport).
4. **Typography & Numeric Precision:** Limit families to at most two (+ monospace for code/numbers), cap UI weights at `400–600`, write labels and table headers in sentence case (never tracked uppercase eyebrows), enforce `tabular-nums`, strip decorative UI italics, and cap reading prose around `62–72ch`.
5. **Line Iconography & Media Framing:** Remove every UI emoji (`✨`, `🚀`, `🔥`, `👋`, `💡`), use one geometric SVG line icon family (`16–18px`, `1.5` stroke) aligned in a fixed track, and replace abstract glowing orbs with authentic coded UI panes or explicit aspect-ratio imagery.
6. **Grounded Microcopy & Complete UI States:** Eliminate greeting headers, exclamation marks, hype adjectives, unverified counts, badge spam, and `$123,456` / `Lorem ipsum` placeholders; pair percentage deltas with baselines (`+12% vs last month`) and provide hover, active, focus, disabled, skeleton loading, empty, and inline error recovery states.
7. **Compositor Motion, Browser Surfaces & Accessibility:** Kill `transition: all` and idle `animate-pulse`; animate compositor-only `transform`, `opacity`, and color transitions with `cubic-bezier(0.22, 1, 0.36, 1)` + `@media (prefers-reduced-motion: reduce)`; replace `<div onClick>` with native `<button>`/`<a>`, enforce visible `:focus-visible` rings, `aria-label` on icon buttons, `>=16px` mobile `<input>` text, and `color-scheme` + explicit `<select>` surface colors.
