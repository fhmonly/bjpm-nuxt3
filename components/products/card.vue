<template>
  <div class="product-card aspect-[1/1.15] relative overflow-hidden min-w-[250px] max-w-[300px]"
    :data-category="category">
    <LazyNuxtImg format="webp" :src="image" :alt="`Gambar produk ${title}`" class="object-cover w-full h-full" />
    <div
      class="absolute left-0 right-0 top-[100%] flex flex-col items-center h-full product-card-overlay justify-center">
      <p class="text-xl font-bold product-text text-main">
        {{ title }}
      </p>
      <NuxtLink :to="url" style="text-decoration: none"
        class="absolute bottom-0 px-2 py-1 mb-2 text-sm text-white border-2 border-transparent product-btn bg-main hover:border-main hover:bg-transparent">
        Selengkapnya
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
@keyframes zoomIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.product-card {
  animation: zoomIn 0.5s ease-in-out;
}

.product-card-overlay {
  background: linear-gradient(to top,
      rgba(104, 178, 99, 0.8),
      rgba(208, 227, 207, 0.7),
      rgba(255, 255, 255, 0));
  transition: all 250ms ease-out;
}

.product-card:hover .product-card-overlay {
  bottom: 0;
  top: 0;
}

.product-card img {
  transition: transform 0.5s ease;
}

.product-card:hover img {
  transform: scale(1.1);
}
</style>
