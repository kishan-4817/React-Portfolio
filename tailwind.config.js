/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space': {
          50: '#f5f5ff',
          100: '#ecedff',
          200: '#d8daff',
          300: '#b6b8ff',
          400: '#8f91ff',
          500: '#6366f1',
          600: '#4649e5',
          700: '#383bc3',
          800: '#2f319e',
          900: '#2a2c7d',
          950: '#1a1b4b',
        },
        'dark': {
          DEFAULT: '#0a0a0f',
          50: '#f6f6f9',
          100: '#ededf2',
          200: '#d6d6e1',
          300: '#b3b3c6',
          400: '#8889a6',
          500: '#686988',
          600: '#515270',
          700: '#43445c',
          800: '#393a4d',
          900: '#333442',
          950: '#0a0a0f',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 