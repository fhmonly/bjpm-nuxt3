<template>
    <section id="project" class="flex flex-col mb-5">
        <h1 class="text-[32px] text-center text-white font-bold p-4 sm:mb-6 sm:p-10">Proyek </h1>
        <div class="flex flex-wrap justify-center gap-3 p-5 mb-1 md:gap-5 xl:justify-between project-card-container sm:p-10">
            <HomeProjectsCard image="/img/project/1.jpg" title="Proyek 1" url="/" />
            <HomeProjectsCard image="/img/project/2.jpg" title="Proyek 2" url="/" />
            <HomeProjectsCard image="/img/project/3.jpg" title="Proyek 3" url="/" />
        </div>
        <NuxtLink to="/projects"
            class="p-3 py-2 mx-auto text-sm text-white border-2 border-white bg-main hover:text-main hover:bg-white hover:border-main">
            Selengkapnya
        </NuxtLink>
    </section>
</template>
<style>
#project h1 {
    background: linear-gradient(
        90deg, #438d3d 0%, 
        rgba(161, 198, 158, 0.7) 50%, 
        rgba(208, 227, 207, 0.5) 75%,
        rgba(255, 255, 255, 0) 100%), 
        url(/img/project/Header.jpeg);
    background-position-y: 20%;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.5s ease-in-out;
}

#project h1:hover {
    background-position-y: 60%;
}
</style>