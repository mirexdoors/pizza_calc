<template>
  <input
      v-model="value"
      :placeholder="placeholder"
      type="text"
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