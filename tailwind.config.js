/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: [ 'Bahnschrift', 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow', 'sans-serif-condensed', 'sans-serif'],
      serif: [ Didot, 'Bodoni MT', 'Noto Serif Display', 'URW Palladio L', 'P052', 'Sylfaen', 'serif' ],
      body: [ 'Bahnschrift', 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow', 'sans-serif-condensed', 'sans-serif'],
    },
  },
  plugins: [],
});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // Path to Tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    extend: {
      colors: {
        // light mode
        tremor: {
          brand: {
            faint: colors.yellow[50],
            muted: colors.yellow[200],
            subtle: colors.yellow[400],
            DEFAULT: colors.yellow[500],
            emphasis: colors.yellow[700],
            inverted: colors.yellow,
          },
          background: {
            muted: colors.zinc[50],
            subtle: colors.zinc[100],
            DEFAULT: colors.white,
            emphasis: colors.zinc[700],
          },
          border: {
            DEFAULT: colors.zinc[200],
          },
          ring: {
            DEFAULT: colors.zinc[200],
          },
          content: {
            subtle: colors.zinc[400],
            DEFAULT: colors.zinc[500],
            emphasis: colors.zinc[700],
            strong: colors.zinc[900],
            inverted: colors.white,
          },
        }
      },
      borderRadius: {
        'tremor-small': '0.26rem',
        'tremor-default': '0.3rem',
        'tremor-full': '9999px',
      }
    },
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
}