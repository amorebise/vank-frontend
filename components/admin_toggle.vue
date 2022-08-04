<template>
  <nav class="user-side-bar">
    <div class="navbar sticky-top">
      <v-app-bar-nav-icon
        class="drawer"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </div>

    <v-navigation-drawer
      absolute
      temporary
      v-model="drawer"
      app
      class="primary"
    >
      <v-layout column align-center class="mt-5">
        <v-flex class="glee-wrap text-center">
          <nuxt-link to="/" class="navbar-brand vank_logo_link"
            ><nuxt-img
              format="webp"
              sizes="xs:50vw sm:50vw md:20vw lg:13vw"
              quality="90"
              fit="cover"
              src="/vank_logo.png"
          /></nuxt-link>
        </v-flex>
      </v-layout>
      <div class="list-group list-group-flush my-3" id="menu_items">
        <nuxt-link
          to="/admin_dashboard/dashboard"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="child_items ml-5 d-flex align-items-center">
            <ion-icon name="home-outline"></ion-icon>
            <span class="ml-2">Overview</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/admin_dashboard/users"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-5 d-flex align-items-center">
            <ion-icon name="person-outline"></ion-icon>
            <span class="ml-2">Users</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/admin_dashboard/property"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-5 user__icon d-flex align-items-center">
            <img style="width: 18px" src="/building.svg" alt="" />
            <span class="ml-2">Property</span>
          </div>
        </nuxt-link>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> Transactions </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="py-1">
                <nuxt-link to="/admin_dashboard/funding/">Funding</nuxt-link>
              </div>

              <div class="py-1">
                <nuxt-link to="/admin_dashboard/subscriptions/"
                  >Subscription</nuxt-link
                >
              </div>

              <div class="py-1">
                <nuxt-link to="/admin_dashboard/sales/">Sales</nuxt-link>
              </div>

              <div class="py-1">
                <nuxt-link to="/admin_dashboard/borrow/">Borrow</nuxt-link>
              </div>

              <div class="py-1">
                <nuxt-link to="/admin_dashboard/staking_transactions/"
                  >Staking</nuxt-link
                >
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <nuxt-link
          to="/admin_dashboard/property"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-5 user__icon d-flex align-items-center">
            <img style="width: 18px" src="/building.svg" alt="" />
            <span class="ml-2">Add New Property</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/admin_dashboard/settings"
          class="list-group list-group-item active bg-transparent"
        >
          <div class="ml-5 d-flex align-items-center">
            <ion-icon name="settings-outline"></ion-icon>
            <span class="ml-2">Settings</span>
          </div>
        </nuxt-link>
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    // async logout() {
    //   await this.$auth.logout();
    //   this.$router.push("/");
    //   this.$message({
    //     message: "You've Logged out!",
    //     type: "success",
    //   });
    // },
    // getuser() {
    //   this.$axios
    //     .get(this.baseUrl + "auth/user", {
    //       headers: {
    //         Authorization: `token ${localStorage.getItem("auth.jwt")}`,
    //       },
    //     })
    //     .then((response) => {
    //       console.log(response.data.data);
    //       this.profile = response.data.data.profile;
    //       this.wallet = response.data.data.wallet;
    //       console.log(this.wallet);
    //       // this.profile = response.data.data.profile;
    //       // console.log(response.data.data.profile.shoutout_price);
    //     });
    // },
  },
  mounted() {
    // this.getuser();
  },
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
.user-side-bar a {
  color: inherit;
}
#wrapper .navbar {
  background-color: transparent !important;
  padding: 15px 10px !important;
  font-family: "Quicksand", sans-serif;
  text-decoration: none;
}
.user-side-bar .v-overlay__scrim {
  z-index: 10000 !important;
  min-height: 100vh;
}
.user-side-bar .v-navigation-drawer__content {
  background-color: #f8f7ff;
  text-decoration: none;
}
.user-side-bar .v-btn__content {
  display: none;
}
.user-side-bar .v-list-item__content {
  text-decoration: none !important;
}
.user-side-bar {
  display: none;
}
.user-side-bar .navbar {
  /* background-color: #fafafa; */
  padding: 5px 30px !important;
  font-family: "Quicksand", sans-serif;
  z-index: 1;
  text-decoration: none;
}
.user-side-bar .navbar-brand {
  color: #455b6d !important;
  font-size: 50px;
}
.user-side-bar ul {
  text-align: start;
  margin-top: 40px;
}
.list-group-flush > .list-group-item {
  border: none !important;
  color: #455b6d !important;
}
.user-side-bar .list {
  text-decoration: none;
  text-align: start;
  line-height: 55px;
  padding-left: 45px;
}

.user-side-bar .list:hover {
  color: #000;
}
.user-side-bar li:hover {
  background-color: #fdf3d9;
  color: #000 !important;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.user-side-bar .admin {
  font-weight: 600;
}
.user-side-bar .theme--light.v-expansion-panels .v-expansion-panel {
  border-radius: 0 !important;
  box-shadow: none !important;
  border: none !important;
}
.user-side-bar .v-expansion-panel-header {
  /* justify-content: space-between !important; */
  /* background-color: #f8f7ff !important; */
  /* border-bottom: 1px solid #b6858530 !important; */
  border-right: none !important;
  border-radius: 0px !important;
  box-shadow: none !important;
  padding-left: 50px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  font-size: 14px;
}
.user-side-bar .v-expansion-panel-content__wrap {
  background-color: #f8f7ff !important;
  padding-left: 50px;
  font-size: 13px;
  /* border-bottom: 1px solid #30303030 !important; */
  /* padding: 30px 20px !important; */
}
.user-side-bar .v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 30px;
}
.user-side-bar .v-expansion-panel-content__wrap {
  padding: 10px;
  padding-left: 70px;
  flex: 1 1 auto;
  max-width: 100%;
}
.user-side-bar .v-expansion-panel::before {
  box-shadow: none !important;
}

@media (max-width: 768px) {
  .user-side-bar {
    display: block;
  }
  .user-side-bar .navbar {
    padding: 10px !important;
  }
  .user-side-bar .navbar-brand {
    color: #455b6d !important;
    font-size: 30px;
  }
  .list-group-flush > .list-group-item {
    font-size: 14px !important;
  }
  .user-side-bar .v-expansion-panel-content__wrap {
    background-color: #fff !important;
    padding-left: 100px;
    font-size: 13px;
  }
  .list-group-flush > .list-group-item ion-icon {
    font-size: 18px;
  }

  .user-side-bar .bell {
    width: 85%;
  }
  .user-side-bar .v-btn__content {
    display: block;
  }
  .user-side-bar .v-expansion-panel-header {
    padding-left: 100px;
  }
}
</style>