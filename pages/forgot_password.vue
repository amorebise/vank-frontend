<template>
  <div class="general_forgot_password_wrap">
    <sign-up-header />
    <div class="forgot_password_wrap">
      <div class="forgot_password_content">
        <form class="mt-3" method="post" @submit.prevent="submit()">
          <div class="form-group">
            <label class="py-2" for="">Email</label>
            <input
              type="text"
              class="form-control"
              required
              v-model="forgot_password.email"
              placeholder="enter your email address"
            />
          </div>
          <div class="form-group">
            <label class="py-2" for="">Token</label>
            <input
              type="text"
              required
              class="form-control"
              v-model="forgot_password.token"
              placeholder="enter token sent to your email"
            />
          </div>
          <div class="form-group">
            <label class="py-2" for="">Password</label>
            <div
              class="
                d-flex
                password_wrap
                align-items-center
                justify-content-between
              "
            >
              <input
                type="password"
                id="password"
                class=""
                required
                v-model="forgot_password.password"
                placeholder="enter password"
              />
              <span class="d-flex" @click="displayPassword()">
                <font-awesome-icon
                  id="show_password"
                  class="text-muted eye_icon"
                  :icon="['fas', 'eye']"
                />
                <font-awesome-icon
                  id="hide_password"
                  class="text-muted eye_slash_icon"
                  :icon="['fas', 'eye-slash']"
                />
              </span>
            </div>
          </div>

          <div class="form-group">
            <label class="py-2" for="">Password</label>
            <div
              class="
                d-flex
                password_wrap
                align-items-center
                justify-content-between
              "
            >
              <input
                type="password"
                id="second_password"
                class=""
                required
                v-model="forgot_password.password_confirmation"
                placeholder="enter password"
              />
              <span class="d-flex" @click="displaySecondPassword()">
                <font-awesome-icon
                  id="show_second_passwordd"
                  class="text-muted eye_icon"
                  :icon="['fas', 'eye']"
                />
                <font-awesome-icon
                  id="hide_second_passwordd"
                  class="text-muted eye_slash_icon"
                  :icon="['fas', 'eye-slash']"
                />
              </span>
            </div>
          </div>

          <div class="text-center">
            <div class="forgot_button">
              <v-btn
                class="login_button"
                :loading="loading"
                value="Login"
                type="submit"
                >Log In</v-btn
              >
            </div>

            <!-- <div class="login_wrap mt-3">
              <p>
                Don’t have an account?
                <nuxt-link
                  to="/sign_up"
                  class="sign_up_link text-decoration-none"
                  >Sign up here</nuxt-link
                >
              </p>
            </div> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forgot_password: {
        email: "",
        token: "",
        password: "",
        password_confirmation: "",
      },
      message: {},
      loading: false,
    };
  },
  methods: {
    async changePassword() {
      try {
        this.loading = true;
        let response = await this.$axios.post(
          "/forgotPassword",
          this.forgot_password
        );
        console.log(response);

        this.$router.push("/login");
        this.$toast.success("Password Changed Successfully", {
          timeout: 5000,
        });
      } catch (error) {
        this.loading = false;
        this.message = error.response.data.message;
        this.$toast.warning(this.message, {
          timeout: 5000,
        });
        console.log(error.response.data.message);
      }
    },

    displayPassword() {
      let password = document.getElementById("password");
      let show_password = document.getElementById("show_password");
      let hide_password = document.getElementById("hide_password");
      if (password.type === "password") {
        password.type = "text";
        show_password.style.display = "block";
        hide_password.style.display = "none";
      } else {
        password.type = "password";
        show_password.style.display = "none";
        hide_password.style.display = "block";
      }
    },
    displaySecondPassword() {
      let second_password = document.getElementById("second_password");
      let show_second_passwordd = document.getElementById(
        "show_second_passwordd"
      );
      let hide_second_passwordd = document.getElementById(
        "hide_second_passwordd"
      );
      if (second_password.type === "password") {
        second_password.type = "text";
        show_second_passwordd.style.display = "block";
        hide_second_passwordd.style.display = "none";
      } else {
        second_password.type = "password";
        show_second_passwordd.style.display = "none";
        hide_second_passwordd.style.display = "block";
      }
    },
    submit() {
      this.changePassword();
    },
  },
};
</script>

<style>
.forgot_password_wrap {
  margin: 40px auto;
  width: 30%;
}
/* .forgot_password_content {
  margin-top: 200px;
} */

.eye_icon {
  font-size: 15px;
  display: none;
  cursor: pointer;
}
.eye_slash_icon {
  font-size: 15px;
  cursor: pointer;
}

.form-control {
  color: grey;
  min-height: 7vh;
  padding: 10px;
}

.password_wrap {
  border-radius: 0.25rem;
  display: block;
  width: 100%;
  padding: 10px;
  height: calc(2em + 0.75rem + 2px);
  font-size: 1rem;
  font-weight: 400;
  color: #495057;
  border: 1px solid #ced4da !important;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.35rem;
}
.password_wrap input {
  width: 100%;
  outline: none;
  color: grey;
}

.form-control:focus {
  box-shadow: none;
  border-color: #c5cbcc;
}
.forgot-password-wrap {
  cursor: pointer;
}
.password_link,
.sign_up_link {
  cursor: pointer;
  color: #1d83c5;
  font-size: 13px;
}
.login_wrap {
  font-size: 14px;
}

.forgot_button .v-btn {
  background-color: #00e8fe !important;
  color: #000 !important;
  text-transform: none;
  padding: 25px 30px !important;
  /* width: 30%; */
  font-size: 18px;
  width: 100%;
  box-shadow: none;
}

@media (max-width: 768px) {
  .forgot_password_wrap {
    padding: 10px;
    margin: 0;
    width: 100%;
  }
  .password_wrap {
    font-size: 13px;
  }
  .form-control,
  label,
  .login_wrap,
  .password_link,
  .sign_up_link {
    font-size: 13px;
  }
  .login_button {
    font-size: 15px;
  }
  .form-control {
    height: 5%;
  }
}
</style>