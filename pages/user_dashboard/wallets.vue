<template>
  <div class="pay_bills_wrap w-100">
    <div class="continue__payments">
      <user-nav class="continue__nav estate__nav py-4" name="Make Payments" />
      <div class="payments_wrap subscriber px-3">
        <div>
          <h6>What kind of transaction do you want to make?</h6>
        </div>
        <div class="wallet__type">
          <div class="d-flex justify-content-between" style="gap: 10px">
            <div class="wallets">
              <button id="nairaBtn">Naira Wallet</button>
            </div>
            <div class="wallets">
              <nuxt-link to="/user_dashboard/real_estate_wallet/">
                <button id="estateBtn">Real Estate Wallet</button>
              </nuxt-link>
            </div>
            <div class="wallets">
              <!-- <nuxt-link to="/user_dashboard/buy__usd/"> -->
              <button id="usdBtn">USD Wallet</button>
              <!-- </nuxt-link> -->
            </div>
            <div class="wallets">
              <!-- <nuxt-link to="/user_dashboard/stake_borrow_wallet/"> -->
              <button id="stakeBtn">Stake/Borrow Wallet</button>
              <!-- </nuxt-link> -->
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
            mt-2
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
            &#x20A6;{{ cash_wallet_ballance.cash_wallet_balance }}
          </p>
        </div>
        <div class="token__wrap py-5">
          <div class="view__assets__wrap text-center">
            <div class="d-flex justify-content-between">
              <div>
                <button
                  @click="executeFunding()"
                  style="background-color: #00e8fe"
                  class="btn"
                >
                  Cash Wallet
                </button>
              </div>
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
                <span class="text font-weight-bolder">Cash Wallet</span> <br />
                Where your money goes when you fund. You can withdraw from your
                cash wallet to your bank account
              </p>
            </div>

            <div class="d-flex justify-content-between mt-1">
              <div>
                <button
                  @click="executeFunding()"
                  style="background-color: #00e8fe"
                  class="btn"
                >
                  Subscription Wallet
                </button>
              </div>
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
                <span class="text font-weight-bolder"
                  >Subscription Wallet
                </span>
                <br />
                Where your money goes when you sell. You can withdraw from your
                subscription wallet to your cash wallet.
              </p>
            </div>
            <div class="mt-4">
              <div>
                <button @click="executeFunding()" class="assets__link">
                  <span class="px-3" style="font-weight: 400"
                    >Fund My Wallet</span
                  >
                </button>
              </div>
            </div>
            <div class="payment__body pt-2">
              <p style="font-size: 12px" class="text-danger">
                N/B: Update your bank details in settings page before performing
                any transaction!!
              </p>
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
  middleware: "auth",
  components: { creator_sidebar },
  data() {
    return {
      user: {},
      cash_wallet_ballance: {},
      show__modal: false,
      show__second__modal: false,
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
        let res = await this.$axios.get("/getUser", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        this.user = res.data[0];
        console.log(this.user);
      } catch (error) {
        console.log(error.response);
      }
    },
    async getCashWalletBallance() {
      let response = await this.$axios.get("/getWalletBalance");
      this.cash_wallet_ballance = response.data;
      console.log(this.cash_wallet_ballance);
    },
    executeFunding() {
      let verify = this.user.bank;
      if (verify) {
        this.$router.push("/user_dashboard/cash_subscription_wallet/");
        console.log(verify);
      } else {
        this.$toast.warning("update bank details", { timeout: 5000 });
      }
    },
  },
  created() {
    this.getUser();
    this.getCashWalletBallance();
  },
};
</script>

<style>
.continue__payments {
  margin-left: 270px;
  background-color: #fff;
  /* padding: 0 50px; */
}
.continue__payments .continue__nav {
  padding-left: 15px;
  padding-right: 15px;
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
#nairaBtn {
  background-color: #00e8fe;
}
/* .continue__payments .wallets button:hover {
  border: none;
  
} */
.continue__payments .token__wrap {
  border: 1px solid #00e8fe;
  width: 50%;
  margin: 40px auto;
  padding: 0 40px;
  border-radius: 20px;
  min-height: 300px;
}
.continue__payments .assets__link {
  border: 1px solid #00e8fe;
  padding: 10px 2px;
  border-radius: 4px;
  color: #000;
  font-weight: 600;
}
.continue__payments .assets__link {
  border: 1px solid #00e8fe;
  padding: 12px 2px;
}

.continue__payments .assets__link span {
  background-color: #fff;
  border: 1px solid #00e8fe;
  padding: 12px 1px;
  font-size: 14px;
}

.continue__payments h5 {
  font-size: 16px;
}

@media (max-width: 768px) {
  .continue__payments {
    margin-left: 0 !important;
    padding: 0;
  }
  .payments_wrap {
    padding: 20px !important;
    padding-top: 80px !important;
  }
  .continue__payments .wallet__type {
    gap: 10px;
    margin-top: 15px;
  }
  .continue__payments .wallet__type button {
    font-size: 11px;
  }
  .continue__payments .wallet__balance__wrap img {
    width: 27px;
  }
  .continue__payments .wallet__balance__wrap p {
    font-size: 27px !important;
  }
  .continue__payments .token__wrap {
    width: 100%;
    margin: 20px auto;
  }
  .continue__payments h6 {
    font-size: 14px;
  }
  .continue__payments .continue__nav {
    padding-left: 0;
    padding-right: 0;
  }
  .continue__payments .view__assets__wrap .btn {
    font-size: 12px;
  }
}
</style>