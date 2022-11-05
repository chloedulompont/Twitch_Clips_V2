/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'darkPurple': '#451B66',
        'lightPurple': '#AA7BC3',
        'cream': '#F2E9E4',
        'darkGray': '#19231A',
        'gray': '#887880'
      }
    },
  },
  plugins: [],
}
