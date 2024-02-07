<template>
	<aside class="cart" :class="{ active: cartStore.isCartVisible }">
		<div className="cart__heading-flex">
			<h2 className="cart-heading">Cart</h2>
			<button className="cart__close" @click="toggleCart">&times;</button>
		</div>
		<div className="cart-items-list">
			<CartItem
				v-for="item in cartStore.cartItems"
				:key="item.id"
				:id="item.id"
				:quantity="item.quantity"
			/>
		</div>
		<div className="cart__total">
			<p className="cart-total-price">Total: {{ cartStore.totalPrice }}</p>

			<button
				className="btn-secondary cart__btn"
				:disabled="cartStore.itemCount > 0"
			>
				Submit Order
			</button>
		</div>
	</aside>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart';
import CartItem from './CartItem.vue';
const cartStore = useCartStore();

function toggleCart() {
	cartStore.toggleCart();
}
</script>

<style lang="sass" scoped>
@use '../Sass/palette'
.cart
    position: fixed
    z-index: 2
    top: 0px
    right: 0px
    height: 100vh
    width: 600px
    background-color: palette.$tertiary
    padding: 2em 2em 2em 2em
    overflow: scroll
    color: palette.$lightest-grey
    -webkit-transform: translateX(100%)
    -moz-transform: translateX(100%)
    -ms-transform: translateX(100%)
    -o-transform: translateX(100%)
    transform: translateX(100%)
    -webkit-transition: -webkit-transform 0.3s ease-in-out
    -moz-transition: transform 0.6s ease-out
    -o-transition: transform 0.6s ease-out
    transition: transform 0.3s ease-in-out
    &.active
        -webkit-transform: translateX(0%)
        -moz-transform: translateX(0%)
        -ms-transform: translateX(0%)
        -o-transform: translateX(0%)
        transform: translateX(0%)

    .cart__heading-flex
        display: flex
        width: 100%
        justify-content: space-between

        .cart__close
            width: 30px
            height: 30px
            background: none
            border: 1px solid palette.$lightest-grey
            border-radius: 50%
            color: palette.$lightest-grey
            margin-right: 5%

    .cart__total
        padding-top: 2em
        width: 100%
        text-align: right
        display: flex
        flex-direction: column
        align-items: flex-end

        .cart__btn
            margin-top: 1em
</style>
