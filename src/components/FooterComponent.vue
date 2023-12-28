<script setup></script>

<template>
	<footer class="footer">
		<lottie-player
			class="footer__lottie--ft"
			src="https://assets8.lottiefiles.com/packages/lf20_jpxsQh.json"
			speed="1"
			style="width: 300px; height: 300px"
			loop
			autoplay
		></lottie-player>
		<h4 class="footer__title">Vytvořeno s pomocí:</h4>
		<ul class="footer__list footer__list--main">
			<li>
				<ul class="footer__list footer__list--secondary">
					<li class="footer__list__title">this.{}</li>
					<li class="footer__mb--xs">HTML, CSS, JS</li>
					<li class="footer__list--last">GSAP 3</li>
				</ul>
			</li>
			<li>
				<ul class="footer__list footer__list--secondary">
					<li class="footer__list__title">~</li>
					<li class="footer__mb--xs">Google Fonts</li>
					<li class="footer__mb--xs">RealtimeColors.com</li>
					<li class="footer__mb--xs">Ionicons.com</li>
					<li class="footer__list--last">Lottiefiles.com</li>
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
			<ion-icon class="ion-center c-white" name="heart"></ion-icon>
			vytvořil Jiří Jurčenko.
		</p>
	</footer>
</template>
