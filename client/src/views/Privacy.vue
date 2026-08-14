<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-light">
    <!-- Header Page -->
    <section class="relative bg-primary pt-32 pb-20 px-4 text-center overflow-hidden">
      <div class="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
      <div class="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <ShieldCheck class="w-16 h-16 text-white mb-6 opacity-90" />
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase drop-shadow-md">Aviso de Privacidad</h1>
        <div class="w-24 h-1.5 bg-secondary mx-auto shadow-sm"></div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 text-gray-700 leading-relaxed space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">1. Identidad y Domicilio del Responsable</h2>
          <p>
            Edgar Barush Loredo Arizaga, con domicilio de enlace en Cristobal Colón Poniente #202, col Centro, CP 59653, Zamora Mich. (en adelante, "el Responsable"), es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">2. Finalidad del Tratamiento de Datos Personales</h2>
          <p class="mb-4">Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para la relación y comunicación que establecemos con la ciudadanía:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Responder a mensajes, comentarios y solicitudes de información enviadas a través de nuestros canales de contacto.</li>
            <li>Proporcionar información sobre propuestas, actividades, eventos y avances del proyecto político.</li>
            <li>Mantener un registro estadístico interno para mejorar nuestros canales de comunicación con la población.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">3. Datos Personales Recabados</h2>
          <p class="mb-4">Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Nombre completo.</li>
            <li>Correo electrónico.</li>
            <li>Número telefónico (incluyendo WhatsApp).</li>
            <li>Opciones y mensajes libres proporcionados en formularios de contacto.</li>
          </ul>
          <p class="mt-4 text-sm text-gray-500 italic">No recabamos datos personales sensibles que requieran especial protección.</p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">4. Transferencia de Datos Personales</h2>
          <p>
            Le informamos que sus datos personales no serán compartidos con ninguna autoridad, empresa, organización o persona distinta a nosotros y serán utilizados exclusivamente para los fines señalados, salvo en los casos que la ley así lo exija mediante requerimiento judicial formal.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">5. Derechos ARCO</h2>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
          </p>
          <p class="mt-4">
            Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través de nuestro correo de contacto o número de enlace publicado en el sitio web.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">6. Modificaciones al Aviso de Privacidad</h2>
          <p>
            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales, de nuestras propias necesidades operativas, o por otras causas. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad a través de este mismo portal de internet.
          </p>
        </div>

        <div class="pt-8 border-t border-gray-200 text-sm text-gray-500 text-center">
          Última actualización: {{ new Date().toLocaleDateString('es-MX') }}
        </div>
      </div>
    </section>
  </div>
</template>
