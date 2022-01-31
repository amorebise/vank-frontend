<template>
  <div class="admin_login_wrap">
    <div class="login-content">
      <div class="login_section">
        <form class="mt-3" method="post" @submit.prevent="submit()">
          <div class="form-group py-3">
            <label class="py-2" for="">Email/Phone Number</label>
            <input
              type="text"
              class="form-control"
              v-model="login.email"
              placeholder="Enter your Full Names"
            />
          </div>
          <div class="form-group py-3">
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
                v-model="login.password"
                required
                placeholder="Enter Password"
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
            <div class="text-right">
              <nuxt-link to="/forgot_password" class="password_link"
                >forgot password?</nuxt-link
              >
            </div>
          </div>

          <div class="text-center">
            <v-btn class="login_button" value="Login" type="submit"
              >Log In</v-btn
            >
            <div class="login_wrap mt-3">
              <p>
                Don’t have an account?
                <nuxt-link
                  to="/sign_up"
                  class="sign_up_link text-decoration-none"
                  >Sign up here</nuxt-link
                >
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      // loading: false,
    };
  },
  // methods: {
  //   async userLogin() {
  //     try {
  //       let response = await this.$auth.loginWith('local', { data: this.login })
  //       console.log(response)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  // },
  methods: {
    // userLogin(){
    //   this.$router.push('/userrList');
    // }
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
    submit() {
      consol.log(this.login);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none !important;
}
.v-btn {
  background-color: #00e8fe !important;
  color: #000 !important;
  text-transform: none;
  padding: 25px 30px !important;
  width: 30%;
  font-size: 20px;
  width: 100%;
}

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
  color: #c5cbcc;
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
}

@media (max-width: 768px) {
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