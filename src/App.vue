<!-- App.vue -->
<template>
  <div id="app">
    <ComponentA />
    <ComponentB />
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';
import Vue from 'vue';
import App from './App.vue'; // Keep only one import for App.vue

// Your other imports and code


export default {
  components: {
    ComponentA,
    ComponentB,
  },
};
</script>

