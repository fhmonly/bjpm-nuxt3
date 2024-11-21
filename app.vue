<script setup>
import Swal from 'sweetalert2';

const config = useRuntimeConfig();
const { staticData } = useStatic()
onServerPrefetch(async () => {
  const {
    status,
    data,
    error,
    refresh,
  } = await useFetch(() => `${config.public.apiPublic}/api/settings`, {
    pick: ["data"],
    key: "res-static-data",
  });
  staticData.value = data.value
})

useServerSeoMeta({
  title: () => staticData.value?.data?.default_meta_title,
  keywords: () => staticData.value?.data?.default_meta_keywords,
});

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | BJPM Scaffolding` : staticData.value?.data?.default_meta_title
  },
  description: () => staticData.value?.data?.default_meta_description,
  ogTitle: () => staticData.value?.data?.default_meta_title,
  ogDescription: () => staticData.value?.data?.default_meta_description,
  ogImage: "/img/hero/2.jpg",
  ogUrl: () => config.public.domain,
  twitterTitle: () => staticData.value?.data?.default_meta_title,
  twitterDescription: () => staticData.value?.data?.default_meta_description,
  twitterImage: "/img/hero/2.jpg",
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: "stylesheet",
      href: "/css/main.css",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/logo/logo-bjpm.png'
    },
  ],
});

onMounted(() => {
  if ((JSON.parse(localStorage.getItem('isWarningAlreadyOpen')) || false) !== true)
    Swal.fire({
      confirmButtonColor: '#dc2626',
      confirmButtonText: 'Saya Mengerti',
      html: `
      <div class="w-full p-6">
        <div class="mb-6 text-center">
          <h2 class="mb-2 text-2xl font-bold text-red-600">
            PERINGATAN: INFO GOOGLE PALSU
          </h2>
        </div>
        <div class="w-auto h-auto aspect-[203/149] mb-5">
          <img src='/img/fake-web-warning.png' class="object-contain w-full h-full"/>
        </div>
        <div class="space-y-4 text-gray-700">
          <p class="font-medium">
              Mohon diperhatikan bahwa telah ditemukan INFORMASI PALSU di Google Maps yang mengatasnamakan perusahaan kami (Binajaya Scaffolding).
          </p>
          <p>
              <strong>
                Binajaya Perkasa Mandiri Scaffolding selalu buka Setiap Hari.
              </strong>
          </p>
          <p class="font-medium">
              Harap berhati-hati dan pastikan Anda menghubungi kami melalui kontak resmi yang tercantum di website ini.
          </p>
        </div>
      </div>
    `,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('isWarningAlreadyOpen', true);
      }
    });
});
</script>
<template>
  <div id="root" class="min-h-screen">
    <NuxtLoadingIndicator color="#438d3d" :throttle="0" />
    <div class="flex flex-col min-h-screen">
      <AppNavContainer />
      <NuxtPage class="pb-14" />
      <AppFooter />
    </div>
    <AppWhatsappButton />
  </div>
</template>
<style>
html,
body {
  width: 100%;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  scroll-behavior: smooth;
}

body>div#__nuxt {
  min-height: 100vh;
}

:root {
  --main-color: #438d3d;
}

.no-tailwind * {
  all: revert;
  /* buat semua element didalam tag dengan class p-detail menjadi style default dan tidak terpengaruh style dari komponen yang lebih tinggi */
}
</style>