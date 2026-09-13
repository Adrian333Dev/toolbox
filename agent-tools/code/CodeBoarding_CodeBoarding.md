---
description: "Interactive architecture diagrams for codebases"
type: cli
url: https://github.com/CodeBoarding/CodeBoarding
stars: 2.4k
language: Python
pushed: 2026-09-13
---

## Notes

### 2026-08-06, from research

- Draws layered architecture diagrams and component breakdowns, from static analysis plus LLM summaries.
- Use when: you want docs and diagrams that live in the repo, or Mermaid to paste into a PR.
- Writes markdown and Mermaid into `.codeboarding/`, updated as the code changes.
- Python 3.12 or 3.13: `pipx install codeboarding`, then `codeboarding-setup`. An LLM key, plus a GitHub token for private repos. Also a VS Code extension and a GitHub Action.
- Overlaps `Egonex-AI_Understand-Anything.md`: this one commits docs and diagrams, that one gives a graph to explore. Pick one.
