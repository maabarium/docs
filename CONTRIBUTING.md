# Contributing to Maabarium Docs

## Goals

This documentation should be easy for first-time users to follow without flattening the product into vague marketing language. Keep advanced details available when they matter.

## Local development

```bash
pnpm install
pnpm dev
```

For validation before opening a pull request:

```bash
pnpm build
```

## Writing standards

- Prefer plain language over internal jargon.
- Use screenshots only when they remove ambiguity.
- Keep command snippets copy-pasteable.
- Verify URLs and product naming.
- Keep user-facing docs in this repository; link to deep implementation material when needed instead of duplicating unstable low-level detail.

## Information architecture rules

- Put onboarding material in `src/content/docs/getting-started/`.
- Put task-oriented material in `src/content/docs/guides/`.
- Put durable power-user material in `src/content/docs/reference/`.
- Put contributor/process material in `src/content/docs/community/`.

## Pull requests

Use the pull request template and include:

- what changed
- who the change is for
- how you validated it
- whether screenshots changed

## Deployments

- Pull requests run docs CI.
- Pushes to `master` deploy to Cloudflare Pages when repository secrets are configured.
- The production docs build reads `PUBLIC_GA_MEASUREMENT_ID` from the repository Actions variables when a docs-specific GA4 property needs to override the fallback in [src/config.ts](src/config.ts).
