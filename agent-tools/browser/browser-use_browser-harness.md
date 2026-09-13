---
description: "Browser Harness | Self-healing harness that enables LLMs to complete any task."
type: cli, library
url: https://github.com/browser-use/browser-harness
stars: 17.5k
language: Python
pushed: 2026-09-12
---

## Notes

### 2026-08-06, from research

- A thin layer over Chrome's debugging protocol. The agent writes whatever helper code is missing while it runs, and the harness keeps it, so each run starts better than the last and site-specific skills pile up.
- Use when: the target site keeps breaking your selectors.
- Python 3.12+, Chrome or Chromium with remote debugging on. `uv install browser-harness`, then `browser-harness skill` registers the skill. An optional Browser Use Cloud key has a free tier.
- Versus `browser-use_browser-use.md`: that one ships with everything, this one starts small on purpose and grows around your target.
