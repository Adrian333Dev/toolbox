---
description: "An MCP server for interacting with Sentry via LLMs."
type: mcp
url: https://github.com/getsentry/sentry-mcp
stars: 849
language: TypeScript
pushed: 2026-09-12
---

## Notes

### 2026-08-06, from research

- Read production errors, stack traces and performance traces.
- Use when: debugging something that only happens in production. Read-only by design, so one of the safer servers.
- `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp`, which logs in through the browser.
