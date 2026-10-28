import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "autumn-ivory": "#F8F7FC",
        "autumn-cream": "#F0ECF9",
        "autumn-navy": "#1E1B3A",
        "autumn-rust": "#6B46C1",
        "autumn-camel": "#9F7AEA",
        "autumn-lilac": "#E6E0F8",
        "autumn-purple": "#5B34B5",
        "autumn-plum": "#2D1B4E",
        "autumn-lavender": "#D6BCFA",
      },
    },
  },
  plugins: [],
};

export default config;
