<script setup>
import {onMounted, onUnmounted, ref} from 'vue';

import gsap from '@h3xik/gsap-mod';

const main = ref();
let tl, ctx;

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <nav class="navigation" ref="main">
    <ul class="navigation__list">
      <li class="navigation__list__item">
        <a href="#">.Jiří()</a>
      </li>
      <li class="navigation__list__item ml-auto">
        <a href="https://github.com/h3xik">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </li>
      <li class="navigation__list__item">
        <a href="mailto:contact.jiri@pm.me">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
      </li>
    </ul>
  </nav>
</template>
