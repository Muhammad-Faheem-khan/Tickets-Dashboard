/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // For React files
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          900: "#18181A",
          800: "#021229",
          700: "#606067",
          400: "#BABABF",
          300: "#D1D1D4",
          200: "#E8E8EA",
          100: "#F8F8F8",
        },
        "customgray-1": "#E7E8EC",
        "customgray-2": "#FAFAFA",
        primary: "#054580",
        secondary: "#343C6A",
      },
    },
  },
  plugins: [],
};
