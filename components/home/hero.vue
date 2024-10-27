<template>
  <section id="home" class="relative flex flex-col items-center h-[87vh]">
    <swiper-container
      speed="500"
      autoplay-delay="4000"
      class="z-0 w-full h-full"
    >
      <swiper-slide>
        <img
          :src="`${config.public.apiPublic}/images/static/${staticData.data.contact_hero_image}`"
          alt=""
          class="object-cover w-full h-full"
        />
      </swiper-slide>
    </swiper-container>
    <div class="absolute top-0 bottom-0 left-0 right-0 z-10 hero-caption">
      <div
        class="caption-wrapper flex bg-[#438D3DB2] text-white h-full items-center justify-between p-5 md:p-10"
      >
        <div class="caption-detail grow max-w-[728px]">
          <h1 class="font-bold text-[30px]">BJPM Scaffolding</h1>
          <p class="text-[14px] my-3 mb-6 sm:me-10">
            <i>
              Supplier, Industries, Scaffolding, Beton Lift, Concrete Bucket,
              Belt Conveyor, Steel Construction, Asphal Sprayer, Stone Crusher
            </i>
          </p>
          <a
            href="#contact"
            class="flex items-center"
            style="text-decoration: none"
          >
            <span class="p-3 py-1 text-black bg-white text-[10px]">Kontak</span>
            <span class="bg-black h-full aspect-square w-[24px] flex">
              <IconBiArrowRightShort class="m-auto" width="15" height="15" />
            </span>
          </a>
        </div>
        <div class="flex-col hidden gap-4 sm:flex w-[150px] flex-shrink-0">
          <div class="p-5 text-black bg-white branch-amount">
            <p class="text-[28px]">5</p>
            <p>Cabang</p>
          </div>
          <div class="p-5 text-black bg-white customer-amount">
            <p class="text-[28px]">12k</p>
            <p>Pelanggan</p>
          </div>
          <div class="p-5 text-black bg-white product-amount">
            <p class="text-[28px]">15k</p>
            <p>Product</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-0 progress-bar w-[20%] min-w-[100px] bg-greybf mx-auto h-[10px] mb-2 z-10 p-[2px]"
    >
      <div class="h-full progress bg-main"></div>
    </div>
  </section>
</template>
<style scoped>
.progress-bar .progress {
  transition: width 500ms ease-out;
}
</style>
<script setup>
onMounted(() => {
  const swiperEl = document.querySelector("swiper-container");
  const progressBar = document.querySelector(".progress-bar .progress");

  swiperEl.addEventListener("swiperprogress", (event) => {
    const [swiper, progress] = event.detail;
    progressBar.style.width = `${progress * 100}%`;
  });
});
const config = useRuntimeConfig();
const { staticData, error, refresh, status } = useStatic();
</script>