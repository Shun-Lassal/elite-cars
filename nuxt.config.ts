// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
    "images": resolve(__dirname, "./assets/"),
  },
  css: ["~/assets/main.css"],
  modules: [
    // Simple usage
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/colors.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
  },
  plugins: [],

});
