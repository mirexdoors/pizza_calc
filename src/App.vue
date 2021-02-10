<template>
  <Header />
  <CalcForm />
  <ResultOutput />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/common/Header.vue';
import CalcForm from './components/CalcForm.vue';
import ResultOutput from './components/ResultOutput.vue';


export default defineComponent({
  name: 'App',
  components: {
    Header,
    CalcForm,
    ResultOutput,
  }
})
</script>
