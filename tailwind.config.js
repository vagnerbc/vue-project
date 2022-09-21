/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#451231',
        secondary: '#2d3748',
        accent: '#ed8936',
      },
    },
  },
  plugins: [],
}
