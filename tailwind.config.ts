/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html','./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        primary: "#598C12",   // Green
        white: "#FFFFFF",     // White
        neonGreen: "#65991d", // Bright Green
        black: "#000000",     // Black
        lightGray: "#EDEDEC", // Light Gray
        gray: "#DDDDDD",      // Gray
        softWhite: "#F8F8F5", // Soft White
        darkGray: "#535355",  // Dark Gray
        offWhite: "#F9F9F9",  // Off White
        lightGreen:"#F7FBF4"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        levenim: ['"Levenim MT"', 'sans-serif'],
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
