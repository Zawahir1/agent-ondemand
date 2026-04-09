import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        serif: ["var(--font-landing-serif)", "serif"],
      },
      colors: {
        // Semantic Mapping based on JSON
        background: "#0a0a0a", // neutral-950
        foreground: "#fafafa", // neutral-50
        panel: "rgba(23, 23, 23, 0.8)", // neutral-900/80
        border: "#262626", // neutral-800

        // Landing Page Specific Colors
        cream: '#FFFBF7',
        dark: '#111111',
        lavender: '#E8E5F5',
        brand: {
          blue: '#2563EB',
          purple: '#7C3AED',
        },

        primary: {
          DEFAULT: "#818cf8", // indigo-400
          foreground: "#000000",
          glow: "rgba(129, 140, 248, 0.3)",
        },
        muted: {
          DEFAULT: "#171717", // neutral-900
          foreground: "#d4d4d4", // neutral-300
        },
        accent: {
          DEFAULT: "#262626", // neutral-800
          foreground: "#fafafa",
        },
        // Status colors
        success: "#34d399", // emerald-400
        warning: "#fbbf24", // amber-400
        danger: "#fb7185", // rose-400
        info: "#38bdf8", // sky-400
        shore: {
          bg: '#FAFAFA', // Off-white
          lime: '#bfff58',
          blue: '#0055FF',
          card1: '#0055FF', // Electric Blue (Keep)
          card2: '#111827', // Dark gray for contrast cards
          card3: '#1e3a8a', // Deep Blue
          card4: '#BFDBFE', // Pale Blue
          card5: '#FFFFFF', // White
          nav: '#ffffff', // White navbar
          text: '#111111', // Main text
          muted: '#6B7280', // Muted text
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem", // JSON requirement
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.2)",
        glow: "0 0 20px -5px var(--token-accent-glow)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob 7s infinite",
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;