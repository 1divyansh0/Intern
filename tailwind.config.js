/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006d62",
        primaryLight: "#c7e0dc",
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1rem",
      }
    },
  },
  plugins: [],
}
