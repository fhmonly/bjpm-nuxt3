<template>
  <div id="carouselExample" class="relative w-full mb-8" data-aos="fade-up">
    <div class="relative overflow-hidden md:h-96 h-64">
      <div
        class="flex transition-transform duration-300 ease-in-out"
        id="carouselItems"
      >
        <ArticlesCarouselItem
          v-for="(article, index) in articles"
          :key="index"
          :imageSrc="article.imageSrc"
          :title="article.title"
        />
      </div>
    </div>
    <button
      @click="prevSlide"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-main text-white p-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <button
      @click="nextSlide"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-main text-white p-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>
<script setup>
const articles = [
  {
    imageSrc: "/img/article/1.jpg",
    title: "Judul Artikel 1",
  },
  {
    imageSrc: "/img/article/1.jpg",
    title: "Judul Artikel 2",
  },
  {
    imageSrc: "/img/article/1.jpg",
    title: "Judul Artikel 3",
  },
];

let currentSlide = 0;
function nextSlide() {
  const carouselItems = document.getElementById("carouselItems");
  currentSlide = (currentSlide + 1) % 3;
  carouselItems.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {
  const carouselItems = document.getElementById("carouselItems");
  currentSlide = (currentSlide - 1 + 3) % 3;
  carouselItems.style.transform = `translateX(-${currentSlide * 100}%)`;
}
</script>