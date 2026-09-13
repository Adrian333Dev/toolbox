---
description: "🎬 Claude Code plugin — full video production studio for Remotion. AI voiceovers, music, stock footage, image/video generation, TikTok captions, 3D, transitions & AI review loop. 5 MCP servers, 13 commands. Free & open source by Dojo Coding."
type: plugin
url: https://github.com/DojoCodingLabs/remotion-superpowers
stars: 119
language: Shell
pushed: 2026-02-11
---

## Notes

### 2026-08-06, from research

- The same job as `digitalsamba_claude-code-video-toolkit.md`, on hosted APIs instead of your own GPU, plus a loop that watches the render and gives feedback.
- Use when: you'd rather pay per call than run cloud GPUs, or you want `/review-video` and `/analyze-footage`.
- Ships 5 MCP servers: remotion-media (Suno, ElevenLabs and Whisper through KIE), TwelveLabs, Pexels, ElevenLabs, Replicate.
- Node, Python and uv. 2 keys required: KIE, which is paid, and TwelveLabs, which has a free tier.
- `/plugin marketplace add DojoCodingLabs/remotion-superpowers`, then `/plugin install remotion-superpowers@remotion-superpowers`, then `/setup`.
- One maintainer and 90 stars, while asking for the most API access of any video tool here. Check recent commits before relying on it.
- Renders through Remotion, so Remotion's company license applies. See `software/video/remotion-dev_remotion.md`.
