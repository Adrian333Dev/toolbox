# Claude Code plugins

From the official marketplace: `/plugin install <name>@claude-plugins-official` — it auto-registers on first launch.

> **Only add what fills a gap the workflow's own skills don't cover.** Brainstorming, spec-writing, planning, execution, research, explanation, capture, debugging and verification are already owned. A plugin that duplicates one of those competes with it.

- **frontend-design** — pushes generated UI toward considered typography/layout/restraint instead of generic "AI slop."
  - *Use when:* any user-facing UI work. *(Official; most-installed plugin in the marketplace.)*
- **security-guidance** — reviews every diff for injection, XSS, SSRF, exposed secrets, and auth-bypass before you see it.
  - *Always-on, negligible overhead.*
- **code-review** — parallel review subagents (bug-hunting, conventions, history-aware) for a fast second opinion before you commit.
  - *Distinct from verification:* this checks "is the diff itself sound," not "did it meet spec."
- **typescript-lsp** — real go-to-definition, find-references, and live type errors instead of guessing from text.
  - *Use when:* any TS work, especially across a monorepo. *(One of ~12 language-server plugins Anthropic maintains.)*
- **Semgrep Guardian** (Semgrep) — SAST scanning against thousands of rules; makes Claude regenerate until the code is clean.
  - *Use the Guardian bundle, not the deprecated standalone `semgrep/mcp` repo.*
- **skill-creator** / **mcp-server-dev** — scaffold a new skill or a custom MCP server when you hit a genuinely reusable gap.
