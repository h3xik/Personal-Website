import { createApp } from 'vue';
import gsap from '@h3xik/gsap-mod';
import { ScrollTrigger } from '@h3xik/gsap-mod/ScrollTrigger';
import { ScrollToPlugin } from '@h3xik/gsap-mod/ScrollToPlugin';
import { ScrollSmoother } from "@h3xik/gsap-mod/ScrollSmoother";

import App from './App.vue';
import router from './router';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

createApp(App).use(router).mount('#VueApp');
