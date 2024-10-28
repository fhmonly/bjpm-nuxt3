<script setup>
const config = useRuntimeConfig();

const {
  status,
  data: staticData,
  error,
  refresh,
} = useFetch(() => `${config.public.apiPublic}/api/settings`, {
  pick: ["data"],
  key: "res-static-data",
  server: true,
});

useSeoMeta({
  description: staticData.value?.data?.default_meta_description,
  title: staticData.value?.data?.default_meta_title,
});

useHead({
  meta: [
    {
      name: "keywords",
      content: staticData.value?.data?.default_meta_keywords,
    },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | BJPM` : staticData.value?.data?.default_meta_title
  },
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    },
  ],
});
</script>
<template>
  <div id="root" class="min-h-screen">
    <NuxtLoadingIndicator color="#438d3d" :throttle="0" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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
body > div#__nuxt {
  min-height: 100vh;
}
:root {
  --main-color: #438d3d;
}

.no-tailwind * {
  all: revert; /* buat semua element didalam tag dengan class p-detail menjadi style default dan tidak terpengaruh style dari komponen yang lebih tinggi */
}
</style>