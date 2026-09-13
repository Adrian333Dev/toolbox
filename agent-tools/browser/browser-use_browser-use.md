---
description: "Agents that use the browser."
type: library
url: https://github.com/browser-use/browser-use
stars: 114k
language: Python
pushed: 2026-09-12
---

## Notes

### 2026-08-06, from research

- A Python library for building agents that drive a browser: click, type, fill forms, pull data. Playwright underneath. Works with Claude, GPT, Gemini or its own models.
- Use when: writing a scraper, a QA suite or a form-filling bot as its own program. It is not an MCP server: inside a session, use Playwright.
- Ranked 1st on the Odysseys long-task benchmark, 87.4% over 200 tasks.
- Python 3.11+. An optional CLI registers it as a skill for Claude Code, Cursor and Codex. A hosted version exists.
