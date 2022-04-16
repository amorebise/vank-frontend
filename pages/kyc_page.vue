<template>
  <div>
    <div class="kyc__wrap">
      <h1>KYC page</h1>
      <button @click="back()">back to settings</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
</style>