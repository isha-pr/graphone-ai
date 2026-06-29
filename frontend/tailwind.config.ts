import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brandRed: {
          DEFAULT: "#ff1a3d",
          hover: "#e00e2d",
          light: "rgba(255, 26, 61, 0.08)",
          lightHover: "rgba(255, 26, 61, 0.12)",
        },
        brandPurple: {
          DEFAULT: "#7c3aed",
          light: "rgba(124, 58, 237, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

