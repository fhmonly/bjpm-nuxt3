<script setup>
useSeoMeta({
  title: "Articles",
});
const config = useRuntimeConfig();
const { status, data, error, refresh } = await useFetch(
  `${config.public.apiPublic}/api/settings`,
  {
    pick: ["data"],
    key: "res-static-data",
    server: true,
  }
);
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
            class="pb-2 my-4 text-4xl font-bold border-b-4 border-white w-fit"
            data-aos="fade-up"
          >
            Kontak Kami
          </h1>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-8 px-10 my-8 md:grid-cols-2">
        <div class="p-8 bg-white shadow-lg" data-aos="fade-right">
          <div class="flex items-center mb-4">
            <div>
              <img src="/img/logo/logo-bjpm.png" class="pb-4 w-[100px]" />
              <p class="font-bold text-main">
                {{ data.data.contact_company_name }}
              </p>
              <p class="mt-2 text-sm italic font-normal">
                {{ data.data.contact_taglines }}
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <i class="text-3xl text-orange-500 fas fa-comments"></i>
            <div>
              <p class="mb-4 text-gray-600">Sosial Media</p>
              <div class="social-icons">
                <a
                  href="https://www.facebook.com/p/BJPM-Bina-Jaya-Perkasa-Mandiri-100070195721864/?locale=id_ID"
                  target="_blank"
                  class="social-icon"
                >
                  <i class="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/pt.bjpm/"
                  target="_blank"
                  class="social-icon"
                >
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="p-8 bg-white shadow-lg" data-aos="fade-left">
          <h2 class="mb-4 text-xl font-bold text-main">Hubungi Kami</h2>
          <p class="mb-4 text-gray-600"></p>
          <form method="POST" id="contact-us">
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
                class="w-full p-2 border resize-none"
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