<script setup>
const products = [
  {
    id: 1,
    name: "Horrybeam 1",
    category: "horrybeam",
    image: "/img/product/horrybeam.jpg",
    url: "/products/detail",
  },
  {
    id: 2,
    name: "Horrybeam 2",
    category: "horrybeam",
    image: "/img/product/horrybeam.jpg",
    url: "/products/detail",
  },
  {
    id: 3,
    name: "Horrybeam 3",
    category: "horrybeam",
    image: "/img/product/horrybeam.jpg",
    url: "/products/detail",
  },
  {
    id: 4,
    name: "Horrybeam 4",
    category: "horrybeam",
    image: "/img/product/horrybeam.jpg",
    url: "/products/detail",
  },
  {
    id: 5,
    name: "Horrybeam 5",
    category: "horrybeam",
    image: "/img/product/horrybeam.jpg",
    url: "/products/detail",
  },
  {
    id: 6,
    name: "Scaffolding 1",
    category: "scaffolding",
    image: "/img/product/scaffolding.jpg",
    url: "/products/detail",
  },
  {
    id: 7,
    name: "Scaffolding 2",
    category: "scaffolding",
    image: "/img/product/scaffolding.jpg",
    url: "/products/detail",
  },
  {
    id: 8,
    name: "Scaffolding 3",
    category: "scaffolding",
    image: "/img/product/scaffolding.jpg",
    url: "/products/detail",
  },
  {
    id: 9,
    name: "Scaffolding 4",
    category: "scaffolding",
    image: "/img/product/scaffolding.jpg",
    url: "/products/detail",
  },
  {
    id: 10,
    name: "Scaffolding 5",
    category: "scaffolding",
    image: "/img/product/scaffolding.jpg",
    url: "/products/detail",
  },
  {
    id: 11,
    name: "Pipa 1",
    category: "pipa",
    image: "/img/product/pipa.jpg",
    url: "/products/detail",
  },
  {
    id: 12,
    name: "Pipa 2",
    category: "pipa",
    image: "/img/product/pipa.jpg",
    url: "/products/detail",
  },
  {
    id: 13,
    name: "Pipa 3",
    category: "pipa",
    image: "/img/product/pipa.jpg",
    url: "/products/detail",
  },
  {
    id: 14,
    name: "Pipa 4",
    category: "pipa",
    image: "/img/product/pipa.jpg",
    url: "/products/detail",
  },
  {
    id: 15,
    name: "Pipa 5",
    category: "pipa",
    image: "/img/product/pipa.jpg",
    url: "/products/detail",
  },
  {
    id: 16,
    name: "Horrybeam 6",
    category: "horrybeam",
    image: "/img/product/horrybeam.jpg",
    url: "/products/detail",
  },
  {
    id: 17,
    name: "Scaffolding 6",
    category: "scaffolding",
    image: "/img/product/scaffolding.jpg",
    url: "/products/detail",
  },
  {
    id: 18,
    name: "Pipa 6",
    category: "pipa",
    image: "/img/product/pipa.jpg",
    url: "/products/detail",
  },
  {
    id: 19,
    name: "Horrybeam 7",
    category: "horrybeam",
    image: "/img/product/horrybeam.jpg",
    url: "/products/detail",
  },
  {
    id: 20,
    name: "Scaffolding 7",
    category: "scaffolding",
    image: "/img/product/scaffolding.jpg",
    url: "/products/detail",
  },
];
const productCategory = useProductCategory();
</script>
<template>
  <section id="product" class="flex flex-col px-10 py-2">
    <h1 class="text-3xl text-white text-center py-10 mb-2 md:mb-5 md:py-20">
      Produk Kami
      <br />
    </h1>
    <div class="block md:flex justify mb-10">
      <div class="w-full mr-0 md:w-3/12 md:mr-10">
        <ProductsAsideContainer />
      </div>

      <div class="w-full md:w-9/12">
        <div class="flex flex-wrap justify-center gap-5 product-card-container">
          <ProductsCard
            v-for="(product, index) in products"
            :key="index"
            :title="product.name"
            :image="product.image"
            :category="product.category"
            :url="product.url"
            v-show="[product.category, 'all'].includes(productCategory)"
            class="w-[30%] bg-main grow"
          />
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
</style>