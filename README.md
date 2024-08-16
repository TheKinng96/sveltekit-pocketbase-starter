# Docker-Powered SvelteKit & PocketBase Starter Template

Welcome to your new favorite starter template! This project sets up SvelteKit and PocketBase with Docker, providing a robust foundation for your next app. If you find this template useful, consider contributing to make it even better!

If you’d like to [buy me a coffee](https://buymeacoffee.com/fengyuanyaE), I’d greatly appreciate it!

## Getting Started

### Quick Commands

- **Start the container:** `make up`
- **Stop the container:** `make down`

### Ports

- **SvelteKit:** `8080`
- **PocketBase:** `8090`

## PocketBase

- **Documentation:** [PocketBase Docs](https://pocketbase.io/)
- **Data Storage:** Your app's data is stored in the `pb_data` directory when the Docker container is running.
  - _Note:_ By default, only the folder is preserved. If you want to save your entire database to the branch, remove the `.gitignore` entry for `pb_data`.
- **API Extensions:** The `pb_hooks` folder contains an example for adding custom APIs to the PocketBase server.
  - For more info, see the [PocketBase JS Overview](https://pocketbase.io/docs/js-overview/).

## SvelteKit

- **Authentication Flow:** This template includes a basic authentication flow (login, registration, and dashboard).
- **Initialization:** Ensure PocketBase is initialized by visiting the [PocketBase page](http://localhost:8090/_).

### Included Packages

1. **[shadcn-svelte UI Library](https://www.shadcn-svelte.com/)**
2. **[Superform with Zod](https://superforms.rocks/)**
3. **[Paraglider JS for Locales](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)**
4. **[Tailwind CSS](https://tailwindcss.com/)**
5. **[Lucide Icons Library](https://lucide.dev/icons/)**
6. **[Svelte-Sonner for Toast Notifications](https://svelte-sonner.vercel.app/)**

### Shadcn-Svelte UI Library

- **Usage:** Install only the components you need.
- **Installation Directory:** `sveltekit/src/lib/components/ui`
- **Adding New Components:**
  1. Navigate to the `sveltekit` directory.
  2. Run `bunx shadcn-svelte@latest add componentName`.

### Superform

- **Validation:** The template includes examples for server-side validation. For client-side validation, refer to [Superform Documentation](https://superforms.rocks/concepts/client-validation).

### Paraglider JS

- **Dashboard:** After cloning the repo, access the [Paraglider Dashboard](https://fink.inlang.com/).
  - Enter your GitHub repository URL in the "Enter repository URL..." field to start.
- **Locales:** This template includes `en` and `ja` locales. To add new locales:
  1. Add your new locale JSON file under `sveltekit/messages`.
  2. Update the `languageTags` in `sveltekit/project.inlang/settings.json` with your new locale key.
- **Default Language:** English (`en`) is set as the default language for linting and machine translation commands.

### Commands

```bash
# Machine translate and sync all missing keys
bunx @inlang/cli machine translate --project project.inlang

# Lint the locales with preset rules
bunx @inlang/cli lint --project project.inlang
```

- **Lint Rules:** More information is available in the [Lint Rules Documentation](https://inlang.com/c/lint-rules):
  - Empty pattern
  - Identical pattern
  - Message without source
  - Missing translation

## Known Issues

- When adding new packages, you need to restart the Docker container (`make down` and `make up`) to apply changes.
