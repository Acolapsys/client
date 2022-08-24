/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Exo_Regular", "sans-serif"],
        medium: ["Exo_Medium", "sans-serif"],
        semibold: ["Exo_SemiBold", "sans-serif"],
        bold: ["Exo_Bold", "sans-serif"]
      },
      colors: {
        base: {
          main: "#23235F",
          secondary: "#232360"
        },
        primary: {
          DEFAULT: "#5051F9"
        },
        grey: {
          light: "#FBFAFF",
          dark: "#5F6388",
          background: "#F3F4F8",
          controls: "#F3F7FA",
          1: "#94A2BC",
          2: "#D7D7D7",
          3: "#505050",
          4: "#E3EBEE",
          5: "#768396"
        },
        blue: {
          light: "#1EA7FF"
        }
      },
      boxShadow: {
        sidebar: "0px 8px 14px rgba(62, 107, 224, 0.12)"
      }
    }
  },
  plugins: [],
  prefix: "cd-"
};
