<template>
  <div class="login_wrap">
    <login-header />
    <div class="login_content">
      <div class="header_section">
        <h1>Log into your Account</h1>
        <div class="form_login_section mt-5">
          <login-component />
        </div>
      </div>
    </div>
    <!-- <footer-section /> -->
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.login_content {
  margin: 40px auto;
  width: 50%;
}
.login_content h1 {
  color: #0f1842;
  font-size: 50px;
  font-weight: bold;
  word-spacing: 5px;
  letter-spacing: 5px;
  text-align: center;
  font-family: "Titillium Web", sans-serif;
}
.form_login_section {
  margin: 0 auto;
  width: 50%;
}

@media (max-width: 768px) {
  .login_content {
    padding: 10px;
    width: 100%;
  }
  .login_content h1 {
    font-size: 35px;
  }
  .form_login_section {
    margin: 0 auto;
    width: 100%;
  }
}
</style>