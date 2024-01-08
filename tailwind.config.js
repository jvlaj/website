const { transform } = require("typescript");
const {Alice} = require("next/dist/compiled/@next/font/dist/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      minWidth: {
        480: "480px",
      },
      animation: {
        fadeIn: "fade-in 1s ease-in-out",
        bounceArrow: "bounce-arrow 1s ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
