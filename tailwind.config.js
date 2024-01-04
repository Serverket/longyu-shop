/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pp: ['Press Start 2P'],
        tektur: ['"Tektur"'],
        mont: ['"Montserrat"'],
      },
    },
  },
  plugins: [],
}