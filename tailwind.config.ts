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
        brand: {
          DEFAULT: "#4939D2",
          dark: "#531fae",
          light: "#4539D2",
        },
        cream: "#FAF7F6",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        "206": "51.5rem",
      },
      spacing: {
        "8.75": "2.1875rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "21.5": "5.375rem",
        "22": "5.5rem",
        "31": "7.75rem",
        "43": "10.75rem",
        "70": "17.5rem",
        "90": "22.5rem",
        "200": "50rem",
      },
      lineHeight: {
        "12": "3rem",
        "16": "4rem",
        "21.5": "5.375rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        heroFloatUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        heroFloatDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        crtTick: {
          "0%, 45%": { transform: "translateY(0)" },
          "50%, 95%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(-200%)" },
        },
      },
      animation: {
        heroFloatUp: "heroFloatUp 3s ease-in-out infinite",
        heroFloatDown: "heroFloatDown 2.6s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
