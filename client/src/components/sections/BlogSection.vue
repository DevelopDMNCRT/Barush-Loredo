<template>
  <section id="noticias" class="py-24 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h3 class="text-primary font-bold tracking-widest uppercase mb-2">Noticias y Comunicados</h3>
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Sigue de cerca nuestra campaña</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="note in notes" :key="note.id" class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col transition hover:-translate-y-1 hover:shadow-xl cursor-pointer" @click="openNote(note)">
          <div class="aspect-video w-full relative bg-gray-200">
            <img v-if="note.images && note.images.length > 0" :src="note.images[0]" class="w-full h-full object-cover" />
            <div v-else class="w-full h-full flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest text-sm">[Sin Imagen]</div>
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <p class="text-sm text-gray-500 mb-3">{{ formatDate(note.createdAt) }}</p>
            <h4 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{{ note.title }}</h4>
            <p class="text-gray-600 line-clamp-3 mb-4">{{ note.body }}</p>
            <div class="mt-auto pt-4 border-t border-gray-100 text-primary font-semibold flex items-center gap-2">
              Leer más
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="notes.length === 0" class="text-center py-10">
        <p class="text-gray-500 text-lg">Aún no hay noticias publicadas.</p>
      </div>
    </div>

    <!-- Note Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div class="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button @click="isModalOpen = false" class="absolute top-4 right-4 text-gray-500 hover:text-black bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h3 class="mb-2 text-3xl font-black text-gray-900 pr-10">{{ selectedNote?.title }}</h3>
        <p class="text-sm text-gray-500 mb-6">{{ formatDate(selectedNote?.createdAt) }}</p>
        <div class="mb-8 text-gray-700 whitespace-pre-wrap leading-relaxed text-lg">{{ selectedNote?.body }}</div>
        
        <div v-if="selectedNote?.images && selectedNote.images.length > 0" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img v-for="(img, idx) in selectedNote.images" :key="idx" :src="img" class="w-full rounded-xl object-cover aspect-video shadow-sm border border-gray-100" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const notes = ref<any[]>([])
const isModalOpen = ref(false)
const selectedNote = ref<any>(null)

const API_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:5005'}/api/notes`

const fetchNotes = async () => {
  try {
    const res = await fetch(API_URL)
    if (res.ok) {
      notes.value = await res.json()
    }
  } catch (err) {
    console.error('Failed to load notes', err)
  }
}

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
}

const openNote = (note: any) => {
  selectedNote.value = note
  isModalOpen.value = true
}

onMounted(() => {
  fetchNotes()
})
</script>
