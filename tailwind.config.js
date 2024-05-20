/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      violet: colors.violet,
      sky: colors.sky,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'bluechill':{
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae2fd',
        300: '#7dc9fc',
        400: '#38abf8',
        500: '#0e91e9',
        600: '#0278c7',
        700: '#0362a1',
        800: '#075385',
        900: '#0c476e',
        950: '#082f49',
        1000: '#061f38',
        1050: '#041528',
        1100: '#020c18',
      },
    },
    extend: {},
  },
  plugins: [],
}