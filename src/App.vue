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
let smoother, ctx;

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

  <div id="smooth-wrapper" v-bind:class="{ 'disable': disableMain }">
    <div id="smooth-content">
      <header class="header" data-speed="1.5">
        <h1 class="header__title"><span>this.</span>jiří</h1>
        <h2 class="header__subtitle">Jiří Jurčenko</h2>
        <p class="header__caption">Student, Web Developer, Software Engineer.</p>
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
