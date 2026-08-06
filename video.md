# Video

Making, cutting, and understanding video with an agent. Spans skills, plugins, a CLI and a library — grouped here by *what you're trying to do*, because these tools substitute for each other and the comparison is the point.

> **Pick one per job, don't stack them.** Three of these render video from code and largely duplicate each other; installing all three gives you three competing command sets and three sets of API keys.
>
> **Everything here needs `ffmpeg`.** Install it once (`brew install ffmpeg` / `apt install ffmpeg`) — most of these shell out to it and fail confusingly without it.
>
> **Watch the paid dependencies.** Only HyperFrames renders with zero API keys. The rest require at least one paid or freemium account before they do anything useful.
>
> **Voice is a separate layer.** Transcription and narration live in [voice.md](./voice.md) — `video-use` runs on ElevenLabs Scribe, and the toolkit uses Qwen3-TTS.

## Rendering engines

*The substrate. Everything below is built on one of these, so pick here first — the license terms differ and they propagate to whatever you build.*

| | License | API | Notes |
|---|---|---|---|
| **HyperFrames** | Apache-2.0 | HTML + data attributes | No build step, deterministic output |
| **Remotion** | **Company license required** | React components | Largest ecosystem, most templates |
| **revideo** | MIT | TypeScript generators | Zero-dep core, lighter weight |

