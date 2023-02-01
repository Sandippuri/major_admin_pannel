/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CE602D",
        "primary-active-light": "#F0CEBE",
        "primary-light": "#FAEFEA",
        secondary: "#2D2929",
        dark: "#1E1E1E",
        "gray-light": "#F2F2F2",
        "gray-active-light": "#D8D8D8",
        "gray-normal": "#808080",
        "gray-dark": "#606060",
        "red-light": "#FFE6E6",
        "red-active-light": "#FFB0B0",
        "red-normal": "#FF0000",
        "green-light": "#EBFFE8",
        "green-active-light": "#C2FFB6",
        "green-normal": "#2BBF0F",
        "blue-light": "#E6E8F3",
        "blue-active-light": "#B1B8DB0",
        "blue-normal": "#02198B",
      },
    },
  },
  plugins: [],
}
