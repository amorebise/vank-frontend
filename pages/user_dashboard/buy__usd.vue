<template>
  <div class="pay_bills_wrap w-100">
    <div class="usd">
      <user-nav name="Make Payments" />
      <div class="payments_wrap subscriber">
        <div class="token__wrap py-5">
          <h6 class="font-weight-bolder">How much Dollars do you want?</h6>

          <div class="form-group mx-2 mt-2">
            <label for="" class="">Enter Amount</label>
            <div class="d-flex" style="gap: 5px">
              <input type="password" class="form-control" />
              <div class="pt-2">
                <p style="font-weight: 600">USD</p>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center" style="gap: 5px">
            <p>You pay</p>
            <div
              class="px-1"
              style="
                width: 50px;
                display: grid;
                place-items: center;
                height: 20%;
                padding-top: 15px;
                border: 1px solid #8692a6;
              "
            >
              <p class="">&#8358;1234</p>
            </div>
          </div>
          <div class="view__assets__wrap text-center">
            <nuxt-link to="/user_dashboard/cash_subscription_wallet">
              <button class="assets__link">
                <span class="px-3">Pay with Cash Wallet</span>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import creator_sidebar from "~/components/creator_sidebar.vue";
export default {
  components: { creator_sidebar },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Karla&family=Lato&family=Nunito&family=Plus+Jakarta+Sans&family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  text-decoration: none !important;
}
.usd {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;

  /* padding: 0 50px; */
}
.usd .token__wrap {
  border: 1px solid #00e8fe;
  width: 50%;
  margin: 40px auto;
  display: grid;
  place-items: center;
  border-radius: 20px;
  min-height: 25vh;
}
.usd .select {
  width: 250px;
  box-shadow: none;
  font-size: 12px;
}
.usd label {
  font-size: 13px;
}
.usd p {
  font-size: 12px;
}
.usd .select:focus {
  border-color: #3030303a;
}

@media (max-width: 768px) {
  .settings {
    margin-left: 0 !important;
    padding: 0;
  }
  .payments_wrap {
    margin: 10px;
  }
}
</style>