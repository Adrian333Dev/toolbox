# Collections

Skill sets and indexes to install *from*. For the tooling that builds and runs skills, see [agent-tooling.md](./agent-tooling.md).

> **Keep what you install small and deliberate.** A mid-2026 benchmark found most SWE skills produced no measurable gain, and some actively hurt when they conflicted with project context. **Don't install whole sets** — poor signal-to-noise is the trap these repos set. Cherry-pick, read the source of what you pick, and treat any skill-*discovery* tool as untrusted input.
>
> **Only add what fills a gap your workflow doesn't cover.** Brainstorming, spec-writing, planning, execution, research, explanation, capture, debugging and verification are already owned.

## Curated sets

*Small enough to actually evaluate. These are the ones worth reading end to end.*

- **[anthropics/skills](https://github.com/anthropics/skills)** `[Collection]` (167k★) — the official Agent Skills repository.
  - *Use when:* first place to look. `theme-factory` in [ui-design.md](./ui-design.md) comes from here.
  - `npx skills add anthropics/skills --skill <name>`

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** `[Collection]` (82.7k★) — 24 production-grade engineering skills (23 lifecycle plus a discovery meta-skill), encoding quality gates senior engineers actually use.
  - *Covers:* define (specs, ideas, interviews) · plan (task breakdown) · build (implementation, testing, design) · verify (browser testing, debugging) · review (quality, security, performance) · ship (deployment, versioning, observability).
  - `npx skills add addyosmani/agent-skills` or `/plugin marketplace add addyosmani/agent-skills`. MIT.

- **[gstack](https://github.com/garrytan/gstack)** `[Collection]` (126k★) — Garry Tan's own Claude Code setup: 23 tools structured as roles across the whole lifecycle, plus 8 power tools.
  - *Covers:* planning (`/office-hours`, `/autoplan`, CEO/eng/design/devex reviews) · design (`/design-consultation`, `/design-shotgun`, `/design-html`, `/design-review`) · dev (`/review`, `/investigate`, `/qa`) · release (`/ship`, `/land-and-deploy`, `/canary`, `/benchmark`) · docs and security (`/cso` runs OWASP + STRIDE) · utilities (`/browse`, `/codex` for a cross-model second opinion).
  - *Needs:* Bun 1.0+, Git. `git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup`
  - *Use when:* you want a complete opinionated config to study or adopt wholesale. Read it as a reference even if you don't install it.

- **[mattpocock/skills](https://github.com/mattpocock/skills)** `[Collection]` (207k★) — "Skills for Real Engineers," straight from his `.agents` directory.
  - *Use when:* you want TypeScript-flavored skills from someone who writes a lot of TypeScript.

- **[softaworks/agent-toolkit](https://github.com/softaworks/agent-toolkit)** `[Collection]` — large collection; cherry-pick from it.
  - *Worth picking:* `database-schema-designer`, `qa-test-planner`, `naming-analyzer`, `reducing-entropy`.
  - *Note:* **don't install the whole set.** This is the clearest example of the signal-to-noise problem.

## Indexes

*Far too large to install from wholesale — these are for searching when you have a specific need, not for browsing.*

- **[awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)** `[Index]` (VoltAgent, 29.7k★) — ~1,500 skills from official teams (Anthropic, Google, Vercel, Stripe, Cloudflare, Microsoft) and the community, organized by source.
  - *Curation claim:* real skills used by actual engineering teams, not mass AI-generated filler. Compatible across Claude Code, Codex, Gemini CLI, Cursor and others.

- **[awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)** `[Index]` (VoltAgent, 24.1k★) — 154+ subagents across 10 categories: core development, language specialists, infrastructure, quality and security, data and AI, developer experience, specialized domains, business and product, meta and orchestration, research.
  - *Installable* via marketplace, an interactive shell script, a curl installer, or by copying files. Standardized template with name, description, tools and model routing per agent.

- **[awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills)** `[Index]` (VoltAgent, 51.8k★) — 5,300+ skills for OpenClaw, a locally-running assistant, filtered from the official ClawHub registry.
  - *Note:* the maintainers excluded ~7,215 entries as spam, low quality, duplicate or a security risk. That ratio — more rejected than kept — is the clearest available evidence for why you don't install from an index blind.
  - `openclaw skills install <slug>` or `npx clawhub install <slug>`.
