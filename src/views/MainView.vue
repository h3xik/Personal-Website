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
    
/*    tl = gsap
        .timeline()
        .from(
            ".header",
            { y: "+=50" },
        )
        .reverse();*/
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
    
    <main class="vpriprave">
      <p>Web je v <span>přípravě</span>.</p>
      <dotlottie-player
          class="vpriprave__lottie"
          src="https://lottie.host/78bdf20e-d4a2-43a9-af27-0b178c6fb7f5/LmwwozTi1I.lottie"
          autoplay
      />
    </main>
    
    
	</section>
</template>
