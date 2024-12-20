<template>
  <section id="article" class="p-5 text-white tablet:p-10 bg-main">
    <h1 class="text-[32px] mb-4 font-bold">Artikel</h1>
    <div class="grid grid-cols-1 tablet:grid-cols-2 gap-5 lg:grid-cols-4">
      <div class="article-card aspect-[0.87/1] flex flex-col" data-aos="zoom-in"
        v-for="article in articles.data?.slice(0, 4)" :key="article.description.blog_id">
        <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" :src="article.image"
          :alt="`Thumbnail ${article.description.title}`" class="object-cover grow aspect-[1.29/1]" />
        <div class="flex flex-col p-3 pt-5 text-sm bg-white text-main">
          <p class="mb-1 text-greybf">
            {{ $dayjs(article.dates).locale("id").fromNow() }}
          </p>
          <p class="mb-3 text-base font-bold truncate">
            {{ article.description.title }}
          </p>
          <NuxtLink class="flex items-center gap-2 p-2 py-1 text-white ms-auto bg-main"
            :to="`/articles/${article.description.blog_id}-${createSlug(article.description.title)}`">
            Baca Lebih
            <IconBiArrowRight />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const config = useRuntimeConfig();
const {
  data: articles,
  pending,
  error,
  refresh,
} = await useFetch(`${config.public.apiPublic}/api/articles`, {
  pick: ["data"],
  key: "api-articles",
});
const { createSlug } = useWindowUrl();
</script>