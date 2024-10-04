/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangered: '#ff4500',
        orange: "#ff8c00",
        darkCharcoal: "#333333",
        beige: "#f4a460",
        gold: "#ffd700",
        textSecondary: "#e0e0e0",
        bgBlack: "#000000",
        bgSlate: "#2f4f4f",
        bgDarkGray: "#1F1F1F",
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


