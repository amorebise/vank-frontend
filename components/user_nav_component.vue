<template>
  <div>
    <div class="nav_content w-100">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4">
        <div class="">
          <li class="dashboard_text_li d-flex align-items-center">
            <!-- <div><creator-sidebar /></div> -->
            <nuxt-link to="/" class="navbar-brand vank_logo_link"
              ><nuxt-img
                format="webp"
                sizes="xs:35vw sm:30vw md:20vw lg:10vw"
                quality="90"
                fit="cover"
                src="/vank_logo.png"
                alt="image"
            /></nuxt-link>
          </li>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex align-items-center">
          <div class="mx-2">
            <font-awesome-icon class="fa-1x" :icon="['fas', 'bell']" />
          </div>
          <div class="mx-2">
            <button @click="logout()" class="log_out_button">Logout</button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
      this.$toast.success("You Are Logged Out", {
        timeout: 5000,
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Karla&family=Lato&family=Nunito&family=Plus+Jakarta+Sans&family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  list-style-type: none !important;
  text-decoration: none !important;
}
.navbar {
  /* padding: 10px 100px; */
  background-color: #fff !important;
}
.log_out_button {
  border: 1px solid #00e8fe;
  padding: 5px 15px;
  border-radius: 5px;
}
@media (max-width: 768px) {
  .dashboard_text {
    font-size: 20px;
  }
  .navbar {
    padding: 10px;
  }
}
</style>