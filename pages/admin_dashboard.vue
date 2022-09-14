<template>
  <div class="dashboard_wrap d-flex">
    <admin-side-bar />
    <nuxt-child />
  </div>
</template>

<script>
import side_bar_nav from "~/components/side_bar_nav.vue";
export default {
  middleware: "auth",
  components: { side_bar_nav },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Quicksand", sans-serif;
}
.blue_text {
  color: #1d83c5;
}
</style>