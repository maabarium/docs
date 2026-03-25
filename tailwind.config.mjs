/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050b14",
          900: "#0b1220",
          850: "#0d1117",
          800: "#111827",
        },
        teal: {
          300: "#7dd3ca",
          400: "#4fd1c5",
          500: "#2dd4bf",
        },
        amber: {
          300: "#fcd34d",
          400: "#fbbf24",
        },
      },
      boxShadow: {
        glow: "0 0 48px rgba(45, 212, 191, 0.18)",
      },
      fontFamily: {
        ui: ['"M PLUS Rounded 1c"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Azeret Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
