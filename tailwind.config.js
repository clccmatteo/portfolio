/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5F7BCD", // Azzurro chiaro
        secondary: "#1E90FF", // Azzurro intenso
      },
    },
  },
  plugins: [],
};
