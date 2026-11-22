---
name: unvibe
description: >-
  Design, theme, scaffold, and verify cohesive, production-grade UI/UX systems across web apps,
  dashboards, editorial readers, social feeds, and landing pages. Strictly for UI/UX, styling,
  layout, and theming only; never use for backend, API, database, or non-UI tasks.
---

# Unvibe

> **Scope Boundary — UI/UX & Themes Only:** This skill governs visual design, layout proportions, themes, tokens, typography, motion, accessibility, and frontend UX polish exclusively. **Never alter business logic, API contracts, database schemas, state wiring, or backend code, and never invoke this skill for non-UI tasks.**

Build interfaces that look intentionally designed for their product rather than default AI output.
Available theme engine tools live in `unvibe-mcp` (or run `node scripts/cli.mjs` from the Unvibe repo/plugin directory). Standalone external drop-in files live at `external/design-md/<theme-id>.DESIGN.md` (plus `themes/<pack>/<theme-id>/DESIGN.md` and `tokens.css`) and `external/UNVIBE-SKILL.md`.

## Workflow

### 1. Pre-Flight Context Check
Before introducing colors or fonts, inspect the project workspace:
- Check for an existing `DESIGN.md`, `design.md`, `:root` token file, `tailwind.config.*`, or `@theme` block.
- If the project already has a real brand palette and typography, **preserve and extend it**—do not overwrite an established system unless the user asks for a new theme or redesign.
- If the interface is currently slopped or needs cleanup, pair with the `redline` skill or run `audit_slop`.

### 2. Write a 5-Line Design Direction
Before writing layout or styling code, define these five lines internally or briefly in your plan:
- **Product:** What it does and for whom in one plain sentence.
- **Surface Mode:** Choose `Operate` (apps/dashboards), `Read` (docs/articles), `Persuade` (landing pages), `Social` (visual feeds/communities), or `Editorial` (publications/portfolios).
- **Character:** 2–3 concrete adjectives (e.g., `calm, exact, warm` or `tactile, archival, sharp`). Never use hollow words like *clean, sleek, modern, premium* on their own.
- **Material World:** The physical stock, lighting, and tone (e.g., *warm cream paper with terracotta ink*, *matte charcoal shell with hairline borders*).
- **Moment & Signature:** One bright focal element where color/detail shines, plus one consistent signature detail (e.g., keycaps for a developer tool, double hairlines for a broadsheet).

### 3. Select a Theme Pack & Generate Tokens
Pick from the 24 curated, dual-mode (light + dark), contrast-verified themes across 6 packs (`everyday-apps`, `professional`, `modern`, `premium`, `vintage`, `cool`):
1. Call `unvibe-mcp` `recommend_themes` with the project description, `surfaceMode`, and `preferredMode`, or browse [references/theme-catalog.md](./references/theme-catalog.md).
2. Inspect the chosen theme with `get_theme` (or read `external/design-md/<theme-id>.DESIGN.md` / `themes/<pack>/<theme-id>/DESIGN.md`).
3. Generate drop-in tokens with `generate_tokens` (`css`, `tailwind-v4`, `tailwind-v3`, or `design-md`) and place them in the project's global stylesheet or root `DESIGN.md`.

### 4. Apply Craft & Layout Discipline
Load supporting references on demand rather than guessing defaults:
- **Hard quality & browser-surface floor:** [references/craft-floor.md](./references/craft-floor.md)
- **Surface mode proportions & anti-template rhythm:** [references/layout-modes.md](./references/layout-modes.md)
- **4px spacing, nested radii, type scale, charts & motion:** [references/tokens-and-motion.md](./references/tokens-and-motion.md)

### 5. Verify Before Handoff
1. Run `audit_slop` via `unvibe-mcp` (or `node scripts/cli.mjs audit <target>`) on every created/edited UI file.
2. Fix **all** `P0-BLOCKER` and `P1-SLOP` findings immediately; verify any custom accent/text color pairings with `check_contrast` (`>=4.5:1` body, `>=3.0:1` large).
3. When a local dev server or HTML preview exists, visually check desktop (`1440px`) and mobile (`390px`) layouts for horizontal overflow, truncation, and focus visibility.
