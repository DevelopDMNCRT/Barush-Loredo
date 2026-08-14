<script setup lang="ts">
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-dark text-white pt-16 pb-8 border-t-[6px] border-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Logo and About -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <img src="/favicon-candidato.ico" alt="Logo Edgar Barush" class="w-12 h-12 object-contain bg-white rounded-full shadow-md border-2 border-secondary" />
            <span class="font-bold text-2xl uppercase tracking-tight text-white">Edgar Barush</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Luchando por el bienestar de todos. Un proyecto de transformación que nace del pueblo y para el pueblo. Con honestidad y resultados.
          </p>
          <div class="flex space-x-4">
            <a href="#" @click.prevent class="text-gray-400 hover:text-secondary transition-colors">
              <Facebook class="w-5 h-5" />
            </a>
            <a href="#" @click.prevent class="text-gray-400 hover:text-secondary transition-colors">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="#" @click.prevent class="text-gray-400 hover:text-secondary transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-white uppercase tracking-wider">Enlaces Rápidos</h3>
          <ul class="space-y-4">
            <li><router-link to="/" class="text-gray-400 hover:text-secondary transition-colors text-sm">Inicio</router-link></li>
            <li><router-link to="/about" class="text-gray-400 hover:text-secondary transition-colors text-sm">Acerca de Mí</router-link></li>
            <li><router-link to="/blog" class="text-gray-400 hover:text-secondary transition-colors text-sm">Blog y Noticias</router-link></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contacto</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="flex items-start gap-4">
              <div class="bg-primary/20 p-3 rounded-full text-secondary">
                <MapPin class="w-6 h-6" />
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">Oficina de Enlace</h4>
                <p class="text-sm text-gray-400">Cristobal Colón Poniente #202,<br />col Centro, CP 59653, Zamora Mich.</p>
              </div>
            </div>
            
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <Phone class="w-5 h-5 text-secondary" />
                <span class="text-gray-400 text-sm">52 351 405 3079</span>
              </div>
              <div class="flex items-center gap-3">
                <Mail class="w-5 h-5 text-secondary" />
                <span class="text-gray-400 text-sm">contacto@barushloredo.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} Edgar Barush Loredo Arizaga. Todos los derechos reservados.
        </p>
        <div class="flex space-x-6 text-sm text-gray-500">
          <router-link to="/privacidad" class="hover:text-white transition-colors">Aviso de Privacidad</router-link>
          <router-link to="/terminos" class="hover:text-white transition-colors">Términos de Uso</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
