<script setup>
useHead({
    link: [
        {
            rel: "stylesheet",
            href: "/css/main.css"
        }
    ],
});
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <AppNavContainer />
        <slot />
        <AppFooter class="mt-auto" />
    </div>
</template>
