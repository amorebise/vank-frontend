<template>
  <div class="basket w-100">
    <user-nav name="Basket" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none !important;
}
.basket {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}

@media (max-width: 768px) {
  .basket {
    margin-left: 0 !important;
    padding: 0;
  }
}
</style>