<script setup>
useSeoMeta({
  title: "Services",
});
const config = useRuntimeConfig();
const {
  data: services,
  error: errorSevices,
  refresh: refreshServices,
} = await useFetch(`${config.public.apiPublic}/api/services`, {
  pick: ["data"],
  key: "services-data",
});
const { staticData } = useStatic();
</script>
<template>
  <section id="services">
    <div class="py-6 mx-auto">
      <div class="title"
        :style="`background-image: url(${config.public.apiPublic}/images/static/${staticData.data.service_hero_image});`">
        <div class="bg-[#ffffffb3] p-10 px-4 tablet:px-10">
          <h1
            class="pb-2 my-4 text-4xl font-bold capitalize border-b-4 text-main w-fit border-main aos-init aos-animate"
            data-aos="fade-up">
            {{ staticData.data.service_hero_title }}
          </h1>
          <div class="mb-8 text-sm font-normal text-justify aos-init aos-animate" data-aos="fade-up">
            PT Bina Jaya Perkasa Mandiri menawarkan berbagai layanan unggulan
            yang dirancang untuk memenuhi kebutuhan pembangunan dan konstruksi
            di Indonesia. Dengan pengalaman lebih dari 30 tahun, kami
            berkomitmen untuk memberikan layanan yang cepat, tepat, dan
            berkualitas.
          </div>
        </div>
      </div>

      <div class="flex flex-row flex-wrap gap-6 p-10 px-4 tablet:px-10 md:flex-col">
        <div class="flex flex-col w-full overflow-hidden shadow-md md:flex-row services-card" data-aos="fade-down"
          v-for="(service, index) in services.data" :key="index">
          <LazyNuxtImg class="md:w-1/2 grow object-cover w-full max-h-[300px] aspect-[1.5/1]" :src="service.image"
            format="webp" height="300" :alt="`Gambar ${service.name}`" />
          <div class="flex items-center p-6 shadow-md bg-main md:w-1/2 grow">
            <div class="text-content">
              <h2 class="mb-4 text-xl font-bold text-white">
                {{ service.name }}
              </h2>
              <div class="text-sm text-justify text-white no-tailwind" v-html="service.contents"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
@media screen and (min-width: 768px) {
  .services-card:nth-child(odd) img {
    order: 2;
  }
}
</style>