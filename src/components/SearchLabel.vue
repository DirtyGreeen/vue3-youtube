<template>
  <form class="flex items-center max-w-[630px] mx-auto ">
    <!-- Columna izquierda para el input -->
    <div :class="{ 'w-[570px]': Buscar, 'w-[550px]': !Buscar, 'ml-2': !Buscar, 'ml-0': Buscar, }"
      class="relative flex-shrink-0 right-0">
      <div v-if="Buscar" class="absolute inset-y-0 flex items-center pl-2 pointer-events-none">
        <img src="@/assets/logos/search_logo.svg" class="h-5 w-10" alt="Buscar" />
      </div>
      <div class="flex justify-between ">
        <input type="text" id="voice-search" @focus="handleFocus" @blur="handleBlur"
          :class="{ 'pl-4': !Buscar, 'pl-12': Buscar }"
          class=" lg:flex hidden bg-white-50 max-w-[630px] border p-2 pt-1 border-gray-300 text-black-800 text-lg rounded-full rounded-r-none w-full focus:border-blue-800 focus:shadow-sm focus:outline-none left-0 right-0"
          placeholder="Buscar" required />
        <button
          class="bg-gray-100 text-white max-h-11 mx-auto my-auto border border-gray-300 p-2 pl-4 pr-4 rounded-r-full  hover:bg-gray-300 ">
          <img src="@/assets/logos/search_logo.svg" class="h-5 w-10" alt="Buscar" />
        </button>
      </div>



    </div>

    <!-- Columna derecha para el botón de búsqueda por voz -->
    <div class="flex-shrink-0">
      <button type="button"
        class="   py-2 px-2 ms-2     bg-gray-200 rounded-full border border-white-700 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <img src="@/assets/logos/microphone_logo.svg" class="h-4" alt="Busqueda por voz" />
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      Buscar: false,
    };
  },
  methods: {
    handleFocus() {
      this.Buscar = true;
    },
    handleBlur() {
      this.Buscar = false;
    },
  },
};
</script>