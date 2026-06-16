<template>
  <router-link to="/" class="lg:hidden mx-auto flex justify-center w-full">
    <img class="dark:hidden h-14 sm:h-16 md:h-20 w-auto object-contain mx-auto" src="/LogoBrush.jpeg" alt="Logo" />
    <img class="hidden dark:block h-14 sm:h-16 md:h-20 w-auto object-contain mx-auto" src="/LogoBrush.jpeg" alt="Logo" />
  </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
