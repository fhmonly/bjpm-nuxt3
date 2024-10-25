<script setup>
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
    },
  ],
});
const config = useRuntimeConfig();
const { status, data, error, refresh } = await useFetch(
  `${config.public.apiPublic}/api/settings`,
  {
    pick: ["data"],
    key: "res-static-data",
    server: true,
  }
);
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
          {{ data.data.home_section1_title }}
        </h1>
        <div v-html="data.data.home_section1_info" class="no-tailwind"></div>
        <NuxtLink
          to="/about"
          class="block p-2 mt-5 text-white border-2 border-transparent bg-main hover:text-main hover:bg-white w-fit"
        >
          Selengkapnya
        </NuxtLink>
      </div>
      <img
        :src="`${config.public.apiPublic}/images/static/${data.data.home_section1_image}`"
        alt=""
        class="max-w-[400px] w-[100%] md:p-4 md:pe-0 md:order-2 order-1 img-abt"
        data-aos="slide-up"
      />
    </section>
    <HomeServicesSection />
    <HomeProjectsSection />
    <HomeArticlesSection />
    <section
      id="video"
      class="flex p-5 sm:p-10"
      v-show="data?.data?.home_video_profiles"
    >
      <YoutubePlayer
        thumbnail="/img/Video Background.jpg"
        :url="data.data.home_video_profiles"
      />
    </section>
  </div>
</template>