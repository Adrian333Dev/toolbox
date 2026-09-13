---
description: "Write HTML. Render video. Built for agents."
type: cli, library
url: https://github.com/heygen-com/hyperframes
stars: 49.3k
language: TypeScript
pushed: 2026-09-13
---

## Notes

### 2026-08-06, from research

- A video is an `index.html` with `data-start` and `data-duration` attributes. The engine steps through the page in headless Chrome, captures frames and encodes them with FFmpeg, so the same input always gives the same video.
- Use when: rendering video from code. The default. No build step, no React, no paid API to render, and the same output every run, which matters when an agent iterates alone.
- Animates with GSAP, CSS, Lottie, Three.js, Anime.js, WAAPI, or your own frame adapter.
- Node 22+, FFmpeg. Apache-2.0.
- `npx hyperframes init my-video`, then `npx hyperframes preview`, then `npx hyperframes render`.
- As skills: `npx skills add heygen-com/hyperframes --full-depth` installs 19 skills. Ready-made blocks: `npx hyperframes add flash-through-white`, `instagram-follow`, `data-chart`.
- `browser-use_video-use.md` uses it for animation, so the two work together.
