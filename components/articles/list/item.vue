<template>
  <div
    class="shadow-lg overflow-hidden"
    data-aos="fade-up"
    :data-aos-delay="delay"
  >
    <img :src="imageSrc" class="w-full h-40 object-cover" :alt="altText" />
    <div class="p-6">
      <p class="text-sm text-gray-500 mb-2">{{ date }}</p>
      <h3 class="text-lg font-bold mb-4">{{ title }}</h3>
      <NuxtLink
        :href="link"
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
  altText: {
    type: String,
    default: "Article Image",
  },
  date: String,
  title: String,
  link: String,
  delay: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped>
</style>
