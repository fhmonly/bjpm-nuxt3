<script setup>
useSeoMeta({
  title: "Contact",
});
const { staticData } = useStatic();
const { isDesktop } = useDevice()
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
  const gRecaptcha = document.getElementById("g-recaptcha");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (!isCaptchaValid()) return
    const formData = new FormData(form)
    const fullname = encodeURIComponent(`> Nama : ${formData.get("firstName").trim()} ${formData.get("lastName").trim()}`) + '%0A'
    const email = encodeURIComponent(`> Email : ${formData.get("email").trim()}`) + '%0A'
    const phone = encodeURIComponent(`> No.HP : ${formData.get("phone").trim()}`) + '%0A%0A'
    const msg = encodeURIComponent(`*Pesan* : ${formData.get("msg").trim()}`)
    grecaptcha.reset(gRecaptcha);
    window.open(
      `https://${isDesktop ? 'web.whatsapp.com' : 'api.whatsapp.com'}/send/?phone=${staticData.value?.data?.contact_wa}&text=` +
      fullname + email + phone + msg,
      "_blank"
    )
  });
  function isCaptchaValid() {
    const response = grecaptcha.getResponse();
    return (response.length === 0) ? false : true
  }
});
</script>
<style scoped>
main#contact {
  background-image: linear-gradient(#428D3D79, #428D3D79), url('/img/Video Background.jpg');
}
</style>
<template>
  <main id="contact" class="backdrop-brightness-75 px-4 tablet:px-10">
    <div class="flex items-center justify-center bg-center bg-cover">
      <div class="text-center text-white">
        <h1 class="pb-2 my-4 text-4xl font-bold capitalize border-b-4 border-white w-fit" data-aos="fade-up">
          {{ staticData.data.contact_hero_title }}
        </h1>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-8 my-8 md:grid-cols-2">
      <div class="p-8 bg-white shadow-lg" data-aos="fade-up">
        <div class="flex items-center mb-4">
          <div>
            <NuxtImg :placeholder="[50, 25, 75, 5]" src="/img/logo/logo-bjpm.png" class="pb-4 w-[100px]" width="100"
              format="webp" alt="logo bjpm" />
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
              <span class="text-xs font-normal">Jl Gunung Sari No.5H RT 02/RW 07 Kel.Sawunggaling
                Kec.Wonokromo Surabaya</span>
              <br class="mb-2" />
              <strong class="text-xs font-semibold mt-[8px]">Email</strong>
              <br /><span class="text-xs font-normal">bjpmsby@gmail.com</span>
              <br class="mb-2" />
              <strong class="text-xs font-semibold mt-[8px]">No Whatsapp</strong>
              <br /><span class="text-xs font-normal">+628123066391</span>
            </p>
            <hr class="border-main border-[1px] mb-3" />
            <p class="mb-3 text-sm">
              <strong>Workshop</strong><br />
              <span class="text-xs font-normal">Jl Raya Jetis Parengan Ds.Jetis Kec.Parengan Mojokerto</span>
              <br class="mb-2" />
              <strong class="text-xs font-semibold mt-[8px]">Email</strong>
              <br /><span class="text-xs font-normal">bjpmmjkt@gmail.com</span>
              <br class="mb-2" />
              <strong class="text-xs font-semibold mt-[8px]">No Whatsapp</strong>
              <br /><span class="text-xs font-normal">+628123066391</span>
            </p>
          </div>
          <div class="w-full pl-0 text-gray-600 md:w-1/2 md:pl-4">
            <p class="mt-0 mb-3 text-sm md:mt-10">
              <strong>Kantor Cabang</strong><br />
              <span class="text-xs font-normal">Jl Layur No.36 RT 06/07 Kel.Dadapsari Kec.Semarang Utara
                <br />
                Semarang</span>
              <br class="mb-2" />
              <strong class="text-xs font-semibold mt-[8px]">Email</strong><br /><span
                class="text-xs font-normal">bjpmsemarang36@gmail.com</span>
              <br class="mb-2" />
              <strong class="text-xs font-semibold mt-[8px]">No Whatsapp</strong>
              <br /><span class="text-xs font-normal">+6281391436231</span>
              <br class="mb-3" />
            </p>
            <hr class="border-main border-[1px] mb-3" />
            <p class="mb-3 text-sm">
              <strong>Workshop</strong><br />
              <span class="text-xs font-normal">Jl Raya Semarang - Kendal Ds.Sumberejo Kec.Kaliwungu
                Kab.Kendal (Sebelah Timur Terowongan Sumberejo)</span>
              <br class="mb-2" />
              <strong class="text-xs font-semibold mt-[8px]">Email</strong><br /><span
                class="text-xs font-normal">bjpmkdl@gmail.com</span>
              <br class="mb-2" />
              <strong class="text-xs font-semibold mt-[8px]">No Whatsapp</strong>
              <br /><span class="text-xs font-normal">+6281391436231</span>
              <br class="mb-3" />
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1978.709403682471!2d112.7227658736047!3d-7.306756627140857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTgnMjMuNyJTIDExMsKwNDMnMjMuNiJF!5e0!3m2!1sen!2sid!4v1730530147453!5m2!1sen!2sid"
            width="600" height="450" allowfullscreen="" loading="lazy" class="w-full grow border-none"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div class="p-8 bg-white shadow-lg" data-aos="fade-down">
        <h2 class="mb-4 text-xl font-bold text-main">Hubungi Kami</h2>
        <p class="mb-4 text-gray-600"></p>
        <form class="text-sm" id="contact-us" @submit.prevent="">
          <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
            <input class="p-2 border" placeholder="Nama Awal" type="text" required name="firstName" />
            <input class="p-2 border" placeholder="Nama Akhir" type="text" required name="lastName" />
          </div>
          <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
            <input class="p-2 border" placeholder="Email" type="email" required name="email" />
            <input class="p-2 border" placeholder="No Telepon" type="tel" required name="phone" />
          </div>
          <div class="mb-4">
            <textarea class="border p-2 w-full h-[300px] resize-none" placeholder="Kirim Pesan" required
              name="msg"></textarea>
          </div>

          <div class="">
            <div class="g-recaptcha" id="g-recaptcha" :data-sitekey="config.public.googleCaptchaKeyPublic"></div>
          </div>

          <button class="px-4 py-2 mt-4 text-white bg-main" type="submit">
            Kirim
          </button>
        </form>
      </div>
    </div>
  </main>
</template>