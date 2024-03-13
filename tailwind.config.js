/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstColor: "#F6F7F9", // background color
        secondColor: "#3A4256", // nav + footer color
      },
    },
  },
  plugins: [require("daisyui")],
}

