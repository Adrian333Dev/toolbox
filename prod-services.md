# Production services

Connecting the agent to systems you actually operate — databases, payments, error tracking, infrastructure.

> **Add these when your stack uses them, not by default.** Each one is a live connection to something real. Scope credentials tightly, prefer read-only where offered, and keep them pointed at dev environments unless you have a specific reason otherwise.

## Databases and data layer

> **Do not use `@modelcontextprotocol/server-postgres`.** It's archived and carries a known SQL-injection flaw that bypasses its own read-only guard. Use the MCP Toolbox below instead. This is the one genuinely dangerous entry the ecosystem still surfaces in search results.

- **[MCP Toolbox for Databases](https://github.com/googleapis/genai-toolbox)** `[MCP]` (Google, 16.1k★) — one server fronting roughly twenty database engines, with auth and security controls built in rather than bolted on. Also a framework for building your own production-grade database tools.
  - *Use when:* any SQL or NoSQL work. This is the default database MCP.
  - *Covers:* PostgreSQL, MySQL, MariaDB, SQL Server, Oracle, MongoDB, Redis, Elasticsearch, CockroachDB, ClickHouse, Couchbase, Neo4j, Snowflake, Trino, plus Google Cloud's AlloyDB, BigQuery, Cloud SQL, Spanner and Firestore.
  - *Needs:* client SDKs for Python, JS/TS, Go and Java.

- **Supabase MCP** `[MCP]` — inspect and operate your Supabase database, auth and storage directly.
  - *Use when:* you're on Supabase. **Dev environments only** — scope the credentials.
  - `claude mcp add --transport http supabase "https://mcp.supabase.com/mcp?project_ref=<ref>"` (OAuth)

- **[Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)** `[Library]` (35.4k★) — TypeScript ORM that stays close to SQL: schemas in TypeScript, generated migrations, no query-builder abstraction fighting you.
  - *Use when:* you want type safety without losing sight of the query being run. Agents do well with it because the generated SQL is predictable from the TypeScript.

- **[Convex](https://github.com/get-convex/convex-backend)** `[Library]` (12.3k★) — open-source reactive backend: database, server functions and live-updating queries in one model.
  - *Use when:* building something realtime and you'd rather not assemble a database, a subscription layer and a sync protocol separately.

## Observability

- **Sentry MCP** `[MCP]` — read production errors, stack traces and performance traces.
  - *Use when:* debugging something that only happens in production. Read-only by design, which makes it one of the safer servers here.
  - `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp` (OAuth)

## Payments

- **Stripe MCP** `[MCP]` — customers, payments, subscriptions, webhooks.
  - *Use when:* you're on Stripe. Payment and PII data — scope the key tightly and prefer restricted keys over your main secret.
  - `claude mcp add --transport http stripe https://mcp.stripe.com/mcp` (OAuth)

- **[Hyperswitch](https://github.com/juspay/hyperswitch)** `[Library]` (43.4k★) — open-source, composable payments orchestration: one integration routing across many processors, PCI compliant, SaaS or self-hosted.
  - *Use when:* you don't want to be locked to a single processor, or you need routing, retries and fallback across several. Rust, Apache-2.0.

## Infrastructure

- **Cloudflare MCP** `[MCP]` — Workers, Pages, KV, R2, D1.
  - *Use when:* you deploy on Cloudflare. See `cloudflare/mcp-server-cloudflare` (remote/OAuth).
