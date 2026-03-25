# Maabarium Docs

User-facing documentation for Maabarium, published at [docs.maabarium.com](https://docs.maabarium.com).

## Stack choice

This site uses Astro + Starlight.

Why this stack:

- It is purpose-built for documentation.
- It is static-first and deploys cleanly to Cloudflare Pages.
- It includes free local search through Pagefind.
- It lives in the same Astro ecosystem as the marketing site, which keeps visual parity and maintenance cost under control.

## Local development

```bash
pnpm install
pnpm dev
```

If you need the docs site to build against a non-default GA4 property, set `PUBLIC_GA_MEASUREMENT_ID` before running the dev server or production build.

## Validation

```bash
pnpm build
```

## Information architecture

- `src/content/docs/getting-started/`: onboarding and first-use flows
- `src/content/docs/guides/`: task-oriented user guides
- `src/content/docs/reference/`: durable power-user and operator material
- `src/content/docs/community/`: contribution and maintenance guidance

## Search

Search is powered by Starlight's Pagefind integration. It is static, local, and free to run.

## Deployment

GitHub Actions builds the site on pull requests and deploys on pushes to `master`.

Repository secrets required for deployment:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Repository variable used during the GitHub Actions build:

- `PUBLIC_GA_MEASUREMENT_ID`

How analytics property selection works:

- The docs site has its own fallback GA4 property in [src/config.ts](src/config.ts).
- GitHub Actions passes `PUBLIC_GA_MEASUREMENT_ID` into the build when the repository variable is set.
- If the variable is unset, the build falls back to the default docs property in [src/config.ts](src/config.ts).
- This value is public configuration, so it belongs in a repository variable rather than a secret.

Cloudflare Pages project details:

- project name: `maabarium-docs`
- production hostname: `docs.maabarium.com`

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
