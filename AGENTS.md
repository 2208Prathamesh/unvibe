# Unvibe — Repository Maintenance Guide

> Instructions for AI coding agents working **inside the `unvibe` repository itself**.

## Single Source of Truth

1. **Theme definitions live exclusively in `data/themes.json`.**
   - Never hand-edit generated files inside `themes/` or `external/design-md/`.
   - After editing `data/themes.json` or `scripts/themes-engine.mjs`, always run:
     ```powershell
     npm run build:themes
     npm run verify
     ```
2. **Respect Core Project Guardrails**
   - **Strict Scope:** Unvibe rules, skills, prompts, and MCP tools govern **UI/UX, visual design, layout, accessibility, and theming ONLY**. Never instruct downstream agents to touch backend APIs, databases, or non-UI code.
   - **Zero Trademarks:** Keep `data/themes.json`, `themes/`, `external/`, and skill docs completely free of third-party product/company brand names (excluding Google Fonts stylesheet URLs).
   - **Dual-Mode Contrast:** Every theme must maintain `>=7.0:1` primary text contrast and `>=4.5:1` secondary/muted text + accent button contrast across **both** `light` and `dark` palettes.
   - **Originality & License:** Keep all content original under the MIT License with zero unrequested third-party references.
   - **Zero Runtime Dependencies:** All scripts (`mcp/`, `scripts/`) use Node.js built-in modules only (`node >= 18`).
