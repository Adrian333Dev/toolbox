---
description: "A curated collection of skills for AI coding agents. Skills are packaged instructions and scripts that extend agent capabilities across development, documentation, planning, and professional workflows."
type: collection
url: https://github.com/softaworks/agent-toolkit
stars: 2.5k
language: Python
pushed: 2026-03-05
---

## Contents

### Skills

- **agent-md-refactor** `/skills/agent-md-refactor/`: Refactor bloated AGENTS.md, CLAUDE.md, or similar agent instruction files to follow progressive disclosure principles.
- **backend-to-frontend-handoff-docs** `/skills/backend-to-frontend-handoff-docs/`: Create API handoff documentation for frontend developers.
- **c4-architecture** `/skills/c4-architecture/`: Generate architecture documentation using C4 model Mermaid diagrams.
- **codex** `/skills/codex/`: Use when the user asks to run Codex CLI (codex exec, codex resume) or references OpenAI Codex for code analysis, refactoring, or automated editing.
- **command-creator** `/skills/command-creator/`: This skill should be used when creating a Claude Code slash command.
- **commit-work** `/skills/commit-work/`: Create high-quality git commits: review/stage intended changes, split into logical commits, and write clear commit messages (including Conventional Commits).
- **crafting-effective-readmes** `/skills/crafting-effective-readmes/`: Use when writing or improving README files.
- **daily-meeting-update** `/skills/daily-meeting-update/`: Interactive daily standup/meeting update generator.
- **database-schema-designer** `/skills/database-schema-designer/`: Design robust, scalable database schemas for SQL and NoSQL databases.
- **datadog-cli** `/skills/datadog-cli/`: Datadog CLI for searching logs, querying metrics, tracing requests, and managing dashboards.
- **dependency-updater** `/skills/dependency-updater/`: Smart dependency management for any language.
- **design-system-starter** `/skills/design-system-starter/`: Create and evolve design systems with design tokens, component architecture, accessibility guidelines, and documentation templates.
- **difficult-workplace-conversations** `/skills/difficult-workplace-conversations/`: Structured approach to workplace conflicts, performance discussions, and challenging feedback using preparation-delivery-followup framework.
- **domain-name-brainstormer** `/skills/domain-name-brainstormer/`: Generates creative domain name ideas for your project and checks availability across multiple TLDs (.com, .io, .dev, .ai, etc.).
- **draw-io** `/skills/draw-io/`: draw.io diagram creation, editing, and review.
- **excalidraw** `/skills/excalidraw/`: Use when working with *.excalidraw or *.excalidraw.json files, user mentions diagrams/flowcharts, or requests architecture visualization - delegates all Excalidraw operations to subagents to prevent context exhaustion from verbose JSON (single files: 4k-22k tokens, can exceed read limits)
- **feedback-mastery** `/skills/feedback-mastery/`: Navigate difficult conversations and deliver constructive feedback using structured frameworks.
- **frontend-to-backend-requirements** `/skills/frontend-to-backend-requirements/`: Document frontend data needs for backend developers.
- **game-changing-features** `/skills/game-changing-features/`: Find 10x product opportunities and high-leverage improvements.
- **gemini** `/skills/gemini/`: Use when the user asks to run Gemini CLI for code review, plan review, or big context (>200k) processing.
- **gepetto** `/skills/gepetto/`: Creates detailed, sectionized implementation plans through research, stakeholder interviews, and multi-LLM review.
- **humanizer** `/skills/humanizer/`: Remove signs of AI-generated writing from text.
- **jira** `/skills/jira/`: Use when the user mentions Jira issues (e.g., "PROJ-123"), asks about tickets, wants to create/view/update issues, check sprint status, or manage their Jira workflow.
- **lesson-learned** `/skills/lesson-learned/`: Analyze recent code changes via git history and extract software engineering lessons.
- **marp-slide** `/skills/marp-slide/`: Create professional Marp presentation slides with 7 beautiful themes (default, minimal, colorful, dark, gradient, tech, business).
- **meme-factory** `/skills/meme-factory/`: Generate memes using the memegen.link API.
- **mermaid-diagrams** `/skills/mermaid-diagrams/`: Comprehensive guide for creating software diagrams using Mermaid syntax.
- **mui** `/skills/mui/`: Material-UI v7 component library patterns including sx prop styling, theme integration, responsive design, and MUI-specific hooks.
- **naming-analyzer** `/skills/naming-analyzer/`: Suggest better variable, function, and class names based on context and conventions.
- **openapi-to-typescript** `/skills/openapi-to-typescript/`: Converts OpenAPI 3.0 JSON/YAML to TypeScript interfaces and type guards.
- **perplexity** `/skills/perplexity/`: Web search and research using Perplexity AI.
- **plugin-forge** `/skills/plugin-forge/`: Create and manage Claude Code plugins with proper structure, manifests, and marketplace integration.
- **professional-communication** `/skills/professional-communication/`: Guide technical communication for software developers.
- **qa-test-planner** `/skills/qa-test-planner/`: Generate comprehensive test plans, manual test cases, regression test suites, and bug reports for QA engineers.
- **react-dev** `/skills/react-dev/`: This skill should be used when building React components with TypeScript, typing hooks, handling events, or when React TypeScript, React 19, Server Components are mentioned.
- **react-useeffect** `/skills/react-useeffect/`: React useEffect best practices from official docs.
- **reducing-entropy** `/skills/reducing-entropy/`: Manual-only skill for minimizing total codebase size.
- **requirements-clarity** `/skills/requirements-clarity/`: Clarify ambiguous requirements through focused dialogue before implementation.
- **session-handoff** `/skills/session-handoff/`: Creates comprehensive handoff documents for seamless AI agent session transfers.
- **ship-learn-next** `/skills/ship-learn-next/`: Transform learning content (like YouTube transcripts, articles, tutorials) into actionable implementation plans using the Ship-Learn-Next framework.
- **skill-judge** `/skills/skill-judge/`: Evaluate Agent Skill design quality against official specifications and best practices.
- **web-to-markdown** `/skills/web-to-markdown/`: Use ONLY when the user explicitly says: 'use the skill web-to-markdown ...' (or 'use a skill web-to-markdown ...').
- **writing-clearly-and-concisely** `/skills/writing-clearly-and-concisely/`: Use when writing prose humans will read—documentation, commit messages, error messages, explanations, reports, or UI text.

