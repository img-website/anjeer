/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme1': '#A2006E',
        'theme2': '#1a3d6b',
      },
      fontFamily: {
        Bricolage: ["Bricolage Grotesque"],
      },
    },
  },
  plugins: [],
}

