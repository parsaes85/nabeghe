/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2xs": "390px",
      },
      colors: {
        primaryBlue: "#1d4ed8",
      },
      fontFamily: {
        Yekan: ["Yekan"],
      },
    },
  },
  plugins: [],
};
