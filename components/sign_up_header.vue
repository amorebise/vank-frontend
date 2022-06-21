<template>
  <div id="new-nav">
    <nav class="navbar navbar-expand-lg">
      <nuxt-link to="/" class="navbar-brand glee-note"
        ><nuxt-img
          format="webp"
          sizes="xs:35vw sm:30vw md:20vw lg:10vw"
          quality="90"
          fit="cover"
          src="/vank_logo.png"
          alt="image"
      /></nuxt-link>

      <ul class="navbar-nav ml-auto pl-5 mb-2 mb-lg-0">
        <li class="nav-item sign_up_wrap">
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
      // show: false,
    };
  },

  // mounted() {
  //   document.addEventListener("DOMContentLoaded", function () {
  //     window.addEventListener("scroll", function () {
  //       if (window.scrollY > 50) {
  //         document.getElementById("new-nav").classList.add("fixed-top");
  //         document.body.style.paddingTop = 10 + "px";
  //       } else {
  //         document.getElementById("new-nav").classList.remove("fixed-top");
  //         // remove padding top from body
  //         document.body.style.paddingTop = "0";
  //       }
  //     });
  //   });
  // },
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
  padding: 30px 100px !important;
  font-family: "Space Grotesk", sans-serif;
  background-color: #fff;
}
.navbar img {
  height: 100%;
}
.navbar-brand {
  color: #000 !important;

  font-size: 18px;
}
.navbar-brand:hover {
  color: #18a0fb !important;
}

.fixed-top {
  background-color: #fff !important;
  padding: 0rem 0rem;
  transition-delay: 0.2s;
  box-shadow: 0 5px 10px #30303007;
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

  .sign_up_wrap {
    margin-top: 10px;
    margin-left: 40px;
  }
  .sign_up_button {
    font-size: 15px;
  }
}
</style>