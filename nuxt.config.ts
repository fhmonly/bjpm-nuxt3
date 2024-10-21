// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    googleCaptchaKeyPrivate: '6LfHAmYqAAAAAOeVH7pCYT0RCo6Zxjq4AvHLngZ7',
    public: {
      googleCaptchaKeyPublic: "6LfHAmYqAAAAAGpguF7iJyAFyNJIXrZExjxh5atf",
      apiPublic: "https://api-web.binajayaperkasamandiri.com"
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-aos', '@nuxt/icon'],
})
