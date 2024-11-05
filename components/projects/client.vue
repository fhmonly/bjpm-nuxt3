<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(var(--width) - var(--width) * 2));
    }
}

.showcase {
    --logo-height: 8vw;
    --width: 100%;
    width: var(--width)
}

.showcase>.wrapper {
    display: flex;
    animation: scroll 5s linear infinite;
}

.showcase:hover>.wrapper {
    animation-play-state: paused;
}

.showcase>.wrapper>.logos {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    width: 100vw;
    justify-content: center;
    width: var(--width);
}

.client-logo {
    height: var(--logo-height);
    width: 100%;
    aspect-ratio: 2/1;
    object-fit: contain;
    filter: grayscale(100%);
    transition: filter 500ms ease;
}

.client-logo:hover {
    filter: grayscale(0%)
}
</style>
<template>
    <section id="section2" class="w-full">
        <div class="w-full flex-row pt-4 text-center font-bold text-[30px] justify-center text-[#438d3d]">
            Klien Kami
        </div>
        <div class="my-10 overflow-hidden showcase">
            <div class="wrapper">
                <div class="logos">
                    <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" src="/img/client/pp.png"
                        alt="Client logo 1" class="client-logo" sizes="20vw" />
                    <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" src="/img/client/waskita.png"
                        alt="Client logo 2" class="client-logo" sizes="20vw" />
                    <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" src="/img/client/logo-jakon.webp"
                        alt="Client logo 3" class="client-logo" sizes="20vw" />
                    <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" src="/img/client/Adhi_Karya.svg.png"
                        alt="Client logo 4" class="client-logo" sizes="20vw" />
                    <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" src="/img/client/65_takenaka-800x356.jpg"
                        alt="Client logo 5" class="client-logo" sizes="20vw" />
                </div>
                <div class="logos">
                    <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" src="/img/client/pp.png"
                        alt="Client logo 1" class="client-logo" sizes="20vw" />
                    <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" src="/img/client/waskita.png"
                        alt="Client logo 2" class="client-logo" sizes="20vw" />
                    <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" src="/img/client/logo-jakon.webp"
                        alt="Client logo 3" class="client-logo" sizes="20vw" />
                    <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" src="/img/client/Adhi_Karya.svg.png"
                        alt="Client logo 4" class="client-logo" sizes="20vw" />
                    <LazyNuxtImg :placeholder="[50, 25, 75, 5]" format="webp" src="/img/client/65_takenaka-800x356.jpg"
                        alt="Client logo 5" class="client-logo" sizes="20vw" />
                </div>
            </div>
        </div>
        <div class="w-full gap-4 grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-4">
            <!-- Column 1 -->
            <div class=" w-full text-[10px] p-5 bg-main text-white">
                <ul class="company-list-column-1">
                    <li>CV. HIKMAH KLATEN</li>
                    <li>PT. INDRAKON KARYA</li>
                    <li>PT. KINTAMARA MANDIRI</li>
                    <li>PT. ARCASA DILAGA</li>
                    <li>PT. CAHAYA TEHNIK</li>
                    <li>PT. JAPAKON</li>
                    <li>PT. LAKUTAN REJEKI</li>
                    <li>PT. MEKATINDO</li>
                    <li>PT. PAKSA PESINDO</li>
                    <li>PT. MITRA GEM</li>
                    <li>PT. EMIRATA TALENTAMA</li>
                    <li>PT. GRYA KREASI</li>
                    <li>PT. TUNAS PRASINDO</li>
                    <li>PT. PURNADIPO PENETEK</li>
                    <li>PT. ADHIDAYA CIPTA</li>
                    <li>PT. BINAKREASI</li>
                    <li>PT. BAKANINDO</li>
                    <li>PT. SAIYOGI</li>
                    <li>PT. MAITRA</li>
                    <li>PT. SETIAJAYA</li>
                    <li>PT. MITRA AMI</li>
                    <li>PT. SULUK EKAJATI</li>
                    <li>PT. ENERGI TERBAKAT</li>
                    <li>PT. LENTERA</li>
                    <li>PT. LINDIWAH</li>
                    <li>PT. ERA MASA</li>
                    <li>PT. PRISMA</li>
                    <li>PT. SENTRA BARU RAYA</li>
                    <li>PT. VIERA INDAH</li>
                    <li>PT. MITRA JAYA</li>
                    <li>PT. SAHARA INDAH</li>
                    <li>PT. BINTARA</li>
                    <li>PT. DHARMA JAYA</li>
                    <li>PT. SEMBAWANG MANDIRI</li>
                    <li>PT. WIRATA INDAH</li>
                    <li>PT. WIRATAMA ANINDIKA</li>
                    <li>PT. RIZKI SAMAINDO</li>
                    <li>CV. BONANG PRIMA</li>
                    <li>PT. WALIA CITA</li>
                    <li>PT. WIKA KONSTRUKSI</li>
                    <li>PT. SMKN1</li>
                    <li>PT. LANGGENG</li>
                    <li>PT. NUGRAHA PARK</li>
                    <li>PT. DIAN WAHYU</li>
                    <li>PT. CIPTA ASRI</li>
                    <li>PT. MAJU GEMILANG</li>
                    <li>PT. ARTHURINDO</li>
                    <li>PT. MITRA SUARA</li>
                    <li>PT. SUMA WIRAS</li>
                    <li>PT. NARA GADING</li>
                    <li>PT. MITRA KARYA</li>
                </ul>
            </div>

            <!-- Column 2 -->
            <div class=" w-full text-[10px] p-5 bg-main text-white">
                <ul class="company-list-column-2">
                    <li>PT. TUNAS MURNI</li>
                    <li>PT. KARYA JASA</li>
                    <li>PT. SETRIA RIMBA</li>
                    <li>PT. PUTRA PERKASA</li>
                    <li>PT. CIPTA JAYA</li>
                    <li>PT. MUTIARA KARMA</li>
                    <li>PT. ILHAM JAYA</li>
                    <li>PT. BERKARYA PRIMA</li>
                    <li>PT. USAHA TIGA</li>
                    <li>PT. MUTIARA PRIMA</li>
                    <li>PT. SETIA RESAMITRA</li>
                    <li>PT. BUILDING MAINTENANCE</li>
                    <li>THAMRIN CENGESI</li>
                    <li>PT. PERMATA INDAH</li>
                    <li>CV. INTANRA ELOK</li>
                    <li>PT. CATUR BANGUN</li>
                    <li>PT. SEMAR INDONESIA</li>
                    <li>PT. TITRA MULTI</li>
                    <li>PT. BARUNA MELODI</li>
                    <li>PT. CINTA MANDIRI</li>
                    <li>PT. SASANA ANGRINA</li>
                    <li>PT. HUTAMA KARYA</li>
                    <li>PT. MURIDA BUMI</li>
                    <li>PT. SUWITA BUMI</li>
                    <li>PT. INDAH PAINT</li>
                    <li>PT. HUA HING STEEL</li>
                    <li>PT. PUTRA</li>
                    <li>PT. ADIPUTRA</li>
                    <li>PT. METRON FKA</li>
                    <li>PT. URSARA</li>
                    <li>PT. ECOISE MULTI</li>
                    <li>PT. PERKASA</li>
                    <li>PT. ARTHUR</li>
                    <li>PT. INDAH JAYA</li>
                    <li>PT. AGUNG MAKMUR</li>
                    <li>PT. UTAMA BHAKTI</li>
                    <li>PT. SUMBA JAYA</li>
                    <li>PT. WAJI</li>
                    <li>PT. SAHIDA</li>
                    <li>PT. ANDINARI</li>
                    <li>PT. PINASTHA</li>
                    <li>PT. TAKENAKA</li>
                    <li>PT. ADHI</li>
                    <li>PT. MAJU MAPAN BANGUNINDO</li>
                    <li>PT. BANGUN NAGARI SENTOSA</li>
                    <li>PT. TRIMAKARYA MANDIRI</li>
                    <li>PT. TAMARA CIPTA</li>
                    <li>PT. DAMAI KONSTRUKSI</li>
                    <li>PT. PASOMI KONSTRUKSI</li>
                    <li>PT. PANDAWA PUTRA MAS GRO</li>
                </ul>
            </div>

            <!-- Column 3 -->
            <div class=" w-full text-[10px] p-5 bg-main text-white">
                <ul class="company-list-column-3">
                    <li>PT. IRWANA PRIMA UTAMA</li>
                    <li>PT. PANDERANG CAKA MUTI</li>
                    <li>PT. WIJAYA</li>
                    <li>PT. SENTOSA WAHANA BARDI</li>
                    <li>PT. PANCATUNGGAL MANDIRI</li>
                    <li>PT. CITRA ANUGERAH KARYA</li>
                    <li>PT. PANCASONA</li>
                    <li>PT. CANDRA SATYA UTAMA</li>
                    <li>PT. DHIKSA YUNINDRA</li>
                    <li>PT. RESKAMITRA</li>
                    <li>PT. IRMAMA PRIMA</li>
                    <li>PT. PIKRI JAYA</li>
                    <li>PT. TEJAKON</li>
                    <li>PT. PURWOKERTO</li>
                    <li>PT. PUTRI ABADI</li>
                    <li>PT. KARYA ADIGUNA</li>
                    <li>PT. PERKASA MULTI JAYA</li>
                    <li>PT. TANJUNG SENTOSA</li>
                    <li>PT. INDAH PERKASA</li>
                    <li>PT. JAYA KONSTRUKSI</li>
                    <li>PT. CIPTA KARYA</li>
                    <li>PT. PEMBANGUNAN</li>
                    <li>PT. ADHI KARYA</li>
                    <li>PT. WASKITA KARYA</li>
                    <li>PT. PELITA</li>
                    <li>PT. LANGIT BIRU</li>
                    <li>PT. KARYA ABADI</li>
                    <li>PT. PUTRA LANGGENG</li>
                    <li>PT. PERTIWI</li>
                    <li>PT. PERMAI INDAH</li>
                    <li>PT. INDOKOM</li>
                    <li>PT. MUJUR SENTOSA</li>
                    <li>PT. NUSANTARA</li>
                    <li>PT. KARYA RAYA</li>
                    <li>PT. TIRTAMAS</li>
                    <li>PT. MITRA PERKASA</li>
                    <li>PT. ARTHA</li>
                    <li>PT. INTI PRIMA</li>
                    <li>PT. INTAN JAYA</li>
                    <li>PT. HARMONI</li>
                    <li>PT. SEMEN ANDESITE</li>
                    <li>PT. MEKAR</li>
                    <li>PT. MAKMUR</li>
                    <li>PT. SATRIA</li>
                    <li>PT. SEJAHTERA</li>
                    <li>PT. CIPTA SEJAHTERA</li>
                    <li>PT. BINA USAHA</li>
                    <li>PT. AMARTA</li>
                    <li>PT. PERKASA MANDIRI</li>
                </ul>
            </div>

            <!-- Column 4 -->
            <div class=" w-full text-[10px] p-5 bg-main text-white">
                <ul class="company-list-column-4">
                    <li>PT. GALANG BUMI</li>
                    <li>PT. SATYA PERSADA</li>
                    <li>PT. PUTRA JAYA</li>
                    <li>PT. BERKAT UTAMA</li>
                    <li>PT. INDAH CITRA</li>
                    <li>PT. CITRA INDAH</li>
                    <li>PT. SUKSES MANDIRI</li>
                    <li>PT. ARTHAMAS</li>
                    <li>PT. MULTI KARYA</li>
                    <li>PT. INDAH ALAM</li>
                    <li>PT. INDAH MANDIRI</li>
                    <li>PT. KUSUMA JAYA</li>
                    <li>PT. TIRTA ALAM</li>
                    <li>PT. MITRA ABADI</li>
                    <li>PT. PERMATA INDAH</li>
                    <li>PT. ANUGRAH JAYA</li>
                    <li>PT. SUMBER JAYA</li>
                    <li>PT. ANUGRAH MUTIARA</li>
                    <li>PT. PUTRA SEJAHTERA</li>
                    <li>PT. PRIMA UTAMA</li>
                    <li>PT. CIPTA INTI</li>
                    <li>PT. SATRIA MEGA</li>
                    <li>PT. PUTRA ABADI</li>
                    <li>PT. MUTIARA SEJAHTERA</li>
                    <li>PT. BUMI NUSANTARA</li>
                    <li>PT. KARYA BERSAMA</li>
                    <li>PT. BINA JAYA</li>
                    <li>PT. NUSANTARA PRATAMA</li>
                    <li>PT. KARYA SEJAHTERA</li>
                    <li>PT. MANDIRI JAYA</li>
                    <li>PT. ABADI</li>
                    <li>PT. MULTI PRIMA</li>
                    <li>PT. INDAH MEGA</li>
                    <li>PT. CIPTA KARYA SEJAHTERA</li>
                    <li>PT. PUTRA JAYA PRATAMA</li>
                    <li>PT. GUNA SEJAHTERA</li>
                    <li>PT. MAJU ABADI</li>
                    <li>PT. NUSA INDAH</li>
                    <li>PT. GALANG PERSADA</li>
                    <li>PT. SATRIA MANDIRI</li>
                    <li>PT. MULTI SEJAHTERA</li>
                    <li>PT. CITRA INDAH PERSADA</li>
                    <li>PT. MEGA INDAH</li>
                    <li>PT. PERSADA JAYA</li>
                    <li>PT. CIPTA PUTRA</li>
                    <li>PT. MEGA PRIMA</li>
                    <li>PT. MEGA CIPTA</li>
                    <li>PT. CIPTA INDAH</li>
                    <li>PT. GRIDER</li>
                </ul>
            </div>
        </div>
    </section>
</template>