---
description: "The open agent skills tool - npx skills"
type: cli
url: https://github.com/vercel-labs/skills
stars: 31.5k
language: TypeScript
pushed: 2026-09-11
---

## Notes

### 2026-08-06, from research

- Use when: installing or managing any skill. Most skill READMEs assume you know it, so read its docs once.
- Commands: `add`, `use` (run without installing), `list`, `find`, `update`, `init`, `remove`.
- Flags: `-g` for every project instead of this one, `-a` for one agent, `-s` to pick single skills, `--copy` for a copy instead of a symlink, `-l` to preview before installing.
- Symlinks by default, so `git pull` in the source repo updates an installed skill. `--copy` gives a version you control.
