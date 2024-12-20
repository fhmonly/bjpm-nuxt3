<template>
  <main id="project" class="px-2 tablet:px-8">
    <h1 class="py-4 mb-5 text-3xl font-bold text-center text-white md:text-4xl sm:py-6 md:py-20 section-header">
      Proyek Kami
    </h1>
    <div class="grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
      <div class="aspect-[1/1.15] relative flex items-center justify-center overflow-hidden project-card"
        v-for="project in projects.data" :key="project.description.galeri_id" @click="
          showImageGalery({
            activeImageIndex: 0,
            galeries: [{ image: project.image }].concat(project.other_images).map(g => {
              return {
                image: g.image,
                description: project?.description?.content || project?.description?.title
              }
            })
          })">
        <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" :src="project.image"
          :alt="`Thumbnail ${project.description.title}`" class="object-cover w-full h-full" />
        <div class="absolute top-0 flex flex-col items-center justify-center w-full h-full text-white overlay">
          <p class="text-[15px] font-semibold">
            {{ project.description.title }}
          </p>
          <div class="text-[15px]" v-html="project?.description?.content"></div>
          <p class="text-[10px]">{{ project.description.sub_title }}</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center w-full py-8" v-if="projects?.data?.length <= 0">
        <IconBiXCircle width="44" height="44" class="mb-5 text-red-500" />
        <p>Belum ada proyek yang dikerjakan</p>
      </div>
    </div>
    <ProjectsClient />
  </main>
</template>
<script setup>
useSeoMeta({
  title: "Projects"
})
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
    },
  ],
});
const { showImageGalery } = useImageGalery()
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

.project-card .overlay {
  --duration: 500ms;
  content: "";
  background: linear-gradient(to left,
      rgba(104, 178, 99, 0.8),
      rgba(208, 227, 207, 0.7),
      rgba(255, 255, 255, 0));
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
  transition: all var(--duration) ease calc(var(--duration) - var(--duration) * 25 / 100);
}

.project-card img {
  transition: transform 0.5s ease;
}

.project-card:hover img {
  transform: scale(1.1);
}
</style>