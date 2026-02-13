/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#58c8ca',
          50: '#e8f9fa',
          100: '#c6f0f1',
          200: '#a0e7e9',
          300: '#7adde0',
          400: '#5ed4d7',
          500: '#58c8ca',
          600: '#4bb4b6',
          700: '#58c8ca',
          800: '#3a8f91',
          900: '#2e7374',
        },
        blue: {
          50: '#e8f9fa',
          100: '#c6f0f1',
          200: '#a0e7e9',
          300: '#7adde0',
          400: '#5ed4d7',
          500: '#58c8ca',
          600: '#4bb4b6',
          700: '#58c8ca',
          800: '#3a8f91',
          900: '#2e7374',
        },
      },
    },
  },
  plugins: [],
}
