<script setup>
useSeoMeta({
  title: "Services",
});
const config = useRuntimeConfig();
const {
  data: services,
  pending,
  error,
  refresh,
} = await useFetch(`${config.public.apiPublic}/api/services`, {
  pick: ["data"],
});
</script>
<template>
  <section id="services">
    <div class="p-6 px-10 mx-auto">
      <h1
        class="pb-2 my-4 text-4xl font-bold border-b-4 text-main w-fit border-main"
        data-aos="fade-down"
      >
        Layanan Kami
      </h1>
      <p
        class="mb-8 text-sm font-normal text-justify"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        PT Bina Jaya Perkasa Mandiri menawarkan berbagai layanan unggulan yang
        dirancang untuk memenuhi kebutuhan pembangunan dan konstruksi di
        Indonesia. Dengan pengalaman lebih dari 30 tahun, kami berkomitmen untuk
        memberikan layanan yang cepat, tepat, dan berkualitas.
      </p>

      <div class="flex flex-row flex-wrap gap-6 md:flex-col">
        <div
          class="flex flex-col md:flex-row shadow-md overflow-hidden services-card md:w-full w-[40%] grow"
          data-aos="fade-down"
          v-for="(service, index) in services.data"
          :key="index"
        >
          <img
            class="md:w-1/2 grow object-cover w-full max-h-[300px] aspect-[1.5/1]"
            :src="service.image"
            :alt="`Gambar ${service.name}`"
          />
          <div class="flex items-center p-6 shadow-md bg-main md:w-1/2 grow">
            <div class="text-content">
              <h2 class="mb-4 text-xl font-bold text-white">
                {{ service.name }}
              </h2>
              <div
                class="text-sm leading-5 text-justify text-white"
                v-html="service.contents"
              ></div>
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