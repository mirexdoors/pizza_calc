<template>
  <div class="calc">
    <div class="calc__wrapper">
      Здесь инпуты
    </div>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'

export default defineComponent({
  name: 'CalcForm',
  setup: () => {
    const count = ref(0)
    const useScriptSetup = ref(false);
    const useTsPlugin = ref(false);
    return {count, useScriptSetup, useTsPlugin}
  }
})
</script>
