import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.maabarium.com",
  trailingSlash: "never",
  integrations: [
    sitemap(),
    starlight({
      title: "Maabarium Docs",
      description:
        "User-focused documentation for setting up, running, and extending Maabarium.",
      components: {
        Head: "./src/components/starlight/Head.astro",
        Footer: "./src/components/starlight/Footer.astro",
        Header: "./src/components/starlight/Header.astro",
        Hero: "./src/components/starlight/Hero.astro",
        SiteTitle: "./src/components/starlight/SiteTitle.astro",
      },
      logo: {
        src: "./public/images/maabarium-logo.png",
        alt: "Maabarium logo",
      },
      favicon: "/images/maabarium-logo.png",
      titleDelimiter: "|",
      disable404Route: true,
      customCss: ["./src/styles/tailwind.css", "./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub repository",
          href: "https://github.com/maabarium/core",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/maabarium/docs/edit/master/",
      },
      lastUpdated: true,
      pagefind: true,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      sidebar: [
        {
          label: "Start Here",
          items: [
            { slug: "index", label: "Overview" },
            { slug: "getting-started/overview", label: "What Maabarium Is" },
            { slug: "getting-started/install", label: "Install" },
            {
              slug: "getting-started/first-run",
              label: "Run Your First Workflow",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            { slug: "guides/desktop-console", label: "Desktop Console" },
            {
              slug: "guides/workflows-and-blueprints",
              label: "Workflows and Blueprints",
            },
            {
              slug: "guides/models-and-providers",
              label: "Models and Providers",
            },
            {
              slug: "guides/updates-and-release-channels",
              label: "Updates and Release Channels",
            },
            { slug: "guides/troubleshooting", label: "Troubleshooting" },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              slug: "reference/blueprint-reference",
              label: "Blueprint Reference",
            },
            { slug: "reference/cli-and-runtime", label: "CLI and Runtime" },
            {
              slug: "reference/app-data-and-paths",
              label: "App Data and Paths",
            },
            {
              slug: "reference/build-profiles-and-runtime-behavior",
              label: "Build Profiles and Runtime Behavior",
            },
            {
              slug: "reference/privacy-and-analytics",
              label: "Privacy and Analytics",
            },
          ],
        },
        {
          label: "Community",
          items: [
            { slug: "community/contributing", label: "Contributing to Docs" },
          ],
        },
      ],
      head: [
        {
          tag: "meta",
          attrs: {
            name: "theme-color",
            content: "#0b1220",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "Maabarium Docs",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "/images/maabarium-logo.png",
          },
        },
      ],
    }),
  ],
});