- **[HyperFrames](https://github.com/heygen-com/hyperframes)** `[CLI]` `[Library]` (HeyGen, 39.4k★) — define a video as an `index.html` file with `data-start` / `data-duration` timing attributes, animate with whatever you already know, render deterministically. The engine seeks through the page in headless Chrome, captures frames, and encodes with FFmpeg — identical input always produces identical output.
  - *Use when:* this is the default choice. No build step, no React requirement, no paid API to render, and the output is reproducible, which matters when an agent is iterating unattended.
  - *Animation runtimes:* GSAP, CSS, Lottie, Three.js, Anime.js, WAAPI, or a custom frame adapter.
  - *Needs:* Node 22+, FFmpeg. Apache 2.0.
  - `npx hyperframes init my-video` → `npx hyperframes preview` (live reload) → `npx hyperframes render`
  - *As agent skills:* `npx skills add heygen-com/hyperframes --full-depth` — installs 19 domain skills the agent loads on demand.
  - *Prebuilt blocks:* `npx hyperframes add flash-through-white`, `instagram-follow`, `data-chart`, etc.
  - *Note:* also the animation backend `video-use` reaches for, so these two compose rather than compete.

- **[Remotion](https://github.com/remotion-dev/remotion)** `[Library]` (55.7k★) — make videos programmatically with React. Compositions are React components; state, props and hooks all work as you'd expect, and a frame number drives everything.
  - *Use when:* you want the biggest ecosystem — templates, a player component, Lambda rendering, and three of the agent pipelines below already targeting it. Also the right pick if your team already thinks in React.
  - **License is the catch:** free for individuals and small teams, but for-profit organizations past a small headcount threshold need a paid **company license**. Confirm current terms at [remotion.pro](https://remotion.pro) before company work. This is the single biggest differentiator against HyperFrames and revideo.
  - *Needs:* Node, plus Chrome/Chromium for rendering. `npx create-video@latest`

- **[revideo](https://github.com/midrender/revideo)** `[Library]` (4k★) — videos as code, but through TypeScript generator functions rather than React. Borrows concepts from Remotion and Rive with a zero-dependency core.
  - *Use when:* you want Remotion's model without the company license, or you find the generator style clearer than React's frame-driven re-rendering for animation.
  - *Needs:* `npm init @revideo@latest`. Headless `renderVideo()`, parallelized across workers, plus a React `<Player/>` for browser preview. MIT.
  - *Trade-off:* far smaller ecosystem than Remotion. You'll write more from scratch.

## Agent-driven pipelines

*Describe a video, get an MP4. These sit on top of a rendering engine and add script, assets and orchestration.*

- **[claude-code-video-toolkit](https://github.com/digitalsamba/claude-code-video-toolkit)** `[Skill]` (Digital Samba, 1.9k★) — a full explainer-video pipeline: describe the video, it writes the script, generates voiceover, music and visuals, and renders an MP4 via Remotion. Leans on open-weight models running on your own cloud GPU rather than expensive hosted APIs.
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

> **The Remotion company license applies to every pipeline in this section** — they all render through it. See the Remotion entry above before using any of them commercially.

## Starting points

*Working code to build on rather than tools to run.*

- **[react-video-editor-pro](https://github.com/reactvideoeditor/react-video-editor-pro)** `[Library]` *(private repo — paid template)* — a web-based video editor built with React and Next.js: timeline editing, text overlays, sound integration. Sold as a foundation for building your own video editing app rather than a finished product. [reactvideoeditor.com](https://www.reactvideoeditor.com/)
  - *Use when:* you're building an editor UI and want the timeline, overlay and preview machinery already solved. That's the expensive part.
  - *Stack:* Next.js, React, Remotion (`@remotion/player`, `/lambda`, `/renderer`, `/bundler`), Tailwind, Radix UI, `mediabunny`. Optional PostHog and Sentry, both off by default.
  - *Rendering:* Remotion on AWS Lambda. Budget at least 2048MB — insufficient Lambda memory is the documented most-common failure, followed by timeouts on complex renders and assets not reachable from Lambda.
  - *Needs:* Node 14+ (in practice, current LTS), a free Pexels API key for stock media, and AWS configured per the Remotion Lambda setup guide. `NEXT_PUBLIC_DISABLE_RENDER=true` skips rendering during local work.
  - **Two licenses required for commercial use:** the RVE license *and* a separate Remotion license — the RVE license explicitly does not grant Remotion rights. It also prohibits resale, sublicensing, and use in competing video editing libraries or React component templates. No refunds, since purchase grants immediate source access.
  - *Structure:* versioned folders under `/components/editor/version-X.Y.Z`, each with its own page and changelog, so upgrades are additive rather than migrations.
  - *Note:* the link 404s for anyone without access — that's expected, not a dead link.

- **[remotion-dev/template-tiktok](https://github.com/remotion-dev/template-tiktok)** `[Template]` (272★) — TikTok-style animated captions generated with whisper.cpp.
  - *Use when:* you want word-level captions burned in and don't want to build the timing pipeline. Runs locally, no transcription API.

- **[remotion-dev/template-code-hike](https://github.com/remotion-dev/template-code-hike)** `[Template]` (215★) — animated code snippets with syntax highlighting and transitions between states.
  - *Use when:* making developer content — walkthroughs, release notes, tutorials.

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
- **[claude-video](https://github.com/bradautomates/claude-video)** (bradautomates, 14k★) — same job as the above, but one command and far broader reach. `/watch <url-or-path> <question>` downloads, extracts frames, transcribes, and hands both to Claude in one pass. Its real differentiator is explicit control over the token/fidelity tradeoff.
  - *Use when:* this is the one to reach for first. Zero-config, free by default, and it runs on ~50 agents rather than Claude Code alone.
  - *Sources:* YouTube, TikTok, Vimeo and local files via yt-dlp. Scene-aware frame selection with dedup.
  - *Token control:* `--detail transcript|efficient|balanced|token-burner` trades visual fidelity against cost · `--max-frames N` · `--resolution 1024` (bump this to read on-screen text) · `--no-dedup`.
  - *Targeted analysis:* `/watch <URL> --start 2:15 --end 2:45` — the right move on long videos.
  - *Needs:* yt-dlp + ffmpeg, auto-installed on first run via brew/apt/pip/winget. Transcription uses free native captions when they exist; falls back to Whisper via a Groq key (cheap, `whisper-large-v3`) or OpenAI. `--no-whisper` keeps it frames-only and free.
  - *Claude Code:* `/plugin marketplace add bradautomates/claude-video` → `/plugin install watch@claude-video`
  - *Other agents:* `npx skills add bradautomates/claude-video -g` (Codex, Cursor, Copilot, Gemini CLI, 50+)
  - *claude.ai web:* download `watch.skill` from releases → Settings → Capabilities → Skills → `+`
  - *Limits:* the capped modes (`efficient`, `balanced`) thin their frame coverage past ~10 minutes — use `--start`/`--end` rather than `token-burner` on long clips. MIT.
  - *Caution:* 14k★ on only 11 commits — it went viral fast and is very young. It works, but it hasn't been through much hardening.

> **These two overlap almost completely.** Take `claude-video` for reach, zero setup and token control; take `claude-video-vision` if you specifically want a **fully offline** pipeline (local whisper.cpp, no API calls ever) or Gemini's non-speech event detection. Don't install both — you'll get two competing ways to ask the same question.

## Considered and skipped

- **[Claude-Video-Editor-Plugin](https://github.com/danielrosehill/Claude-Video-Editor-Plugin)** (danielrosehill) — slash commands wrapping ffmpeg transcoding. 2★, 0 forks, 21 commits. Nothing here you can't get by asking Claude to write the ffmpeg invocation directly. Listed so it doesn't get re-evaluated later.
