// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/logo/logo-bjpm.png' },
      ],
    }
  },
  devtools: { enabled: true },
  runtimeConfig: {
    googleCaptchaKeyPrivate: '6LfHAmYqAAAAAOeVH7pCYT0RCo6Zxjq4AvHLngZ7',
    public: {
      googleCaptchaKeyPublic: "6LfHAmYqAAAAAGpguF7iJyAFyNJIXrZExjxh5atf",
      apiPublic: "https://api-web.binajayaperkasamandiri.com"
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-aos', '@nuxt/icon', 'dayjs-nuxt'],
  dayjs: {
    locales: ['en', 'id'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'id',
    defaultTimezone: 'Asia/Jakarta',
  }
})