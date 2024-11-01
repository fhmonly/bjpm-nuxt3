<script setup>
const { title, image, url } = defineProps({
    title: {
        required: true,
        type: String,
    },
    image: {
        required: true,
        type: String,
    },
    url: {
        required: true,
        type: String,
    }
});
</script>
<template>
    <NuxtLink class="project-card aspect-[1/1.15] max-w-[375px] min-w-[250px] relative overflow-hidden"
        data-aos="zoom-in" :href=url>
        <LazyNuxtImg :src=image :alt="`Gambar pengerjaan proyek ${title}`" class="object-cover w-full h-full"
            format="webp" />
    </NuxtLink>
</template>

<style scoped>
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
    background: linear-gradient(to right, rgba(104, 178, 99, 0.8), rgba(208, 227, 207, 0.7), rgba(255, 255, 255, 0));
    transition: left 0.5s ease-in-out;
    z-index: 2;
}
</style>