<template>
  <div>
    <div class="kyc__wrap">
      <h1>This feature is coming soon.....</h1>
      <div class="text-right">
        <button @click="back()">back to settings</button>
      </div>
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

<style>
.kyc__wrap {
  width: 50%;
  margin: 100px auto;
}
.kyc__wrap button {
  color: blue;
}
</style>