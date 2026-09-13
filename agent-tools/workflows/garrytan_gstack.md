---
description: "Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA"
type: collection
url: https://github.com/garrytan/gstack
stars: 132k
language: TypeScript
pushed: 2026-09-11
---

## Contents

### Skills

- **alpha** `/test/fixtures/context-bill/tree-a/alpha/`: Fixture dispatcher with a mode table and forced-read references.
- **autoplan** `/autoplan/`: Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk and runs them sequentially with auto-decisions using 6 decision principles.
- **benchmark** `/benchmark/`: Performance regression detection.
- **benchmark-models** `/benchmark-models/`: Cross-model benchmark for gstack skills.
- **beta** `/test/fixtures/context-bill/tree-a/beta/`: Clean fixture tool skill with no forced reads and no mode table.
- **browse** `/browse/`: Drive a real browser through Aside: open a page, read it, click through a flow, take screenshots, check console errors.
- **canary** `/canary/`: Post-deploy canary monitoring.
- **careful** `/careful/`: Safety guardrails for destructive commands.
- **codex** `/codex/`: OpenAI Codex CLI wrapper — three modes.
- **context-restore** `/context-restore/`: Restore working context saved earlier by /context-save.
- **context-save** `/context-save/`: Save working context.
- **cso** `/cso/`: Chief Security Officer mode.
- **design-consultation** `/design-consultation/`: Design consultation: understands your product, researches the landscape, proposes a complete design system (aesthetic, typography, color, layout, spacing, motion), and generates font+color preview...
- **design-html** `/design-html/`: Design finalization: generates production-quality Pretext-native HTML/CSS.
- **design-review** `/design-review/`: Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems, AI slop patterns, and slow interactions — then fixes them.
- **design-shotgun** `/design-shotgun/`: Design shotgun: generate multiple AI design variants, open a comparison board, collect structured feedback, and iterate.
- **devex-review** `/devex-review/`: Live developer experience audit.
- **diagram** `/diagram/`: Turn an English description (or mermaid source) into a diagram triplet: the source, an editable .excalidraw file you can open on excalidraw.com, and rendered SVG + PNG.
- **document-generate** `/document-generate/`: Generate missing documentation from scratch for a feature, module, or entire project.
- **document-release** `/document-release/`: Post-ship documentation update.
- **freeze** `/freeze/`: Restrict file edits to a specific directory for the session.
- **gstack** `/`: Router for the gstack skill suite.
- **gstack-openclaw-ceo-review** `/openclaw/skills/gstack-openclaw-ceo-review/`: Use when asked to review a plan, challenge a proposal, run a CEO review, poke holes in an approach, think bigger about scope, or decide whether to expand or reduce the plan.
- **gstack-openclaw-investigate** `/openclaw/skills/gstack-openclaw-investigate/`: Use when asked to debug, fix a bug, investigate an error, or do root cause analysis, and when users report errors, stack traces, unexpected behavior, or say something stopped working.
- **gstack-openclaw-office-hours** `/openclaw/skills/gstack-openclaw-office-hours/`: Use when asked to brainstorm, evaluate whether an idea is worth building, run office hours, or think through a new product idea or design direction before any code is written.
- **gstack-openclaw-retro** `/openclaw/skills/gstack-openclaw-retro/`: Weekly engineering retrospective.
- **gstack-upgrade** `/gstack-upgrade/`: Upgrade gstack to the latest version.
- **guard** `/guard/`: Full safety mode: destructive command warnings + directory-scoped edits.
- **hackernews-frontpage** `/browser-skills/hackernews-frontpage/`: Scrape the Hacker News front page (titles, points, comment counts).
- **health** `/health/`: Code quality dashboard.
- **investigate** `/investigate/`: Systematic debugging with root cause investigation.
- **ios-clean** `/ios-clean/`: Remove the DebugBridge SPM package and all #if DEBUG wiring from an iOS app.
- **ios-design-review** `/ios-design-review/`: Visual design audit for iOS apps on real hardware.
- **ios-fix** `/ios-fix/`: Autonomous iOS bug fixer.
- **ios-qa** `/ios-qa/`: Live-device iOS QA for SwiftUI apps.
- **ios-sync** `/ios-sync/`: Regenerate the iOS debug bridge against the latest upstream gstack templates.
- **land-and-deploy** `/land-and-deploy/`: Land and deploy workflow.
- **landing-report** `/landing-report/`: Read-only queue dashboard for workspace-aware ship.
- **learn** `/learn/`: Manage project learnings.
- **make-pdf** `/make-pdf/`: Turn any markdown file into a publication-quality PDF.
- **office-hours** `/office-hours/`: YC Office Hours — two modes.
- **open-gstack-browser** `/open-gstack-browser/`: Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in.
- **pair-agent** `/pair-agent/`: Pair a remote AI agent with your browser.
- **plan-ceo-review** `/plan-ceo-review/`: CEO/founder-mode plan review.
- **plan-design-review** `/plan-design-review/`: Designer's eye plan review — interactive, like CEO and Eng review.
- **plan-devex-review** `/plan-devex-review/`: Interactive developer experience plan review.
- **plan-eng-review** `/plan-eng-review/`: Eng manager-mode plan review.
- **plan-tune** `/plan-tune/`: Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).
- **qa** `/qa/`: Systematically QA test a web application and fix bugs found.
- **qa-only** `/qa-only/`: Report-only QA testing.
- **retro** `/retro/`: Weekly engineering retrospective.
- **review** `/review/`: Pre-landing PR review.
- **scrape** `/scrape/`: Pull data from a web page through the Aside browser — your real, already signed-in sessions.
- **setup-browser-cookies** `/setup-browser-cookies/`: Import cookies from your real Chromium browser into the headless browse session.
- **setup-deploy** `/setup-deploy/`: Configure deployment settings for /land-and-deploy.
- **setup-gbrain** `/setup-gbrain/`: Set up gbrain for this coding agent: install the CLI, initialize a local PGLite or Supabase brain, register MCP, capture per-remote trust policy.
- **ship** `/ship/`: Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION, update CHANGELOG, commit, push, create PR.
- **skillify** `/skillify/`: Codify the most recent successful /scrape flow into a permanent browser-skill on disk.
- **spec** `/spec/`: Turn vague intent into a precise, executable spec in five phases.
- **sync-gbrain** `/sync-gbrain/`: Keep gbrain current with this repo's code and refresh agent search guidance in CLAUDE.md.
- **unfreeze** `/unfreeze/`: Clear the freeze boundary set by /freeze, allowing edits to all directories again.

## Notes

### 2026-08-06, from research

- Garry Tan's own Claude Code setup: 23 tools playing roles across the whole lifecycle, plus 8 power tools.
- Covers: planning (`/office-hours`, `/autoplan`, CEO, engineering, design and devex reviews), design (`/design-consultation`, `/design-shotgun`, `/design-html`, `/design-review`), development (`/review`, `/investigate`, `/qa`), release (`/ship`, `/land-and-deploy`, `/canary`, `/benchmark`), security (`/cso` runs OWASP and STRIDE), `/browse`, and `/codex` for a second opinion from another model.
- Bun 1.0+ and Git. `git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup`
- Use when: you want a complete opinionated setup to study, or to adopt whole.
