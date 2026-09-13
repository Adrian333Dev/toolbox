---
description: "Give Claude the ability to watch any video. /watch downloads, extracts frames, transcribes, hands it all to Claude."
type: plugin
url: https://github.com/bradautomates/claude-video
stars: 17.2k
language: Python
pushed: 2026-07-01
---

## Notes

### 2026-08-06, from research

- `/watch <url-or-path> <question>` downloads the video, extracts frames, transcribes, and hands both to Claude in one step.
- Use when: letting Claude watch a video. The first choice: no setup, free by default, runs on about 50 agents. Overlaps `jordanrendric_claude-video-vision.md` almost completely, so never install both.
- Sources: YouTube, TikTok, Vimeo and local files, through yt-dlp.
- Token control: `--detail transcript|efficient|balanced|token-burner`, `--max-frames N`, `--resolution 1024` to read text on screen, `--no-dedup`. On a long video use `--start 2:15 --end 2:45`: the capped modes thin out frames past about 10 minutes.
- yt-dlp and ffmpeg install on first run. Uses the video's own captions when they exist, otherwise Whisper through a Groq or OpenAI key. `--no-whisper` keeps it free.
- Claude Code: `/plugin marketplace add bradautomates/claude-video`, then `/plugin install watch@claude-video`. Other agents: `npx skills add bradautomates/claude-video -g`.
- 14k stars on 11 commits: it spread fast and has had little hardening. MIT.
