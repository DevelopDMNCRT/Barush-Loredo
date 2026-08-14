<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowLeft, Calendar, Share2, Newspaper } from 'lucide-vue-next';

interface Note {
  id: number;
  title: string;
  body: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

const route = useRoute();
const note = ref<Note | null>(null);
const isLoading = ref(true);
const error = ref('');

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5005';

const formatDate = (dateStr?: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

const fetchNote = async () => {
  const noteId = route.params.id;
  if (!noteId) return;

  isLoading.value = true;
  try {
    const res = await fetch(`${API_URL}/api/notes/${noteId}`);
    if (res.ok) {
      note.value = await res.json();
    } else {
      error.value = 'No se encontró la noticia solicitada.';
    }
  } catch (err) {
    console.error('Error fetching note:', err);
    error.value = 'Ocurrió un error al cargar la noticia.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchNote();
});
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Loading State -->
    <div v-if="isLoading" class="flex justify-center items-center min-h-[60vh]">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
    </div>

    <!-- Error / Not Found State -->
    <div v-else-if="error || !note" class="max-w-4xl mx-auto px-4 py-24 text-center">
      <Newspaper class="w-16 h-16 mx-auto text-gray-300 mb-4" />
      <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ error || 'Noticia no encontrada' }}</h2>
      <router-link to="/blog" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition">
        <ArrowLeft class="w-5 h-5" /> Volver al Blog
      </router-link>
    </div>

    <!-- Note Content -->
    <div v-else>
      <!-- Clean Header -->
      <header class="max-w-4xl mx-auto px-4 pt-32 pb-8">
        <router-link to="/blog" class="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 font-medium">
          <ArrowLeft class="w-4 h-4" /> Volver a Noticias
        </router-link>
        
        <div class="flex items-center gap-4 mb-6">
          <span class="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
            Comunicado
          </span>
          <span class="text-gray-500 text-sm flex items-center gap-1 font-medium">
            <Calendar class="w-4 h-4" /> {{ formatDate(note.createdAt) }}
          </span>
        </div>
        
        <h1 class="text-3xl md:text-5xl font-extrabold text-dark leading-tight mb-8">
          {{ note.title }}
        </h1>
        
        <!-- Hero Image / Gallery -->
        <div v-if="note.images && note.images.length > 0" class="w-full aspect-[21/9] bg-gray-200 rounded-2xl overflow-hidden mb-12 shadow-md relative">
          <img :src="note.images[0]" :alt="note.title" class="w-full h-full object-cover" />
        </div>
      </header>

      <!-- Main Content Body -->
      <article class="max-w-3xl mx-auto px-4 pb-24">
        <div class="prose prose-lg whitespace-pre-line text-gray-700 leading-relaxed font-normal text-lg">
          {{ note.body }}
        </div>

        <!-- Additional Images Grid -->
        <div v-if="note.images && note.images.length > 1" class="mt-12">
          <h3 class="text-xl font-bold text-dark mb-4">Galería de fotos</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img 
              v-for="(img, idx) in note.images.slice(1)" 
              :key="idx" 
              :src="img" 
              class="rounded-xl shadow-md object-cover aspect-video w-full"
            />
          </div>
        </div>
        
        <!-- Share Footer -->
        <div class="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
          <span class="text-gray-500 font-medium">Compartir este artículo:</span>
          <div class="flex gap-4">
            <button class="p-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full transition-colors text-gray-600">
              <Share2 class="w-5 h-5" />
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.prose { white-space: pre-line; }
</style>
