import {heroui} from "@heroui/theme";
import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|divider|drawer|image|link|navbar|toggle|ripple|spinner|modal|breadcrumbs).js"
  ],
  plugins: [
    heroui({
      prefix: "nextui",
      addCommonColors: false, 
      layout: {}, 
      themes: {
        dark: {
          layout: {},
          colors: {
            background: "#000000",
            foreground: "#ffffff",
            secondary: colors.red[700],
          }, 
        },
        light: {
          layout: {}, 
          colors: {
            background: "#f1f1f1",
            foreground: "#111111",
            secondary: colors.red[700],
          },
        },
      },
    }),
  ],
} satisfies Config;
