<script setup lang="ts">
import { ref } from 'vue';
import { Newspaper, Calendar } from 'lucide-vue-next';

const currentPage = ref(1);
const totalPages = ref(3);

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="min-h-screen bg-light">
    <!-- Header Page -->
    <section class="relative bg-primary pt-32 pb-20 px-4 text-center overflow-hidden">
      <div class="absolute inset-0 bg-[url('/campaign_header.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
      <div class="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
      <div class="max-w-4xl mx-auto relative z-10">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase drop-shadow-md">Noticias y Comunicados</h1>
        <div class="w-24 h-1.5 bg-secondary mx-auto mb-6 shadow-sm"></div>
        <p class="text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-md">
          Mantente informado sobre las actividades de nuestra campaña, recorridos por el estado y propuestas para la Transformación.
        </p>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Post 1 -->
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-full aspect-video bg-gray-200 relative overflow-hidden">
              <div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
              <div class="w-full h-full flex items-center justify-center text-gray-500 font-bold text-xl">IMAGEN NOTICIA</div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4 mb-3">
                <span class="text-xs font-bold bg-secondary/20 text-secondary px-3 py-1 rounded-full uppercase tracking-wider">
                  Comunicado
                </span>
                <span class="text-gray-400 text-sm flex items-center gap-1 font-medium">
                  <Calendar class="w-4 h-4" /> 15 Oct, 2026
                </span>
              </div>
              <h2 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                Multitudinario recibimiento en la zona huasteca del estado
              </h2>
              <p class="text-gray-600 mb-6 line-clamp-3">
                Ante más de 10,000 simpatizantes, refrendamos nuestro compromiso con los pueblos originarios y su desarrollo con justicia.
              </p>
              <router-link to="/blog/1" class="text-primary font-bold hover:text-secondary transition-colors inline-flex items-center gap-2">
                Leer artículo completo <Newspaper class="w-4 h-4" />
              </router-link>
            </div>
          </article>

          <!-- Post 2 -->
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-full aspect-video bg-gray-200 relative overflow-hidden">
              <div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
              <div class="w-full h-full flex items-center justify-center text-gray-500 font-bold text-xl">IMAGEN NOTICIA</div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4 mb-3">
                <span class="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                  Propuesta
                </span>
                <span class="text-gray-400 text-sm flex items-center gap-1 font-medium">
                  <Calendar class="w-4 h-4" /> 10 Oct, 2026
                </span>
              </div>
              <h2 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                Presentación del Plan Hídrico para garantizar el agua
              </h2>
              <p class="text-gray-600 mb-6 line-clamp-3">
                No podemos seguir con la privatización disfrazada. El agua es un derecho humano y nuestra administración invertirá para que llegue a todos los hogares.
              </p>
              <router-link to="/blog/1" class="text-primary font-bold hover:text-secondary transition-colors inline-flex items-center gap-2">
                Leer artículo completo <Newspaper class="w-4 h-4" />
              </router-link>
            </div>
          </article>

          <!-- Post 3 -->
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-full aspect-video bg-gray-200 relative overflow-hidden">
              <div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
              <div class="w-full h-full flex items-center justify-center text-gray-500 font-bold text-xl">IMAGEN NOTICIA</div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4 mb-3">
                <span class="text-xs font-bold bg-secondary/20 text-secondary px-3 py-1 rounded-full uppercase tracking-wider">
                  Recorrido
                </span>
                <span class="text-gray-400 text-sm flex items-center gap-1 font-medium">
                  <Calendar class="w-4 h-4" /> 5 Oct, 2026
                </span>
              </div>
              <h2 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                Visita a los tianguistas de la capital: "La economía se hace desde abajo"
              </h2>
              <p class="text-gray-600 mb-6 line-clamp-3">
                Escuchando de primera mano las necesidades de los comerciantes que día a día mueven la economía de nuestro estado con su trabajo honrado.
              </p>
              <router-link to="/blog/1" class="text-primary font-bold hover:text-secondary transition-colors inline-flex items-center gap-2">
                Leer artículo completo <Newspaper class="w-4 h-4" />
              </router-link>
            </div>
          </article>

        </div>
        
        <!-- Interactive Pagination -->
        <div class="mt-16 flex justify-center">
          <nav class="flex items-center gap-2">
            <button 
              @click="goToPage(currentPage - 1)" 
              :disabled="currentPage === 1"
              class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Anterior
            </button>
            
            <button 
              v-for="page in totalPages" 
              :key="page"
              @click="goToPage(page)"
              :class="[
                'w-10 h-10 rounded-lg font-bold transition-all',
                currentPage === page 
                  ? 'bg-primary text-white shadow-md' 
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ page }}
            </button>

            <span class="px-2 text-gray-500">...</span>

            <button 
              @click="goToPage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Siguiente
            </button>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>
