<template>
  <div class="exam_token_wrap w-100">
    <div class="transactions">
      <user-nav name="Transactions" />
    </div>
  </div>
</template>

<script>
import creator_sidebar from "~/components/creator_sidebar.vue";
export default {
  components: { creator_sidebar },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none !important;
}
.transactions {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}

@media (max-width: 768px) {
  .transactions {
    margin-left: 0 !important;
    padding: 0;
  }
}
</style>