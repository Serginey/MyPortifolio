import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "sans-serif"],
      },
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        border: "#1f1f1f",
        muted: "#555555",
        subtle: "#888888",
        accent: "#c8a96e",
        foreground: "#e8e8e8",
        white: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
export default config;
