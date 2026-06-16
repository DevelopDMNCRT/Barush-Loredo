<template>
  <admin-layout>
  <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
    <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 class="text-3xl font-bold text-black dark:text-white">
        Imágenes del Slider
      </h2>
      <button
        @click="openModal()"
        class="inline-flex items-center justify-center rounded-md bg-[#7C162A] px-10 py-3 text-center font-bold text-white hover:bg-opacity-90 lg:px-8 xl:px-10 shadow-md whitespace-nowrap"
      >
        + Agregar al Slider
      </button>
    </div>

    <!-- Images Grid -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:gap-6">
      <div v-for="img in images" :key="img.id" class="relative group rounded-lg overflow-hidden border border-stroke bg-white shadow-sm dark:border-strokedark dark:bg-boxdark aspect-video">
        <img :src="img.url" alt="Slider Image" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        
        <!-- Delete overlay -->
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button @click="deleteImage(img.id)" class="bg-meta-1 text-white p-3 rounded-full hover:bg-opacity-90 transition-all transform scale-90 group-hover:scale-100 shadow-lg" title="Eliminar del slider">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="images.length === 0 && !isLoading" class="flex flex-col items-center justify-center p-10 mt-10 rounded-lg border border-stroke bg-white dark:border-strokedark dark:bg-boxdark text-center">
      <h3 class="text-xl font-medium text-black dark:text-white mb-2">No hay imágenes en el slider</h3>
      <p class="text-gray-500 mb-6">Sube fotos para que aparezcan en el carrusel de la página principal.</p>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-[999999] flex items-center justify-center bg-black/30 backdrop-blur-md px-4">
      <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-boxdark sm:p-8 relative">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h3 class="mb-6 text-xl font-bold text-black dark:text-white">Subir Imágenes al Slider</h3>
        
        <form @submit.prevent="saveImages">
          <div class="mb-6">
            <label class="mb-2.5 block font-medium text-black dark:text-white">Selecciona tus fotos <span class="text-meta-1">*</span></label>
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
            <button type="submit" :disabled="isSaving" class="rounded bg-[#7C162A] py-2 px-6 font-medium text-white hover:bg-opacity-90 disabled:opacity-50">{{ isSaving ? 'Subiendo...' : 'Guardar Imágenes' }}</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </admin-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AdminLayout from '../../components/layout/AdminLayout.vue'

const images = ref<any[]>([])
const isModalOpen = ref(false)
const isLoading = ref(true)
const isSaving = ref(false)
const error = ref('')
const filePreviews = ref<{file: File, url: string}[]>([])

const API_URL = 'http://localhost:5005/api/sliders'

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
  URL.revokeObjectURL(filePreviews.value[index].url);
  filePreviews.value.splice(index, 1);
}

const fetchImages = async () => {
  try {
    isLoading.value = true;
    const response = await fetch(API_URL);
    if (response.ok) {
      images.value = await response.json();
    }
  } catch (err) {
    console.error('Failed to fetch slider images', err);
  } finally {
    isLoading.value = false;
  }
}

const openModal = () => {
  filePreviews.value.forEach(p => URL.revokeObjectURL(p.url))
  filePreviews.value = []
  error.value = ''
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const saveImages = async () => {
  if (filePreviews.value.length === 0) return;
  
  isSaving.value = true;
  error.value = '';
  
  try {
    const formData = new FormData();
    filePreviews.value.forEach(p => {
      formData.append('images', p.file);
    });

    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Error al subir las imágenes');
    }

    await fetchImages();
    closeModal();
  } catch (err: any) {
    error.value = err.message || 'Ocurrió un error';
  } finally {
    isSaving.value = false;
  }
}

const deleteImage = async (id: number) => {
  if (!confirm('¿Estás seguro de eliminar esta imagen del slider?')) return;
  
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    
    if (response.ok) {
      images.value = images.value.filter(img => img.id !== id);
    }
  } catch (err) {
    console.error('Failed to delete image', err);
    alert('Ocurrió un error al eliminar la imagen');
  }
}

onMounted(() => {
  fetchImages()
})
</script>
