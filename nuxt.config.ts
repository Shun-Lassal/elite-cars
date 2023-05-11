// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
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
});
