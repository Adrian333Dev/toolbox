# Code quality

Review, correctness, and helping the agent navigate code it didn't write. Security scanning lives in [security.md](./security.md); tools that change how the agent *behaves* live in [agent-tooling.md](./agent-tooling.md).

## Review and correctness

- **code-review** `[Plugin]` (Anthropic, official) — parallel review subagents (bug-hunting, conventions, history-aware) for a fast second opinion before you commit.
  - *Use when:* any diff you'd want another pair of eyes on.
  - *Distinct from verification:* this asks "is the diff itself sound," not "did it meet spec." You want both.
  - `/plugin install code-review@claude-plugins-official`

## Framework practice

- **react-best-practices** `[Skill]` (Vercel) — React and Next performance and code-quality rules, prioritized by measured Core Web Vitals impact rather than folklore.
  - `npx skills add vercel-labs/agent-skills --skill react-best-practices`

- **nestjs-best-practices** `[Skill]` (community) — NestJS architecture, DI and security rules.
  - `npx skills add Kadajett/agent-nestjs-skills`
  - *Note:* several forks exist — skim before trusting one.

## Keeping the agent grounded

*The shared job here is stopping the agent inventing APIs that don't exist.*

- **Context7** `[MCP]` (Upstash) — pulls live, version-pinned library documentation into context instead of relying on stale training data.
  - *Use when:* working with any fast-moving framework or library version. Cheap to leave on.
  - `claude mcp add --transport http context7 https://mcp.context7.com/mcp`

- **typescript-lsp** `[Plugin]` (Anthropic) — real go-to-definition, find-references and live type errors instead of inferring structure from text.
  - *Use when:* any TypeScript work, especially across a monorepo. One of roughly a dozen language-server plugins Anthropic maintains — check for yours.
  - `/plugin install typescript-lsp@claude-plugins-official`

- **Vendor doc-skills** `[Skill]` — when you build on a specific vendor (Stripe, Paddle, Cloudflare and others publish these), their official doc-skill keeps API usage current.
  - *Use when:* you depend on that vendor. Add only the one you actually use — these accumulate fast and each one costs context.

## Understanding an unfamiliar codebase

- **[Understand-Anything](https://github.com/Egonex-AI/Understand-Anything)** `[Plugin]` (77.8k★) — turns a codebase into an interactive knowledge graph. A tree-sitter + LLM pipeline extracts files, functions, classes and dependencies, then builds something you can actually navigate.
  - *Use when:* inheriting a large unfamiliar repo, or you want the agent to reason about structure rather than grepping blind.
  - *Gives you:* guided tours, fuzzy and semantic search, diff impact analysis, layer visualization, plain-English summaries.
  - *Outputs:* `.ua/knowledge-graph.json` plus an interactive web dashboard.
  - *Needs:* Node ≥18 for the viewer, and an LLM key (Claude, OpenAI, Google, or local via Ollama). MIT.
  - `/plugin marketplace add Egonex-AI/Understand-Anything` → `/plugin install understand-anything`. Works as a CLI skill across 14+ other agents.

- **[CodeBoarding](https://github.com/CodeBoarding/CodeBoarding)** `[CLI]` (2.4k★) — generates layered architecture diagrams and component breakdowns, combining static analysis with LLM summarization.
  - *Use when:* you want documentation and diagrams that survive in the repo, or Mermaid you can drop into a PR.
  - *Outputs:* markdown and Mermaid into `.codeboarding/`, updated incrementally as code changes.
  - *Needs:* Python 3.12 or 3.13 via `pipx install codeboarding`, then `codeboarding-setup`. An LLM key, plus a GitHub token for private repos. Also a VS Code extension, web explorer and GitHub Action.
  - *Versus a call-graph tool:* it summarizes at the component and architecture layer rather than mapping raw function calls.
  - *Overlaps Understand-Anything:* pick one. CodeBoarding produces committed docs and diagrams; Understand-Anything produces an explorable graph. Different artifacts, same underlying question.
