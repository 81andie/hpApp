/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-in-out',
        "slide-in-left": "slide-in-left 0.6s ease-out"
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        "slide-in-left": {
          "0%": {
            "transform": "translateX(-20px)"
          },
          "100%": {
            "transform": "translateX(0)"
          }
        }
      },

    },
  },
  plugins: [],
}

