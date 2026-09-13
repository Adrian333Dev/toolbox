---
description: "Playwright MCP server"
type: mcp
url: https://github.com/microsoft/playwright-mcp
stars: 37.1k
language: TypeScript
pushed: 2026-09-11
---

## Notes

### 2026-08-06, from research

- Use when: repeatable end-to-end flows, or a long exploring loop that needs state kept between steps. Otherwise `microsoft_playwright-cli.md` costs less context.
- `claude mcp add playwright npx @playwright/mcp@latest`
- Replaces the deprecated Puppeteer MCP server. Never use the old one.
