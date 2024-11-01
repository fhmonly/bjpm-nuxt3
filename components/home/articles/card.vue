<script setup>
const { title, image, url, date } = defineProps({
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
    },
    date: {
        required: true,
        type: String,
    }
});
</script>
<template>
    <div class="article-card aspect-[0.87/1] min-w-[250px] max-w-[300px] flex flex-col" data-aos="zoom-in">
        <LazyNuxtImg format="webp" :src=image :alt="`Thumbnail ${title}`" class="object-cover grow aspect-[1.29/1]" />
        <div class="flex flex-col p-3 pt-5 text-sm bg-white text-main">
            <p class="mb-1 text-greybf">{{ date }}</p>
            <p class="mb-3 text-base font-bold truncate">
                {{ title }}
            </p>
            <NuxtLink class="flex items-center gap-2 p-2 py-1 text-white ms-auto bg-main" :to=url>
                Baca Lebih
                <IconBiArrowRight />
            </NuxtLink>
        </div>
    </div>
</template>