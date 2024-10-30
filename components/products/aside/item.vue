<template>
  <li class="mb-4">
    <label :for="categoryId" class="block font-bold cursor-pointer text-main">
      {{ categoryName }}
    </label>
    <input type="checkbox" :id="categoryId" hidden />
    <ul class="pl-4 mt-2">
      <li v-for="(subcategory, index) in subcategories" :key="index">
        <button class="mb-3 font-normal capitalize filter-btn text-greybf">
          {{ subcategory }}
        </button>
      </li>
    </ul>
  </li>
</template>

<script setup>
const props = defineProps({
  categoryId: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  subcategories: {
    type: Array,
    default: () => [],
  },
});
</script>
