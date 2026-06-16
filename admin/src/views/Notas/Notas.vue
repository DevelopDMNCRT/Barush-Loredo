<template>
  <admin-layout>
  <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
    <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 class="text-3xl font-bold text-black dark:text-white">
        Notas
      </h2>
      <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <div class="relative w-full sm:w-56">
          <span class="absolute left-4 top-1/2 -translate-y-1/2">
            <svg class="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 11.1449 15.899 12.9431 14.6548 14.2831L18.0893 17.7175C18.4147 18.043 18.4147 18.5706 18.0893 18.8961C17.7638 19.2215 17.2362 19.2215 16.9107 18.8961L13.4763 15.4616C12.2173 16.2303 10.7416 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z" fill=""/></svg>
          </span>
          <input v-model="searchQueryTitle" type="text" placeholder="Buscar por título..." class="w-full bg-white dark:bg-boxdark pl-12 pr-4 py-3 rounded-md border-[1.5px] border-stroke dark:border-strokedark focus:border-primary focus:outline-none transition" />
        </div>
        <div class="relative w-full sm:w-40">
          <input v-model="searchQueryDate" type="date" class="w-full bg-white dark:bg-boxdark px-4 py-3 rounded-md border-[1.5px] border-stroke dark:border-strokedark focus:border-primary focus:outline-none transition text-sm text-gray-600 dark:text-gray-300" title="Buscar por fecha" />
        </div>
        <button
          @click="openModal()"
          class="inline-flex items-center justify-center rounded-md bg-[#7C162A] px-10 py-3 text-center font-bold text-white hover:bg-opacity-90 lg:px-8 xl:px-10 shadow-md whitespace-nowrap w-full sm:w-auto"
        >
          + Agregar Nueva Nota
        </button>
      </div>
    </div>

    <!-- Notes Grid -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:gap-6">
      <div v-for="note in filteredNotes" :key="note.id" class="rounded-lg border border-stroke bg-white shadow-sm dark:border-strokedark dark:bg-boxdark overflow-hidden flex flex-col">
        <div class="relative w-full h-48 bg-gray-100 dark:bg-meta-4 flex items-center justify-center overflow-hidden">
          <img v-if="note.images && note.images.length > 0" :src="note.images[0]" alt="Note thumbnail" class="w-full h-full object-cover" />
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <div v-if="note.images && note.images.length > 1" class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">
            +{{ note.images.length - 1 }}
          </div>
        </div>
        
        <div class="p-5 flex-1 flex flex-col">
          <h3 class="text-xl font-semibold text-black dark:text-white mb-2 line-clamp-1">{{ note.title }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 mb-4 flex-1">{{ note.body }}</p>
          <div class="mt-auto flex justify-between items-center pt-4 border-t border-stroke dark:border-strokedark">
            <span class="text-xs text-gray-400">{{ formatDate(note.createdAt) }}</span>
            <div class="flex items-center gap-3">
              <button @click="viewNote(note)" class="text-gray-400 hover:text-primary transition-colors" title="Ver nota">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </button>
              <button @click="editNote(note)" class="text-gray-400 hover:text-meta-3 transition-colors" title="Editar nota">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
              </button>
              <button @click="deleteNote(note.id)" class="text-gray-400 hover:text-meta-1 transition-colors" title="Borrar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredNotes.length === 0 && !isLoading" class="flex flex-col items-center justify-center p-10 mt-10 rounded-lg border border-stroke bg-white dark:border-strokedark dark:bg-boxdark text-center">
      <h3 class="text-xl font-medium text-black dark:text-white mb-2">No hay notas que coincidan</h3>
      <p class="text-gray-500 mb-6">Intenta con otra búsqueda o comienza creando tu primera nota.</p>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-[999999] flex items-center justify-center bg-black/30 backdrop-blur-md px-4">
      <div class="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-boxdark sm:p-8 relative">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h3 class="mb-6 text-xl font-bold text-black dark:text-white">{{ isEditing ? 'Editar Nota' : 'Crear Nueva Nota' }}</h3>
        
        <form @submit.prevent="saveNote">
          <div class="mb-4">
            <label class="mb-2.5 block font-medium text-black dark:text-white">Nombre de la nota <span class="text-meta-1">*</span></label>
            <input v-model="form.title" required type="text" placeholder="Ej. Actualización importante" class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
          </div>

          <div class="mb-4">
            <label class="mb-2.5 block font-medium text-black dark:text-white">Cuerpo de la nota <span class="text-meta-1">*</span></label>
            <textarea v-model="form.body" required rows="5" placeholder="Escribe el contenido de la nota aquí..." class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></textarea>
          </div>

          <div class="mb-6">
            <label class="mb-2.5 block font-medium text-black dark:text-white">Galería de la nota (Imágenes)</label>
            <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-stroke border-dashed rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-meta-4 dark:border-form-strokedark transition">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 mb-3 text-gray-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold text-primary">Haz clic para añadir archivos</span> o arrástralos aquí</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">Formatos válidos: JPG, PNG, JPEG, WEBP, GIF</p>
              </div>
              <input type="file" multiple accept="image/jpeg, image/png, image/webp, image/gif" @change="handleFileChange" class="hidden" />
            </label>
            
            <div v-if="filePreviews.length > 0" class="mt-4">
              <label class="mb-2.5 block text-sm font-medium text-black dark:text-white">Archivos seleccionados a subir:</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div v-for="(preview, idx) in filePreviews" :key="idx" class="relative group aspect-video rounded-lg border border-stroke dark:border-strokedark overflow-hidden shadow-sm">
                  <img :src="preview.url" class="w-full h-full object-cover" />
                  <button type="button" @click.prevent="removePreview(idx)" class="absolute top-1 right-1 bg-meta-1 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-90 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p v-if="error" class="mb-4 text-meta-1">{{ error }}</p>

          <div class="flex justify-end gap-4">
            <button type="button" @click="closeModal" class="rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white">Cancelar</button>
            <button type="submit" :disabled="isSaving" class="rounded bg-[#7C162A] py-2 px-6 font-medium text-white hover:bg-opacity-90 disabled:opacity-50">{{ isSaving ? 'Guardando...' : (isEditing ? 'Guardar Cambios' : 'Publicar Nota') }}</button>
          </div>
        </form>
      </div>
    </div>

    <!-- View Modal -->
    <div v-if="isViewModalOpen" class="fixed inset-0 z-[999999] flex items-center justify-center bg-black/30 backdrop-blur-md px-4">
      <div class="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg dark:bg-boxdark sm:p-8 relative max-h-[90vh] overflow-y-auto">
        <button @click="closeViewModal" class="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h3 class="mb-2 text-2xl font-bold text-black dark:text-white pr-8">{{ selectedNote?.title }}</h3>
        <p class="text-sm text-gray-400 mb-6">{{ formatDate(selectedNote?.createdAt) }}</p>
        <div class="mb-8 text-black dark:text-gray-300 whitespace-pre-wrap leading-relaxed">{{ selectedNote?.body }}</div>
        
        <div v-if="selectedNote?.images && selectedNote.images.length > 0" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img v-for="(img, idx) in selectedNote.images" :key="idx" :src="img" class="w-full rounded border border-stroke dark:border-strokedark object-cover aspect-video" />
        </div>
      </div>
    </div>
    </div>
  </admin-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import AdminLayout from '../../components/layout/AdminLayout.vue'

const notes = ref<any[]>([])
const isModalOpen = ref(false)
const isViewModalOpen = ref(false)
const selectedNote = ref<any>(null)
const isEditing = ref(false)
const isLoading = ref(true)
const isSaving = ref(false)
const error = ref('')
const filePreviews = ref<{file?: File, url: string, isExisting?: boolean}[]>([])

const searchQueryTitle = ref('')
const searchQueryDate = ref('')

const API_URL = 'http://localhost:5005/api/notes'

const form = ref({
  id: null as number | null,
  title: '',
  body: ''
})

const filteredNotes = computed(() => {
  return notes.value.filter(note => {
    const matchTitle = note.title.toLowerCase().includes(searchQueryTitle.value.toLowerCase())
    
    let matchDate = true
    if (searchQueryDate.value) {
      const noteDate = note.createdAt.split('T')[0]
      matchDate = noteDate === searchQueryDate.value
    }

    return matchTitle && matchDate
  })
})

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files) {
    Array.from(target.files).forEach(file => {
      filePreviews.value.push({
        file: file,
        url: URL.createObjectURL(file)
      })
    });
    // Reset file input so same file can be selected again if removed
    target.value = '';
  }
}

