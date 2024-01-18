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
let disableMain = ref(false);
let smoother, ctx, tlStars, tlHeader;
let lights;

onMounted(() => {
  ctx = gsap.context((self) => {
    smoother = ScrollSmoother.create({
      smooth: 0,
      effects: true,
    });

    const starLayers = self.selector('.star-layer');
    tlStars = gsap
        .timeline({repeat: -1})
        .to(starLayers[0], {y: -1000, duration: 170}, 0)
        .to(starLayers[1], {y: -1000, duration: 125}, 0);

    tlHeader = gsap
        .timeline()
        .from(self.selector('.header__headings'), {y: 30, opacity: 0, ease: "power4.inOut", duration: 1.5}, 0.2)
  }, main.value);

  document.querySelector('.lights').innerHTML = '<div class="light"></div>'.repeat(30);

  lights = document.querySelectorAll('.light');
  lights.forEach((light) => {
    const duration = gsap.utils.random(6, 15);
    const delay = gsap.utils.random(4, 10);
    const x = gsap.utils.random(0, 5);
    const y = gsap.utils.random(0, 10);
    const scale = gsap.utils.random(0.005, 0.1);

    light.style.setProperty('--duration', duration);
    light.style.setProperty('--delay', delay);
    light.style.setProperty('--x', x);
    light.style.setProperty('--y', y);
    light.style.setProperty('--scale', scale);
  });
});
onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <NavigationComponent @toggleScroll="toggleScroll"/>

  <div id="smooth-wrapper" v-bind:class="{ 'disable': disableMain }" ref="main">
    <div id="smooth-content">
      <header class="header">
        <hgroup class="header__headings">
          <h1 class="header__title" data-speed="1.2"><span>this.</span>jiří</h1>
          <h2 class="header__subtitle" data-speed="1.3">Jiří Jurčenko</h2>
          <p class="header__caption" data-speed="1.5">Student, Web Developer, Software Engineer.</p>
        </hgroup>

        <div class="star-wrapper" data-speed="1.2">
          <div class="star-layer star-layer--1"></div>
          <div class="star-layer star-layer--2"></div>
        </div>

        <div class="scene">
          <div class="lights"></div>
        </div>
      </header>

      <main>
        <article>
          <h3>O mně</h3>
          <p>
            Je mi 17, žiju v České republice a rád tvořím software. Svůj zájem o programování jsem objevil už na
            základní škole, kde jsem si oblíbil využívání své kreativity k vytváření webových stránek. Teď studuji druhý
            ročník SPSŠE v Liberci a i když je to při studiu občas výzva, na programování si čas najdu vždycky. To, co
            mě drží na této cestě, je, že vždy najdu nadšení v učení nových věcí, technologií a v řešení neznámých
            výzev.
            Kromě programování se zajímám i o správu sítí, serverů a celkově hardware.</p>
        </article>

        <article>
          <h3>Skillset</h3>

          <div class="skillset">
            <span>Vue 3</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Sass</span>
            <span>Vite</span>
            <span>Git</span>
            <span>Jira</span>
            <span>GitHub Pages</span>
            <span>GSAP</span>
            <span>GitHub</span>
            <span>C# (.NET)</span>
            <span>Razor Pages</span>
            <span>EF Core</span>
            <span>Python</span>
            <span>Netlify</span>
          </div>
        </article>
      </main>

      <footer>
        <FooterComponent/>
      </footer>
    </div>
  </div>
</template>
