/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#2b3945',
      'very-dark-blue': '#202c37',
      'black': '#111517',
      'dark-gray': '#858585',
      'very-light-gray': '#fafafa',
      'white': '#ffffff',
    },
    extend: {},
  },
  plugins: [],
}
