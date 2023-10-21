/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      dark: "#002f34",
      olx: "#0079fe",
      headerBg: "#f7f8f8",
      white: "#ffffff",
      input: "#00e9df",
      bottomImage: "#f7faf9",
      grey: "#eaeeef",
      lightBlue:"#3a77ff",
      text :"#316468",
    },
    extend: {
      minWidth: {
        "24px": "24px",
        "90px": "90px",
        "150px": "150px",
      },
      minHeight: {
        "24px": "24px",
        "90px": "90px",
      },
      fontFamily: {
        customFont: ["Roboto", "Nunito", "sans-serif"],
      },
      padding: {
        100: "450px",
      },
      height: {
        "47px": "47px",
      },
      width: {
        "100px": "100px",
        "400px": "400px",
        "87%" :"87%",
        "95%" :"95%",
        '450px': '450px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },spacing: {
        '450px': '600px',
      },maxWidth :{
        '85%': '85%',
        
      }
    },
  },
  plugins: [],
};
