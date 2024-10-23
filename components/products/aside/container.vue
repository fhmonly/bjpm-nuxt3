<script setup>
useSeoMeta({
  title: "Products",
});
const config = useRuntimeConfig();
const productCategoryUrl = useProductCategory();
const {
  data: categories,
  pending: pendingCategories,
  error: errorCategories,
  refresh: refreshCategories,
} = await useFetch(`${config.public.apiPublic}/api/category`, {
  pick: ["data"],
});
</script>
<template>
  <aside
    class="sticky top-[80px] flex-col justify-center block w-full mb-4 bg-white h-fit"
  >
    <label
      for="aside-kategori"
      class="block p-4 text-xl font-bold text-white cursor-pointer bg-main"
    >
      Filter
    </label>
    <input type="checkbox" id="aside-kategori" hidden />
    <ul id="accordion" class="hidden p-4 text-left md:block">
      <li class="mb-4">
        <label
          for="categoryId"
          class="block font-bold cursor-pointer text-main"
        >
          Kategori
        </label>
        <input type="checkbox" id="categoryId" hidden />
        <ul class="pl-4 mt-2">
          <li v-for="category in categories.data" :key="category.id">
            <button
              class="mb-3 font-normal capitalize filter-btn text-greybf"
              @click="
                productCategoryUrl = `${config.public.apiPublic}/api/products?category=${category.description.category_id}`
              "
            >
              {{ category.description.name }}
            </button>
          </li>
          <li>
            <button
              class="block font-bold cursor-pointer text-main"
              @click="
                productCategoryUrl = `${config.public.apiPublic}/api/products`
              "
            >
              All
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style>
input[type="checkbox"] + ul {
  display: none;
}
input[type="checkbox"]:checked + ul {
  display: block;
}
</style>