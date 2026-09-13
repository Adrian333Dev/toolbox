---
description: "🪨 why use many token when few token do trick — Claude Code skill that cuts 65% of tokens by talking like caveman"
type: skill
url: https://github.com/JuliusBrussee/caveman
stars: 105k
language: Go
pushed: 2026-09-13
---

## Notes

### 2026-08-06, from research

- Makes the agent drop filler and answer in fragments. Code, commands and error messages stay untouched. `/caveman` turns it on and off.
- Use when: long agent answers tire you.
- The 65% token saving counts chat only. On full coding runs, JetBrains measured 8.5% across 86 tasks. The skill adds about 1,000 to 1,500 input tokens per turn and shrinks only the output, so on short answers it can cost more than it saves. The repo says so: "cost savings are the bonus."
- `curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash`. MIT, 30+ agents.
