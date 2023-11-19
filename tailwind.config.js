/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      extend: {},
      white: "#ffffff",
      red: "#551f00",
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
