import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: {
            DEFAULT: "hsl(var(--sidebar-primary))",
            foreground: "hsl(var(--sidebar-primary-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--sidebar-accent))",
            foreground: "hsl(var(--sidebar-accent-foreground))",
          },
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Pastel colors for dark theme
        rose: {
          50: "hsl(var(--rose-50))",
          100: "hsl(var(--rose-100))",
          200: "hsl(var(--rose-200))",
          300: "hsl(var(--rose-300))",
          400: "hsl(var(--rose-400))",
          500: "hsl(var(--rose-500))",
          600: "hsl(var(--rose-600))",
        },
        lavender: {
          50: "hsl(var(--lavender-50))",
          100: "hsl(var(--lavender-100))",
          200: "hsl(var(--lavender-200))",
          300: "hsl(var(--lavender-300))",
          400: "hsl(var(--lavender-400))",
          500: "hsl(var(--lavender-500))",
          600: "hsl(var(--lavender-600))",
        },
        sky: {
          50: "hsl(var(--sky-50))",
          100: "hsl(var(--sky-100))",
          200: "hsl(var(--sky-200))",
          300: "hsl(var(--sky-300))",
          400: "hsl(var(--sky-400))",
          500: "hsl(var(--sky-500))",
          600: "hsl(var(--sky-600))",
        },
        mint: {
          50: "hsl(var(--mint-50))",
          100: "hsl(var(--mint-100))",
          200: "hsl(var(--mint-200))",
          300: "hsl(var(--mint-300))",
          400: "hsl(var(--mint-400))",
          500: "hsl(var(--mint-500))",
          600: "hsl(var(--mint-600))",
        },
        peach: {
          50: "hsl(var(--peach-50))",
          100: "hsl(var(--peach-100))",
          200: "hsl(var(--peach-200))",
          300: "hsl(var(--peach-300))",
          400: "hsl(var(--peach-400))",
          500: "hsl(var(--peach-500))",
          600: "hsl(var(--peach-600))",
        },
        sage: {
          50: "hsl(var(--sage-50))",
          100: "hsl(var(--sage-100))",
          200: "hsl(var(--sage-200))",
          300: "h sl(var(--sage-300))",
          400: "hsl(var(--sage-400))",
          500: "hsl(var(--sage-500))",
          600: "hsl(var(--sage-600))",
        },
        coral: {
          50: "hsl(var(--coral-50))",
          100: "hsl(var(--coral-100))",
          200: "hsl(var(--coral-200))",
          300: "hsl(var(--coral-300))",
          400: "hsl(var(--coral-400))",
          500: "hsl(var(--coral-500))",
          600: "hsl(var(--coral-600))",
        },
        lilac: {
          50: "hsl(var(--lilac-50))",
          100: "hsl(var(--lilac-100))",
          200: "hsl(var(--lilac-200))",
          300: "hsl(var(--lilac-300))",
          400: "hsl(var(--lilac-400))",
          500: "hsl(var(--lilac-500))",
          600: "hsl(var(--lilac-600))",
        },
        cream: {
          50: "hsl(var(--cream-50))",
          100: "hsl(var(--cream-100))",
          200: "hsl(var(--cream-200))",
          300: "hsl(var(--cream-300))",
          400: "hsl(var(--cream-400))",
          500: "hsl(var(--cream-500))",
          600: "hsl(var(--cream-600))",
        },
        pearl: {
          50: "hsl(var(--pearl-50))",
          100: "hsl(var(--pearl-100))",
          200: "hsl(var(--pearl-200))",
          300: "hsl(var(--pearl-300))",
          400: "hsl(var(--pearl-400))",
          500: "hsl(var(--pearl-500))",
          600: "hsl(var(--pearl-600))",
        },
        pink: {
          50: "hsl(var(--pink-50))",
          100: "hsl(var(--pink-100))",
          200: "hsl(var(--pink-200))",
          300: "hsl(var(--pink-300))",
          400: "hsl(var(--pink-400))",
          500: "hsl(var(--pink-500))",
          600: "hsl(var(--pink-600))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
      },
      boxShadow: {
        "glow-rose": "0 0 15px 2px hsla(var(--rose-400), 0.3)",
        "glow-lavender": "0 0 15px 2px hsla(var(--lavender-400), 0.3)",
        "glow-sky": "0 0 15px 2px hsla(var(--sky-400), 0.3)",
        "glow-mint": "0 0 15px 2px hsla(var(--mint-400), 0.3)",
        "glow-peach": "0 0 15px 2px hsla(var(--peach-400), 0.3)",
        "glow-lilac": "0 0 15px 2px hsla(var(--lilac-400), 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
