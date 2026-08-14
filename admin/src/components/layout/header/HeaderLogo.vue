<template>
  <router-link to="/" class="lg:hidden mx-auto flex justify-center w-full">
    <img class="h-14 sm:h-16 md:h-20 w-auto object-contain mx-auto dark:hidden mix-blend-multiply transition-opacity duration-300" src="/LogoBrush.jpeg" alt="Logo" />
    <img class="h-14 sm:h-16 md:h-20 w-auto object-contain mx-auto hidden dark:block invert grayscale brightness-150 mix-blend-screen transition-opacity duration-300" src="/LogoBrush.jpeg" alt="Logo" />
  </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
