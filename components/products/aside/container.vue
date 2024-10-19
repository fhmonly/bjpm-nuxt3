<script setup>
useSeoMeta({
  title: "Products",
});
const productCategory = useProductCategory();
</script>
<template>
  <aside
    class="sticky top-[80px] flex-col justify-center block w-full mb-4 bg-white h-fit"
  >
    <label
      for="aside-kategori"
      class="block p-4 text-xl font-bold text-white cursor-pointer bg-main"
    >
      Kategori
    </label>
    <input type="checkbox" id="aside-kategori" hidden />
    <ul id="accordion" class="hidden p-4 text-left md:block">
      <ProductsAsideItem
        :category-id="'kategori-1'"
        :category-name="'Kategori 1'"
        :subcategories="['scaffolding']"
      />
      <ProductsAsideItem
        :category-id="'kategori-2'"
        :category-name="'Kategori 2'"
        :subcategories="['horrybeam', 'pipa']"
      />
      <button
        class="block font-bold cursor-pointer text-main"
        @click="productCategory = 'all'"
      >
        All
      </button>
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