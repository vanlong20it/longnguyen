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
    extend: {
      colors: {
        primary: "#53cf26",
        secondary: "#06221b",
        accent: "#146c28",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        hero: "url('/images/bg-hero.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
