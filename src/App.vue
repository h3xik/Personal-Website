<script setup>
import gsap from '@h3xik/gsap-mod';
import {onMounted} from "vue";
import { useTransitionComposable } from './composables/transition-composable';
import NavigationComponent from './components/NavigationComponent.vue';

const { toggleTransitionComplete } = useTransitionComposable();

// Transition Hooks
const onEnter = (el, done) => {
  gsap.set(el, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
  gsap
      .timeline({
        paused: true,
        onComplete() {
          toggleTransitionComplete(true);
          done();
        },
      })
      .to(el, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
      .to(el, { scale: 1, duration: 0.25 })
      .play();
};

const onLeave = (el, done) => {
  toggleTransitionComplete(false);
  gsap
      .timeline({ paused: true, onComplete: done })
      .to(el, { scale: 0.8, duration: 0.2 })
      .to(el, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
      .play();
};

onMounted(() => {
  toggleTransitionComplete(true);
});
</script>

<template>
  <div>
    <NavigationComponent />
    <RouterView v-slot="{ Component }">
      <Transition @enter="onEnter" @leave="onLeave" name="routes" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
