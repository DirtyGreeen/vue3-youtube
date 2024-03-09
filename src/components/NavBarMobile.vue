<template>
  <div
    class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 sm:hidden">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      <button type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <span class="text-sm text-gray-500 dark:text-gray-400  dark:group-hover:text-blue-500">Principal</span>
      </button>
      <button type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <img src="@/assets/logos/shorts_logo.svg" class="h-6" alt="YouTube Logo" />

        <span class="text-sm text-gray-500 dark:text-gray-400  dark:group-hover:text-blue-500">Shorts</span>
      </button>
      <button type="button" @mouseover="handleHover" @mouseleave="handleLeave" :class="{ 'hovered': isHovered }"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <img :src="isHovered ? getHoveredImageUrl() : getDefaultImageUrl()" class="h-6" alt="YouTube Logo" />
        <span class="text-sm text-gray-500 dark:text-gray-400 dark:group-hover:text-blue-500">Suscripciones</span>
      </button>

      <button type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <img src="@/assets/logos/tu_logo.svg" class="h-6" alt="YouTube Logo" />
        <span class="text-sm text-gray-500 dark:text-gray-400 dark:group-hover:text-blue-500">Biblioteca</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
      originalLogoSrc: "@/assets/logos/suscrip_logo.svg",
      activeTab: 'home', // Puedes establecer la pestaña activa por defecto
    };
  },
  methods: {
    navigateTo(tab) {
      this.activeTab = tab;
      // Aquí puedes manejar la lógica de navegación para cada pestaña
    },
    handleHover() {
      this.isHovered = true;
      console.log(this.isHovered);
    },
    handleLeave() {
      this.isHovered = false;
      console.log(this.isHovered);
    },
    getHoveredImageUrl() {
      // Retorna la URL del nuevo SVG cuando isHovered es true
      return 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" /></svg>';
    },
    getDefaultImageUrl() {
      // Retorna la URL del SVG por defecto
      return 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" /></svg>';
    },
  },
};
</script>

<style scoped>
/* Agrega estilos específicos si es necesario */
</style>