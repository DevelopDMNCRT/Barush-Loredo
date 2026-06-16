<template>
  <section id="inicio" class="relative h-screen w-full bg-gray-900 overflow-hidden flex items-center justify-center">
    <!-- Slider Backgrounds -->
    <div v-for="(img, idx) in images" :key="img.id" class="absolute inset-0 transition-opacity duration-1000" :class="idx === currentSlide ? 'opacity-100' : 'opacity-0'">
      <img :src="img.url" class="w-full h-full object-cover opacity-60" />
    </div>
    <div v-if="images.length === 0" class="absolute inset-0 bg-gray-800 flex items-center justify-center">
      <span class="text-gray-500 font-bold uppercase tracking-widest">[Slider Placeholder]</span>
    </div>
    
    <!-- Controls -->
    <button v-if="images.length > 1" @click="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition z-10">
      <ChevronLeft />
    </button>
    <button v-if="images.length > 1" @click="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition z-10">
      <ChevronRight />
    </button>

    <!-- Overlay Content -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-lg">EL FUTURO DE NUESTRO MUNICIPIO COMIENZA HOY</h1>
      <p class="text-xl md:text-2xl text-gray-200 mb-10 font-light drop-shadow-md">Honestidad, trabajo y compromiso para transformar nuestra ciudad.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#cv" class="bg-primary hover:bg-[#631122] text-white px-8 py-4 rounded font-bold tracking-widest uppercase transition shadow-lg">Conóceme</a>
        <a href="#contacto" class="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded font-bold tracking-widest uppercase transition shadow-lg">Únete a la campaña</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const images = ref<any[]>([])
const currentSlide = ref(0)
let timer: any = null

const API_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:5005'}/api/sliders`

const fetchSliders = async () => {
  try {
    const res = await fetch(API_URL)
    if (res.ok) {
      images.value = await res.json()
      if (images.value.length > 1) {
        startTimer()
      }
    }
  } catch (err) {
    console.error('Failed to load sliders', err)
  }
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length
  resetTimer()
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.value.length) % images.value.length
  resetTimer()
}

const startTimer = () => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % images.value.length
  }, 5000)
}

const resetTimer = () => {
  clearInterval(timer)
  startTimer()
}

onMounted(() => {
  fetchSliders()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
