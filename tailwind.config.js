/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['monarcha', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      colors: {
        Background: "#1e1e1f",
        Rose: "#f28c95",
        Green: "#0daf79",
      },
      backgroundColor: {
        Background: "#1e1e1f",
        Rose: "#f28c95",
        Green: "#0daf79",
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
