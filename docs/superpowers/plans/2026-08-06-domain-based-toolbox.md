# Domain-Based Toolbox Restructure — Implementation Plan

**Goal:** Convert the toolbox from kind-based files to 12 domain-based files, and absorb 14 inbox items plus 36 approved starred repos.

**Architecture:** Files are indexed by *what you're trying to do*. Because a domain file mixes kinds, every entry carries an inline type marker and its own install command — replacing what the old per-file headers conveyed once. `README.md` becomes a router holding library-wide rules. `inbox.md` stays as untriaged staging.

**Scale:** 33 existing entries + 14 inbox + 36 starred = 83 entries across 12 files. `video.md` already exists and is extended, not rewritten.

## Global Constraints

- **No entry may be lost.** Task 10 reconciles against the mapping tables below.
- **Type marker** on every entry: `[MCP]` `[Plugin]` `[Skill]` `[Library]` `[CLI]` `[App]` `[Collection]` `[Reference]`.
- **Install command** on every entry — no file-level shared install.
- **Match `video.md`'s format** — bold linked name, attribution + stars, one-sentence what-it-is, then `*Use when:*` / `*Needs:*` / `*Note:*` sub-bullets. It is the reference implementation.
- **Preserve existing editorial judgment verbatim.** The "don't stack these" warnings, the archived-postgres SQL-injection note, the "only add what fills a gap" framing, the benchmark caveat about skills showing no measurable gain. This is the library's actual value.
- **Star counts** come from `starred.min.json` where present; otherwise from the research already done.
- **Flag staleness.** Any entry whose last push is >6 months old carries a dated warning. Known: `coqui-ai/TTS` (2024-08-16), `humanlayer/12-factor-agents` (2025-09-21).
- Relative links (`./file.md`) for cross-references. Commit after each task.

---

## Target Structure

| File | Domain | Entries |
|---|---|---|
| `video.md` | Making, cutting, understanding video | 12 |
| `voice.md` | TTS, STT, dictation, lip-sync | 3 |
| `browser.md` | Browser automation, scraping, testing | 7 |
| `ui-design.md` | How the agent should design | 8 |
| `ui-libs.md` | Component/icon libraries and visual assets you ship | 12 |
| `code-quality.md` | Review, language servers, codebase comprehension | 8 |
| `security.md` | SAST, security review, reverse engineering | 6 |
| `prod-services.md` | Databases, payments, observability, infra | 8 |
| `marketing.md` | SEO, paid media, content | 4 |
| `agent-tooling.md` | Authoring extensions, runtimes, behavior modifiers | 11 |
| `collections.md` | Skill sets and indexes to install from | 8 |
| `automation.md` | Workflow automation | 2 |

**Deleted:** `mcp-servers.md`, `plugins.md`, `skills.md`, `libraries.md`, `apps.md`.
**Dissolved:** `productivity.md` was never created — Handy goes to `voice.md`.

---

## Entry Mapping

Source key: **E** = existing file · **I** = inbox · **S** = starred

### `video.md` — extend, do not rewrite (12)
Already present (8): HyperFrames, claude-code-video-toolkit, remotion-superpowers, remotion-dev/claude-code-plugin, video-use, claude-video-vision, claude-video, + the skipped Rosehill plugin.

| Add | Type | Src | Notes |
|---|---|---|---|
| `remotion-dev/remotion` 55.7k | Library | S | The substrate under three existing entries. Company license required above a small headcount — see remotion.pro |
| `midrender/revideo` 4k | Library | S | MIT, zero-dep core, TypeScript generator functions, not React. `npm init @revideo@latest` |
| `remotion-dev/template-tiktok` 272 | Template | S | TikTok captions via whisper.cpp |
| `remotion-dev/template-code-hike` 215 | Template | S | Code-snippet animations |
| `react-video-editor-pro` | Library | S | **BLOCKED — private repo.** Needs a description from the user. Mark `*(private repo)*` |

