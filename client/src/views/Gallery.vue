<script setup lang="ts">
import { Camera } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-light">
    <!-- Header Page (with elegant campaign crowd background) -->
    <section class="relative bg-primary pt-32 pb-20 px-4 text-center overflow-hidden">
      <div class="absolute inset-0 bg-[url('/campaign_header.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
      <div class="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
      <div class="max-w-4xl mx-auto relative z-10">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase flex items-center justify-center gap-4">
          <Camera class="w-10 h-10 text-secondary" /> Fotos de Campaña
        </h1>
        <div class="w-24 h-1.5 bg-secondary mx-auto mb-6"></div>
        <p class="text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-md">
          Imágenes que capturan la fuerza de nuestro movimiento. Una campaña hecha de la mano de la gente.
        </p>
      </div>
    </section>

    <!-- Gallery Grid (Flickr style, 12 photos, asymmetrical CSS Grid) -->
    <section class="py-12 px-4 max-w-7xl mx-auto">
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        
        <!-- Foto 1: Horizontal grande (ocupa 2 cols) -->
        <div class="relative group overflow-hidden md:col-span-2 rounded-xl shadow-md bg-gray-300">
          <img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Evento" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
            <span class="text-white font-bold text-lg uppercase tracking-wider">Asamblea General</span>
          </div>
        </div>

        <!-- Foto 2: Vertical grande (ocupa 2 rows) -->
        <div class="relative group overflow-hidden md:row-span-2 rounded-xl shadow-md bg-gray-400">
          <img src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Reunión" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
            <span class="text-white font-bold text-lg uppercase tracking-wider">Reunión Vecinal</span>
          </div>
        </div>

        <!-- Foto 3: Cuadrada normal -->
        <div class="relative group overflow-hidden rounded-xl shadow-md bg-gray-200">
          <img src="https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Recorrido" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
            <span class="text-white font-bold text-lg uppercase tracking-wider">Recorridos</span>
          </div>
        </div>

        <!-- Foto 4: Cuadrada normal -->
        <div class="relative group overflow-hidden rounded-xl shadow-md bg-gray-300">
          <img src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Encuentro" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
             <span class="text-white font-bold text-lg uppercase tracking-wider">Jóvenes</span>
          </div>
        </div>

        <!-- Foto 5: Horizontal normal (2 cols) -->
        <div class="relative group overflow-hidden md:col-span-2 rounded-xl shadow-md bg-gray-400">
          <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Comunidad" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
             <span class="text-white font-bold text-lg uppercase tracking-wider">Mercado Benito Juárez</span>
          </div>
        </div>

        <!-- Foto 6: Gran cuadrado central (2 cols x 2 rows) -->
        <div class="relative group overflow-hidden md:col-span-2 md:row-span-2 rounded-xl shadow-md bg-gray-500">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Multitud" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
             <span class="text-white font-bold text-2xl uppercase tracking-wider">Cierre de Evento</span>
          </div>
        </div>

        <!-- Foto 7: Cuadrada normal -->
        <div class="relative group overflow-hidden rounded-xl shadow-md bg-gray-300">
          <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Personas" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
             <span class="text-white font-bold text-lg uppercase tracking-wider">Diálogos</span>
          </div>
        </div>

        <!-- Foto 8: Cuadrada normal -->
        <div class="relative group overflow-hidden rounded-xl shadow-md bg-gray-200">
          <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Visita" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
             <span class="text-white font-bold text-lg uppercase tracking-wider">Visitas Casa por Casa</span>
          </div>
        </div>

        <!-- Foto 9: Cuadrada normal -->
        <div class="relative group overflow-hidden rounded-xl shadow-md bg-gray-400">
          <img src="https://images.unsplash.com/photo-1533227260815-484d6676f037?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Deportes" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
             <span class="text-white font-bold text-lg uppercase tracking-wider">Fomento Deportivo</span>
          </div>
        </div>

        <!-- Foto 10: Horizontal grande (2 cols) -->
        <div class="relative group overflow-hidden md:col-span-2 rounded-xl shadow-md bg-gray-300">
          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Público" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
             <span class="text-white font-bold text-lg uppercase tracking-wider">Foros Comunitarios</span>
          </div>
        </div>

        <!-- Foto 11: Cuadrada normal -->
        <div class="relative group overflow-hidden rounded-xl shadow-md bg-gray-400">
          <img src="https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Campo" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
             <span class="text-white font-bold text-lg uppercase tracking-wider">Apoyo al Campo</span>
          </div>
        </div>

        <!-- Foto 12: Cuadrada normal -->
        <div class="relative group overflow-hidden rounded-xl shadow-md bg-gray-200">
          <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Mujeres" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
             <span class="text-white font-bold text-lg uppercase tracking-wider">Mujeres Transformando</span>
          </div>
        </div>
        
      </div>
      
    </section>
  </div>
</template>
