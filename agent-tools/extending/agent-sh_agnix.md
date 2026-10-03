---
description: "The missing linter and lsp for AI coding assistants. Validate CLAUDE.md, AGENTS.md, SKILL.md, hooks, MCP. Plugin for all major IDEs included, with autofixes."
type: cli
url: https://github.com/agent-sh/agnix
stars: 439
language: Rust
pushed: 2026-10-03
---

## Notes

### 2026-10-04, from Flow's read of agentsys

- A linter for the files that steer an agent: `CLAUDE.md`, `AGENTS.md`, `SKILL.md`, hooks and MCP config. 423 rules over structure, security, conflicting rules, broken references and trigger wording.
- Untested on Flow's own `skills/`, `home/AGENTS.md` and `claude/`: what it catches that `flow audit` misses is the open question.
