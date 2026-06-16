<template>
  <section id="cv" class="py-24 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Photo -->
        <div class="w-full lg:w-5/12 relative">
          <div class="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-gray-200">
            <!-- Placeholder for Candidate Photo -->
            <div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold uppercase tracking-widest text-xl">
              [Foto del Candidato]
            </div>
          </div>
          <!-- Decorative box -->
          <div class="absolute -bottom-6 -right-6 w-full h-full bg-primary rounded-2xl z-0 opacity-20"></div>
        </div>

        <!-- Content -->
        <div class="w-full lg:w-7/12">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-1 bg-primary"></div>
            <h3 class="text-primary font-bold tracking-widest uppercase">Trayectoria</h3>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter">Preparado para gobernar con resultados</h2>
          
          <div class="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
            <p>
              Nacido y criado en nuestro municipio, entiendo las necesidades de nuestra gente porque las vivo todos los días. Mi compromiso no nace de la política tradicional, sino del trabajo duro y el deseo de ver prosperar a nuestras familias.
            </p>
            <p>
              Durante los últimos años, he dedicado mi vida profesional a generar empleos, impulsar programas de apoyo social y escuchar a cada ciudadano en cada colonia y comunidad.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 class="font-bold text-xl text-gray-900 mb-2">Educación</h4>
              <p class="text-gray-600">Licenciatura en Administración Pública y Ciencias Políticas, con honores.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 class="font-bold text-xl text-gray-900 mb-2">Experiencia</h4>
              <p class="text-gray-600">Más de 15 años de servicio en la gestión de recursos y programas de desarrollo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
