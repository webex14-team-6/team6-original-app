/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        questionapper: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        questionapper: "questionapper 1s ease-out 0s  forwards",
        disappear: "disappear 3s ease 0s 1 forwards",
      },
    },
  },
  plugins: [],
}
