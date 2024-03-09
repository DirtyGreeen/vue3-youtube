<template>
   <div>




      <div class="py-4 ">
         <ul class="space-y-4">
            <li>
          <div class="flex items-center justify-center">
            <router-link to="/videosdashboard" class="router-link">
              <button
                @click="handleClick('/videosdashboard')"
                class="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src="@/assets/logos/principal_logo.svg" class="h-6" alt="YouTube Logo" />
                <span class="mt-2 whitespace-nowrap text-xs">Principal</span>
              </button>
            </router-link>
          </div>
        </li>
        <li>
          <div class="flex items-center justify-center">
            <router-link to="/shortsdashboard" class="router-link">
              <button
                @click="handleClick('/shortsdashboard')"
                class="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src="@/assets/logos/shorts_logo.svg" class="h-6" alt="YouTube Logo" />
                <span class="mt-2 whitespace-nowrap text-xs">Shorts</span>
              </button>
            </router-link>
          </div>
        </li>
            <li>
               <div class="flex items-center justify-center">
                  <button href="#"
                     class="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <img src="@/assets/logos/suscrip_logo.svg" class="h-6" alt="YouTube Logo" />
                     <span class="mt-2 whitespace-nowrap text-xs">Suscripciones</span>
                  </button>
               </div>
            </li>
            <li>
               <div class="flex items-center justify-center">
                  <button href="#"
                     class="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <img src="@/assets/logos/tu_logo.svg" class="h-6" alt="YouTube Logo" />
                     <span class="mt-2 whitespace-nowrap text-xs">Tú</span>
                  </button>
               </div>
            </li>
         </ul>
      </div>
   </div>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isButtonClicked = ref(false);
const router = useRouter();

const handleClick = (route) => {
  isButtonClicked.value = true;
  router.push(route);
};


</script>