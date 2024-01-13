<script setup lang="ts">
import '@dotlottie/player-component';
</script>

<template>
	<footer class="footer">
    <dotlottie-player
        class="footer__lottie"
        src="https://lottie.host/7524b2dc-1b44-431d-9b36-9c8e19675f6f/Qv7gutcirl.lottie"
        loop
        autoplay
        loading="lazy"
    />
    
		<h4 class="footer__title">Vytvořeno s pomocí:</h4>
		<ul class="footer__list footer__list--main">
			<li>
				<ul class="footer__list footer__list--secondary">
					<li class="footer__list__title">this.{}</li>
					<li class="footer__mb&#45;&#45;xs">HTML, SCSS</li>
					<li class="footer__mb&#45;&#45;xs">Vue 3</li>
					<li class="footer__list&#45;&#45;last">GSAP 3</li>
				</ul>
			</li>
			<li>
				<ul class="footer__list footer__list--secondary">
					<li class="footer__list__title">~</li>
					<li class="footer__mb">Google Fonts</li>
					<li class="footer__mb">Ionicons.com</li>
					<li class="footer__list footer__list--last">Lottiefiles.com</li>
				</ul>
			</li>
			<li>
				<ul class="footer__list footer__list--secondary">
					<li class="footer__list__title">Speciální poděkování</li>
					<li class="footer__list--last">
						Kočičkám.
						<ion-icon
							name="logo-octocat"
							class="ion-center"
						></ion-icon>
					</li>
				</ul>
			</li>
		</ul>
		<p class="footer__text">
			S
			<ion-icon class="ion-center" name="heart"></ion-icon>
			vytvořil Jiří Jurčenko.
		</p>
	</footer>
</template>
