<template>
  <div class="overflow-hidden shadow-lg" data-aos="fade-up">
    <img
      :src="imageSrc"
      class="object-cover w-full h-40"
      alt="gambar artikel"
    />
    <div class="p-6">
      <p class="mb-2 text-sm text-gray-500">
        {{ $dayjs(createdAt).locale("id").fromNow() }}
      </p>
      <h3 class="mb-4 text-lg font-bold">{{ title }}</h3>
      <NuxtLink
        :href="`/articles/${articleId}`"
        class="mx-auto text-white bg-main border-2 border-white hover:text-main hover:bg-white hover:border-2 hover:border-main p-2 text-[10px] md:mb-0 mb-5 mt-4"
      >
        Selengkapnya
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageSrc: String,
  title: String,
  link: String,
  articleId: String,
  createdAt: String,
});
</script>