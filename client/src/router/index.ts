import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Si la página se acaba de recargar (from.name es undefined), forzar ir arriba
    if (!from.name) {
      // Opcional: limpiar el hash de la URL si lo desean
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname)
      }
      return { top: 0 }
    }
    
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router
