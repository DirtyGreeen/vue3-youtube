<script setup>
import { ref } from 'vue';

const isDrawerOpen = ref(false);

const toggleDrawer = () => {
   isDrawerOpen.value = !isDrawerOpen.value;
};


</script>

<template>
   <!-- drawer init and show -->
   <div class="text-center">
      <button @click="toggleDrawer"
         class="text-black-500 hover:shadow-xl hover:bg-gray-200      rounded-full px-1.5 mx-5 py-1.5 mt-1 "
         type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
         aria-controls="drawer-navigation">
         <img src="@/assets/logos/menu_banner_logo.svg" class="h-6 " alt="Menu Logo" />
      </button>


   </div>

   <!-- drawer component -->
   <div :class="{ 'transform translate-x-0': isDrawerOpen, 'transform -translate-x-full': !isDrawerOpen }"
      id="drawer-navigation"
      class="fixed top-0 left-0 z-40 w-64 h-screen p-4 pl-0 overflow-y-auto transition-transform bg-white dark:bg-gray-800"
      tabindex="-1" aria-labelledby="drawer-navigation-label">
      <div class="flex items-center mt-2 ml-2">

         <button @click="toggleDrawer"
            class="text-black-500 hover:shadow-xl hover:bg-gray-200 rounded-full px-1.5 mx-1 py-1.5   " type="button"
            data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation">
            <img src="@/assets/logos/menu_banner_logo.svg" class="h-6 " alt="Menu Logo" />

         </button>

         <button href="#" class="flex items-center rtl:space-x-reverse ">
            <div class="flex items-center">
               <img src="@/assets/logos/logo.svg" class="h-7 w-10" alt="YouTube Logo" />
               <span class="text-black-500 pathway-gothic-one-regular text-bold text-xl">
                  YouTube
               </span>
               <span class="self-start text-gray-400 text-xs">CL</span>
            </div>
         </button>

      </div>





      <div class="py-4 overflow-y-auto">
         <!-- Sección 1 -->
         <div class="py-2 ">
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full hover:bg-gray-200">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
               </svg>
               <a href="#" class="block ml-2 youtube-font">Principal</a>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full hover:bg-gray-200">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
               </svg>

               <a href="#" class="block   ml-2 youtube-font">Shorts</a>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full hover:bg-gray-200">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
               </svg>

               <a href="#" class="block youtube-font ml-2">Suscripciones</a>
            </div>
         </div>

         <!-- Sección 1 -->
         <div class="py-2 border-b border-t">
            <div class="flex items-center">
               <span class="font-semibold ml-4">
                  Tú
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 m-1">
                  <path fill-rule="evenodd"
                     d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                     clip-rule="evenodd" />
               </svg>

            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full  hover:bg-gray-200">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
               </svg>


               <a href="#" class="block youtube-font ml-2">Historial </a>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full  hover:bg-gray-200">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>

               <a href="#" class="block youtube-font ml-2">Ver más tarde</a>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full  hover:bg-gray-200">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
               </svg>

               <a href="#" class="block youtube-font ml-2">Videos que me gustaron</a>
            </div>
         </div>

         <!-- Sección 1 -->
         <div class="py-2 border-b">

            <div>
               <span class="m-2 p-2 font-semibold">Suscripciones</span>
            </div>
            <div class=" p-1 pt-2 pb-2 pl-4 w-full h-full  hover:bg-gray-200">
               <div class="flex items-center">
                  <img src="@/assets/logos/mitocode_logo.jpg" class="h-7 w-10 ml-3 rounded-full px-1.5 "
                     alt="YouTube Logo" />
                  <a href="#" class="block youtube-font ml-2">MitoCode</a>
               </div>

            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full hover:bg-gray-200">
               <img src="@/assets/logos/t13_logo.jpg" class="h-7 w-10 ml-3 rounded-full px-1.5 " alt="YouTube Logo" />
               <a href="#" class="block youtube-font ml-2">T13</a>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full hover:bg-gray-200">
               <img src="@/assets/logos/21savage_logo.jpg" class="h-7 w-10 ml-3 rounded-full px-1.5 "
                  alt="YouTube Logo" />

               <a href="#" class="block youtube-font ml-2">21 Savage</a>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full hover:bg-gray-200">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>

               <a href="#" class="block youtube-font ml-2">Explorar canales</a>
            </div>

         </div>

         <!-- Sección 4 -->
         <div class="py-2 border-b">
            <div>
               <span class="p-4 font-semibold">Explorar</span>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
               </svg>

               <a href="#" class="block youtube-font ml-2">Tendencias</a>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
               </svg>


               <a href="#" class="block youtube-font ml-2">Musica</a>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
               </svg>


               <a href="#" class="block youtube-font ml-2">Videojuegos</a>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
               </svg>

               <a href="#" class="block youtube-font ml-2">Noticias</a>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
               </svg>


               <a href="#" class="block youtube-font ml-2">Deportes</a>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
               </svg>

               <a href="#" class="block youtube-font ml-2">Aprendizaje</a>
            </div>
         </div>
         <div class="py-2">
            <div>
               <span class="p-4 font-semibold">Más de YouTube</span>
            </div>
            <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
               <img src="@/assets/logos/logo.svg" class="h-7 w-10" alt="YouTube Logo" />
               <a href="#" class="block youtube-font ml-2">YouTube Premium</a>
            </div>
         </div>

      </div>
   </div>


</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@900&family=Pathway+Gothic+One&family=Poppins:ital,wght@0,200;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


.pathway-gothic-one-regular {
   font-family: "Pathway Gothic One", sans-serif;
   font-weight: 700;
   font-size: 1.5rem;
   font-style: normal;
}

.youtube-font {
   font-family: "Open Sans", sans-serif;
   color: #4F4D4D;
   font-style: normal;
   font-size: 14px;
}

.youtube-font-p {
   font-family: "Open Sans", sans-serif;
   color: #4F4D4D;
   font-weight: 480;
   font-size: 16px;
}

.poppins-light {
   font-family: "Poppins", sans-serif;
   font-weight: 300;
   font-style: normal;
}
</style>