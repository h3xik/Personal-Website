<script setup></script>

<template>
	<nav class="navigation">
		<ul class="navigation__list">
			<li class="navigation__list__item">
				<a href="index.html">.Jiří()</a>
			</li>
			<li class="navigation__list__item">
				<button
					aria-label="Navigation menu"
					id="navigationMenuButton"
					@click="console.log('aa')"
				>
					<ion-icon
						name="menu"
						aria-hidden="true"
					></ion-icon>
				</button>
			</li>
		</ul>
	</nav>
</template>
