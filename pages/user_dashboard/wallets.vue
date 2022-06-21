<template>
  <div class="pay_bills_wrap w-100">
    <div class="continue__payments">
      <user-nav name="Make Payments" />
      <div class="payments_wrap subscriber px-3">
        <div>
          <h6>What kind of transaction do you want to make?</h6>
        </div>
        <div class="walet__type">
          <div class="d-md-flex justify-content-between">
            <div class="wallets">
              <button>Naira Wallet</button>
            </div>
            <div class="wallets">
              <nuxt-link to="/user_dashboard/real_estate_wallet/">
                <button>Real Estate Wallet</button>
              </nuxt-link>
            </div>
            <div class="wallets">
              <nuxt-link to="/user_dashboard/buy__usd/">
                <button>USD Wallet</button>
              </nuxt-link>
            </div>
            <div class="wallets">
              <nuxt-link to="/user_dashboard/stake_borrow_wallet/">
                <button>Stake/Borrow Wallet</button>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
          class="
            wallet__balance__wrap
            d-flex
            justify-content-center
            align-items-center
            pt-3
          "
          style="gap: 10px"
        >
          <img src="/swal.svg" alt="wallet image" />
          <p
            style="
              color: #00e8fe;
              font-size: 36px;
              padding-top: 12px;
              font-weight: 600;
            "
          >
            &#x20A6;375,000.00
          </p>
        </div>
        <div class="token__wrap py-5">
          <div class="view__assets__wrap text-center">
            <div class="d-flex justify-content-between">
              <nuxt-link to="/user_dashboard/cash_subscription_wallet">
                <h6>Cash Wallet &#x20A6;300,000.00</h6>
              </nuxt-link>
              <div @mouseover="show__modal = !show__modal">
                <font-awesome-icon
                  id="show_password"
                  class="text-muted eye_icon"
                  :icon="['fas', 'exclamation-circle']"
                />
              </div>
            </div>
            <div
              @mouseleave="show__modal = !show__modal"
              v-show="show__modal"
              style="position: relative"
            >
              <p
                style="
                  font-size: 11px;
                  position: absolute;
                  top: -40px;
                  right: -40px;
                  width: 200px;
                  padding: 5px 10px;
                  background-color: #00e8fe;
                "
              >
                <span class="font-weight-bolder">Cash Wallet</span> <br />
                Where your money goes when you fund. You can withdraw from your
                cash wallet to your bank account
              </p>
            </div>

            <div class="d-flex justify-content-between">
              <h6>Subscription Wallet &#x20A6;75,000.00</h6>
              <div @mouseover="show__second__modal = !show__second__modal">
                <font-awesome-icon
                  id="show_password"
                  class="text-muted eye_icon"
                  :icon="['fas', 'exclamation-circle']"
                />
              </div>
            </div>

            <div
              @mouseleave="show__second__modal = !show__second__modal"
              v-show="show__second__modal"
              style="position: relative"
            >
              <p
                style="
                  font-size: 11px;
                  position: absolute;
                  top: -40px;
                  right: -40px;
                  width: 200px;
                  padding: 5px 10px;
                  background-color: #00e8fe;
                "
              >
                <span class="font-weight-bolder">Subscription Wallet </span>
                <br />
                Where your money goes when you sell. You can withdraw from your
                subscription wallet to your cash wallet.
              </p>
            </div>
            <div class="mt-4">
              <nuxt-link to="/user_dashboard/fund_wallet">
                <button class="assets__link">
                  <span class="px-3" style="font-weight: 400"
                    >Fund My Wallet</span
                  >
                </button>
              </nuxt-link>
            </div>
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
    return {
      show__modal: false,
      show__second__modal: false,
    };
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

.continue__payments {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;

  /* padding: 0 50px; */
}
.continue__payments a {
  color: inherit;
}
.continue__payments .wallets button {
  border: 1px solid #00e8fe;
  border-radius: 5px;
  padding: 4px 10px;
  font-size: 13px;
}
.continue__payments .wallets button:hover {
  border: none;
  background-color: #00e8fe;
}
.continue__payments .token__wrap {
  border: 1px solid #00e8fe;
  width: 50%;
  margin: 40px auto;
  padding: 0 40px;
  border-radius: 20px;
  min-height: 300px;
}

.continue__payments h5 {
  font-size: 16px;
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