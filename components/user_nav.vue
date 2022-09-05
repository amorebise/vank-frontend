<template>
  <div>
    <div class="nav_content w-100">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="">
          <li class="dashboard_text_li d-flex align-items-center">
            <div><creator-sidebar /></div>
            <div class="mt-3">
              <h3>{{ name }}</h3>
            </div>
          </li>
        </div>
        <v-spacer></v-spacer>
        <div style="gap: 10px" class="d-flex align-items-center">
          <div class="">
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
  data() {
    return {};
  },
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
/* .navbar {
  padding-left: 15px;
  padding-right: 15px;
} */
.dashboard_text_li h3 {
  color: black;
  font-weight: 600;
}
.log_out_button {
  border: 1px solid #00e8fe;
  padding: 5px 15px;
  border-radius: 5px;
}
@media (max-width: 768px) {
  .dashboard_text {
    font-size: 20px;
    margin-top: 0 !important;
  }
  .dashboard_text_li .mt-3 {
    margin-top: 10px !important;
  }
  .dashboard_text_li h1 {
    font-size: 20px;
  }
  .dashboard_text_li h3 {
    font-size: 15px;
    color: black;
    margin-top: -10px;
  }
  .navbar {
    padding: 0;
  }
  .nav_content .navbar {
    padding: 0;
  }
  .navbar .px-3 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .navbar {
    padding-right: 10px !important;
  }
  .log_out_button {
    font-size: 12px;
  }
}
</style>