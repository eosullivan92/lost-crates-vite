<template>
	<div class="album__list">
		<Album v-for="album in albumsWithImages" :key="album.id" :album="album" />
	</div>
</template>

<script setup lang="ts">
import Album from './Album.vue';
import { useMusicStore } from '../store/music';

const musicStore = useMusicStore();

//refs
const albumsWithImages = musicStore.getAlbumsWithImages;
</script>

<style scoped lang="sass">
.album__list
    width: 90%
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
    gap: 2em
</style>
