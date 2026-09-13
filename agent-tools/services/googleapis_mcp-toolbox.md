---
description: "MCP Toolbox for Databases is an open source MCP server for databases."
type: mcp
url: https://github.com/googleapis/mcp-toolbox
stars: 16.4k
language: Go
pushed: 2026-09-11
---

## Notes

### 2026-08-06, from research

- One server in front of about 20 database engines, with auth and security built in. Also a framework for building your own database tools.
- Use when: any SQL or NoSQL work. The default database MCP server.
- Covers PostgreSQL, MySQL, MariaDB, SQL Server, Oracle, MongoDB, Redis, Elasticsearch, CockroachDB, ClickHouse, Couchbase, Neo4j, Snowflake, Trino, and Google Cloud's AlloyDB, BigQuery, Cloud SQL, Spanner and Firestore.
- Use it instead of `@modelcontextprotocol/server-postgres`, which is archived and has a known SQL-injection flaw that gets past its own read-only guard.
- Named `genai-toolbox` before.
