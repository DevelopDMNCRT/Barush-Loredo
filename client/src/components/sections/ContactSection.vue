<template>
  <section id="contacto" class="py-24 bg-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gray-50 hidden lg:block -z-10"></div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-16">
        
        <!-- Contact Info -->
        <div class="w-full lg:w-5/12">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-1 bg-primary"></div>
            <h3 class="text-primary font-bold tracking-widest uppercase">Participa</h3>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter">Únete a nuestro movimiento</h2>
          <p class="text-lg text-gray-600 mb-10">Estamos construyendo un proyecto para todos. Si quieres ser voluntario, tienes alguna propuesta o simplemente deseas platicar, escríbenos.</p>
          
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gray-100 text-primary rounded-full flex items-center justify-center shrink-0">
                <MapPinIcon />
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg">Sede de Campaña</h4>
                <p class="text-gray-600">Av. Reforma 123, Colonia Centro.<br/>Frente a la plaza principal.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gray-100 text-primary rounded-full flex items-center justify-center shrink-0">
                <PhoneIcon />
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg">Teléfono</h4>
                <p class="text-gray-600">+52 123 456 7890</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gray-100 text-primary rounded-full flex items-center justify-center shrink-0">
                <MailIcon />
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg">Correo Electrónico</h4>
                <p class="text-gray-600">contacto@candidato.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="w-full lg:w-7/12 bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 sm:p-10">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
          <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
                <input type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="Juan Pérez">
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
                <input type="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="juan@ejemplo.com">
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Asunto</label>
              <input type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="Propuesta ciudadana">
            </div>
            <div class="mb-6">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
              <textarea rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="Escribe tu mensaje aquí..."></textarea>
            </div>
            <button type="submit" class="w-full bg-primary hover:bg-[#631122] text-white py-4 rounded-lg font-bold tracking-widest uppercase transition shadow-lg flex justify-center items-center gap-2">
              Enviar Mensaje
              <SendIcon class="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { MapPin as MapPinIcon, Phone as PhoneIcon, Mail as MailIcon, Send as SendIcon } from 'lucide-vue-next'

const submitForm = () => {
  alert('Formulario enviado (Demo)')
}
</script>
