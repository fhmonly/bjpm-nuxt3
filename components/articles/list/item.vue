<template>
  <div class="shadow-lg" data-aos="fade-up">
    <img
      :src="imageSrc"
      class="object-cover w-full aspect-[1.3/1]"
      alt="gambar artikel"
    />
    
    <div class="p-4 text-sm">
      <p class="mb-3 text-sm text-gray-500">
        {{ $dayjs(createdAt).locale("id").fromNow() }}
      </p>
      <h3 class="mb-4 text-base font-bold truncate">{{ title }}</h3>
      <NuxtLink
        :href="`/articles/${articleId}`"
        class="inline-block p-2 text-xs text-white border-2 border-transparent bg-main hover:border-main hover:text-black hover:bg-transparent"
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