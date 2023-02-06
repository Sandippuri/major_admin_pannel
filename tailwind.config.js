/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23353F",
        "primary-light": "#72ADCC",
        dark: "#1E1E1E",
        "gray-light": "#E7E7E7",
        "gray-normal": "#C0C0C0",
        "gray-dark": "#616161",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
