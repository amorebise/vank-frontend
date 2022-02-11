<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <nuxt-link to="/" class="navbar-brand glee-note"
        ><nuxt-img
          format="webp"
          sizes="xs:35vw sm:30vw md:20vw lg:10vw"
          quality="90"
          fit="cover"
          src="/vank_logo.png"
      /></nuxt-link>

      <ul class="navbar-nav ml-auto pl-5 mb-2 mb-lg-0">
        <li class="nav-item sign_up_wrap mx-3">
          <nuxt-link to="/sign_up" class="sign_up_button navbar-brand">
            Sign Up
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none !important;
}
.navbar {
  padding: 30px 100px !important;
  font-family: Space Grotesk;
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

.times {
  display: none;
  color: #ffecd2;
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
  background-color: #00e9fe9f;
  color: #000 !important;
  transition: all, 0.5s;
}
.icon_color {
  color: #0f1843;
}
@media (max-width: 992px) {
  .navbar {
    padding: 10px !important;
  }

  .sign_up_wrap {
    margin-top: 10px;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
</style>