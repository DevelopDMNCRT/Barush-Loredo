<script setup lang="ts">
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-dark text-white pt-16 pb-8 border-t-[6px] border-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Logo and About -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md border-2 border-secondary">
              E
            </div>
            <span class="font-bold text-2xl uppercase tracking-tight text-white">Edgar Barush</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Luchando por el bienestar de todos. Un proyecto de transformación que nace del pueblo y para el pueblo. Con honestidad y resultados.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-secondary transition-colors">
              <Facebook class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-secondary transition-colors">
              <Twitter class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-secondary transition-colors">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-secondary transition-colors">
              <Youtube class="w-5 h-5" />
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
            <li><router-link to="/gallery" class="text-gray-400 hover:text-secondary transition-colors text-sm">Fotos de Campaña</router-link></li>
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
                <h4 class="font-bold text-white mb-1">Oficina de Campaña</h4>
                <p class="text-sm text-gray-400">Av. de la Transformación 123,<br />Col. Centro, C.P. 00000</p>
              </div>
            </div>
            
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <Phone class="w-5 h-5 text-secondary" />
                <span class="text-gray-400 text-sm">55 1234 5678</span>
              </div>
              <div class="flex items-center gap-3">
                <Mail class="w-5 h-5 text-secondary" />
                <span class="text-gray-400 text-sm">contacto@candidato.mx</span>
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
          <a href="#" class="hover:text-white transition-colors">Aviso de Privacidad</a>
          <a href="#" class="hover:text-white transition-colors">Términos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
</template>
