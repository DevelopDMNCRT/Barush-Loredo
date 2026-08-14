<script setup lang="ts">
import { FileText } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-light">
    <!-- Header Page -->
    <section class="relative bg-primary pt-32 pb-20 px-4 text-center overflow-hidden">
      <div class="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
      <div class="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <FileText class="w-16 h-16 text-white mb-6 opacity-90" />
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase drop-shadow-md">Términos de Uso</h1>
        <div class="w-24 h-1.5 bg-secondary mx-auto shadow-sm"></div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 text-gray-700 leading-relaxed space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, por favor, no utilice nuestro sitio web.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">2. Uso del Sitio</h2>
          <p class="mb-4">
            El contenido de las páginas de este sitio web es para su información general y uso exclusivo. Está sujeto a cambios sin previo aviso. Ni nosotros ni terceros ofrecemos garantía alguna sobre la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio web para un propósito particular.
          </p>
          <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Usted reconoce que dicha información y materiales pueden contener inexactitudes o errores, y nosotros excluimos expresamente la responsabilidad por cualquier inexactitud o error en la máxima medida permitida por la ley.</li>
            <li>El uso de cualquier información o material en este sitio web es bajo su propio riesgo, y no seremos responsables por ello.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">3. Propiedad Intelectual</h2>
          <p>
            Este sitio web contiene material que es de nuestra propiedad o del cual tenemos licencia. Este material incluye, pero no se limita a, el diseño, la disposición, el aspecto, la apariencia y los gráficos. La reproducción está prohibida, excepto de acuerdo con el aviso de derechos de autor, que forma parte de estos términos y condiciones.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">4. Enlaces a Otros Sitios Web</h2>
          <p>
            De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para su conveniencia para proporcionar más información. No significan que respaldamos los sitios web. No tenemos ninguna responsabilidad por el contenido de los sitios web enlazados.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">5. Ley Aplicable</h2>
          <p>
            El uso de este sitio web y cualquier disputa que surja de dicho uso del sitio web está sujeto a las leyes vigentes en México.
          </p>
        </div>

        <div class="pt-8 border-t border-gray-200 text-sm text-gray-500 text-center">
          Última actualización: {{ new Date().toLocaleDateString('es-MX') }}
        </div>
      </div>
    </section>
  </div>
</template>
