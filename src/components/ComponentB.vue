
<!-- ComponentB.vue -->
<template>
  <div>
    <h2>Component B</h2>
    <button @click="decrementCount">Decrease</button>
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
    ...mapActions(['decrement']),
    decrementCount() {
      this.decrement();
    },
  },
};
</script>

<style scoped>
/* Add styles if needed */
</style>
