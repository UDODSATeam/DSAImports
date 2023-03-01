/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        baloo: ["'Baloo Bhai 2'", 'cursive'],
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'loginImage': 'url("/LoginImage.png")'
      }
    },
  },
  plugins: [],
}
