<script setup lang="ts">
import { Target, Users, BookOpen, Flag } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-light">
    <!-- Header Page -->
    <section class="relative bg-primary pt-32 pb-20 px-4 text-center overflow-hidden">
      <div class="absolute inset-0 bg-[url('/campaign_header.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
      <div class="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
      <div class="max-w-4xl mx-auto relative z-10">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase drop-shadow-md">Acerca de Mí</h1>
        <div class="w-24 h-1.5 bg-secondary mx-auto shadow-sm"></div>
      </div>
    </section>

    <!-- Biografía -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <div class="w-full aspect-[4/5] bg-gray-300 rounded-3xl shadow-xl overflow-hidden relative">
              <div class="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none"></div>
              <img src="/candidato.jpeg" alt="Lic. Edgar Barush Loredo Arizaga" class="w-full h-full object-cover object-center" />
            </div>
            <!-- Decorator -->
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-10"></div>
          </div>
          
          <div>
            <h2 class="text-3xl font-bold text-primary mb-6">Lic. Edgar Barush Loredo Arizaga</h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              Actualmente desempeño el cargo de <strong>Regidor de la comisión de Ciencia, Tecnología e Innovación del H. Ayuntamiento de Zamora</strong> para el periodo 2024-2027. Soy Licenciado en Derecho por el Instituto Tecnológico de Guadalajara y Socio Director del Buffet jurídico Loredo y Asociados.
            </p>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              He participado activamente en la vida política como <strong>Coordinador Distrital del grupo político R 21</strong> y <strong>Coordinador Estatal del grupo político La Net4</strong>, trabajando de la mano con la ciudadanía.
            </p>
            <p class="text-gray-600 text-lg mb-8 leading-relaxed font-semibold">
              Además de mi pasión por el derecho y el servicio público, fui atleta de alto rendimiento en la modalidad de Tiro Deportivo, orgulloso seleccionado nacional del 2011 al 2014, representando a nuestro país en Juegos Centroamericanos.
            </p>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white p-4 rounded-xl shadow-md border-l-4 border-secondary">
                <span class="text-2xl font-black text-primary block mb-1">Experiencia</span>
                <span class="text-gray-600 text-sm font-medium">Servicio y Liderazgo</span>
              </div>
              <div class="bg-white p-4 rounded-xl shadow-md border-l-4 border-secondary">
                <span class="text-2xl font-black text-primary block mb-1">Disciplina</span>
                <span class="text-gray-600 text-sm font-medium">Atleta de Alto Rendimiento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Valores -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-primary mb-12 uppercase tracking-wide">Mis Valores</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center p-6 bg-light rounded-2xl hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
              <Target class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">Honestidad</h3>
            <p class="text-gray-600">Combate frontal a la corrupción. No robar, no mentir y no traicionar al pueblo.</p>
          </div>
          
          <div class="text-center p-6 bg-light rounded-2xl hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
              <Users class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">Cercanía</h3>
            <p class="text-gray-600">El poder solo tiene sentido y se convierte en virtud cuando se pone al servicio de los demás.</p>
          </div>

          <div class="text-center p-6 bg-light rounded-2xl hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
              <BookOpen class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">Convicción</h3>
            <p class="text-gray-600">Actuamos por principios e ideales, no por cargos ni puestos. Nuestra brújula es la justicia.</p>
          </div>

          <div class="text-center p-6 bg-light rounded-2xl hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
              <Flag class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">Soberanía</h3>
            <p class="text-gray-600">Defendemos los intereses de la nación y de nuestro estado por encima de cualquier otro interés.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
