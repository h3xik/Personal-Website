<script setup>
import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import gsap from '@h3xik/gsap-mod';

const main = ref();
let tl;
let ctx;

const route = useRoute();
const activeRoute = ref('');

let isMainActive = false;
let isAboutActive = false;

/*watchEffect(() => {
	activeRoute.value = route.path;

	switch (activeRoute.value) {
		case '/':
			isMainActive = true;
			break;
		case '/about':
			isAboutActive = true;
			break;
	}
});*/

const showMenu = function () {
	tl.reversed(!tl.reversed());
};

onMounted(() => {
	ctx = gsap.context(self => {
		const links = self.selector('.navigation-mobile__item');
		tl = gsap
			.timeline()
			.from(links[3], { x: 130, duration: 0.3, ease: 'power1.out' })
			.from(links[2], { x: 130, duration: 0.3, ease: 'power2' }, '>0.2')
			.from(links[1], { x: 130, duration: 0.3, ease: 'power1.out' }, '>0.2')
			.from(links[0], { x: 130, duration: 0.3, ease: 'power1.out' }, '>0.2')
			.reverse();
	}, main.value);
});

onUnmounted(() => {
	ctx.revert();
});
</script>

<template>
	<nav class="navigation" ref="main">
		<ul class="navigation__list">
			<li class="navigation__list__item">
				<a href="index.html" class="logo">.Jiří()</a>
			</li>
			<li class="navigation__list__item">
				<button
					aria-label="Navigation menu"
					id="navigationMenuButton"
					@click="
						$emit('toggleScroll');
						showMenu();
					"
				>
					<ion-icon name="menu" aria-hidden="true"></ion-icon>
				</button>

				<ul class="navigation-mobile" id="navigationList">
					<li class="navigation-mobile__item">
						<RouterLink
							to="/"
							@click="
								$emit('toggleScroll');
								showMenu();
							"
						>
							.Jiří
						</RouterLink>
					</li>
					<li class="navigation-mobile__item">
						<RouterLink
							to="/about"
							@click="
								$emit('toggleScroll');
								showMenu();
							"
							>.about
						</RouterLink>
					</li>
					<li class="navigation-mobile__item">
						<a
							href="mailto: jx.jiri@pm.me"
							@click="
								$emit('toggleScroll');
								showMenu();
							"
							>.email</a
						>
					</li>
					<li class="navigation-mobile__item">
						<a href="https://github.com/h3xik">
							<ion-icon
								name="logo-github"
								@click="
									$emit('toggleScroll');
									showMenu();
								"
							></ion-icon>
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>
