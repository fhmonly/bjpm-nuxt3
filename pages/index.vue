<script setup>
// useSeoMeta({
//   titleTemplate: "",
//   title: "BJPM",
// });
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
    },
  ],
});
onMounted(() => {});
</script>
<template>
  <div class="min-h-screen">
    <HomeHero />
    <section
      id="about"
      class="flex flex-col items-center justify-between p-5 my-5 sm:px-10 sm:my-10 md:flex-row gap-y-8"
    >
      <div
        class="max-w-[700px] text-sm font-normal pe-4 md:order-1 order-2"
        data-aos="fade-right"
      >
        <h1 class="mb-5 text-3xl font-bold title-about text-main">
          {{
            staticData?.data?.about_title ||
            "Kepuasan pelanggan adalah tujuan kami"
          }}
        </h1>
        <p class="mb-2">
          PT. Bina Jaya Perkasa Mandiri, didirikan pada 15 Juli 1993 di Jakarta,
          bergerak di bidang supplier scaffolding dan contractor. Kami
          berkomitmen memberikan layanan cepat, tepat, akurat, serta terpercaya.
          Dengan pengalaman luas, kami mendukung berbagai proyek seperti gedung,
          perumahan, perkantoran, renovasi, dan sarana pendidikan, turut
          berkontribusi dalam pembangunan di Indonesia.
        </p>
        <p>
          Produk kami diproduksi oleh tenaga ahli dengan standar nasional,
          memastikan kualitas dan keseragaman. Mengutamakan keselamatan dan
          ketepatan, kami menggunakan peralatan berstandar tinggi untuk menjamin
          mutu setiap barang. Dengan layanan dan produk berkualitas, PT. Bina
          Jaya Perkasa Mandiri siap mendukung pembangunan Indonesia yang
          berkelanjutan.
        </p>
        <NuxtLink
          to="/about"
          class="block p-2 mt-5 text-white border-2 border-transparent bg-main hover:text-main hover:bg-white w-fit"
        >
          Selengkapnya
        </NuxtLink>
      </div>
      <img
        src="/img/About.png"
        alt=""
        class="max-w-[400px] w-[100%] md:p-4 md:pe-0 md:order-2 order-1 img-abt"
        data-aos="slide-up"
      />
    </section>
    <HomeServicesSection />
    <HomeProjectsSection />
    <HomeArticlesSection />
    <section id="video" class="flex p-5 sm:p-10">
      <YoutubePlayer thumbnail="/img/Video Background.jpg" />
    </section>
  </div>
</template>