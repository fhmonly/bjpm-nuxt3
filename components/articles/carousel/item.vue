<template>
  <div class="relative w-full flex-shrink-0">
    <img
      :src="imageSrc"
      :alt="title"
      class="w-full md:h-96 h-64 object-cover"
    />
    <div
      class="absolute bottom-0 left-0 right-0 bg-main bg-opacity-50 text-white p-4"
    >
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

<style scoped>
</style>
