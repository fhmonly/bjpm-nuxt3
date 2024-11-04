<script setup>
const config = useRuntimeConfig();
const {
  data: categories,
  error: errorCategories,
  refresh: refreshCategories,
} = await useFetch(`${config.public.apiPublic}/api/category`, {
  pick: ["data"],
});
const route = useRoute();
onMounted(() => {
  setAsideTopPoss()
  function setAsideTopPoss() {
    const aside = document.querySelector("aside.category-filter")
    const headerNav = document.querySelector("header")
    aside.style.top = headerNav.clientHeight + "px"
  }
  window.addEventListener("resize", setAsideTopPoss)
});
</script>
<template>
  <aside class="sticky flex-col justify-center block w-full mb-4 bg-white h-fit category-filter">
    <!-- <label
      for="aside-kategori"
      class="block p-4 text-xl font-bold text-white cursor-pointer bg-main"
    >
      Filter
    </label>
    <input type="checkbox" id="aside-kategori" hidden /> -->
    <ul id="accordion" class="text-left">
      <li class="mb-4">
        <label for="categoryId"
          class="flex items-center justify-between p-4 font-bold text-white cursor-pointer bg-main">
          <span>Kategori</span>
          <IconBiCaretDownFill class="md:hidden" />
        </label>
        <input type="checkbox" id="categoryId" hidden />
        <ul class="pl-6 mt-2 font-normal text-greybf">
          <li v-for="category in categories.data" :key="category.id" class="my-4">
            <NuxtLink class="block capitalize filter-btn" :class="{
              'text-main font-bold': `${route?.query?.category}` === `${category.description.category_id}`,
            }" :href="`?category=${category.description.category_id}`">
              {{ category.description.name }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="block cursor-pointer" :class="{
              'text-main font-bold': `${!route?.query?.category}` === 'true',
            }" href="/products">
              All
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style>
input[type="checkbox"]+ul {
  display: none;
}

@media screen and (min-width: 768px) {
  input[type="checkbox"]+ul {
    display: block;
  }
}

input[type="checkbox"]:checked+ul {
  display: block;
}
</style>