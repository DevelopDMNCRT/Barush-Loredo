/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C162A', // Morena cherry/maroon
        secondary: '#C6A664', // Gold accent
        dark: '#1a1a1a', // Dark text
        light: '#f5f5f5', // Light background
      }
    },
  },
  plugins: [],
}
