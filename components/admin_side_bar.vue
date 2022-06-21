<template>
  <div>
    <div class="text-left sidebar-wrap" id="sidebar-wrapper">
      <div class="sidebar-heading">
        <nuxt-link to="/" class="navbar-brand vank_logo_link"
          ><nuxt-img
            format="webp"
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
              <ion-icon name="home-outline"></ion-icon>

              <span class="ml-2">Dashboard</span>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/admin_dashboard/users"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 user__icon d-flex align-items-center">
            <ion-icon name="people-outline"></ion-icon>
            <span class="ml-2">Users</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/admin_dashboard/create_asset"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 user__icon d-flex align-items-center">
            <ion-icon name="create-outline"></ion-icon>
            <span class="ml-2">Requests</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/admin_dashboard/withdrawals"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 user__icon d-flex align-items-center">
            <ion-icon name="card-outline"></ion-icon>
            <span class="ml-2">Withdrawals</span>
          </div>
        </nuxt-link>

        <nuxt-link
          to="/admin_dashboard/mm_applications"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 user__icon d-flex align-items-center">
            <ion-icon name="settings-outline"></ion-icon>
            <span class="ml-2">Market Makers</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/admin_dashboard/settings"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 user__icon d-flex align-items-center">
            <ion-icon name="settings-outline"></ion-icon>
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

<style scoped>
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
  /* margin-left: -14rem !important; */
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
  /* display: none; */
}
.list-group-item {
  border: none;
  padding: 17px 30px !important;
  width: 100%;
  /* color: #c9cdcf !important; */
  color: #455b6d !important;
  cursor: pointer;
}
.list-group-item:hover {
  /* background: linear-gradient(
    91.52deg,
    #1d83c5 0%,
    rgba(106, 188, 241, 0) 196.77%
  ); */
  background-color: #fff;
  color: #455b6d !important;
  background-color: #ffffff !important;
  transition: all, 0.5s;
  border-radius: 0;
}
.img_wrap {
  width: 10%;
}
/* .child_items {
  width: 30rem;
}
.child_items:hover {
  background-color: #f4ede4 !important;
  color: #000 !important;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all, 0.5s;
  width: 100%;
} */
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
.user__icon ion-icon {
  font-size: 20px;
}

@media (max-width: 768px) {
  .sidebar-wrap {
    display: none;
  }
}
</style>