<template>
  <section id="article" class="p-5 text-white tablet:p-10 bg-main">
    <h1 class="text-[32px] mb-4 font-bold">Artikel</h1>
    <div class="flex flex-wrap justify-center gap-3">
      <HomeArticlesCard
        image="/img/Blank.jpg"
        title="Penyedia Layanan Terbaik"
        date="Selasa, 12 Oktober 2023"
        url="/articles/detail"
        class="grow w-[20%]"
      />
      <HomeArticlesCard
        image="/img/Blank.jpg"
        title="Layanan Cepat dan Tepat"
        date="Rabu, 13 Oktober 2023"
        url="/articles/detail"
        class="grow w-[20%]"
      />
      <HomeArticlesCard
        image="/img/Blank.jpg"
        title="Proyek Terbaru"
        date="Kamis, 14 Oktober 2023"
        url="/articles/detail"
        class="grow w-[20%]"
      />
      <HomeArticlesCard
        image="/img/Blank.jpg"
        title="Kualitas Terjamin"
        date="Jumat, 15 Oktober 2023"
        url="/articles/detail"
        class="grow w-[20%]"
      />
    </div>
  </section>
</template>