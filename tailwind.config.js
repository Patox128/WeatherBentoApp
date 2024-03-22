/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontfamily: {
        fira: ["Montserrat Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
