Before anyone reaches your docs, they land on your README, the front door of every open-source project. **shieldcn** makes that first impression count: badges, charts, headers, and sponsor walls, rendered as real [shadcn/ui](https://ui.shadcn.com) components. A [shields.io](https://shields.io) alternative.

[Homepage](https://shieldcn.dev) · [Docs](https://shieldcn.dev/docs) · [Studio](https://shieldcn.dev/studio) · [𝕏](https://x.com/jalcowastaken)

## Usage

Drop a badge into any README and it renders as a real shadcn Button.

```md
![npm](https://shieldcn.dev/npm/react.svg)
![stars](https://shieldcn.dev/github/vercel/next.js/stars.svg)
![views](https://shieldcn.dev/views/repo/shieldcn/shieldcn.svg)
```

## Agent skill

Install the `shieldcn-badges` skill from [skills.sh](https://skills.sh) so your
coding agent can add shieldcn badges, charts, and headers to READMEs:

```bash
npx skills add jal-co/shieldcn -a claude-code # installs to Claude Code
npx skills add jal-co/shieldcn -a cursor # installs to Cursor
```

See [`skills/shieldcn-badges/SKILL.md`](skills/shieldcn-badges/SKILL.md) for
prompt examples and options.

## Star history

Hosted star charts use GitHub's privacy-safe weekly history API. Embed
`https://shieldcn.dev/chart/github/stars/{owner}/{repo}.svg` for any public
repository, or use `.png` and `.json` at the same path.

To commit a light/dark SVG pair to your repo, use the **shieldcn starchart**
GitHub Action:

```yaml
- uses: jal-co/shieldcn@v1
  with:
    theme: violet
    pull-request: true
```

PR mode needs `contents: write`, `pull-requests: write`, and permission for
Actions to create pull requests in repository settings.

[**GitHub Action docs →**](https://shieldcn.dev/docs/charts/star-history) ·
[action reference](packages/action/README.md)

## Sponsors

## Contributors

[MIT](https://github.com/jal-co/shieldcn/blob/main/LICENSE) · Built by [Justin Levine](https://justinlevine.me) · [Contribute](https://github.com/jal-co/shieldcn)
