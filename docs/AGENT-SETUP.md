# Multi-Agent Setup Guide (`unvibe`)

Unvibe runs natively across **9 AI coding environments and web chatbots** with zero runtime npm dependencies (`Node >= 18`).

| Environment | Support | Install / Registration Method |
| :--- | :--- | :--- |
| **Antigravity** *(Priority #1)* | Plugin + Skills + Always-On Rules + MCP | `node scripts/install.mjs --target antigravity` |
| **Claude Code** | Plugin + Skills + `.mcp.json` | `node scripts/install.mjs --target claude` |
| **Cursor** | `.mdc` Globs Rule + `.cursor/mcp.json` | `node scripts/install.mjs --target cursor --project <dir>` |
| **OpenAI Codex CLI** | Skills (`openai.yaml`) + MCP TOML | `node scripts/install.mjs --target codex` |
| **OpenCode** | Skills (`openai.yaml`) + `opencode.json` MCP | `node scripts/install.mjs --target opencode` |
| **Windsurf** | `.windsurf/rules/unvibe.md` + MCP | `node scripts/install.mjs --target windsurf --project <dir>` |
| **GitHub Copilot / VS Code** | `.github/instructions/*.instructions.md` + `.vscode/mcp.json` | `node scripts/install.mjs --target copilot --project <dir>` |
| **Gemini CLI** | `gemini-extension.json` Extension | `gemini extensions link .` |
| **External Web Chatbots** | Self-contained `UNVIBE-SKILL.md` + `.DESIGN.md` | Paste from `external/` + `prompts/` |

---

## 1. Antigravity (Priority #1 — Global Plugin)

```powershell
npm run install:antigravity
# or:
node scripts/install.mjs --target antigravity
```

Installs into `~/.gemini/config/plugins/unvibe/` with:
- `rules/AGENTS.md` (always-on UI/UX-only floor)
- `skills/unvibe/` and `skills/redline/`
- `mcp_config.json` pointing to `unvibe-mcp`

---

## 2. Claude Code

### Option A — Global Skills + MCP Snippet
```powershell
node scripts/install.mjs --target claude
```
Installs `unvibe` and `redline` into `~/.claude/skills/` and prints the `.mcp.json` snippet.

### Option B — Native Plugin Marketplace / Local Plugin
This repository includes `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, and `.mcp.json`.

---

## 3. Cursor (Per-Project)

```powershell
node scripts/install.mjs --target cursor --project "C:\path\to\your-project"
```
- Installs `rules/cursor-unvibe.mdc` into `<project>/.cursor/rules/unvibe.mdc` (scoped to frontend extensions).
- Registers `unvibe-mcp` inside `<project>/.cursor/mcp.json`.

---

## 4. OpenAI Codex CLI

```powershell
node scripts/install.mjs --target codex
```
- Installs `skills/unvibe` and `skills/redline` (including `agents/openai.yaml` prompt metadata) into `~/.agents/skills/`.
- Prints the `[mcp_servers.unvibe-mcp]` block to add to `~/.codex/config.toml`.

Invoke in Codex with `$unvibe` or `$redline`.

---

## 5. OpenCode

```powershell
node scripts/install.mjs --target opencode
```
- Installs both skills into `~/.config/opencode/skills/` and prints the `opencode.json` MCP server snippet.

---

## 6. Windsurf

```powershell
node scripts/install.mjs --target windsurf --project "C:\path\to\your-project"
```
- Copies `rules/windsurf-unvibe.md` (using `trigger: glob`) into `<project>/.windsurf/rules/unvibe.md`.
- Prints the `~/.codeium/windsurf/mcp_config.json` snippet for `unvibe-mcp`.

---

## 7. GitHub Copilot / VS Code

```powershell
node scripts/install.mjs --target copilot --project "C:\path\to\your-project"
```
- Copies `rules/copilot-unvibe.instructions.md` (using `applyTo` frontend globs) into `<project>/.github/instructions/unvibe.instructions.md`.
- Registers `unvibe-mcp` inside `<project>/.vscode/mcp.json` under `"servers"`.

---

## 8. Gemini CLI

From the `unvibe` repo root, link or install the native extension declared in [`gemini-extension.json`](../gemini-extension.json):

```powershell
gemini extensions link "C:\path\to\unvibe"
```
Loads `rules/AGENTS.md` automatically and starts `unvibe-mcp`.

---

## 9. External Web Chatbots (Zero Installation)

1. Copy or upload [`external/UNVIBE-SKILL.md`](../external/UNVIBE-SKILL.md) (or [`prompts/chatbot-system-prompt.md`](../prompts/chatbot-system-prompt.md) / [`prompts/redline-prompt.md`](../prompts/redline-prompt.md)).
2. Attach any theme spec from [`external/design-md/`](../external/README.md) (for example `graphite-studio.DESIGN.md` or `parchment-editorial.DESIGN.md`).
3. To drop a theme directly into a project root without installing plugins:
   ```powershell
   node scripts/cli.mjs export graphite-studio "C:\path\to\your-project"
   ```