const removePreview = (index: number) => {
  const p = filePreviews.value[index];
  if (!p.isExisting) {
    URL.revokeObjectURL(p.url);
  }
  filePreviews.value.splice(index, 1);
}

const fetchNotes = async () => {
  try {
    isLoading.value = true;
    const response = await fetch(API_URL);
    if (response.ok) {
      notes.value = await response.json();
    }
  } catch (err) {
    console.error('Failed to fetch notes', err);
  } finally {
    isLoading.value = false;
  }
}

const viewNote = (note: any) => {
  selectedNote.value = note
  isViewModalOpen.value = true
}

const closeViewModal = () => {
  isViewModalOpen.value = false
  selectedNote.value = null
}

const editNote = (note: any) => {
  isEditing.value = true
  form.value = {
    id: note.id,
    title: note.title,
    body: note.body
  }
  filePreviews.value.forEach(p => {
    if (!p.isExisting) URL.revokeObjectURL(p.url)
  })
  filePreviews.value = []
  
  if (note.images && note.images.length > 0) {
    note.images.forEach((img: string) => {
      filePreviews.value.push({ url: img, isExisting: true })
    })
  }

  error.value = ''
  isModalOpen.value = true
}

const openModal = () => {
  isEditing.value = false
  form.value = { id: null, title: '', body: '' }
  filePreviews.value.forEach(p => {
    if (!p.isExisting) URL.revokeObjectURL(p.url)
  })
  filePreviews.value = []
  error.value = ''
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const saveNote = async () => {
  isSaving.value = true;
  error.value = '';
  
  try {
    const formData = new FormData();
    formData.append('title', form.value.title);
    formData.append('body', form.value.body);
    
    filePreviews.value.forEach(p => {
      if (p.file) {
        formData.append('images', p.file);
      } else if (p.isExisting) {
        formData.append('existingImages', p.url);
      }
    });

    const url = isEditing.value ? `${API_URL}/${form.value.id}` : API_URL;
    const method = isEditing.value ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method: method,
      body: formData
    });

    if (!response.ok) {
      throw new Error('Error al guardar la nota');
    }

    await fetchNotes();
    closeModal();
  } catch (err: any) {
    error.value = err.message || 'Ocurrió un error al guardar la nota';
  } finally {
    isSaving.value = false;
  }
}

const deleteNote = async (id: number) => {
  if (!confirm('¿Estás seguro de eliminar esta nota?')) return;
  
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    
    if (response.ok) {
      notes.value = notes.value.filter(n => n.id !== id);
    }
  } catch (err) {
    console.error('Failed to delete note', err);
    alert('Ocurrió un error al eliminar la nota');
  }
}

onMounted(() => {
  fetchNotes()
})
</script>
