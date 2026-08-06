<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
  ChevronRight, FileText, Search, Grid, 
  Quote, Printer, BookOpen, X, ChevronLeft, Maximize2, Sparkles, Filter 
} from 'lucide-vue-next';
import { REPORT_PAGES, type ReportPage } from '../data/reportData';

// State
const searchQuery = ref('');
const selectedCategory = ref('Todos');
const activeTab = ref<'interactive' | 'gallery' | 'quotes'>('interactive');
const selectedPageModal = ref<ReportPage | null>(null);
const modalPageIndex = ref<number>(0);
const displayLimit = ref(12);

// Categories definition
const categories = [
  'Todos',
  'Mensaje del Regidor',
  'Sesiones de Cabildo',
  'Barush en tu Barrio',
  'Laboratorios Ciudadanos',
  'Educación y Juventud',
  'Cultura, Deporte y Comercio',
  'Gestión y Acción Ciudadana'
];

// Stats
const stats = computed(() => {
  return {
    totalPages: REPORT_PAGES.length,
    sessions: REPORT_PAGES.filter(p => p.category === 'Sesiones de Cabildo').length,
    barushBarrio: REPORT_PAGES.filter(p => p.category === 'Barush en tu Barrio').length,
    labs: REPORT_PAGES.filter(p => p.category === 'Laboratorios Ciudadanos').length,
    quotesCount: REPORT_PAGES.filter(p => p.quote && p.quote.trim().length > 0).length
  };
});

// Filtered Pages
const filteredPages = computed(() => {
  return REPORT_PAGES.filter(page => {
    // Skip page 1 (cover) in grid unless specifically searched
    if (page.page === 1 && !searchQuery.value) return false;

    const matchesCategory = selectedCategory.value === 'Todos' || page.category === selectedCategory.value;
    
    if (!searchQuery.value) return matchesCategory;

    const q = searchQuery.value.toLowerCase().trim();
    const matchesSearch = 
      page.title.toLowerCase().includes(q) ||
      page.body.toLowerCase().includes(q) ||
      page.quote.toLowerCase().includes(q) ||
      page.category.toLowerCase().includes(q) ||
      page.page.toString() === q;

    return matchesCategory && matchesSearch;
  });
});

// Displayed Pages with load more
const displayedPages = computed(() => {
  return filteredPages.value.slice(0, displayLimit.value);
});

const hasMorePages = computed(() => {
  return displayLimit.value < filteredPages.value.length;
});

function loadMore() {
  displayLimit.value += 12;
}

// Quotes list
const quotesList = computed(() => {
  return REPORT_PAGES.filter(p => p.quote && p.quote.trim().length > 0);
});

// Modal handlers
function openModal(page: ReportPage) {
  selectedPageModal.value = page;
  modalPageIndex.value = REPORT_PAGES.findIndex(p => p.page === page.page);
}

function closeModal() {
  selectedPageModal.value = null;
}

function prevModalPage() {
  if (modalPageIndex.value > 0) {
    modalPageIndex.value--;
    selectedPageModal.value = REPORT_PAGES[modalPageIndex.value];
  }
}

function nextModalPage() {
  if (modalPageIndex.value < REPORT_PAGES.length - 1) {
    modalPageIndex.value++;
    selectedPageModal.value = REPORT_PAGES[modalPageIndex.value];
  }
}

function selectCategory(cat: string) {
  selectedCategory.value = cat;
  displayLimit.value = 12;
}

