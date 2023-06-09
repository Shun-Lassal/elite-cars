module.exports = {
  content: [
    "./components//*.{js,vue,ts}",
    "./layouts//.vue",
    "./pages/**/.vue",
    "./plugins/*/.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      prim: ['Bruno Ace SC', 'serif'],
      second: ['Lato', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "40rem",
        160: "44rem",
        192: "48rem",
        256: "64rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
