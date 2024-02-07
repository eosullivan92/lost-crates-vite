<template>
	<header class="header" :class="{ hidden: !showNavbar }">
		<Nav></Nav>

		<h1 class="header__heading">The Lost Crates<span class="blue">.</span></h1>

		<button class="header__cart-btn" @click="toggleCart">
			<img src="/icons/icon-shopping-cart.svg" alt="" />
			<span class="cart-items">{{ cartStore.itemCount }}</span>
		</button>
	</header>
</template>

<script setup lang="ts">
import Nav from './Nav.vue';
import { useCartStore } from '../store/cart';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const cartStore = useCartStore();

// refs
const showNavbar = ref(true);
const lastScrollPosition = ref(0);

// methods
function toggleCart() {
	cartStore.toggleCart();
}

// methods
function onScroll() {
	// Get the current scroll position
	const currentScrollPosition =
		window.scrollY || document.documentElement.scrollTop;
	// Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
	if (currentScrollPosition < 0) {
		return;
	}
	if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
		return;
	}
	// Here we determine whether we need to show or hide the navbar
	showNavbar.value = currentScrollPosition < lastScrollPosition.value;
	// Set the current scroll position as the last scroll position
	lastScrollPosition.value = currentScrollPosition;
}
// hooks
onMounted(() => {
	window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
	window.removeEventListener('scroll', onScroll);
});
</script>

<style lang="sass" scoped>
@use '../Sass/palette'
@use '../Sass/typography'

.header
    position: fixed
    top: 0px
    width: 100%
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0.5em 0em
    z-index: 2
    transition: transform 0.3s ease-in
    background-color: palette.$secondary

    &.hidden
        transform: translate3d(0, -100%, 0)
        transition: transform 0.3s ease-in

    .header__heading
        font: 100% typography.$font-hero
        font-size: 3rem
        letter-spacing: -5px
        color: palette.$primary
        // opacity: 0
        transition: opacity 0.3s ease-in
        &--active
            opacity: 1

        span
            color: palette.$tertiary

        .header__nav-btn
            outline-color: palette.$darker-grey
            background: none
            cursor: pointer
            border: none

            img
                height: 30px
                width: 30px

    .header__cart-btn
        border: 1.5px solid palette.$primary
        outline-color: palette.$primary
        background: none
        border-radius: 50%
        aspect-ratio: 1/1
        padding: 0px 12px
        cursor: pointer
        position: relative
        margin-right: 5%

        img
            height: 25px
            width: 25px
            filter: invert(25%) sepia(27%) saturate(394%) hue-rotate(348deg) brightness(93%) contrast(85%)

        .cart-items
            background: palette.$tertiary
            border-radius: 50%
            color: palette.$lightest-grey
            min-width: 15px
            min-height: 15px
            position: absolute
            bottom: 0px
            right: 0px
            aspect-ratio: 1/1
            transform: translate(25%, 25%)

@media (max-width: 400px)
    .header
        .header__heading-container
            .header__heading
                font: 100% typography.$font-hero
</style>
