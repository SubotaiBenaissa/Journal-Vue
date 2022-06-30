<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>XD</h1>
    <button @click="goToDaybook" class="btn btn-primary">primero wtf</button>
    <button @click="goToDaybook" class="btn btn-secondary">segundo .-.</button>
    <button @click="goToDaybook" class="btn btn-success">succ sess</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: "daybook" });
    },
  },
};
</script>
