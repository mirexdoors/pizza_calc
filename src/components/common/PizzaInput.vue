<template>
  <input
      v-model="value"
      :placeholder="placeholder"
      type="text"
      class="text-input"
  />
</template>

<script lang="ts">
export default {
  name: "PizzaInput",
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  .text-input {
    height: 2rem;
    outline: none;
    border-radius: 5px;
    border: 4px solid $cheese;
    background: #bbb083;
    color:  darken($roni, 15%);
    font-weight: bold;
    letter-spacing: 4px;
    font-size: 20px;
    width: 80px;
  }
</style>
