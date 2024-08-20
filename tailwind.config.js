/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      gray: colors.gray,
      primary: {
        100: '#ECF6FE',
        200: '#D9ECFE',
        300: '#D9ECFE',
        400: '#B8D5FD',
        500: '#A1C4FD',
        600: '#7597D9',
        700: '#516FB6',
        800: '#334C92',
        900: '#1E3379',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
