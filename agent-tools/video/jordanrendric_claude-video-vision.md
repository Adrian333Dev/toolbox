---
description: "Give Claude the ability to watch and understand videos — Claude Code plugin with frame extraction and multimodal audio analysis"
type: plugin
url: https://github.com/jordanrendric/claude-video-vision
stars: 1.3k
language: TypeScript
pushed: 2026-08-07
---

## Notes

### 2026-08-06, from research

- Extracts frames with ffmpeg so Claude sees them as images, with a timestamped transcript. Frame rate and resolution follow the question asked.
- Use when: you need it fully offline (local whisper.cpp) or want Gemini to catch sounds other than speech. Otherwise take `bradautomates_claude-video.md`. Never install both.
- Audio: the Gemini API (free tier), local whisper.cpp (`brew install whisper-cpp`), or OpenAI Whisper (paid). YouTube through yt-dlp.
- Node 20+, ffmpeg. `/plugin marketplace add https://github.com/jordanrendric/claude-video-vision`, then `/plugin install claude-video-vision`.
- Version 1.0.0, tested on macOS Apple Silicon with the local backend. Other platforms are less proven.
