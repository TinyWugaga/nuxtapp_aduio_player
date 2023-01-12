export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/global.scss"],
  app: {
    head: {
      titleTemplate: "%s - Tiny Lofi Player",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Farro",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Nerko+One",
        },
      ],
    },
  },
});
