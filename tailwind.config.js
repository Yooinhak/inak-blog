/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      gray: {
        0: '#FFFFFF',
        10: '#FAFBFB',
        20: '#F5F6F7',
        30: '#EBEDF0',
        40: '#DFE2E6',
        50: '#C2C7D0',
        60: '#B3B9C4',
        70: '#A6AEBB',
        80: '#98A1B0',
        90: '#8993A4',
        100: '#7A8699',
        200: '#6B788E',
        300: '#5D6B82',
        400: '#505F79',
        500: '#42526D',
        600: '#354764',
        700: '#243757',
        800: '#15294B',
        900: '#091E42',
      },
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

      postCardBackgroundFrom: 'rgba(161, 196, 253, 0.4)',
      postCardBackgroundTo: 'rgba(194, 233, 251, 0.4)',
    },
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      typography: {
        DEFAULT: {
          css: {
            'h2, h3, h4': {
              scrollMarginTop: '5rem',
            },
            p: {
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            '.callout-contents > p': {
              margin: 0,
            },

            // Inline code only
            ':not(pre) > code': {
              fontWeight: 'inherit',
              bottom: 1,
              margin: '0 3px',
              color: '#eb5757',
              backgroundColor: 'rgba(135,131,120,0.15)',
              fontFamily:
                '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
              borderRadius: 3,
              padding: '0.2em 0.4em',
              overflowWrap: 'break-word',
            },

            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },

            'code[data-line-numbers] > [data-line]::before': {
              counterIncrement: 'line',
              content: 'counter(line)',

              /* Other styling */
              display: 'inline-block',
              width: '1rem',
              marginRight: '1.4rem',
              textAlign: 'right',
              color: 'lightgrey',
              fontSize: '0.75rem',
            },

            'code[data-line-numbers-max-digits="2"] > [data-line]::before': {
              width: '1rem',
            },

            'code[data-line-numbers-max-digits="3"] > [data-line]::before': {
              width: '2rem',
            },

            pre: {
              paddingRight: 0,
              paddingLeft: 0,
              color: 'var(--shiki-light)',
              backgroundColor: 'var(--shiki-light-bg)',
              border: '1px solid #e5e7eb',
            },

            '.dark pre': {
              backgroundColor: 'var(--shiki-dark-bg)',
              color: 'var(--shiki-dark)',
              border: '1px solid #374151',
            },

            'pre > code > span': {
              paddingLeft: '1.1rem',
              paddingRight: '1rem',
            },

            'pre code span': {
              color: 'var(--shiki-light)',
            },
            '.dark pre code span': {
              color: 'var(--shiki-dark)',
            },

            '[data-highlighted-line]': {
              backgroundColor: 'rgba(253, 224, 71, 0.2)',
            },

            '.project img': {
              marginTop: '0px !important',
            },

            '.project p,ul,li': {
              fontSize: 15,
            },

            u: {
              textUnderlineOffset: '4px',
              textDecorationThickness: 1,
              fontWeight: 600,
            },
          },
        },
      },
      keyframes: {
        animateBG: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        animateBG: 'animateBG 20s ease infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
