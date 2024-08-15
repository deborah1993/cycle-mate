const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "cycle-mate": {
          extend: "dark",
          colors: {
            background: "#252525",
            foreground: "#ffffff",
            primary: {
              50: "rgba(237,245,245,0.1)",
              100: "rgba(237,245,245,0.2)",
              200: "rgba(237,245,245,0.3)",
              300: "rgba(237,245,245,0.4)",
              400: "rgba(237,245,245,0.5)",
              500: "rgba(237,245,245,0.6)",
              600: "rgba(237,245,245,0.7)",
              700: "rgba(237,245,245,0.8)",
              800: "rgba(237,245,245,0.9)",
              900: "rgba(237,245,245,1)",
              DEFAULT: "rgb(2 235 199)",
              foreground: "#ffffff",
            },
            secondary: "#ffffff",
            default: "#edf5f5",
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "99px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
      layout: {
        disabledOpacity: "0.3",
        radius: {
          small: "4px",
          medium: "6px",
          large: "8px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      },
    }),
  ],
};
