<script setup>
defineProps({
    href: {
        default: "#",
        type: String
    }
});
</script>
<template>
    <li>
        <NuxtLink :to=href>
            <slot />
        </NuxtLink>
    </li>
</template>