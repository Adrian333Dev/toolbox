---
description: "Anthropic's plugin that reviews a diff with subagents in parallel: bugs, conventions, git history"
type: plugin
url: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-review
---

## Notes

### 2026-08-06, from research

- Use when: any diff you want a second opinion on before committing.
- Asks whether the diff is sound, not whether it meets the spec.
- `/plugin install code-review@claude-plugins-official`
