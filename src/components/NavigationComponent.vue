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
        <a href="index.html" class="logo">.Jiří()</a>
      </li>
      <li class="navigation__list__item navigation__list__item--2">
        <a href="https://github.com/h3xik">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </li>
      <li class="navigation__list__item">
        <a href="">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
      </li>
    </ul>
  </nav>
</template>
