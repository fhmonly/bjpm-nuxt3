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
    <div class="aspect-[0.66/1] service-card" data-aos="zoom-in">
        <div class="h-full">
            <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" :src=image :alt="`Gambar pelayanan ${title}`"
                class="object-cover w-full h-full" />
        </div>
        <div class="opacity-100 topic-overlay sm:opacity-0">
            <p class="text-[30px] mb-4 text-center leading-7 w-[80%]">{{ title }}</p>
            <NuxtLink class="bg-main text-[13px] p-2 border-2 border-white" :to="url">Selengkapnya</NuxtLink>
        </div>
    </div>
</template>
<style scoped>
.topic-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: 250ms ease-in all;
    transition-delay: 100ms;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(67, 141, 61, 0.6) 60%);
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