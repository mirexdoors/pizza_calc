<template>
	<div class="preloader">
		<PizzaTitle />
		<div class="pizza">
			<div class="slice"></div>
			<div class="slice"></div>
			<div class="slice"></div>
			<div class="slice"></div>
			<div class="slice"></div>
			<div class="slice"></div>
			<div class="slice"></div>
			<div class="slice"></div>
			<div class="slice"></div>
			<div class="slice"></div>
			<div class="slice"></div>
			<div class="slice"></div>
			<div class="slice"></div>
		</div>
	</div>
</template>

<script lang="ts">
  import PizzaTitle from "./PizzaTitle.vue";

  export default {
    name: "Preloader",
    components: {PizzaTitle},
  }
</script>

<style lang="scss" scoped>
	$number: 12;

	@mixin size($h: 100%, $w: 100%) {
		height: $h;
		width: $w;
	}

	body {
		&:before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			width: 15vmin;
			height: 2vmin;
			background: darken($roni, 15%);
			margin-top: 17.5vmin;
			filter: blur(10px);
			border-radius: 100%;
		}

		@include size(100vh, 100vw);
		align-items: center;
		display: flex;
		justify-content: center;
		margin: 0;
		overflow: hidden;


		p {
			position: absolute;
			bottom: 10px;
			right: 10px;
			color: #fff;
			font-size: 10px;
		}

		.pizza {
			@include size(20vmin, 20vmin);
			align-items: center;
			background: none;
			position: relative;
			animation: rotate 13s linear infinite;
			@keyframes rotate {
				to {
					transform: rotate(360deg);
				}
			}

			.slice {
				z-index: -1;
				overflow: visible;
				position: absolute;
				width: 0;
				height: 0;
				border-style: solid;
				border-width: 10vmin 2.75vmin 0 2.75vmin;
				border-color: $cheese transparent transparent transparent;
				left: 7.5vmin;
				top: 0;
				transform-origin: 50% 100%;
				transform: rotate(0deg);
				animation: loading 1.8125s ease-in-out infinite;
				@keyframes loading {
					0% {
						opacity: 1;
					}
					49% {
						opacity: 1;
					}
					50% {
						opacity: 0;
					}
					99% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}

				&:nth-of-type(2n) {
					&:after {
						box-shadow: 0.5vmin 2.5vmin 0 $roni;
					}
				}

				&:nth-of-type(4n) {
					&:after {
						box-shadow: 0.5vmin 2.5vmin 0 $roni, 1.5vmin 5vmin 0 $roni;
					}
				}

				@for $i from 1 through $number {
					&:nth-of-type(#{$i}) {
						transform: rotate(-#{$i * 27.75}deg);
						animation-delay: #{-$i / 16}s;
					}
				}

				&:before {
					content: '';
					position: absolute;
					height: 1.5vmin;
					width: 6vmin;
					background: $crust;
					top: -10.5vmin;
					left: -3vmin;
					border-radius: 100vmin 100vmin 0.5vmin 0.5vmin / 50vmin 50vmin;
				}

				&:after {
					content: '';
					border-radius: 100%;
					position: absolute;
					width: 1.25vmin;
					height: 1.25vmin;
					background: $roni;
					left: -1vmin;
					top: -7vmin;
					z-index: 2;
				}
			}
		}

		.preloader {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 3rem;
			height: 100vh;

			&__text {
				text-transform: uppercase;
				font-size: 2rem;
			}
		}
	}
</style>
