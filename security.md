# Security

Scanning your own code, and tooling for authorized security work. General code review lives in [code-quality.md](./code-quality.md).

## Always-on review

- **security-guidance** `[Plugin]` (Anthropic, official) — reviews every diff for injection, XSS, SSRF, exposed secrets and auth bypass before you see it.
  - *Use when:* always. Negligible overhead, and it catches the classes of bug that are cheapest to fix early and most expensive to fix late.
  - `/plugin install security-guidance@claude-plugins-official`

- **Semgrep Guardian** `[Plugin]` (Semgrep) — SAST scanning against thousands of rules, wired so the agent regenerates code until it comes back clean.
  - *Use when:* you want enforcement rather than advice.
  - *Note:* use the Guardian bundle, not the deprecated standalone `semgrep/mcp` repo.

## Reverse engineering and pentest

> Both of these are for **authorized** work — your own systems, engagements you're contracted for, CTFs, and security research. `reverse-skill` scope-gates deliberately; keep it that way.

- **[reverse-skill](https://github.com/zhaoxuya520/reverse-skill)** `[Skill]` (19.7k★) — a routing layer for security work: given a target (APK, binary, obfuscated JS, CTF challenge, pentest scope) it selects a methodology, verifies which tools are actually installed, and runs a repeatable workflow instead of guessing commands.
  - *Use when:* the failure mode you're avoiding is an agent inventing plausible-looking tool invocations. This exists to make the process deterministic and evidence-tracked.
  - *Routes to:* jadx, apktool, IDA Pro, radare2, Ghidra, Frida (reverse engineering) · APK/iOS frameworks (mobile) · BurpSuite MCP and JS reverse tools (web) · YARA and EDR analysis (malware) · firmware/IoT · 40+ CTF sub-skills.
  - *Workflow:* task → `RULES.md` → master routing → case init and `scope.md` → scenario skill → tools → timeline with Evidence→Finding→Path → report.
  - *Needs:* `git clone https://github.com/zhaoxuya520/reverse-skill.git` plus platform-specific tool indexing scripts. Works with Claude Code, Cursor, Cline.

- **[auto-re-agent](https://github.com/Dryxio/auto-re-agent)** `[CLI]` (1.3k★) — reverse-engineering agent that drives Ghidra with an LLM to reconstruct C/C++ functions and then validates the reconstruction.
  - *Use when:* you're working through a binary and want decompiler output turned into something readable, with a correctness check rather than a plausible guess.
  - *Pairs with:* `reverse-skill`, which routes to Ghidra but doesn't automate the reconstruction loop itself.

## References and policy

- **[OWASP Cheat Sheet Series](https://github.com/OWASP/CheatSheetSeries)** `[Reference]` (32.8k★) — concise, high-value guidance on specific application security topics.
  - *Use when:* you want the agent grounded in an authoritative source rather than its own recollection of best practice. Point it at the relevant sheet before security-sensitive work.

- **[Open Policy Agent](https://github.com/open-policy-agent/opa)** `[Library]` (12.1k★) — general-purpose policy engine; policy as code, decoupled from the service enforcing it.
  - *Use when:* authorization rules are spread across services and you want them declared in one place. CNCF graduated.
