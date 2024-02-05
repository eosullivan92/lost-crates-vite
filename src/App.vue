<script setup lang="ts">
import AlbumList from './components/AlbumList.vue';
import Header from './components/Header.vue';
</script>

<template>
	<div class="container">
		<router-view>
			<Header />
			<div class="store__container">
				<AlbumList />
			</div>
		</router-view>
	</div>
</template>

<style lang="sass" scoped>
.container
    min-height: 100vh
    min-width: 100vw

    .store__container
        display: flex
        justify-content: center
        width: 100%
</style>
