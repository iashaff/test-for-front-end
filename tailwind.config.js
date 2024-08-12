/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['Inter', 'sans-serif']
      },
      letterSpacing: {
        default: '0.005em'
      },
    },
  },
  plugins: [],
}
