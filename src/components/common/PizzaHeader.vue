<template>
	<header class="header">
		<PizzaTitle/>
        <p class="header__slogan">
            calculate your optimal pizza's set
        </p>
        <p class="header__emodji">🍕</p>
	</header>
</template>

<script lang="ts">
    import PizzaTitle from "./PizzaTitle.vue";

    export default {
        name: "Header",
        components: {PizzaTitle},
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;

        &__slogan {
            margin: 0 auto;
            text-align: center;
        }

        &__emodji {
            font-size: 1.5rem;
        }
    }
</style>
