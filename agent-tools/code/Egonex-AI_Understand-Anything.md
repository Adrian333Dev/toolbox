---
description: "Graphs that teach > graphs that impress. Turn any code into an interactive knowledge graph you can explore, search, and ask questions about. Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more."
type: plugin
url: https://github.com/Egonex-AI/Understand-Anything
stars: 82.3k
language: TypeScript
pushed: 2026-09-12
---

## Notes

### 2026-08-06, from research

- Turns a codebase into a graph you can explore: tree-sitter and an LLM pull out files, functions, classes and dependencies.
- Use when: inheriting a large unfamiliar repo.
- Gives guided tours, search by name and by meaning, the impact of a diff, layer views, plain-English summaries. Writes `.ua/knowledge-graph.json` and a web dashboard.
- Node 18+ for the viewer, and an LLM key: Claude, OpenAI, Google, or a local model through Ollama. MIT.
- `/plugin marketplace add Egonex-AI/Understand-Anything`, then `/plugin install understand-anything`.
