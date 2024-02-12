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
@use '../Sass/typography'

.nav
    display: flex
    gap: 1.5em
    align-items: center
    padding-left: 5%

    .nav__items
        display: flex
        gap: 1.5em
        padding: 0

        .nav__item
            list-style: none
            position: relative
            cursor: pointer
            font: 100% typography.$font-serif
            font-size: 1.2rem


            &::after
                content: ''
                position: absolute
                bottom: -5px
                display: block
                height: 2px
                background: palette.$tertiary
                transition: width 0.3s ease 0s, left 0.3s ease 0s
                width: 0
                left:50%

            & a
                outline-color: palette.$darker-grey
                color: palette.$primary


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
