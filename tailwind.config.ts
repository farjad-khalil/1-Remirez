/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // Main Brand Color
          light: '#1D4ED8',
          dark: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#B45309',
        },
        neutral: {
          DEFAULT: '#374151',
          light: '#6B7280',
          dark: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  darkMode: 'class', // Enables dark mode using "class"
  plugins: [],
};
