---
description: "Reconstruct and validate C/C++ code from compiled programs with AI."
type: cli
url: https://github.com/Dryxio/reagent
stars: 1.9k
language: Python
pushed: 2026-09-09
---

## Notes

### 2026-08-06, from research

- Drives Ghidra with an LLM to rebuild C and C++ functions, then checks the rebuilt code.
- Use when: turning decompiler output into readable code, with a check that it is correct.
- Pairs with `zhaoxuya520_reverse-skill.md`, which routes to Ghidra but does not automate this loop.
- Named `auto-re-agent` before.
