<template>
  <div class="grid grid-rows-4">
    <div class="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 h-200 overflow-hidden">
      <!-- Primer componente en la primera fila -->
      <div v-for="(video, index) in displayedVideos" :key="index"
        class="box-content h-[288.93px] w-[335.98px] m-1 mb-5 sm:w-full md:w-[335.98px]">
        <div class="video-container">
          <iframe :src="getYouTubeEmbedUrl(video.youtubeId)" frameborder="0" allowfullscreen
            class="h-[188.98px] w-[335.98px] max-w-full rounded-lg sm:w-full md:w-full"></iframe>
        </div>
        <div>
          <div class="flex">
            <div class="flex-grow p-1">
              <img :src="video.channelImage" class="rounded-full h-12" alt="Descripción de la imagen">
            </div>
            <div class="flex-grow p-1 w-[270.98px] h-[100px]">
              <p class="text-lg overflow-hidden overflow-ellipsis max-lines-2 font-semibold">{{ video.title }}</p>
              <p class="text-xs">{{ video.channelName }}</p>
              <p class="text-base">{{ video.views }} k vistas hace {{ video.timeSinceUpload }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Segundo componente en la segunda fila -->
    <div class="p-1 col-span-5 md:col-span-1 ">
      <ShortsDashboard />
    </div>

    <!-- Mostrar videos restantes debajo de ShortsDashboard -->
    <div v-if="remainingVideos.length > 0" class="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 m-1 md:h-200">
      <div v-for="(video, index) in remainingVideos" :key="index" class="box-content h-[288.93px] w-[335.98px] mb-5">
        <div class="video-container">
          <iframe :src="getYouTubeEmbedUrl(video.youtubeId)" frameborder="0" allowfullscreen
            class="h-[188.98px] w-[335.98px] max-w-full rounded-lg"></iframe>
        </div>
        <div>
          <div class="flex">
            <div class="flex-grow p-1">
              <img :src="video.channelImage" class="rounded-full h-12" alt="Descripción de la imagen">
            </div>
            <div class="flex-grow p-1 w-[270.98px] h-[100px]">
              <p class="text-lg  font-semibold">{{ video.title }}</p>
              <p class="text-xs">{{ video.channelName }}</p>
              <p class="text-base">{{ video.views }} k vistas hace {{ video.timeSinceUpload }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>

  </div>
  <br>
</template>


<script>
import ShortsDashboard from './ShortsDashboard.vue'

export default {
  components: {
    ShortsDashboard,
  },
  mounted(){
    document.cookie = "cookieName=cookieValue; samesite=None; secure";
  },
  data() {
    return {
      maxVideosToShow: 9,
      videos: [
        {
          title: "INMORTALES: Dioses vs Titanes | RESUMEN EN 21 MINUTOS",
          youtubeId: "x85U_FMgKn4",
          channelImage: "https://yt3.ggpht.com/HP5je0f6vYx9DXlMavbgI5xulghIAdkFrUjHWRFH6UciEVsa9wPcwFzyzaDzlMtpd5r_XwM=s68-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "enminutos",
          views: 463,
          timeSinceUpload: "4 horas",
          category: "Cine"
        },
        {
          title: "DC LIGA DE SUPER MASCOTAS: Es mejor que MEGAMENTE 2",
          youtubeId: "CAY4zXuBZ_M",
          channelImage: "https://yt3.ggpht.com/HP5je0f6vYx9DXlMavbgI5xulghIAdkFrUjHWRFH6UciEVsa9wPcwFzyzaDzlMtpd5r_XwM=s68-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "enminutos",
          views: 3.732,
          timeSinceUpload: "16 horas",
          category: "Animados"
        },
        {
          title: "DUNE: Wonka es el ELEGIDO",
          youtubeId: "J77BgIRtTcw",
          channelImage: "https://yt3.ggpht.com/HP5je0f6vYx9DXlMavbgI5xulghIAdkFrUjHWRFH6UciEVsa9wPcwFzyzaDzlMtpd5r_XwM=s68-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "enminutos",
          views: 8.543,
          timeSinceUpload: "23 horas",
          category: "Cine"
        },
        {
          title: "HULK VS THOR | EN MINUTOS",
          youtubeId: "L3VNI__gDfI",
          channelImage: "https://yt3.ggpht.com/HP5je0f6vYx9DXlMavbgI5xulghIAdkFrUjHWRFH6UciEVsa9wPcwFzyzaDzlMtpd5r_XwM=s68-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "enminutos",
          views: 1.798,
          timeSinceUpload: "2 días",
          category: "Comic"
        },
        {
          title: "🚀 POTENCIA tu desarrollo con VUE 3 y Composition API: Guía",
          youtubeId: "QXNNyV2N_C4",
          channelImage: "https://yt3.ggpht.com/s4cUbevAGAhSoDDF5pJHTeSKepSOkdJB2IhnebmuK5nIXz3sRa2FIXZom9sEjtrkYA2zOYHByyQ=s48-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "JAB",
          views: 4.639,
          timeSinceUpload: "2 Meses",
          category: "Programación"
        },
        {
          title: "ESTÁ CERCA!!! La PELEA DEL SIGLO! Luffy vs !$!%!% | OP 1109",
          youtubeId: "c_CDkmTsgFQ",
          channelImage: "https://yt3.ggpht.com/-7XbppTyghK72kC18w0iv91Xnls5fLBa406V1dSKHlj3T_2WyK40H-H3TsBooO40rlD-BYVOoQ=s48-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "North D Blue",
          views: 732,
          timeSinceUpload: "16 dias",
          category: "Anime"
        },
        {
          title: "Tutorial avanzado de Vue 3: Desarrolla componentes con Composition API y Option API",
          youtubeId: "nT2uimFuFi8",
          channelImage: "https://yt3.ggpht.com/MBOmyA3YOIw34U2XfzeirfdpansMEC4CFptKqIYzx8pcmoz66wBLHbxNvDSG6F0TGyvd3ylAlA=s48-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "Código para Principiantes",
          views: 8543,
          timeSinceUpload: "23 horas",
          category: "Cine"
        },
        {
          title: "Aprende Nuxt.js 3 Ahora!",
          youtubeId: "PxeQ9xBUyxM",
          channelImage: "https://yt3.ggpht.com/ytc/AIdro_kbnQGjvapnVJoq0qgDj10hNR8lOlkOdnkGMDfFMw=s48-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "Yirsis Hertz",
          views: 1798,
          timeSinceUpload: "2 días",
          category: "Comic"
        },
        {
          title: "Curso de VueJS (v3)",
          youtubeId: "7yc5RuAVHqo",
          channelImage: "https://yt3.ggpht.com/ytc/AIdro_kVl9owsvEDPo3-cFBTjSDf-IfEtCtm1qX8HFgbHQ=s48-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "DesarrolloWeb.com",
          views: 1.798,
          timeSinceUpload: "2 días",
          category: " "
        },
        {
          title: "¿Qué es TailwindCSS?",
          youtubeId: "2NuGuBpP5fo",
          channelImage: "https://yt3.ggpht.com/HP5je0f6vYx9DXlMavbgI5xulghIAdkFrUjHWRFH6UciEVsa9wPcwFzyzaDzlMtpd5r_XwM=s68-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "JAB",
          views: 4.639,
          timeSinceUpload: "2 Meses",
          category: "Programación"
        },
        {
          title: "HULK VS THOR | EN MINUTOS",
          youtubeId: "L3VNI__gDfI",
          channelImage: "https://yt3.ggpht.com/HP5je0f6vYx9DXlMavbgI5xulghIAdkFrUjHWRFH6UciEVsa9wPcwFzyzaDzlMtpd5r_XwM=s68-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "enminutos",
          views: 1.798,
          timeSinceUpload: "2 días",
          category: "Comic"
        },
        {
          title: "🚀 POTENCIA tu desarrollo con VUE 3 y Composition API: Guía",
          youtubeId: "QXNNyV2N_C4",
          channelImage: "https://yt3.ggpht.com/s4cUbevAGAhSoDDF5pJHTeSKepSOkdJB2IhnebmuK5nIXz3sRa2FIXZom9sEjtrkYA2zOYHByyQ=s48-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "JAB",
          views: 4.639,
          timeSinceUpload: "2 Meses",
          category: "Programación"
        },
        {
          title: "ESTÁ CERCA!!! La PELEA DEL SIGLO! Luffy vs !$!%!% | OP 1109",
          youtubeId: "c_CDkmTsgFQ",
          channelImage: "https://yt3.ggpht.com/-7XbppTyghK72kC18w0iv91Xnls5fLBa406V1dSKHlj3T_2WyK40H-H3TsBooO40rlD-BYVOoQ=s48-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "North D Blue",
          views: 732,
          timeSinceUpload: "16 dias",
          category: "Anime"
        },
        {
          title: "Tutorial avanzado de Vue 3: Desarrolla componentes con Composition API y Option API",
          youtubeId: "nT2uimFuFi8",
          channelImage: "https://yt3.ggpht.com/MBOmyA3YOIw34U2XfzeirfdpansMEC4CFptKqIYzx8pcmoz66wBLHbxNvDSG6F0TGyvd3ylAlA=s48-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "Código para Principiantes",
          views: 8543,
          timeSinceUpload: "23 horas",
          category: "Cine"
        },
        {
          title: "Aprende Nuxt.js 3 Ahora!",
          youtubeId: "PxeQ9xBUyxM",
          channelImage: "https://yt3.ggpht.com/ytc/AIdro_kbnQGjvapnVJoq0qgDj10hNR8lOlkOdnkGMDfFMw=s48-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "Yirsis Hertz",
          views: 1798,
          timeSinceUpload: "2 días",
          category: "Comic"
        },
        {
          title: "Curso de VueJS (v3)",
          youtubeId: "7yc5RuAVHqo",
          channelImage: "https://yt3.ggpht.com/ytc/AIdro_kVl9owsvEDPo3-cFBTjSDf-IfEtCtm1qX8HFgbHQ=s48-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "DesarrolloWeb.com",
          views: 1.798,
          timeSinceUpload: "2 días",
          category: " "
        },
        {
          title: "¿Qué es TailwindCSS?",
          youtubeId: "2NuGuBpP5fo",
          channelImage: "https://yt3.ggpht.com/HP5je0f6vYx9DXlMavbgI5xulghIAdkFrUjHWRFH6UciEVsa9wPcwFzyzaDzlMtpd5r_XwM=s68-c-k-c0x00ffffff-no-rj",
          imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          channelName: "JAB",
          views: 4.639,
          timeSinceUpload: "2 Meses",
          category: "Programación"
        },
      ],
    };
  },
  methods: {
    getYouTubeEmbedUrl(videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
  computed: {
    displayedVideos() {
      return this.videos.slice(0, this.maxVideosToShow);
    },
    remainingVideos() {
      return this.videos.slice(this.maxVideosToShow);
    },
  },
};
</script>

<style scoped>
.max-lines-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>