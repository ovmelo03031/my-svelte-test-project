# This repo is no longer maintained. Consider using `npm init vite` and selecting the `svelte` option or — if you want a full-fledged app framework and don't mind using pre-1.0 software — use [SvelteKit](https://kit.svelte.dev), the official application framework for Svelte.

---

# Plugin you need to install
Install the dependencies...
```bash
npm install // or next line
// or 
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-svelte3 prettier prettier-plugin-svelte

```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Other check svelte-check
svelte-check needs to know the whole project to do valid checks. Imagine you alter a component property export let foo to export let bar, but you don't update any of the component usages. They all have errors now but you would not catch them if you only run checks on changed files.
```bash
npm i svelte-check --save-dev
```

_Note you need add this step in you scripts: "check": "svelte-check --tsconfig ./tsconfig.json"_

```bash
npm run dev
```
