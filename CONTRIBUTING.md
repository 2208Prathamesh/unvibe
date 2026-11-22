# Contributing to Unvibe

Thank you for contributing to **Unvibe**. Please keep every contribution aligned with these core principles:

1. **Strict Scope — UI/UX & Themes Only**
   - Rules, skills, prompts, and tools must stay strictly focused on visual design, layout, typography, color systems, motion, accessibility, and frontend UX states.
   - Never add instructions that encourage modifying backend APIs, databases, business logic, or non-UI code.

2. **Zero Trademarked Names**
   - Keep `data/themes.json`, `external/`, `themes/`, and skill references completely free of third-party product/company brand names. Describe craft surfaces, typography, and interaction geometry directly.

3. **Dual-Mode WCAG AA Contrast Guarantee**
   - Every theme in `data/themes.json` must provide full `light` and `dark` palettes passing `>=7.0:1` for primary text on canvas/cards and `>=4.5:1` for secondary/muted text and `accentInk` on `accent`.

4. **Keep All Code & Docs Original (MIT)**
   - Contribute original UI/UX rules, themes, and docs cleanly under the MIT License.

5. **Build & Verify Before Pushing**
   ```powershell
   npm run build:themes
   npm run verify
   ```
   All 24 theme packs, 384 WCAG checks, trademark checks, linter assertions, and MCP stdio server E2E tests must pass with zero warnings.
