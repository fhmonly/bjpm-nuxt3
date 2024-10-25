<script setup>
useSeoMeta({
  title: "Contact",
});
const config = useRuntimeConfig();
const {
  status,
  data: staticData,
  error,
  refresh,
} = await useFetch(`${config.public.apiPublic}/api/settings`, {
  pick: ["data"],
  key: "res-static-data",
  server: true,
});
useHead({
  script: [
    {
      defer: true,
      async: true,
      src: `https://www.google.com/recaptcha/api.js`,
    },
  ],
});
onMounted(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form#contact-us");
    const gRecaptcha = document.getElementById("g-recaptcha");
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      grecaptcha.reset(gRecaptcha);
    });
  });
});
</script>
<template>
  <section
    id="contact"
    class="backdrop-brightness-75"
    style="background-image: url('/img/Video Background.jpg')"
  >
    <main class="py-8 bg-[#428D3D79]">
      <div class="flex items-center justify-center bg-center bg-cover">
        <div class="text-center text-white">
          <h1
            class="pb-2 my-4 text-4xl font-bold capitalize border-b-4 border-white w-fit"
            data-aos="fade-up"
          >
            {{ staticData.data.contact_hero_title }}
          </h1>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-8 px-10 my-8 md:grid-cols-2">
        <div class="p-8 bg-white shadow-lg" data-aos="fade-up">
          <div class="flex items-center mb-4">
            <div>
              <img src="/img/logo/logo-bjpm.png" class="pb-4 w-[100px]" />
              <p class="font-bold text-main">
                {{ staticData.data.contact_company_name }}
              </p>
              <p class="mt-2 text-sm italic font-normal">
                {{ staticData.data.contact_taglines }}
              </p>
            </div>
          </div>
          <div class="flex flex-wrap justify-between mt-3">
            <div class="w-full pr-4 text-gray-600 md:w-1/2">
              <p class="mb-3 text-lg font-semibold text-main">Alamat Kantor</p>
              <p class="mb-3 text-sm">
                <strong>Kantor Pusat</strong><br />
                <span class="text-xs font-normal"
                  >Jl Gunung Sari No.5H RT 02/RW 07 Kel.Sawunggaling
                  Kec.Wonokromo Surabaya</span
                >
                <br class="mb-2" />
                <strong class="text-xs font-semibold mt-[8px]">Email</strong>
                <br /><span class="text-xs font-normal">bjpmsby@gmail.com</span>
                <br class="mb-2" />
                <strong class="text-xs font-semibold mt-[8px]"
                  >No Whatsapp</strong
                >
                <br /><span class="text-xs font-normal">+628123066391</span>
              </p>
              <hr class="border-main border-[1px] mb-3" />
              <p class="mb-3 text-sm">
                <strong>Workshop</strong><br />
                <span class="text-xs font-normal"
                  >Jl Raya Jetis Parengan Ds.Jetis Kec.Parengan Mojokerto</span
                >
                <br class="mb-2" />
                <strong class="text-xs font-semibold mt-[8px]">Email</strong>
                <br /><span class="text-xs font-normal"
                  >bjpmmjkt@gmail.com</span
                >
                <br class="mb-2" />
                <strong class="text-xs font-semibold mt-[8px]"
                  >No Whatsapp</strong
                >
                <br /><span class="text-xs font-normal">+628123066391</span>
              </p>
            </div>
            <div class="w-full pl-0 text-gray-600 md:w-1/2 md:pl-4">
              <p class="mt-0 mb-3 text-sm md:mt-10">
                <strong>Kantor Cabang</strong><br />
                <span class="text-xs font-normal"
                  >Jl Layur No.36 RT 06/07 Kel.Dadapsari Kec.Semarang Utara
                  <br />
                  Semarang</span
                >
                <br class="mb-2" />
                <strong class="text-xs font-semibold mt-[8px]">Email</strong
                ><br /><span class="text-xs font-normal"
                  >bjpmsemarang36@gmail.com</span
                >
                <br class="mb-2" />
                <strong class="text-xs font-semibold mt-[8px]"
                  >No Whatsapp</strong
                >
                <br /><span class="text-xs font-normal">+6281391436231</span>
                <br class="mb-3" />
              </p>
              <hr class="border-main border-[1px] mb-3" />
              <p class="mb-3 text-sm">
                <strong>Workshop</strong><br />
                <span class="text-xs font-normal"
                  >Jl Raya Semarang - Kendal Ds.Sumberejo Kec.Kaliwungu
                  Kab.Kendal (Sebelah Timur Terowongan Sumberejo)</span
                >
                <br class="mb-2" />
                <strong class="text-xs font-semibold mt-[8px]">Email</strong
                ><br /><span class="text-xs font-normal"
                  >bjpmkdl@gmail.com</span
                >
                <br class="mb-2" />
                <strong class="text-xs font-semibold mt-[8px]"
                  >No Whatsapp</strong
                >
                <br /><span class="text-xs font-normal">+6281391436231</span>
                <br class="mb-3" />
              </p>
            </div>
          </div>
        </div>

        <div class="p-8 bg-white shadow-lg" data-aos="fade-down">
          <h2 class="mb-4 text-xl font-bold text-main">Hubungi Kami</h2>
          <p class="mb-4 text-gray-600"></p>
          <form action="/your-submit-endpoint" method="POST" class="text-sm">
            <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <input
                class="p-2 border"
                placeholder="Nama Awal"
                type="text"
                required
              />
              <input
                class="p-2 border"
                placeholder="Nama Akhir"
                type="text"
                required
              />
            </div>
            <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <input
                class="p-2 border"
                placeholder="Email"
                type="email"
                required
              />
              <input
                class="p-2 border"
                placeholder="No Telepon"
                type="tel"
                required
              />
            </div>
            <div class="mb-4">
              <textarea
                class="border p-2 w-full h-[300px] resize-none"
                placeholder="Kirim Pesan"
                required
              ></textarea>
            </div>

            <div class="">
              <div
                class="g-recaptcha"
                id="g-recaptcha"
                :data-sitekey="config.public.googleCaptchaKeyPublic"
              ></div>
            </div>

            <button class="px-4 py-2 mt-4 text-white bg-main" type="submit">
              Kirim
            </button>
          </form>
        </div>
      </div>
    </main>
  </section>
</template>