<script setup>
import { onMounted } from 'vue';
import gsap from '@h3xik/gsap-mod';

import NavigationComponent from './components/NavigationComponent.vue'
</script>

<template>
  <NavigationComponent />

  <div id="smooth-wrapper">
    <div id="smooth-content" class="content-wrapper">
      <header class="header" data-speed="1.5">
        <h1 class="header__title">
          <span class="text-purple">this.</span>jiří
        </h1>
        <h2 class="header__subtitle">Jiří Jurčenko</h2>
        <p class="header__caption">Student, Web Developer, Software Engineer.</p>
      </header>

      <main></main>
    </div>
  </div>
</template>
