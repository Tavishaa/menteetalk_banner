/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'system-ui', 'sans-serif'],
        display: ['Raleway', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
