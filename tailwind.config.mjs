/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { keyframes: {
      breathing: {
        "0%, 100%": { filter: "drop-shadow(0px 0px 5px rgba(34, 197, 94, 0.8))" },
        "50%": { filter: "drop-shadow(0px 0px 10px rgba(34, 197, 94, 0.8)) brightness(1.3)" }
      }
    },
    animation: {
      breathing: "breathing 1.5s infinite ease-in-out"
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        }
      },
    },
  },
  plugins: [],
};
