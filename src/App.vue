<script setup lang="ts">
import Header from './components/Header.vue';
import Cart from './components/Cart.vue';
</script>

<template>
	<div class="container">
		<Header />
		<div class="store__container">
			<router-view />
		</div>
		<Cart />
	</div>
</template>

<style lang="sass" scoped>
.container
    height: 100%
    width: 100vw
    padding-bottom: 8em

    .store__container
        display: flex
        justify-content: center
        width: 100%
        padding-top: 8em
</style>
