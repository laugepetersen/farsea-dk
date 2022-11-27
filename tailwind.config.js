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
        "background": "#F6F7F8",
        "border": "#CFD2D7",
        "text": "707070"
      }
    },
    fontFamily: {
      script: ['Parisienne', 'cursive'],
      heading: ['Noe Display', 'serif'],
      body: ['Work Sans', 'sans-serif'],
    },
    borderRadius: {
      'none': '0',
      'sm': '4px',
      'md': '8px',
      'lg': '16px',
      'xl': '32px',
      'full': '9999px'
    },
    extend: {
      width: {
        "screen": "100vw",
      },
      height: {
        "screen": "100vh",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
