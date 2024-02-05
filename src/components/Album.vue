<template>
	<div
		class="album"
		@mouseover="hover = true"
		@mouseleave="hover = false"
		@click="addItemToCart(album)"
	>
		<img
			:src="album.images[0]"
			:alt="`Image for ${album.album} by ${album.artist}`"
			class="album__image"
		/>
		<div class="album__hover-card" :class="{ active: hover }">
			<div class="album_hover-card-content">
				<h2>{{ album.album }}</h2>
				<p>{{ album.artist }}</p>
				<p>{{ album.genre }}</p>
			</div>
			<div class="album_hover-card-price">
				<p>${{ album.price }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AlbumWithImage } from '../types';
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();
const { album } = defineProps<{ album: AlbumWithImage }>();

//refs
const hover = ref(false);

// functions
const addItemToCart = (item: AlbumWithImage) => {
	console.log('hi');
	const { id, album, artist, price } = item;
	cartStore.addToCart({ id, album, artist, price });
};
</script>

<style scoped lang="sass">
.album
    height: 100%
    width: 100%
    position: relative

    .album__image
        height: 100%
        width: 100%
        object-fit: cover

    .album__hover-card
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        display: flex
        justify-content: space-between
        padding: 1em
        background: rgba(0, 0, 0, 0.6)
        color: white
        opacity: 0
        transition: opacity 0.3s ease
        &.active
            opacity: 1
            cursor: pointer

        .album_hover-card-content
            display: flex
            flex-direction: column
            justify-content: flex-end

            h2
                font-size: 18px
                padding: 0em
                margin: 0em

            p
                margin: 0em
                padding: 0em
                font-size: 14px

        .album_hover-card-price
            display: flex
            flex-direction: column
            justify-content: flex-end

            p
                margin: 0em
                padding: 0em
                font-size: 18px
                font-weight: 700
</style>
