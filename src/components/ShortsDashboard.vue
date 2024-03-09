<template>
  <div class="grid grid-rows-1 grid-cols-1">
    <div class="w-full h-[100px] bg-white-500 flex items-center ">
      <img src="@/assets/logos/shorts_logo.svg" class="h-10" alt="YouTube Logo" />
      <span class="text-3xl font-bold ml-2"> Shorts</span>
    </div>

    <transition name="fade" mode="out-in">
      <div :key="showAllShorts" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 mt-4">
        <!-- Iterar sobre la lista de shorts (solo mostrar los primeros 7) -->
        <div v-for="(short, index) in displayedShorts" :key="index"
          class="box-content   h-[380.93px] w-full lg:w-[235.41px] sm:w-1/2 bg-gray-200 mb-5">
          <!-- Contenido del short -->
          <div v-if="short.youtubeId">
            <!-- Reproductor de YouTube -->
            <iframe class="w-full h-[380px]" :src="'https://www.youtube.com/embed/' + short.youtubeId"
              title="YouTube video player" frameborder="0" allowfullscreen></iframe>
          </div>
          <div v-else>
            <!-- Contenido estándar del short -->
            <img class="h-full w-full max-w-full rounded-lg" :src="short.imageUrl" alt="">
            <div class="flex flex-col mt-2">
              <p class="text-lg">{{ short.title }}</p>
              <p class="text-xs">{{ short.channelName }}</p>
              <p class="text-base">{{ short.views }} vistas</p>
              <!-- Otros detalles del short si es necesario -->
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Botones "Ver más" y "Ver menos" con diseño personalizado -->
    <div class="flex justify-center mt-4 border border-gray-300">
      <button @click="toggleShowAll('up')" v-if="!showAllShorts"
        class="flex border-b rounded-full px-32 hover:bg-gray-300 border-gray-200 px-4 py-2 bg-white text-black">
        Mostrar más
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <button @click="toggleShowAll('down')" v-else
        class="flex border-b rounded-full px-32 hover:bg-gray-300 border-gray-200 px-4 py-2 bg-white text-black">
        Mostrar menos
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="ml-2 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      shorts: [
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "ZBY2WWhO3u0",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "HpamFx3E-xw",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "qng7gk-D28E",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "1FUHII2XGVQ",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "6yrFLmbjMLs",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "ZBY2WWhO3u0",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "HpamFx3E-xw",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "qng7gk-D28E",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "1FUHII2XGVQ",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "6yrFLmbjMLs",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "ZBY2WWhO3u0",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "HpamFx3E-xw",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "qng7gk-D28E",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "1FUHII2XGVQ",
        },
        {
          title: "Título del Short 1",
          channelName: "Canal 1",
          views: 12345,
          imageUrl: "https://ejemplo.com/imagen1.jpg",
          youtubeId: "6yrFLmbjMLs",
        },
      ],
      maxShortsToShow: 7,
      showAllShorts: false,
    };
  },
  computed: {
    displayedShorts() {
      return this.showAllShorts ? this.shorts : this.shorts.slice(0, this.maxShortsToShow);
    },
  },
  methods: {
    toggleShowAll(scrollDirection) {
      // Cambiar el estado para mostrar o no todos los shorts
      this.showAllShorts = !this.showAllShorts;

      // Ajustar la posición de la página
      if (scrollDirection === 'up') {
        window.scrollTo(0, document.body.scrollHeight); // Scroll hacia arriba
      } else if (scrollDirection === 'down') {
        window.scrollTo(0, document.body.scrollHeight); // Scroll hacia abajo
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>