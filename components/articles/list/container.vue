<template>
  <div class="flex flex-wrap gap-4 justify-center">
    <ArticlesListItem v-for="article in articles" :key="article.description.blog_id" :imageSrc="article.image"
      :title="article.description.title" :articleId="article.description.blog_id" :createdAt="article.dates"
      class="w-full sm:max-w-[48%] md:max-w-[31%] lg:max-w-[24%]" />
    <div class="flex flex-col items-center justify-center w-full py-8" v-if="articles.length <= 0">
      <IconBiXCircle width="44" height="44" class="mb-5 text-red-500" />
      <p>Daftar artikel kosong</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  articles: {
    required: true,
    type: String,
  },
});
</script>