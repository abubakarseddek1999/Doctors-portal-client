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
        primary: '#0FCFEC',
        secondary: '#19D3AE',
        accent: "#3A4256",
        neutral: "#3D4451",
        "base-100": "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
}

