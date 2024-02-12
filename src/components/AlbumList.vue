<template>
	<div class="album__list">
		<Loader v-if="musicStore.loading" />
		<Album
			v-else
			v-for="album in albumsWithImages"
			:key="album.id"
			:album="album"
		/>
	</div>
</template>

<script setup lang="ts">
import Album from './Album.vue';
import Loader from './Loader.vue';
import { useMusicStore } from '../store/music';
import { computed, onMounted } from 'vue';

const musicStore = useMusicStore();

// computed
const albumsWithImages = computed(() => musicStore.getAlbumsWithImages);

// functions
onMounted(async () => {
	if (!musicStore.albums.length) {
		await musicStore.fetchAlbums();
	}
});
</script>

<style scoped lang="sass">
.album__list
    width: 90%
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
    gap: 2em
</style>
