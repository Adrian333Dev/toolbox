# 🚀 OmniRoute — The Free AI Gateway

## 💰 ~1.47B Free Tokens / Month

> Stacking free tiers by hand is painful — dozens of SDKs, dozens of rate limits, and no idea how much you actually have. OmniRoute catalogs **444 free-tier entries across 34 recurring pool keys** and computes the token headline from the **16 pools with a published positive monthly budget plus five per-model Groq caps**, deduplicated by shared pool. Quotas that only open after a regional identity check (today: ModelScope) are shown apart, +~6M behind regional identity verification, and never summed into the headline. The result stays visible on the dashboard (`/dashboard/free-tiers`).

> Animated summary of the live `/dashboard/free-tiers` page. Full methodology (pool dedupe, credit tiers, provider terms): **[docs/reference/FREE_TIERS.md](docs/reference/FREE_TIERS.md)**.
>
> These figures are re-audited every two weeks against the live catalog and **move both ways** — a provider ends a free tier and the number drops; a new one lands and it climbs. We publish what the catalog actually computes, never a rounded-up best case.

⭐ Star the repo if OMNIROUTE helped you save money and make your work easier.

### 💬 Join the community

**👋 Follow the maintainer — get new providers, releases & tips first:**

**Questions, provider tips, roadmap & support → [Discord](https://discord.gg/U47eFqAXCn) · [Telegram](https://t.me/omnirouteOficial) · WhatsApp [🌍 Global](https://chat.whatsapp.com/FvuCbrpZmQ6I85n2vW5QIC?s=cl&p=a&mlu=4) / [🇧🇷 Brasil](https://chat.whatsapp.com/KWgatljAjmbELQory59Oti?s=cl&p=a&mlu=4) / [Portal](https://portal.sthub.com.br/communities/groups/st-hub/channels/Omniroute-World-8kRjmK)**

## 📈 The Gateway Keeps Growing

|                           | v3.8.49 |        **v3.8.50**        | `v3.8.51+`  |
| ------------------------- | :-----: | :-----------------------: | :---------: |
| 🌐 Providers              |   290   |          **352**          | more queued |
| 🧠 Unique chat model IDs  |  1185   |         **1312**          |      —      |
| 🖼️ Modality Bridge        |    —    | 🆕 vision + audio + video |      —      |
| 📡 Radar free catalog     |    —    |         🆕 opt-in         |      —      |
| ⚖️ Quota-aware scheduling |    —    |      🆕 Quota-Share       |      —      |
| 📊 Quota telemetry        |    —    |          🆕 live          |      —      |

**→ [Roadmap](ROADMAP.md) — riding the rail to `v3.9.0 LTS`**

## 🧩 Available

    🚀 Start
    🚀 Quick Start
    📦 Install
    🆓 Zero-config

    💡 Learn
    💥 The Promise
    🤔 Why OmniRoute
    🏆 What Sets Apart

    ⚙️ Features
    🎯 Combos
    🌐 Providers
    🔌 CLI & MCP

    🗜️ Compression
    🖥️ Where It Runs
    🔒 Private

    👀 See it
    🎬 In Action
    ✨ What's New
    🤖 Compatible CLIs

    💚 Support
    💚 Support / Donate
    💬 Community
    💖 Sponsors

    📦 Project
    🛠️ Tech Stack
    📖 Docs
    👥 Contributors

  🌐 In 51 languages

## 🆓 Works the second you install it — no keys, no config

```bash
# Fresh install, zero credentials — `auto` already works:
curl http://localhost:20128/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"auto","messages":[{"role":"user","content":"Hello!"}]}'
```

Prefer a specific free backend? Call `oc/…` (OpenCode Free) directly. Then graduate to `auto` and let OmniRoute pick.

📦 Copy-paste quickstart scripts for **Python, Node.js, PHP, and cURL** → [`examples/quickstart/`](examples/quickstart/)

# 💥 The Promise

# 🤔 Why OmniRoute?

## 🤝 Supported by our Open Source Friends

> **Want to join as an Open Source Friend?** These are the companies that back open source and help keep OmniRoute moving — and we say publicly where every token they give us goes. Reach out: [diegosouza.pw@outlook.com](mailto:diegosouza.pw@outlook.com)

      KimiMoonshot AI

      Thanks to Kimi (Moonshot AI), our founding Open Source Friend, for backing this project! Kimi is the AI lab behind the open-weight K2 and K3 model families — Kimi K3 delivers a 1M-token context window, native vision and frontier-level coding at a fraction of closed-model prices, and works out of the box with Claude Code, Codex and every coding tool OmniRoute serves.

      What Kimi's support powers: Kimi's API credits power OmniRoute's AI-validated release pipeline — the merge validation powered by Kimi K3 stage that reviews every pull request before it ships — plus day-to-day feature development. First-class Kimi support ships on both rails: the direct Kimi API (kimi-k3) and the Kimi Code coding plan (OAuth and API key). OmniRoute is also the first Brazilian open-source project in Kimi's support program. Get a Kimi API key with 15% extra credits →

      Cheaper Inferencecheaperinference.com

      Thanks to Cheaper Inference, an OmniRoute Open Source Friend, for backing this project! Cheaper Inference is a cost-ranked gateway that resells 42 frontier models — Claude, GPT-5.x, Gemini, Kimi K3, GLM, DeepSeek, Grok and MiniMax — behind one OpenAI-compatible endpoint, routing each request to the cheapest eligible provider without ever charging above the model maker's list price.

      First-class support in OmniRoute: Chat Completions, the native /v1/responses endpoint, vision, tool calling and 3 image models (grok-imagine, nano-banana-pro, nano-banana-2, reachable as cheaperinference/<model>). Get an API key →

Links tagged aff=omniroute are partner links. They fund the project at no extra cost to you.

🎟️ Affiliates Promo — free signup coupons from providers we don't sponsor (click to expand)

This section is for referral/coupon codes only. Sponsored partnerships live in 🤝 Supported by our Open Source Friends above. OmniRoute has no sponsorship or partnership with the providers listed here — these are public coupons anyone can use.

      AgentRouteragentrouter.org

      AgentRouter — affiliate signup · $100 free credits on signup (free server, expect higher latency — best for testing, not production). First-class support in OmniRoute since v3.8.50: Chat Completions, the Anthropic-compatible wire format and the OpenAI-compatible path. Available models include claude-opus-4-8, claude-opus-5, gpt-5.6-sol and more. Grab your $100 →

      ⚠️ Affiliate link — OmniRoute has no sponsorship or partnership with this provider.

Know another provider with a generous free signup coupon that benefits OmniRoute users? Open an issue and we'll add it here.

## 🎯 Combos — The Flagship

> A **combo** is a chain of models OmniRoute routes across **automatically**. If quota runs out, a provider fails, or costs spike, the combo can move to the next eligible healthy model. 🛡️

### ⚡ Zero-config — just use `auto`

No combo to create. Set your model to `auto` (or a variant) and OmniRoute builds a virtual combo from your connected providers, scored live:

  Model IDWhat it optimizes for
  auto🎯 Balanced default (LKGP — sticks to your last good provider)
  auto/coding🧑‍💻 Quality-first weights for code generation
  auto/fast⚡ Lowest latency first
  auto/cheap💰 Cheapest per token first
  auto/offline🔋 Most quota / rate-limit headroom first
  auto/smart🔭 Quality-first + 10% exploration to discover better models
  auto/lkgp📌 Explicit last-known-good-provider stickiness
  auto/chaos🧪 Fault-injection weights for resilience testing (chaos engineering)

##

### 🔀 Or build your own — 19 routing strategies

All **19** strategies — mix & match per combo step:

    #
    Strategy
    What it does

    1
    priority
    First-target ordered list — drain each before the next 🥇

    2
    fill-first
    Fill each target's quota fully before moving on

    3
    weighted
    Weighted random by per-target weight

    4
    round-robin
    Cycle through targets in order

    5
    p2c
    Power-of-two-choices random load balancing

    6
    least-used
    Pick the target with the lowest current load

    7
    random
    Uniform random pick (deduplicated)

    8
    strict-random
    Random without de-duplicating repeats 🎲

    9
    cost-optimized
    Minimize $ per request from live catalog pricing 💸

    10
    headroom
    Pick the target with the most remaining quota

    11
    reset-window
    Prefer the target whose quota window resets soonest

    12
    reset-aware
    Rank by quota reset time — short windows first 📊

    13
    context-relay
    Hand off context across targets for long conversations 🧠

    14
    context-optimized
    Pick the best fit for the current context size

    15
    cache-optimized
    Pin each reusable prompt prefix to the same account — maximize prompt-cache hits 🎯

    16
    lkgp
    Last-Known-Good Path — pins to the last successful provider, then falls back to rules

    17
    auto
    16-factor live scoring across every connection 🤖

    18
    fusion
    Fan out to a panel of models + a judge synthesizes one answer 🧬

    19
    pipeline
    Chain steps — each target's output feeds the next one 🔗

The Auto-Combo engine scores every candidate on **16 factors** (health, quota, cost, latency, task fit, quality, session availability…) — see [`docs/routing/AUTO-COMBO.md`](docs/routing/AUTO-COMBO.md).

##

### 🧱 Resilience is built in (3 independent layers)

📖 [Auto-Combo Engine](docs/routing/AUTO-COMBO.md) · [Resilience Guide](docs/architecture/RESILIENCE_GUIDE.md)

## 🏆 What Sets OmniRoute Apart

📊 Full methodology & per-feature detail vs 9router, OpenRouter, CLIProxyAPI & LiteLLM → [`docs/comparison/OMNIROUTE_VS_ALTERNATIVES.md`](docs/comparison/OMNIROUTE_VS_ALTERNATIVES.md)

## 💚 Support OmniRoute

OmniRoute is MIT-licensed and maintained in the open. If it saves you time or money, here's how to keep it independent — pick whatever fits you. Sponsorship never affects routing priority; it buys visibility, not ranking.

  ⭐ Star the repoFree — genuinely helps visibilityStar OmniRoute
  🐙 GitHub SponsorsOne-off or monthly · zero platform feegithub.com/sponsors/diegosouzapw
  ☕ Ko-fiQuick one-off tip, no signup for the donorko-fi.com/diegosouzapw
  🧋 Buy Me a CoffeeSmall, informal gesturebuymeacoffee.com/diegosouzapw
  🖐 LiberapayRecurring · non-profit · open sourceliberapay.com/diegosouzapw
  🇧🇷 PIX (Brazil)Instant, no feeskey & QR below
  ₿ CryptoBTC · ETH · USDT-TRC20 · USDC-Solanaaddresses below

**🇧🇷 PIX** — instant, no fees (Brazil)

Key (random): `5d865059-bc44-483a-962d-43ceb80126eb`

Pix copia-e-cola:

```
00020101021126580014br.gov.bcb.pix01365d865059-bc44-483a-962d-43ceb80126eb5204000053039865802BR5922OMNIROUTE CONTRIBUICAO6006BRASIL62070503***630475DD
```

₿ Crypto — BTC · ETH · USDT-TRC20 · USDC-Solana (click to expand)

  ₿ BTCBitcoin (SegWit)bc1qh00smz004sy85wyl28v77tenkt3ckl6eaep7fd
  Ξ ETHEthereum (ERC20)0x64Cf6B68A6Ff34288e89172950a2d00102337a84
  ₮ USDTTron (TRC20)TKAF41JpuQrHbKTnsQa9svJE2T192Hvsc2
  $ USDCSolana2emNNZzVVWQc3FQ2wk9M6qXUQmW8AKdjjL174fXR28Tu

⚠️ Send each coin only on the network shown — sending on the wrong network can lose the funds.

🐛 Found a bug or have feedback? Open a [Discussion](https://github.com/diegosouzapw/OmniRoute/discussions).

Developer notes: The project may generate a local .env file during npm install/postinstall for developer convenience. This file is intentionally ignored via .gitignore (see .gitignore) and must never be committed — if accidentally committed, rotate any exposed secrets and remove the file from history. See docs/DEVELOPER-ENVIRONMENT.md for guidance on managing local environment files and secrets.

## 📡 OmniRoute Radar

The main free-tier headline remains **~1.47B tokens/month** from the documented,
pool-deduplicated catalog above. Temporary provider signup credits can separately lift the first
month to **~2.10B**. Radar is an optional, signed catalog overlay for people who want fresher
free-model availability between OmniRoute releases; the community catalog and every existing free
feature remain free.

Supporters can receive the live catalog and additional provider opportunities. Its separate,
mutable ceiling is **approximately 3B tokens/month at most**, depending on provider availability.
That ceiling is not a guarantee: providers can change quotas, eligibility, models, or regions at
any time.

Radar is opt-in and GET-only. The OmniRoute client does not upload prompts, traffic, provider
configuration, usage telemetry, or local announcement-dismiss state. Learn about eligibility and
the current catalog at **[radar.omniroute.online/planos](https://radar.omniroute.online/planos)**.

## ✨ What's New

> Recent highlights from **v3.8.20 → v3.8.50**. Full history in [`CHANGELOG.md`](CHANGELOG.md).

- **🎛️ OmniConductor** — inbound A2A delegation to your agent fleet, Conductor skills on the Agent Card, and a dashboard panel with Faro push-to-talk voice chat. → [A2A Server](docs/frameworks/A2A-SERVER.md)
- **🛂 Adaptive admission & overload protection** — heavyweight chat requests queue instead of 503ing, with atomic RPM rolling leases per connection. → [Resilience Guide](docs/architecture/RESILIENCE_GUIDE.md)
- **🗂️ Canonical `/v1/models` ordering** — one contiguous provider-grouped block per provider (combos pinned first), stable across every catalog source. → [API Reference](docs/reference/API_REFERENCE.md)
- **🗜️ Compression hardening** — default-on inflation guard, Caveman packs for DE / FR / JA + Chinese (wényán), RTK filters for Gradle & .NET. → [Compression](docs/compression/COMPRESSION_ENGINES.md)
- **💸 Honest flat-rate cost** — subscription / coding-plan providers read **$0** in cost analytics; budget, quota & routing keep estimating. → [API Reference](docs/reference/API_REFERENCE.md)
- **⚖️ Quota-Share routing** — split a shared account's quota fairly across pooled keys, work-conserving so idle slices are lent out. → [Resilience Guide](docs/architecture/RESILIENCE_GUIDE.md)
- **🤖 One-command CLI/agent setup** — 13 registered `setup-*` commands; `omniroute run` launches 7 CLIs (Claude Code, Codex, Aider, Goose, OpenCode, Qwen Code, Gemini CLI); `omniroute configure` supports 10 targets with an interactive provider+model picker and per-context favorites. → [CLI Integrations](docs/guides/CLI-INTEGRATIONS.md)
- **🛰️ Remote mode** — drive a remote OmniRoute with scoped tokens (`connect` / `contexts` / `tokens`) + an `antigravity` OAuth helper for VPS installs. → [Remote Mode](docs/guides/REMOTE-MODE.md)
- **🧭 Smarter auto-routing** — `auto/<category>:<tier>` combos, **Fusion** (model panel + judge), task-aware routing, per-request model / mode / USD-budget overrides. → [Auto-Combo](docs/routing/AUTO-COMBO.md)
- **🗜️ Pluggable compression** — 12 composable engines + Compression Studios: LLMLingua-2, two-tier Ultra, omniglyph, per-step fidelity gate, GCF v3.2, drag-reorder editor. → [Compression](docs/compression/COMPRESSION_ENGINES.md)
- **🕵️ Transparent MITM decrypt (TPROXY)** — capture CLIs that ignore proxy env vars, with a per-SNI CA + trust-store installer. → [MITM/TPROXY](docs/security/MITM-TPROXY-DECRYPT.md)
- **💸 Cost telemetry everywhere** — `X-OmniRoute-*` cost/usage headers on every endpoint, cache-HIT savings header, per-key USD spend quotas. → [API Reference](docs/reference/API_REFERENCE.md)
- **🧠 Memory you control** — off by default, opt-in int8 vector quantization + typed decay, per-request `x-omniroute-no-memory`. → [Memory](docs/frameworks/MEMORY.md)
- **🛡️ Security** — prompt-injection guard on every LLM route (red-team suite), opt-in credential-masking guardrail (redacts leaked API keys/secrets in both directions), free DuckDuckGo last-resort web search, and an optional OIDC login gate for the dashboard (password login always stays available). → [Guardrails](docs/security/GUARDRAILS.md)
- **🖼️ New endpoints** — `/v1/ocr` (Mistral OCR) and `/v1/audio/translations` (Whisper-style) round out the media surface. → [API Reference](docs/reference/API_REFERENCE.md)
- **🎨 Image / video / audio generation** — one API for media: xAI Grok Imagine & Novita AI video, ComfyUI, Magnific, Adobe Firefly, Segmind, and speech providers such as ElevenLabs. → [API Reference](docs/reference/API_REFERENCE.md)
- **🌍 Deployment & ops** — reverse-proxy `basePath`, browser-language auto-detect, per-key device tracking, root-less MITM trust, zh-TW localization. → [Environment](docs/reference/ENVIRONMENT.md)
- **🤝 More providers & agents** — cloud agents (Codex Cloud, Cursor, Devin, Jules), Grok Build (xAI) with browser + OAuth login, Ollama first-class card, Claude Opus 5 & Sonnet 5, Kimi official partnership (Code/Web/Moonshot), Zed, Requesty, SenseNova, Yuanbao, Agnes AI… and a refreshed **352-provider catalog**. → [Providers](docs/reference/PROVIDER_REFERENCE.md)
- **📡 Routing transparency** — every response carries an `X-OmniRoute-Decision` header naming the strategy/provider/latency that served it, a new `cache-optimized` combo strategy + Auto-Combo `cacheAffinity` factor route repeat requests back to the connection holding the cached prefix, and a read-only `/v1/auto-combo/{channel}/candidates` endpoint exposes an `auto/*` channel's live candidate pool. → [Auto-Combo](docs/routing/AUTO-COMBO.md)
- **⚡ Local performance & infra** — one-click local Redis, Cloudflare Workers / Deno Deploy relay deployers, Bifrost & Mux as supervised embedded services. → [Embedded Services](docs/frameworks/EMBEDDED-SERVICES.md)
- **🧩 Also in the box** — plugin framework + marketplace, Omni/Agent/GitHub skills frameworks, Obsidian vault integration (22 MCP tools), OpenAI-compatible Batch & Files APIs, semantic response cache, gamification with leaderboards, ACP agent discovery (15 built-in agents), scheduled log export to BigQuery, `auto/chaos` fault injection, a Telegram bot bridge, an in-app version manager and LMArena-ELO free-provider rankings. → [Docs](docs/README.md)

## 🤖 Compatible CLIs & Coding Agents

> One config — `http://localhost:20128/v1` — and **every** AI IDE or CLI runs on free & low-cost models.

    Claude Code
    Codex CLI
    Cline
    Kilo Code
    Zoo Code
    Continue

    Aider
    ForgeCode
    jcode
    DeepSeek TUI
    CodeWhale
    OpenCode

    Factory Droid
    Copilot CLI
    Cursor CLI
    Smelt
    Pi
    Grok Build

    Hermes Agent
    OpenClaw
    Goose
    Open Interpreter
    Warp AI
    Agent Deck

＋ also works with · Kiro · Command Code · Antigravity · Windsurf · AMP · any OpenAI-compatible tool

📖 Per-tool setup for all 36 tools (26 CLI Code's + 10 CLI Agents) → [`docs/reference/CLI-TOOLS.md`](docs/reference/CLI-TOOLS.md) · 🧩 OpenCode plugin → [`@omniroute/opencode-provider`](https://www.npmjs.com/package/@omniroute/opencode-provider)

**Launch any supported CLI through OmniRoute in one command** — no config files written,
credentials injected per process, Qwen/Gemini get a throwaway isolated home:

```bash
omniroute run claude   --model openai/gpt-5.4          # Claude Code
omniroute run codex    --model glm/glm-5.2             # OpenAI Codex CLI
omniroute run aider    --model glm/glm-5.2 -- --message "reply OK"
omniroute run goose    --model glm/glm-5.2
omniroute run opencode --model glm/glm-5.2 -- run "reply OK"
omniroute run qwen     --model glm/glm-5.2 -- -p "reply OK"
omniroute run gemini   --model glm/glm-5.2 -- --skip-trust -p "reply OK"

# Or pick provider+model interactively and write the tool's own config:
omniroute configure codex          # also: claude opencode qwen aider goose gemini cline continue kilo
```

Every command honors the active remote context (`omniroute connect <host>`), `--dry-run`
previews the exact env/args without executing, and `--api-key-env NAME` keeps secrets out
of your shell history. → [CLI Integrations](docs/guides/CLI-INTEGRATIONS.md)

## 🌐 352 AI Providers — 152 Catalog-Marked Free

> **352 registered providers** across the canonical chat, media, search, local, cloud-agent and system collections, including **152 carrying `hasFree: true` discovery metadata**. The chat model registry covers **229 providers / 2,554 distinct provider-model pairs / 1,283 raw model IDs**; the separate free-budget catalog has **444 per-model rows**, **34 recurring pools** and **52 recurring/keyless free-forever providers**. These are different denominators by design; definitions and pool-deduped calculations live in the [Provider Reference](docs/reference/PROVIDER_REFERENCE.md) and [Free Tiers](docs/reference/FREE_TIERS.md).

### 🏢 Every major lab — through one endpoint

    OpenAI
    Anthropic
    Gemini
    xAI Grok
    DeepSeek
    Mistral

    Qwen
    Meta Llama
    Groq
    NVIDIA
    MiniMax
    Cohere

    Perplexity
    HuggingFace
    Together
    Fireworks
    Cloudflare
    Baidu

…and 330+ more — every icon resolves live from the dashboard's provider catalog. 📖 [Provider Reference](docs/reference/PROVIDER_REFERENCE.md)

### 🆓 Free Forever — $0, no card

    OpenCode ZenDeepSeek V4, Nemotron 3No token cap
    Kilo CodeAuto-router, Tencent Hy3Free forever
    RequestyGPT-OSS 120B, NemotronFree forever
    SiliconFlowDeepSeek V3.2 / R1Free tier
    Z.AI GLMGLM-4.7 / 4.5-FlashFree forever
    Baidu ERNIEERNIE 4.0Free forever

    Qoder AIQwen3-Max, Kimi-K2Unlimited FREE
    PollinationsGPT, Llama, ClaudeNo key needed
    Cloudflare AI50+ models10K neurons/day
    NVIDIA NIMGLM, MiniMax~40 RPM free
    CerebrasGLM 4.7, GPT-OSS1M tokens/day
    OpenRouter:free models+$10 → higher RPM

📖 Full machine-readable catalog → [`docs/reference/PROVIDER_REFERENCE.md`](docs/reference/PROVIDER_REFERENCE.md)

## 🖥️ Where OmniRoute Runs — Anywhere

> Same app, your machine, your rules. From a global npm install to **your phone** via Termux.

  PlatformInstallHighlights
  📦 npm (global)npm install -g omnirouteOne command, any OS
  🐳 Dockerdocker run … diegosouzapw/omnirouteMulti-arch AMD64 + ARM64
  🖥️ Desktop (Electron)npm run electron:buildNative window + system tray — Windows / macOS / Linux
  🎩 Menu-bar (OmniRouteTray)brew install --cask zoispag/tap/omniroute-traySupervises & auto-updates the server — macOS
  💪 ARMnative arm64Raspberry Pi, ARM servers, Apple Silicon
  📱 Android (Termux)pkg install nodejs && npx -y omnirouteRuns on your phone, 24/7, no root
  📲 PWA"Add to Home Screen"Fullscreen, offline, installable from browser
  🧩 OpenCode plugin@omniroute/opencode-providerNative OpenCode integration
  🤖 VS Code Copilot Chatinstall OmniCopilot extensionEvery OmniRoute model in the native Copilot Chat picker — stable & Insiders
  🛠️ From sourcenpm install && npm run devHack on it, contribute

📖 [Docker Guide](docs/guides/DOCKER_GUIDE.md) · [Desktop](electron/README.md) · [Menu-bar tray](https://github.com/zoispag/omniroute-tray) · [Termux](docs/guides/TERMUX_GUIDE.md) · [PWA](docs/guides/PWA_GUIDE.md) · [OpenCode](docs/frameworks/OPENCODE.md)

### 🧩 New: OmniRoute inside VS Code's native Copilot Chat

> No new sidebar, no new chat UI — every model OmniRoute serves shows up right in the
> **Copilot Chat model picker you already use**. Since VS Code 1.122, provider models work
> without a GitHub sign-in or a Copilot subscription — agent mode, tool calling and vision, for
> free.

Install the **[OmniCopilot](https://github.com/diegosouzapw/OmniCopilot)** extension, point it
at your OmniRoute server (defaults to `localhost:20128`), then open Copilot Chat → model picker
→ **Manage Models…** → **OmniRoute**.

  StoreLinkWorks with
  🧩 VS Code MarketplaceInstall →VS Code — stable & Insiders
  🔓 Open VSX RegistryInstall →Cursor, Windsurf, VSCodium, Theia, code-server, Gitpod, Antigravity, Kiro…

From inside the editor: open the **Extensions** view, search **"OmniRoute"**, click **Install**
— works the same way on both stores. Source, issues and the publishing runbook live at
[diegosouzapw/OmniCopilot](https://github.com/diegosouzapw/OmniCopilot).

📖 [VS Code Copilot Chat guide](docs/guides/VSCODE-COPILOT.md) — setup, what the picker shows, dashboard-in-a-tab, troubleshooting

### 🎩 New: OmniRouteTray — your gateway, living in the menu bar

> `omniroute serve` is happiest when it's always on. **[OmniRouteTray](https://github.com/zoispag/omniroute-tray)**
> turns that into a set-and-forget menu-bar app for macOS: it starts the server, keeps it alive
> across reboots, updates it in place, and puts your live token budget one click away — **no
> terminal window left open, no `npm install -g omniroute` to babysit.**

Built with [Tauri v2](https://v2.tauri.app/) (a Rust core the size of a rounding error), it ships
its own signed Node 24 runtime and manages an app-owned OmniRoute install, so it never fights your
global `node`/`bun`. It **shares your existing `~/.omniroute/` config and database** — so it's the
same OmniRoute you already run, just with a hat on. 🎩

  What it doesHow
  🟢 Supervises the serverSpawns omniroute serve, adopts an already-running instance instead of duplicating it
  📊 Live usage at a glanceProvider quota bars, Claude session/weekly limits with reset countdowns, 30-day cost breakdown
  🔄 Auto-updates in placeStaged install, atomic swap, rollback on failure — always on the newest release
  🚀 Start on loginOptional launch at login; tray-only, no dock icon
  🩺 Doctor & logsOne-click diagnostics and server log access

```sh
brew install --cask zoispag/tap/omniroute-tray
```

Prefer a download? Grab the latest .dmg from
Releases. Source, issues and build
docs live at zoispag/omniroute-tray.
💛 A community project by @zoispag — not an official OmniRoute release.

## 🔒 Private & Local-First

📖 [Authorization](docs/architecture/AUTHZ_GUIDE.md) · [Guardrails](docs/security/GUARDRAILS.md) · [Compliance](docs/security/COMPLIANCE.md)

## 🔌 Full CLI + A2A & MCP

> Beyond the server, OmniRoute is a **full command-line cockpit** with **80+ commands**, plus open agent protocols so an AI agent can drive it **on its own**.

### ⌨️ A real CLI (not just `start`)

```bash
omniroute               # serve gateway + dashboard (port 20128)
omniroute chat          # interactive TUI chat client (slash: /model /combo /skill /memory)
omniroute setup         # guided first-run wizard
omniroute doctor        # diagnose providers, ports, native deps
```

### 🛰️ Remote mode — run the CLI here, OmniRoute on a VPS

OmniRoute on a server? Drive it from your laptop with the **same CLI**. Log in once
with a scoped access token; every command then targets the remote.

```bash
omniroute connect 192.168.0.15            # password → scoped token, saved as a context
omniroute models list                     # ← runs against the REMOTE server
omniroute configure codex                 # ← picks a remote model, writes a local Codex profile
omniroute tokens create --name ci --scope read   # mint narrower tokens for other machines
omniroute contexts use default            # ← switch back to the local server
```

Tokens are scoped `read` / `write` / `admin`; process-spawning routes stay loopback-only.
📖 [Remote Mode](docs/guides/REMOTE-MODE.md)

### 🤝 Connect an agent — and it controls OmniRoute itself

Expose OmniRoute over **MCP**, **A2A**, a **REST API**, **webhooks** or a **remote CLI** — any capable agent (or your own code) gets the keys to the whole gateway: routing, providers, combos, cache, compression, memory — autonomously. HTTP endpoints below are served under `http://localhost:20128`.

  InterfaceEndpoint / commandUse it for
  🧰 MCP (stdio)omniroute --mcpPlug into Claude Desktop, Cursor, any MCP client
  🌊 MCP (HTTP)/api/mcp/streamRemote MCP — 110 tools, 33 scopes (enforcement opt-in), full audit trail
  📡 MCP (SSE)/api/mcp/sseStreaming MCP transport
  🤝 A2A/.well-known/agent.jsonAgent-to-agent, JSON-RPC 2.0 + SSE, 6 skills
  🌐 REST API/v1/*OpenAI-compatible — chat, embeddings, images, audio, OCR
  🔔 Webhooks/api/webhooksPush request / quota events to Slack, Discord, Telegram or any URL
  🛰️ Remote CLIomniroute connect Drive a remote instance with scoped access tokens

```bash
# Give Claude Code the full OmniRoute toolset over MCP:
claude mcp add-server omniroute --type http --url http://localhost:20128/api/mcp/stream
```

📖 [MCP Server](docs/frameworks/MCP-SERVER.md) · [A2A Server](docs/frameworks/A2A-SERVER.md) · [Agent Protocols](docs/frameworks/AGENT_PROTOCOLS_GUIDE.md)

## 🗜️ Save 15–95% Tokens — Automatically

### 📖 How it works — pipeline, architecture & savings math

Default stacked combo runs `RTK → Caveman`. When both act on the same tool/context payload, savings compound:

```txt
combined = 1 − (1 − RTK) × (1 − Caveman_input)
average  = 1 − (1 − 0.80) × (1 − 0.46) = 89.2%
range    = 78.4 – 94.6%
```

Code blocks, URLs, JSON and structured data are **always protected** by the preservation engine.

> **Why use many tokens when few tokens do the trick?** Every request passes through OmniRoute's compression pipeline **transparently** — no client changes. It's now a **stack of 12 composable engines** that run in order and mix & match per routing combo — building on ideas from [RTK](https://github.com/rtk-ai/rtk), [Caveman](https://github.com/JuliusBrussee/caveman) (⭐ 90K+), [LLMLingua-2](https://github.com/microsoft/LLMLingua), and [Troglodita](https://github.com/leninejunior/troglodita) (PT-BR).

### 🧱 The 12-engine stack

Engines run in pipeline order; each is independently toggleable and configurable per combo:

  #EngineWhat it does
  1Session-DedupDrops content repeated across turns (content-addressed, cross-turn)
  2CCRArchives large blocks behind retrieve markers, fetched on demand
  3LiteWhitespace + image-URL trimming (latency-light baseline)
  4RTKSmart tool-result filtering, dedup & truncation (command-aware)
  5Responses Tool OutputLossless-first JSON + bounded diagnostic compression for shell/patch/search/build outputs (Responses API)
  6HeadroomLossless tabular compaction of JSON arrays (~30%) via a vendored GCF codec
  7RelevanceExtractive sentence scoring against the last user query
  8CavemanRule-based prose compression (~65–75% on output)
  9AggressiveSummarization + progressive aging of old turns
  10LLMLingua-2ML semantic pruning via MobileBERT ONNX — code-safe, async
  11UltraHeuristic token pruning with an optional small-model (SLM) tier
  12OmniGlyphExperimental context-as-image encoding for measured Claude Fable 5 on the direct Anthropic wire; GPT 5.6 transformers remain fail-closed pending provider receipts. Four compression profiles (aggressive default, balanced, coding-safe, passthrough) (most aggressive; opt-in)

Code blocks, URLs and structured data are **always preserved** byte-perfect. **One-click presets** combine the engines:

  ModeSavingsBest for
  🪶 Lite~15%Always-on safe default
  🪨 Standard (Caveman)~30%Daily coding
  ⚡ Aggressive~50%Long tool-heavy sessions
  🔥 Ultra~75%Maximum savings
  🧰 RTK60–90%Shell/test/build/git output
  🔗 Stacked (RTK → Caveman)78–95%Mixed prompts + tool logs

**Real example — Standard mode:**

> **Before (69 tokens):** _"The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle. When you pass an inline object as a prop, React's shallow comparison sees it as a different object every time, which triggers a re-render. I would recommend using useMemo to memoize the object."_
>
> **After (19 tokens):** _"New object ref each render. Inline object prop = new ref = re-render. Wrap in useMemo."_
>
> **Same answer. 72% fewer tokens. Zero accuracy loss.** ✅

**PT-BR example — [Troglodita](https://github.com/leninejunior/troglodita) mode:**

> **Antes (42 tokens):** _"O problema é que o componente está re-renderizando porque uma nova referência de objeto está sendo criada em cada ciclo de renderização. Eu recomendaria usar useMemo."_
>
> **Depois (12 tokens):** _"Re-render: ref nova cada ciclo (objeto inline recriado). Usar `useMemo`."_
>
> **Mesma resposta. ~70% menos tokens. Precisão técnica intacta.** ✅

### 🎚️ Beyond the engines — output styles, the adaptive dial & per-request control

The 12 engines above shrink what goes **in**. Three more layers shape **how**, **when**, and what comes **out**:

- **🪄 Output Styles** _(output-axis steering)_ — inject deterministic, cache-safe response-shaping instructions; combinable, each at `lite` / `full` / `ultra` intensity. Adding a style is a one-line registry entry:
  - **Terse prose** — drop filler / articles / hedging; keep technical substance exact.
  - **Less code** — "lazy senior dev" YAGNI: smallest working change, no unrequested scaffolding.
  - **Ponytail (lazy senior dev)** — climb the YAGNI ladder, fix the root cause, smallest working diff.
  - **I have ADHD (action-first)** — next action leads, steps numbered, one concrete next step, no preamble.
  - **Terse CJK (文言)** — classical-Chinese ultra-terse style (locale-gated to `zh`).
- **🎯 Adaptive context-budget** _(the dial)_ — instead of one on/off token threshold, escalate the cheapest, most-lossless engines only as far as needed to **fit the model's context window**. Policy: `reserve-output` (default, model-aware) · `percentage` · `absolute`. Mode: `floor` (guarantee fit) · `replace-autotrigger` (your explicit choice wins) · `off` (legacy threshold).
- **🎛️ Where compression is decided** _(precedence, high → low)_ — per-request `x-omniroute-compression` header › routing-combo override › active named profile › adaptive / auto-trigger › panel default › off. The applied plan echoes back in the `X-OmniRoute-Compression: <mode>; source=<source>` response header.

Auto-trigger by token threshold, flip on the adaptive dial, pin a named profile, set a one-off per request, or assign a pipeline per routing combo — whichever fits the workload. An opt-in offline **eval harness** (`npm run eval:compression`) scores fidelity vs. savings on a pinned corpus before you promote a change.

📖 [`COMPRESSION_GUIDE.md`](docs/compression/COMPRESSION_GUIDE.md) · [`RTK_COMPRESSION.md`](docs/compression/RTK_COMPRESSION.md) · [`COMPRESSION_ENGINES.md`](docs/compression/COMPRESSION_ENGINES.md)

# ⚡ Quick Start

**1) Install & run**

```bash
npm install -g omniroute
omniroute
```

> 💡 See `npm warn ERESOLVE` or peer-dep warnings? [They're harmless](docs/guides/TROUBLESHOOTING.md#npm-install-warnings-eresolve--peer--deprecated).

Dashboard at `http://localhost:20128` · API at `http://localhost:20128/v1`.

**2) Connect a FREE provider (no signup)**

Dashboard → **Providers** → connect **Kiro AI** (free Claude, ~50 credits/month per account) or **OpenCode Free** (no auth) → done.

**3) Point your coding tool**

```txt
Base URL: http://localhost:20128/v1
API Key:  [copy from Dashboard → Endpoints]
Model:    auto            (zero-config smart routing — or any provider/model)
```

**4) Verify it's working**

```bash
curl http://localhost:20128/v1/models -H "Authorization: Bearer YOUR_KEY"
```

You should see your connected models listed. 🎉 That's it — start coding, and OmniRoute auto-routes & falls back for you.

If your client cannot send custom headers, OmniRoute also exposes tokenized compatibility aliases:

```txt
OpenAI catalog:   http://localhost:20128/vscode/YOUR_KEY/
OpenAI models:    http://localhost:20128/vscode/YOUR_KEY/models
OpenAI chat:      http://localhost:20128/vscode/YOUR_KEY/chat/completions
OpenAI responses: http://localhost:20128/vscode/YOUR_KEY/responses
Ollama chat:      http://localhost:20128/vscode/YOUR_KEY/api/chat
Ollama tags:      http://localhost:20128/vscode/YOUR_KEY/api/tags
```

Use these only for clients that cannot attach `Authorization: Bearer ...`. Header auth remains the preferred mode.

## 📦 More install methods — Docker, source, pnpm, Arch

**🐳 Docker**

```bash
docker run -d --name omniroute --restart unless-stopped --stop-timeout 40 \
  -p 127.0.0.1:20128:20128 -v omniroute-data:/app/data diegosouzapw/omniroute:latest
```

`:latest` follows the highest **published** stable SemVer. It does not track git `main`. Pin `:X.Y.Z` for GitOps. See [Docker Release Channels](docs/guides/DOCKER_GUIDE.md#release-channels).The image pins **`OMNIROUTE_MEMORY_MB=1024`**. That is enough for the dashboard and a light chat. **Coding agents** (`POST /v1/responses` from Claude Code, Codex, Grok, …) need a much larger V8 heap or the process `FATAL ERROR`s at ~12 GiB under two overlapping long contexts. Size the container above the heap (native buffers sit outside V8):

| Workload                            | Heap (`-e OMNIROUTE_MEMORY_MB`) | Container (`--memory`) |
| ----------------------------------- | ------------------------------- | ---------------------- |
| Dashboard / light chat              | `1024` (image default)          | ≥2 g                   |
| One coding agent                    | `8192`                          | ≥10 g                  |
| Two concurrent long `/v1/responses` | `10240`–`12288`                 | ≥12–16 g               |

```bash
docker run -d --name omniroute --restart unless-stopped --stop-timeout 40 \
  -e OMNIROUTE_MEMORY_MB=8192 --memory=10g \
  -p 127.0.0.1:20128:20128 -v omniroute-data:/app/data diegosouzapw/omniroute:latest
```

Full table: [Docker Guide — runtime RAM](docs/guides/DOCKER_GUIDE.md#runtime-ram-for-coding-agents).

> **Pre-release Docker channel:** `diegosouzapw/omniroute:next` and
> `diegosouzapw/omniroute:next-web` follow the current default `release/v*`
> branch. These mutable tags are intended only for testing unreleased fixes and
> are **not supported for production**. See
> [Docker Release Channels](docs/guides/DOCKER_GUIDE.md#release-channels).

**🥟 Bun**

Standard `bun install` and global installation (`bun install -g omniroute`) are supported via Bun runtime detection:

- **Built-in `bun:sqlite`**: OmniRoute uses Bun's built-in `bun:sqlite` driver when running under Bun, falling back to `better-sqlite3` on Node.js or `sql.js`.
- **Automatic Webpack bundler selection in dev**: Development (`bun run dev`) automatically detects Bun and disables Turbopack in favor of Webpack to prevent native V8 binding incompatibilities. Production builds (`bun run build`) follow `OMNIROUTE_USE_TURBOPACK` exactly as on Node: Turbopack by default, `OMNIROUTE_USE_TURBOPACK=0` to build with Webpack (`Dockerfile.bun` exposes it as a `--build-arg`).
- **Dedicated Bun Dockerfile**: Multi-stage `Dockerfile.bun` for native Bun production deployments (`docker build -f Dockerfile.bun -t omniroute:bun .`).

```bash
# Install and run with Bun
bun install
bun run dev
```

**🛠️ From source**

```bash
cp .env.example .env && npm install
PORT=20128 npm run dev
```

**📦 pnpm**

```bash
pnpm add -g omniroute@latest --allow-build=better-sqlite3 --allow-build=@swc/core && omniroute
```

**🐧 Arch Linux (AUR)**

```bash
yay -S omniroute-bin && systemctl --user enable --now omniroute.service
```

**🔧 Nix (Flake)**

```bash
# Using Nix flakes
nix develop
npm run dev

# Or using devbox
devbox run npm run dev
```

📖 [Docker Guide](docs/guides/DOCKER_GUIDE.md) — Compose profiles, Caddy HTTPS, Cloudflare tunnels.

**🦭 Podman**

```bash
# 1. Prepare the bind-mounted data directory
mkdir -p data

# 2. Linux + local rootless Podman only (never a remote Podman Machine client):
podman unshare chown 1000:1000 ./data

# 3. Set the runtime hint, build the local Compose image, and start
echo "CONTAINER_HOST=podman" >> .env
podman compose --profile base up -d --build
```

On macOS or Windows, Podman uses a remote Podman Machine: skip `podman unshare` and
follow the [topology-specific data directory guidance](contrib/podman/README.md#data-directory-permissions-by-topology).

📖 [Podman Guide](contrib/podman/README.md) — Compose builds, Podman Machine, and
Linux/systemd Quadlet setup.

**⚡ Faster / leaner install (skip the native build)**

The native SQLite engine (`better-sqlite3`) is an **optional** dependency, so a global
install never blocks on compiling from source: it uses a prebuilt binary when one matches
your platform/Node, and otherwise falls back transparently to a pure-JS engine
(`node:sqlite` on Node 22+, else the bundled `sql.js` WASM) — no build tools required.

To skip the post-install native warm-up entirely (CI, headless, or slow machines):

```bash
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute   # CI=1 also skips it
```

For the fastest installs prefer **pnpm** (content-addressed store + hard links — see above).
For a dashboard-free, headless runtime use the Docker `base` profile (above) or the
[Termux guide](docs/guides/TERMUX_GUIDE.md). The CLI and the web dashboard are served by the
same process on one port, so there is no separate CLI-only package today.

# 🎬 OmniRoute in Action

## 📹 Video Guides

Snapshot do painel em 2026-08-24 · Catálogo bruto: YT 809 | TT 137 | IG 124 · Frescor (dias): YT 1 | TT 21 | IG 22

      🎬 #1 — Instagram
      nick_saraev — 3,042,474 views

      🎬 #2 — Instagram
      theopenstack — 692,419 views

      🎬 #3 — TikTok
      milesreevesai — 620,400 views

      🎬 #4 — YouTube
      Vaibhav Sisinty — 391,109 views

      🎬 #5 — Instagram
      buildwithai.club — 347,652 views

**Ranking completo (URLs canônicas deduplicadas, `v > 0`, maior alcance):**

| #1                                                                                     | #2                                                                                    | #3                                                                                                      | #4                                                                                     | #5                                                                                        |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [nick_saraev — Instagram](https://www.instagram.com/reel/Da8ZthUPK98/) — **3,042,474** | [theopenstack — Instagram](https://www.instagram.com/reel/DaSs65mMrHk/) — **692,419** | [milesreevesai — TikTok](https://www.tiktok.com/@milesreevesai/video/7667980059189366019) — **620,400** | [Vaibhav Sisinty — YouTube](https://www.youtube.com/watch?v=QucgvbO5gsM) — **391,109** | [buildwithai.club — Instagram](https://www.instagram.com/reel/DbIt9AjK7-U/) — **347,652** |

| #6                                                                                  | #7                                                                                      | #8                                                                                          | #9                                                                                        | #10                                                                                         |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [nivedan.ai — Instagram](https://www.instagram.com/reel/DbIrCksJiqq/) — **331,973** | [vaibhavsisinty — Instagram](https://www.instagram.com/reel/Dae05TSAK1l/) — **263,744** | [Nick Automates — YouTube Shorts](https://www.youtube.com/shorts/fZIBK_4fKq8) — **218,174** | [theroshankrishna — Instagram](https://www.instagram.com/reel/Dapjs58z0P0/) — **186,786** | [midudev — TikTok](https://www.tiktok.com/@midudev/video/7664636453544152342) — **177,800** |

Métricas canônicas em 2026-08-24: **1.029 vídeos únicos** · **11.132.922 visualizações conhecidas** (`v > 0`) · **639 canais/perfis por rede**. O painel bruto contém 1.070 linhas; 41 duplicatas do Instagram foram normalizadas pela URL canônica, mantendo a maior contagem por vídeo.

> 🎬 **Made a video about OmniRoute?** Open an [issue](https://github.com/diegosouzapw/OmniRoute/issues/new) or [discussion](https://github.com/diegosouzapw/OmniRoute/discussions) with the link — we'll feature it here.

# 📧 Community & Help

> Everything in one place — follow the maintainer, chat with the community, or open an issue.

| Channel                                    | Where / how                                                                                                               |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| 💼 **LinkedIn** — follow the maintainer    | [linkedin.com/in/diegosouzapw](https://www.linkedin.com/in/diegosouzapw/)                                                 |
| 🐙 **GitHub** — follow for releases & tips | [@diegosouzapw](https://github.com/diegosouzapw)                                                                          |
| 💬 **Discord**                             | [discord.gg/U47eFqAXCn](https://discord.gg/U47eFqAXCn)                                                                    |
| ✈️ **Telegram**                            | [t.me/omnirouteOficial](https://t.me/omnirouteOficial)                                                                    |
| 🟢 **WhatsApp — 🌍 Global**                | [join the group](https://chat.whatsapp.com/FvuCbrpZmQ6I85n2vW5QIC?s=cl&p=a&mlu=4)                                         |
| 🟢 **WhatsApp — 🇧🇷 Brasil**                | [entrar no grupo](https://chat.whatsapp.com/KWgatljAjmbELQory59Oti?s=cl&p=a&mlu=4)                                        |
| 🌍 **Website**                             | [omniroute.online](https://omniroute.online)                                                                              |
| 🌍 **🌍StHub OmniRoute Community (free)**  | [portal sthub](https://portal.sthub.com.br/communities/groups/st-hub/channels/Omniroute-World-8kRjmK)                     |
| 📦 **Source code**                         | [github.com/diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)                                            |
| 🐛 **Report a bug**                        | [open an issue](https://github.com/diegosouzapw/OmniRoute/issues) — attach `npm run system-info` output                   |
| 🤝 **Contribute**                          | [CONTRIBUTING.md](CONTRIBUTING.md) · [Branching & Release Model](docs/ops/BRANCHING_MODEL.md) · pick a `good first issue` |
| 💚 **Support the project**                 | [Ways to support ↑](#-support-omniroute) · [GitHub Sponsors](https://github.com/sponsors/diegosouzapw)                    |

---

## 🛠️ Tech Stack

  LayerTechnology
  RuntimeNode.js 22.x / 24.x LTS — >=22.22.2 <23 || >=24.0.0 <27
  LanguageTypeScript 6.0 — 100% TypeScript across src/ and open-sse/ (zero any in core since v2.0)
  FrameworkNext.js 16 + React 19 + Tailwind CSS 4
  Databasebetter-sqlite3 (SQLite, WAL journaling) + LowDB (JSON legacy) — 122 domain modules, 173 migrations
  MemorySQLite FTS5 full-text + int8-quantized vector embeddings, typed decay
  SchemasZod 4 — MCP tool I/O validation + API contracts
  ProtocolsMCP (stdio / HTTP / SSE) + A2A v0.3 (JSON-RPC 2.0 + SSE)
  StreamingServer-Sent Events (SSE) + WebSocket bridge (/v1/ws)
  Compression12-engine pipeline — RTK, Caveman, LLMLingua-2 (MobileBERT ONNX), GCF, OmniGlyph
  Auth & securityOAuth 2.0 (PKCE) + JWT + API Keys + MCP scoped auth · AES-256-GCM at rest · DOMPurify
  Stealthwreq-js — JA3 / JA4 TLS fingerprint impersonation, 3-level proxy
  ResilienceCircuit breaker, exponential backoff, anti-thundering-herd, auto-combo self-healing
  Loggingpino — structured JSON logs with request context
  TestingNode.js test runner + Vitest — 39,000+ static test declarations across 5,100+ tracked test files (unit, integration, E2E, security, ecosystem)
  PlatformsDesktop (Electron) · Android (Termux) · PWA (any browser)
  CI/CDGitHub Actions — auto npm publish + Docker Hub on release
  LinksWebsite · npm · Docker Hub

## 📖 Documentation

### 📘 Getting Started

  DocumentDescription
  User GuideProviders, combos, CLI integration, deployment
  Setup GuideFull install methods, CLI tool configs, protocol setup, timeout tuning
  CLI Tools GuidePer-tool setup for Claude Code, Codex, Cursor, Cline, OpenClaw, Kilo, Copilot
  Remote ModeDrive a remote OmniRoute (VPS) from your laptop CLI via scoped access tokens
  Claude Code ConfigPoint Claude Code at OmniRoute (local/remote) with launch + per-model profiles
  Quick Start3-step install → connect → configure

### 🔧 Operations & Deployment

  DocumentDescription
  Docker GuideDocker run, Compose profiles, Caddy HTTPS, tunnels, image tags
  Podman GuideQuadlet systemd integration, podman-compose, SELinux
  VM DeploymentComplete guide: VM + nginx + Cloudflare setup
  Fly.io DeploymentDeploy to Fly.io with persistent storage
  Termux GuideRun OmniRoute on Android via Termux
  PWA GuideProgressive Web App install, caching, architecture
  Uninstall GuideClean removal for all install methods
  Environment ConfigComplete .env variables and references

### 🧠 Features & Architecture

  DocumentDescription
  ArchitectureSystem architecture, data flow, and internals
  Compression Guide7-option pipeline: off / lite / standard / aggressive / ultra / RTK / stacked
  RTK CompressionCommand-output compression, filters, trust, verify, raw-output recovery
  Compression EnginesCaveman, RTK, stacked pipelines, dashboard/API/MCP surfaces
  Compression Rules FormatJSON rule-pack schemas for Caveman and RTK filters
  Compression Language PacksLanguage detection and Caveman rule-pack authoring
  Resilience GuideCircuit breakers, cooldowns, queue, anti-thundering herd, TLS spoofing
  Auto-Combo Engine16-factor scoring, mode packs, self-healing
  Proxy Guide3-level proxy system, 1proxy marketplace, registry CRUD
  Free TiersConsolidated directory: 34 documented recurring pools / 444 cataloged free-tier entries
  Features GalleryVisual dashboard tour with screenshots
  Codebase DocumentationBeginner-friendly codebase walkthrough

### 🤖 Protocols & APIs

  DocumentDescription
  API ReferenceAll endpoints with examples
  OpenAPI SpecOpenAPI 3.0 specification
  MCP Server110 MCP tools, IDE configs, Python/TS/Go clients
  MCP Server GuideMCP installation, transports, and tool reference
  A2A ServerJSON-RPC 2.0 protocol, skills, streaming, task mgmt
  A2A Server GuideA2A agent card, tasks, skills, and streaming

### 📋 Project & Quality

  DocumentDescription
  ContributingDevelopment setup and guidelines
  Branching & Release ModelWhere PRs target (release/*), what main and tags mean
  ChangelogFull per-version release history
  Security PolicyVulnerability reporting and security practices
  i18n Guide42-language support, translation workflow, RTL
  Release ChecklistPre-release validation steps
  Coverage PlanTest coverage strategy for 39,000+ static test declarations across 5,100+ tracked test files

# ⭐ Top Contributors

> OmniRoute is shaped by a passionate open-source community. These individuals have made exceptional contributions that directly impact the quality, stability, and reach of the project. **Thank you.**

### External contributors by merged pull requests

  RankContributorMerged PRs~Changed lines
  1backryun190227,977
  2oyi77180407,678
  3rdself14580,663
  4JxnLexn128387,049
  5KooshaPari101125,747
  6herjarsa88230,872
  7RaviTharuma7955,106
  8maxmad64bis69394,715
  9artickc5933,260
  10HouMinXi5147,334
  10chirag127515,153
  12xz-dev50245,976
  13hartmark4752,185
  14rqzbeh39143,181
  15dhaern3419,559
  16Dingding-leo331,986
  17NomenAK3213,854
  18MumuTW3016,953
  19benzntech2911,641
  20pacocartones249,331
  20Prudhvivuda246,312

Frozen at live release/v3.8.50 tip dafb4ae808, with merges through 2026-08-24 05:26:03 UTC. The paginated GitHub GraphQL census contains 5,911 merged PRs: 2,707 by the repository owner, 179 by Dependabot, and 3,025 external PRs from 535 distinct contributors. “Changed lines” is GitHub additions + deletions and includes generated files, lockfiles, catalogs, translations and documentation; it is churn, not authored LOC. Ties at the cutoff are retained.

### GitHub-attributed commits

        backryun

      🥇 220 GitHub-attributed commits

        Paijo

      🥈 219 GitHub-attributed commits

        Randi

      🥉 108 GitHub-attributed commits

        Ravi Tharuma

      🏅 81 GitHub-attributed commits

        Chris

      🏅 70 GitHub-attributed commits

        Markus Hartung

      🏅 69 GitHub-attributed commits · tied #6

        Dizzle

      🏅 69 GitHub-attributed commits · tied #6

        Jan Leon

      🏅 64 GitHub-attributed commits

        zenobit

      🏅 62 GitHub-attributed commits

        Bob.Hou

      🏅 51 GitHub-attributed commits · tied #10

        Xiangzhe

      🏅 51 GitHub-attributed commits · tied #10

Rechecked at 2026-08-24 06:14:31 UTC: GitHub-attributed commits reported by the repository Contributors API for the release/v3.8.50 default branch. The API returned 525 identities (415 users, 2 bots, 108 anonymous); this table excludes the maintainer, bots and anonymous identities and retains competition ties. It is distinct from both the merged-PR ranking above and the 639-person Git-metadata census below.

> 🙏 These contributors' features, bug fixes, and infrastructure improvements are a **core part** of what makes OmniRoute reliable and feature-rich. Every pull request, every test case, and every i18n translation file matters. Open source is built by people like them.

---

## 💖 Sponsors

A heartfelt thank-you to the people who fund OmniRoute out of their own pocket — every contribution keeps the project free, independent and moving.

        Andrew

      💛 Active monthly sponsor

        Vlad I

      💛 Active monthly sponsor

        Paco Cartones

      💛 Active one-time sponsor

        Prof. Igor Morais

      💛 Past one-time supporter

        longtao

      💛 Past one-time supporter

… and others who prefer to stay private 💛

Public GitHub Sponsors revalidated on 2026-08-24. GitHub's activeOnly status determines the active labels above; previously disclosed public one-time supporters remain thanked, and private sponsors remain anonymous.

💖 Become a sponsor → — every dollar keeps OmniRoute free and independent.

## 👥 600+ Contributors

Audited on 2026-08-24 at frozen base ac02c5b42f and rechecked at live release/v3.8.50 tip dafb4ae808: 639 normalized human Git identities — 407 appear as commit authors (including the maintainer) and 232 only in explicit Co-authored-by trailers. The census normalizes GitHub noreply handles, excludes 26 bot/agent/service/placeholder identities, and does not merge ordinary email addresses merely because their display names match.

### How to Contribute

1. Fork the repository
2. Branch from the **active** `release/vX.Y.Z` tip (not `main`) — see [Branching & Release Model](docs/ops/BRANCHING_MODEL.md)
3. Create your feature branch (`git checkout -b feat/amazing-feature`)
4. Commit your changes (`git commit -m 'feat: add amazing feature'`)
5. Push to the branch (`git push origin feat/amazing-feature`)
6. Open a Pull Request with **base = that `release/vX.Y.Z` branch**

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Releasing a New Version

```bash
# Create a release — npm publish happens automatically
VERSION=x.y.z
gh release create "v${VERSION}" --title "v${VERSION}" --generate-notes
```

## 📊 Stars

## 🌍 StarMapper

## 🙏 Acknowledgments

OmniRoute stands on the shoulders of giants. It started as a fork of **[9router](https://github.com/decolua/9router)** and a TypeScript port of the Go project **[CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI)** — and from there, every subsystem below was inspired by an open-source project that got there first. Each one shaped a concrete piece of OmniRoute. This is our thank-you to all of them. 🙏

> ⭐ star counts verified from GitHub's REST API on August 24, 2026 — go give these projects a star. Counts are an exact dated snapshot and will naturally change.

### 🧬 Lineage & gateway

  Project⭐How it inspired OmniRoute
  9router26,161The original project this fork is built on — extended here with multi-modal APIs and a full TypeScript rewrite.
  CLIProxyAPI48,497The Go implementation that inspired this JavaScript / TypeScript port.
  LiteLLM57,100The AI gateway whose public pricing dataset feeds our cost-tracking sync and whose provider-normalization model informed our routing.
  codex-chatgpt-web1,410MIT source adapted into the vendored ChatGPT Web → Codex Responses bridge, including browser-session, response-framing, usage and web-search adapters.
  free-claude-code48,112Patterns ported into stream recovery, no-thinking aliases, fallback web search, sliding-window limits, log redaction and hardened launcher flows.
  composer-api322Cursor Composer tool-choice, output-constraint and tool-commit patterns adapted into the native Cursor executor.
  codex-multi-auth457Fresh-login and refresh-token rotation patterns ported into Codex OAuth reauthentication.
  opencode-anthropic-auth510Claude Code-compatible transform defaults and billing-header behavior generalized into OmniRoute's config-driven bridge.
  grok2api-merged2Its Grok model mappings, fake-TypeError Statsig generator, request and device defaults, and NDJSON response processor were materially adapted into OmniRoute's Grok Web executor.
  TQZHR/grok2api705The principal transitive code source behind grok2api-merged; its model, header, payload, Statsig and processor implementations are preserved in the Grok Web lineage.
  chenyme/grok2api7,520The underlying MIT source for Grok payload and device defaults, the Statsig generator, and the result.response processor carried through TQZHR and grok2api-merged.
  grok2api-pro27A transitive source credited by grok2api-merged for its proxy-pool layer; OmniRoute preserves that lineage notice but does not claim a proxy-pool port in its bounded Grok Web executor.
  GrokProxy50Its cookie-authenticated Grok proxy and result.response.token streaming pattern informed OmniRoute's Grok Web transport.
  GrokBridge5The original Grok Web implementation consulted its HTTP/browser upstream design; its direct HTTP path derives from GrokProxy, so no independent code port is claimed.
  grok-web-api14Its Rust ChatOptions and response-envelope schemas informed OmniRoute's TypeScript Grok request and streaming-response types.

### 🗜️ Context & token compression — engines

  Project⭐How it inspired OmniRoute
  Caveman100,538The viral "why use many token when few token do trick" project — its caveman-speak philosophy powers our standard compression mode and 30+ filler/condensation rules.
  RTK – Rust Token Killer77,185High-performance command-output compression — inspired our RTK engine, JSON filter DSL, raw-output recovery and the stacked RTK → Caveman pipeline.
  headroom67,310Reversible context-compression (SmartCrusher) — inspired our headroom engine and the ccr retrieve-marker pattern.
  LLMLingua6,598Prompt-compression research (LLMLingua / LLMLingua-2) — inspired our async, code-safe, fail-open llmlingua engine.
  llmlingua-2-js31The JS/ONNX port (MobileBERT / XLM-RoBERTa) used as the worker-thread backend for our LLMLingua engine.
  Troglodita40PT-BR token compression — powers our pt-BR language pack: pleonasm reduction and filler removal tuned for Brazilian-Portuguese grammar.
  ponytail108,957The viral "lazy senior dev" YAGNI-coder skill — inspired our less-code Output Style: smallest-working-change steering that cuts _generated_ code (the output-axis sibling to Caveman's terse prose).
  i-have-adhd23,526Its action-first, ADHD-friendly response style was adapted into OmniRoute's concise output style across five languages.

### 🧩 Compact formats, token research & code-aware tooling

  Project⭐How it inspired OmniRoute
  TOON25,233Token-Oriented Object Notation — its columnar, header-plus-rows model shaped our tabular compaction stage.
  GCF – Graph Compact Format41Its compact graph format and generic-profile design informed OmniRoute's tabular compaction and Headroom codec format.
  gcf-typescript4The MIT TypeScript implementation directly vendored and extended as the Headroom generic-profile codec.
  token-optimizer-mcp494Brotli/SQLite cache + per-session context-delta — inspired our session-dedup engine.
  token-savior1,122Bash-output compaction + MCP profiles — inspired our compression bail-out discipline and MCP tool-manifest reduction.
  token-saver138Content-aware, per-file-type output compression with failure-aware bail-out — validated our per-type dispatch and minimum-gain skip.
  token-optimizer1,951"Find the ghost tokens" — its offload + recoverable-handle pattern informed our CCR offload thinking.
  TokenMizer28A session-graph + cross-turn line-dedup blueprint that informed our session-dedup design.
  OmniCompress3Rust columnar-JSON + content-addressed retrieve + cross-message dedup — validated our headroom/ccr/session-dedup engine design and the cache-stable "compressed form is position-independent" invariant.
  mcp-compressor113MCP tool-schema/description compression — informed our MCP tool-manifest cardinality reduction.
  RepoMapper197Aider-style repo-map ranking — informed our repo-map / retrieval-ranking exploration.
  quiet-shell-mcp4Declarative shell-output reduction over MCP — validated our declarative bash-output compaction.
  ts-morph6,162TypeScript Compiler API toolkit — inspired our parser-based comment removal that preserves string, template and regex literals.

### 🧠 Memory & RAG

  Project⭐How it inspired OmniRoute
  Mem063,902Universal memory layer — its proxy-as-write/read-boundary model shaped our memory architecture.
  Letta (MemGPT)24,382Stateful agents with tiered memory — inspired our Context Control & Recovery (CCR) tiered model.
  WFGY1,781The ProblemMap taxonomy of 16 recurring RAG/LLM failure modes — the shared vocabulary in our troubleshooting guide.

### 🛰️ Traffic inspection, MITM & transparent proxy

  Project⭐How it inspired OmniRoute
  llm-interceptor66MITM interception/analysis of coding-assistant ↔ LLM traffic informed early Traffic Inspector requirements. Four previously derived modules — SSE merging, conversation normalization, secret masking and header sanitization — have been replaced by independent clean-room implementations based on public protocol standards. The two host-passthrough surfaces (passthrough.ts and _internal/bypass.cjs) remain OmniRoute-internal implementations classified independently; they were not rewritten as part of that replacement.
  ProxyBridge5,995Transparent per-process proxy routing — inspired our crash-safe MITM teardown, socket idle-timeouts, /proc process attribution and TPROXY capture.

### 📚 Model data, observability & UI

  Project⭐How it inspired OmniRoute
  models.dev6,555Open database of AI model specs, pricing and capabilities — synced natively into our model catalog.
  React Flow / xyflow38,108The node-based graph library powering our real-time Compression Studio and Combo/Routing Studio.
  LangGraph40,314LangGraph Studio's live workflow-graph visualization inspired our Studios' real-time cascade view.
  Langfuse33,592Its trace → span → generation observability model shaped our Compression Studio waterfall.
  Kiali3,631Istio service-mesh observability — inspired our circuit-breaker badges and error-edge visuals in the Routing/Combo Studio.
  lobe-icons2,428AI/LLM brand logos that render the provider icons across our dashboard.
  flag-icons12,354Provides the MIT-licensed SVG flags used by the README language selector.

### 🛡️ Security

  Project⭐How it inspired OmniRoute
  awesome-secure-defaults721A curated list of secure-by-default libraries that guides our security choices (Helmet.js, DOMPurify, ssrf-req-filter, safe-regex, Google Tink).

### 🧭 Complementary tools

  Project⭐How it inspired OmniRoute
  ClawRouter6,564Inspired request deduplication, emergency zero-cost fallback, pluggable Auto-Combo strategies and multilingual intent classification.
  Antigravity-Manager30,652Its account-aware model remapping, executable-path validation and plan-label behavior informed OmniRoute's Antigravity runtime.
  vscode-antigravity-cockpit4,817Its compact quota-reset countdown format inspired the corresponding provider-limit display in OmniRoute.
  AionUi32,230Its ACP integrations inspired OmniRoute's automatic detection of installed CLI agents.
  CodexBar20,507Identified the Grok Build quota surface; OmniRoute then verified and corrected the live wire format independently.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

**[⬆ Back to top](#-omniroute)** · Built with ❤️ for the open-source AI community.

OmniRoute v3.8.51 · Node ≥22.22.2 · MIT License · omniroute.online
