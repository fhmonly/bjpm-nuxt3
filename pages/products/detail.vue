<script setup>
useSeoMeta({
  titleTemplate: "",
  title: "Products",
});
</script>
<template>
  <section id="detail-section" class="my-8 px-10">
    <h2
      class="text-2xl font-bold text-center text-main mb-10 border-b-4 w-fit pb-2 border-main"
      data-aos="fade-up"
    >
      Detail Produk
    </h2>
    <div class="flex flex-col md:flex-row">
      <div
        class="md:w-1/2 mb-4 md:mb-0"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <img
          src="/img/product/horrybeam.jpg"
          alt="Horrybeam"
          class="object-cover w-full h-64"
        />
      </div>
      <div class="md:w-1/2 md:pl-4" data-aos="fade-left" data-aos-delay="200">
        <h3 class="text-xl font-semibold text-main">Horrybeam</h3>
        <p class="text-gray-600 mt-2">
          Horrybeam adalah produk unggulan kami yang menawarkan kekuatan dan
          daya tahan yang tinggi. Cocok untuk berbagai aplikasi konstruksi.
        </p>
        <h4 class="text-lg font-semibold text-main mt-4">Spesifikasi:</h4>
        <ul class="list-disc pl-5 mt-2 text-gray-600">
          <li>Dimensi: 10m x 20cm x 20cm</li>
          <li>Bahan: Kayu berkualitas tinggi</li>
          <li>Berat: 25 kg</li>
        </ul>
      </div>
    </div>
    <div class="mt-8">
      <NuxtLink to="/products" class="bg-main text-white px-4 py-2">
        Kembali
      </NuxtLink>
    </div>
  </section>
</template>