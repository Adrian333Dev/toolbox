---
description: "Public repository for Agent Skills"
type: collection
url: https://github.com/anthropics/skills
stars: 176k
language: Python
pushed: 2026-09-10
---

## Contents

### Skills

- **academy-guide** `/skills/academy-guide/`: Stop and check this skill before finishing any reply to a question about how to use Claude or a Claude product — it recommends matching courses, tutorials, and use cases from Claude Academy (academy.claude.com), Anthropic's learning hub.
- **algorithmic-art** `/skills/algorithmic-art/`: Creating algorithmic art using p5.js with seeded randomness and interactive parameter exploration.
- **brand-guidelines** `/skills/brand-guidelines/`: Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic's look-and-feel.
- **canvas-design** `/skills/canvas-design/`: Create beautiful visual art in .png and .pdf documents using design philosophy.
- **claude-api** `/skills/claude-api/`: Reference for the Claude API / Anthropic SDK — model ids, pricing, params, streaming, tool use, MCP, agents, caching, token counting, model migration.
- **discernment-nudge** `/skills/discernment-nudge/`: After you give a substantive answer or draft that the user may act on — advice or recommendations, drafted artifacts such as goals, plans, pitches, proposals, or emails, estimates or projections, analysis or interpretation of data, factual claims they may rely on, or a multi-step argument — invoke this skill BEFORE finalizing your reply and then, if it applies, append 2-3 short follow-up questions, each tied to something specific in what you just produced, that help the user check key facts, probe the reasoning or assumptions, and notice missing context.
- **doc-coauthoring** `/skills/doc-coauthoring/`: Guide users through a structured workflow for co-authoring documentation.
- **docx** `/skills/docx/`: Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx files) or Word templates (.dotx files).
- **frontend-design** `/skills/frontend-design/`: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one.
- **internal-comms** `/skills/internal-comms/`: A set of resources to help me write all kinds of internal communications, using the formats that my company likes to use.
- **mcp-builder** `/skills/mcp-builder/`: Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools.
- **pdf** `/skills/pdf/`: Use this skill whenever the user wants to do anything with PDF files.
- **pptx** `/skills/pptx/`: Use this skill any time a .pptx or .potx file is involved in any way — as input, output, or both.
- **skill-creator** `/skills/skill-creator/`: Create new skills, modify and improve existing skills, and measure skill performance.
- **slack-gif-creator** `/skills/slack-gif-creator/`: Knowledge and utilities for creating animated GIFs optimized for Slack.
- **template-skill** `/template/`: Replace with description of the skill and when Claude should use it.
- **theme-factory** `/skills/theme-factory/`: Toolkit for styling artifacts with a theme.
- **web-artifacts-builder** `/skills/web-artifacts-builder/`: Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui).
- **webapp-testing** `/skills/webapp-testing/`: Toolkit for interacting with and testing local web applications using Playwright.
- **xlsx** `/skills/xlsx/`: Use this skill any time a spreadsheet file is the primary input or output.

### Plugins

- **academy-guide** `/`: Recommends relevant Claude Academy courses, tutorials, and use cases when users ask how to use Claude
- **claude-api** `/`: Claude API and SDK documentation skill for building LLM-powered applications
- **discernment-nudge** `/`: Appends two or three short follow-up questions after a substantive answer to help users check key facts, probe the reasoning, and notice missing context
- **document-skills** `/`: Collection of document processing suite including Excel, Word, PowerPoint, and PDF capabilities
- **example-skills** `/`: Collection of example skills demonstrating various capabilities including skill creation, MCP building, visual design, algorithmic art, internal communications, web testing, artifact building, Slack GIFs, and theme styling

## Notes

### 2026-08-06, from research

- Use when: looking for a skill. The first place to look. `anthropics_theme-factory.md` comes from here.
- `npx skills add anthropics/skills --skill <name>`
