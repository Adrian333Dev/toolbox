---
description: "CLI for common Playwright actions. Record and generate Playwright code, inspect selectors and take screenshots."
type: cli
url: https://github.com/microsoft/playwright-cli
stars: 13.3k
language: JavaScript
pushed: 2026-09-03
---

## Notes

### 2026-08-06, from research

- A browser CLI built for coding agents. A background process keeps browsers open, and each page element gets a short reference, so clicks land on the same element every run.
- Use when: browser work inside a coding session. The default. A CLI call puts no tool schema and no full page tree into context.
- Covers: `open`, `click`, `fill`, `type`, `check`, `screenshot`, `pdf`, `eval`, navigation, `press`, `hover`, `drag`, `upload`, tabs, cookies and localStorage, `route` to fake network responses, `console`, tracing, video.
- `npm install -g @playwright/cli`. Chrome, Firefox, WebKit and Edge, with several separate sessions.
- Playwright's own advice: the CLI for agents short on context, `microsoft_playwright-mcp.md` for long loops where token cost matters less.
