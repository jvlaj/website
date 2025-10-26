/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow: {
        "icon-dark": "2px 2px 2px rgb(0 0 0 / 0.4)",
        "icon-light": "3px 3px 6px rgb(255 255 150 / 0.8)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
