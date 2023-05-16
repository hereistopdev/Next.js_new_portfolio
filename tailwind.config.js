/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // xs: "600px",
        sm: "770px",
        md: "850px",
        lg: "993px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
