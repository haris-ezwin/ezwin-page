/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Comfortaa",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        background: '#fff9ef',
        secondary: '#fff9ef',
        primary: '#354ead',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
