import { defineStore } from 'pinia';
import { AlbumInfo, MusicState } from '../types';
import { music } from '../../public/music-store';
import { images } from '../../public/images-store';

export const useMusicStore = defineStore('music', {
	state: (): MusicState => ({
		albums: [],
		images: images,
		loading: false,
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
	actions: {
		async fetchAlbums() {
			try {
				this.loading = true;
				const response: { data: AlbumInfo[] } = await new Promise((resolve) => {
					setTimeout(() => resolve({ data: music }), 1000); // Simulating async operation with a delay
				});
				this.albums = response.data;
			} catch (error) {
				console.error('Failed to fetch albums:', error);
				// Extend error handling as needed
			} finally {
				this.loading = false; // Set loading to false when fetch completes
			}
		},
	},
});
