<template>
  <admin-layout>
  <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
    <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 class="text-3xl font-bold text-black dark:text-white">
        Usuarios
      </h2>
      <div class="flex flex-col sm:flex-row items-center gap-4">
        <div class="relative w-full sm:w-64">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar por nombre, usuario o ID..."
            class="w-full rounded-md border border-stroke bg-white py-3 pl-10 pr-4 outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
          />
          <span class="absolute left-3.5 top-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
        </div>
        <button
          @click="openModal()"
          class="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-[#7C162A] px-10 py-3 text-center font-bold text-white hover:bg-opacity-90 lg:px-8 xl:px-10 shadow-md whitespace-nowrap"
        >
          + Agregar Nuevo
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="rounded-lg border border-stroke bg-white shadow-sm dark:border-strokedark dark:bg-boxdark">
      <div class="max-w-full overflow-x-auto">
        <table class="w-full table-auto">
          <thead>
            <tr class="border-b border-stroke text-left dark:border-strokedark">
              <th class="min-w-[80px] py-4 px-6 font-semibold text-sm text-black dark:text-white">ID</th>
              <th class="min-w-[150px] py-4 px-6 font-semibold text-sm text-black dark:text-white">Nombre</th>
              <th class="min-w-[150px] py-4 px-6 font-semibold text-sm text-black dark:text-white">Correo</th>
              <th class="min-w-[120px] py-4 px-6 font-semibold text-sm text-black dark:text-white">Fecha</th>
              <th class="min-w-[120px] py-4 px-6 font-semibold text-sm text-black dark:text-white">Rol</th>
              <th class="py-4 px-6 font-semibold text-sm text-black dark:text-white text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id" class="border-b border-stroke last:border-none dark:border-strokedark">
              <td class="py-4 px-6">
                <span class="inline-flex rounded-md bg-gray-100 py-1 px-3 text-sm font-medium text-gray-600 dark:bg-meta-4 dark:text-white">
                  {{ user.id }}
                </span>
              </td>
              <td class="py-4 px-6 text-sm font-medium text-black dark:text-white">{{ user.name }}</td>
              <td class="py-4 px-6 text-sm text-gray-500 dark:text-gray-400">{{ user.email }}</td>
              <td class="py-4 px-6 text-sm text-gray-500 dark:text-gray-400">{{ formatDate(user.createdAt) }}</td>
              <td class="py-4 px-6 text-sm font-bold text-black dark:text-white">{{ user.role }}</td>
              <td class="py-4 px-6">
                <div class="flex items-center justify-center space-x-3">
                  <button @click="openModal(user)" class="text-gray-400 hover:text-primary transition-colors" title="Editar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </button>
                  <button @click="deleteUser(user.id)" class="text-gray-400 hover:text-meta-1 transition-colors" title="Borrar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-[999999] flex items-center justify-center bg-black/30 backdrop-blur-md px-4">
      <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-default dark:bg-boxdark max-h-[90vh] overflow-y-auto relative">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h3 class="mb-4 text-xl font-bold text-black dark:text-white">
          {{ isEditing ? 'Editar Usuario' : 'Agregar Nuevo Usuario' }}
        </h3>
        
        <form @submit.prevent="saveUser">
          <div class="mb-4">
            <label class="mb-2.5 block font-medium text-black dark:text-white">Nombre <span class="text-meta-1">*</span></label>
            <input v-model="form.name" required type="text" placeholder="Nombre completo" class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
          </div>

          <div class="mb-4">
            <label class="mb-2.5 block font-medium text-black dark:text-white">Rol <span class="text-meta-1">*</span></label>
            <select v-model="form.role" required class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
              <option value="" disabled>Seleccionar rol</option>
              <option value="Administrador">Administrador</option>
              <option value="Operativo">Operativo</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="mb-2.5 block font-medium text-black dark:text-white">Correo <span class="text-meta-1">*</span></label>
            <input v-model="form.email" required type="email" placeholder="usuario@ejemplo.com" class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
          </div>

          <div class="mb-4">
            <label class="mb-2.5 block font-medium text-black dark:text-white">Contraseña <span v-if="!isEditing" class="text-meta-1">*</span></label>
            <div class="relative">
              <input v-model="form.password" :required="!isEditing" minlength="8" :type="showPassword ? 'text' : 'password'" placeholder="Mínimo 8 caracteres" class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
              <button type="button" @click="showPassword = !showPassword" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary">
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </button>
            </div>
            <p v-if="isEditing" class="text-sm mt-1 text-gray-500">Dejar en blanco para mantener la contraseña actual.</p>
          </div>

          <div class="mb-6">
            <label class="mb-2.5 block font-medium text-black dark:text-white">Confirmar Contraseña <span v-if="!isEditing" class="text-meta-1">*</span></label>
            <div class="relative">
              <input v-model="form.confirmPassword" :required="!isEditing || form.password" minlength="8" :type="showConfirmPassword ? 'text' : 'password'" placeholder="Repite la contraseña" class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
              <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary">
                <svg v-if="!showConfirmPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </button>
            </div>
          </div>

          <p v-if="error" class="mb-4 text-meta-1">{{ error }}</p>

          <div class="flex justify-end gap-4">
            <button type="button" @click="closeModal" class="rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white">Cancelar</button>
            <button type="submit" class="rounded bg-[#7C162A] py-2 px-6 font-medium text-white hover:bg-opacity-90">Guardar Usuario</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </admin-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import AdminLayout from '../../components/layout/AdminLayout.vue'

