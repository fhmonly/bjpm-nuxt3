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
  <section id="product" class="flex flex-col px-10 py-2">
    <h1 class="py-10 mb-2 text-3xl text-center text-white md:mb-5 md:py-20">
      Produk Kami
      <br />
    </h1>
    <div class="block mb-10 md:flex justify">
      <div class="w-full mr-0 md:w-3/12 md:mr-10">
        <ProductsAsideContainer />
      </div>

      <div class="w-full md:w-9/12">
        <div class="flex flex-wrap justify-center gap-5 product-card-container">
          <div
            class="product-card aspect-[1/1.15] relative overflow-hidden min-w-[250px] max-w-[300px] w-[30%] bg-main grow"
            v-for="(product, index) in products.data.data"
            :key="index"
          >
            <img
              :src="product.image"
              :alt="`Gambar produk ${product.description.name}`"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute left-0 right-0 top-[100%] flex flex-col items-center h-full product-card-overlay justify-center"
            >
              <p class="text-xl font-bold product-text text-main">
                {{ product.description.name }}
              </p>
              <NuxtLink
                :to="`/products/${product.description.product_id}`"
                style="text-decoration: none"
                class="absolute bottom-0 px-2 py-1 mb-2 text-sm text-white border-2 border-transparent product-btn bg-main hover:border-main hover:bg-transparent"
              >
                Selengkapnya
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