/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens : {
        sm : "400px",
        md : "768px",
        lg : "1170px",
    },
    container : {
        center : true,
        padding : {
          md : "0 4rem"
        }
    },
    extend: {
      colors: {
        primary: "#DD3142",
        dark: "#222222",
        light: "#E5E5E5",
      },
      screens : {
        mobile : "450px",
    }
    },
  },
  plugins: [],
};
