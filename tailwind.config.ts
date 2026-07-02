import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        gold: "#C9A227",
        ink: "#222222",
        mist: "#F8F9FA"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-plex)", "IBM Plex Sans", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(11, 31, 58, 0.12)",
        soft: "0 14px 40px rgba(11, 31, 58, 0.08)"
      }
    }
  },
  plugins: [forms]
};

export default config;
