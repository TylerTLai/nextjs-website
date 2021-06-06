module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00c9d3",
      },
      fontFamily: {
        body: ["Inter"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
