/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Colores cyberpunk específicos
        neon: {
          pink: "#ff00ff",
          purple: "#9d4edd",
          cyan: "#00ffff",
          blue: "#0072ff",
          yellow: "#ffdf00",
        },
        cyber: {
          dark: "#0d0a1e",
          darker: "#070514",
          light: "#2d1051",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        glow: {
          "0%, 100%": {
            textShadow: "0 0 5px #ff00ff, 0 0 10px #ff00ff",
          },
          "50%": {
            textShadow: "0 0 5px #9d4edd, 0 0 10px #9d4edd, 0 0 15px #9d4edd",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 2s ease-in-out infinite",
      },
      boxShadow: {
        "neon-pink": "0 0 5px #ff00ff, 0 0 10px #ff00ff",
        "neon-purple": "0 0 5px #9d4edd, 0 0 10px #9d4edd",
        "neon-cyan": "0 0 5px #00ffff, 0 0 10px #00ffff",
      },
    },
  },
<<<<<<< HEAD
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
=======
  plugins: [require("tailwindcss-animate")],
>>>>>>> v2
}