- [ ] Add a `## Rendering engines` section comparing HyperFrames (Apache-2.0) / Remotion (company license) / revideo (MIT) on license, API style and dependencies. The license axis is the decision-driver.
- [ ] Add a cross-link to `./voice.md` — `video-use` runs on ElevenLabs Scribe, the toolkit uses Qwen3-TTS.

### `voice.md` — new (3)
| Entry | Type | Src | Notes |
|---|---|---|---|
| Handy | App | E | Free, open source, offline speech-to-text. Moved out of `apps.md` |
| `met4citizen/HeadTTS` 167 | Library | S | Kokoro-82M ONNX. Browser (WebGPU/WASM) or Node 20+. Phoneme timestamps + Oculus visemes for lip-sync. MIT, no eSpeak/GPL |
| `coqui-ai/TTS` 45.9k | Library | S | **Stale — last push 2024-08-16.** Historically significant (XTTSv2), effectively frozen. List with the date and point at Kokoro-based options. MPL-2.0 |

### `browser.md` — new (7)
| Entry | Type | Src |
|---|---|---|
| Playwright MCP | MCP | E |
| Chrome DevTools MCP | MCP | E |
| `microsoft/playwright-cli` (`@playwright/cli`) 12.4k | CLI | I |
| `browser-use/browser-use` 108k | Library | E |
| `browser-use/browser-harness` 16.5k | CLI+Library | I |
| `firecrawl/firecrawl` 162k | Library+MCP | S |
| `scrapfly/scrapfly-scrapers` 1.1k | Library | S |

- [ ] Open with a "which of these" table. The key comparison is now **Playwright CLI vs Playwright MCP** — the CLI avoids loading tool schemas and verbose accessibility trees into context, so it is the token-efficient default; MCP suits long-running exploratory loops needing persistent state. Preserve the existing "Puppeteer MCP is deprecated" and DevTools-vs-Playwright notes.
- [ ] Firecrawl: note AGPL-3.0 self-host vs paid cloud, and that it ships an MCP.

### `ui-design.md` — new (8)
| Entry | Type | Src |
|---|---|---|
| frontend-design | Plugin | E |
| impeccable | Skill | E |
| taste-skill | Skill | E |
| ui-ux-pro-max-skill | Skill | E |
| web-design-guidelines | Skill | E |
| theme-factory | Skill | E |
| `VoltAgent/awesome-design-md` 107k | Collection | I |
| `dembrandt/dembrandt` 2.4k | CLI+MCP | I |

