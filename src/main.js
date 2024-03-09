import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/tailwind.css'
import VideosDashboard from './components/VideosDashboard.vue'
import ShortsDashboard from './components/ShortsDashboard.vue'
import Dashboard from './components/Dashboard.vue'


const routes = [
    { path: '/videosdashboard', component: VideosDashboard },
    { path: '/shortsdashboard', component: ShortsDashboard },
    { path: '/', component: Dashboard },
  ];


  const router = createRouter({
    history: createWebHistory(),
    routes,
  });   
  createApp(App).use(router).mount('#app');
