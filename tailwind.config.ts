import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|divider|drawer|image|link|navbar|toggle|ripple|spinner|modal).js"
  ],
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false, 
      layout: {}, 
      themes: {
        dark: {
          layout: {},
          colors: {
            background: "#111111",
            foreground: "#ffffff",
          }, 
        },
        light: {
          layout: {}, 
          colors: {
            background: "#f1f1f1",
            foreground: "#111111",
          },
        },
      },
    }),
  ],
} satisfies Config;
