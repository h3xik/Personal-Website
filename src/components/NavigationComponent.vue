<script setup>
import {onUnmounted, ref} from 'vue';

const main = ref();
let ctx;

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
        <a href="https://github.com/h3xik" aria-label="My GitHub profile">
          <ion-icon name="logo-github" aria-hidden="true"></ion-icon>
        </a>
      </li>
      <li class="navigation__list__item">
        <a href="mailto:contact.jiri@pm.me" aria-label="Send me an email">
          <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
        </a>
      </li>
    </ul>
  </nav>
</template>
