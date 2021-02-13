<template>
  <Preloader v-if="state.isLoading" />
  <div v-else>
    <PizzaHeader />
    <CalcForm />
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
      }, 1500);
    });
    return {state}
  },
}
</script>

<style lang="scss">
  body {
    font-family: 'Fredoka One';
    background: $roni;
    letter-spacing: 4px;
    color: $cheese;
    text-shadow: 0px 1px 0px #b2a98f,
    0 4px 0 rgba(0, 0, 0, 0.15),
    0px 8px 2px rgba(0, 0, 0, 0.1),
    0 0 0 rgba(0, 0, 0, 0.1);
  }
</style>