### Plugins

- **agent-ascii-ui-mockup-generator** `/dist/plugins/agent-ascii-ui-mockup-generator/`: Visualize UI concepts through ASCII mockups before implementation.
- **agent-codebase-pattern-finder** `/dist/plugins/agent-codebase-pattern-finder/`: Find similar implementations, usage examples, or existing patterns in the codebase.
- **agent-communication-excellence-coach** `/dist/plugins/agent-communication-excellence-coach/`: Review communication drafts or prepare difficult conversations.
- **agent-general-purpose** `/dist/plugins/agent-general-purpose/`: Default agent for handling complex, multi-step tasks with automatic delegation capabilities.
- **agent-md-refactor** `/dist/plugins/agent-md-refactor/`: Refactor bloated AGENTS.md, CLAUDE.md, or similar agent instruction files to follow progressive disclosure principles.
- **agent-mermaid-diagram-specialist** `/dist/plugins/agent-mermaid-diagram-specialist/`: Mermaid diagram specialist for creating flowcharts, sequence diagrams, ERDs, and architecture visualizations.
- **agent-ui-ux-designer** `/dist/plugins/agent-ui-ux-designer/`: Expert UI/UX design critic and advisor who provides research-backed, opinionated feedback on interfaces.
- **backend-to-frontend-handoff-docs** `/dist/plugins/backend-to-frontend-handoff-docs/`: Create API handoff documentation for frontend developers.
- **c4-architecture** `/dist/plugins/c4-architecture/`: Generate architecture documentation using C4 model Mermaid diagrams.
- **codex** `/dist/plugins/codex/`: Use when the user asks to run Codex CLI (codex exec, codex resume) or references OpenAI Codex for code analysis, refactoring, or automated editing.
- **command-codex-plan** `/dist/plugins/command-codex-plan/`: Create a detailed implementation plan using Codex 5.2 with high reasoning.
- **command-compose-email** `/dist/plugins/command-compose-email/`: Draft a professional email using the What-Why-How framework.
- **command-creator** `/dist/plugins/command-creator/`: Create Claude Code slash commands.
- **command-explain-changes-mental-model** `/dist/plugins/command-explain-changes-mental-model/`: Build a mental model of changes by splitting them into smaller logical chunks.
- **command-explain-pr-changes** `/dist/plugins/command-explain-pr-changes/`: Generate comprehensive markdown summary of pull request changes with visual impact analysis.
- **command-sync-branch** `/dist/plugins/command-sync-branch/`: Sync feature branch with the latest main branch.
- **command-sync-skills-readme** `/dist/plugins/command-sync-skills-readme/`: Sync root README.md with current skills inventory from skills/ directory.
- **command-viral-tweet** `/dist/plugins/command-viral-tweet/`: Transform a raw tweet idea into an optimized viral post for X.
- **commit-work** `/dist/plugins/commit-work/`: Create high-quality git commits: review/stage intended changes, split into logical commits, and write clear commit messages (including Conventional Commits).
- **crafting-effective-readmes** `/dist/plugins/crafting-effective-readmes/`: Use when writing or improving README files.
- **daily-meeting-update** `/dist/plugins/daily-meeting-update/`: Interactive daily standup/meeting update generator.
- **database-schema-designer** `/dist/plugins/database-schema-designer/`: Design robust, scalable database schemas for SQL and NoSQL databases.
- **datadog-cli** `/dist/plugins/datadog-cli/`: Datadog CLI for searching logs, querying metrics, tracing requests, and managing dashboards.
- **dependency-updater** `/dist/plugins/dependency-updater/`: Smart dependency management for any language.
- **design-system-starter** `/dist/plugins/design-system-starter/`: Create and evolve design systems with design tokens, component architecture, accessibility guidelines, and documentation templates.
- **difficult-workplace-conversations** `/dist/plugins/difficult-workplace-conversations/`: Structured approach to workplace conflicts, performance discussions, and challenging feedback using preparation-delivery-followup framework.
- **domain-name-brainstormer** `/dist/plugins/domain-name-brainstormer/`: Generates creative domain name ideas for your project and checks availability across multiple TLDs (.com, .io, .dev, .ai, etc.).
- **draw-io** `/dist/plugins/draw-io/`: draw.io diagram creation, editing, and review.
- **excalidraw** `/dist/plugins/excalidraw/`: Use when working with *.excalidraw or *.excalidraw.json files, user mentions diagrams/flowcharts, or requests architecture visualization.
- **feedback-mastery** `/dist/plugins/feedback-mastery/`: Navigate difficult conversations and deliver constructive feedback using structured frameworks.
- **frontend-to-backend-requirements** `/dist/plugins/frontend-to-backend-requirements/`: Document frontend data needs for backend developers.
- **game-changing-features** `/dist/plugins/game-changing-features/`: Find 10x product opportunities and high-leverage improvements.
- **gemini** `/dist/plugins/gemini/`: Use when the user asks to run Gemini CLI for code review, plan review, or big context (>200k) processing.
- **gepetto** `/dist/plugins/gepetto/`: Creates detailed, sectionized implementation plans through research, stakeholder interviews, and multi-LLM review.
- **humanizer** `/dist/plugins/humanizer/`: Remove signs of AI-generated writing from text.
- **jira** `/dist/plugins/jira/`: Use when the user mentions Jira issues (e.g., "PROJ-123"), asks about tickets, wants to create/view/update issues, check sprint status, or manage their Jira workflow.
- **lesson-learned** `/dist/plugins/lesson-learned/`: Analyze recent code changes via git history and extract software engineering lessons.
- **marp-slide** `/dist/plugins/marp-slide/`: Create professional Marp presentation slides with 7 beautiful themes.
- **meme-factory** `/dist/plugins/meme-factory/`: Generate memes using the memegen.link API.
- **mermaid-diagrams** `/dist/plugins/mermaid-diagrams/`: Comprehensive guide for creating software diagrams using Mermaid syntax.
- **mui** `/dist/plugins/mui/`: Material-UI v7 component library patterns including sx prop styling, theme integration, responsive design, and MUI-specific hooks.
- **naming-analyzer** `/dist/plugins/naming-analyzer/`: Suggest better variable, function, and class names based on context and conventions.
- **openapi-to-typescript** `/dist/plugins/openapi-to-typescript/`: Converts OpenAPI 3.0 JSON/YAML to TypeScript interfaces and type guards.
- **perplexity** `/dist/plugins/perplexity/`: Web search and research using Perplexity AI.
- **plugin-forge** `/dist/plugins/plugin-forge/`: Create and manage Claude Code plugins with proper structure, manifests, and marketplace integration.
- **professional-communication** `/dist/plugins/professional-communication/`: Guide technical communication for software developers.
- **qa-test-planner** `/dist/plugins/qa-test-planner/`: Generate comprehensive test plans, manual test cases, regression test suites, and bug reports for QA engineers.
- **react-dev** `/dist/plugins/react-dev/`: Build React components with TypeScript.
- **react-useeffect** `/dist/plugins/react-useeffect/`: React useEffect best practices from official docs.
- **reducing-entropy** `/dist/plugins/reducing-entropy/`: Manual-only skill for minimizing total codebase size.
- **requirements-clarity** `/dist/plugins/requirements-clarity/`: Clarify ambiguous requirements through focused dialogue before implementation.
- **session-handoff** `/dist/plugins/session-handoff/`: Creates comprehensive handoff documents for seamless AI agent session transfers.
- **ship-learn-next** `/dist/plugins/ship-learn-next/`: Transform learning content (like YouTube transcripts, articles, tutorials) into actionable implementation plans using the Ship-Learn-Next framework.
- **skill-judge** `/dist/plugins/skill-judge/`: Evaluate Agent Skill design quality against official specifications and best practices.
- **web-to-markdown** `/dist/plugins/web-to-markdown/`: Converts webpage URLs to clean Markdown by calling the local web2md CLI (Puppeteer + Readability), suitable for JS-rendered pages.
- **writing-clearly-and-concisely** `/dist/plugins/writing-clearly-and-concisely/`: Use when writing prose humans will read—documentation, commit messages, error messages, explanations, reports, or UI text.

### Subagents

- **ascii-ui-mockup-generator** `/agents/ascii-ui-mockup-generator.md`: Use this agent when you need to visualize UI concepts through ASCII mockups before implementation.
- **codebase-pattern-finder** `/agents/codebase-pattern-finder.md`: codebase-pattern-finder is a useful subagent_type for finding similar implementations, usage examples, or existing patterns that can be modeled after.
- **communication-excellence-coach** `/agents/communication-excellence-coach.md`: PROACTIVELY use when reviewing communication drafts or preparing difficult conversations.
- **general-purpose** `/agents/general-purpose.md`: Default agent for handling complex, multi-step tasks with automatic delegation capabilities
- **mermaid-diagram-specialist** `/agents/mermaid-diagram-specialist.md`: Mermaid diagram specialist for creating flowcharts, sequence diagrams, ERDs, and architecture visualizations
- **ui-ux-designer** `/agents/ui-ux-designer.md`: Expert UI/UX design critic and advisor who provides research-backed, opinionated feedback on interfaces.

## Notes

### 2026-08-06, from research

- Large. Never install the whole set: pick from it.
- Worth picking: `database-schema-designer`, `qa-test-planner`, `naming-analyzer`, `reducing-entropy`.
