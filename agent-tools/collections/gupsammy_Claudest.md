---
description: "A highly opinionated plugin marketplace for augmenting your Claude Code. Battle-tested skills and tools that actually work."
type: collection
url: https://github.com/gupsammy/Claudest
stars: 275
language: Python
pushed: 2026-06-11
---

## Contents

### Skills

- **brainstorm** `/plugins/claude-thinking/skills/brainstorm/`: This skill should be used when the user says "interview me about", "help me clarify", "stress-test my idea", "let's explore this concept", "challenge my assumptions about", "grill me on", "drill into my plan", or needs structured questioning to refine and articulate their thinking.
- **claw-advisor** `/plugins/claude-claw/skills/claw-advisor/`: This skill should be used when the user asks about OpenClaw configuration, troubleshooting, setup, architecture, or any OpenClaw question.
- **clean-branches** `/plugins/claude-coding/skills/clean-branches/`: This skill should be used when the user says "clean up branches", "delete merged branches", or "prune stale branches".
- **commit** `/plugins/claude-coding/skills/commit/`: This skill should be used when the user says "commit my changes", "commit this", "create a commit", "git commit", "save my work", or mentions committing code.
- **compress-video** `/plugins/claude-content/skills/compress-video/`: This skill should be used when the user asks to "compress this video", "reduce file size", "make this video smaller", "optimize for web", "shrink this video", "compress to under X MB", "reduce bitrate", "make it smaller without losing quality", "encode with H.265", or "re-encode this video".
- **convert-to-markdown** `/plugins/claude-utilities/skills/convert-to-markdown/`: This skill should be used when the user asks to "convert this page to markdown", "extract this webpage", "save this article", "grab content from URL", "get markdown from this link", "scrape this page", provides a URL to extract, or wants clean web content without ads and clutter.
- **convert-video** `/plugins/claude-content/skills/convert-video/`: This skill should be used when the user asks to "convert this video", "change format to mp4", "trim from X to Y", "cut the first X seconds", "speed up this video", "slow motion", "timelapse", "resize video", "scale down", "rotate video", "flip video", "remux", or any general FFmpeg video manipulation not covered by compress-video, make-gif, share-social, extract-audio, or extract-frames.
- **council** `/plugins/claude-thinking/skills/council/`: Multi-perspective deliberation on a question.
- **create-agent** `/plugins/claude-skills/skills/create-agent/`: This skill should be used when the user asks to "create an agent", "make an agent", "write an agent", "build a subagent", "add an agent to a plugin", "design an autonomous agent", "generate an agent file", "write a system prompt for an agent", "what frontmatter does an agent need", "create a specialized agent".
- **create-claw-skill** `/plugins/claude-claw/skills/create-claw-skill/`: This skill should be used when the user asks to "create an OpenClaw skill", "make a claw skill", "build a skill for OpenClaw", "write a SKILL.md for openclaw", "add a skill to openclaw", "generate openclaw skill frontmatter", "create a clawhub skill", "port a skill to OpenClaw", "convert a Claude Code skill to claw", "migrate my skill to openclaw", or wants to author a new skill or port an existing Claude Code skill for the pi-coding-agent / OpenClaw ecosystem.
- **create-cli** `/plugins/claude-skills/skills/create-cli/`: This skill should be used when the user asks to "design a CLI", "help me design command-line flags", "what flags should my tool have", "create a CLI spec", "refactor my CLI interface", "design a CLI my agent can call", or wants to design command-line UX (args/flags/subcommands/help/output/errors/config) before implementation or audit an existing CLI surface for consistency and composability.
- **create-skill** `/plugins/claude-skills/skills/create-skill/`: This skill should be used when the user asks to "create a skill" or "make a command".
- **extract-audio** `/plugins/claude-content/skills/extract-audio/`: This skill should be used when the user asks to "extract audio", "get the mp3", "strip audio from video", "rip audio", "save audio from video", "convert to audio", "get the soundtrack", "pull the audio track", "save as mp3", "export audio", or "separate audio from video".
- **extract-frames** `/plugins/claude-content/skills/extract-frames/`: Extracts first and/or last frames of every shot from a video using adaptive scene detection.
- **extract-learnings** `/plugins/claude-memory/skills/extract-learnings/`: Persist learnings to memory or maintain existing memories.
- **fetch-page** `/plugins/claude-claw/skills/create-claw-skill/examples/sample-command/`: Fetch and summarize a web page
- **generate-image** `/plugins/claude-content/skills/generate-image/`: Use for any image creation or editing request — logo, sticker, product mockup, nano banana, t2i, i2i, multi-reference compositing via generate.py.
- **get-pr-comments** `/plugins/claude-coding/skills/get-pr-comments/`: This skill should be used when the user says "get PR comments", "show PR feedback", "what comments on my PR", "PR review comments", "show me the review", "what did reviewers say", or asks about feedback on a pull request.
- **get-token-insights** `/plugins/claude-memory/skills/get-token-insights/`: Use this skill when the user wants to analyze Claude token usage, understand Claude API spending, check cache hit rates, review Claude Code workflow patterns (skills, agents, hooks), or get cost optimization recommendations.
- **improve-skill** `/plugins/claude-skills/skills/improve-skill/`: This skill should be used when the user asks to "improve a skill", "make this skill better", "add features to a skill", "this skill is missing something", "upgrade my skill", "what's missing from this skill", "the skill doesn't do X", "make this more useful", or wants to improve skill effectiveness rather than structural correctness.
- **make-changelog** `/plugins/claude-coding/skills/make-changelog/`: This skill should be used when the user asks to "create a changelog", "generate a changelog", "update my changelog", "fill in the changelog", "add a changelog", "CHANGELOG is missing entries", "changelog is out of date", "what's missing from my changelog", "changelog from git history", "write changelog", "release notes", or says "my project needs a CHANGELOG".
- **make-gif** `/plugins/claude-content/skills/make-gif/`: This skill should be used when the user asks to "make a GIF", "convert to GIF", "create a GIF from this video", "export as GIF", "turn this clip into a GIF", "make an animated GIF", or "gif this".
- **make-readme** `/plugins/claude-coding/skills/make-readme/`: This skill should be used when the user asks to "create a README", "generate a README", "make a readme", "write a README for my project", "need a README", "add a README", "document my project", "set up project docs", "readme with badges".
- **push-pr** `/plugins/claude-coding/skills/push-pr/`: This skill should be used when the user wants to create a pull request, or submit code for review.
- **recall-conversations** `/plugins/claude-memory/skills/recall-conversations/`: Recall, search, continue, or analyze past conversations.
- **repair-agent** `/plugins/claude-skills/skills/repair-agent/`: This skill should be used when the user asks to "repair an agent", "audit an agent", "fix my agent", "review agent quality", "check if my agent is well-written", "diagnose agent problems", "what's wrong with this agent", "improve this agent", or "what's wrong with this agent file".
- **repair-skill** `/plugins/claude-skills/skills/repair-skill/`: This skill should be used when the user asks to "fix my skill" or "audit this skill".
- **run-research** `/plugins/claude-research/skills/run-research/`: This skill should be used when the user asks to "research a topic", "run-research", "last30", "what's happening with X", "what are people saying about X", "find the best X", "X prompts", "latest on X", "X news", "what are people recommending for X", "research X for me", or wants to know what's trending, discussed, or debated about any subject in recent weeks.
- **search-youtube** `/plugins/claude-research/skills/search-youtube/`: This skill should be used when the user asks to "search YouTube", "find videos about", "get a transcript", "download subtitles", "extract audio from YouTube", "scan a channel", "research a topic on YouTube", "get video metadata", "what videos exist about", "download YouTube audio", "YouTube research", "summarize this video", "what is this video about", "pull captions from", "grab the audio from", or provides a YouTube/Vimeo/video URL and wants to extract information from it.
- **share-social** `/plugins/claude-content/skills/share-social/`: This skill should be used when the user asks to "optimize for Instagram", "YouTube Shorts format", "make it 9:16", "square video", "TikTok format", "Reels format", "prepare for social media", "encode for Twitter", "optimize for Facebook", "LinkedIn video", "crop for portrait", or mentions any platform-specific video format or upload requirements.
- **update-claudemd** `/plugins/claude-coding/skills/update-claudemd/`: This skill should be used when the user says "update CLAUDE.md", "refresh CLAUDE.md", "sync CLAUDE.md with the codebase", "reorganize CLAUDE.md", "optimize project instructions", or when CLAUDE.md is stale, verbose, or out of sync.
- **update-readme** `/plugins/claude-coding/skills/update-readme/`: This skill should be used when the user asks to "update my README", "refresh the README", "README is outdated", "sync README with the codebase", "improve my README", "keep README up to date", "fix the README", "my README is stale", "update the readme file", "README needs updating", "update readme from git history", or "readme is out of date".

