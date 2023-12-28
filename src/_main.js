import { createApp } from 'vue';
import App from './App.vue';

import gsap from '@h3xik/gsap-mod';
import { ScrollTrigger } from '@h3xik/gsap-mod/ScrollTrigger';
import { ScrollToPlugin } from '@h3xik/gsap-mod/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

createApp(App).mount('#VueApp')

