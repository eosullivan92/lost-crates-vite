export interface AlbumInfo {
	id: number;
	artist: string;
	album: string;
	year: string;
	genre: string;
	description: string;
	price: number;
	quantity: string;
	stripe_product_id: string;
	stripe_price_id: string;
}

export interface AlbumImages {
	product_id: number;
	product_type: string;
	path: string;
}

export interface AlbumWithImage extends AlbumInfo {
	images: (string | undefined)[];
}

export interface MusicState {
	albums: AlbumInfo[];
	images: AlbumImages[];
}

export interface CartPayload {
	id: number;
	artist: string;
	album: string;
	price: number;
}

export interface CartItem extends CartPayload {
	quantity: number;
}

export interface CartState {
	cartItems: CartItem[];
	isCartVisible: boolean;
}
