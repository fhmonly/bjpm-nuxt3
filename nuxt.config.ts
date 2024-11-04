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
        { rel: 'icon', type: 'image/x-icon', href: '/img/logo/logo-bjpm.png' },
      ],
    }
  },
  devtools: { enabled: true },
  runtimeConfig: {
    googleCaptchaKeyPrivate: '6LfHAmYqAAAAAOeVH7pCYT0RCo6Zxjq4AvHLngZ7',
    public: {
      googleCaptchaKeyPublic: "6LfHAmYqAAAAAGpguF7iJyAFyNJIXrZExjxh5atf",
      apiPublic: "https://api-web.binajayaperkasamandiri.com",
      domain: "https://binajayaperkasamandiri.com"
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-aos',
    '@nuxt/icon',
    'dayjs-nuxt',
    '@nuxt/image',
    '@nuxtjs/device',
    '@nuxtjs/sitemap',
  ],
  dayjs: {
    locales: ['en', 'id'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'id',
    defaultTimezone: 'Asia/Jakarta',
  },
  image: {
    format: ["webp"],
    domains: ['api-web.binajayaperkasamandiri.com'],
    alias: {
      binajaya: "https://api-web.binajayaperkasamandiri.com/images"
    },
    quality: 75,
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  site: {
    url: 'https://binajayaperkasamandiri.com',
    name: 'BJPM Scaffolding',
  },
  sitemap: {
    include: [
      "/*"
    ],
    // urls: async () => {
    //   const response = await fetch('https://example.com/api/urls')
    //   const urls = await response.json()
    //   return urls
    // }
  }
})