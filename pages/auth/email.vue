<template>
  <div>
    <div class="forgot__password__email__wrap">
      <div class="logo_header">
        <img src="vv.png" alt="vank logo" />
      </div>
      <div class="d-flex justify-content-center mt-5">
        <div>
          <div class="password__header">
            <h1>Forgot Password</h1>
          </div>
          <div class="password__write__up text-center">
            <p>
              Enter the email address associated with this <br />
              account to reset your password
            </p>
          </div>
          <div class="form__wrap">
            <form action="" @submit.prevent="sendMail()">
              <div class="d-flex align-items-center paasword__dash">
                <div class="form-group py-3">
                  <label class="py-2" for="">Email</label>
                  <input type="email" class="form-control" v-model="forgot_password_email.email"
                    placeholder="Enter your Email Address" />
                </div>

                <div style="margin-top: 30px" class="forgot_button">
                  <v-btn style="background-color: #00e8fe; text-transform: lowercase; box-shadow: none"
                    class="login_button" :loading="loading" value="Login" type="submit">Send Mail</v-btn>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forgot_password_email: {
        email: "",
      },
      loading: false,
    };
  },
  methods: {
    async sendMail() {
      try {
        this.loading = true;
        let response = await this.$axios.post(
          "/sendForgotPasswordMail",
          this.forgot_password_email
        );

        this.$router.push("/auth/notification/");
        console.log(response);
      } catch (error) {
        this.loading = false,
          console.log(error.response);
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

/* .paasword__dash {
  width: 100%
} */

.forgot__password__email__wrap {
  padding: 20px 10px;
}

.forgot__password__email__wrap .login_button v-btn {
  background-color: #00e8fe !important;
}

.forgot__password__email__wrap .logo_header img {
  width: 200px;
}

.forgot__password__email__wrap .password__header h1 {
  color: #0f1843;
  font-weight: 600;
  font-size: 50px;
  padding-top: 40px;
}
</style>