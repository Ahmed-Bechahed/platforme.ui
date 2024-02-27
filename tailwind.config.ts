import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_blue: "#2d506c",
        secondary_blue: "#6291bb",
        gray_logo: "#4e4e4e",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
