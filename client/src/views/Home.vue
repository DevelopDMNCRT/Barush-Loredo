<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ArrowRight, Newspaper } from 'lucide-vue-next';

interface Note {
  id: number;
  title: string;
  body: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

const latestNotes = ref<Note[]>([]);
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5005';

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

const fetchLatestNotes = async () => {
  try {
    const res = await fetch(`${API_URL}/api/notes`);
    if (res.ok) {
      const data: Note[] = await res.json();
      latestNotes.value = data.slice(0, 2);
    }
  } catch (err) {
    console.error('Error fetching latest notes for Home:', err);
  }
};

onMounted(() => {
  fetchLatestNotes();
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    
    <!-- Hero Section -->
    <section class="relative bg-primary text-white overflow-hidden">
      <!-- Background Abstract Pattern (Tailwind CSS tricks) -->
      <div class="absolute inset-0 opacity-10">
        <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0,100 100,0 100,100"/>
        </svg>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-4 border border-secondary/50 uppercase tracking-widest">
              Regidor del H. Ayuntamiento de Zamora
            </span>
            <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Por la <span class="text-secondary">Transformación</span> que nuestro municipio de Zamora merece.
            </h1>
            <p class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light">
              Con honestidad, cercanía al pueblo y resultados comprobados. Vamos juntos a seguir haciendo historia.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/informe" class="bg-secondary text-primary hover:bg-white hover:text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(198,166,100,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transform hover:-translate-y-1 flex items-center gap-2">
                Leer Informe de Gobierno
                <ArrowRight class="w-5 h-5" />
              </router-link>
              <router-link to="/about" class="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1">
                Conoce mi visión
              </router-link>
            </div>
          </div>
          
          <div class="relative hidden lg:block">
            <!-- Decorative circle -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl"></div>
            <!-- Candidate Image -->
            <div class="relative w-full aspect-[3/4] bg-white/10 rounded-3xl border-4 border-secondary/30 overflow-hidden shadow-2xl flex items-center justify-center backdrop-blur-sm">
              <img src="/candidato.jpeg" alt="Lic. Barush Loredo Arizaga" class="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News -->
    <section v-if="latestNotes.length > 0" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-primary font-bold text-3xl md:text-4xl uppercase tracking-tight mb-2">Últimas Noticias</h2>
            <div class="w-16 h-1.5 bg-secondary"></div>
          </div>
          <router-link to="/blog" class="hidden md:flex text-primary font-semibold items-center gap-2 hover:text-secondary transition-colors border-2 border-primary hover:border-secondary px-6 py-2 rounded-full">
            Ver todas <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <router-link 
            v-for="note in latestNotes" 
            :key="note.id" 
            :to="'/blog/' + note.id" 
            class="flex flex-col sm:flex-row gap-6 group cursor-pointer border border-gray-100 rounded-2xl p-4 hover:shadow-lg transition-all duration-300"
          >
            <div class="w-full sm:w-1/3 aspect-video sm:aspect-square bg-gray-200 rounded-xl overflow-hidden relative flex-shrink-0">
               <div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
               <img 
                 v-if="note.images && note.images.length > 0" 
                 :src="note.images[0]" 
                 :alt="note.title" 
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
               />
               <div v-else class="w-full h-full flex items-center justify-center text-gray-400 font-bold">
                 BARUSH LOREDO
               </div>
            </div>
            <div class="flex flex-col justify-center">
              <span class="text-secondary font-bold text-sm mb-2 uppercase flex items-center gap-1">
                <Newspaper class="w-4 h-4"/> Comunicado
              </span>
              <h3 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {{ note.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-2 text-sm">
                {{ note.body }}
              </p>
              <span class="text-xs text-gray-500 font-medium">{{ formatDate(note.createdAt) }}</span>
            </div>
          </router-link>
        </div>
        
        <div class="mt-10 text-center md:hidden">
          <router-link to="/blog" class="inline-flex text-primary font-semibold items-center gap-2 hover:text-secondary transition-colors border-2 border-primary hover:border-secondary px-8 py-3 rounded-full">
            Ver todas las noticias <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>
