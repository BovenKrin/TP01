<!-- ComponentA.vue -->
<template>
  <div>
    <h2>Component A ABBC</h2>
    <button @click="incrementCount">Increase</button>
    <p>Count = {{ count }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCount']),
  },
  methods: {
    ...mapActions(['increment']),
    incrementCount() {
      this.increment();
    },
  },
};
</script>

<style scoped>
/* Add styles if needed */
</style>
