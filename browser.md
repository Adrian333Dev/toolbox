# Browser

Driving a real browser, scraping the web, and end-to-end testing.

**Which one:** if you want the agent to click through a page during a coding session, start with **Playwright CLI** — it's the token-efficient default. Use **Playwright MCP** instead when a long exploratory loop needs persistent state. Use **Chrome DevTools MCP** when you're debugging a live page rather than automating it. Use **browser-use** or **browser-harness** when you're *building* a standalone automation. Use **Firecrawl** when you want content out of the web at scale rather than interaction.

## Driving a browser from a session

- **[Playwright CLI](https://github.com/microsoft/playwright-cli)** `[CLI]` (Microsoft, 12.4k★) — a command-line interface for browser automation built specifically for coding agents. A persistent daemon keeps browsers warm, and ref-based accessibility snapshots make interactions deterministic.
  - *Use when:* default choice for browser work inside a coding session. CLI invocations avoid loading large tool schemas and verbose accessibility trees into context, which matters when you're already juggling a big codebase.
  - *Covers:* `open` `click` `fill` `type` `check` `screenshot` `pdf` `eval` · navigation · `press` `hover` `drag` `upload` · tabs · cookies and localStorage · `route` network mocking · `console`, tracing, video capture.
  - *Needs:* `npm install -g @playwright/cli`. Chrome, Firefox, WebKit and Edge; multiple isolated sessions with separate state.
  - *Note:* the official comparison is explicit — CLI for high-throughput agents on limited context, MCP for specialized agentic loops where token cost matters less.

- **Playwright MCP** `[MCP]` (Microsoft) — cross-browser automation through the accessibility tree: navigate, click, fill, screenshot, assert.
  - *Use when:* you want repeatable end-to-end flows, or a long-running exploratory loop that benefits from structured parameter passing and persistent introspection.
  - `claude mcp add playwright npx @playwright/mcp@latest`
  - *Note:* the official successor to the deprecated Puppeteer MCP — don't use the old one.

- **Chrome DevTools MCP** `[MCP]` (Google) — a live, inspectable Chrome: DOM, console, network, performance traces.
  - *Use when:* debugging a real rendered page or a perf issue that only reproduces in a browser.
  - `npx chrome-devtools-mcp@latest`
  - *Overlaps Playwright:* DevTools for debugging and perf, Playwright for repeatable test flows. You rarely need both in one task.

## Building an automation

- **[browser-use](https://github.com/browser-use/browser-use)** `[Library]` (108k★) — Python library for building agents that drive a browser: click, type, fill forms, extract data. Playwright underneath, works with Claude/GPT/Gemini or their own tuned models.
  - *Use when:* you're writing a scraper, a QA suite or a filing bot as its own program. Ranks #1 on the Odysseys long-horizon benchmark at 87.4% over 200 tasks, ahead of the CV-based computer-use agents.
  - *Needs:* Python 3.11+. Optional CLI, registers as a skill for Claude Code / Cursor / Codex. A hosted cloud version exists for production.
  - *Note:* not an MCP server. For driving a browser from inside a session, use the tools above instead.

- **[browser-harness](https://github.com/browser-use/browser-harness)** `[CLI]` `[Library]` (browser-use, 16.5k★) — a deliberately thin CDP harness: the agent writes whatever helper code is missing during execution, and the harness keeps the result. It improves every run and accumulates site-specific domain skills.
  - *Use when:* the target site keeps breaking your selectors, or you want automation that hardens itself instead of being re-patched by hand.
  - *Needs:* Python 3.12+, Chrome/Chromium with remote debugging enabled. `uv install browser-harness`, then register the skill via `browser-harness skill`. Optional Browser Use Cloud key (free tier).
  - *Versus browser-use:* browser-use is the batteries-included library; browser-harness is minimal on purpose and grows into the shape of your target.

## Getting content out of the web

- **[Firecrawl](https://github.com/firecrawl/firecrawl)** `[Library]` `[MCP]` (162k★) — scrape, crawl, search, map and extract at scale. URLs to markdown, HTML, screenshots or structured JSON; an agent mode gathers data from a natural-language prompt.
  - *Use when:* you want the *content*, not the interaction — research, ingestion, competitive sweeps, populating a dataset.
  - *Modes:* `scrape` · `crawl` (whole site) · `map` (discover URLs) · `search` (results with full page content) · `batch scrape` · `extract`.
  - *Needs:* self-host under AGPL-3.0, or the paid cloud at firecrawl.dev for the extras. `pip install firecrawl-py` / `npm install firecrawl`. SDKs for Python, Node, Go, Java, Rust, Ruby, .NET, PHP, Elixir. Ships a Firecrawl MCP.
  - *Note:* AGPL-3.0 on the self-hosted version is a real consideration if you're embedding it in a closed product.

- **[scrapfly-scrapers](https://github.com/scrapfly/scrapfly-scrapers)** `[Library]` (1.1k★) — maintained Python scrapers for 40+ popular sites.
  - *Use when:* your target is already covered and you'd rather not rediscover its anti-bot quirks. Read the relevant scraper as a reference even if you don't run it.
