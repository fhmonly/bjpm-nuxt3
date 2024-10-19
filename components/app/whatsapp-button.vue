<script setup>
function buttonClick() {
    console.log("anjai")
    const waMenu = document.getElementById('wa-menu');
    waMenu.classList.contains("hidden") ? waMenu.classList.remove("hidden") : waMenu.classList.add("hidden")
};
</script>
<template>
    <div id="whatsapp-button">
        <button id="wa-button" class="py-5 text-white rounded-full shadow-lg bg-main px-7 pulse-hover"
            @click="buttonClick()">
            <IconBiWhatsapp width="25px" height="25px" />
        </button>

        <div id="wa-menu" class="hidden">
            <a href='https://wa.me/6289509512660?text=Hello%20CS' target="_blank"
                class="text-xs font-semibold menu-button">
                Hubungi Customer Service
            </a>
            <a href='https://wa.me/6289509512660?text=Hello%20Owner' target="_blank"
                class="text-xs font-semibold menu-button">
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

#wa-menu:not(.hidden) {
    display: flex;
}

#wa-menu {
    flex-direction: column;
    margin-top: 5px;
}

.menu-button {
    background-color: white;
    border: 1px solid #438D3D;
    color: #438D3D;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin: 5px 0;

}
</style>