### Plugins

- **claude-claw** `/plugins/claude-claw/`: OpenClaw tools: advisory, troubleshooting, and skill building for OpenClaw
- **claude-coding** `/plugins/claude-coding/`: Coding workflow skills: intelligent commits, push & PR, branch cleanup, CLAUDE.md maintenance, README generation, changelog creation, README updating, and GitHub Actions setup
- **claude-content** `/plugins/claude-content/`: Content creation skills: image generation, video compression, conversion, GIF creation, social media formatting, and audio extraction
- **claude-memory** `/plugins/claude-memory/`: Searchable conversation memory with full-text search
- **claude-research** `/plugins/claude-research/`: Cross-platform research skills: deep multi-source research across Reddit, X, YouTube, and the web, plus a standalone YouTube research toolkit
- **claude-skills** `/plugins/claude-skills/`: Skill and agent authoring tools: generate, audit, and improve Claude Code skills, commands, and agents
- **claude-thinking** `/plugins/claude-thinking/`: Structured thinking and multi-perspective deliberation tools
- **claude-utilities** `/plugins/claude-utilities/`: A collection of useful utilities, tools, and skills for Claude Code

### Subagents

- **architecture-auditor** `/plugins/claude-coding/agents/architecture-auditor.md`: Use this agent when you need architectural guidance or review.
- **code-auditor** `/plugins/claude-coding/agents/code-auditor.md`: Use this agent when you need code quality review — readability, correctness, dead code, naming, and consistency.
- **memory-auditor** `/plugins/claude-memory/agents/memory-auditor.md`: Use this agent when you need to verify existing memory entries against codebase ground truth — checking for stale paths, outdated versions, contradicted facts, and relative dates — and to prune the corpus by flagging superseded, redundant, and low-value entries.
- **performance-auditor** `/plugins/claude-coding/agents/performance-auditor.md`: Use this agent when you need to find performance bottlenecks — algorithmic complexity, inefficient data access, or resource-usage problems.
- **security-auditor** `/plugins/claude-coding/agents/security-auditor.md`: Use this agent when you need a security review — finding exploitable vulnerabilities in authentication, untrusted-input handling, secrets, or dependencies.
- **signal-discoverer** `/plugins/claude-memory/agents/signal-discoverer.md`: Use this agent when the user wants to mine recent conversation sessions for uncaptured knowledge — corrections, architectural decisions, recurring patterns, and behavioral preferences.
- **skill-lint** `/plugins/claude-skills/agents/skill-lint.md`: Use this agent when a skill needs structural linting after creation or improvement.
- **test-engineer** `/plugins/claude-coding/agents/test-engineer.md`: Use this agent when you need tests for implemented features or when test coverage analysis is needed.

## Notes
