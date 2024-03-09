<template>
  <div class="p-2">
    <!-- Primer componente en la primera fila -->
    <div class="p-1 ">
      <VideosDashboard />
    </div>
    <div class="p-1 ">
      <ShortsDashboard />
    </div>
  </div>
</template>

<script>
import VideosDashboard from './VideosDashboard.vue'
import ShortsDashboard from './ShortsDashboard.vue'

export default {
  components: {

    VideosDashboard,
    ShortsDashboard,
  },
};
</script>

<style scoped>
/* Si hay estilos específicos para este componente */
</style>
