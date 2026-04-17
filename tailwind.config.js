/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "4.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "3.75rem",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        "display-md": ["3rem", { lineHeight: "1.2" }],
        "heading-xl": ["2.25rem", { lineHeight: "1.3" }],
        "heading-lg": ["1.875rem", { lineHeight: "1.35" }],
        "heading-md": ["1.5rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        wider: "0.15em",
        widest: "0.3em",
      },
    },
  },
};
