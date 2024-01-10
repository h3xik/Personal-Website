<script setup>
import {onBeforeUnmount, onMounted, onUnmounted, ref} from 'vue';

import gsap from '@h3xik/gsap-mod';
import { ScrollTrigger } from '@h3xik/gsap-mod/ScrollTrigger';
import { ScrollSmoother } from '@h3xik/gsap-mod/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const main = ref();

let ctx, tl;

onMounted(() => {
  ctx = gsap.context(self => {
    const links = self.selector('.navigation-mobile__item');
    
    tl = gsap
        .timeline()
        .fromTo(
            links[3],
            { x: 130 },
            { x: 0, ease: 'Power4.inOut', duration: 0.3 },
            '>0.2'
        )
        .reverse();
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
	<section ref="main">
		<header class="header" data-speed="1.5">
      <h1 class="header__title"><span>this.</span>jiří</h1>
			<h2 class="header__subtitle">Jiří Jurčenko</h2>
			<p class="header__caption">Student, Web Developer, Software Engineer.</p>
		</header>
    
    <main>
      <p>Web je v přípravě</p>
    </main>
    
    
	</section>
</template>
