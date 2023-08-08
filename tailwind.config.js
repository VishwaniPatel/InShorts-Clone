/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "320px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      textColor: {
        base: "var(--color-text-base)",
        inverted: "var(--color-text-inverted)",
        muted: "var(--color-text-muted)",
      },
      backgroundColor: {
        base: "var(--color-fill)",
        inverted: "var(--color-inverted)",
        "card-fill": "var(--color-card-bg-fill)",
      },
      borderColor: {
        base: "var(--color-inverted)",
      },
    },
  },
};
