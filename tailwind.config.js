/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#084c34',
        secondary: '#b7e4c7',
        light: '#a9f1c9',
        hover: '#588157'
      },
      fontFamily: {
        space: ['space grotesk', 'monospace']
      }
    },
  },
  plugins: [],
}