<template>
  <div id="new-nav">
    <nav class="navbar navbar-expand-lg">
      <nuxt-link to="/" class="navbar-brand glee-note"
        ><nuxt-img
          format="webp"
          sizes="xs:35vw sm:30vw md:20vw lg:13vw"
          quality="90"
          fit="cover"
          src="/vank_logo.png"
      /></nuxt-link>

      <ul class="navbar-nav ml-auto pl-5 mb-2 mb-lg-0">
        <li class="nav-item sign_up_wrap" @click="navigate()">
          <nuxt-link to="/login" class="sign_up_button navbar-brand">
            Sign In
          </nuxt-link>
        </li>
      </ul>
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
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          document.getElementById("new-nav").classList.add("fixed-top");
          document.body.style.paddingTop = 10 + "px";
        } else {
          document.getElementById("new-nav").classList.remove("fixed-top");
          // remove padding top from body
          document.body.style.paddingTop = "0";
        }
      });
    });
  },
};
</script>

<style scoped>
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
.navbar-brand {
  color: #000 !important;

  font-size: 20px;
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
.fixed-top {
  background-color: #fff !important;
  padding: 0rem 0rem;
  transition-delay: 0.2s;
  box-shadow: 10px 10px 10px #30303007;
}
.sign_up_button {
  padding: 5px 10px;
  background-color: #00e8fe;
  border-radius: 5px;
  color: #000 !important;
}
.sign_up_button:hover {
  background-color: #00e9fea9;
  color: #000 !important;
  transition: all, 0.5s;
}
.icon_color {
  color: #0f1843;
}
@media (max-width: 992px) {
  .navbar {
    padding: 0 5px !important;
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
    margin-left: 40px;
  }
  .sign_up_button {
    font-size: 15px;
  }
}
</style>