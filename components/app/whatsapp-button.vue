<script setup>
const staticData = useStatic();
</script>
<template>
  <div id="whatsapp-button">
    <label
      for="wa-check"
      id="wa-button"
      class="py-5 text-white rounded-full shadow-lg bg-main px-7 pulse-hover"
    >
      <IconBiWhatsapp width="25px" height="25px" />
    </label>
    <input type="checkbox" id="wa-check" hidden />
    <div id="wa-menu">
      <a
        :href="`https://wa.me/${staticData?.contact_wa}?text=Hello%20CS`"
        target="_blank"
        class="text-xs font-semibold menu-button"
      >
        Hubungi Customer Service
      </a>
      <a
        :href="`https://wa.me/${
          staticData?.contact_wa_2 || staticData?.contact_wa
        }?text=Hello%20Owner`"
        target="_blank"
        class="text-xs font-semibold menu-button"
      >
        Hubungi Marketing
      </a>
    </div>
  </div>
</template>
<style scoped>
@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

.pulse-hover:hover {
  animation: pulse 0.6s infinite;
}

#whatsapp-button {
  position: fixed;
  right: 15px;
  bottom: 25px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#wa-menu {
  display: none;
  flex-direction: column;
  margin-top: 5px;
}

#wa-check:checked + #wa-menu {
  display: flex;
}

.menu-button {
  background-color: white;
  border: 1px solid #438d3d;
  color: #438d3d;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin: 5px 0;
}
</style>