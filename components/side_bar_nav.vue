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
        <!-- <li class="list-group list-group-item active bg-transparent active">
          <div class="child_items">
            <div class="ml-3 d-flex align-items-center py-1">
              <ion-icon style="color: #001214" name="home-outline"></ion-icon>

              <span class="ml-2">My Account</span>
            </div>
          </div>
        </li> -->
        <nuxt-link
          to="/user_dashboard/my_account"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="child_items">
            <div class="ml-3 d-flex align-items-center py-1">
              <ion-icon style="color: #001214" name="home-outline"></ion-icon>

              <span class="ml-2">My Account</span>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/user_dashboard/wallets"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 d-flex align-items-center py-1">
            <ion-icon name="card-outline"></ion-icon>
            <span class="ml-2">Wallet</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/user_dashboard/fractional_ownership"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 d-flex align-items-center py-1">
            <!-- <ion-icon name="bag-outline"></ion-icon> -->
            <img style="width: 18px" src="/building.svg" alt="" />
            <span class="ml-2">Buy Real Estate</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/user_dashboard/referrals/"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 d-flex align-items-center py-1">
            <ion-icon style="color: #001214" name="link"></ion-icon>
            <span class="ml-2">Referrals</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/user_dashboard/bookmarks"
          class="list-group list-group-item active bg-transparent active"
        >
          <div class="ml-3 d-flex align-items-center py-1">
            <ion-icon style="color: #001214" name="bookmark-outline"></ion-icon>
            <span class="ml-2">My Bookmarks</span>
          </div>
        </nuxt-link>

        <nuxt-link
          to="/user_dashboard/settings"
          class="list-group list-group-item active bg-transparent"
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
.list-group-item {
  border: none;
  padding: 7px 30px !important;
  width: 100%;
  color: #001214 !important;
  cursor: pointer;
  font-size: 14px;
}
.list-group-item:hover {
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
  /* background-color: #00e8fe !important; */
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