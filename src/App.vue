<template>
  <div class="flex flex-col h-screen ">
    <div class="bg-white-500 h-16  fixed top-0 left-0 w-full z-50  ">
      <NavBar />
    </div>

    <div class="flex flex-col sm:flex-row flex-1 ">
      <!-- Sidebar a la izquierda -->
      <div class="bg-white-500 w-20 h-full mt-12 hidden sm:inline-block ">
        <div class="fixed">
          <SideBar />
        </div>

      </div>

      <div class="flex flex-col flex-1">
        <!-- Categories arriba de VideosDashboard -->

        <div class="bg-white h-16 w-full mt-12">
          <Categories />
        </div>

        <!-- VideosDashboard en el centro -->
        <div class="bg-white-500 flex-1 pt-3 w-full ">
          <Dashboard />
        </div>
        <!-- NavBarMobile  -->
        <NavBarMobile />

      </div>
    </div>
  </div>
</template>

<script>
import Categories from './components/Categories.vue'
import NavBar from './components/NavBar.vue'
import NavBarMobile from './components/NavBarMobile.vue'
import SideBar from './components/SideBar.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  components: {
    NavBar,
    NavBarMobile,
    SideBar,
    Categories,
    Dashboard,
  }
}
</script>
