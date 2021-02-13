<template>
 <header class="header">
   <h1 class="header__text">Pizza Calc</h1>
 </header>
</template>

<script>
export default {
name: "Header",
}
</script>

<style lang="scss" scoped>
    .header {
        &__text {
            text-transform: uppercase;
            font-size: 2rem;
            font-weight: normal;
        }
    }
</style>
