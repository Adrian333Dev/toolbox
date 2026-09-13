---
description: "AI-native video production toolkit for Claude Code"
type: skill
url: https://github.com/digitalsamba/claude-code-video-toolkit
stars: 2.1k
language: Python
pushed: 2026-09-10
---

## Notes

### 2026-08-06, from research

- A whole explainer-video pipeline: describe the video, and it writes the script, makes voiceover, music and visuals, and renders an MP4 through Remotion. Runs open models on your own cloud GPU instead of paid hosted APIs.
- Use when: you want generated assets (narration, AI footage, talking heads), not only motion graphics over your own content.
- Models: Qwen3-TTS for voice, FLUX.2 for images, LTX-2 for video, ACE-Step for music, SadTalker for talking heads.
- Node 18+, Python 3.9+, a Modal or RunPod account for the GPU, Cloudflare R2 for storage. ElevenLabs optional.
- About $0.80 for a 5-minute video.
- `git clone https://github.com/digitalsamba/claude-code-video-toolkit.git && cd claude-code-video-toolkit && python3 -m pip install -r tools/requirements.txt && claude`, then `/setup` (about 5 minutes) and `/video`.
- Commands: `/video`, `/scene-review`, `/design`, `/brand`, `/template`, `/generate-voiceover`, `/redub`, `/voice-clone`, `/publish`, `/record-demo`.
- Try it with no API keys: `cd examples/hello-world && npm install && npm run render`.
- Renders through Remotion, so Remotion's company license applies. See `software/video/remotion-dev_remotion.md`.
