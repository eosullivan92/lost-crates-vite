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
			const item = this.cartItems.find((item) => item.id === itemId);
			if (item) {
				item.quantity = quantity;
			}
		},
		clearCart() {
			this.cartItems = [];
		},
	},
});
