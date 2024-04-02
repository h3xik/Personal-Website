import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import gsap from '@h3xik/gsap-mod';

const swiper = new Swiper(".swiper", {
    loop: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.querySelector('.lights').innerHTML = '<div class="light"></div>'.repeat(30);

const lights = document.querySelectorAll('.light');
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
