/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "purplish-blue": "hsl(243, 100%, 62%)",
        "marine-blue": "hsl(213, 96%, 18%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray":"hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
      },
      fontFamily: {
        ubuntu: "'Ubuntu', sans-serif",
      },
    },
    screens: {
      xs: "320px",
      sm: "475px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
  },
  plugins: [],
};
