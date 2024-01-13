<script setup>
import { onUnmounted, ref, watch } from 'vue';
import gsap from '@h3xik/gsap-mod';

import { useTransitionComposable } from '../composables/transition-composable';

const { transitionState } = useTransitionComposable();
const main = ref();
let ctx;

watch(
    [() => transitionState.transitionComplete, main],
    (newValue) => {
      if (newValue && main.value) {
        ctx = gsap.context((self) => {
          const boxes = self.selector('.box');
          boxes.forEach((box) => {
            gsap.to(box, {
              x: 150,
              scrollTrigger: {
                trigger: box,
                start: 'bottom bottom',
                end: 'top 20%',
                scrub: true,
              },
            });
          });
        }, main.value); // <- Scope!
      }
    },
    {
      immediate: true,
    }
);

/*onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});*/
</script>

<template>
  <main class="vpriprave mt-m">
    <p>Web je v <span>přípravě</span>.</p>
    <dotlottie-player
        class="vpriprave__lottie"
        src="https://lottie.host/78bdf20e-d4a2-43a9-af27-0b178c6fb7f5/LmwwozTi1I.lottie"
        autoplay
    />
  </main>
</template>
