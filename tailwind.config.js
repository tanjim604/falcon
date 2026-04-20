/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colors sampled from the Falcon Security design
        brand: {
          red: "#E63928",
          dark: "#1A1A1A",
          black: "#111111",
        },
      },
      backgroundImage: {
        // Useful if you want to reuse that specific dark overlay
        'hero-overlay': "linear-gradient(to right, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 100%)",
      },
    },
  },
  plugins: [],
};