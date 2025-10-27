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
    googleCaptchaKeyPrivate: process.env.GOOGLE_CAPTCHA_PRIVATE_KEY,
    public: {
      googleCaptchaKeyPublic: process.env.GOOGLE_CAPTCHA_PUBLIC_KEY,
      apiPublic: process.env.API_ENDPOINT,
      domain: process.env.HOST
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
    domains: [
      'api-web.binajayaperkasamandiri.com',
      'admin-panel.binajayaperkasamandiri.com',
    ],
    alias: {
      binajaya: `${process.env.API_ENDPOINT}/images`
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
    url: process.env.HOST,
    name: process.env.APP_NAME,
  },
  sitemap: {
    async urls(): Promise<any[]> {
      interface Article {
        id: number;
        image: string;
        description: {
          blog_id: number;
          title: string;
        };
        dates: string
      }
      interface Product {
        date_update: string,
        image: string,
        description: {
          product_id: number,
          name: string,
          desc: string,
        }
      }
      interface apiProducts {
        data: {
          data: Product[]
          infoPage: {
            total_page: number
          }
        },
      }
      const articlesResponse = await fetch(`${process.env.API_ENDPOINT}/api/articles`);
      const articles: { data: Article[] } = await articlesResponse.json();
      const finalArticles: any[] = articles?.data.map((article) => {
        return {
          loc: `/articles/${article.description.blog_id}-${createSlug(article.description.title)}`,
          changefreq: 'daily',
          priority: 1.0,
          news: [
            {
              title: article.description.title,
              publication_date: formatDate(article.dates),
            }
          ],
          images: [
            {
              loc: article.image,
              caption: `Gambar ${article.description.title}`,
              title: article.description.title,
            }
          ]
        }
      });

      const productsResponse = await fetch(`${process.env.API_ENDPOINT}/api/products`);
      const products: apiProducts = await productsResponse.json();
      const PRODUCTS_TOTAL_PAGE = products.data.infoPage.total_page
      const finalProducts: any[] = products?.data.data.map((product) => {
        return {
          loc: `/products/${product.description.product_id}-${createSlug(product.description.name)}`,
          changefreq: 'daily',
          priority: 1.0,
          news: [
            {
              title: product.description.name,
              publication_date: formatDate(product.date_update),
            }
          ],
          images: [
            {
              loc: product.image,
              caption: `Gambar ${product.description.name}`,
              title: product.description.name,
            }
          ]
        }
      });
      if (PRODUCTS_TOTAL_PAGE >= 2) {
        for (let index = 2; index <= PRODUCTS_TOTAL_PAGE; index++) {
          const nthProductsResponse = await fetch(`${process.env.API_ENDPOINT}/api/products?page=${index}`);
          const nthProducts: apiProducts = await nthProductsResponse.json();
          const nthFinalProducts: any[] = nthProducts?.data.data.map((product) => {
            return {
              loc: `/products/${product.description.product_id}-${createSlug(product.description.name)}`,
              changefreq: 'daily',
              priority: 1.0,
              news: [
                {
                  title: product.description.name,
                  publication_date: formatDate(product.date_update),
                }
              ],
              images: [
                {
                  loc: product.image,
                  caption: `Gambar ${product.description.name}`,
                  title: product.description.name,
                }
              ]
            }
          });
          finalProducts.splice(finalProducts.length, 0, ...nthFinalProducts)
        }
      }
      return [
        ...finalArticles,
        ...finalProducts
      ]
    }
  }
})

function createSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
function formatDate(dateStr: any) {
  const date = new Date(dateStr);
  const formattedDate = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
  return formattedDate;
}
