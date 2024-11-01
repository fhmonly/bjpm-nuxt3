<script setup>
useSeoMeta({
  title: "About",
});
const config = useRuntimeConfig();
const { staticData } = useStatic();
</script>
<template>
  <section id="about">
    <div class="title"
      :style="`background-image: url('${config.public.apiPublic}/images/static/${staticData?.data?.about_hero_image}')`">
      <div class="bg-[#ffffffb3] px-10 py-10">
        <h1 class="pb-2 my-4 text-4xl font-bold capitalize border-b-4 text-main w-fit border-main" data-aos="fade-up">
          {{ staticData?.data?.about_hero_title || "About" }}
        </h1>
        <div class="text-sm no-tailwind" data-aos="fade-up" v-html="staticData?.data?.about_section1_info"></div>
      </div>
    </div>
    <div class="px-10 pb-6 mx-auto text-xs leading-5">
      <div class="block my-6">
        <h2 class="mb-6 text-2xl font-bold text-center text-main" data-aos="fade-up">
          Visi & Misi
        </h2>
        <div class="flex flex-wrap gap-6">
          <div class="bg-main text-white p-6 w-[40%] grow min-w-[300px]" data-aos="fade-up">
            <h3 class="mb-2 text-xl font-bold">Visi</h3>
            <div class="no-tailwind" v-html="staticData?.data?.about_vision_content"></div>
          </div>
          <div class="bg-main text-white p-6 w-[40%] grow min-w-[300px]" data-aos="fade-up">
            <h3 class="mb-2 text-xl font-bold">Misi</h3>
            <div v-html="staticData?.data?.about_misi_content" class="no-tailwind"></div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap gap-6">
        <div class="bg-main text-white p-6 h-auto md:order-2 order-2 w-[40%] grow min-w-[200px] custom-page no-tailwind"
          data-aos="fade-up" v-html="staticData?.data?.about_history_content"></div>
        <div class="max-h-[300px] md:order-1 order-1 w-[40%] grow min-w-[200px]">
          <NuxtImg alt="gambar sejarah bjpm" format="webp" height="300"
            :src="`/binajaya/static/${staticData?.data?.about_history_image}`" data-aos="fade-up"
            class="object-cover w-full h-full" />
        </div>
        <div class="md:order-4 order-4 w-[40%] grow min-w-[200px]">
          <NuxtImg alt="gambar jangkauan bjpm" class="object-cover w-full h-full" height="400" format="webp"
            :src="`/binajaya/static/${staticData?.data?.about_range_image}`" width="600" data-aos="fade-up" />
        </div>
        <div class="bg-main text-white mt-0 p-6 md:order-3 order-4 w-[40%] grow min-w-[200px] custom-page no-tailwind"
          data-aos="fade-up" v-html="staticData?.data?.about_range_content"></div>
      </div>
    </div>
  </section>
</template>
<style>
.mission-section {
  margin-left: 20px;
}

.mission-section ol {
  list-style: decimal;
}

.custom-page>*:first-child {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin-bottom: 8px;
}
</style>