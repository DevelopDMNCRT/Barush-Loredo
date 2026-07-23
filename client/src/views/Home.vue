<script setup lang="ts">
import { ArrowRight, CheckCircle2, ChevronRight, Newspaper } from 'lucide-vue-next';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    
    <!-- Hero Section -->
    <section class="relative bg-primary text-white overflow-hidden">
      <!-- Background Abstract Pattern (Tailwind CSS tricks) -->
      <div class="absolute inset-0 opacity-10">
        <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0,100 100,0 100,100"/>
        </svg>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-4 border border-secondary/50 uppercase tracking-widest">
              Regidor del H. Ayuntamiento de Zamora
            </span>
            <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Por la <span class="text-secondary">Transformación</span> que nuestro estado merece.
            </h1>
            <p class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light">
              Con honestidad, cercanía al pueblo y resultados comprobados. Vamos juntos a seguir haciendo historia.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/informe" class="bg-secondary text-primary hover:bg-white hover:text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(198,166,100,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transform hover:-translate-y-1 flex items-center gap-2">
                Leer Informe de Gobierno
                <ArrowRight class="w-5 h-5" />
              </router-link>
              <router-link to="/about" class="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1">
                Conoce mi visión
              </router-link>
            </div>
          </div>
          
          <div class="relative hidden lg:block">
            <!-- Decorative circle -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl"></div>
            <!-- Candidate Image Placeholder -->
            <div class="relative w-full aspect-[3/4] bg-white/10 rounded-3xl border-4 border-secondary/30 overflow-hidden shadow-2xl flex items-center justify-center backdrop-blur-sm">
              <span class="text-white/50 text-2xl font-light text-center">FOTO DE<br/>EDGAR BARUSH</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Propuestas / Ejes Section -->
    <section class="py-20 bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-primary font-bold text-3xl md:text-4xl uppercase tracking-tight mb-4">Nuestros Ejes de Acción</h2>
          <div class="w-24 h-1.5 bg-secondary mx-auto mb-6"></div>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Basamos nuestro proyecto en pilares fundamentales para garantizar el desarrollo equitativo de nuestras familias.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-primary group">
            <div class="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle2 class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">Bienestar para Todos</h3>
            <p class="text-gray-600 mb-6 line-clamp-3">
              Programas sociales directos y sin intermediarios para las familias que más lo necesitan. Primero los pobres.
            </p>
            <router-link to="/about" class="text-primary font-semibold flex items-center gap-1 hover:text-secondary transition-colors">
              Leer más <ChevronRight class="w-4 h-4" />
            </router-link>
          </div>
          
          <!-- Card 2 -->
          <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-primary group">
            <div class="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle2 class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">Seguridad y Paz</h3>
            <p class="text-gray-600 mb-6 line-clamp-3">
              Atender las causas de la violencia con oportunidades para jóvenes y una estrategia de seguridad coordinada.
            </p>
            <router-link to="/about" class="text-primary font-semibold flex items-center gap-1 hover:text-secondary transition-colors">
              Leer más <ChevronRight class="w-4 h-4" />
            </router-link>
          </div>

          <!-- Card 3 -->
          <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-primary group">
            <div class="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle2 class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">Desarrollo Económico</h3>
            <p class="text-gray-600 mb-6 line-clamp-3">
              Impulso a la economía local, apoyo a pequeños productores y defensa de la soberanía nacional.
            </p>
            <router-link to="/about" class="text-primary font-semibold flex items-center gap-1 hover:text-secondary transition-colors">
              Leer más <ChevronRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-primary font-bold text-3xl md:text-4xl uppercase tracking-tight mb-2">Últimas Noticias</h2>
            <div class="w-16 h-1.5 bg-secondary"></div>
          </div>
          <router-link to="/blog" class="hidden md:flex text-primary font-semibold items-center gap-2 hover:text-secondary transition-colors border-2 border-primary hover:border-secondary px-6 py-2 rounded-full">
            Ver todas <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Article 1 -->
          <article class="flex flex-col sm:flex-row gap-6 group cursor-pointer">
            <div class="w-full sm:w-1/3 aspect-video sm:aspect-square bg-gray-200 rounded-xl overflow-hidden relative flex-shrink-0">
               <div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
               <div class="w-full h-full flex items-center justify-center text-gray-400">IMAGEN</div>
            </div>
            <div class="flex flex-col justify-center">
              <span class="text-secondary font-bold text-sm mb-2 uppercase flex items-center gap-1">
                <Newspaper class="w-4 h-4"/> Comunicado
              </span>
              <h3 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                Recorrido exitoso por las comunidades del sur del estado
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-2">
                Miles de ciudadanos se sumaron este fin de semana a las asambleas informativas sobre nuestro proyecto de nación.
              </p>
              <span class="text-sm text-gray-500 font-medium">15 Octubre, 2026</span>
            </div>
          </article>

          <!-- Article 2 -->
          <article class="flex flex-col sm:flex-row gap-6 group cursor-pointer">
            <div class="w-full sm:w-1/3 aspect-video sm:aspect-square bg-gray-200 rounded-xl overflow-hidden relative flex-shrink-0">
               <div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
               <div class="w-full h-full flex items-center justify-center text-gray-400">IMAGEN</div>
            </div>
            <div class="flex flex-col justify-center">
              <span class="text-secondary font-bold text-sm mb-2 uppercase flex items-center gap-1">
                <Newspaper class="w-4 h-4"/> Propuestas
              </span>
              <h3 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                Presentamos nuestro plan integral de infraestructura
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-2">
                Con inversión histórica y sin deuda pública, garantizaremos mejores caminos rurales y conectividad regional.
              </p>
              <span class="text-sm text-gray-500 font-medium">10 Octubre, 2026</span>
            </div>
          </article>
        </div>
        
        <div class="mt-10 text-center md:hidden">
          <router-link to="/blog" class="inline-flex text-primary font-semibold items-center gap-2 hover:text-secondary transition-colors border-2 border-primary hover:border-secondary px-8 py-3 rounded-full">
            Ver todas las noticias <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>
