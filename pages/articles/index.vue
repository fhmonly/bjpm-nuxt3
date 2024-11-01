<script setup>
useSeoMeta({
  title: "Articles",
});
const config = useRuntimeConfig();
const {
  data: articles,
  error: errorArticles,
  refresh: refreshArticles,
} = await useFetch(`${config.public.apiPublic}/api/articles`, {
  pick: ["data"],
  key: "api-articles",
});
const { staticData } = useStatic();
</script>
<template>
  <section id="article" class="py-6">
    <div class="px-10">
      <div id="carouselExample" class="relative w-full mb-8" data-aos="fade-up">
        <div class="relative h-64 overflow-hidden md:h-96">
          <div class="flex transition-transform duration-300 ease-in-out" id="carouselItems">
            <div class="relative flex-shrink-0 w-full">
              <NuxtImg format="webp" :src="`/binajaya/static/${staticData.data.article_hero_image}`"
                alt="gambar banner article" class="object-cover w-full h-64 md:h-96" />
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white bg-opacity-50 bg-main">
                <h2 class="text-lg font-bold text-center capitalize">
                  {{ staticData.data.article_hero_title }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArticlesListContainer :articles="articles.data" />
    </div>
  </section>
</template>