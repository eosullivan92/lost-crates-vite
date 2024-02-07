import { defineStore } from 'pinia';
import { MusicState } from '../types';
import { music } from '../../public/music-store';
import { images } from '../../public/images-store';

export const useMusicStore = defineStore('music', {
	state: (): MusicState => ({
		albums: music,
		images: images,
	}),
	getters: {
		getAlbumsWithImages: (state) => {
			return state.albums.map((album) => {
				const albumImages = state.images
					.filter((img) => img.product_id === album.id)
					.map((img) => img.path);

				return {
					...album,
					images: albumImages,
				};
			});
		},
		getAlbumById: (state) => {
			return (productId: number) => {
				const album = state.albums.find((album) => album.id === productId);
				const images = state.images
					.filter((image) => image.product_id === productId)
					.map((img) => img.path);
				return { ...album, images };
			};
		},
	},
});
