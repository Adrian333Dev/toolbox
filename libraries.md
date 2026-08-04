# Libraries

Code libraries and UI ecosystems.

## Shadcn ecosystem

- [shieldcn](https://github.com/jal-co/shieldcn) — README badges, inspired by shields.io and styled like shadcn/ui.

## Browser automation

- [browser-use](https://github.com/browser-use/browser-use) (108k★) — Python library for building agents that drive a real browser: click, type, fill forms, extract data. Playwright underneath, works with Claude/GPT/Gemini or their own tuned models. Ranks #1 on the Odysseys long-horizon benchmark (87.4% over 200 tasks), ahead of the CV-based computer-use agents.
  - *Use when:* you're **building** an automation — a scraper, a QA suite, a filing bot. Python 3.11+, optional CLI, registers as a skill for Claude Code / Cursor / Codex. A hosted cloud version exists for production.
  - *Not an MCP server.* For driving a browser from inside a Claude Code session, reach for Playwright MCP or Chrome DevTools MCP in [mcp-servers.md](./mcp-servers.md) instead — this is a library you write code against.
