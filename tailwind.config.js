/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sequel: ['Sequel100Wide', 'sans-serif'],
        helvetica: ['Helvetica Now Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
