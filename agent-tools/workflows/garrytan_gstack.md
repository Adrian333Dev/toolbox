---
description: "Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA"
type: collection
url: https://github.com/garrytan/gstack
stars: 132k
language: TypeScript
pushed: 2026-09-11
---

## Notes

### 2026-08-06, from research

- Garry Tan's own Claude Code setup: 23 tools playing roles across the whole lifecycle, plus 8 power tools.
- Covers: planning (`/office-hours`, `/autoplan`, CEO, engineering, design and devex reviews), design (`/design-consultation`, `/design-shotgun`, `/design-html`, `/design-review`), development (`/review`, `/investigate`, `/qa`), release (`/ship`, `/land-and-deploy`, `/canary`, `/benchmark`), security (`/cso` runs OWASP and STRIDE), `/browse`, and `/codex` for a second opinion from another model.
- Bun 1.0+ and Git. `git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup`
- Use when: you want a complete opinionated setup to study, or to adopt whole.
