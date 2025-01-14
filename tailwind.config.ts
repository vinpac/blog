import type { Config } from "tailwindcss";
import { stone } from "tailwindcss/colors";

export default {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: stone,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
