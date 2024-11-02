<script setup>
useSeoMeta({
  titleTemplate: "",
  title: "Products",
});
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
</script>
<template>
  <section id="detail-section" class="px-10 my-8">
    <h2 class="pb-2 mb-10 text-2xl font-bold text-center border-b-4 text-main w-fit border-main" data-aos="fade-up">
      Detail Produk
    </h2>
    <div class="flex flex-col md:flex-row">
      <div class="mb-4 md:w-1/2 md:mb-0" data-aos="zoom-in">
        <NuxtImg :src="`/binajaya/product/${detailProduct.data.data.image}`"
          :alt="`Gambar ${detailProduct.data.data.description.name}`" class="object-contain w-full h-64"
          format="webp" />
      </div>
      <div class="md:w-1/2 md:pl-4" data-aos="fade-left">
        <h3 class="text-xl font-semibold text-main">
          {{ detailProduct.data.data.description.name }}
        </h3>
        <article class="mt-2 text-gray-600 no-tailwind" v-html="detailProduct.data.data.description.desc"></article>
        <div>
          <h4 class="mt-4 text-lg font-semibold text-main">Spesifikasi:</h4>
          <ul class="pl-5 mt-2 text-gray-600 list-disc">
            <li v-show="detailProduct?.data?.data?.berat">
              {{ `Berat: ${detailProduct?.data?.data?.berat} kg` }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <NuxtLink to="/products" class="px-4 py-2 text-white bg-main">
        Kembali
      </NuxtLink>
    </div>
  </section>
</template>