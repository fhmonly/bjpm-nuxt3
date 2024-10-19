<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <ArticlesListItem
      v-for="(article, index) in articles"
      :key="index"
      :imageSrc="article.imageSrc"
      :altText="article.altText"
      :date="article.date"
      :title="article.title"
      :link="article.link"
      :delay="article.delay"
    />
  </div>
</template>
<script setup>
const articles = [
  {
    imageSrc: "/img/article/2.jpg",
    altText: "Artikel 1",
    date: "15 Oktober 2024",
    title: "Judul Artikel 1",
    link: "/articles/detail",
    delay: 0,
  },
  {
    imageSrc: "/img/article/2.jpg",
    altText: "Artikel 2",
    date: "10 Oktober 2024",
    title: "Judul Artikel 2",
    link: "/articles/detail",
    delay: 100,
  },
  {
    imageSrc: "/img/article/2.jpg",
    altText: "Artikel 3",
    date: "5 Oktober 2024",
    title: "Judul Artikel 3",
    link: "/articles/detail",
    delay: 200,
  },
];
</script>