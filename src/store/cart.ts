// stores/cart.js
import { defineStore } from 'pinia';
import { CartPayload, CartState } from '../types';

export const useCartStore = defineStore('cart', {
	state: (): CartState => ({
		cartItems: [],
		isCartVisible: false,
	}),
	getters: {
		itemCount: (state) => state.cartItems.length,
		totalPrice: (state) =>
			state.cartItems.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			),
		itemQuantity: (state) => (itemId: number) => {
			const item = state.cartItems.find((item) => item.id === itemId);
			// If the item exists, return its quantity; otherwise, return 0
			return item ? item.quantity : 0;
		},
	},
	actions: {
		toggleCart() {
			this.isCartVisible = !this.isCartVisible;
		},
		addToCart(item: CartPayload) {
			const existingItem = this.cartItems.find(
				(cartItem) => cartItem.id === item.id
			);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				this.cartItems.push({ ...item, quantity: 1 });
			}
		},
		removeFromCart(itemId: number) {
			const index = this.cartItems.findIndex(
				(cartItem) => cartItem.id === itemId
			);
			if (index !== -1) {
				this.cartItems.splice(index, 1);
			}
		},
		updateItemQuantity(itemId: number, quantity: number) {
			const updated = this.cartItems.map((item) =>
				item.id === itemId
					? { ...item, quantity: item.quantity + quantity }
					: item
			);
			this.cartItems = updated;
		},
		clearCart() {
			this.cartItems = [];
		},
	},
});
