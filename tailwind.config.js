/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ["Lucida Bright", "sans-serif"],
      sans1: ["Georgia","sans-serif"],
    },
    extend: {},
  },
  plugins: [],
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.css'],
  // ...
}

