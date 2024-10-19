<script setup>
useSeoMeta({
  title: "Services",
});
const services = [
  {
    image: "/img/service/4.jpg",
    title: "Penyewaan",
    description:
      "Kami menyediakan layanan penyewaan scaffolding untuk berbagai jenis proyek, mulai dari konstruksi gedung tinggi hingga renovasi rumah. Layanan ini memudahkan klien untuk mendapatkan peralatan yang diperlukan tanpa harus membeli.",
    delay: 200,
  },
  {
    image: "/img/service/2.jpeg",
    title: "Konstruksi Baja",
    description:
      "Sebagai penyedia konstruksi baja, kami menawarkan solusi struktural yang kuat dan tahan lama untuk proyek-proyek besar. Tim kami berpengalaman dalam merancang dan membangun struktur baja yang sesuai dengan kebutuhan spesifik klien.",
    delay: 300,
  },
  {
    image: "/img/service/3.jpg",
    title: "Penyedia Material",
    description:
      "Kami merupakan supplier material konstruksi yang menyediakan berbagai jenis bahan berkualitas tinggi untuk proyek pembangunan. Dari bahan bangunan hingga perlengkapan konstruksi, kami memastikan ketersediaan material yang tepat waktu.",
    delay: 400,
  },
  {
    image: "/img/service/1.jpg",
    title: "Scaffolding",
    description:
      "Kami menyediakan scaffolding yang aman dan berkualitas untuk semua jenis proyek. Produk kami memenuhi standar keselamatan yang ketat dan dirancang untuk mendukung efisiensi kerja di lokasi konstruksi.",
    delay: 500,
  },
];
</script>
<template>
  <section id="services">
    <div class="px-10 mx-auto p-6">
      <h1
        class="text-4xl text-main font-bold my-4 border-b-4 pb-2 w-fit border-main"
        data-aos="fade-down"
      >
        Layanan Kami
      </h1>
      <p
        class="text-sm font-normal mb-8 text-justify"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        PT Bina Jaya Perkasa Mandiri menawarkan berbagai layanan unggulan yang
        dirancang untuk memenuhi kebutuhan pembangunan dan konstruksi di
        Indonesia. Dengan pengalaman lebih dari 30 tahun, kami berkomitmen untuk
        memberikan layanan yang cepat, tepat, dan berkualitas.
      </p>

      <div class="flex flex-row gap-6 md:flex-col flex-wrap">
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