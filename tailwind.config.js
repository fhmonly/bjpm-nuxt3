/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        main: "#438d3d",
        greybf: "#bfbfbf", // grey1
        greyf7: "#F7F7F7", // grey2
        body: "#ffffff"
      }
    },
    screens: {
      'mobile': '360px',
      'tablet': '520px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

