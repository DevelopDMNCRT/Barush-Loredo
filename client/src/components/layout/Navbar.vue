<template>
  <header class="fixed w-full top-0 z-50 transition-all duration-300" :class="isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#inicio" class="text-3xl font-black tracking-tighter transition-colors" :class="isScrolled ? 'text-primary' : 'text-white'">
          CANDIDATO
        </a>
        
        <!-- Desktop Menu -->
        <nav class="hidden md:flex gap-8">
          <a v-for="item in menuItems" :key="item.name" :href="item.href" class="font-bold text-sm tracking-widest uppercase transition-colors hover:text-primary" :class="isScrolled ? 'text-gray-800' : 'text-white'">
            {{ item.name }}
          </a>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button class="md:hidden p-2" :class="isScrolled ? 'text-primary' : 'text-white'">
          <MenuIcon />
        </button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu as MenuIcon } from 'lucide-vue-next'

const isScrolled = ref(false)

const menuItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Conóceme', href: '#cv' },
  { name: 'Noticias', href: '#noticias' },
  { name: 'Contacto', href: '#contacto' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
