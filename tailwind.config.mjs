/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    screens: {
      sm: "600px",
      md: "800px",
      lg: "1200px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
