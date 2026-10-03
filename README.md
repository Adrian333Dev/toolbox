# Toolbox

A catalog of outside tools for AI agents and developers, one file per tool, with notes from real use.

> [!WARNING]
> **The toolbox is temporary.** A searchable tool library replaces it completely after [Flow](https://github.com/Adrian333Dev/flow)'s full release.

## Get it

[Flow](https://github.com/Adrian333Dev/flow) downloads it to `~/.flow/repos/toolbox/` when it installs, and `/flow:research` searches it before the web. Without Flow, clone it:

```console
$ git clone https://github.com/Adrian333Dev/toolbox.git
```

## Find a tool

1. Pick every folder in the tree below that could hold the answer. Often that is several.
2. Print the one-line description of every tool in those folders, in one search: `grep -r "^description:" --exclude="*.readme.md" agent-tools/memory agent-tools/code`. Each line comes back with its file's path.
3. Open the 2 or 3 files that look right and read their notes. A collection's file also lists its skills, plugins and subagents.

When no folder fits, search every file for a word, notes and saved READMEs included: `grep -ril "lip-sync" agent-tools software`.

## The folders

`agent-tools/` holds tools made for AI agents, `software/` holds everything else, and inside each a folder groups tools by what they help with. [Contributing](CONTRIBUTING.md) covers adding a tool, and rebuilding this tree.

<!-- tree -->
```
.
├── agent-tools/   // Made for an AI agent to use or run inside, even partly
│   ├── behavior/      // Changing how the agent answers or thinks
│   ├── browser/       // Driving a browser, and pulling content out of web pages
│   ├── code/          // Reviewing, understanding and finding your way around code
│   ├── collections/   // Sets and indexes of skills, plugins, subagents and prompts
│   ├── extending/     // Making skills, plugins and hooks
│   ├── harnesses/     // Programs agents run inside, and toolkits for building your own agent
│   ├── marketing/     // SEO, ads and written content
│   ├── memory/        // Memory that lasts between sessions
│   ├── models/        // Routing requests across model providers
│   ├── research/      // Researching a topic and writing up what was found
│   ├── security/      // Scanning code, reverse engineering and authorized pentests
│   ├── services/      // Connecting the agent to outside services: databases, payments, errors, hosting, automation
│   ├── ui/            // Designing UI, and design systems an agent can copy
│   ├── video/         // Making, cutting and watching video
│   └── workflows/     // Whole development methods to adopt
├── inbox/         // New tools from bin/tool.js add, waiting to be filed
└── software/      // Everything else: libraries, frameworks, services and apps
    ├── backend/     // Databases, payments and logins
    ├── documents/   // Converting documents
    ├── games/       // Game engines, and games built with agents
    ├── models/      // Testing and changing language models
    ├── scraping/    // Scraping websites
    ├── security/    // Security references and access rules
    ├── ui/          // Components, icons, editors, canvas and maps
    ├── video/       // Rendering video from code, and templates to start from
    └── voice/       // Speech to text and text to speech
```
<!-- /tree -->
