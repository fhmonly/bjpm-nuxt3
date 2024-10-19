<script setup>
useSeoMeta({
  title: "Articles",
});
const config = useRuntimeConfig();
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
  const form = document.querySelector("form#contact-us");
  const gRecaptcha = grecaptcha.render(document.getElementById("g-recaptcha"), {
    sitekey: config.public.googleCaptchaKeyPublic,
  });
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    grecaptcha.reset(gRecaptcha);
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
      <div class="bg-cover bg-center flex items-center justify-center">
        <div class="text-center text-white">
          <h1
            class="text-4xl font-bold my-4 border-b-4 pb-2 w-fit border-white"
            data-aos="fade-up"
          >
            Kontak Kami
          </h1>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 px-10">
        <div class="bg-white p-8 shadow-lg" data-aos="fade-right">
          <div class="flex items-center mb-4">
            <div>
              <img src="/img/logo/logo-bjpm.png" class="pb-4 w-[100px]" />
              <p class="text-main font-bold">PT. BINA JAYA PERKASA MANDIRI</p>
              <p class="text-sm italic font-normal mt-2">
                “Supplier, Industries, Scaffolding, Beton Lift Steel
                Construction, Stone Crusher “
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <i class="fas fa-comments text-orange-500 text-3xl"></i>
            <div>
              <p class="text-gray-600 mb-4">Sosial Media</p>
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
        <div class="bg-white p-8 shadow-lg" data-aos="fade-left">
          <h2 class="text-xl text-main font-bold mb-4">Hubungi Kami</h2>
          <p class="text-gray-600 mb-4"></p>
          <form method="POST" id="contact-us">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                class="border p-2"
                placeholder="Nama Awal"
                type="text"
                required
              />
              <input
                class="border p-2"
                placeholder="Nama Akhir"
                type="text"
                required
              />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                class="border p-2"
                placeholder="Email"
                type="email"
                required
              />
              <input
                class="border p-2"
                placeholder="No Telepon"
                type="tel"
                required
              />
            </div>
            <div class="mb-4">
              <textarea
                class="border p-2 w-full resize-none"
                placeholder="Kirim Pesan"
                required
              ></textarea>
            </div>
            <div class="">
              <div class="g-recaptcha" id="g-recaptcha"></div>
            </div>

            <button class="bg-main text-white px-4 py-2 mt-4" type="submit">
              Kirim
            </button>
          </form>
        </div>
      </div>
    </main>
  </section>
</template>