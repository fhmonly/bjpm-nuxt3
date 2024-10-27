<template>
  <section
    id="service"
    class="flex flex-col px-5 mx-auto mb-10 tablet:px-10 bg-gray2"
  >
    <h1
      class="text-[32px] text-center text-main font-bold pt-4 px-4 pb-4"
      data-aos="fade-up"
    >
      Layanan
    </h1>
    <div class="flex flex-wrap justify-center gap-5 py-5 mb-4">
      <div
        class="aspect-[0.66/1] service-card grow w-[20%] min-w-[250px] max-w-[250px]"
        data-aos="zoom-in"
        v-for="service in services.data?.slice(0, 4)"
        :key="service.id"
      >
        <div class="h-full">
          <img
            :src="service.image"
            :alt="`Gambar pelayanan ${service.name}`"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="opacity-100 topic-overlay sm:opacity-0">
          <p class="text-xl mb-4 text-center w-[80%]">
            {{ service.name }}
          </p>
          <NuxtLink
            class="bg-main text-[13px] p-2 border-2 border-white"
            :to="`javascript:void(0)`"
            >Selengkapnya</NuxtLink
          >
        </div>
      </div>
    </div>
    <NuxtLink
      to="/services"
      class="p-3 py-2 mx-auto text-sm text-white border-2 border-white bg-main hover:text-main hover:bg-white hover:border-main"
    >
      Selanjutnya</NuxtLink
    >
  </section>
</template>
<script setup>
const config = useRuntimeConfig();
const {
  data: services,
  pending,
  error,
  refresh,
} = await useFetch(`${config.public.apiPublic}/api/services`, {
  pick: ["data"],
  key: "services-data",
});
</script>

<style scoped>
.topic-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: 250ms ease-in all;
  transition-delay: 100ms;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(67, 141, 61, 0.6) 60%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}

.service-card:hover .topic-overlay {
  opacity: 1;
}
</style>