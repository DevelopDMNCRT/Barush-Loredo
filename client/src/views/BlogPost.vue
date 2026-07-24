<script setup lang="ts">
import { ArrowLeft, Calendar, Share2 } from 'lucide-vue-next';

// In a real app, you would fetch data based on the route ID
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Clean, Minimal Header -->
    <header class="max-w-4xl mx-auto px-4 pt-12 pb-8">
      <router-link to="/blog" class="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 font-medium">
        <ArrowLeft class="w-4 h-4" /> Volver a Noticias
      </router-link>
      
      <div class="flex items-center gap-4 mb-6">
        <span class="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
          Comunicado
        </span>
        <span class="text-gray-500 text-sm flex items-center gap-1 font-medium">
          <Calendar class="w-4 h-4" /> 15 Oct, 2026
        </span>
      </div>
      
      <h1 class="text-4xl md:text-5xl font-extrabold text-dark leading-tight mb-8">
        Multitudinario recibimiento en la zona huasteca del estado
      </h1>
      
      <!-- Hero Image for the Post -->
      <div class="w-full aspect-[21/9] bg-gray-200 rounded-2xl overflow-hidden mb-12 shadow-md flex items-center justify-center text-gray-400 font-bold text-xl relative">
        <div class="absolute inset-0 bg-[url('/campaign_header.jpg')] bg-cover bg-center"></div>
      </div>
    </header>

    <!-- Main Content Body (1 Column, clean typography) -->
    <article class="max-w-3xl mx-auto px-4 pb-24">
      <div class="prose prose-lg prose-p:text-gray-700 prose-p:leading-relaxed prose-headings:text-dark prose-a:text-primary hover:prose-a:text-secondary prose-img:rounded-xl">
        <p class="lead text-xl text-gray-600 font-medium mb-8">
          Ante más de 10,000 simpatizantes, refrendamos nuestro compromiso con los pueblos originarios y su desarrollo con justicia.
        </p>
        
        <p>
          Este fin de semana realizamos una histórica gira por las comunidades de la zona huasteca. La calidez y el respaldo de la gente reafirman que la transformación es un movimiento vivo y latente en cada rincón de nuestro estado.
        </p>
        
        <h2>Un proyecto que nace desde abajo</h2>
        <p>
          No venimos a hacer promesas vacías, venimos a escuchar. Durante las asambleas informativas dialogamos con líderes comunitarios, campesinos y mujeres trabajadoras que durante décadas fueron ignoradas. Nuestro compromiso es garantizar programas sociales directos, mejorar la infraestructura rural y asegurar que los apoyos lleguen sin intermediarios.
        </p>
        
        <blockquote>
          "El poder solo tiene sentido cuando se pone al servicio de los demás. No vamos a fallarles."
        </blockquote>
        
        <p>
          La agenda de trabajo incluyó reuniones con representantes del sector agrícola y un mitin central en la plaza principal, donde miles de voces se unieron en una sola consigna: seguir haciendo historia. Agradezco profundamente la confianza de cada ciudadana y ciudadano que nos abrió las puertas de su comunidad.
        </p>
        
        <h3>Próximos pasos</h3>
        <p>
          Continuaremos nuestro recorrido por el norte del estado la próxima semana. Invitamos a toda la ciudadanía a sumarse a este proyecto de nación que busca el bienestar para todos. ¡Con el pueblo todo, sin el pueblo nada!
        </p>
      </div>
      
      <!-- Share Footer -->
      <div class="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
        <span class="text-gray-500 font-medium">Compartir este artículo:</span>
        <div class="flex gap-4">
          <button class="p-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full transition-colors text-gray-600">
            <Share2 class="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
/* Optional: Adding some typography styles for the article body to make it very clean */
.prose h2 { margin-top: 2em; margin-bottom: 1em; font-weight: 800; font-size: 1.875rem; color: #1a1a1a; }
.prose h3 { margin-top: 1.5em; margin-bottom: 0.75em; font-weight: 700; font-size: 1.5rem; color: #1a1a1a; }
.prose p { margin-bottom: 1.5em; }
.prose blockquote { border-left: 4px solid var(--color-primary); padding-left: 1rem; font-style: italic; color: #4b5563; background: #f9fafb; padding: 1rem; border-radius: 0 0.5rem 0.5rem 0; margin: 2rem 0; }
</style>
