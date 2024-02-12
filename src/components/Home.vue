<template>
	<HeroImage />
	<span ref="headerRef"></span>
	<Header :sticky="isSticky" />

	<div class="parralax"></div>
</template>

<script setup lang="ts">
import HeroImage from './HeroImage.vue';
import Header from './Header.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const headerRef = ref(null);
const isSticky = ref(false);

const handleScroll = () => {
	// Define the point at which the header becomes sticky
	// For example, the height of the hero image or a specific scroll position
	if (!headerRef.value) return;

	//@ts-ignore
	const { top } = headerRef.value.getBoundingClientRect();

	if (top < 0) {
		isSticky.value = true;
	} else {
		isSticky.value = false;
	}
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="sass" scoped>
@use '../Sass/palette'
.parralax
    height: 300vh
    background-color: palette.$secondary
</style>
