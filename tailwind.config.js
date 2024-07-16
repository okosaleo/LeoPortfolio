/** @type {import('tailwindcss').Config} */
import animationDelay from 'tailwindcss-animation-delay'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Humane: ['Humane', 'sans-serif'],
      Sunage: ['Sunage'],
      Born: ['Born'],
    },
    extend: {
      boxShadow: {
        'leo': '0px 0px 13px 1px rgba(251,251,251,1)',
      },
      animation: {
        'fadeOut': 'fadeOut 3s ease-in-out forwards',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1'},
          '100%': {opacity: '1'}
        },
      },
    },
  },
  plugins: [animationDelay]
}

