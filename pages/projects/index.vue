<template>
  <section id="project" class="px-4">
    <h1
      class="py-4 mb-5 text-3xl font-bold text-center text-white md:text-4xl sm:py-6 md:py-20 section-header"
    >
      Proyek Kami
    </h1>
    <div class="flex flex-wrap justify-between gap-4 mb-5">
      <div
        class="aspect-[1/1.15] tablet:w-[48%] md:w-[24%] grow min-w-[250px] relative flex items-center justify-center overflow-hidden project-card"
        v-for="project in projects.data"
        :key="project.description.galeri_id"
        @click="
          showPopupGalery(project.other_images.concat({ image: project.image }))
        "
      >
        <img
          :src="project.image"
          :alt="`Thumbnail ${project.description.title}`"
          class="object-cover w-full h-full"
        />
        <div
          class="absolute top-0 flex flex-col items-center justify-center w-full h-full text-white overlay"
        >
          <p class="text-[15px] font-semibold">
            {{ project.description.title }}
          </p>
          <p class="text-[10px]">{{ project.description.sub_title }}</p>
          <p class="text-[10px]">{{ project.description.sub_title_2 }}</p>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center w-full py-8"
        v-if="projects?.data?.length <= 0"
      >
        <IconBiXCircle width="44" height="44" class="mb-5 text-red-500" />
        <p>Belum ada proyek yang dikerjakan</p>
      </div>
    </div>
  </section>
</template>
<script setup>
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
    },
  ],
});
import Swal from "sweetalert2";
function showPopupGalery(images = []) {
  Swal.fire({
    showConfirmButton: false,
    didRender: () => {
      const swalHtml = Swal.getHtmlContainer();
      const imagesHtml = images.map((image, index) => {
        return `
        <swiper-slide>
          <div class="max-h-[85vh] max-w-[90%] object-cover m-auto h-full w-full landscape:aspect-[4/3] portrait:aspect-[9/16] flex">
            <img src="${image.image}" alt="gambar ke-${index}" class="m-auto portrait:w-full landscape:h-full"/>
          </div>
        </swiper-slide>
        `;
      });
      swalHtml.innerHTML = `
      <swiper-container navigation="true" space-between="10">
        ${imagesHtml.join("")}
      </swiper-container>
      `;
    },
    showCloseButton: true,
    width: "auto",
    heightAuto: true,
  });
}
const config = useRuntimeConfig();
const {
  data: projects,
  pending,
  error,
  refresh,
} = await useFetch(`${config.public.apiPublic}/api/projects`, {
  pick: ["data"],
  key: "api-projects",
});
</script>
<style scoped>
.section-header {
  background: linear-gradient(
      90deg,
      #438d3d 0%,
      rgba(161, 198, 158, 0.7) 50%,
      rgba(208, 227, 207, 0.5) 75%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(/img/project/Header.jpeg);
  background-position-y: 20%;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s ease-in-out;
}

.section-header:hover {
  background-position-y: 60%;
}
.project-card .overlay {
  --duration: 500ms;
  content: "";
  background: linear-gradient(
    to left,
    rgba(104, 178, 99, 0.8),
    rgba(208, 227, 207, 0.7),
    rgba(255, 255, 255, 0)
  );
  transition: left var(--duration) ease-in-out;
  left: 100%;
}
.project-card:hover .overlay {
  left: 0;
}
.project-card .overlay * {
  opacity: 0;
  scale: 0.8;
}
.project-card:hover .overlay * {
  opacity: 1;
  scale: 1;
  transition: all var(--duration) ease
    calc(var(--duration) - var(--duration) * 25 / 100);
}
.project-card img {
  transition: transform 0.5s ease;
}

.project-card:hover img {
  transform: scale(1.1);
}
</style>