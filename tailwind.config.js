/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./**/*.liquid"
  ],
  theme: {
    container: {
      center: true
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      ocean: {
        '400': '#182641',
        '500': '#0E1C37'
      },
      pearl: {
        "400": "#fde4a9",
        "500": "#f3da9f"
      },
      gray: {
        "50": "#94989f",
        "100": "#8a8e95",
        "200": "#80848b",
        "300": "#767a81",
        "400": "#6c7077",
        "500": "#62666d",
        "600": "#585c63",
        "700": "#4e5259",
        "800": "#44484f",
        "900": "#3a3e45"
      }
    },
    fontFamily: {
      heading: ['ITC Avant Garde', 'Helvetica Neue', 'sans-serif'],
      body: ['Work Sans', 'sans-serif'],
      em: ['Italianno', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}
