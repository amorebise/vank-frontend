<template>
  <div class="dashboard_wrap d-flex">
    <side-bar-nav />
    <nuxt-child />
  </div>
</template>

<script>
import side_bar_nav from "~/components/side_bar_nav.vue";
export default {
  // middleware: "auth",
  components: { side_bar_nav },
};
</script>

<style>
.blue_text {
  color: #000 !important;
}
</style>