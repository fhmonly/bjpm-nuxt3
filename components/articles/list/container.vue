<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
    <ArticlesListItem
      v-for="article in articles"
      :key="article.description.blog_id"
      :imageSrc="article.image"
      :title="article.description.title"
      :articleId="article.description.blog_id"
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