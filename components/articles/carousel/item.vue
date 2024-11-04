<template>
  <div class="relative flex-shrink-0 w-full">
    <LazyNuxtImg :placeholder="[50, 25, 75, 5]" :src="imageSrc" :alt="title" class="object-cover w-full h-64 md:h-96"
      format="webp" height="96" />
    <div class="absolute bottom-0 left-0 right-0 p-4 text-white bg-opacity-50 bg-main">
      <h2 class="text-lg font-bold">{{ title }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
