import {heroui} from "@heroui/theme";
import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(avatar|breadcrumbs|button|card|chip|code|divider|drawer|image|link|navbar|skeleton|snippet|toggle|ripple|spinner|modal|popover).js"
  ],
  theme: {
    extend: {
      colors: {
        chipBG: colors.cyan[700], // Add your custom color here
        // You can add more colors as needed
      },
    },
  },
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
            primary: colors.cyan[600],
            secondary: colors.red[700],
          }, 
        },
        light: {
          layout: {}, 
          colors: {
            background: "#f1f1f1",
            foreground: "#111111",
            primary: colors.cyan[700],
            secondary: colors.red[700],
          },
        },
      },
    }),
  ],
} satisfies Config;
