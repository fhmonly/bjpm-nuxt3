<template>
  <footer id="contact" class="p-10 text-center bg-main md:text-start">
    <h1 class="text-white text-[20px] font-bold mb-4">Hubungi Kami</h1>
    <div
      class="flex flex-wrap justify-between column-gap-0 gap-5 text-[13px] contact-container"
    >
      <div class="md:w-[18%] w-full md:mb-0 mb-5 md:order-1 order-2">
        <h3 class="mb-2 font-bold text-white">Email</h3>
        <NuxtLink
          class="font-normal text-white"
          :href="`mailto:${staticData?.email}`"
          >{{ staticData?.email }}</NuxtLink
        >
      </div>
      <div class="md:w-[18%] w-full md:mb-0 mb-5 md:order-2 order-3">
        <h3 class="mb-2 font-bold text-white">Whatsapp</h3>
        <NuxtLink
          class="font-normal text-white"
          :href="`https://api.whatsapp.com/send?phone=${staticData?.contact_wa}`"
          target="_blank"
          >+{{ staticData?.contact_wa }}</NuxtLink
        >
      </div>
      <div class="md:w-[18%] w-full md:mb-0 mb-5 md:order-3 order-4">
        <h3 class="mb-2 font-bold text-white">Sosial Media</h3>
        <div class="flex flex-col">
          <NuxtLink
            class="font-normal text-white"
            :href="staticData?.url_facebook"
            target="_blank"
            >Facebook</NuxtLink
          >
          <NuxtLink
            class="font-normal text-white"
            :href="staticData?.url_instagram"
            target="_blank"
            >Instagram</NuxtLink
          >
          <NuxtLink
            class="font-normal text-white"
            :href="staticData?.url_youtube"
            target="_blank"
            >Youtube</NuxtLink
          >
          <NuxtLink
            class="font-normal text-white"
            :href="staticData?.url_tiktok"
            target="_blank"
            >Tiktok</NuxtLink
          >
          <NuxtLink
            class="font-normal text-white"
            :href="staticData?.url_shopee"
            target="_blank"
            >Shopee</NuxtLink
          >
          <NuxtLink
            class="font-normal text-white"
            :href="staticData?.url_tokopedia"
            target="_blank"
            >Tokopedia</NuxtLink
          >
        </div>
      </div>
      <div class="md:w-[18%] w-full md:mb-0 mb-5 md:order-3 order-4">
        <h3 class="mb-2 font-bold text-white">Pintasan</h3>
        <div class="flex flex-col">
          <NuxtLink href="/" class="mb-1 font-normal text-white">Home</NuxtLink>
          <NuxtLink href="/about" class="mb-1 font-normal text-white"
            >Tentang</NuxtLink
          >
          <NuxtLink href="/services" class="mb-1 font-normal text-white"
            >Layanan</NuxtLink
          >
          <NuxtLink href="/projects" class="mb-1 font-normal text-white"
            >Produk</NuxtLink
          >
          <NuxtLink href="/projects" class="mb-1 font-normal text-white"
            >Proyek</NuxtLink
          >
          <NuxtLink href="/articles" class="mb-1 font-normal text-white"
            >Artikel</NuxtLink
          >
          <NuxtLink href="/contact" class="mb-1 font-normal text-white"
            >Kontak</NuxtLink
          >
        </div>
      </div>
      <div class="md:w-[18%] w-full md:mb-0 mb-5 md:order-4 order-5">
        <h3 class="mb-2 font-bold text-white">Kantor Utama</h3>
        <div class="flex flex-col">
          <NuxtLink
            class="font-normal text-white"
            :href="staticData?.contact_maps"
            >{{ staticData?.contact_address }}</NuxtLink
          >
          <NuxtLink
            class="font-normal text-white"
            :href="`tel:${staticData?.contact_phone}`"
            >Telp. +{{ staticData?.contact_phone }}</NuxtLink
          >
        </div>
      </div>
      <div
        class="md:w-[18%] w-full md:mb-0 mb-5 md:order-5 order-1 flex items-center"
      >
        <img
          src="/img/logo/logo-white.png"
          alt="logo BJPM"
          class="aspect-square w-[100px] mx-auto md:mx-0"
        />
      </div>
      <div class="md:w-[60%] w-full md:order-6 order-7">
        <h3 class="mb-2 font-bold text-white">Partner</h3>
        <NuxtLink
          :to="staticData?.partner_link_1"
          class="flex flex-wrap justify-center w-full gap-4 md:justify-start"
        >
          <img
            :src="staticData?.partner_logo_1"
            alt=""
            class="min-h-[32px] flex-shrink-1 h-full max-h-[50px]"
          />
        </NuxtLink>
        <NuxtLink
          :to="staticData?.partner_link_2"
          class="flex flex-wrap justify-center w-full gap-4 md:justify-start"
        >
          <img
            :src="staticData?.partner_logo_2"
            alt=""
            class="min-h-[32px] flex-shrink-1 h-full max-h-[50px]"
          />
        </NuxtLink>
        <NuxtLink
          :to="staticData?.partner_link_3"
          class="flex flex-wrap justify-center w-full gap-4 md:justify-start"
        >
          <img
            :src="staticData?.partner_logo_3"
            alt=""
            class="min-h-[32px] flex-shrink-1 h-full max-h-[50px]"
          />
        </NuxtLink>
        <NuxtLink
          :to="staticData?.partner_link_4"
          class="flex flex-wrap justify-center w-full gap-4 md:justify-start"
        >
          <img
            :src="staticData?.partner_logo_4"
            alt=""
            class="min-h-[32px] flex-shrink-1 h-full max-h-[50px]"
          />
        </NuxtLink>
      </div>
      <!-- <div class="md:w-[18%] w-full md:mb-0 mb-5 md:order-7 order-6">
        <h3 class="mb-2 font-bold text-white">Bengkel</h3>
        <div class="flex flex-col">
          <NuxtLink class="font-normal text-white" href="/">
            Jl. Raya Jetis Kupang KM. 08 Ds. Parengan Kec. Jetis Mojokerto
          </NuxtLink>
          <NuxtLink class="font-normal text-white" href="/"
            >Telp. (0321) 362986</NuxtLink
          >
        </div>
      </div> -->
    </div>
  </footer>
</template>
<script setup>
const staticData = useStatic();
</script>