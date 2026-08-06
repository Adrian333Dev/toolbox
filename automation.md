# Automation

Workflow automation and cross-system integration.

> Two entries is thin. If this hasn't grown by the next pass, it folds into [agent-tooling.md](./agent-tooling.md) as a section.

## n8n

- **[n8n-mcp](https://github.com/czlonkowski/n8n-mcp)** `[MCP]` (22.6k★) — gives the agent full documentation of n8n's node library so it can build working workflows instead of guessing at node names and parameter shapes.
  - *Use when:* building or debugging n8n workflows. The problem it solves is specific: n8n has far too many nodes for a model to have reliable knowledge of, and wrong node config fails silently.
  - *Indexes:* 2,412 nodes (829 core, 1,583 community), 2,352 workflow templates, plus properties, operations and AI-capable tool variants.
  - *Needs:* nothing for the hosted option — `dashboard.n8n-mcp.com`. Self-host with `npx n8n-mcp` or `docker pull ghcr.io/czlonkowski/n8n-mcp`. An n8n instance with API access is optional but needed for anything beyond authoring.
  - *Works with:* Claude Code, Claude Desktop, VS Code, Cursor, Windsurf.

- **[n8n official MCP server](https://docs.n8n.io/connect/connect-to-n8n-mcp-server)** `[Reference]` — n8n's own first-party MCP documentation.
  - *Use when:* you want the vendor-supported path rather than the community server above. Check which is current before committing — the community project is substantially more popular, but first-party support tends to win over time.
