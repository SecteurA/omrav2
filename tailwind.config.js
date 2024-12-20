/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#fdb640',
          light: '#fee4b7',
          dark: '#d99520',
        },
      },
    },
  },
  plugins: [],
};