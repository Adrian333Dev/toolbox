# Toolbox

Curated tools, libraries and resources worth remembering. Organized by **what you're trying to do** — read the one file that fits the question, not the whole set.

| File | Reach for this when… |
|---|---|
| [video.md](./video.md) | Making, cutting or understanding video |
| [voice.md](./voice.md) | Text-to-speech, speech-to-text, dictation, lip-sync |
| [browser.md](./browser.md) | Driving a browser, scraping, or end-to-end testing |
| [ui-design.md](./ui-design.md) | Getting the agent to produce UI that doesn't look generated |
| [ui-libs.md](./ui-libs.md) | Component libraries, icons, editors, canvas, visual assets |
| [code-quality.md](./code-quality.md) | Review, language servers, understanding an unfamiliar codebase |
| [security.md](./security.md) | Scanning your own code, reverse engineering, authorized pentest |
| [prod-services.md](./prod-services.md) | Connecting the agent to databases, payments, observability, infra |
| [marketing.md](./marketing.md) | SEO, paid media, content production |
| [agent-tooling.md](./agent-tooling.md) | Building agent extensions, changing agent behavior, alternative runtimes |
| [collections.md](./collections.md) | Skill sets and indexes to install *from* |
| [automation.md](./automation.md) | Workflow automation and integrations |
| [inbox.md](./inbox.md) | Untriaged — staging area before something earns a home |

## Conventions

Every entry carries a type marker, because a domain file mixes kinds and the marker tells you how you'll be installing it:

`[MCP]` server · `[Plugin]` · `[Skill]` · `[Library]` · `[CLI]` · `[App]` · `[Collection]` · `[Reference]`

The three install syntaxes, given once here rather than repeated per file:

- **MCP servers** — `claude mcp add <name> <endpoint-or-command>`. Many are remote/OAuth, so first use opens a browser.
- **Plugins** — `/plugin install <name>@<marketplace>`, usually preceded by `/plugin marketplace add <owner/repo>`. Restart Claude Code after installing.
- **Skills** — `npx skills add <owner/repo> --skill <name>`. Symlinked by default so `git pull` keeps them current; `--copy` freezes a snapshot. See [vercel-labs/skills](./agent-tooling.md).

## Choosing what to install

> **Only add what fills a gap your workflow doesn't already cover.** Brainstorming, spec-writing, planning, execution, research, explanation, capture, debugging and verification are already owned. A tool that duplicates one of those competes with it rather than helping.

> **Treat every MCP server, skill and plugin as executable code you're granting access to.** Skim the source, scope credentials tightly, and prefer read-only where the option exists. Treat any skill-*discovery* tool as untrusted input.

> **A mid-2026 benchmark found most SWE skills produced no measurable gain, and some hurt when they conflicted with project context.** Star counts measure attention, not usefulness. Where two tools overlap, the files here say so and pick one — follow that rather than stacking both.

## Where does a new entry go?

Domain first. A domain earns its own file at **3+ entries**; below that it's a section in the closest existing file. When you're unsure, it goes in [inbox.md](./inbox.md) until it earns a home.

> Snapshot: mid-2026. This ecosystem churns fast — check a repo's recent activity before installing, especially community entries. Entries known to be stale carry a dated warning.
