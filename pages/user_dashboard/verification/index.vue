<template>
  <div>
    <user-nav-component />
    <div class="verification_page">
      <h5>
        <font-awesome-icon
          @click="back()"
          class="fa-1x text-white bg-primary"
          :icon="['fas', 'arrow-left']"
        />
        Withdraw /
        <span>Verification</span>
      </h5>
      <div class="verify_wrap">
        <div class="send_code_wrap mt-5">
          <form action="" @submit.prevent="withdraw_asset()">
            <div class="form-group py-2">
              <label for="">Email</label>
              <div class="d-flex input_wrap">
                <input
                  type="text"
                  class="form-control"
                  v-model="withdrawal_info.two_factor_code_email"
                  placeholder="enter code"
                  required
                />
                <v-btn
                  @click="sendEmail()"
                  class="send_code_button"
                  type="submit"
                  >Send Code</v-btn
                >
              </div>
            </div>

            <!-- Phone Number -->
            <div class="form-group py-2">
              <label for="">Phone Number</label>
              <div class="d-flex input_wrap">
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter code"
                  v-model="withdrawal_info.two_factor_code_sms"
                  required
                />
                <v-btn @click="sendSms()" class="send_code_button"
                  >Send Code</v-btn
                >
              </div>
              <span>You must send code to both email and phone number</span>
            </div>
            <div class="mt-3">
              <v-btn
                class="withdraw_button w-100"
                :loading="loading"
                value="Withdraw"
                type="submit"
                >Withdraw</v-btn
              >
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- <footer-section /> -->
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      loading: false,
      withdrawal_info: {
        two_factor_code_email: "",
        two_factor_code_sms: "",
      },
      newUser: {},
    };
  },
  methods: {
    async getUser() {
      let auth = this.$auth.$storage._state;
      let token = null;

      for (const key in auth) {
        console.log(key);

        if (key == "_token.local") {
          token = auth[key];
        } else {
          console.log("No");
        }
      }

      console.log(token);

      // console.log(this.$auth.$storage._state._token);
      try {
        let res = await this.$axios.get("/getAsset", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });

        this.newUser = res.data[0];

        console.log(this.newUser);
      } catch (error) {
        console.log(error.response);
      }
    },
    async withdraw_asset() {
      try {
        let user_id = this.newUser.id;
        this.loading = true;
        const response = await this.$axios.post(
          `/withdraw/${user_id}`,
          this.withdrawal_info
        );
        console.log(response);
        console.log(this.newUser.id);
        this.$router.push("/success");
      } catch (error) {
        this.loading = false;
        console.log(error.response);
      } finally {
        this.withdrawal_request = {};
      }
    },
    async sendSms() {
      try {
        // var user_id = this.newUser.id;
        const response = await this.$axios.post("/sendSmsCode");
        console.log(response);
        this.$toast.success("Sms Has been Sent", {
          timeout: 5000,
        });
        // consoloe.log(user_id);
      } catch (error) {
        console.log(error.response);
      }
    },
    async sendEmail() {
      try {
        const response = await this.$axios.post(
          "/sendEmailCode"
          // this.withdrawal_info.two_factor_code_email
        );
        console.log(response);
        this.$toast.success("Email Has been Sent", {
          timeout: 5000,
        });
      } catch (error) {
        console.log(error.response);
      }
    },
    // onSubmit() {
    //   this.loading = true;

    //   console.log(this.withdrawal_info);
    //
    // },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
}
.verification_page {
  /* padding: 0 100px 100px 100px; */
  margin-top: 100px;
  margin-left: 273px;
}
.verification_page span {
  font-weight: 600;
}
.fa-1x {
  cursor: pointer;
}
.verify_wrap {
  width: 35%;
  margin: 0 auto;
}
.verify_wrap .input_wrap {
  border: 1px solid #3030304b;
  border-radius: 5px;
  padding: 5px;
}
.verify_wrap .form-control {
  border: none;
  box-shadow: none;
}
.verify_wrap span {
  color: #18a0fb;
  font-size: 11px;
}
.withdraw_link {
  color: #303030;
}
.send_code_wrap .v-btn {
  background-color: inherit;
  color: #00e8fe;
  font-size: 15px;
  padding: 5px;
  box-shadow: none !important;
  text-transform: none;
  margin-top: 1px;
}
.withdraw_button {
  height: 50px !important;
  font-size: 15px !important;
  background-color: #00e8fe !important;
  color: #303030 !important;
  box-shadow: none !important;
  text-transform: none;
  margin-top: 1px;
}

@media (max-width: 768px) {
  .verification_page {
    padding: 10px;
    margin-top: 50px;
  }
  .verify_wrap {
    width: 100%;
  }
  .verification_page h5 {
    font-size: 15px;
  }
  .verification_page .form-control,
  .verification_page .form-group {
    font-size: 14px;
  }
  .send_code_wrap .v-btn {
    font-size: 13px;
  }
}
</style>