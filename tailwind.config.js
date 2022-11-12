/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#101935',
        'white': '#eee5e9',
        'darkGray': '#262322',
        'gray': '#887880'
      }
    },
  },
  plugins: [],
}
