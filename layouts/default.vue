<script setup>
const config = useRuntimeConfig();
const { status, data, error, refresh } = await useFetch(
  `${config.public.apiPublic}/api/settings`,
  {
    pick: ["data"],
    key: "res-static-data",
    server: true,
  }
);
useHead({
  title: data.value?.data?.default_meta_title,
  meta: [
    {
      name: "description",
      content: data.value?.data?.default_meta_description,
    },
    {
      name: "keywords",
      content: data.value?.data?.default_meta_keywords,
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "/css/main.css",
    },
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
