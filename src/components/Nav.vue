<script setup lang="ts"></script>

<template>
	<nav class="nav">
		<ul class="nav__items">
			<li class="nav__item">
				<router-link to="/">Home</router-link>
			</li>
			<li class="nav__item">
				<router-link to="/store">Store</router-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="sass" scoped>
@use '../Sass/palette'

.nav
    display: flex
    gap: 1.5em
    align-items: center


    .nav__items
        display: flex
        gap: 1.5em

        .nav__item
            list-style: none
            position: relative
            cursor: pointer

            &::after
                content: ''
                position: absolute
                bottom: -5px
                display: block
                height: 2px
                background: palette.$darkest-grey
                transition: width 0.3s ease 0s, left 0.3s ease 0s
                width: 0
                left:50%

            & a
                outline-color: palette.$darker-grey


            &:hover:after
                width: 100%
                left: 0

            .auth__btn
                background: none
                outline-color: palette.$darker-grey
                border: none
                color: palette.$darker-grey
                font-size: 0.9rem
</style>
