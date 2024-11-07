import Swal from "sweetalert2"
export function useImageGalery() {
  useHead({
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
      },
    ],
  });
  function showImageGalery({ galeries = [], activeImageIndex = 0 }) {
    Swal.fire({
      showConfirmButton: false,
      didRender: () => {
        const swalHtml = Swal.getHtmlContainer();
        const galeriesHtml = galeries.map((galery, index) => {
          const isDescEmpty = galery?.description.trim().length <= 0
          const altImage = isDescEmpty ? `gambar ke-${index}` : `gambar ${galery.description}`
          return `
            <swiper-slide>
              <div class="m-auto h-full w-full flex items-center justify-center relative">
                <img src="${galery.image}" alt="${altImage}" class="m-auto w-auto h-auto portrait:w-full landscape:h-full object-contain"/>
                <div class="absolute flex m-auto text-white description portrait:w-full landscape:h-full">
                  <div class="w-full mt-auto bg-[#00000080] py-2 ${isDescEmpty ? 'hidden' : ''}">
                    ${galery?.description}
                  </div>  
                </div>
              </div>
            </swiper-slide>
          `;
        });
        const galeriesThumb = galeries.map((galery, index) => {
          return `
            <swiper-slide>
              <img src="${galery.image}"/>
            </swiper-slide>
          `;
        })
        swalHtml.innerHTML = `
          <div class="h-full w-full pt-[40px]">
            <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper" thumbs-swiper=".mySwiper2" space-between="10" navigation="true">
              ${galeriesHtml.join("")}
            </swiper-container>
              <swiper-container class="mySwiper2" space-between="10" slides-per-view="4" centered-slides="true" free-mode="true" watch-slides-progress="true">
              ${galeriesThumb.join("")}
            </swiper-container>
          </div>
          <style>
          div:where(.swal2-container){
            padding: 0;
            display: flex;
          }
          div:where(.swal2-container).swal2-center>.swal2-popup{
            place-self: normal;
          }
          div:where(.swal2-container) div:where(.swal2-popup){
            padding: 0;
          }
          div:where(.swal2-container) button:where(.swal2-close){
            position: absolute !important;
          }
          swiper-container {
            width: 100%;
            height: 300px;
            margin-left: auto;
            margin-right: auto;
          }
          swiper-slide {
            background-size: cover;
            background-position: center;
          }
          .mySwiper {
            height: 85%;
            width: 100%;
          }
          .mySwiper2 {
            height: 15%;
            box-sizing: border-box;
            padding: 10px 0;
          }
          .mySwiper2 swiper-slide {
            width: fit-content !important;
            height: 100%;
            opacity: 0.4;
          }
          .mySwiper2 .swiper-slide-thumb-active {
            opacity: 1;
          }
          swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          @media screen and (max-width: 520px) {
            swiper-container::part(button-next),
            swiper-container::part(button-prev) {
              display: none !important;
            }
          }
          </style>
         `;
      },
      didOpen: () => {
        const swalHtmlContainer = Swal.getHtmlContainer();
        const swiper = swalHtmlContainer.querySelector("swiper-container.mySwiper");
        const swiperSlides = swiper.querySelectorAll("swiper-slide");
        const slide0 = swiperSlides[activeImageIndex];
        swiper.swiper.slideTo(activeImageIndex)
        const image0 = slide0.querySelector("img");
        const desc0 = slide0.querySelector(".description");
        setAspectImage({
          imgElem: image0,
          descElem: desc0
        })
        image0.addEventListener("load", () => setAspectImage({
          imgElem: image0,
          descElem: desc0
        }))
        function setAspectImage({ imgElem, descElem }) {
          const imageWidth = imgElem.width;
          const imageHeight = imgElem.height;
          descElem.style.aspectRatio = `${imageWidth}/${imageHeight}`;

        }
        swiper.swiper.on("slideChange", (e) => {
          const activeIndex = e.activeIndex;
          const currentSlide = swiperSlides[activeIndex];
          const currentImage = currentSlide.querySelector("img");
          const description = currentSlide.querySelector(".description");
          setAspectImage({
            imgElem: currentImage,
            descElem: description
          })
        });
      },
      showCloseButton: true,
      width: "100vw",
      heightAuto: true,
      backdrop: true,
      background: "#000000d5",
      animation: false,
    });
  }
  return { showImageGalery }
}