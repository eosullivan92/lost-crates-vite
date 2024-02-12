<template>
	<div class="container">
		<Header v-if="showHeader" :sticky="true" />
		<div :class="{ padding: showHeader }" class="store__container">
			<router-view />
		</div>
		<Cart />
	</div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Cart from './components/Cart.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const showHeader = computed(() => {
	return route.path !== '/';
});
</script>

<style lang="sass" scoped>
.container
    height: 100%
    width: 100vw
    padding-bottom: 8em

    .store__container
        display: flex
        flex-direction: column
        justify-content: center
        width: 100%
        &.padding
            padding-top: 8em
</style>
