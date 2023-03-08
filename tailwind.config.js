/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Concert: ["Concert One", "cursive"],
      },
    },
  },
  plugins: [],
};
