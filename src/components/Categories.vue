<template>
  <div class="youtube-scroll-touch">


    <div class="overflow-x-auto p-2 lg:w-[1760px] ">
      <div class="flex justify-between items-center x-[800px]">
        <button @click="scrollIzquierda" type="button" class="button m-2 z-30">
          <img src="@/assets/logos/left_logo.svg" class="h-11 w-8" alt="Flecha Izquierda" />
        </button>
        <!-- Botones de categorías -->
        <div class="flex space-x-2 overflow-hidden " ref="botones">
          <button v-for="(categoria, index) in categorias" :key="index" @click="seleccionarCategoria(categoria)"
            class="bg-gray-200 text-black   youtube-font-p     text-sm py-[4px] px-2 pb-1.5 pt-1.5 rounded hover:bg-gray-300">
            {{ categoria }}
          </button>
        </div>

        <!-- Botón de flecha derecha -->
        <button @click="scrollDerecha" type="button" class="button">
          <img src="@/assets/logos/right_logo.svg" alt="Flecha Derecha" class="h-11 " />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorias: ['Videojuegos', 'Peliculas', 'Anime', 'Musica', 'Peliculas', 'Anime', 'Accidentes', 'Peliculas', 'Anime', 'Musica', 'Peliculas', 'Anime', 'Anime', 'Accidentes', 'Peliculas', 'Anime', 'Musica', 'Peliculas', 'Anime', 'Anime', 'Accidentes', 'Peliculas', 'Anime', 'Musica', 'Peliculas', 'Anime', 'Accidentes', 'Noticias', 'Nacional', 'Panamá', 'Spoilers', 'Noticias', 'Nacional', 'Panamá', 'Colombia', 'Argentina', 'Chile', 'Perú', 'China', 'EEUU', 'Corea', 'Ecuador', 'Brasil'],
      categoriaSeleccionada: null,
    };
  },
  methods: {
    scrollIzquierda() {
      this.$refs.botones.scrollLeft -= 200; // Ajusta según sea necesario
    },
    scrollDerecha() {
      this.$refs.botones.scrollLeft += 200; // Ajusta según sea necesario
    },
    seleccionarCategoria(categoria) {
      this.categoriaSeleccionada = categoria;
      // Puedes hacer lo que necesites con la categoría seleccionada, como pasarla a otro componente.
      // Por ejemplo, puedes emitir un evento para que otro componente lo capture.
      this.$emit('categoriaSeleccionada', categoria);
      console.log(this.categoriaSeleccionada);
    },
  },
};
</script>

<style scoped>
.youtube-scroll-touch {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  /* Agrega el desplazamiento táctil para WebKit (iOS, etc.) */
}

.youtube-font-p {
  font-family: "Open Sans", sans-serif;
  color: #4F4D4D;
  font-weight: 580;
  font-size: 13px;
}
</style>