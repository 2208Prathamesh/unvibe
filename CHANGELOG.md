# Changelog

All notable changes to **Unvibe** are documented in this file.

## [1.0.0] — 2026-11-23

### Added
- **24 Dual-Mode Themes Across 6 Packs** (`everyday-apps`, `professional`, `modern`, `premium`, `vintage`, `cool`), verified across 384 WCAG 2.1 + APCA contrast checks.
- **External-Grade `DESIGN.md` & `tokens.css` Generator** (`unvibe-design-md/v1` YAML frontmatter, Light/Dark tables, contrast matrix, interactive state matrix, responsive breakpoints, universal anti-slop guardrails, and CSS tokens).
- **Standalone `external/` Drop-In Pack** (`external/UNVIBE-SKILL.md`, 24 flat `external/design-md/*.DESIGN.md` files, and `prompts/` wrappers for external chatbots).
- **Complete Structured `skills/redline/` 7-Stage Audit Suite** (`SKILL.md`, `README.md`, `audit-matrix.md`, `stages.md`, `baseline-tokens.md`, `media-and-surfaces.md`, `i18n-rtl.md`) under the MIT License.
- **Zero-Dependency Local MCP Server (`unvibe-mcp`) & CLI** exposing `list_themes`, `get_theme`, `recommend_themes`, `generate_tokens`, `audit_slop` (22 static rules), `check_contrast`, and `get_checklist`.
- **Multi-Agent Adapters & Installer** supporting Antigravity (Priority #1), Claude Code, Cursor, OpenAI Codex CLI, OpenCode, Windsurf, GitHub Copilot / VS Code, and Gemini CLI.
- **Before / After Visual Examples** (`examples/before-slop.html` vs `examples/after-unvibe.html`) and GitHub Actions cross-OS verification CI.
