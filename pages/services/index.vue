<script setup>
useSeoMeta({
  title: "Services",
});
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
        <ServicesCard
          v-for="(service, index) in services"
          :key="index"
          :image="service.image"
          :title="service.title"
          :description="service.description"
          :delay="service.delay"
        />
      </div>
    </div>
  </section>
</template>