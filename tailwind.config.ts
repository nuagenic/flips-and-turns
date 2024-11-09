import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        "1": "1px",
      },
      colors: {
        basic: "#F2F2F2",
        header: "#CCCCCC",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      width: {
        vh: "100vh",
        "1/2vh": "50vh",
        "3/4vh": "75vh",
      },
      height: {
        vh: "100vh",
        "1/2vh": "50vh",
        "3/4vh": "75vh",
      },
      fontFamily: {
        KoPub: ["KoPubWorldBatang", "serif"],
        sans: ["Pretendard", "sans-serif"],
      },
      transitionDuration: {
        "1500": "1500ms",
        "1800": "1800ms",
        "2000": "2000ms",
      },
      animation: {
        "spin-y": "spinY 5s linear infinite",
      },
      keyframes: {
        spinY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      cursor: {
        next: "url(/next.svg), auto",
        prev: "url(/prev.svg), auto",
      },
    },
  },
  plugins: [],
};
export default config;
