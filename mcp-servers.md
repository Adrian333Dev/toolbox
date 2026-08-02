# MCP servers

Give Claude Code capabilities it lacks natively — live docs, a real browser, production data, external platforms.

> An MCP server is executable code with access to whatever you point it at. Skim the source, scope credentials tightly, and prefer read-only where the option exists.

**Install:** `claude mcp add <name> <endpoint-or-command>` — many are remote/OAuth, so first use opens a browser.

## Always useful

- **Context7** (Upstash) — pulls live, version-pinned library docs into context instead of relying on stale training data.
  - *Use when:* working with any fast-moving framework/library version.
  - `claude mcp add --transport http context7 https://mcp.context7.com/mcp`

- **Playwright MCP** (Microsoft) — cross-browser automation via the accessibility tree: navigate, click, fill, screenshot, assert.
  - *Use when:* you want repeatable end-to-end checks across browsers.
  - `claude mcp add playwright npx @playwright/mcp@latest`
  - *Note:* the official successor to the deprecated Puppeteer MCP — don't use the old one.

- **Chrome DevTools MCP** (Google) — a live, inspectable Chrome: DOM, console, network, performance traces.
  - *Use when:* debugging a real rendered page or a perf issue that only shows up in a browser.
  - `npx chrome-devtools-mcp@latest`
  - *Overlaps Playwright:* DevTools for debugging/perf, Playwright for repeatable test flows — you rarely need both in one task.

## Add when your stack uses it

- **Supabase MCP** — inspect/operate your Supabase DB, auth, and storage directly. *Dev environments only; scope credentials.*
  - `claude mcp add --transport http supabase "https://mcp.supabase.com/mcp?project_ref=<ref>"` (OAuth)
- **Sentry MCP** — read production errors, stack traces, and performance traces. Read-only by design.
  - `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp` (OAuth)
- **Stripe MCP** — customers, payments, subscriptions, webhooks. Payment/PII data — scope the key tightly.
  - `claude mcp add --transport http stripe https://mcp.stripe.com/mcp` (OAuth)
- **Cloudflare MCP** — Workers, Pages, KV, R2, D1. See `cloudflare/mcp-server-cloudflare` (remote/OAuth).
- **Generic SQL database?** Use Google's **MCP Toolbox for Databases** (`googleapis/mcp-toolbox`) — *not* the official `@modelcontextprotocol/server-postgres`, which is archived and has a known SQL-injection flaw that bypasses its read-only guard.
