<template>
  <div>
    <div class="nav_content w-100">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4">
        <div class="">
          <li class="dashboard_text_li d-flex align-items-center">
            <div><admin-toggle /></div>
            <div class="mt-3">
              <h1>{{ name }}</h1>
            </div>
          </li>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex align-items-center">
          <div class="mx-2">
            <font-awesome-icon class="fa-2x" :icon="['fas', 'user-circle']" />
            <!-- <ion-icon name="contact-outline"></ion-icon> -->
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
  data() {
    return {
      // user: {},
      // newUser: {},
    };
  },
  methods: {
    // getUser() {
    //   this.$axios
    //     .get("/getAsset", {
    //       headers: {
    //         Authorization: `token ${localStorage.getItem("auth.jwt")}`,
    //       },
    //     })
    //     .then((response) => {
    //       this.user = response.data.data;
    //       // console.log(this.user[0]);
    //       this.newUser = this.user[0];
    //     });
    // },
    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
      this.$toast.success("You Are Logged Out", {
        timeout: 5000,
      });
    },
  },
  // mounted() {
  //   this.getUser();
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Karla&family=Lato&family=Nunito&family=Plus+Jakarta+Sans&family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  list-style-type: none !important;
  text-decoration: none !important;
}

.dashboard_text_li h1 {
  color: #1d83c5;
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
  .navbar {
    padding: 0;
  }
  .nav_content .navbar {
    padding: 0;
  }
}
</style>