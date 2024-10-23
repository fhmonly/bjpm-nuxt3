<script setup>
useSeoMeta({
  title: "Articles",
});
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
</script>
<template>
  <section id="article" class="py-6">
    <div class="px-10">
      <ArticlesCarouselContainer />
      <ArticlesListContainer :articles="articles.data" />
    </div>
  </section>
</template>