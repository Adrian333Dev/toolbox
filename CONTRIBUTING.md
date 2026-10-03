# Contributing

How a tool gets into the toolbox: the file each tool has, the command that adds one, and the folder it belongs in.

## Table of contents

- [A tool file](#a-tool-file): what each tool's file holds
- [Adding a tool](#adding-a-tool): `bin/tool.js add`, and `refresh`
- [Filing the inbox](#filing-the-inbox): moving new tools into their folders
- [Which folder](#which-folder): where a tool belongs
- [Rebuilding the tree](#rebuilding-the-tree): the folder list in `README.md`

## A tool file

Named `owner_repo.md`. GitHub owner names never hold a `_`, so the first one marks where the owner ends. The repo's README, cleaned of badges, images and HTML, sits beside it as `owner_repo.readme.md`.

```md
---
description: "The Memory Layer for AI Agents - Drop-in memory infrastructure for AI agents and apps."
type: library
url: https://github.com/mem0ai/mem0
stars: 64.7k
language: Python
pushed: 2026-09-03
---

## Notes

### 2026-09-20, used in a project

- What worked, what broke, what to watch for.
```

- **`type`** says how the tool gets installed: `skill`, `plugin`, `mcp`, `cli`, `library`, `app`, `framework`, `collection`, `index`, `reference`, `template` or `tooling`. A tool that is 2 of these lists both: `cli, library`.
- **`## Contents`**, above the notes of a tool typed `collection`, lists its skills, plugins and subagents, each with its path inside the repo: ``- **deploy-to-vercel** `/skills/deploy-to-vercel/`: Deploy applications and websites to Vercel.``
- **Each batch of notes** goes under a heading with its date and where it came from.
- **A tool with no GitHub repo of its own** gets the same file written by hand, named after its maker: `anthropics_code-review.md`, with only `description`, `type` and `url`.

## Adding a tool

- **`bin/tool.js add owner/repo`** writes `inbox/owner_repo.readme.md`, then `inbox/owner_repo.md`. It takes several repos at once and runs from any folder.
- **`--to agent-tools/memory`** writes into that folder instead. The folder must already exist.
- **A tool already in the toolbox**, in any folder, is skipped.
- **`bin/tool.js refresh`** updates the stars, language, last push, archived flag and README of every tool, and every collection's list. Name files or folders to refresh only those. It never changes `description`, `type` or the notes, and skips a file written by hand.

## Filing the inbox

1. `grep -r "^description:" --exclude="*.readme.md" inbox/` lists what waits.
2. Pick each tool's folder by [Which folder](#which-folder). Read its README when the description is not enough.
3. Fill in `type`, and `description` when GitHub had none.
4. `mv inbox/owner_repo.md inbox/owner_repo.readme.md <folder>/`
5. For a tool typed `collection`, `bin/tool.js refresh <folder>/owner_repo.md` writes its list.
6. `grep -rl '^type: ""' agent-tools software` prints nothing. It also catches a tool added with `--to`.
7. After adding a folder, [rebuild the tree](#rebuilding-the-tree).

## Which folder

- **Made for an AI agent to use or run inside, even partly?** Yes goes to `agent-tools/`, no goes to `software/`. Then pick the folder for what the tool helps with.
- **A tool that is both**, such as a library with its own MCP server, goes to `agent-tools/`.
- **A product with a separate repo for each form** is filed by the repo added: `microsoft/playwright-mcp` goes to `agent-tools/browser/`.
- **One repo that is both** is filed by its own description. HyperFrames says it is built for agents, so `agent-tools/video/`. Remotion does not, so `software/video/`.
- **What belongs**: what an agent uses, what a project builds on, and projects worth learning from. An app used only by hand does not.
- **A folder splits in 2** only when it holds 2 sets of tools someone looks for separately.

## Rebuilding the tree

Whoever adds, renames or removes a folder, or edits a `.info`, rebuilds the tree in `README.md` → `## The folders`:

```console
$ util fs tree . --except "*.md" --except "*.json" --except ".*" --except bin --into README.md
```
