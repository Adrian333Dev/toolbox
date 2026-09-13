---
description: "Anthropic's plugin that checks every diff for injection, XSS, SSRF, exposed secrets and auth bypass"
type: plugin
url: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/security-guidance
---

## Notes

### 2026-08-06, from research

- Use when: always. It costs little and catches the bugs cheapest to fix early.
- `/plugin install security-guidance@claude-plugins-official`
