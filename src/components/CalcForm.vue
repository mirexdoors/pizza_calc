<template>
  <div class="py-12">
    <div class="container mx-auto">
      <PizzaInput

      />
    </div>
  </div>
</template>

<script lang="ts">
import PizzaInput from './common/PizzaInput.vue';

import {ref, defineComponent} from 'vue'

export default defineComponent({
  name: 'CalcForm',
  components: {PizzaInput},
  setup: () => {
    const count = ref(0)
    const useScriptSetup = ref(false);
    const useTsPlugin = ref(false);
    return {count, useScriptSetup, useTsPlugin}
  }
})
</script>
