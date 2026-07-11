# :bow_and_arrow: Cambridge University Bowmen official website :bow_and_arrow:

<div style="display:flex; justify-content:center">
<img src="src/lib/assets/icons/logo.svg" alt="CUB logo" style="width:300px" />
</div>

Official website for Cambridge University Bowmen circa summer 2026. Please email webmaster@cubowmen.com for questions or issues.

> [!WARNING]
> This codebase is still a work in progress, and doesn't reflect the content that is currently shown on our website.

## :zap: Quick start

For new webmasters, please see [here](documentation/setup.md) to learn about the setup needed for maintaining the website and [here](documentation/basics.md) for some basic knowledge needed for working with this codebase. Some examples of common maintenance tasks needed are also documented and linked below:

- [Updating committee information](documentation/examples/committee.md)
- [Adding new images/documents](documentation/examples/images_docs.md)
- [Changing the wording of existing pages](examples/wording.md)
- [Opening signup for Beginners' Course](documentation/examples/beginners.md)
- [Editing resources page](documentation/examples/resources.md)

Other documentations that are not directly related to website content can be found either in the documentation about [hosting](documentation/hosting.md) or the [miscellaneous](documentation/misc.md) page.

For keeping track of regular maintenance tasks e.g. updating sign up links, please use the issues page alongside the appropriate labels.

## :bookmark_tabs: Useful resources

The website was created from scratch using the following (key reading are noted with each item):

- [Typescript](https://www.typescriptlang.org/) - main language
  - [Node.js Wikipedia](https://en.wikipedia.org/wiki/Node.js) - first paragraph
  - [What is npm?](https://www.youtube.com/watch?v=ZNbFagCBlwo) - Yarn is an alternative to the npm command line tool
  - [What are package.json and yarn.lock files?](https://stackoverflow.com/questions/51203500/difference-between-package-json-package-lock-json-and-yarn-lock-files)
  - [Typescript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)
  - [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Svelte](https://svelte.dev/) - a radical way of writing user interfaces, which fluidly mixes scripting, layout, and styling
  - [Rethinking Reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao)
  - [Svelte Interactive Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) - all of Part 1, and then "Classes and styles", "Component composition", and "Special elements" from Part 2
- [SvelteKit](https://kit.svelte.dev/) - framework, handles building of site
  - [Sveltekit Interactive Tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit) - "Introduction", "Routing", and "Stores > page"
  - [Adapter Cloudflare](https://kit.svelte.dev/docs/adapter-cloudflare) - makes sure the site is built in a way that works well with our hosting service
- [Tailwind CSS](https://tailwindcss.com) - css framework that allows for simpler inline styling via classes
- [DaisyUI](https://daisyui.com/) - simple plugin for tailwind to make designing the interface less tedious

Note that it is understandable that sometimes club webmasters might not necessarily be familiar with coding and it is fine if you aren't able to grasp everything above. The only absolute must here is the Svelte and SvelteKit tutorials to help you understand the structure of the codebase, as well as some basic understanding of Git.

All important maintenance tasks are documented in beginner friendly ways in other parts of the documentation. Feel free to browse the `documentation` folder or go back to the [Quick Start](#-quick-start) section to find what you need.
