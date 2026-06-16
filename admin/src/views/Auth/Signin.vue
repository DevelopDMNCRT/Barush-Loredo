<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
    <div class="w-full max-w-sm">

      <!-- Logo -->
      <div class="flex justify-center mb-10">
        <img src="/LogoBrush.jpeg" alt="Barush Loredo" class="h-28 w-auto object-contain" />
      </div>

      <!-- Card -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-1 text-center">Iniciar sesión</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">Panel de administración Barush Loredo</p>

        <!-- Error -->
        <div v-if="errorMsg" class="mb-5 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm px-4 py-3">
          {{ errorMsg }}
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Correo electrónico
            </label>
            <input
              v-model="email"
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              required
              class="w-full h-11 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-gray-900 px-4 text-sm text-gray-800 dark:text-white placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Contraseña
            </label>
            <div class="relative">
              <input
                v-model="password"
                id="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                required
                class="w-full h-11 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-gray-900 pl-4 pr-11 text-sm text-gray-800 dark:text-white placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition"
              />
              <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full h-11 rounded-lg bg-brand-500 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition flex items-center justify-center gap-2"
          >
            <svg v-if="loading" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            {{ loading ? 'Verificando...' : 'Entrar' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const errorMsg = ref('')

const API_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:5005'}/api/auth/login`

const handleLogin = async () => {
  errorMsg.value = ''
  loading.value = true
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value }),
    })

    const data = await res.json()

    if (!res.ok) {
      errorMsg.value = data.error || 'Error al iniciar sesión'
      return
    }

    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    router.push('/usuarios')
  } catch {
    errorMsg.value = 'No se pudo conectar con el servidor'
  } finally {
    loading.value = false
  }
}
</script>
