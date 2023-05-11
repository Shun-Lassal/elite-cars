module.exports = {
  content: [
    "./components//*.{js,vue,ts}",
    "./layouts//.vue",
    "./pages/**/.vue",
    "./plugins/*/.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        192: "48rem",
        256: "64rem",
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {},
};
