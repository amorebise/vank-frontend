<template>
  <div>
    <div class="text-left sidebar-wrap" id="sidebar-wrapper">
      <div class="sidebar-heading">
        <nuxt-link to="/" class="navbar-brand vank_logo_link"
          ><nuxt-img
            format="webp"
            sizes="xs:35vw sm:30vw md:20vw lg:13vw"
            quality="90"
            fit="cover"
            src="/vank_logo.png"
            alt="image"
        /></nuxt-link>
      </div>
      <div class="list-group list-group-flush my-3" id="menu_items">
        <nuxt-link
          to="/admin_dashboard/dashboard"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="child_items">
            <div class="ml-3 d-flex align-items-center">
              <ion-icon style="color: #001214" name="home-outline"></ion-icon>

              <span class="ml-2">Overview</span>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/admin_dashboard/users"
          class="list-group list-group-item active bg-transparent"
        >
          <div class="ml-3 d-flex align-items-center">
            <ion-icon style="color: #001214" name="person-outline"></ion-icon>
            <span class="ml-2">Users</span>
          </div>
        </nuxt-link>
        <div
          @click="$router.push('/admin_dashboard/property')"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 d-flex align-items-center">
            <img style="width: 18px" src="/building.svg" alt="" />

            <span class="ml-2">Property</span>
          </div>
        </div>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> Transactions </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="">
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
                <nuxt-link to="/admin_dashboard/borrow/">Borrowing</nuxt-link>
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
          to="/admin_dashboard/referrals/"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 d-flex align-items-center">
            <ion-icon name="link-outline"></ion-icon>
            <span class="ml-2">Referrals</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/admin_dashboard/property"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 d-flex align-items-center">
            <img style="width: 18px" src="/building.svg" alt="" />
            <span class="ml-2">Add new Property</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/admin_dashboard/settings"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 d-flex align-items-center">
            <ion-icon style="color: #001214" name="settings-outline"></ion-icon>
            <span class="ml-2">Settings</span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiAccount } from "@mdi/js";

export default {
  data() {
    return {
      show: false,
      icons: {
        mdiAccount,
      },
    };
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Karla&family=Lato&family=Nunito&family=Plus+Jakarta+Sans&family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  list-style-type: none !important;
  text-decoration: none !important;
}
.sidebar-wrap {
  background-color: #f8f7ff;
}

#sidebar-wrapper {
  min-height: 100vh;
  transition: margin 0.25s ease-out;
  position: fixed;
  z-index: 3;
}
#sidebar-wrapper .sidebar-heading {
  padding: 2.7rem 1.25rem !important;
  font-size: 1.2rem;
}
#sidebar-wrapper .sidebar-heading img {
  width: 150px;
}
#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}
#wrapper-toggled #sidebar-wrapper {
  margin-left: 0 !important;
}
#menu-toggle {
  cursor: pointer;
}
.sidebar-wrap .theme--light.v-expansion-panels .v-expansion-panel {
  border-radius: 0 !important;
  box-shadow: none !important;
  border: none !important;
}
.sidebar-wrap .v-expansion-panel-header {
  /* justify-content: space-between !important; */
  background-color: #f8f7ff !important;
  /* border-bottom: 1px solid #b6858530 !important; */
  border-right: none !important;
  border-radius: 0px !important;
  box-shadow: none !important;
  padding-left: 70px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  font-size: 14px;
}
.sidebar-wrap a {
  color: inherit !important;
}
.sidebar-wrap .v-expansion-panel-content__wrap {
  background-color: #f8f7ff !important;
  padding-left: 50px;
  font-size: 13px;
  /* border-bottom: 1px solid #30303030 !important; */
  /* padding: 30px 20px !important; */
}
.sidebar-wrap .v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 30px;
}
.sidebar-wrap .v-expansion-panel-content__wrap {
  padding: 10px;
  padding-left: 70px;
  flex: 1 1 auto;
  max-width: 100%;
}
.sidebar-wrap .v-expansion-panel::before {
  box-shadow: none !important;
}
.list-group-item {
  border: none;
  padding: 7px 30px !important;
  width: 100%;
  color: #001214 !important;
  cursor: pointer;
  font-size: 14px;
}
.list-group-item:hover {
  background-color: #fff;
  color: #455b6d !important;
  background-color: #00e8fe !important;
  transition: all, 0.5s;
  border-radius: 0;
}
.img_wrap {
  width: 10%;
}
.list-group-item.active {
  border: none;
  background-color: transparent;
  color: #fff;
}
#wrapper .navbar {
  background-color: #fafafa;
  padding: 15px 10px !important;
  font-family: "Quicksand", sans-serif;
  text-decoration: none;
}
.status_toggle {
  cursor: pointer;
}
.custom-switch .custom-control-label::after {
  cursor: pointer;
}
.profile-wrapper,
.glee_history_wrapper {
  background-color: #fff;
  border-radius: 5px;
}
.purple_text {
  color: #55174f;
}
.line_height {
  line-height: 10px;
}
.creator_profile_pic {
  width: 100%;
  height: 13rem;
  border-radius: 20px;
  object-fit: cover;
  margin-top: 10px !important;
}
.child_wrapper {
  margin-left: 220px;
  overflow-y: hidden;
}

@media (max-width: 768px) {
  .sidebar-wrap {
    display: none;
  }
}
</style>