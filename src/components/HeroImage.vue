<template>
	<section className="hero__image-container">
		<picture>
			<source srcSet="/images/website/hero.webp" media="(min-width: 600px)" />
			<img
				className="hero__image"
				src="/images/website/hero-mobile.jpg"
				alt="records and headphones"
			/>
		</picture>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
@use '../Sass/typography'

.hero__image-container
    position: relative
    height: 90vh
    z-index: -1

    .hero__image
        position: fixed
        height: 100vh
        width: 100%
        object-fit: cover
        z-index: -1
        opacity: 0.5


@media (max-width: 560px)
    .hero__image-container
        .hero__title
            text-align: center
</style>
