import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#161616",
        deep: "#363333",
        mid: "#515050",
        hi: "#727272",
        ember: "#AF3433",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      animation: {
        aurora: "aurora 14s ease-in-out infinite alternate",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate(-6%, -4%) scale(1)" },
          "100%": { transform: "translate(6%, 5%) scale(1.12)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
