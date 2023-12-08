/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#545454",
        secondary: "#454545",
        tertiary: "#747474",
        fontcolor1: "#A6A6A6",
        fontcolor2: "#BFBCBC",
        redstyled1: "#FF6D55",
        redstyled2: "#E84848",
        greenstyled: "#00BF63",
        yellowstyled: "#FDD04C",
        bluestyled: "#0CC0DF",
        blackstyled: "#080808",
      },
    },
  },
  plugins: [],
};
