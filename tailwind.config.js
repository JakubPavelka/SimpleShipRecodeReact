/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0D1C4C",
        customPurple: "#6C6CFF",
        secondaryBlue: "#3456FF",
        lightBlue: "#46D9FF",
      },
    },
  },
  plugins: [],
};