const users = ref<any[]>([])
const isModalOpen = ref(false)
const isEditing = ref(false)
const error = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const searchQuery = ref('')

const filteredUsers = computed(() => {
  if (!searchQuery.value) return users.value
  const query = searchQuery.value.toLowerCase()
  return users.value.filter(user => 
    user.name.toLowerCase().includes(query) ||
    user.id.toString().includes(query)
  )
})

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}

const form = ref({
  id: null as number | null,
  name: '',
  role: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const API_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:5005'}/api/users`

const fetchUsers = async () => {
  try {
    const res = await fetch(API_URL)
    users.value = await res.json()
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  fetchUsers()
})

const editUser = (user: any) => {
  isEditing.value = true
  form.value = {
    id: user.id,
    name: user.name,
    role: user.role,
    email: user.email,
    password: '',
    confirmPassword: ''
  }
  error.value = ''
  showPassword.value = false
  showConfirmPassword.value = false
  isModalOpen.value = true
}

const openModal = (user: any = null) => {
  if (user) {
    editUser(user)
  } else {
    isEditing.value = false
    form.value = { id: null, name: '', role: '', email: '', password: '', confirmPassword: '' }
    error.value = ''
    showPassword.value = false
    showConfirmPassword.value = false
    isModalOpen.value = true
  }
}

const closeModal = () => {
  isModalOpen.value = false
}

const saveUser = async () => {
  if (form.value.password || !isEditing.value) {
    if (form.value.password.length < 8) {
      error.value = 'La contraseña debe tener al menos 8 caracteres'
      return
    }
  }

  if (!isEditing.value && form.value.password !== form.value.confirmPassword) {
    error.value = 'Las contraseñas no coinciden'
    return
  }
  
  if (isEditing.value && form.value.password && form.value.password !== form.value.confirmPassword) {
    error.value = 'Las contraseñas no coinciden'
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.value.email)) {
    error.value = 'El formato del correo es incorrecto. Ingresa un formato válido.';
    return;
  }

  error.value = ''

  const payload: any = {
    name: form.value.name,
    role: form.value.role,
    email: form.value.email,
  }
  if (form.value.password) {
    payload.password = form.value.password
  }

  try {
    const res = await fetch(isEditing.value ? `${API_URL}/${form.value.id}` : API_URL, {
      method: isEditing.value ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    
    if (!res.ok) throw new Error('Error al guardar')
    
    await fetchUsers()
    closeModal()
  } catch (err) {
    error.value = 'Ocurrió un error al guardar'
    console.error(err)
  }
}

const viewUser = (user: any) => {
  alert(`Ver usuario: ${user.name}\nCorreo: ${user.email}\nRol: ${user.role}`)
}

const deleteUser = async (id: number) => {
  if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Error al eliminar')
      await fetchUsers()
    } catch (err) {
      console.error(err)
    }
  }
}
</script>
