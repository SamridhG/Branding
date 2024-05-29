/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '10.5rem',
        '12xl': '12rem',
        // Add more as needed
      }
    },
  },
  plugins: [],
}

