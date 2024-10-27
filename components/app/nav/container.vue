<script setup>
onMounted(() => {
  const hamburger = document.querySelector(".hamburger");
  const navOffcanvas = document.querySelector(".nav-offcanvas");
  const offcanvasCloseBtn = navOffcanvas.querySelector(".close-btn");

  hamburger.addEventListener("click", () => {
    navOffcanvas.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  offcanvasCloseBtn.addEventListener("click", () => {
    navOffcanvas.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});
function offCanvasItemClick() {
  const navOffcanvas = document.querySelector(".nav-offcanvas");
  if (navOffcanvas.classList.contains("active")) {
    document.body.style.overflow = "auto";
    navOffcanvas.classList.remove("active");
  }
}
const { staticData, error, refresh, status } = useStatic();
</script>
<template>
  <header class="sticky top-0 z-50 px-2 tablet:px-8 bg-body">
    <nav class="flex items-center justify-between">
      <div class="flex items-center justify-center logo me-3">
        <NuxtLink href="/" class="shrink-0">
          <img
            src="/img/logo/logo-bjpm.png"
            alt="Logo BJPM"
            class="w-[64px] p-1 sm:w-[70px] aspect-square"
          />
        </NuxtLink>
        <div class="block mx-2 me-4 max-w-[300px]">
          <p class="text-sm text-main">
            {{ staticData?.data?.contact_company_name }}
          </p>
          <p class="hidden text-xs text-nav-capt sm:block">
            {{ staticData?.data?.contact_taglines }}
          </p>
        </div>
      </div>
      <ul
        class="hidden lg:flex items-center grow justify-between mx-3 text-black flex-wrap overflow-hidden max-w-[50%] gap-3 me-7"
      >
        <AppNavItem href="/">Home</AppNavItem>
        <AppNavItem href="/about">Tentang</AppNavItem>
        <AppNavItem href="/services">Layanan</AppNavItem>
        <AppNavItem href="/products">Produk</AppNavItem>
        <AppNavItem href="/projects">Proyek</AppNavItem>
        <AppNavItem href="/articles">Artikel</AppNavItem>
        <AppNavItem href="/contact">Kontak</AppNavItem>
      </ul>
      <button type="button" class="hamburger text-greybf lg:hidden">
        <IconBiList width="32px" height="32px" />
      </button>
    </nav>
    <div class="nav-offcanvas bg-body">
      <div class="py-6">
        <button type="button" class="fixed top-0 right-0 mt-2 close-btn me-4">
          <IconBiX width="32px" height="32px" />
        </button>
        <ul
          class="flex flex-col items-center justify-center w-full h-full gap-2"
        >
          <li class="flex flex-col items-center text-center text-main">
            <img
              src="/img/logo/logo-bjpm.png"
              alt=""
              class="w-[70px] aspect-square mb-3"
            />
            <p class="mobile-tagline">PT. BINA JAYA MANDIRIINDONESIA</p>
          </li>
          <AppNavItem @click="offCanvasItemClick" href="/">Home</AppNavItem>
          <AppNavItem @click="offCanvasItemClick" href="/about"
            >Tentang</AppNavItem
          >
          <AppNavItem @click="offCanvasItemClick" href="/services"
            >Layanan</AppNavItem
          >
          <AppNavItem @click="offCanvasItemClick" href="/products"
            >Produk</AppNavItem
          >
          <AppNavItem @click="offCanvasItemClick" href="/projects"
            >Proyek</AppNavItem
          >
          <AppNavItem @click="offCanvasItemClick" href="/articles"
            >Artikel</AppNavItem
          >
          <AppNavItem @click="offCanvasItemClick" href="/contact"
            >Kontak</AppNavItem
          >
          <li class="text-main">
            <p class="text-center">Media Sosial</p>
            <div
              class="flex gap-x-3 mt-1 social-media-wrapper text-[24px] justify-center"
            >
              <a :href="staticData?.data?.url_facebook" target="_blank">
                <IconBiFacebook width="32px" height="32px" />
              </a>
              <a :href="staticData?.data?.url_instagram" target="_blank">
                <IconBiInstagram width="32px" height="32px" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<style scoped>
nav {
  --item-height: 30px;
}

nav ul {
  max-height: var(--item-height);
}

nav li > a {
  height: var(--item-height);
}
</style>