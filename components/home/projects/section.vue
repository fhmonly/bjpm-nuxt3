<template>
  <section id="project" class="flex flex-col mb-5">
    <h1
      class="text-[32px] text-center text-white font-bold p-4 sm:mb-6 sm:p-10"
    >
      Proyek
    </h1>
    <div
      class="flex flex-wrap justify-center gap-3 p-5 mb-1 md:gap-5 xl:justify-between project-card-container sm:p-10"
    >
      <NuxtLink
        class="project-card aspect-[1/1.15] max-w-[375px] min-w-[250px] relative overflow-hidden"
        data-aos="zoom-in"
        href="javascript:void(0)"
        v-for="project in projects.data?.slice(0, 4)"
        :key="project.id"
        @click="
          (event) => {
            event.preventDefault();
            showPopupGalery(
              project.other_images.concat({ image: project.image })
            );
          }
        "
      >
        <img
          :src="project.image"
          :alt="`Gambar pengerjaan proyek ${project.description.title}`"
          class="object-cover w-full h-full"
        />
      </NuxtLink>
    </div>
    <NuxtLink
      to="/projects"
      class="p-3 py-2 mx-auto text-sm text-white border-2 border-white bg-main hover:text-main hover:bg-white hover:border-main"
    >
      Selengkapnya
    </NuxtLink>
  </section>
</template>
<script setup>
import Swal from "sweetalert2";

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

function showPopupGalery(images = []) {
  Swal.fire({
    showConfirmButton: false,
    didRender: () => {
      const swalHtml = Swal.getHtmlContainer();
      const imagesHtml = images.map((image, index) => {
        return `
          <img src="${image.image}" alt="gambar ke-${index}" class="max-h-[200px] h-full w-auto max-w-[48%]"/>
        `;
      });
      swalHtml.innerHTML = `
      <div class="flex flex-wrap items-center justify-center gap-3">
        ${imagesHtml.join("")}
      </div>
      `;
    },
  });
}
</script>
<style>
#project h1 {
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

#project h1:hover {
  background-position-y: 60%;
}

.project-card:hover::before {
  left: 0;
}

.project-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(104, 178, 99, 0.8),
    rgba(208, 227, 207, 0.7),
    rgba(255, 255, 255, 0)
  );
  transition: left 0.5s ease-in-out;
  z-index: 2;
}
</style>