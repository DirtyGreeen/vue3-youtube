<script>
import SideBarOffCanvas from './SideBarOffCanvas.vue'
import IconYoutube from './icons/IconYoutube.vue'
import SearchLabel from './SearchLabel.vue'

export default {
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    closeDropdown() {
      this.showDropdown = false;
    },
  },
  components: {
    SideBarOffCanvas,
    IconYoutube,
    SearchLabel
  }
}
</script>

<template>
  <nav class="bg-white h-[56px] z-40 border-gray-200 dark:bg-black-999 ">
    <div class="flex flex-wrap items-center justify-between h-full mx-auto  ">
      <div class="flex justify-between items-center ">
        <div class="hidden sm:inline-block">
          <SideBarOffCanvas />
        </div>

        <button href="#" class="flex items-center rtl:space-x-reverse ">
          <div class="flex items-center">
            <img src="@/assets/logos/logo.svg" class="h-7 w-10 ml-3" alt="YouTube Logo" />
            <span class="text-black-500 pathway-gothic-one-regular text-bold text-xl">
              YouTube
            </span>
            <span class="self-start text-gray-400 text-xs">CL</span>
          </div>
        </button>

      </div>
      <div class="flex justify-between hidden sm:inline-block">
        <SearchLabel />
      </div>
      <div class="sm:hidden mr-8">
        <button class="text-white max-h-11 mx-auto my-auto p-2 pl-4 pr-4 rounded-r-full mt-3  hover:bg-gray-300 ">
          <img src="@/assets/logos/search_logo.svg" class="h-5 w-10" alt="Buscar" />

        </button>
        <button @click="toggleDropdown" type="button"
          class="border p-1 px-3 mr-4 bg-green-400 text-white rounded-full sm:hidden  m-2">
          <span class="text-black-500 text-bold text-xl poppins-light">S</span>
        </button>
      </div>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <button type="button"
              class="  py-2  rounded-full hover:bg-gray-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <img src="@/assets/logos/upload_logo.svg" class="h-5 hover:bg-gray-300 rounded-full" alt="Upload" />
            </button>
          </li>
          <li>
            <button type="button"
              class="  py-2    rounded-full hover:bg-gray-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <img src="@/assets/logos/notification_logo.svg" class="h-5" alt="Notification" />
            </button>
          </li>
          <li>


            <div class="relative inline-block text-left">
              <button @click="toggleDropdown" type="button"
                class="border p-1 px-3 mr-4 bg-green-400 text-white rounded-full">
                <span class="text-black-500 text-bold text-xl poppins-light">S</span>
              </button>

              <div v-show="showDropdown" @click.away="closeDropdown"
                class="absolute right-3 top-7 shadow-xl mt-2 w-[300px] h-[749px] bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700">

                <!-- Panel superior con información -->
                <div class="p-2">
                  <div class="p-1  border-gray-200  flex items-center">
                    <div>
                      <div class=" p-1 px-3  mr-4 mb-6 bg-green-400 text-white rounded-full">
                        <span class="text-black-500 text-bold text-2xl poppins-light ">S</span>
                      </div>
                    </div>

                    <div>
                      <p class="youtube-font-p ">Sebastián soto
                        <br>
                        @sebastiansoto3791
                      </p>
                      <a class="pt-1 text-blue-500"> Ver tu canal </a>
                    </div>
                  </div>
                </div>


                <!-- Sección 1 -->
                <div class="py-2 border">
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ">
                      <path fill-rule="evenodd"
                        d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75ZM10.5 7.963a1.5 1.5 0 0 0-2.17-1.341l-.415.207a.75.75 0 0 0 .67 1.342L9 7.963V9.75h-.75a.75.75 0 1 0 0 1.5H9v4.688c0 .563.26 1.198.867 1.525A4.501 4.501 0 0 0 16.41 14.4c.199-.977-.636-1.649-1.415-1.649h-.745a.75.75 0 1 0 0 1.5h.656a3.002 3.002 0 0 1-4.327 1.893.113.113 0 0 1-.045-.051.336.336 0 0 1-.034-.154V11.25h5.25a.75.75 0 0 0 0-1.5H10.5V7.963Z"
                        clip-rule="evenodd" />
                    </svg>

                    <a href="#" class="block ml-2 youtube-font">Cuenta de Google</a>
                  </div>
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <a href="#" class="block   ml-2 youtube-font">Cambiar de Cuenta</a>
                  </div>
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>
                    <a href="#" class="block youtube-font ml-2">Salir</a>
                  </div>
                </div>

                <!-- Sección 1 -->
                <div class="py-2 border-b">
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>

                    <a href="#" class="block youtube-font ml-2">YouTube Studio </a>
                  </div>
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                    <a href="#" class="block youtube-font ml-2">Compras y membresias</a>
                  </div>
                </div>

                <!-- Sección 1 -->
                <div class="py-2 border-b">
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <a href="#" class="block youtube-font ml-2">Tus datos en YouTube</a>
                  </div>
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>

                    <a href="#" class="block youtube-font ml-2">Aspecto: Tema del dispositivo</a>
                  </div>
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                    </svg>
                    <a href="#" class="block youtube-font ml-2">Idioma: Español Latinoamericano</a>
                  </div>
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                    <a href="#" class="block youtube-font ml-2">Modo Restringido: desactivado</a>
                  </div>
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <a href="#" class="block youtube-font ml-2">Ubicación: Chile</a>
                  </div>
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <a href="#" class="block youtube-font ml-2">Combinaciones de teclas</a>
                  </div>
                </div>

                <!-- Sección 4 -->
                <div class="py-2 border-b">
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <a href="#" class="block youtube-font ml-2">Configuración</a>
                  </div>
                </div>

                <div class="py-2 border-b ">
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>

                    <a href="#" class="block youtube-font ml-2">Ayuda</a>
                  </div>
                  <div class="flex items-center p-1 pt-2 pb-2 pl-4 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                    <a href="#" class="block youtube-font ml-2">Enviar Comentarios</a>
                  </div>
                </div>
              </div>
            </div>

          </li>
        </ul>
      </div>

    </div>
  </nav>




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