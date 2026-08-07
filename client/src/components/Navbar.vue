<script setup lang="ts">
import { ref } from 'vue';
import { Menu, X } from 'lucide-vue-next';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Acerca de Mí', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contact' },
];
</script>

<template>
  <nav class="bg-primary text-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <router-link to="/" class="flex-shrink-0 flex items-center gap-3">
            <!-- Political Logo/Name -->
            <img src="/favicon-candidato.ico" alt="Logo Edgar Barush" class="w-10 h-10 object-contain bg-white rounded-full shadow-md border border-secondary" />
            <span class="font-bold text-2xl tracking-tight uppercase">Edgar Barush</span>
          </router-link>
        </div>
        
        <!-- Desktop menu -->
        <div class="hidden sm:flex sm:items-center sm:space-x-8">
          <router-link 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.href"
            class="text-white hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-secondary uppercase tracking-wider"
            active-class="text-secondary border-secondary"
          >
            {{ item.name }}
          </router-link>
          
          <router-link to="/informe" class="bg-secondary text-primary hover:bg-white hover:text-primary px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-md transform hover:-translate-y-1 uppercase text-sm">
            Leer Informe
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-secondary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Abrir menú principal</span>
            <Menu v-if="!isMenuOpen" class="block h-6 w-6" aria-hidden="true" />
            <X v-else class="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMenuOpen" class="sm:hidden bg-primary border-t border-white/10">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link 
          v-for="item in navigation" 
          :key="item.name" 
          :to="item.href"
          class="text-white hover:bg-white/10 hover:text-secondary block px-3 py-2 rounded-md text-base font-medium uppercase"
          active-class="bg-white/20 text-secondary"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
        <router-link 
          to="/informe" 
          class="bg-secondary text-primary block text-center px-3 py-2 mt-4 rounded-md font-bold text-base uppercase shadow-sm"
          @click="isMenuOpen = false"
        >
          Leer Informe de Gobierno
        </router-link>
      </div>
    </div>
  </nav>
</template>
