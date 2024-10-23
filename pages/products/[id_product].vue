<script setup>
useSeoMeta({
  titleTemplate: "",
  title: "Products",
});
const config = useRuntimeConfig();
const route = useRoute();
const {
  data: detailProduct,
  pending,
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
    <h2
      class="pb-2 mb-10 text-2xl font-bold text-center border-b-4 text-main w-fit border-main"
      data-aos="fade-up"
    >
      Detail Produk
    </h2>
    <div class="flex flex-col md:flex-row">
      <div
        class="mb-4 md:w-1/2 md:mb-0"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <img
          :src="`${config.public.apiPublic}/images/products/${detailProduct.data.data.image}`"
          :alt="`Gambar ${detailProduct.data.data.description.name}`"
          class="object-cover w-full h-64"
        />
      </div>
      <div class="md:w-1/2 md:pl-4" data-aos="fade-left" data-aos-delay="200">
        <h3 class="text-xl font-semibold text-main">
          {{ detailProduct.data.data.description.name }}
        </h3>
        <div
          class="mt-2 text-gray-600"
          v-html="detailProduct.data.data.description.desc"
        ></div>
        <h4 class="mt-4 text-lg font-semibold text-main">Spesifikasi:</h4>
        <ul class="pl-5 mt-2 text-gray-600 list-disc">
          <li>Dimensi: 10m x 20cm x 20cm</li>
          <li>Bahan: Kayu berkualitas tinggi</li>
          <li>Berat: {{ detailProduct.data.data.berat }} kg</li>
        </ul>
      </div>
    </div>
    <div class="mt-8">
      <NuxtLink to="/products" class="px-4 py-2 text-white bg-main">
        Kembali
      </NuxtLink>
    </div>
  </section>
</template>