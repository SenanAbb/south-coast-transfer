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
        black: {
          pure: "#000",
          900: "#1B1B1B",
          400: "#35474A",
          300: "#556568",
          200: "#8B9597",
        },
        white: {
          DEFAULT: "#E6E8E8",
          pure: "#FFF",
        },
        yellow: {
          400: "#EDA959",
          500: "#E8932F"
        },
        blue: {
          500: "#57D7F7",
          900: "#255A68",
        }
      },
    },
  },
  plugins: [],
};
export default config;
