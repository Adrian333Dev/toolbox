---
description: "Edit videos with coding agents"
type: skill
url: https://github.com/browser-use/video-use
stars: 24.8k
language: Python
pushed: 2026-08-30
---

## Notes

### 2026-08-06, from research

- Never watches the video. It transcribes with ElevenLabs Scribe to get a timestamp per word and who is speaking, decides the cuts from that text, and pulls a frame only when it needs to see something. That avoids the token cost of feeding frames to the model.
- Use when: tightening raw talking-head or screen-recording footage into a cut.
- Removes filler words and dead air, color-grades each segment, fades audio at every cut, burns in subtitles, and adds animation through HyperFrames, Remotion, Manim or PIL. Checks the render at the cut points.
- ffmpeg and an ElevenLabs key. `yt-dlp` optional, for online sources.
- Setup by hand: clone to `~/Developer/video-use`, run `ln -sfn ~/Developer/video-use ~/.claude/skills/video-use` and `uv sync`, then copy `.env.example` to `.env` and add `ELEVENLABS_API_KEY`.
- `cd` into the footage folder, start `claude`, describe the edit. It proposes a plan, waits for approval, and writes `edit/final.mp4`. It keeps state in `project.md`, so a later session picks up where the last one stopped.
