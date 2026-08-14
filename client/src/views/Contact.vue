<script setup lang="ts">
import { Send, MapPin, Phone, Mail } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-light">
    <!-- Header Page -->
    <section class="relative bg-primary pt-32 pb-20 px-4 text-center overflow-hidden">
      <div class="absolute inset-0 bg-[url('/campaign_header.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
      <div class="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
      <div class="max-w-4xl mx-auto relative z-10">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase drop-shadow-md">Súmate al Proyecto</h1>
        <div class="w-24 h-1.5 bg-secondary mx-auto mb-6 shadow-sm"></div>
        <p class="text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-md">
          La transformación la hacemos entre todos. Déjanos tus datos, comparte tus ideas o únete como voluntario.
        </p>
      </div>
    </section>

    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          <!-- Contact Form -->
          <div class="p-8 md:p-12">
            <h2 class="text-2xl font-bold text-dark mb-8 uppercase tracking-wide">Envíanos un Mensaje</h2>
            <form @submit.prevent="" class="space-y-6">
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                  <input type="text" id="name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                  <input type="tel" id="phone" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="A 10 dígitos" />
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                <input type="email" id="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="correo@ejemplo.com" />
              </div>
              
              <div>
                <label for="interest" class="block text-sm font-bold text-gray-700 mb-2">Me interesa...</label>
                <select id="interest" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white">
                  <option>Ser voluntario</option>
                  <option>Recibir información</option>
                  <option>Compartir una propuesta</option>
                  <option>Invitar a mi colonia</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-bold text-gray-700 mb-2">Mensaje / Propuesta</label>
                <textarea id="message" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none" placeholder="Escribe aquí tu mensaje..."></textarea>
              </div>
              
              <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors uppercase tracking-wider shadow-md">
                Enviar Mensaje <Send class="w-5 h-5" />
              </button>
            </form>
          </div>

          <!-- Contact Info Sidebar -->
          <div class="bg-dark text-white p-8 md:p-12 relative overflow-hidden">
            <!-- decorative bg -->
            <div class="absolute -right-20 -top-20 w-64 h-64 border-[30px] border-secondary/20 rounded-full"></div>
            <div class="absolute -left-10 -bottom-10 w-40 h-40 border-[20px] border-primary/50 rounded-full"></div>
            
            <div class="relative z-10">
              <h2 class="text-2xl font-bold mb-8 uppercase tracking-wide">Información de Contacto</h2>
              <p class="text-gray-300 mb-12">
                Nuestras oficinas están abiertas para escucharte. Juntos construiremos el proyecto de nación que necesitamos.
              </p>
              
              <div class="space-y-8">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-secondary shadow-lg">
                    <MapPin class="w-6 h-6" />
                  </div>
                  <div>
                    <h3 class="font-bold text-xl mb-1">Oficina Enlace</h3>
                    <p class="text-gray-400">Colón 202,<br/>Zamora, Michoacán</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-secondary shadow-lg">
                    <Phone class="w-6 h-6" />
                  </div>
                  <div>
                    <h3 class="font-bold text-xl mb-1">Teléfono</h3>
                    <p class="text-gray-400">+52 1 351 405 3079</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-secondary shadow-lg">
                    <Mail class="w-6 h-6" />
                  </div>
                  <div>
                    <h3 class="font-bold text-xl mb-1">Correo Electrónico</h3>
                    <p class="text-gray-400">contacto@candidato.mx</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </div>
</template>
