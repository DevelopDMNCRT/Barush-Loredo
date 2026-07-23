<script setup lang="ts">
import { Download, ChevronRight, FileText } from 'lucide-vue-next';

// Generate 12 chapters of Lorem Ipsum for the report
const pages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Capítulo ${i + 1}: ${['Transparencia', 'Desarrollo Social', 'Infraestructura', 'Seguridad', 'Educación', 'Salud', 'Economía Local', 'Medio Ambiente', 'Deporte', 'Cultura', 'Participación Ciudadana', 'Visión a Futuro'][i]}`,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
}));
</script>

<template>
  <div class="min-h-screen bg-gray-100 pb-20">
    
    <!-- Hero Banner for Report -->
    <header class="relative bg-primary pt-32 pb-24 px-4 text-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 bg-[url('/campaign_header.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
      <div class="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
      
      <div class="max-w-4xl mx-auto relative z-10">
        <span class="inline-block py-1 px-4 rounded-full bg-secondary text-primary font-bold text-sm mb-6 uppercase tracking-widest shadow-lg">
          Rendición de Cuentas
        </span>
        <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight uppercase leading-tight">
          Informe de Gobierno <br/>
          <span class="text-secondary font-light text-3xl md:text-5xl">2026 - 2027</span>
        </h1>
        <div class="w-32 h-1 bg-secondary mx-auto mb-8"></div>
        <p class="text-gray-300 text-xl max-w-2xl mx-auto mb-10 font-light">
          Regidor Lic. Edgar Barush Loredo Arizaga.<br/>
          Resultados claros para la transformación de Zamora.
        </p>
        
        <button class="inline-flex items-center gap-3 bg-secondary text-primary hover:bg-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(198,166,100,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1">
          <Download class="w-6 h-6" /> Descargar Versión PDF
        </button>
      </div>
    </header>

    <!-- Report Content (Simulating Pages) -->
    <main class="max-w-5xl mx-auto px-4 -mt-10 relative z-20">
      
      <!-- Table of Contents Sidebar (Desktop) -->
      <div class="flex flex-col lg:flex-row gap-8">
        
        <div class="lg:w-1/3 hidden lg:block">
          <div class="sticky top-28 bg-white rounded-2xl shadow-xl p-6 border-t-4 border-primary">
            <h3 class="font-bold text-xl text-dark mb-4 uppercase tracking-wide flex items-center gap-2">
              <FileText class="w-5 h-5 text-primary" /> Índice
            </h3>
            <ul class="space-y-3">
              <li v-for="page in pages" :key="page.id">
                <a :href="'#capitulo-' + page.id" class="text-gray-600 hover:text-primary flex items-center justify-between group transition-colors text-sm font-medium">
                  <span class="truncate pr-2">{{ page.title }}</span>
                  <ChevronRight class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-secondary flex-shrink-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Document Pages -->
        <div class="lg:w-2/3 space-y-8">
          
          <article 
            v-for="page in pages" 
            :key="page.id" 
            :id="'capitulo-' + page.id"
            class="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden"
          >
            <!-- Decorative corner -->
            <div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-0"></div>
            <div class="absolute top-4 right-4 text-5xl font-black text-gray-100 select-none z-0">
              {{ page.id < 10 ? '0'+page.id : page.id }}
            </div>
            
            <div class="relative z-10">
              <span class="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Sección {{ page.id }}</span>
              <h2 class="text-2xl md:text-3xl font-bold text-primary mb-6">{{ page.title }}</h2>
              <div class="w-12 h-1 bg-gray-200 mb-8"></div>
              
              <div class="prose prose-p:text-gray-600 prose-p:leading-relaxed text-justify">
                <p v-for="(paragraph, index) in page.content.split('\n\n')" :key="index" class="mb-4">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </article>
          
        </div>
      </div>
      
    </main>

  </div>
</template>
