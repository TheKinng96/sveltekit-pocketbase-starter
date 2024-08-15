If you like this starter template or this starter template helps you, feel free to contribute and make it a better starter template ever.

If you want to [buy me a coffee](buymeacoffee.com/fengyuanyaE), I would appreciate that.

---

This is a starter template using docker to host sveltekit and pocketbase

`make up` to start the container
`make down` to stop the container

# pocketbase

- [documentation](https://pocketbase.io/)
- pb_data is where your app data will be stored at when you run the docker container

  - only the folder will be preserved, remove the gitignore statement for 'pb_data' to save your whole database to the branch,

- pb_hooks contains an example to add an additional api to the pocketbase server
  - check [here](https://pocketbase.io/docs/js-overview/) for more info

# sveltekit

- This starter template includes a simple auth (login, registration, and dashboard) flow
- Needs to make sure the pocketbase has been initialized by checking the [page](http://localhost:8090/_) once

- Packages included

  1. [shadcn-svelte ui library](https://www.shadcn-svelte.com/)
  2. [superform with zod](https://superforms.rocks/)
  3. [paraglider js for locales](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)
  4. [tailwind for styling](https://tailwindcss.com/)
  5. [lucide-icons library](https://lucide.dev/icons/)
  6. [svelte-sonner for toast](https://svelte-sonner.vercel.app/)

### Shadcn-svelte ui library

- only install components that need
- install directory: `sveltekit/src/lib/components/ui`
- example of adding new ui component

  1. Make sure the command line pwd is in `sveltekit` folder
  2. `bunx shadcn-svelte@latest add componentName`

### Superform

- examples are server side validation
- client side validation check [here](https://superforms.rocks/concepts/client-validation)

### Paraglider js

- [Dashboard](https://fink.inlang.com/) available after cloning the repo
  - paste your github repo url to the "Enter repository url... " to check
- This starter includes `en` and `ja` locales, to add new locales, follow the steps below
  1. Add your new locale json file under `sveltekit/messages`
  2. Append your locale key in the `sveltekit/project.inlang/settings.json` > `languageTags`
- Currently, `en` is set as the default language so when you run linting and machine translation command, they all based on the `en`
- CMD

  ```js
  // To machine translate and sync all missing keys
  bunx @inlang/cli machine translate --project project.inlang

  // To check the locales with preset lint rules
  bunx @inlang/cli lint --project project.inlang
  ```

- lint rules, more [info](https://inlang.com/c/lint-rules)
  - empty pattern
  - identical pattern
  - message without source
  - missing translation

## Known issues

- When adding new packages, need to restart `make down` and `make up` to refresh the container
