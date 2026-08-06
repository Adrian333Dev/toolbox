# Video

Making, cutting, and understanding video with an agent. Spans skills, plugins, a CLI and a library — grouped here by *what you're trying to do*, because these tools substitute for each other and the comparison is the point.

> **Pick one per job, don't stack them.** Three of these render video from code and largely duplicate each other; installing all three gives you three competing command sets and three sets of API keys.
>
> **Everything here needs `ffmpeg`.** Install it once (`brew install ffmpeg` / `apt install ffmpeg`) — most of these shell out to it and fail confusingly without it.
>
> **Watch the paid dependencies.** Only HyperFrames renders with zero API keys. The rest require at least one paid or freemium account before they do anything useful.

## Render a video from code

*You have no footage. You want motion graphics, an explainer, or a generated clip.*

- **[HyperFrames](https://github.com/heygen-com/hyperframes)** (HeyGen) — define a video as an `index.html` file with `data-start` / `data-duration` timing attributes, animate with whatever you already know, render deterministically. The engine seeks through the page in headless Chrome, captures frames, and encodes with FFmpeg — identical input always produces identical output.
  - *Use when:* this is the default choice. No build step, no React requirement, no paid API to render, and the output is reproducible, which matters when an agent is iterating unattended.
  - *Animation runtimes:* GSAP, CSS, Lottie, Three.js, Anime.js, WAAPI, or a custom frame adapter.
  - *Needs:* Node 22+, FFmpeg. Apache 2.0.
  - `npx hyperframes init my-video` → `npx hyperframes preview` (live reload) → `npx hyperframes render`
  - *As agent skills:* `npx skills add heygen-com/hyperframes --full-depth` — installs 19 domain skills the agent loads on demand.
  - *Prebuilt blocks:* `npx hyperframes add flash-through-white`, `instagram-follow`, `data-chart`, etc.
  - *Note:* also the animation backend `video-use` reaches for, so these two compose rather than compete.

- **[claude-code-video-toolkit](https://github.com/digitalsamba/claude-code-video-toolkit)** (Digital Samba, 1.9k★) — a full explainer-video pipeline: describe the video, it writes the script, generates voiceover, music and visuals, and renders an MP4 via Remotion. Leans on open-weight models running on your own cloud GPU rather than expensive hosted APIs.
  - *Use when:* you want *generated assets* — narration, AI footage, talking heads — not just motion graphics over your own content.
  - *Models:* Qwen3-TTS (voice), FLUX.2 (images), LTX-2 (video), ACE-Step (music), SadTalker (talking head).
  - *Needs:* Node 18+, Python 3.9+, and a Modal ($30/mo free tier) or RunPod account for GPU; Cloudflare R2 for storage (10GB free); ElevenLabs optional.
  - *Cost:* roughly $0.01 voiceover, $0.23 per AI clip, $0.02 per image, $0.10 talking head — about **$0.80 for a 5-minute video**.
  - `git clone https://github.com/digitalsamba/claude-code-video-toolkit.git && cd claude-code-video-toolkit && python3 -m pip install -r tools/requirements.txt && claude`, then `/setup` (~5 min) and `/video`
  - *Commands:* `/video` `/scene-review` `/design` `/brand` `/template` `/generate-voiceover` `/redub` `/voice-clone` `/publish` `/record-demo`
  - *Try before committing:* `cd examples/hello-world && npm install && npm run render` runs with no API keys at all.

- **[remotion-superpowers](https://github.com/dojocodinglabs/remotion-superpowers)** (Dojo Coding Labs, 90★) — same territory as the toolkit above, but wired to hosted APIs instead of your own GPU, and it adds an AI review loop that watches the render and gives feedback.
  - *Use when:* you'd rather pay per call than run cloud GPUs, or you specifically want `/review-video` and `/analyze-footage` scene understanding.
  - *Ships 5 MCP servers:* remotion-media (Suno/ElevenLabs/Whisper via KIE), TwelveLabs, Pexels, ElevenLabs, Replicate.
  - *Needs:* Node, Python + uv. **Two mandatory keys:** KIE (paid — carries music, SFX, TTS, image/video gen, subtitles) and TwelveLabs (free tier). Pexels, ElevenLabs and Replicate optional.
  - `/plugin marketplace add DojoCodingLabs/remotion-superpowers` → `/plugin install remotion-superpowers@remotion-superpowers` → `/setup`
  - *Commands:* `/create-video` `/create-short` `/find-footage` `/generate-image` `/generate-clip` `/add-voiceover` `/add-music` `/transcribe` `/add-captions` `/add-transitions` `/analyze-footage` `/review-video`
  - *Caution:* smallest project here by a wide margin (90★, one maintainer) while asking for the most API surface. Check recent commits before relying on it.

- **[remotion-dev/claude-code-plugin](https://github.com/remotion-dev/claude-code-plugin)** (official) — first-party skills for writing Remotion code, not a production pipeline. Loads Remotion best practices so Claude writes idiomatic compositions.
  - *Use when:* you're hand-writing a Remotion project and want the agent to stop inventing APIs. Not an alternative to the two above — it's the layer under them.
  - `claude plugin marketplace add remotion-dev/claude-code-plugin` → `claude plugin install remotion@remotion` → restart Claude Code
  - Invoke directly with `/remotion-best-practices`.
  - *Note:* the repo self-describes as "an internal package and has no documentation" — real docs live at [remotion.dev/docs/ai/claude-code-plugin](https://www.remotion.dev/docs/ai/claude-code-plugin).

> **Remotion licensing applies to three of the four above.** Remotion is free for individuals and small teams but requires a paid **company license** for for-profit organizations past a small headcount threshold — confirm at [remotion.pro](https://remotion.pro) before using it on company work. HyperFrames (Apache 2.0) has no such condition, which is a real point in its favor for commercial projects.

## Cut footage you already have

- **[video-use](https://github.com/browser-use/video-use)** (browser-use, 19k★) — the genuinely novel one. It never watches your video: it transcribes with ElevenLabs Scribe to get word-level timestamps and speaker turns (~12KB of text), then reasons about cuts *as text*, pulling on-demand visual composites only when it needs to see something. That sidesteps the token blowup of frame-dumping and lets it edit at language speed.
  - *Use when:* you have raw talking-head or screen-recording footage and want a tightened cut. "Edit these into a launch video" is the actual interface.
  - *Does:* strips filler words (`umm`, `uh`, false starts) and dead air, auto color grades per segment, 30ms audio fades at every cut, burned-in subtitles (default 2-word uppercase chunks), animation overlays via HyperFrames / Remotion / Manim / PIL. Self-validates the render at cut boundaries.
  - *Needs:* ffmpeg, an ElevenLabs API key; `yt-dlp` optional for pulling online sources. Cost scales with Scribe transcription minutes.
  - *Setup:* paste the setup prompt from the README into Claude Code and it clones, installs and asks for your key. Manually:
    ```bash
    git clone https://github.com/browser-use/video-use ~/Developer/video-use
    ln -sfn ~/Developer/video-use ~/.claude/skills/video-use
    cd ~/Developer/video-use && uv sync
    cp .env.example .env    # add ELEVENLABS_API_KEY
    ```
  - *Workflow:* `cd` into the folder holding your footage, launch `claude`, describe the edit. It inventories sources, proposes a strategy, waits for approval, then writes `edit/final.mp4`.
  - *Keeps state* in `project.md` so a later session resumes where you left off.

## Let Claude watch a video

*Video as input rather than output — a different capability from everything above.*

- **[claude-video-vision](https://github.com/jordanrendric/claude-video-vision)** (1.1k★) — extracts frames with ffmpeg so Claude literally sees them as images, alongside a timestamped audio transcript. Adapts frame rate and resolution to what you asked, so a "what's the UI bug at 0:42" query doesn't pull 4K frames of the whole file.
  - *Use when:* reviewing a screen recording, summarizing a talk, checking a competitor's demo, or pulling detail out of a YouTube link.
  - *YouTube:* handled via yt-dlp, preferring manual captions > auto captions > extracted audio.
  - *Audio backends:* **Gemini API** (catches non-speech events too, free tier, 1500 req/day) · **local whisper.cpp** (fully offline, no per-use cost, `brew install whisper-cpp`) · **OpenAI Whisper API** (paid, reliable).
  - *Needs:* Node 20+, ffmpeg. Interactive setup wizard walks through backend choice.
  - `/plugin marketplace add https://github.com/jordanrendric/claude-video-vision` → `/plugin install claude-video-vision`
  - *Note:* v1.0.0, tested on macOS Apple Silicon with the local backend. Other platforms are less proven.
- **[claude-video](https://github.com/bradautomates/claude-video)** (14.1k★) — Give Claude the ability to watch any video. /watch downloads, extracts frames, transcribes, hands it all to Claude.

## Considered and skipped

- **[Claude-Video-Editor-Plugin](https://github.com/danielrosehill/Claude-Video-Editor-Plugin)** (danielrosehill) — slash commands wrapping ffmpeg transcoding. 2★, 0 forks, 21 commits. Nothing here you can't get by asking Claude to write the ffmpeg invocation directly. Listed so it doesn't get re-evaluated later.
