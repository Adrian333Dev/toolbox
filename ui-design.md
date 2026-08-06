# UI design

How the agent should design — taste, rulesets, and supplying it a visual language. For the code and assets you actually ship, see [ui-libs.md](./ui-libs.md).

## Design guidance

*These overlap heavily — pick one or two, don't stack them all. Running several at once means competing rulesets and worse output than any one alone.*

- **frontend-design** `[Plugin]` (Anthropic, official) — pushes generated UI toward considered typography, layout and restraint instead of generic "AI slop."
  - *Use when:* any user-facing UI work. The most-installed plugin in the official marketplace, and the safest default here.
  - `/plugin install frontend-design@claude-plugins-official`

- **[impeccable](https://github.com/pbakaus/impeccable)** `[Skill]` (56.2k★) — a design language that makes an AI harness better at design, rather than a checklist it grades against.
  - *Use when:* you want the agent to have a coherent point of view instead of applying rules piecemeal.

- **[taste-skill](https://github.com/Leonxlnx/taste-skill)** `[Skill]` (73.1k★) — anti-slop frontend guidance; stops the agent generating boring, generic output.
  - `npx skills add Leonxlnx/taste-skill`

- **[ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** `[Skill]` (114k★) — heavy UI/UX ruleset, 161 rules across 67 styles, spanning multiple platforms.
  - *Use when:* you want breadth and explicit rules. The heaviest option here — it will dominate whatever else you have loaded.

- **web-design-guidelines** `[Skill]` (Vercel) — audits UI against 100+ accessibility, UX and performance rules, fetched fresh each run rather than baked in.
  - *Use when:* you want a *check* on finished UI rather than guidance while building. Composes with the others more cleanly than they compose with each other.
  - `npx skills add vercel-labs/agent-skills --skill web-design-guidelines`

- **theme-factory** `[Skill]` (Anthropic) — coherent color systems and type scales.
  - *Use when:* you need a palette and scale that hold together, not a whole design philosophy. From `anthropics/skills`.

## Feeding the agent a design system

*Different job from the above: these hand the agent a specific visual language instead of opinions about taste.*

- **[awesome-design-md](https://github.com/VoltAgent/awesome-design-md)** `[Collection]` (VoltAgent, 107k★) — 73 `DESIGN.md` files reverse-engineered from real brand design systems. Drop one into your project root and the agent builds matching UI.
  - *Use when:* you want output that looks like Linear, Stripe, Vercel or Notion rather than looking like nothing in particular.
  - *Covers:* AI platforms (Claude, OpenAI, Mistral), dev tools (Cursor, Vercel, Raycast, Warp), SaaS (Linear, Notion, Figma), fintech (Stripe, Coinbase, Wise), consumer (Apple, Spotify, Nike), plus a retro-web set.
  - *Needs:* nothing — plain markdown, no tooling. Each file ships preview HTML for colors, type and components.
  - *Note:* `DESIGN.md` originated with Google Stitch. It's a convention, not a format you need a parser for.

- **[dembrandt](https://github.com/dembrandt/dembrandt)** `[CLI]` `[MCP]` (2.4k★) — extracts any live website's design system into tokens: colors, typography, spacing, borders, shadows, motion, components, logo.
  - *Use when:* you need to match an existing product or brand and there's no design file — point it at the site.
  - *Outputs:* formatted terminal, JSON, W3C Design Tokens (DTCG), a brand-guide PDF, and a `DESIGN.md` for agents.
  - *Needs:* Node 18+. `npx dembrandt <url>` or `npm install -g dembrandt`. Also ships an MCP server and a GitHub Action.
  - *Also does:* multi-page extraction, WCAG audits, and drift detection you can wire into CI.
