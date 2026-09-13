---
description: "Extract any website’s design system into tokens in seconds: logo, colors, typography, borders & more. One command."
type: cli, mcp
url: https://github.com/dembrandt/dembrandt
stars: 3.5k
language: TypeScript
pushed: 2026-09-12
---

## Notes

### 2026-08-06, from research

- Pulls a live website's design system out as tokens: colors, type, spacing, borders, shadows, motion, components, logo.
- Use when: matching an existing product or brand that has no design file.
- Outputs terminal text, JSON, W3C Design Tokens, a brand guide PDF, and a `DESIGN.md` for agents.
- Node 18+. `npx dembrandt <url>` or `npm install -g dembrandt`. Also an MCP server and a GitHub Action. Reads several pages, audits WCAG, and can flag design drift in CI.
