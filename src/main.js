import 'unfonts.css';

import gsap from '@h3xik/gsap-mod';
import {ScrollTrigger} from '@h3xik/gsap-mod/ScrollTrigger';
import {ScrollSmoother} from '@h3xik/gsap-mod/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


let smoother, ctx, tlStars, tlHeader, lights;

ctx = gsap.context(() => {
    smoother = ScrollSmoother.create({
        smooth: 0,
        effects: true,
    });

    const starLayers = document.querySelectorAll('.star-layer');
    tlStars = gsap
        .timeline({repeat: -1})
        .to(starLayers[0], {y: -1000, duration: 170}, 0)
        .to(starLayers[1], {y: -1000, duration: 125}, 0);
    tlHeader = gsap
        .timeline()
        .from(document.querySelector('.header__headings'), {y: 30, opacity: 0, ease: "power4.inOut", duration: 0.5}, 0)
});

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