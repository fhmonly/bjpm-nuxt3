<template>
  <section
    id="service"
    class="flex flex-col px-5 mx-auto mb-10 tablet:px-10 bg-gray2"
  >
    <h1
      class="text-[32px] text-center text-main font-bold pt-4 px-4 pb-4"
      data-aos="fade-up"
    >
      Layanan
    </h1>
    <div class="flex flex-wrap justify-center gap-5 py-5 mb-4">
      <HomeServicesCard
        image="/img/service/scaffolding.jpg"
        title="Scaffolding"
        url="/services"
        class="grow w-[20%] min-w-[250px] max-w-[250px]"
      />
      <HomeServicesCard
        image="/img/service/Rent.jpg"
        title="Rent"
        url="/services"
        class="grow w-[20%] min-w-[250px] max-w-[250px]"
      />
      <HomeServicesCard
        image="/img/service/SteelConst.jpeg"
        title="Steel Constructor"
        url="/services"
        class="grow w-[20%] min-w-[250px] max-w-[250px]"
      />
      <HomeServicesCard
        image="/img/service/Supplier.jpg"
        title="Supplier"
        url="/services"
        class="grow w-[20%] min-w-[250px] max-w-[250px]"
      />
    </div>
    <NuxtLink
      to="/services"
      class="p-3 py-2 mx-auto text-sm text-white border-2 border-white bg-main hover:text-main hover:bg-white hover:border-main"
    >
      Selanjutnya</NuxtLink
    >
  </section>
</template>