<script setup>
import {onBeforeUnmount, onMounted, onUnmounted, ref} from 'vue';
import gsap from '@h3xik/gsap-mod';

const main = ref();
/*const isUnmounted = ref(false);
let ctx;

onBeforeUnmount(() => {
  isUnmounted.value = true;
});

onUnmounted(() => {
	ctx.revert(); // <- Easy Cleanup!
});*/
</script>

<template>
	<section class="boxes-container" ref="main">
		<header class="header" data-speed="1.5">
			<h1 class="header__title"><span class="text-purple">this.</span>jiří</h1>
			<h2 class="header__subtitle">Jiří Jurčenko</h2>
			<p class="header__caption">Student, Web Developer, Software Engineer.</p>
		</header>
	</section>
</template>
