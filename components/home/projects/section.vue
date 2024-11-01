<template>
  <section id="project" class="flex flex-col mb-5">
    <h1 class="text-[32px] text-center text-white font-bold p-4 sm:mb-6 sm:p-10 section-header">
      Proyek
    </h1>
    <div
      class="flex flex-wrap justify-center gap-3 p-5 mb-1 md:gap-5 xl:justify-between project-card-container sm:p-10">
      <NuxtLink class="project-card aspect-[1/1.15] w-full lg:max-w-[23%] tablet:max-w-[48%] relative overflow-hidden"
        data-aos="zoom-in" href="javascript:void(0)" v-for="project in projects.data?.slice(0, 4)" :key="project.id"
        @click="(event) => {
            event.preventDefault();
            showPopupGalery(
              project.other_images.concat({ image: project.image }),
              project.description.content
            );
          }
          ">
        <LazyNuxtImg format="webp" :src="project.image" :alt="`Gambar pengerjaan proyek ${project.description.title}`"
          class="object-cover w-full h-full" />
      </NuxtLink>
    </div>
    <NuxtLink to="/projects"
      class="p-3 py-2 mx-auto text-sm text-white border-2 border-white bg-main hover:text-main hover:bg-white hover:border-main">
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

function showPopupGalery(images = [], description = "") {
  Swal.fire({
    showConfirmButton: false,
    didRender: () => {
      const swalHtml = Swal.getHtmlContainer();
      const imagesHtml = images.map((image, index) => {
        return `
        <swiper-slide>
          <div class="max-h-[85vh] max-w-[90%] object-cover m-auto h-full w-full landscape:aspect-[4/3] portrait:aspect-[9/16] flex items-center justify-center relative">
            <img src="${image.image}" alt="gambar ke-${index}" class="m-auto portrait:w-full landscape:h-full"/>
            <div class="absolute bottom-0 flex m-auto text-white description portrait:w-full landscape:h-full">
              <div class="w-full mt-auto bg-[#00000080] no-tailwind">
                ${description}
              </div>  
            </div>
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
    didOpen: () => {
      const swalHtmlContainer = Swal.getHtmlContainer();
      const swiper = swalHtmlContainer.querySelector("swiper-container");
      const swiperSlides = swalHtmlContainer.querySelectorAll(
        "swiper-container swiper-slide"
      );
      const slide0 = swiperSlides[0];
      const image0 = slide0.querySelector("img");
      const imageWidth0 = image0.width;
      const imageHeight0 = image0.height;
      const description0 = slide0.querySelector(".description");
      description0.style.aspectRatio = `${imageWidth0}/${imageHeight0}`;
      swiper.swiper.on("slideChange", (e) => {
        const activeIndex = e.activeIndex;
        const currentSlide = swiperSlides[activeIndex];
        const currentImage = currentSlide.querySelector("img");
        const imageWidth = currentImage.width;
        const imageHeight = currentImage.height;
        const description = currentSlide.querySelector(".description");
        description.style.aspectRatio = `${imageWidth}/${imageHeight}`;
      });
    },
    showCloseButton: true,
    width: "90vw",
    heightAuto: true,
  });
}
</script>
<style scoped>
.section-header {
  background: linear-gradient(90deg,
      #438d3d 0%,
      rgba(161, 198, 158, 0.7) 50%,
      rgba(208, 227, 207, 0.5) 75%,
      rgba(255, 255, 255, 0) 100%),
    url(/img/project/Header.jpeg);
  background-position-y: 20%;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s ease-in-out;
}

.section-header:hover {
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
  background: linear-gradient(to right,
      rgba(104, 178, 99, 0.8),
      rgba(208, 227, 207, 0.7),
      rgba(255, 255, 255, 0));
  transition: left 0.5s ease-in-out;
  z-index: 2;
}
</style>