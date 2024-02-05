<template>
	<div class="album__list">
		<Album v-for="album in albumsWithImages" :key="album.id" :album="album" />
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Album from './Album.vue';
import { music } from '../../public/music-store';
import { images } from '../../public/images-store';
import { AlbumInfo, AlbumImages } from '../types';

//refs
const albums = ref<AlbumInfo[]>(music);
const imgs = ref<AlbumImages[]>(images);

// computed
const albumsWithImages = computed(() => {
	return albums.value.map((album) => {
		// Find the image that matches the album by id
		const images = imgs.value.map((img) =>
			img.product_id === album.id ? img.path : undefined
		);

		const filteredImages = images.filter((image) => image !== undefined);
		// Return a new object that combines the album info with its image
		return {
			...album,
			images: filteredImages,
		};
	});
});
</script>

<style scoped lang="sass">
.album__list
    width: 90%
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
    gap: 2em
</style>
