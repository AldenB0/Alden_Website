/** @type {import('tailwindcss').Config} */

/**
 * Design tokens
 * -------------
 * Every color below points at an RGB CSS variable defined in src/index.css
 * (:root). To swap the site's palette, edit the variables there — no class
 * names anywhere in the codebase need to change. <alpha-value> keeps
 * Tailwind opacity modifiers (e.g. bg-Background/50) working.
 *
 * Roles:
 *   Background — page background
 *   Surface    — raised surfaces (toast notifications)
 *   TextMuted  — secondary/dimmed text
 *   Cream      — light backdrop behind the Outside showcase video
 *   Rose / Green / Yellow / Blue — per-project accent colors
 */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["monarcha", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        Background: "rgb(var(--color-background) / <alpha-value>)",
        Surface: "rgb(var(--color-surface) / <alpha-value>)",
        TextMuted: "rgb(var(--color-text-muted) / <alpha-value>)",
        Cream: "rgb(var(--color-cream) / <alpha-value>)",
        Rose: "rgb(var(--color-rose) / <alpha-value>)",
        Green: "rgb(var(--color-green) / <alpha-value>)",
        Yellow: "rgb(var(--color-yellow) / <alpha-value>)",
        Blue: "rgb(var(--color-blue) / <alpha-value>)",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
