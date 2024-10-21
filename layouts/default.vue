<script setup>
const { staticData } = useStatic();
useHead({
  title: staticData?.value?.data?.default_meta_title,
  meta: [
    {
      name: "description",
      content: staticData?.value?.data?.default_meta_description,
    },
    {
      name: "keywords",
      content: staticData?.value?.data?.default_meta_keywords,
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
