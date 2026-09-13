Build bulletproof UI components faster

Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. Find out more at storybook.js.org!

  View README for:

## Table of contents

- 🚀 [Getting Started](#getting-started)
- 📒 [Projects](#projects)
  - 🛠 [Supported Frameworks & Examples](#supported-frameworks)
  - 🔗[Addons](#addons)
- 🏅 [Badges & Presentation materials](#badges--presentation-materials)
- 👥 [Community](#community)
- 👏 [Contributing](#contributing)
  - 👨‍💻 [Development scripts](#development-scripts)
  - 💸 [Sponsors](#sponsors)
  - 💵 [Backers](#backers)
- :memo: [License](#license)

## Getting Started

Visit [Storybook's website](https://storybook.js.org/?ref=readme) to learn more about Storybook and to get started.

### Documentation

Documentation can be found on [Storybook's docs site](https://storybook.js.org/docs?ref=readme).

### Examples

View [Component Encyclopedia](https://storybook.js.org/showcase?ref=readme) to see how leading teams use Storybook.

Use [storybook.new](https://storybook.new) to quickly create an example project in Stackblitz.

Storybook comes with a lot of [addons](https://storybook.js.org/docs/configure/user-interface/storybook-addons?ref=readme) for component design, documentation, testing, interactivity, and so on. Storybook's API makes it possible to configure and extend in various ways. It has even been extended to support React Native, Android, iOS, and Flutter development for mobile.

### Community

For additional help, share your issue in [the repo's GitHub Discussions](https://github.com/storybookjs/storybook/discussions/new?category=help).

## Projects

### Supported Frameworks

| Renderer                                                       | Demo                                                                                                                                                                         |                                                                                                                                                       |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [React](code/renderers/react)                                  |           |                                           |
| [Angular](code/frameworks/angular/)                            |         |                                   |
| [Vue 3](code/renderers/vue3)                                   |            |                                            |
| [Web components](code/renderers/web-components)                |  |                        |
| [React Native](https://github.com/storybookjs/react-native)    |                                                                      |      |
| [HTML](code/renderers/html)                                    |            |                                              |
| [Ember](code/frameworks/ember/)                                |                                                                             |                                         |
| [Svelte](code/renderers/svelte)                                |          |                                        |
| [Preact](code/renderers/preact)                                |          |                                        |
| [Qwik](https://github.com/literalpie/storybook-framework-qwik) |                                                                     |  |
| [SolidJS](https://github.com/solidjs-community/storybook)      |                                                                       |         |
| [Android, iOS, Flutter](https://github.com/storybookjs/native) |                                                                            |                        |

### Addons

| Addons                                                                    |                                                                            |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [a11y](code/addons/a11y/)                                                 | Test components for user accessibility in Storybook                        |
| [actions](code/core/src/actions/)                                         | Log actions as users interact with components in the Storybook UI          |
| [backgrounds](code/core/src/backgrounds)                                  | Let users choose backgrounds in the Storybook UI                           |
| [cssresources](https://github.com/storybookjs/addon-cssresources)         | Dynamically add/remove CSS resources to the component iframe               |
| [design assets](https://github.com/storybookjs/addon-design-assets)       | View images, videos, and weblinks alongside your story                     |
| [docs](code/addons/docs/)                                                 | Add high quality documentation to your components                          |
| [events](https://github.com/storybookjs/addon-events)                     | Interactively fire events to components that respond to EventEmitter       |
| [google-analytics](https://github.com/storybookjs/addon-google-analytics) | Reports google analytics on stories                                        |
| [graphql](https://github.com/storybookjs/addon-graphql)                   | Query a GraphQL server within Storybook stories                            |
| [jest](https://github.com/storybookjs/addon-jest)                         | View the results of components' unit tests in Storybook                    |
| [links](code/addons/links/)                                               | Create links between stories                                               |
| [measure](code/core/src/measure/)                                         | Visually inspect the layout and box model within the Storybook UI          |
| [outline](code/core/src/outline/)                                         | Visually debug the CSS layout and alignment within the Storybook UI        |
| [query params](https://github.com/storybookjs/addon-queryparams)          | Mock query params                                                          |
| [viewport](code/core/src/viewport/)                                       | Change display sizes and layouts for responsive components using Storybook |

See [Addon / Framework Support Table](https://storybook.js.org/docs/configure/integration/frameworks-feature-support?ref=readme)

To continue improving your experience, we have to eventually deprecate or remove certain addons in favor of new and better tools.

If you're using info/notes, we highly recommend you migrate to [docs](code/addons/docs/) instead, and [here is a guide](code/addons/docs/docs/recipes.md#migrating-from-notesinfo-addons) to help you.

If you're using contexts, we highly recommend you migrate to [toolbars](https://github.com/storybookjs/storybook/tree/next/code/addons/toolbars) and [here is a guide](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-addon-contexts) to help you.

If you're using addon-storyshots, we highly recommend you migrate to the Storybook [test-runner](https://github.com/storybookjs/test-runner) and [here is a guide](https://storybook.js.org/docs/writing-tests/storyshots-migration-guide?ref=readme) to help you.

## Badges & Presentation materials

We have a badge! Link it to your live Storybook example.

```md
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](link to site)
```

If you're looking for material to use in your Storybook presentation, such as logos, video material, and the colors we use, you can find it all on our [brand repo](https://github.com/storybookjs/brand).

## Community

- Tweeting via [@storybookjs](https://x.com/storybookjs)
- Blogging at [storybook.js.org](https://storybook.js.org/blog/?ref=readme) and [Medium](https://medium.com/storybookjs)
- Chatting on [Discord](https://discord.gg/storybook)
- Videos and streams at [YouTube](https://www.youtube.com/channel/UCr7Quur3eIyA_oe8FNYexfg)

## Contributing

Contributions to Storybook are always welcome!

- 📥 Pull requests and 🌟 Stars are always welcome.
- Read our [contributing guide](CONTRIBUTING.md) to get started,
  or find us on [Discord](https://discord.gg/storybook), we will take the time to guide you.

Looking for a first issue to tackle?

- We tag issues with  when we think they are well suited for people who are new to the codebase or OSS in general.
- [Talk to us](https://discord.gg/storybook), we'll find something that suits your skills and learning interests.

### Development scripts

Storybook is organized as a monorepo. Useful scripts include:

#### `yarn start`

> Runs a sandbox template storybook with test stories

#### `yarn task`

> As above, but gives you options to customize the sandbox (e.g. selecting other frameworks)

#### `yarn lint`

> boolean check if code conforms to linting rules - uses remark & eslint

- `yarn lint:js` - will check js
- `yarn lint:md` - will check markdown + code samples
- `yarn lint:js --fix` - will automatically fix js

#### `yarn test`

> boolean check if unit tests all pass - uses jest

- `yarn run test --core --watch` - will run core tests in watch-mode

### Sponsors

Become a sponsor to have your logo and website URL on our README on Github. \[[Become a sponsor](https://opencollective.com/storybook#sponsor)]

### Backers

By making a recurring donation, you can support us and our work. \[[Become a backer](https://opencollective.com/storybook#backer)]

## License

[MIT](https://github.com/storybookjs/storybook/blob/main/LICENSE)

-the end-
