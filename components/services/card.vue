<template>
  <div
    class="flex flex-col md:flex-row shadow-md overflow-hidden services-card md:w-full w-[40%] grow"
    data-aos="fade-down"
  >
    <img
      :src="image"
      :alt="title"
      class="md:w-1/2 grow object-cover w-full max-h-[300px] aspect-[1.5/1]"
    />
    <div class="bg-main shadow-md p-6 md:w-1/2 grow flex items-center">
      <div class="text-content">
        <h2 class="text-xl font-bold mb-4 text-white">{{ title }}</h2>
        <p class="text-sm leading-5 text-white text-justify">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { image, title, description } = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .services-card:nth-child(odd) img {
    order: 2;
  }
}
</style>