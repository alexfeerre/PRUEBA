// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [{
    path: "~/components"
  },
],
  googleFonts:{
    families:{
      "Roboto Mono":true
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/google-fonts']
})
