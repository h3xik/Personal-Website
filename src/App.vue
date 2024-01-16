<script setup>
import {onMounted, onUnmounted, ref} from 'vue';

import NavigationComponent from './components/NavigationComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

import '@dotlottie/player-component';
import gsap from '@h3xik/gsap-mod';
import {ScrollTrigger} from '@h3xik/gsap-mod/ScrollTrigger';
import {ScrollSmoother} from '@h3xik/gsap-mod/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Methods
const toggleScroll = () => {
  smoother.paused(!smoother.paused());
  disableMain.value = !disableMain.value;
};

const main = ref();
let smoother;
let ctx;
let disableMain = ref(false);

onMounted(() => {
  ctx = gsap.context(() => {
    smoother = ScrollSmoother.create({
      smooth: 0,
      effects: true,
    });
  }, main.value);
});
onUnmounted(() => {
  ctx.revert();
});
</script>

<template ref="main">
  <NavigationComponent @toggleScroll="toggleScroll"/>
  <div v-bind:class="{ 'disable': disableMain }" id="smooth-content">
    
    <section ref="main">
      <header class="header" data-speed="1.5">
        <h1 class="header__title"><span>this.</span>jiří</h1>
        <h2 class="header__subtitle">Jiří Jurčenko</h2>
        <p class="header__caption">Student, Web Developer, Software Engineer.</p>
      </header>
      


    </section>

    <FooterComponent/>
  </div>
</template>
