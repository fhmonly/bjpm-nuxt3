<script setup>
useSeoMeta({
  title: "Contact",
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
          <div class="flex flex-wrap justify-between mt-6">
            <!-- Jawa Timur Section -->
            <div class="w-full pr-4 text-gray-600 md:w-1/2">
              <p class="mb-3 text-lg font-semibold text-main">Jawa Timur</p>
              <div class="mb-3 text-sm">
                <div><strong>Kantor pusat</strong></div>
                <span>
                  {{
                    "Jl Gunung Sari No.5H RT 02/RW 07 Kel.Sawunggaling Kec.Wonokromo Surabaya"
                  }}
                </span>
              </div>
              <div class="mb-3 text-sm">
                <div><strong>Workshop</strong></div>
                <span>
                  {{ "Jl Raya Jetis Parengan Ds.Jetis Kec.Parengan Mojokerto" }}
                </span>
              </div>
              <div class="mb-3 text-sm">
                <div><strong>No Whatsapp</strong></div>
                <span>{{ data.data.contact_phone }}</span>
              </div>
              <div class="mb-3 text-sm">
                <div><strong>Email</strong></div>
                <p>Surabaya - bjpmsby@gmail.com</p>
                <p>Mojokerto - bjpmmjkt@gmail.com</p>
              </div>
            </div>
            <!-- Jawa Tengah Section -->
            <div class="w-full pl-0 text-gray-600 md:w-1/2 md:pl-4">
              <p class="mb-3 text-lg font-semibold text-main">Jawa Tengah</p>
              <div class="mb-3 text-sm">
                <div><strong>Kantor Cabang</strong></div>
                <p>
                  Jl Layur No.36 RT 06/07 Kel.Dadapsari Kec.Semarang Utara
                  Semarang
                </p>
              </div>
              <div class="mb-3 text-sm">
                <div><strong>Workshop</strong></div>
                <p>
                  Jl Raya Semarang - Kendal Ds.Sumberejo Kec.Kaliwungu
                  Kab.Kendal <br />
                  (Sebelah Timur Terowongan Sumberejo)
                </p>
              </div>
              <div class="mb-3 text-sm">
                <div><strong>No Whatsapp</strong></div>
                <p>+6281391436231</p>
              </div>
              <div class="mb-3 text-sm">
                <div><strong>Email</strong></div>
                <p>Semarang - bjpmsemarang36@gmail.com</p>
                <p>Kendal - bjpmkdl@gmail.com</p>
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