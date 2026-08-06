# UI libraries

Components, icons, editors, canvas and generated visual assets — the code you ship. For guidance on *how* the agent should design, see [ui-design.md](./ui-design.md).

## shadcn ecosystem

- **[shadcn/ui](https://github.com/shadcn-ui/ui)** `[Library]` (121k★) — accessible components you copy into your project rather than install as a dependency, plus a registry format for distributing your own.
  - *Use when:* default for new React work. Agents handle it well precisely because the component source lands in your repo where they can read and edit it.
  - `npx shadcn@latest init` then `npx shadcn@latest add <component>`

- **[awesome-shadcn-ui](https://github.com/birobirobiro/awesome-shadcn-ui)** `[Collection]` (20.2k★) — the index of everything built on shadcn: registries, blocks, themes, extensions.
  - *Use when:* before hand-building a shadcn component, check whether it already exists here.

- **[kibo](https://github.com/shadcnblocks/kibo)** `[Library]` (3.9k★) — a custom registry of composable, accessible components designed to extend shadcn/ui.
  - *Use when:* you need something more complex than base shadcn ships — installs through the same registry mechanism.

- **[ai-elements](https://github.com/vercel/ai-elements)** `[Library]` (Vercel, 2.3k★) — shadcn-based components for AI interfaces specifically: message threads, streaming responses, reasoning displays, prompt inputs.
  - *Use when:* building chat or agent UI. Saves rebuilding streaming-message plumbing that's fiddlier than it looks.

## Icons

- **[material-design-icons](https://github.com/google/material-design-icons)** `[Library]` (Google, 53.7k★) — Material Symbols. Huge, consistent, variable-weight, Apache-2.0.
  - *Use when:* you need exhaustive coverage and a permissive license. For a smaller, sharper set that matches shadcn's aesthetic, `lucide-react` is what shadcn/ui itself ships with.

## Editors and canvas

- **[BlockNote](https://github.com/TypeCellOS/BlockNote)** `[Library]` (10.1k★) — block-based Notion-style rich text editor for React, built on ProseMirror and TipTap, extensible with custom blocks.
  - *Use when:* you need a document editor and don't want to assemble ProseMirror yourself.

- **[Excalidraw](https://github.com/excalidraw/excalidraw)** `[Library]` (129k★) — virtual whiteboard for hand-drawn-style diagrams. Embeddable as a React component, not just the hosted app.
  - *Use when:* you want diagramming inside your product, or a quick sketch surface that doesn't look corporate.

- **[Fabric.js](https://github.com/fabricjs/fabric.js)** `[Library]` (31.4k★) — canvas library with an object model, plus SVG-to-canvas and canvas-to-SVG parsing.
  - *Use when:* building an image or design editor and you need interactive objects on a canvas rather than raw drawing calls.

## Maps

- **[mapcn](https://github.com/AnmolSaini16/mapcn)** `[Library]` (11.3k★) — map components, zero config, one-command setup, styled to sit alongside shadcn.
  - *Use when:* you need a map without spending a day on tile providers and marker clustering.

## Component tooling

- **[Storybook](https://github.com/storybookjs/storybook)** `[Tooling]` (90.8k★) — the standard workshop for building, documenting and testing components in isolation.
  - *Use when:* a component library is big enough that reviewing changes in-app stops being practical. Also gives an agent a stable surface to verify a component against without booting the whole product.

## Generated assets

- **[img2threejs](https://github.com/img2threejs/img2threejs)** `[Skill]` (10k★) — rebuilds an object from a reference image as procedural Three.js code: primitives and shaders, not a downloaded mesh. Runs a staged sculpting pipeline with quality gates at each pass.
  - *Use when:* you want an animation-ready 3D object that lives in your repo as editable, diffable code.
  - *Outputs:* an `ObjectSculptSpec` JSON (hierarchy, materials, sockets, review history), a TypeScript factory returning a `THREE.Group`, and reference-vs-render comparison sheets per pass.
  - *Needs:* Python 3.10+, standard library only. `git clone https://github.com/img2threejs/img2threejs.git ~/.claude/skills/img2threejs`
  - *Note:* deliberately token-efficient — Python does the validation, the model spends tokens only on visual judgment and code generation.

- **[shieldcn](https://github.com/jal-co/shieldcn)** `[Skill]` (774★) — README badges, charts, headers and sponsor walls as SVG, styled like shadcn/ui.
  - *Use when:* dressing up a repo's README. Ships a GitHub Action for automated star-history charts.
  - *Note:* repo presentation, not interface design — it's here rather than in `ui-design.md` for that reason.
