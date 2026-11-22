# Security Policy

## Scope & Architecture

- **Zero runtime dependencies:** `unvibe` executes solely on standard Node.js (`>=18`) built-in modules.
- **Zero network requests or telemetry:** Neither `unvibe-mcp` nor `scripts/cli.mjs` opens outbound network sockets or transmits source code externally.
- **Local stdio transport only:** `mcp/server.mjs` communicates strictly over local `stdin`/`stdout` JSON-RPC 2.0 when invoked by your configured coding agent.
- **UI/UX scope:** Rules and skills never execute code modification outside user-directed UI/UX tasks.

## Reporting a Vulnerability

If you discover a bug or security concern (for example, path traversal in file installers or unsafe parsing in static code scanners), please open a private security advisory on GitHub or report minimal reproduction details without exposing sensitive credentials.
