Welcome to BlockNote! The open source Block-Based
React rich text editor. Easily add a modern text editing experience to your app.

    Homepage
   -
    Documentation
   -
    Quickstart
  -
    Examples

# Live demo

See our homepage @ [https://www.blocknotejs.org](https://www.blocknotejs.org/) or browse the [examples](https://www.blocknotejs.org/examples).

# Example code (React)

```typescript
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

function App() {
  const editor = useCreateBlockNote();

  return <BlockNoteView editor={editor} />;
}
```

`@blocknote/react` comes with a fully styled UI that makes it an instant, polished editor ready to use in your app.

# Features

BlockNote comes with a number of features and components to make it easy to embed a high-quality block-based editor in your app:

### Animations:

### Helpful placeholders:

### Drag and drop blocks:

### Nesting / indentation with tab and shift+tab:

### Slash (/) menu:

### Format menu:

### Real-time collaboration:

# Feedback 🙋‍♂️🙋‍♀️

We'd love to hear your thoughts and see your experiments, so [come and say hi on Discord](https://discord.gg/Qc2QTTH5dF).

# Contributing 🙌

See [CONTRIBUTING.md](CONTRIBUTING.md) for more info and guidance on how to run the project (TLDR: just use `pnpm start`).

The codebase is automatically tested using Vitest and Playwright.

# License 📃

BlockNote is 100% Open Source Software. The majority of BlockNote is licensed under the [MPL-2.0 license](LICENSE-MPL.txt), which allows you to use BlockNote in commercial (and closed-source) applications. If you make changes to the BlockNote source files, you're expected to publish these changes so the wider community can benefit as well. [Learn more](https://fossa.com/blog/open-source-software-licenses-101-mozilla-public-license-2-0/).

The XL packages (source code in the `packages/xl-*` directories and published in NPM as `@blocknote/xl-*`) are licensed under the GPL-3.0. If you cannot comply with this license and want to use the XL libraries, you'll need a commercial license. Refer to [our website](https://www.blocknotejs.org/pricing) for more information.

# Credits ❤️

BlockNote builds directly on two awesome projects; [Prosemirror](https://prosemirror.net/) by Marijn Haverbeke and [Tiptap](https://tiptap.dev/). Consider sponsoring those libraries when using BlockNote: [Prosemirror](https://marijnhaverbeke.nl/fund/), [Tiptap](https://github.com/sponsors/ueberdosis).

BlockNote is built as part of [TypeCell](https://www.typecell.org). TypeCell is proudly sponsored by the renowned [NLNet foundation](https://nlnet.nl/foundation/) who are on a mission to support an open internet, and protect the privacy and security of internet users. Check them out!

Hosting and deployments powered by Vercel:

This project is tested with BrowserStack
