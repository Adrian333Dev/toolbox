agnix
  Lint agent configurations before they break your workflow

> Running open models for your company? [**Tiyuvta**](https://tiyuvta.ai/services/) helps with model choice, deployment and optimization, and fine-tuning on your hardware or cloud account.

Catch broken agent configs before your AI tools silently ignore them.458 rules across Claude Code, Codex CLI, OpenCode, Cursor, Copilot, and more -validating CLAUDE.md, SKILL.md, hooks, MCP configs, and other agent files.

Auto-fix | GitHub Action | VS Code + JetBrains + Neovim + Zed

New rules and tool support ship constantly. Follow for real-time updates:

## Why agnix?

**Your skills don't trigger.** Vercel's research found skills [invoke at 0%](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals) without correct syntax. One wrong field and your skill is invisible.

**"Almost right" is the worst outcome.** [66% of developers](https://survey.stackoverflow.co/2025/ai) cite it as their biggest AI frustration. Misconfigured agents produce exactly this.

**Multi-tool stacks fail silently.** Cursor + Claude Code + Copilot each want different formats. A config that works in one tool [breaks in another](https://arnav.tech/beyond-copilot-cursor-and-claude-code-the-unbundled-coding-ai-tools-stack).

**Bad patterns get amplified.** AI assistants don't ignore wrong configs - they [learn from them](https://www.augmentcode.com/guides/enterprise-coding-standards-12-rules-for-ai-ready-teams).

agnix validates all of it - 458 rules sourced from official specs, academic research, and real-world breakage patterns. Auto-fix included.

> **Want to try it first?** [Open the playground](https://agent-sh.github.io/agnix/playground) - paste any agent config, see diagnostics instantly. No install, runs in your browser.

## Quick Start

```console
$ npx agnix .
Validating: .

CLAUDE.md:15:1 warning: Generic instruction 'Be helpful and accurate' [fixable]
  help: Remove generic instructions. Claude already knows this.

.claude/skills/review/SKILL.md:3:1 error: Invalid name 'Review-Code' [fixable]
  help: Use lowercase letters and hyphens only (e.g., 'code-review')

Found 1 error, 1 warning
  2 issues are automatically fixable

hint: Run with --fix, --fix-safe, or --fix-unsafe to apply fixes
```

https://github.com/user-attachments/assets/72d5fe7c-476f-46ea-be64-5785cf6d5600

## Install

```bash
# npm (recommended, all platforms)
npm install -g agnix

# Homebrew (macOS/Linux)
brew tap agent-sh/agnix && brew install agnix

# pip (or `uvx agnix .` to run without installing)
pip install agnix

# Cargo
cargo install agnix-cli
```

[Pre-built binaries](https://github.com/agent-sh/agnix/releases) | [All install options](https://agent-sh.github.io/agnix/docs/installation)

### Editor Extensions

| Editor | Install |
|--------|---------|
| **VS Code** | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=avifenesh.agnix) |
| **JetBrains** | [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/30087-agnix) |
| **Neovim** | `{ "agent-sh/agnix", config = function() require("agnix").setup() end }` |
| **Zed** | Search "agnix" in Extensions |

[Editor setup guide](https://agent-sh.github.io/agnix/docs/editor-integration)

### GitHub Action

```yaml
- name: Validate agent configs
  uses: agent-sh/agnix@v0
  with:
    target: 'claude-code'
```

## Usage

```bash
agnix .              # Validate current directory
agnix --fix .        # Apply only safe fixes
agnix --fix-safe .   # Explicit safe-only fix mode
agnix --fix-unsafe . # Apply all fixes, including medium and LOW confidence
agnix --dry-run --show-fixes .  # Preview fixes with inline diff output
agnix --strict .     # Strict mode (warnings = errors)
agnix --format github .  # GitHub Actions annotations
agnix explain MCP-018    # Explain a rule and its evidence
agnix --target claude-code .  # Legacy target preset (primarily affects CC-* rules)
agnix --target kiro .         # Legacy target preset (use tools = [...] for tool-only filtering)
```

[Full CLI reference](https://agent-sh.github.io/agnix/docs/configuration) | [Full rules reference](https://agent-sh.github.io/agnix/docs/rules)

## Supported Tools

| Tool | Rules | Count | Config Files |
|------|-------|-------|--------------|
| [Agent Skills](https://agentskills.io) | AS-\*, CC-SK-\* | 31 | SKILL.md |
| [Claude Code](https://docs.anthropic.com/en/docs/build-with-claude/claude-code) | CC-\* | 53 | CLAUDE.md, hooks, agents, plugins |
| [GitHub Copilot](https://docs.github.com/en/copilot) | COP-\* | 6 | .github/copilot-instructions.md, .github/instructions/\*.instructions.md |
| [Cursor](https://cursor.com) | CUR-\* | 16 | .cursor/rules/\*.mdc, .cursorrules, .cursor/hooks.json, .cursor/agents/\*\*/\*.md, .cursor/environment.json |
| [Kiro](https://kiro.dev) | KIRO-\*, KR-SK-\*, KR-AG-\*, KR-HK-\*, KR-PW-\*, KR-MCP-\* | 53 | .kiro/steering/\*\*/\*.md, .kiro/skills/\*\*/SKILL.md, .kiro/agents/\*\*/\*.{json,md}, .kiro/hooks/\*.kiro.hook, .kiro/settings/mcp.json, .kiro/powers/\*/POWER.md |
| [MCP](https://modelcontextprotocol.io) | MCP-\* | 12 | \*.mcp.json |
| [AGENTS.md](https://agentsmd.org) | AGM-\*, XP-\* | 13 | AGENTS.md, AGENTS.local.md, AGENTS.override.md |
| [Cline](https://docs.cline.bot) | CLN-\* | 4 | .clinerules, .clinerules/\*.md, .clinerules/\*.txt |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | GM-\* | 9 | GEMINI.md, GEMINI.local.md, .gemini/settings.json (hooks), gemini-extension.json (extensions), .geminiignore |

## Architecture

Rust workspace crates:
- `agnix-rules` - rule metadata generated from `knowledge-base/rules.json`
- `agnix-core` - shared validation engine library
- `agnix-cli` - command-line interface binary
- `agnix-lsp` - language server binary
- `agnix-mcp` - MCP server binary
- `agnix-wasm` - WebAssembly bindings for browser/runtime integrations

## Contributing

Contributions welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the development guide.

### Local development loop

Run `bash scripts/preflight.sh` while editing. It checks formatting, rule
bookkeeping, count tables, locale copies, instruction copies, and schema copies
before any compilation. It requires Rust with rustfmt, Node.js, Python 3, and
Bash. Missing tools fail the check instead of silently skipping it.

Before pushing, run `bash scripts/preflight.sh --full`. This adds Clippy, workspace
tests, the rule efficacy evaluation, the Kiro gate, packaging script tests,
generated schema comparison, and source-built agent configuration validation.
It reports each check's elapsed time and stops at the first failure. Schema
comparison uses a temporary file and never overwrites local edits. Cargo builds,
Rust tests, and Rayon default to two workers each; set `CARGO_BUILD_JOBS`,
`RUST_TEST_THREADS`, or `RAYON_NUM_THREADS` to override these local defaults.

The existing optional hook installer, `sh scripts/setup-hooks.sh`, installs a
pre-push hook that calls the same full preflight. Git worktrees share the hooks
directory, and the installer replaces the existing pre-push hook.

Track the change in an issue, then open a PR with the tested commit, commands,
results, and any limits of the evidence. Local preflight does not replace hosted
Linux, Windows, macOS, CodeQL, dependency, or review gates. Review the diff and
record a factual self-review comment, wait for successful `revuto-review` and
CI, and address every review comment before merging through the PR. A changed
head needs fresh checks and review. Report a specific blocker when a required
gate cannot finish; keep branch protection intact.

CI and Security cancel superseded runs of the same PR. Their main and scheduled
runs use separate groups so newer runs cannot cancel them. The docs deployment
workflow keeps its existing shared concurrency group. CodeQL uses Rust's buildless
extraction, which runs build scripts and proc macros itself; release binaries are
still built by the release workflow.

[Report a bug](https://github.com/agent-sh/agnix/issues/new) | [Request a rule](https://github.com/agent-sh/agnix/issues/new) | [Good first issues](https://github.com/agent-sh/agnix/labels/good%20first%20issue)

## License

MIT OR Apache-2.0

---

  Star this repo to help other developers find agnix.
