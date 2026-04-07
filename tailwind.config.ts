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
        navy: {
          DEFAULT: "#1A3C6E",
          50: "#E8EDF4",
          100: "#D1DBE9",
          200: "#A3B7D3",
          300: "#7593BD",
          400: "#476FA7",
          500: "#1A3C6E",
          600: "#153158",
          700: "#102542",
          800: "#0A182C",
          900: "#050C16",
        },
        "medical-blue": {
          DEFAULT: "#2980B9",
          50: "#E9F3FA",
          100: "#D3E7F5",
          200: "#A7CFEB",
          300: "#7BB7E1",
          400: "#4F9FD7",
          500: "#2980B9",
          600: "#216694",
          700: "#194D6F",
          800: "#10334A",
          900: "#081A25",
        },
        gray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1F2937",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "count-up": "countUp 2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