function triggerPrint() {
  window.print();
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-24 text-gray-800">
    
    <!-- Hero Banner for Report -->
    <header class="relative bg-primary pt-32 pb-20 px-4 text-center overflow-hidden print:pt-8 print:pb-8">
      <!-- Background Graphic overlay -->
      <div class="absolute inset-0 bg-[url('/campaign_header.jpg')] bg-cover bg-center opacity-25 mix-blend-luminosity"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary"></div>
      
      <div class="max-w-5xl mx-auto relative z-10">
        <span class="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-secondary text-primary font-bold text-xs md:text-sm mb-6 uppercase tracking-widest shadow-lg">
          <Sparkles class="w-4 h-4" /> Rendición de Cuentas Oficial
        </span>
        <h1 class="text-3xl md:text-6xl font-black text-white mb-4 tracking-tight uppercase leading-tight">
          Segundo Informe de Actividades <br/>
          <span class="text-secondary font-light text-2xl md:text-4xl">Regidor Lic. Edgar Barush Loredo Arizaga</span>
        </h1>
        <div class="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
        <p class="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light leading-relaxed">
          Resultados claros, gestiones comunitarias y compromisos asumidos en el Cabildo para la transformación de Zamora.
        </p>

        <!-- Stats Bar -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10 text-left print:hidden">
          <div class="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
            <div class="text-secondary font-extrabold text-2xl md:text-3xl">{{ stats.totalPages }}</div>
            <div class="text-xs uppercase tracking-wider text-gray-300 font-medium">Páginas de Resultados</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
            <div class="text-secondary font-extrabold text-2xl md:text-3xl">{{ stats.sessions }}</div>
            <div class="text-xs uppercase tracking-wider text-gray-300 font-medium">Sesiones de Cabildo</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
            <div class="text-secondary font-extrabold text-2xl md:text-3xl">{{ stats.barushBarrio }}</div>
            <div class="text-xs uppercase tracking-wider text-gray-300 font-medium">Barush en tu Barrio</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
            <div class="text-secondary font-extrabold text-2xl md:text-3xl">{{ stats.labs }}</div>
            <div class="text-xs uppercase tracking-wider text-gray-300 font-medium">Labs Ciudadanos</div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap justify-center gap-4 print:hidden">
          <button 
            @click="activeTab = 'gallery'" 
            class="inline-flex items-center gap-2 bg-secondary text-primary hover:bg-white px-7 py-3.5 rounded-full font-bold text-base transition-all shadow-[0_0_20px_rgba(198,166,100,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-0.5 cursor-pointer"
          >
            <BookOpen class="w-5 h-5" /> Explorar Visor de Documento
          </button>
          
          <button 
            @click="triggerPrint"
            class="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-6 py-3.5 rounded-full font-bold text-base transition-all backdrop-blur-sm cursor-pointer"
          >
            <Printer class="w-5 h-5" /> Imprimir / PDF
          </button>
        </div>

      </div>
    </header>

    <!-- Main Section Container -->
    <main class="max-w-7xl mx-auto px-4 -mt-6 relative z-20 print:mt-0">
      
      <!-- Navigation Tabs & Search Toolbar -->
      <div class="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-8 border border-gray-100 print:hidden">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          <!-- View Tabs -->
          <div class="flex items-center bg-gray-100 p-1.5 rounded-xl w-full lg:w-auto">
            <button 
              @click="activeTab = 'interactive'"
              :class="[
                'flex-1 lg:flex-initial px-5 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer',
                activeTab === 'interactive' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'
              ]"
            >
              <Grid class="w-4 h-4" /> Informe Interactivo
            </button>
            
            <button 
              @click="activeTab = 'gallery'"
              :class="[
                'flex-1 lg:flex-initial px-5 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer',
                activeTab === 'gallery' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'
              ]"
            >
              <BookOpen class="w-4 h-4" /> Visor de Páginas (84)
            </button>
            
            <button 
              @click="activeTab = 'quotes'"
              :class="[
                'flex-1 lg:flex-initial px-5 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer',
                activeTab === 'quotes' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'
              ]"
            >
              <Quote class="w-4 h-4" /> Citas de Cabildo ({{ stats.quotesCount }})
            </button>
          </div>

          <!-- Search Input -->
          <div class="relative w-full lg:w-80">
            <Search class="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Buscar tema, colonia, sesión..." 
              class="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <button 
              v-if="searchQuery" 
              @click="searchQuery = ''" 
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X class="w-4 h-4" />
            </button>
          </div>

        </div>

        <!-- Categories Filters (Shown in interactive view) -->
        <div v-if="activeTab === 'interactive'" class="mt-5 pt-4 border-t border-gray-100">
          <div class="flex items-center gap-2 mb-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <Filter class="w-3.5 h-3.5" /> Filtrar por categoría:
          </div>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="cat in categories" 
              :key="cat"
              @click="selectCategory(cat)"
              :class="[
                'px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border',
                selectedCategory === cat 
                  ? 'bg-primary text-white border-primary shadow-sm' 
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
              ]"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>

      <!-- TAB 1: INTERACTIVE CONTENT GRID -->
      <div v-if="activeTab === 'interactive'">
        
        <!-- Search/Filter Info -->
        <div v-if="searchQuery || selectedCategory !== 'Todos'" class="mb-6 flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-gray-200 text-sm">
          <span class="text-gray-600">
            Mostrando <strong>{{ filteredPages.length }}</strong> resultados
            <span v-if="selectedCategory !== 'Todos'"> en <strong>{{ selectedCategory }}</strong></span>
            <span v-if="searchQuery"> para "<strong>{{ searchQuery }}</strong>"</span>
          </span>
          <button 
            @click="selectedCategory = 'Todos'; searchQuery = '';" 
            class="text-xs text-primary font-bold hover:underline"
          >
            Limpiar Filtros
          </button>
        </div>

        <!-- Mensaje Especial del Regidor (Page 2 Card) -->
        <div 
          v-if="selectedCategory === 'Todos' && !searchQuery" 
          class="bg-gradient-to-br from-primary to-slate-900 rounded-3xl shadow-xl p-8 md:p-12 mb-10 text-white relative overflow-hidden"
        >
          <div class="absolute right-0 top-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div class="relative z-10 max-w-4xl">
            <span class="inline-block px-3 py-1 bg-secondary text-primary font-black text-xs uppercase tracking-widest rounded-md mb-4">
              Mensaje del Regidor
            </span>
            <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-white">A las y los Zamoranos</h2>
            <div class="w-16 h-1 bg-secondary mb-6"></div>
            <p class="text-gray-200 text-base md:text-lg leading-relaxed mb-6 font-light whitespace-pre-line">
              {{ REPORT_PAGES[1]?.body }}
            </p>
            <div class="flex items-center gap-4 pt-4 border-t border-white/10">
              <img src="/informe_pages/page_2.jpg" alt="Página Mensaje" class="w-14 h-18 object-cover rounded-lg border border-white/20 shadow-md cursor-pointer" @click="openModal(REPORT_PAGES[1])" />
              <div>
                <div class="font-bold text-white">Lic. Edgar Barush Loredo Arizaga</div>
                <div class="text-sm text-secondary font-medium">Regidor del Ayuntamiento de Zamora</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Activities Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="page in displayedPages" 
            :key="page.page"
            class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group"
          >
            <!-- Page Thumbnail Preview -->
            <div class="relative h-56 bg-gray-100 overflow-hidden cursor-pointer" @click="openModal(page)">
              <img 
                :src="page.image" 
                :alt="page.title" 
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
              
              <!-- Badges -->
              <div class="absolute top-3 left-3 flex gap-2">
                <span class="bg-primary/90 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                  Página {{ page.page }}
                </span>
              </div>

              <div class="absolute top-3 right-3">
                <span class="bg-secondary text-primary font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  {{ page.category }}
                </span>
              </div>

              <div class="absolute bottom-3 left-3 right-3 text-white">
                <h3 class="font-bold text-base line-clamp-2 drop-shadow-md text-white group-hover:text-secondary transition-colors">
                  {{ page.title }}
                </h3>
              </div>
            </div>

            <!-- Card Content Body -->
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <!-- Quote Callout if exists -->
                <div v-if="page.quote" class="mb-4 bg-amber-50/80 border-l-4 border-secondary p-3 rounded-r-lg text-xs italic text-amber-900">
                  <Quote class="w-3.5 h-3.5 text-secondary inline mb-1 mr-1" />
                  "{{ page.quote }}"
                </div>

                <p class="text-gray-600 text-sm leading-relaxed line-clamp-4 font-normal whitespace-pre-line mb-4">
                  {{ page.body }}
                </p>
              </div>

              <!-- Card Action Footer -->
              <div class="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <button 
                  @click="openModal(page)"
                  class="text-primary font-bold hover:text-secondary flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Ver Detalle & Documento Original <ChevronRight class="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredPages.length === 0" class="bg-white rounded-2xl shadow-md p-12 text-center max-w-md mx-auto my-12">
          <FileText class="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 class="text-lg font-bold text-gray-700 mb-2">No se encontraron actividades</h3>
          <p class="text-sm text-gray-500 mb-6">Prueba con otra palabra clave o selecciona otra categoría.</p>
          <button 
            @click="selectedCategory = 'Todos'; searchQuery = '';" 
            class="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all"
          >
            Ver Todo el Informe
          </button>
        </div>

        <!-- Load More Button -->
        <div v-if="hasMorePages" class="mt-12 text-center">
          <button 
            @click="loadMore"
            class="px-8 py-3.5 bg-white border border-gray-300 hover:border-primary text-primary font-bold text-sm rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            Cargar más actividades ({{ filteredPages.length - displayLimit }} restantes)
          </button>
        </div>

      </div>

      <!-- TAB 2: DOCUMENT GALLERY / PAGE VIEWER -->
      <div v-if="activeTab === 'gallery'">
        <div class="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200">
            <div>
              <h2 class="text-2xl font-bold text-primary">Visor Completo del Documento (84 Páginas)</h2>
              <p class="text-sm text-gray-500">Haz clic en cualquier página para ampliarla en alta resolución y leer el contenido textual.</p>
            </div>
            <div class="text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-xl">
              Páginas procesadas: 84 / 84
            </div>
          </div>

          <!-- Pages Thumbnail Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div 
              v-for="page in REPORT_PAGES" 
              :key="page.page"
              @click="openModal(page)"
              class="group relative bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-200 cursor-pointer transition-all hover:-translate-y-1"
            >
              <img 
                :src="page.image" 
                :alt="'Página ' + page.page"
                class="w-full h-48 object-cover object-top"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                <Maximize2 class="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div class="p-2 bg-white text-center text-xs font-bold text-gray-700 border-t border-gray-100 truncate">
                Pág. {{ page.page }} - {{ page.title }}
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- TAB 3: CABILDO QUOTES -->
      <div v-if="activeTab === 'quotes'">
        <div class="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <div class="max-w-3xl mb-8">
            <h2 class="text-2xl md:text-3xl font-extrabold text-primary mb-2">Posicionamientos y Frases de Cabildo</h2>
            <p class="text-gray-600">Compromisos, valores y posturas expresadas durante las sesiones del Ayuntamiento de Zamora.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="item in quotesList" 
              :key="item.page"
              class="bg-gradient-to-br from-slate-900 via-primary to-slate-900 text-white rounded-2xl p-6 shadow-lg border border-primary/30 flex flex-col justify-between relative overflow-hidden"
            >
              <div class="absolute right-3 top-3 text-secondary/15">
                <Quote class="w-24 h-24" />
              </div>
              <div class="relative z-10">
                <span class="inline-block px-3 py-1 bg-secondary text-primary font-black text-[10px] uppercase tracking-wider rounded mb-4">
                  Página {{ item.page }} • {{ item.category }}
                </span>
                <blockquote class="text-lg md:text-xl font-serif italic text-gray-100 mb-6 leading-relaxed">
                  "{{ item.quote }}"
                </blockquote>
              </div>
              <div class="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span class="font-bold text-secondary">{{ item.title }}</span>
                <button @click="openModal(item)" class="text-gray-300 hover:text-white underline cursor-pointer">Ver Sesión</button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>

    <!-- FULLSCREEN MODAL LIGHTBOX FOR PAGES -->
    <div 
      v-if="selectedPageModal" 
      class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 print:hidden"
    >
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[92vh] flex flex-col overflow-hidden relative">
        
        <!-- Modal Top Bar -->
        <div class="bg-primary text-white p-4 px-6 flex items-center justify-between border-b border-primary/20">
          <div class="flex items-center gap-3">
            <span class="bg-secondary text-primary font-black text-xs px-3 py-1 rounded">
              Página {{ selectedPageModal.page }} / 84
            </span>
            <h3 class="font-bold text-base md:text-lg truncate max-w-md text-white">
              {{ selectedPageModal.title }}
            </h3>
          </div>
          
          <div class="flex items-center gap-2">
            <button 
              @click="prevModalPage" 
              :disabled="modalPageIndex === 0"
              class="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-lg text-white transition-colors cursor-pointer"
              title="Página Anterior"
            >
              <ChevronLeft class="w-5 h-5" />
            </button>
            <button 
              @click="nextModalPage" 
              :disabled="modalPageIndex === REPORT_PAGES.length - 1"
              class="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-lg text-white transition-colors cursor-pointer"
              title="Página Siguiente"
            >
              <ChevronRight class="w-5 h-5" />
            </button>
            <button 
              @click="closeModal" 
              class="p-2 bg-white/10 hover:bg-red-500 rounded-lg text-white transition-colors cursor-pointer ml-2"
              title="Cerrar"
            >
              <X class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Modal Content (Image + Text split view) -->
        <div class="flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-50">
          
          <!-- High Res Page Image -->
          <div class="flex flex-col items-center justify-center bg-gray-200/60 rounded-xl p-2 border border-gray-300">
            <img 
              :src="selectedPageModal.image" 
              :alt="selectedPageModal.title"
              class="max-h-[68vh] w-auto object-contain rounded-md shadow-md"
            />
          </div>

          <!-- Page Text Details -->
          <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm overflow-y-auto max-h-[68vh]">
            <div class="mb-4">
              <span class="text-xs font-bold text-secondary bg-primary px-3 py-1 rounded-md uppercase tracking-wider">
                {{ selectedPageModal.category }}
              </span>
            </div>
            
            <h2 class="text-2xl font-bold text-primary mb-4">
              {{ selectedPageModal.title }}
            </h2>

            <div v-if="selectedPageModal.quote" class="mb-6 bg-amber-50 border-l-4 border-secondary p-4 rounded-r-xl text-sm italic text-amber-900 shadow-sm">
              <Quote class="w-5 h-5 text-secondary mb-1" />
              "{{ selectedPageModal.quote }}"
            </div>

            <div class="prose prose-sm text-gray-700 leading-relaxed font-normal whitespace-pre-line">
              {{ selectedPageModal.body }}
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
@media print {
  header {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    background: none !important;
    color: black !important;
  }
  header h1 {
    color: black !important;
  }
  header p {
    color: #333 !important;
  }
  .print\:hidden {
    display: none !important;
  }
}
</style>
