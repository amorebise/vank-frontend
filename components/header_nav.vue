<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top">
      <nuxt-link to="/" class="navbar-brand vank_logo_link"
        ><nuxt-img
          format="webp"
          sizes="xs:35vw sm:30vw md:20vw lg:10vw"
          quality="90"
          fit="cover"
          src="/vank_logo.png"
          alt="image"
      /></nuxt-link>
      <div class="navbar-toggler p-0" @click="navigate()">
        <v-icon size="33" class="icon_color">mdi-menu</v-icon>
      </div>

      <div
        class="
          collapse
          navbar-collapse
          d-flex
          flex-column flex-lg-row
          mobile-menu
        "
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav ml-auto pl-5 mb-2 mb-lg-0">
          <li class="nav-item mx-3" @click="navigate()">
            <nuxt-link to="/" class="navbar-brand pt-2">Home</nuxt-link>
          </li>
          <li class="nav-item mx-3" @click="navigate()">
            <nuxt-link to="/about_us" class="navbar-brand pt-2"
              >About Us</nuxt-link
            >
          </li>
          <li class="nav-item mx-3" @click="navigate()">
            <nuxt-link to="/faqs" class="navbar-brand pt-2">FAQs</nuxt-link>
          </li>
          <li class="nav-item mx-3" @click="navigate()">
            <nuxt-link to="/contact_us" class="navbar-brand pt-2"
              >Contact Us</nuxt-link
            >
          </li>
          <li class="nav-item sign_up_wrap mx-3" @click="navigate()">
            <nuxt-link to="/login" class="sign_up_button navbar-brand">
              Log In
            </nuxt-link>
          </li>
        </ul>

        <div class="times">
          <span @click="navigate()"> &times; </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    navigate() {
      document.getElementById("navbarNavDropdown").classList.toggle("show");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  text-decoration: none !important;
}
.navbar {
  padding: 30px 100px !important;
  font-family: "Space Grotesk", sans-serif;
  background-color: #fff;
}
.navbar img {
  height: 100%;
}
.vank_logo_link {
  outline: none !important;
}
.navbar-brand {
  color: #000 !important;
  font-weight: 550;
  font-size: 18px;
}
.navbar-brand:hover {
  color: #18a0fb !important;
}

.times {
  display: none;
  color: #fff;
  display: none;
  font-size: 30px;
}

.sign_up_button {
  padding: 5px 10px;
  background-color: #00e8fe;
  border-radius: 5px;
  color: #000 !important;
}
.sign_up_button:hover {
  background-color: #00e9fe85;
  color: #000 !important;
  transition: all, 0.5s;
}
.icon_color {
  color: #0f1843 !important;
}
@media (max-width: 992px) {
  .navbar {
    padding: 15px !important;
  }

  .navbar-nav {
    margin: 30px auto !important;
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: -100%;
    border: none;
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-color: #0f1843;
    z-index: 10;
    transition: left 0.7s;
    align-items: center;
    padding-top: 50px;
    padding-right: 30px;
    color: #fff !important;
  }
  .mobile-menu .navbar-brand {
    color: #fff !important;
    font-size: 20px;
  }

  .show {
    left: 0;
  }

  .times {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .times span {
    font-size: 35px;
  }
  .sign_up_wrap {
    margin-top: 10px;
  }
  .mobile-menu .sign_up_button {
    color: #000 !important;
  }
}
</style>