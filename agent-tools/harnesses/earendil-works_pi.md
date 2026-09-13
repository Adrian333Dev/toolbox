---
description: "AI agent toolkit: unified LLM API, agent loop, TUI, coding agent CLI"
type: cli, library
url: https://github.com/earendil-works/pi
stars: 104k
language: TypeScript
pushed: 2026-09-13
---

## Notes

### 2026-08-06, from research

- A toolkit for building agents, not one agent: one API across LLM providers, an agent runtime with tool calling and state, a terminal UI library, and a coding agent CLI.
- Use when: building your own agent and you want the loop, tool calling and providers already solved.
- Packages: `@earendil-works/pi-coding-agent` (the CLI), `pi-agent-core` (the runtime), `pi-ai` (the provider API). Can run in containers. MIT.
