/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
     './src/app/**/*.{js,ts,jsx,tsx}', 
      './src/components/**/*.{js,ts,jsx,tsx}',        
  
  ],
  theme: {
    extend: {
       colors: {
       background: '#FFFFFF',
        'background-inverse': '#000000',
        'background-secondary':'#282828',
        'background-light':'#F4F4F4',
        'background-neutral':'#F1EFED',
        surface: '#F4F4F4',

        primary: '#F8BE4C',
        'primary-dark': '#E59E12',
        'text-dark-muted':"#bbb",

        'text-primary': '#000000',
        'text-muted': '#2E2E38',
        'text-on-dark': '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      spacing: {
        'section': '120px',
        'container': '1440px',
      },
    },
  },
  plugins: [
     plugin(function ({ addComponents }) {
      addComponents({
        '.link-style': {
          '@apply  transition hover:text-text-on-dark hover:underline hover:underline-offset-2 active:underline active:underline-offset-2': {},
          },
       
      });
    }),
  ],
};
