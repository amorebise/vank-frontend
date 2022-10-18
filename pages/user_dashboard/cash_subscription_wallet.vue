<template>
  <div class="exam_token_wrap w-100">
    <div class="cash__sub__wrap">
      <user-nav class="estate__nav py-4" name="Wallets" />
      <div class="cash__sub__body pt-3">
        <div class="back__btn">
          <font-awesome-icon @click="back()" role="button" class="fa-1x text-dark pl-1" :icon="['fas', 'arrow-left']" />
        </div>
        <div class="transactions_wrap mt-3">
          <template>
            <v-tabs class="px-3" v-model="tab" align-with-title>
              <v-tab>Cash Wallet</v-tab>
              <v-tab>Subscription Wallet</v-tab>
            </v-tabs>
          </template>
          <v-tabs-items v-model="tab" class="tab_bg">
            <v-tab-item>
              <v-card flat>
                <v-card-text class="">
                  <div class="transactions_data">
                    <div class="
                        wallet__balance__wrap
                        d-flex
                        justify-content-center
                        align-items-center
                        pt-3
                      " style="gap: 10px">
                      <p v-if="cash_wallet_ballance.cash_wallet_balance" class="txn__paragh" style="
                          color: #00e8fe;
                          font-size: 30px;
                          padding-top: 12px;
                          font-weight: 600;
                        ">
                        <span v-if="cash_wallet_ballance" class="text-dark">Wallet Balance:</span>
                        &#x20A6;{{ cash_wallet_ballance.cash_wallet_balance }}
                      </p>
                      <p v-else class="txn__paragh" style="
                          color: #00e8fe;
                          font-size: 30px;
                          padding-top: 12px;
                          font-weight: 600;
                        ">
                        <span class="text-dark">Wallet Balance:</span>
                        &#x20A6;0
                      </p>
                    </div>
                  </div>
                  <div class="text-center font-weight-bold">
                    <h6>Choose what kind of transaction</h6>
                  </div>
                  <div class="choose__txn__wrap">
                    <div class="token__wrap py-5">
                      <div class="form-group mx-2 mt-2">
                        <label for="exampleFormControlSelect1 font-weight-bolder" class="">Choose Transaction
                          (fund,withdraw etc)</label>
                        <select class="form-control option-class select" id="exampleFormControlSelect1"
                          v-model="txn.option" required>
                          <option>Select</option>
                          <option v-for="(option, index) in funding_options" :key="index" :value="option" class="colour"
                            id="selectCountry">
                            {{ option }}
                          </option>
                        </select>
                      </div>

                      <div class="form-group mx-2 mt-2">
                        <label for="" class="">What is your transaction amount?</label>
                        <input type="number" class="form-control" placeholder="Enter Amount"
                          v-model="fund_wallet.amount" />
                      </div>
                      <div class="view__assets__wrap text-center">
                        <button @click="goToSelectedTxnType()" class="assets__link">
                          <span class="px-3">Next</span>
                        </button>
                      </div>
                      <div v-show="success__modal" class="pop__up">
                        <div class="pop__up__content zoomIn">
                          <div class="text-center">
                            <img src="/emoji.png" alt="" />
                            <p>Transaction Successful!!</p>
                            <button @click="$router.push('/user_dashboard/wallets/')">
                              ok
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-text class="">
                  <div class="transactions_data">
                    <div class="choose__txn__wrap py-5">
                      <div class="
                          wallet__balance__wrap
                          d-flex
                          justify-content-center
                          pt-3
                        " style="gap: 10px">
                        <p v-if="
                          cash_wallet_ballance.subscription_wallet_balance
                        " class="cash__paragh" style="
                            color: #00e8fe;
                            font-size: 20px;
                            padding-top: 12px;
                            font-weight: 600;
                          ">
                          <span class="text-dark">Wallet Balance:</span>
                          &#x20A6;{{
                          cash_wallet_ballance.subscription_wallet_balance
                          }}
                        </p>
                        <p v-else class="cash__paragh" style="
                            color: #00e8fe;
                            font-size: 20px;
                            padding-top: 12px;
                            font-weight: 600;
                          ">
                          <span class="text-dark">Wallet Balance:</span>
                          &#x20A6;0
                        </p>
                      </div>
                      <div class="view__assets__wrap text-center">
                        <!-- <nuxt-link to="/user_dashboard/cash_success/"> -->
                        <button @click="amount__modal = !amount__modal" class="assets__link">
                          <span class="px-3">Transfer to Cash Wallet</span>
                        </button>
                        <!-- </nuxt-link> -->
                        <div v-show="amount__modal" class="pop__up">
                          <div class="pop__up__content zoomIn">
                            <div class="text-right">
                              <p role="button" @click="amount__modal = !amount__modal" style="font-size: 20px">
                                &times;
                              </p>
                            </div>
                            <div class="text-center">
                              <div class="form-group mx-2 mt-2">
                                <label for="" class="">What is your transaction amount?</label>
                                <input type="number" class="form-control" placeholder="Enter Amount"
                                  v-model="fund_wallet.amount" />
                              </div>
                              <button @click="transferToCashWallet()">
                                Transfer
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
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
      tab: null,
      cash_wallet_ballance: {},
      // default_amount: '50000',
      txn: {
        option: "",
        amount: "",
      },
      fund_wallet: {
        amount: "",
      },
      funding_options: [
        "Transfer to your subscription wallet",
        "Fund wallet",
        "Withdraw to bank",
      ],
      success__modal: false,
      amount__modal: false,
      amount: {},
    };
  },

  methods: {
    goToSelectedTxnType() {
      if (this.txn.option == "Fund wallet") {
        this.fundWallet();
        this.createReservedAccount()
        this.saveAmount();
        this.$router.push("/user_dashboard/bank_transfer/");
      } else if (this.txn.option == "Withdraw to bank") {
        this.saveAmount();
        this.withdrawFunds();
      } else if (this.txn.option == "Transfer to your subscription wallet") {
        this.executeFunding()
        this.saveAmount();
      }
    },
    async getCashWalletBallance() {
      let response = await this.$axios.get("/getWalletBalance");
      this.cash_wallet_ballance = response.data;
      console.log(this.cash_wallet_ballance);
    },
    async fundWallet() {

      try {
        let response = await this.$axios.post(
          "/topUpCashWallet",
          this.fund_wallet
        );
        this.saveAmount();
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },
    async transferToCashWallet() {
      try {
        let response = await this.$axios.post(
          "/fundCashWallet",
          this.fund_wallet
        );
        this.amount__modal = !this.amount__modal;
        this.$toast.success("success!! wallet will be updated after approval");
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },

    async createReservedAccount() {
      try {
        let response = await this.$axios.post('/createNewReservedAccount')
        console.log(response)
        this.$toast.success('Reserved Account Created!!', { timeout: 5000 })
      }
      catch (error) {
        console.log(error.response);
      }
    },

    async withdrawFunds() {
      try {
        let response = await this.$axios.post("/withdrawal", this.fund_wallet);
        console.log(response);
        this.$router.push("/verification/");
      } catch (error) {
        console.log(error.response);
      }
    },
    executeFunding() {
      let fundingAmount = Number(this.fund_wallet.amount)
      let cashBalance = Number(this.cash_wallet_ballance.cash_wallet_balance)
      if (fundingAmount > cashBalance) {
        this.$toast.warning('amount exceeds available funds in cashwallet')
        console.log('Hi')
      }
      else {
        this.fundSubscriptionWallet()
      }
    },
    async fundSubscriptionWallet() {

      try {
        let response = await this.$axios.post(
          "/fundSubscriptionWallet",
          this.fund_wallet
        );
        this.$router.push("/user_dashboard/transfer_to_sub_wallet/");
        console.log(response);
      } catch (error) {
        console.log(error.response);

      }
    },
    saveAmount() {
      this.amount = this.fund_wallet;
      localStorage.setItem("marketMakerKey", JSON.stringify(this.amount));
      console.log(this.amount);
      this.loading = false;
      // this.$router.push("/user_dashboard/payment");
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getCashWalletBallance();
    // this.fund_wallet.amount = this.default_amount
  },
};
</script>

<style >
.cash__sub__wrap {
  margin-left: 230px;
  background-color: #fff;
  height: 100%;
  padding: 0 50px;
}

.cash__sub__wrap .v-slide-group {
  flex-wrap: wrap;
  /* padding: 10px; */
}

.cash__sub__wrap .theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),
.cash__sub__wrap .theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon,
.cash__sub__wrap .theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,
.cash__sub__wrap .theme--light.v-tabs>.v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}

