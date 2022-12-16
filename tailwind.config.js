module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./layouts/**/*.tsx",
    "./ui/**/*.tsx"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#981f22"
      },
      gridTemplateRows: {
        10: "repeat(10,minmax(0, 1fr))"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
