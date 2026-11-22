---
name: redline
description: >-
  Audit and refactor generic, AI-generated interfaces into intentional, contrast-verified UI using
  Unvibe's 7-stage redline workflow. Strictly for UI/UX, styling, layout, typography, motion, and
  accessibility only; never modify backend, API, database, or non-UI code.
license: MIT
---

# Redline — UI Audit & 7-Stage Refactoring Workflow

> **Scope Boundary — UI/UX & Themes Only:** This skill governs visual craft, layout proportions, token systems, typography, motion, accessibility, and frontend UX states exclusively. **Never alter backend code, API contracts, database schemas, state handlers, routing, or business logic, and never invoke this skill on non-UI tasks.**

## 1. Triage Before Editing

Inspect existing styles, components, and screenshots first, then decide the cleanup depth without removing real features:

- **Light Polish:** Underlying theme palette, type scale, and grid are coherent, with localized spacing drift, copy clutter, missing focus rings, or off-brand badges. Preserve existing tokens and repair only the failing layers.
- **Full Visual Overhaul:** Multi-hue purple/blue gradients, glowing blobs, off-grid padding, UI emojis, bare `outline: none`, and noisy cards appear throughout. Keep every real interactive flow, prop, and API call intact, apply a contrast-verified Unvibe theme (via `recommend_themes` + `generate_tokens`), and walk sequentially through all **7 Redline Stages**.

### Five-Line Visual Brief

Write five short lines internally before rewriting any interface:
- **Product:** Plain-language statement of what the product does and who uses it.
- **Surface Mode:** `Operate` (workspace/app shell), `Read` (longform/docs), `Persuade` (landing/marketing), `Social` (feeds/communities), or `Editorial` (publications/portfolios).
- **Character:** 2–3 concrete adjectives (e.g., *grounded, drafting-table, dense*). Avoid empty filler (*sleek, modern, clean, seamless*).
- **Material Palette:** Physical stock, contrast level, and light/dark footing (e.g., *charcoal anodized shell with 1px hairlines and one cobalt focus accent*).
- **Focal Element:** Single primary interactive locus where color and hierarchy converge.

## 2. Reference Index

Load these original reference modules on demand:

| Module | Topic | When to Read |
| :--- | :--- | :--- |
| [references/README.md](./references/README.md) | Reading order & MCP pairing | First time running a Redline pass |
| [references/audit-matrix.md](./references/audit-matrix.md) | Pattern-to-fix diagnostic table | Auditing generic or broken UI patterns across all 22 linter rules |
| [references/stages.md](./references/stages.md) | Ordered 7-Stage Redline Workflow | Refactoring an existing interface cleanly layer by layer |
| [references/baseline-tokens.md](./references/baseline-tokens.md) | Spacing scale, dark/light ramps, radii, timing | Establishing token discipline without guessing hex values |
| [references/media-and-surfaces.md](./references/media-and-surfaces.md) | Real UI previews, image masking, GPU surface caps | Fixing fake hero blobs, layout shift, or washed photography |
| [references/i18n-rtl.md](./references/i18n-rtl.md) | CSS logical properties, mirroring, bidi, script type | Preparing Arabic, Persian, Urdu, or Hebrew interfaces |

## 3. Using `unvibe-mcp` During Redline

Run deterministic checks through `unvibe-mcp` (or `node scripts/cli.mjs` from the plugin/repo root):

1. `audit_slop` — scan target UI files or snippets for static P0 blockers and P1/P2 visual slop before and after edits.
2. `get_checklist` (`workflow: "redline"`) — pull the 7-stage execution checklist directly into working context.
3. `check_contrast` — measure WCAG 2.1 ratio and APCA `Lc` on every modified foreground/background pair.
4. `recommend_themes` + `generate_tokens` — adopt one of Unvibe's 24 dual-mode palettes if the existing app lacks a real design system.

## 4. Pre-Handoff Verification Gate

Before finishing a Redline refactor:
- Re-run `audit_slop`: **0** `P0-BLOCKER` and **0** `P1-SLOP` findings across touched files.
- Check mathematical contrast via `check_contrast`: `>=7.0:1` primary text, `>=4.5:1` secondary/muted copy and filled buttons.
- Inspect desktop (`1440px`) and mobile (`390px`) viewports for zero horizontal overflow, visible `:focus-visible` outlines, complete empty/loading/error states, and untouched backend/business logic.
- **Distinctiveness Test:** Mentally replace the product title with an unrelated category; if the interface feels generic, tighten typography, surface contrast, or signature component detail (such as `<kbd>` keycaps, double rules, or tabular data alignment).