.cash__sub__wrap .v-tab {
  text-transform: unset;
}

.cash__sub__wrap .transactions_data {
  background-color: #fff;
}

/* .cash__sub__wrap
  .transactions_data
  .v-data-table--fixed-header
  > .v-data-table__wrapper {
  background-color: #f8f7ff;
} */
.cash__sub__wrap .transactions_data .v-data-table>.v-data-table__wrapper>table {
  background-color: #fff;
}

.cash__sub__wrap .transactions_data .th_color {
  background-color: #f8f7ff !important;
  border-bottom: none !important;
}

.cash__sub__wrap .choose__txn__wrap {
  border: 1px solid #00e8fe;
  border-radius: 20px;
  margin: 40px auto;
  width: 50%;

  padding: 10px 40px;
}

.cash__sub__wrap .choose__txn__wrap .form-control {
  font-size: 13px;
  box-shadow: none;
}

.cash__sub__wrap .choose__txn__wrap .form-control:focus {
  border-color: #30303044;
}

.cash__sub__wrap .pop__up {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #30303044;
  display: grid;
  place-items: center;
}

.cash__sub__wrap .pop__up__content {
  background-color: #fff;
  padding: 15px 30px;
  border-radius: 10px;
}

.cash__sub__wrap .pop__up__content button {
  padding: 3px 10px;
  background-color: #00e8fe;
  border-radius: 5px;
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

/* .transactions_data
  .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border: none;
  box-shadow: none;
} */
/* tr {
  margin-top: 100px !important;
}
.warning {
  background: rgba(231, 171, 54, 0.1);
  border-radius: 4px;
  font-weight: 600;
}
.warning p {
  padding-top: 10px;
}
.success {
  background: rgba(30, 151, 57, 0.1);
  border-radius: 4px;
  font-weight: 600;
}
.success p {
  padding-top: 10px;
} */
@media (max-width: 768px) {
  .cash__sub__wrap {
    margin-left: 0 !important;
    padding: 0 !important;
  }

  .back__btn {
    padding-left: 20px;
  }

  .cash__sub__wrap .wallet__balance__wrap {
    margin-top: 0 !important;
  }

  .cash__sub__wrap .wallet__balance__wrap .txn__paragh {
    font-size: 20px !important;
    padding-top: 0 !important;
  }

  .cash__sub__wrap .choose__txn__wrap {
    border: 1px solid #00e8fe;
    border-radius: 20px;
    margin: 40px auto;
    width: 100% !important;

    padding: 10px 40px;
  }

  .cash__paragh {
    font-size: 16px !important;
  }
}
</style>