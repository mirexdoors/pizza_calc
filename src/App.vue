<template>
  <Preloader v-if="isLoading" />
  <div
      v-else
      class="min-h-screen">
    <Header/>
    <CalcForm class="bg-gray"/>
    <ResultOutput/>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue';
import Header from './components/common/Header.vue';
import CalcForm from './components/CalcForm.vue';
import ResultOutput from './components/ResultOutput.vue';
import Preloader from './components/common/Preloader.vue';


export default defineComponent({
  name: 'App',
  components: {
    Preloader,
    Header,
    CalcForm,
    ResultOutput,
  },
  setup()  {
    let isLoading = ref(true);
    return {isLoading}
  },
})
</script>
