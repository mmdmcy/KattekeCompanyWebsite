/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          orange: '#FF6B00',
          black: '#1A1A1A',
        }
      }
    },
  },
  plugins: [],
};