/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#52796F',
      },
      boxShadow: {
        'around': '0 5px 30px 0px rgba(0, 0, 0, .3)',
      }
    }
  },
  plugins: []
}