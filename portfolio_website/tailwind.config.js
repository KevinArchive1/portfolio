/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'x-6': '6deg',
        'y-6': '6deg',
      },
      animation: {
        'fade-in': 'fadeIn 3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
