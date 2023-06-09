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
    ['@nuxtjs/google-fonts', {
      families: {
        'Bruno Ace SC': true,
        Lato: [100,200,300,400,500,600,700,800],
        download: true,
        inject: true
      }
    }]
  ],
  tailwindcss: {
    cssPath: "~/assets/css/colors.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
  },
  plugins: [],
});
