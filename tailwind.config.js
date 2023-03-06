/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        mammoth : ['8rem', { lineHeight: '5rem' }]
      }
    },
  },
  plugins: [],
}
