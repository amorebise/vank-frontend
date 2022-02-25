<template>
  <div>
    <user-nav-component />
    <div class="verification_page">
      <h5>
        <nuxt-link class="withdraw_link" to="/withdrawal_page">
          Withdraw /</nuxt-link
        >
        <span>Verification</span>
      </h5>
      <div class="verify_wrap d-flex justify-content-center">
        <div class="send_code_wrap mt-5">
          <form action="" @submit.prevent="onSubmit()">
            <div class="form-group py-2">
              <label for="">Email</label>
              <div class="d-flex input_wrap">
                <input
                  type="text"
                  class="form-control"
                  v-model="withdrawal_info.email_code"
                  placeholder="enter code"
                  required
                />
                <v-btn class="send_code_button" type="submit">Send Code</v-btn>
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
                  v-model="withdrawal_info.phone_code"
                  required
                />
                <v-btn class="send_code_button" type="submit">Send Code</v-btn>
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
    <footer-section />
  </div>
</template>

<script>
export default {
  // middleware: "auth",
  data() {
    return {
      loading: false,
      withdrawal_info: {
        email_code: "",
        phone_code: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      console.log(this.withdrawal_info);
      this.$router.push("/success");
    },
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
  padding: 60px 100px;
  margin-top: 100px;
}
.verification_page span {
  color: #18a0fb;
  cursor: pointer;
}
.verify_wrap {
  width: 40%;
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
  background-color: #00e8fe;
  font-size: 15px;
  padding: 5px;
  box-shadow: none !important;
  text-transform: none;
  margin-top: 1px;
}
.withdraw_button {
  height: 50px !important;
  font-size: 15px !important;
}

@media (max-width: 768px) {
  .verification_page {
    padding: 10px;
  }
  .verify_wrap {
    width: 100%;
  }
}
</style>