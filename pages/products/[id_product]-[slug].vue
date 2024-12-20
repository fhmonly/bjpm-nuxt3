<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const {
  data: detailProduct,
  error,
  refresh,
} = await useFetch(
  `${config.public.apiPublic}/api/products?id=${route.params.id_product}`,
  {
    pick: ["data"],
  }
);
useSeoMeta({
  title: () => detailProduct.value?.data?.data?.description?.name,
});
const router = useRouter();
const { createSlug } = useWindowUrl()
function handleBack() {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/products');
  }
}
</script>
<template>
  <main id="detail-section" class="px-2 tablet:px-8">
    <h2 class="pb-2 mb-10 text-2xl font-bold text-center border-b-4 text-main w-fit border-main" data-aos="fade-up">
      Detail Produk
    </h2>
    <div class="flex flex-col md:flex-row">
      <div class="mb-4 md:w-1/2 md:mb-0" data-aos="zoom-in">
        <NuxtImg :placeholder="[50, 25, 75, 5]" :src="`/binajaya/product/${detailProduct.data.data.image}`"
          :alt="`Gambar ${detailProduct.data.data.description.name}`" class="object-cover w-full" format="webp" />
      </div>
      <div class="md:w-1/2 md:pl-4" data-aos="fade-left">
        <h3 class="text-xl font-semibold text-main">
          {{ detailProduct.data.data.description.name }}
        </h3>
        <article class="mt-2 text-gray-600 no-tailwind" v-html="detailProduct.data.data.description.desc"></article>
        <div v-if="detailProduct?.data?.data?.description?.note">
          <h4 class="mt-4 text-lg font-semibold text-main">Spesifikasi:</h4>
          <div v-html="detailProduct.data.data.description.note" class="no-tailwind"></div>
        </div>
      </div>
    </div>
    <div class="mt-10 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
      <h3 class="text-xl font-bold text-main mb-6">Produk Lainnya</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="product-card relative group aos-init aos-animate" data-aos="fade-up" data-aos-delay="400"
          v-for="(otherProduct) in detailProduct.data.other.slice(0, 4)" :key="otherProduct.description.product_id">
          <NuxtImg :src="`/binajaya/product/${otherProduct.image}`" alt="Gambar Produk 4"
            class="object-cover w-full h-48 transition duration-300" sizes="100vw md:50vw lg:25vw" />
          <h4 class="mt-2 text-lg font-semibold text-main">
            <NuxtLink
              :to="`/products/${otherProduct.description.product_id}-${createSlug(otherProduct.description.name)}`">{{
                otherProduct.description.name }}</NuxtLink>
          </h4>
          <!-- <p class="text-gray-600 mt-1">{{ index }}</p> -->
          <div
            class="absolute inset-0 bg-main text-white flex items-center justify-center opacity-0 transition h-48 duration-300 see-all">
            <NuxtLink href="/products" class="text-xl font-semibold">Lihat Semua Produk</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <button @click="handleBack" class="px-4 py-2 text-white bg-main">
        Kembali
      </button>
    </div>
  </main>
</template>
<style scoped>
.product-card:last-child:hover .see-all {
  opacity: 1;
}
</style>