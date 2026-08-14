<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Newspaper, Calendar } from 'lucide-vue-next';

interface Note {
  id: number;
  title: string;
  body: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

const notes = ref<Note[]>([]);
const isLoading = ref(true);
const currentPage = ref(1);
const ITEMS_PER_PAGE = 9;

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5005';

const totalPages = computed(() => Math.max(1, Math.ceil(notes.value.length / ITEMS_PER_PAGE)));

const paginatedNotes = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE;
  return notes.value.slice(start, start + ITEMS_PER_PAGE);
});

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date);
};

const fetchNotes = async () => {
  isLoading.value = true;
  try {
    const res = await fetch(`${API_URL}/api/notes`);
    if (res.ok) {
      notes.value = await res.json();
    }
  } catch (err) {
    console.error('Error fetching notes:', err);
  } finally {
    isLoading.value = false;
  }
};

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }
};

onMounted(() => {
  fetchNotes();
});
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
        
        <!-- Loading State -->
        <div v-if="isLoading" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
        </div>

        <!-- Empty State -->
        <div v-else-if="notes.length === 0" class="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-200">
          <Newspaper class="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h3 class="text-2xl font-bold text-gray-700 mb-2">No hay comunicados publicados aún</h3>
          <p class="text-gray-500">Pronto se actualizarán las últimas noticias e informaciones del proyecto.</p>
        </div>

        <!-- Dynamic Notes List (3 Cols x 3 Rows = 9 items per page) -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link 
            v-for="note in paginatedNotes" 
            :key="note.id"
            :to="'/blog/' + note.id"
            class="block bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div class="w-full aspect-video bg-gray-200 relative overflow-hidden">
              <div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                v-if="note.images && note.images.length > 0" 
                :src="note.images[0]" 
                :alt="note.title" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-400 font-bold text-xl">
                BARUSH LOREDO
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4 mb-3">
                <span class="text-xs font-bold bg-secondary/20 text-secondary px-3 py-1 rounded-full uppercase tracking-wider">
                  Comunicado
                </span>
                <span class="text-gray-400 text-sm flex items-center gap-1 font-medium">
                  <Calendar class="w-4 h-4" /> {{ formatDate(note.createdAt) }}
                </span>
              </div>
              <h2 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {{ note.title }}
              </h2>
              <p class="text-gray-600 line-clamp-3">
                {{ note.body }}
              </p>
            </div>
          </router-link>
        </div>
        
        <!-- Interactive Pagination -->
        <div v-if="totalPages > 1" class="mt-16 flex justify-center">
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
