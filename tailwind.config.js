module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Lato", "ui-sans-serif", "system-ui"],
      serif: ["Merriweather", "ui-serif", "Georgia"],
      mono: ["ui-monospace"],
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#cf0e48",
          gray: {
            DEFAULT: "#e5e5e5",
            dark: "#8a8a8a",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      padding: ["hover", "focus"],
    },
  },
  plugins: [],
};
