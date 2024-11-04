<script setup>
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
    },
  ],
});
const { staticData } = useStatic();
</script>
<template>
  <main class="min-h-screen">
    <HomeHero />
    <section id="about"
      class="flex flex-col items-center justify-between p-5 my-5 tablet:px-10 sm:my-10 md:flex-row gap-y-8">
      <div class="max-w-[700px] text-sm font-normal pe-4 md:order-1 order-2" data-aos="fade-right">
        <h1 class="mb-5 text-3xl font-bold title-about text-main">
          {{ staticData.data.home_section1_title }}
        </h1>
        <div v-html="staticData.data.home_section1_info" class="no-tailwind"></div>
        <NuxtLink to="/about"
          class="block p-2 mt-5 text-white border-2 border-transparent bg-main hover:text-main hover:bg-white w-fit">
          Selengkapnya
        </NuxtLink>
      </div>
      <NuxtImg :placeholder="[50, 25, 75, 5]" width="400" format="webp"
        :src="`/binajaya/static/${staticData.data.home_section1_image}`" alt="gambar banner tentang bjpm"
        class="max-w-[400px] w-[100%] md:p-4 md:pe-0 md:order-2 order-1 img-abt" data-aos="slide-up" />
    </section>
    <HomeServicesSection />
    <HomeProjectsSection />
    <HomeArticlesSection />
    <section id="video" class="flex p-5 sm:p-10" v-show="staticData?.data?.home_video_profiles">
      <YoutubePlayer thumbnail="/img/Video Background.jpg" :url="staticData.data.home_video_profiles" />
    </section>
  </main>
</template>