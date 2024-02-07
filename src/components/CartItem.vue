<template>
	<div class="cart-item-container">
		<div class="item-content">
			<img :src="item.images[0]" alt="Album art for cart item" />
			<div class="item-info">
				<p class="album" data-testid="cart-item-album">{{ item.album }}</p>
				<p class="artist">{{ item.artist }}</p>
				<p data-testid="cart-item-price" class="price">${{ item.price }}</p>
			</div>
		</div>
		<div class="item-total">
			<p class="price">${{ quantity * (item?.price || 0) }}</p>
			<div class="quantity-control">
				<!-- <button
            class="quantity-btn"
            onClick={() => handleDecreaseQuantity()}
          >
            -
          </button> -->
				<div class="quantity-text">
					<span class="quantity">{{ quantity }}</span> in cart
				</div>
				<!-- <button
            class="quantity-btn"
            onClick={() => handleIncreaseQuantity()}
          >
            +
          </button> -->
			</div>
			<!-- <button class="btn remove-btn" onClick={() => removeFromCart()}>
          Remove
        </button> -->
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useMusicStore } from '../store/music';

const { id, quantity } = defineProps<{ id: number; quantity: number }>();
const musicStore = useMusicStore();

//computed
const item = computed(() => musicStore.getAlbumById(id));
</script>

<style lang="sass" scoped>
@use '../Sass/palette'

.cart-item-container
    width: 100%
    padding-top: 2em
    display: flex
    justify-content: space-between

    .item-content
        // padding-bottom: 8px

        img
            height: 150px
            width: 150px

        .item-info

            p
                margin: 0

            span
                font-size: 14px

    .item-total
        display: flex
        flex-direction: column
        align-items: flex-end
        gap: 10px

        .price
            font-size: 1.2rem

        .quantity-control
            display: flex
            gap: 5px

            .quantity-btn
                background: none
                color: palette.$darker-grey
                border: none
                outline-color: palette.$darker-grey
                cursor: pointer
                font-size: 1.3rem
                padding: 0
                margin-bottom: 5px

            .quantity-text
                padding: 0 6px

        .btn
            color: palette.$darkest-grey
            border-radius: 50px
            border: none
            background: none
            cursor: pointer
</style>
