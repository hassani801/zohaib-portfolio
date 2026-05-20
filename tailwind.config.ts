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
        "8xl": "88rem",
        "125": "31.25rem",
        "173.25": "43.3125rem",
        "206": "51.5rem",
        "330": "82.5rem",
      },
      minWidth: {
        "31": "7.75rem",
        "96.25": "24.0625rem",
      },
      spacing: {
        "4.25": "1.0625rem",
        "7.5": "1.875rem",
        "8.75": "2.1875rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "21.5": "5.375rem",
        "22": "5.5rem",
        "27": "6.75rem",
        "30": "7.5rem",
        "31": "7.75rem",
        "43": "10.75rem",
        "85": "21.25rem",
        "70": "17.5rem",
        "90": "22.5rem",
        "112.5": "28.125rem",
        "120": "30rem",
        "151": "37.75rem",
        "200": "50rem",
      },
      width: {
        "16.25": "4.0625rem",
        "112.5": "28.125rem",
      },
      height: {
        "15": "3.75rem",
        "30": "7.5rem",
        "85": "21.25rem",
      },
      minHeight: {
        "120": "30rem",
        "151": "37.75rem",
      },
      lineHeight: {
        "12": "3rem",
        "15": "3.75rem",
        "16": "4rem",
        "16.25": "4.0625rem",
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
        buttonShine: {
          "0%": { transform: "translateX(-100%) rotate(30deg)" },
          "100%": { transform: "translateX(200%) rotate(30deg)" },
        },
        factFadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        heroFloatUp: "heroFloatUp 3s ease-in-out infinite",
        heroFloatDown: "heroFloatDown 2.6s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        buttonShine: "buttonShine 1.2s linear infinite",
        factFadeIn: "factFadeIn 0.8s ease-out forwards",
      },
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
