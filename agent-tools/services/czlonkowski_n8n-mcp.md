---
description: "A MCP for Claude Desktop / Claude Code / Windsurf / Cursor to build n8n workflows for you"
type: mcp
url: https://github.com/czlonkowski/n8n-mcp
stars: 22.9k
language: TypeScript
pushed: 2026-09-12
---

## Notes

### 2026-08-06, from research

- Gives the agent the documentation of n8n's nodes, so it builds working workflows instead of guessing node names and parameters. n8n has too many nodes for a model to know, and a wrong node setting fails silently.
- Indexes 2,412 nodes (829 core, 1,583 community) and 2,352 workflow templates.
- Hosted at `dashboard.n8n-mcp.com`, or self-hosted with `npx n8n-mcp` or `docker pull ghcr.io/czlonkowski/n8n-mcp`. Anything past writing workflows needs an n8n instance with API access.
- Works with Claude Code, Claude Desktop, VS Code, Cursor, Windsurf.
- n8n ships its own server too: `n8n-io_n8n-mcp-server.md`.
