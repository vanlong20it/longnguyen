import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "992px",
      lg: "1280px",
    },
    fontFamily: {
      heading: "Be Vietnam Pro",
      body: "Be Vietnam Pro",
    },
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s  linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: {
          DEFAULT: "#D9CCC1",
        },
        secondary: {
          DEFAULT: "#595551",
        },
        accent: {
          DEFAULT: "#8C847D",
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        hero: "url('/images/bg-hero.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
