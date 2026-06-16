<template>
  <footer class="bg-[#1a1a1a] text-white pt-16 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
        <div>
          <h3 class="text-3xl font-black text-primary mb-4 tracking-tighter">CANDIDATO</h3>
          <p class="text-gray-400">Trabajando juntos por un municipio mejor. Tu voz importa y juntos haremos el cambio que necesitamos.</p>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-4 uppercase tracking-wider">Enlaces Rápidos</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#inicio" class="hover:text-primary transition-colors">Inicio</a></li>
            <li><a href="#cv" class="hover:text-primary transition-colors">Conóceme</a></li>
            <li><a href="#noticias" class="hover:text-primary transition-colors">Noticias</a></li>
            <li><a href="#contacto" class="hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-4 uppercase tracking-wider">Contacto</h4>
          <ul class="space-y-2 text-gray-400">
            <li>info@candidato.com</li>
            <li>+52 123 456 7890</li>
            <li>Palacio Municipal, Centro</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Candidato a Presidencia Municipal. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>
