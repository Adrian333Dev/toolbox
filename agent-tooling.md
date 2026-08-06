# Agent tooling

Tools about the agent itself — authoring extensions, methodology, testing, runtimes, and changing how it behaves. For skill *sets* to install from, see [collections.md](./collections.md).

## Authoring extensions

- **[skills CLI](https://github.com/vercel-labs/skills)** `[CLI]` (Vercel, 28.2k★) — the installer for the open agent-skills ecosystem, and the `npx skills` command every skill entry in this library refers to.
  - *Use when:* installing or managing any skill. Worth reading its own docs once, since most skill READMEs assume you already know it.
  - *Commands:* `add` `use` (run without installing) `list` `find` `update` `init` `remove`.
  - *Flags that matter:* `-g` global vs project-scoped · `-a` target a specific agent · `-s` pick individual skills · `--copy` to freeze a snapshot instead of symlinking · `-l` preview before installing.
  - *Note:* symlinks by default, so `git pull` in the source repo updates your installed skill. That's usually what you want, and occasionally exactly what you don't — use `--copy` when you need a version you control. Supports 76+ agents.

- **skill-creator** `[Plugin]` (Anthropic) — scaffolds a new skill when you hit a genuinely reusable gap.
- **mcp-server-dev** `[Plugin]` (Anthropic) — scaffolds a custom MCP server.
  - *Use either when:* you've solved the same problem three times by hand. Not before.

- **[agentskills](https://github.com/agentskills/agentskills)** `[Reference]` (23.9k★) — the specification and documentation for Agent Skills.
  - *Use when:* writing a skill that should work across agents rather than just yours. Site at [agentskills.io](https://agentskills.io/home).

## Methodology

- **[superpowers](https://github.com/obra/superpowers)** `[Framework]` (268k★) — a full development methodology built as composable skills, aimed at stopping agents jumping straight to code.
  - *Covers:* brainstorming, writing-plans, executing-plans, subagent-driven-development, TDD, systematic-debugging, verification-before-completion, requesting/receiving code review, git worktrees, writing-skills.
  - *Workflow:* brainstorm → worktree → plan → subagent-driven execution → TDD → review → finish branch.
  - `/plugin install superpowers@claude-plugins-official`. Also Cursor, Codex, Gemini CLI, Copilot CLI.
  - *Note:* this is opinionated and process-heavy by design. It's the biggest single behavioral change on this page — adopt it deliberately, not casually.

- **[12-factor-agents](https://github.com/humanlayer/12-factor-agents)** `[Reference]` (25.1k★) — principles for building LLM software that's actually good enough to put in front of users.
  - *Use when:* designing an agent system rather than using one. Read once, apply repeatedly.
  - *Note:* last updated 2025-09. It's a principles document, so age matters far less here than it would for a tool — the ideas haven't expired.

- **[claude-task-master](https://github.com/eyaltoledano/claude-task-master)** `[MCP]` `[CLI]` (27.9k★) — task management for AI-driven development: parses requirements into structured tasks with dependencies, subtasks and tags, then tracks progress.
  - *Use when:* a project is too big to hold in one context window and you want durable structure between sessions.
  - `npm install -g task-master-ai` or `npx task-master init`; MCP via `npx -y task-master-ai`. Works with Cursor, Claude Code, Windsurf, VS Code, Roo.
  - *Overlaps superpowers:* both impose planning structure. Pick one as your primary.

## Testing agents

- **[promptfoo](https://github.com/promptfoo/promptfoo)** `[CLI]` `[Library]` (24k★) — evaluate and red-team LLM applications: automated evals, side-by-side model comparison, vulnerability scanning, CI integration.
  - *Use when:* you're shipping an AI feature and currently changing prompts by feel. This is the tool that replaces trial and error with a measurement.
  - `npm install -g promptfoo` / `brew install promptfoo` / `pip install promptfoo`. Runs locally, so prompts stay private. MIT.

## Alternative runtimes

- **[PI](https://github.com/earendil-works/pi)** `[CLI]` `[Library]` (84.8k★) — an agent toolkit rather than a single agent: unified multi-provider LLM API, agent runtime with tool calling and state management, a TUI library, and a coding-agent CLI.
  - *Use when:* you're building your own agent and want the loop, tool calling and provider abstraction already solved.
  - *Packages:* `@earendil-works/pi-coding-agent` (CLI) · `pi-agent-core` (runtime) · `pi-ai` (unified provider API). Supports containerized isolation. MIT.

## Behavior modifiers

*Both change how the agent works rather than what it can do. Both are cheap to try and cheap to remove.*

- **[ponytail](https://github.com/dietrichgebert/ponytail)** `[Skill]` (97.3k★) — makes the agent walk a decision ladder before writing anything: does this need to exist, is it already in the codebase, is it in the stdlib, is it a native platform feature, is it in an existing dependency, can it be one line — and only then write code.
  - *Use when:* your agent over-engineers. That's most agents, most of the time.
  - *Claims:* ~46% fewer lines, 22% fewer tokens, 20% lower cost, 27% faster, 100% safety compliance. These are the repo's own benchmarks — treat them as directional.
  - `/plugin marketplace add DietrichGebert/ponytail` → `/plugin install ponytail@ponytail`. Works across 20+ agents.

- **[caveman](https://github.com/juliusbrussee/caveman)** `[Skill]` (96.4k★) — makes the agent drop filler and answer in fragments, while leaving code, commands and error messages untouched. Toggle with `/caveman`.
  - *Use when:* you find agent prose exhausting. That's the real reason to run it.
  - **On the token savings:** the headline 65% applies to prose and chat only. On full agentic coding runs, JetBrains measured **8.5%** across 86 tasks. The skill itself adds ~1–1.5k input tokens per turn, and it only shrinks *output* tokens — so on already-terse workloads it can be net-negative. The repo says this itself: "cost savings are the bonus."
  - `curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash` (or the PowerShell equivalent on Windows). MIT, 30+ agents.
