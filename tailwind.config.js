
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        buddhist: {
          blue: '#005EB8',
          yellow: '#FFC627',
          red: '#DA291C',
          white: '#FFFFFF',
          orange: '#F2A900',
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, filter: 'brightness(1) drop-shadow(0 0 5px rgba(255,255,255,0.5))' },
          '50%': { opacity: 0.8, filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(255,255,255,0.8))' },
        }
      }
    },
  },
  plugins: [],
}
