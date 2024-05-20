const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'header-2': '2.5rem',
      'header-3': '1.5rem'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        'gochi-hand': ['var(--font-gochi-hand)']
      },
      colors: {
        'main-red-barn': '#864459',
        'seconday-light-blue': '#6BB9B2',
        'light-pink': '#FFF9FF',
        'dark-pink': '#F5ECEC',
        beige: '#FFF5ED'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
        // bounce: {
        //     '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)'},
        //     '40%': { transform: 'translateY(-30px)' },
        //     '60%': { transform: 'translateY(-15px)' },
        // }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        bounce: 'bounce 1.7s infinite'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