- [ ] Keep "These overlap — pick one or two, don't stack them all" on the first six.
- [ ] Separate section `## Feeding the agent a design system` for awesome-design-md (73 brand DESIGN.md files) and dembrandt (extracts any site's tokens to JSON/DTCG/DESIGN.md). These *supply* a design language rather than opine on taste.
- [ ] Cross-link to `./ui-libs.md`.

### `ui-libs.md` — new (12)
| Entry | Type | Src |
|---|---|---|
| `shadcn-ui/ui` 121k | Library | S |
| `birobirobiro/awesome-shadcn-ui` 20.2k | Collection | S |
| `shadcnblocks/kibo` 3.9k | Library | S |
| `vercel/ai-elements` 2.3k | Library | S |
| `jal-co/shieldcn` 774 | Skill+Action | E |
| `google/material-design-icons` 53.7k | Library | S |
| `TypeCellOS/BlockNote` 10.1k | Library | S |
| `AnmolSaini16/mapcn` 11.3k | Library | S |
| `excalidraw/excalidraw` 129k | Library | S |
| `fabricjs/fabric.js` 31.4k | Library | S |
| `storybookjs/storybook` 90.8k | Tooling | S |
| `img2threejs/img2threejs` 10k | Skill | I |

- [ ] Sections: `## shadcn ecosystem` (ui, awesome-shadcn-ui, kibo, ai-elements) · `## Icons` · `## Editors and canvas` (BlockNote, excalidraw, fabric.js) · `## Maps` · `## Component tooling` (storybook) · `## Generated assets` (img2threejs, shieldcn).
- [ ] `img2threejs` rationale: produces procedural Three.js *code* from a reference image, token-efficient, no mesh files. `git clone … ~/.claude/skills/img2threejs`, Python 3.10+, stdlib only.
- [ ] `shieldcn` rationale: README badges/charts/sponsor walls as SVG. Repo presentation, not interface design — do not put it with the design-guidance skills.

### `code-quality.md` — new (8)
| Entry | Type | Src |
|---|---|---|
| code-review | Plugin | E |
| typescript-lsp | Plugin | E |
| react-best-practices | Skill | E |
| nestjs-best-practices | Skill | E |
| Context7 | MCP | E |
| Vendor doc-skills *(guidance note)* | Skill | E |
| `Egonex-AI/Understand-Anything` 77.8k | Plugin | S |
| `CodeBoarding/CodeBoarding` 2.4k | CLI+Action | S |

- [ ] Sections: `## Review and correctness` · `## Framework practice` · `## Keeping the agent grounded` (Context7, typescript-lsp, vendor doc-skills) · `## Understanding an unfamiliar codebase` (Understand-Anything, CodeBoarding).
- [ ] Understand-Anything: tree-sitter + LLM pipeline → `.ua/knowledge-graph.json` + web dashboard. Node ≥18, LLM key or Ollama. MIT.
- [ ] CodeBoarding: layered architecture diagrams + Mermaid into `.codeboarding/`. Python 3.12/3.13 via pipx, LLM key. Distinct from call-graph tools — component-level summarization, not raw dependencies.
- [ ] Cross-link to `./agent-tooling.md` for ponytail (less code) and caveman (fewer tokens).
- [ ] Preserve: code-review's "distinct from verification" note; the nestjs "several forks exist" caveat.

### `security.md` — new (6)
| Entry | Type | Src |
|---|---|---|
| security-guidance | Plugin | E |
| Semgrep Guardian | Plugin | E |
| `zhaoxuya520/reverse-skill` 19.7k | Skill router | I |
| `Dryxio/auto-re-agent` 1.3k | Agent | S |
| `OWASP/CheatSheetSeries` 32.8k | Reference | S |
| `open-policy-agent/opa` 12.1k | Library | S |

- [ ] Sections: `## Always-on review` · `## Reverse engineering and pentest` (reverse-skill, auto-re-agent) · `## References and policy` (OWASP, OPA).
- [ ] reverse-skill: routes to jadx/apktool/Ghidra/radare2/Frida/YARA/Burp; 40+ CTF sub-skills. State plainly that it is scope-gated and for **authorized** testing, research and CTF only.
- [ ] Preserve "use the Guardian bundle, not the deprecated standalone `semgrep/mcp`."

### `prod-services.md` — new (8)
| Entry | Type | Src |
|---|---|---|
| Supabase MCP | MCP | E |
| MCP Toolbox for Databases | MCP | E |
| Sentry MCP | MCP | E |
| Stripe MCP | MCP | E |
| Cloudflare MCP | MCP | E |
| `drizzle-team/drizzle-orm` 35.4k | Library | S |
| `get-convex/convex-backend` 12.3k | Backend | S |
| `juspay/hyperswitch` 43.4k | Platform | S |

- [ ] Sections: `## Databases and data layer` · `## Observability` · `## Payments` (Stripe MCP, hyperswitch) · `## Infra`.
- [ ] Reproduce the archived `@modelcontextprotocol/server-postgres` SQL-injection warning as a **blockquote callout**, not a trailing bullet. Expand the MCP Toolbox entry: Google's, 16.1k, one server fronting ~20 engines (Postgres, MySQL, SQL Server, Oracle, MongoDB, Redis, Neo4j, Snowflake, BigQuery, ClickHouse…).
- [ ] Keep "add when your stack uses it" framing and every credential-scoping qualifier.

### `marketing.md` — new (4)
| Entry | Type | Src |
|---|---|---|
| claude-seo | Skill | E |
| codex-seo | Skill | E |
| claude-ads | Skill | E |
| claude-blog | Skill | E |

- [ ] Sections: `## Organic search` · `## Paid media` · `## Content`. The file is named `marketing.md`, not `seo-content.md`, because paid media is not SEO.
- [ ] State that all four share one author (AgriciDaniel) — a concentration risk worth knowing.
- [ ] Preserve the unvetted status of claude-ads and claude-blog.

### `agent-tooling.md` — new (11)
| Entry | Type | Src |
|---|---|---|
| skill-creator | Plugin | E |
| mcp-server-dev | Plugin | E |
| agentskills (spec) 23.9k | Reference | E |
| `vercel-labs/skills` 28.2k | CLI | S |
| `obra/superpowers` 268k | Framework | S |
| `eyaltoledano/claude-task-master` 27.9k | MCP+CLI | S |
| `humanlayer/12-factor-agents` 25.1k | Reference | S |
| `promptfoo/promptfoo` 24k | CLI+Library | S |
| `earendil-works/pi` 84.8k | CLI+Library | I |
| `DietrichGebert/ponytail` 97.3k | Skill | I |
| `JuliusBrussee/caveman` 96.4k | Skill | I |

- [ ] Sections: `## Authoring extensions` (skill-creator, mcp-server-dev, agentskills spec, vercel-labs/skills) · `## Methodology` (superpowers, 12-factor-agents, claude-task-master) · `## Testing agents` (promptfoo) · `## Alternative runtimes` (PI) · `## Behavior modifiers` (ponytail, caveman).
- [ ] `vercel-labs/skills` gets prominence: it is the `npx skills` installer the old `skills.md` told you to use but never listed. 76+ agents; symlink by default, `--copy` to freeze.
- [ ] **caveman honesty note:** 65% is prose-only. Real coding runs measured 8.5% (JetBrains, 86 tasks), and the skill itself adds ~1–1.5k input tokens per turn, so it can be net-negative on terse workloads. State this — the headline number is misleading.
- [ ] **ponytail:** claims 46% fewer LOC, 22% fewer tokens, 27% faster. Note these are the repo's own benchmarks.
- [ ] `12-factor-agents` staleness: last push 2025-09-21. It is a principles doc, so age matters less — say so rather than just flagging it.

### `collections.md` — new (8)
| Entry | Type | Src |
|---|---|---|
| `anthropics/skills` 167k | Collection | S |
| `addyosmani/agent-skills` 82.7k | Collection | S |
| `garrytan/gstack` 126k | Collection | S |
| `mattpocock/skills` 207k | Collection | E |
| `softaworks/agent-toolkit` | Collection | E |
| `VoltAgent/awesome-agent-skills` 29.7k | Index | I |
| `VoltAgent/awesome-claude-code-subagents` 24.1k | Index | I |
| `VoltAgent/awesome-openclaw-skills` 51.8k | Index | I |

- [ ] Lead with the discipline warning, carried verbatim from `skills.md`: most SWE skills showed no measurable gain in a mid-2026 benchmark, some hurt when conflicting with project context; treat any skill-*discovery* tool as untrusted input; **don't install whole sets**.
- [ ] Split `## Curated sets` (anthropics, addyosmani 24 lifecycle skills, gstack 23 tools, mattpocock, softaworks) from `## Indexes` (the three awesome-* — 1,500 / 154 / 5,300 entries respectively; these are things to search, not install).
- [ ] Preserve the softaworks cherry-pick list (`database-schema-designer`, `qa-test-planner`, `naming-analyzer`, `reducing-entropy`).
- [ ] gstack install is a clone into `~/.claude/skills/gstack` + `./setup`; needs Bun 1.0+.

### `automation.md` — new (2)
| Entry | Type | Src |
|---|---|---|
| `czlonkowski/n8n-mcp` 22.6k | MCP | I |
| n8n official MCP docs | Reference | I |

- [ ] n8n-mcp: 2,412 nodes + 2,352 templates documented. Hosted at dashboard.n8n-mcp.com, or `npx n8n-mcp`, or Docker.
- [ ] Note in the file that two entries is thin and this merges into `agent-tooling.md` if it hasn't grown.

---

## Tasks

Each task: write the file(s), verify entry count, commit.

- [ ] **Task 1 — README router.** Domain table for all 12 files. `## Conventions` defining the 8 type markers and the three install syntaxes centrally. `## Choosing what to install` holding the relocated "only add what fills a gap" rule + the merged executable-code/scope-credentials warning. Keep the mid-2026 snapshot caveat. New placement rule: *domain first; new file at 3+ entries, otherwise a section in the nearest file; `inbox.md` when unsure.* Commit.
- [ ] **Task 2 — `browser.md`** (7). Commit.
- [ ] **Task 3 — `ui-design.md`** (8) and **`ui-libs.md`** (12). Same task: they split one former domain and the boundary must be decided once. Commit.
- [ ] **Task 4 — `code-quality.md`** (8) and **`security.md`** (6). Both draw on `plugins.md`; splitting risks orphaning an entry. Commit.
- [ ] **Task 5 — `prod-services.md`** (8). Commit.
- [ ] **Task 6 — `marketing.md`** (4), **`automation.md`** (2). Commit.
- [ ] **Task 7 — `agent-tooling.md`** (11) and **`collections.md`** (8). Same task: the authoring-vs-install-from boundary is the whole point of splitting them. Commit.
- [ ] **Task 8 — `voice.md`** (3). Commit.
- [ ] **Task 9 — extend `video.md`** (+4, plus the private repo once described). Add the rendering-engine license comparison and the `voice.md` cross-link. Commit.
- [ ] **Task 10 — reconcile, then delete.** Run reconciliation *before* deletion:
  1. For each name in every mapping table, `grep -rl "<name>" *.md` returns exactly one domain file.
  2. Totals match: 12+3+7+8+12+8+6+8+4+11+8+2 = 89 entries across 12 files.
  3. Then `git rm mcp-servers.md plugins.md skills.md libraries.md apps.md`.
  4. `grep -rn 'mcp-servers\.md\|plugins\.md\|skills\.md\|libraries\.md\|apps\.md' *.md` → zero hits.
  5. Link check, markdown links only, excluding fenced code:
     ```bash
     grep -ohE '\]\(https://[^)]+\)' *.md | sed 's/^](//;s/)$//' | sort -u | \
       while read u; do printf '%s  %s\n' "$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 15 "$u")" "$u"; done
     ```
     All `200` except `reactvideoeditor/react-video-editor-pro`, which is private and will 404 — expected, and the reason it carries a `*(private repo)*` marker.
  6. Every `./*.md` reference resolves. Commit.
- [ ] **Task 11 — clear `inbox.md`.** All 14 items are placed by Task 9. Empty the list, keep the file and its heading as the staging area. Commit.

## Known Blockers

1. **`react-video-editor-pro`** — private, cannot be researched. Task 9 needs a user-supplied description. Everything else proceeds without it.
2. **`voice.md` naming** — chosen over `speech.md` because it extends to voice cloning and voice agents. Reversible; affects one filename and one README row.

## Self-Review

**Coverage:** 33 existing + 14 inbox + 36 starred = 83 approved entries; 89 counted across the tables because `video.md`'s 8 pre-existing entries are included in its total. No entry appears in two files. `openvideodev/react-video-editor` correctly excluded per user.

**Placeholders:** none, except the one blocker above, which is explicitly scoped and non-blocking for other tasks.

**Consistency:** type-marker vocabulary fixed in Global Constraints and used identically throughout. Star counts sourced from `starred.min.json`. Staleness flags applied to the two repos that need them.
