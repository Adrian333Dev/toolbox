# Agent skills

Standalone skills for Claude Code / Codex. Install: `npx skills add <owner/repo> --skill <name>` — pick specific skills, symlinked by default so `git pull` keeps them current (`--copy` for a frozen copy).

> **Keep this set small and deliberate.** A mid-2026 benchmark found most SWE skills produced no measurable gain, and some hurt when they conflicted with project context. Review a skill's source before installing, and treat any skill-*discovery* tool as untrusted input.
>
> **Only add what fills a gap the workflow's own skills don't cover** — brainstorming, spec-writing, planning, execution, research, explanation, capture, debugging and verification are already owned.

## UI / design

*These overlap — pick one or two, don't stack them all.*

- [impeccable](https://github.com/pbakaus/impeccable) — a design language that makes an AI harness better at design.
- [taste-skill](https://github.com/leonxlnx/taste-skill) — anti-slop frontend guidance. `Leonxlnx/taste-skill`
- [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) — heavy UI/UX ruleset (161 rules, 67 styles).
- **web-design-guidelines** (Vercel) — audits UI against 100+ a11y/UX/perf rules, fetched fresh each run. `npx skills add vercel-labs/agent-skills --skill web-design-guidelines`
- **theme-factory** (Anthropic) — coherent color systems and type scales. From `anthropics/skills`.

## Code quality

- **react-best-practices** (Vercel) — React/Next perf & code-quality rules, prioritized by real Core Web Vitals impact. `npx skills add vercel-labs/agent-skills --skill react-best-practices`
- **nestjs-best-practices** (community) — NestJS architecture/DI/security rules. `npx skills add Kadajett/agent-nestjs-skills` *(several forks exist — skim before trusting.)*

## Collections

- [mattpocock/skills](https://github.com/mattpocock/skills) — "Skills for Real Engineers," straight from his `.agents` directory.
- [softaworks/agent-toolkit](https://github.com/softaworks/agent-toolkit) — large collection; cherry-pick (`database-schema-designer`, `qa-test-planner`, `naming-analyzer`, `reducing-entropy`). **Don't install the whole set** — poor signal-to-noise is the trap.

## Vendor doc-skills

When you build on a specific vendor (Stripe, Paddle, etc.), their official doc-skill keeps API usage current. Add only the one you actually use.

## SEO

- [claude-seo](https://github.com/AgricIDaniel/claude-seo) — universal SEO skill for Claude Code: 25 sub-skills + 18 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, backlinks, local SEO, maps intelligence, semantic clustering, e-commerce, international, Google APIs, PDF/Excel reporting. Optional DataForSEO, Firecrawl and Banana extensions.
- [codex-seo](https://github.com/AgriciDaniel/codex-seo) — Codex-first SEO suite: 26 workflows, 24 TOML agents, DataForSEO/Gemini/Google/Firecrawl integrations, GEO/AEO, CWV, schema, backlinks, local/maps, deterministic reports.

## Building skills

- [agentskills](https://agentskills.io/home) — specification and documentation for Agent Skills.

## Unvetted — to explore

- [claude-ads](https://github.com/AgriciDaniel/claude-ads) — paid-media operations across 12 ad platforms (Google, Meta, YouTube, LinkedIn, TikTok, Microsoft, Apple, Amazon, Reddit, Pinterest, Snapchat, X): source-grounded audits, deterministic scoring, versioned JSON reports, capability-gated account changes.
- [claude-blog](https://github.com/AgriciDaniel/claude-blog) — blog skill suite: 30 sub-skills, 5 agents, a 5-gate delivery contract, dual-optimized for Google rankings and AI citations.
