<script setup>
useSeoMeta({
  titleTemplate: "",
  title: "Articles",
});
const route = useRoute();
const config = useRuntimeConfig();
const {
  data: article,
  pending,
  error,
  refresh,
} = await useFetch(
  `${config.public.apiPublic}/api/articles?id=${route.params.id_article}`,
  {
    pick: ["data"],
  }
);
</script>
<template>
  <section id="detail-article" class="py-6">
    <div class="container px-10 mx-auto">
      <h1 class="mb-4 text-4xl font-bold text-main">
        {{ article.data.description.title }}
      </h1>

      <div class="flex items-center justify-between mb-6 text-sm text-gray-500">
        <span class="italic"
          >Published on:
          <strong>tidak ada di API || 12 Oktober 2024</strong></span
        >
        <span class="italic"
          >tidak ada di API || By: <strong>Admin</strong></span
        >
      </div>

      <div class="mb-8">
        <img
          :src="article.data.image"
          alt="Gambar Utama Artikel"
          class="w-full h-auto object-cover max-h-[400px]"
        />
      </div>

      <article class="text-sm font-normal prose text-justify max-w-none">
        <div class="p-detail" v-html="article.data.description.content"></div>
      </article>

      <div class="mt-8">
        <NuxtLink to="/articles" class="px-4 py-2 text-white bg-main">
          Kembali
        </NuxtLink>
      </div>
    </div>
  </section>
</template>