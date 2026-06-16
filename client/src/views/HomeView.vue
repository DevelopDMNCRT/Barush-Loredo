<template>
  <div class="font-sans antialiased text-gray-900 bg-white selection:bg-primary selection:text-white">
    <Navbar />
    
    <main>
      <HeroSlider />
      <CVSection />
      <BlogSection />
      <ContactSection />
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import HeroSlider from '../components/sections/HeroSlider.vue'
import CVSection from '../components/sections/CVSection.vue'
import BlogSection from '../components/sections/BlogSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
</script>
