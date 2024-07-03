/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1280px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gridTemplateColumns: {
        "auto-fit-minmax": "repeat(auto-fit, minmax(240px, 1fr))",
        "menu-auto-fit": "repeat(auto-fit,minmax(250px,1fr))",
        "contact-auto-fit": "repeat(auto-fit,minmax(300px,1fr))",
        "resturant-auto-fit": "repeat(auto-fit,minmax(340px,1fr))",
      },
      colors: {
        primary: "#f9795f",
        red: "#c1542d",
        "dark-red": "#9d1f1a",
        pink: "#fa92cb",
        green: "#176266",
        yellow: "#fbdd47",
      },
    },
    backgroundImage: {
      "hero-pattern": "url('./assetes/01.png')",
      "menu-section-bg": "url('./assetes/pngtree-handcrafted-light.png')",
    },
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
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
