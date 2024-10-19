<script setup>
useSeoMeta({
  titleTemplate: "",
  title: "Articles",
});
</script>
<template>
  <section id="detail-article" class="py-6">
    <div class="container mx-auto px-10">
      <h1 class="text-4xl font-bold text-main mb-4">Judul Artikel Detail</h1>

      <div class="flex items-center justify-between text-sm text-gray-500 mb-6">
        <span class="italic"
          >Published on: <strong>12 Oktober 2024</strong></span
        >
        <span class="italic">By: <strong>Admin</strong></span>
      </div>

      <div class="mb-8">
        <img
          src="/img/article/2.jpg"
          alt="Gambar Utama Artikel"
          class="w-full h-auto object-cover max-h-[400px]"
        />
      </div>

      <article class="prose max-w-none text-justify font-normal text-sm">
        <p class="p-detail">
          PT Bina Jaya Perkasa Mandiri telah berkecimpung dalam dunia konstruksi
          dan pemasok scaffolding selama lebih dari 30 tahun. Kami berdedikasi
          untuk memberikan layanan berkualitas tinggi kepada seluruh pelanggan
          kami. Artikel ini akan membahas lebih lanjut tentang perjalanan
          perusahaan kami, inovasi yang terus kami lakukan, serta kontribusi
          kami terhadap pembangunan infrastruktur di Indonesia.
        </p>

        <p class="p-detail">
          Dalam tiga dekade terakhir, PT Bina Jaya Perkasa Mandiri telah bekerja
          sama dengan berbagai perusahaan besar dan pemerintah dalam pembangunan
          proyek-proyek infrastruktur, termasuk gedung perkantoran, perumahan,
          dan sarana pendidikan.
        </p>
      </article>

      <div class="mt-8">
        <NuxtLink to="/articles" class="bg-main text-white px-4 py-2">
          Kembali
        </NuxtLink>
      </div>
    </div>
  </section>
</template>