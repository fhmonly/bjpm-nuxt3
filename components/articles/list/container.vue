<template>
  <div class="flex flex-wrap">
    <ArticlesListItem
      v-for="article in articles"
      :key="article.description.blog_id"
      :imageSrc="article.image"
      :title="article.description.title"
      :articleId="article.description.blog_id"
      :createdAt="article.dates"
      class="w-full sm:max-w-[48%] md:max-w-[31%] lg:max-w-[24%]"
    />
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