<script setup>
const config = useRuntimeConfig();
const productCategoryUrl = useProductCategory();
productCategoryUrl.value = `${config.public.apiPublic}/api/products`;
const {
  data: products,
  pending,
  error,
  refresh,
} = await useFetch(() => productCategoryUrl.value, {
  pick: ["data"],
  key: "api-productCategory",
});
</script>
<template>
  <section id="product" class="flex flex-col px-4 py-2 tablet:px-10">
    <h1
      class="py-4 mb-5 text-3xl font-bold text-center text-white md:text-4xl sm:py-6 md:py-20 section-header"
    >
      Produk Kami
    </h1>
    <div class="block mb-10 md:flex justify">
      <div class="w-full mr-0 md:w-3/12 md:mr-10">
        <ProductsAsideContainer />
      </div>

      <div class="w-full md:w-9/12">
        <div class="flex flex-wrap justify-center gap-5 product-card-container">
          <div
            class="article-card aspect-[0.87/1] w-full sm:max-w-[48%] lg:max-w-[31%] flex flex-col"
            data-aos="zoom-in"
            v-for="product in products.data.data"
            :key="product.description.id"
          >
            <img
              :src="product.image"
              :alt="`Gambar produk ${product.description.name}`"
              class="object-cover grow aspect-[1.29/1]"
            />
            <div
              class="flex flex-col p-3 pt-5 text-sm bg-[#94949431] text-main"
            >
              <!-- <p class="mb-1 text-greybf">
                {{ $dayjs(article.dates).locale("id").fromNow() }}
              </p> -->
              <p class="mb-3 text-base font-bold truncate">
                {{ product.description.name }}
              </p>
              <NuxtLink
                class="flex items-center gap-2 p-2 py-1 text-white ms-auto bg-main"
                :to="`/products/${product.description.product_id}`"
              >
                Baca Lebih
                <IconBiArrowRight />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#product h1 {
  background: linear-gradient(
      90deg,
      #438d3d 0%,
      rgba(161, 198, 158, 0.7) 50%,
      rgba(208, 227, 207, 0.5) 75%,
      rgba(255, 255, 255, 0) 100%
    ),
    url("/img/project/Header.jpeg");
  background-position-y: 20%;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s ease-in-out;
}

#product h1:hover {
  background-position-y: 60%;
}
@keyframes zoomIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.product-card {
  animation: zoomIn 0.5s ease-in-out;
}
.product-card-overlay {
  background: linear-gradient(
    to top,
    rgba(104, 178, 99, 0.8),
    rgba(208, 227, 207, 0.7),
    rgba(255, 255, 255, 0)
  );
  transition: all 250ms ease-out;
}

.product-card:hover .product-card-overlay {
  bottom: 0;
  top: 0;
}

.product-card img {
  transition: transform 0.5s ease;
}

.product-card:hover img {
  transform: scale(1.1);
}
</style>