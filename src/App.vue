<template>
  <Preloader v-if="state.isLoading" />
  <div
      v-else
      class="min-h-screen">
    <PizzaHeader />
    <CalcForm class="bg-gray"/>
    <ResultOutput/>
  </div>
</template>

<script lang="ts">
import {reactive, onMounted} from 'vue';
import PizzaHeader from './components/common/PizzaHeader.vue';
import CalcForm from './components/CalcForm.vue';
import ResultOutput from './components/ResultOutput.vue';
import Preloader from './components/common/Preloader.vue';

interface IState {
  isLoading: boolean,
}
export default {
  components: {
    Preloader,
    PizzaHeader,
    CalcForm,
    ResultOutput,
  },
  setup()  {
   const state: IState = reactive({
     isLoading: true
   });

    onMounted(() => {
      setTimeout(() => {
        state.isLoading = false;
      }, 1000);
    });
    return {state}
  },
}
</script>

<style lang="scss">
  $roni: #cc333f;

  body {
    background: radial-gradient(circle at center, $roni, darken($roni, 20%));
  }
</style>
