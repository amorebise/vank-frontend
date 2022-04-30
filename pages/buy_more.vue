<template>
  <div>
    <user-nav-component />
    <div class="buy_more_wrap">
      <div class="withdraw_wrap">
        <h5>
          <nuxt-link to="/user_dashboard/dashboard"
            ><font-awesome-icon
              class="fa-1x text-white bg-primary"
              :icon="['fas', 'arrow-left']"
            />
          </nuxt-link>

          <span>Buy More</span>
        </h5>
      </div>
      <div class="buy_plan_wrap mt-5">
        <div class="">
          <p>What do you want to buy?</p>
          <div class="mt-3">
            <form action="" @submit.prevent="request_asset()">
              <div class="form-group mt-4">
                <div class="form-check form-check-inline mx-1">
                  <input
                    v-model="buy_option_info.usdt"
                    class="form-check-input"
                    type="radio"
                    id="inlineCheckbox2"
                    value="usdt"
                  />
                </div>
                <label class="" for="">USDT </label>
                <input
                  type="number"
                  class="form-control"
                  v-model="buy_option_info.usdt_amount"
                  placeholder="Enter Amount in Naira"
                />
              </div>
              <div class="form-group mt-4">
                <div class="form-check form-check-inline mx-1">
                  <input
                    v-model="buy_option_info.btc"
                    class="form-check-input"
                    type="radio"
                    id="inlineCheckbox2"
                    value="btc"
                  />
                </div>
                <label class="" for="">BTC </label>
                <input
                  type="number"
                  class="form-control"
                  v-model="buy_option_info.btc_amount"
                  placeholder="Enter Amount in Naira"
                />
              </div>
              <div class="form-group mt-4">
                <div class="form-check form-check-inline mx-1">
                  <input
                    v-model="buy_option_info.vank_basket"
                    class="form-check-input"
                    type="radio"
                    id="inlineCheckbox2"
                    value="btc"
                  />
                </div>
                <label class="" for="">VANK Basket Plan </label>
                <input
                  type="number"
                  class="form-control"
                  v-model="buy_option_info.amount"
                  placeholder="Enter Amount in Naira"
                />
              </div>
              <div class="mt-4">
                <v-btn
                  class="login_button w-100"
                  :loading="loading"
                  value="Buy Now"
                  type="submit"
                  >Buy Now</v-btn
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footer-section />
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      loading: false,
      buy_option_info: {
        btc: "",
        usdt: "",
        vank_basket: "",
        usdt_amount: "",
        btc_amount: "",
        amount: "",
      },
    };
  },
  methods: {
    async request_asset() {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          "/subscribe",
          this.buy_option_info
        );
        this.$toast.success("Your Request Has Been Sent", {
          timeout: 5000,
        });
        console.log(response);
        this.loading = false;
        this.$router.push("/user_dashboard/dashboard");
        this.buy_option_info = {};
      } catch (error) {
        console.log(error.response);
        this.loading = false;
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
}

.buy_more_wrap {
  padding: 50px 100px;
}
.buy_more_wrap h5 {
  color: #1d83c5;
  font-weight: 700;
  letter-spacing: 1px;
}
.buy_more_wrap p {
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 1px;
}
.buy_plan_wrap {
  width: 35%;
  margin: 60px auto;
}
.buy_plan_wrap label {
  font-size: 14px;
}

.buy_more_wrap .form-control {
  box-shadow: none;
  padding: 10px;
  height: 50px;
}
.buy_more_wrap .form-control:focus {
  border-color: rgba(128, 128, 128, 0.39);
}

.buy_more_wrap input::-webkit-outer-spin-button,
.buy_more_wrap input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.buy_more_wrap .v-btn {
  background-color: #00e8fe !important;
  text-transform: none;
  box-shadow: none;
  height: 45px !important;
}

@media (max-width: 768px) {
  .buy_more_wrap {
    padding: 10px;
  }
  .buy_more_wrap .mx-2 {
    margin: 0 5px !important;
  }
  .buy_more_wrap h5,
  .buy_more_wrap input,
  .buy_more_wrap label {
    font-size: 15px;
  }
  .buy_more_wrap p {
    font-size: 14px;
  }
  .buy_more_wrap .form-check-inline {
    font-size: 13px;
  }
  .buy_plan_wrap {
    width: 100%;
  }
}
</style>