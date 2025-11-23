/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6c5ce7', // Soft purple from original design
        secondary: '#8e44ad',
        accent: '#a29bfe',
        background: '#f3eaff',
        surface: '#ffffff',
        text: '#2e1a47',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
