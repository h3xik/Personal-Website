<script setup>
import gsap from '@h3xik/gsap-mod';
import { ScrollTrigger } from '@h3xik/gsap-mod/ScrollTrigger';
import { ScrollSmoother } from '@h3xik/gsap-mod/ScrollSmoother';
import { ScrollToPlugin } from '@h3xik/gsap-mod/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

import { onMounted, onUnmounted, ref } from 'vue';
import { useTransitionComposable } from './composables/transition-composable';
import NavigationComponent from './components/NavigationComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

const { toggleTransitionComplete } = useTransitionComposable();

const onEnter = (el, done) => {
	gsap.set(el, { autoAlpha: 0, scale: 0.8 });
	gsap.timeline({
		paused: true,
		onComplete() {
			toggleTransitionComplete(true);
			done();
		},
	})
		.to(el, { autoAlpha: 1, scale: 1, duration: 0.25 })
		.play();
};

const onLeave = (el, done) => {
	toggleTransitionComplete(false);
	gsap.timeline({ paused: true, onComplete: done })
		.to(el, { scale: 0.8, autoAlpha: 0, duration: 0.2 })
		.play();
};

// Methods
const toggleScroll = () => {
	smoother.paused(!smoother.paused());
  toggleBlur.value = !toggleBlur.value;
};

const main = ref();
let smoother;
let ctx;
let toggleBlur = ref(false);

onMounted(() => {
	toggleTransitionComplete(true);
	ctx = gsap.context(() => {
		smoother = ScrollSmoother.create({
			smooth: 1,
			effects: true,
		});
	}, main.value);
});
onUnmounted(() => {
	ctx.revert();
});
</script>

<template>
	<NavigationComponent @toggleScroll="toggleScroll" />
	<div id="smooth-wrapper" ref="main">
		<div id="smooth-content" v-bind:class="{ 'blur-10px': toggleBlur }">
			<RouterView v-slot="{ Component }">
				<Transition
					@enter="onEnter"
					@leave="onLeave"
					name="routes"
					mode="out-in"
				>
					<component :is="Component" />
				</Transition>
			</RouterView>
			<FooterComponent />
		</div>
	</div>
</template>
