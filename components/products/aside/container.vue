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
    <!-- <label
      for="aside-kategori"
      class="block p-4 text-xl font-bold text-white cursor-pointer bg-main"
    >
      Filter
    </label>
    <input type="checkbox" id="aside-kategori" hidden /> -->
    <ul id="accordion" class="hidden text-left md:block">
      <li class="mb-4">
        <label
          for="categoryId"
          class="block p-4 font-bold text-white cursor-pointer bg-main"
        >
          Kategori
        </label>
        <input type="checkbox" id="categoryId" hidden />
        <ul class="pl-6 mt-2 font-normal text-greybf">
          <li v-for="category in categories.data" :key="category.id">
            <button
              class="mb-3 capitalize filter-btn"
              :class="{
                'text-main font-bold':
                  productCategoryUrl ===
                  `${config.public.apiPublic}/api/products?category=${category.description.category_id}`,
              }"
              @click="
                productCategoryUrl = `${config.public.apiPublic}/api/products?category=${category.description.category_id}`
              "
            >
              {{ category.description.name }}
            </button>
          </li>
          <li>
            <button
              class="block cursor-pointer"
              :class="{
                'text-main font-bold':
                  productCategoryUrl ===
                  `${config.public.apiPublic}/api/products`,
              }"
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