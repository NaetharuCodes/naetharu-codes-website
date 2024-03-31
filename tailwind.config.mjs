/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      orange: "#FF6D2D",
      teal: "#20b39f",
      white: "#E9E9E9",
      "white-dark": "#D9D9D9",
      black: "#2F2F2F",
      "black-dark": "#1F1F1F",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
