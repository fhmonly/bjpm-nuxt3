<script setup>
const { thumbnail } = defineProps({
  thumbnail: {
    required: true,
    type: String,
  },
  url: {
    required: true,
    type: String,
  },
});
function playVid(event) {
  const thumbnail = event.target.closest(".thumbnail");
  console.log(thumbnail.getAttribute("target"));
  const video = document.querySelector(thumbnail.getAttribute("target"));

  if (video) {
    thumbnail.classList.add("hidden");
    video.classList.remove("opacity-0");
    video.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  }
}
const id = `ytp-${Date.now()}`;
</script>
<template>
  <div class="aspect-[1.59/1] w-full max-h-[450px] relative m-auto" data-aos="zoom-in">
    <iframe :id="id" class="w-full h-full opacity-0" :src="`${url}?enablejsapi=1&si=IkSLYARZ3IC_2RlJ`"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div class="absolute top-0 bottom-0 left-0 right-0 thumbnail" :target="`#${id}`" @click="playVid">
      <NuxtImg :src="thumbnail" format="webp" alt="Thumbnail video" class="object-cover w-full h-full" />
      <div class="absolute top-0 bottom-0 left-0 right-0 backdrop-brightness-75">
        <a id="play-video" class="video-play-button" href="javascript:void(0)">
          <span></span>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.video-play-button {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: content-box;
  display: block;
  width: 32px;
  height: 44px;
  /* background: #fa183d; */
  border-radius: 50%;
  padding: 18px 20px 18px 28px;
}

.video-play-button:before {
  content: "";
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 80px;
  height: 80px;
  background: rgba(161, 198, 158, 0.7);
  border-radius: 50%;
  animation: pulse-border 1500ms ease-out infinite;
}

.video-play-button:after {
  content: "";
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 80px;
  height: 80px;
  background: var(--main-color);
  border-radius: 50%;
  transition: all 200ms;
}

.video-play-button:hover:after {
  opacity: 0.8;
}

/* .video-play-button img {
    position: relative;
    z-index: 3;
    max-width: 100%;
    width: auto;
    height: auto;
} */

.video-play-button span {
  display: block;
  position: relative;
  z-index: 3;
  width: 0;
  height: 0;
  border-left: 32px solid #fff;
  border-top: 22px solid transparent;
  border-bottom: 22px solid transparent;
}

@keyframes pulse-border {
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
}
</style>