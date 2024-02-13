/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        trueShadow: "0 0 20px green",
        falseShadow: "0 0 20px red",
      }
    },
  },
  plugins: [],
}