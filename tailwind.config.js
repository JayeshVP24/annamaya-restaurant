module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: "#302B2B",
        primary: "#F3D950",
        secondary: "#E7D990",
        tertiary: "#BBA636"
      }
    },
    fontFamily: {
      "pacifico": ["Pacifico", "cursive"],
      "paprika": ["Paprika", "cursive"],
      "poppins": ["Poppins", "sans-serif"],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: "jit"
}
