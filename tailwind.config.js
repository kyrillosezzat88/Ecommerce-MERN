/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        InstrumentSans: ["InstrumentSans", "sans-serif"],
      },
      colors: {
        primary: "#d2ef9a",
        black: "#000",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
    themes: [
      {
        mytheme: {
          primary: "#d2ef9a", // Change this to your desired primary color
          black: "#000",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
