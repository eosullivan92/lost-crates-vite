<template>
	<header class="header" :class="{ stuck: sticky }">
		<Nav></Nav>

		<h1 class="header__heading" :class="{ stuck: sticky }">
			The Lost Crates<span class="blue">.</span>
		</h1>

		<button class="header__cart-btn" @click="toggleCart">
			<img src="/icons/icon-shopping-cart.svg" alt="" />
			<span class="cart-items">{{ cartStore.itemCount }}</span>
		</button>
	</header>
</template>

<script setup lang="ts">
import Nav from './Nav.vue';
import { useCartStore } from '../store/cart';
// import { onBeforeUnmount, onMounted, ref } from 'vue';

const cartStore = useCartStore();
const { sticky } = defineProps<{ sticky: boolean }>();

// methods
function toggleCart() {
	cartStore.toggleCart();
}
</script>

<style lang="sass" scoped>
@use '../Sass/palette'
@use '../Sass/typography'

.header
    position: sticky
    top: 0px
    width: 100%
    display: flex
    align-items: center
    justify-content: space-between
    z-index: 2
    transition: background-color 0.3s ease-in
    background-color: transparent

    &.stuck
        padding: 0.5em 0em
        background-color: palette.$secondary
        transition: background-color 0.3s ease-in

    // &.hidden
    //     transform: translate3d(0, -100%, 0)
    //     transition: transform 0.3s ease-in

    .header__heading
        font: 100% typography.$font-hero
        letter-spacing: -5px
        color: palette.$primary
        // opacity: 0
        font-size: 3rem
        transition: opacity 0.4s ease
        transition: font-size 0.4s ease
        &.stuck
            font-size: 2rem
            letter-spacing: -3px
            transition: opacity 0.4s ease
            transition: font-size 0.4s ease

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
        padding: 0px 8px
        cursor: pointer
        position: relative
        margin-right: 5%

        img
            height: 20px
            width: 20px
            filter: invert(10%) sepia(98%) saturate(7385%) hue-rotate(256deg) brightness(82%) contrast(120%)

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
