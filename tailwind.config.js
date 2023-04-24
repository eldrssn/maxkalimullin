/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        175: '1.75',
      },
      translate: {
        m7: '-7px',
      },
      rotate: {
        m25: '-25deg',
      },
    },
  },
  plugins: [],
};
