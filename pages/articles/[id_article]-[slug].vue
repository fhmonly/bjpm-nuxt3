<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const {
  data: article,
  pending,
  error,
  refresh,
} = await useFetch(
  `${config.public.apiPublic}/api/articles?id=${route.params.id_article}`,
  {
    pick: ["data"],
  }
);
useSeoMeta({
  title: () => article.value?.data?.description?.title,
});
const router = useRouter()
function handleBack() {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/products');
  }
}
</script>
<template>
  <main id="detail-article" class="py-6">
    <div class="container px-2 tablet:px-8 mx-auto md:w-[70%]">
      <h1 class="mb-4 text-2xl md:text-4xl font-bold text-main">
        {{ article.data.description.title }}
      </h1>

      <div class="flex items-center justify-between text-sm text-gray-500">
        <span class="italic">Published on:
          <strong>{{
            $dayjs(article.data.dates).locale("id").format("DD MMM YYYY")
          }}</strong></span>
        <span class="italic">By: <strong>BJPM Admin</strong></span>
      </div>

      <NuxtImg :placeholder="[50, 25, 75, 5]" :src="article.data.image" alt="Gambar Utama Artikel"
        class="w-full h-auto object-cover max-h-[400px] my-6" format="webp" />

      <article class="p-detail no-tailwind text-sm font-normal text-justify max-w-none"
        v-html="article.data.description.content"></article>

      <div class="mt-8">
        <button @click="handleBack" class="px-4 py-2 text-white bg-main">
          Kembali
        </button>
      </div>
    </div>
  </main>
</template>
<style>
.p-detail a {
  display: inline-flex;
  align-items: center;
}

.p-detail a:hover {
  color: blue;
}

.p-detail a::after {
  display: inline-block;
  content: "";
  width: 10px;
  aspect-ratio: 1/1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='blue' class='bi bi-link-45deg' viewBox='0 0 16 16'%3E%3Cpath d='M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z'/%3E%3Cpath d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  width: 16px;
  height: 16px;
  margin-left: 1px;
}
</style>