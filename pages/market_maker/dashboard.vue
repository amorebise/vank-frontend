<template>
  <div class="dashboard w-100">
    <div class="dashboard_content">
      <mm-nav name="Dashboard" />
      <div class="admin__wrap">
        <div class="mm__profile__wrap px-3">
          <div v-if="market_maker" class="d-flex align-items-center px-3 mb-2">
            <h5 class="user_font">
              Welcome,
              <span class="user_name">{{ market_maker.first_name }}</span>
            </h5>
            <div class="ml-1">
              <nuxt-img
                format="webp"
                quality="90"
                fit="cover"
                src="/emoji.png"
              />
            </div>
          </div>
          <p>
            IMPORTANT!!! In order to perform transactions, Kindly update your
            profile by clicking on the update button below.
          </p>
        </div>
        <div class="wallet__balance__wrap">
          <div class="balance__cards row align-items-center">
            <div class="col-md-6 d-flex justify-content-center">
              <div class="admin__balance__wrap mb-2 px-3 py-2">
                <div class="header__section d-flex align-items-center py-4">
                  <h5>USDT Balance</h5>
                </div>
                <div
                  class="wallet__amount__card mt-4 d-flex align-items-center"
                >
                  <div class="mm__image__card">
                    <nuxt-img
                      format="webp"
                      sizes="xs:35vw sm:30vw md:20vw lg:13vw"
                      quality="90"
                      fit="cover"
                      src="/tether.png"
                      alt="image"
                    />
                  </div>
                  <div class="mm__wallet__balance mx-2">
                    <p>{{ market_maker.wallet_balance }}</p>
                  </div>
                </div>
                <span>Total Investment</span>
              </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center">
              <div class="admin__wallet__wrap mb-2 px-3 py-2">
                <div class="header__section d-flex align-items-center py-3">
                  <h5>Payments</h5>
                </div>
                <div
                  class="wallet__amount__card d-flex align-items-center mt-4"
                >
                  <nuxt-img
                    format="webp"
                    quality="90"
                    fit="cover"
                    src="/mm_wallet.png"
                    alt="image"
                  />
                  <div class="invstmnt_wrap px-2">
                    <p>500,000</p>
                  </div>
                </div>

                <span>Withdrawals</span>
              </div>
            </div>
          </div>
          <div
            class="
              buttons__wrap
              d-flex
              justify-content-center
              align-items-center
              mt-4
            "
          >
            <div class="fund__wallet__route">
              <nuxt-link to="/market_maker/update_profile" class="link__buttons"
                >Update Profile</nuxt-link
              >
            </div>
            <div class="fund__wallet__routes mx-3">
              <button
                class="link__button"
                @click="fund_wallet_modal = !fund_wallet_modal"
              >
                Fund Wallet
              </button>
            </div>

            <!-- <div class="add__market__maker__route">
              <nuxt-link
                to="/admin_dashboard/add_market_maker"
                class="link__buttons"
                >Withdraw</nuxt-link
              >
            </div> -->
          </div>
          <div class="change__password__form" v-show="fund_wallet_modal">
            <div class="password__modal slideInDown py-4">
              <form
                action=""
                method="post"
                @submit.prevent="updateWalletBalance()"
              >
                <div class="form-group">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6 class="fund__wallet__text">Fund Wallet</h6>
                    <p class="" @click="fund_wallet_modal = !fund_wallet_modal">
                      x
                    </p>
                  </div>
                  <label class="mt-4" for="">Enter Amount</label>
                  <input
                    required
                    type="number"
                    :loading="loading"
                    class="form-control mt-2"
                    v-model="wallet_balance_update.wallet_balance"
                    placeholder="200,000USDT"
                  />
                </div>

                <v-btn
                  class="login_button"
                  :loading="loading"
                  value="Update"
                  type="submit"
                  >Submit</v-btn
                >
              </form>
            </div>
          </div>
        </div>
        <div class="transaction__wrap">
          <div class="txn__header py-3">
            <h5>Transaction History</h5>
          </div>
          <div class="txn__data px-3 py-2">
            <div class="search__input">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
              </div>
            </div>

            <div class="txn__table">
              <div class="admin__transactions">
                <div class="admin__transactions_wrap mt-3">
                  <template>
                    <v-tabs class="px-3" v-model="tab" align-with-title>
                      <v-tab>All transactions</v-tab>
                      <v-tab>Pending</v-tab>
                      <v-tab>Completed</v-tab>
                    </v-tabs>
                  </template>
                  <v-tabs-items v-model="tab" class="tab_bg">
                    <v-tab-item>
                      <v-card flat>
                        <v-card-text class="">
                          <div class="admin__transactions_data">
                            <v-simple-table fixed-header height="400px">
                              <template v-slot:default>
                                <thead>
                                  <tr class="">
                                    <th class="text-center th_color">Name</th>
                                    <th class="text-center th_color">Date</th>
                                    <th class="text-center th_color">
                                      Fiat amount
                                    </th>
                                    <th class="text-center th_color">
                                      Crypto amount
                                    </th>

                                    <th class="text-center th_color">
                                      Status(User)
                                    </th>
                                    <th class="text-center th_color">
                                      Status(Market Maker)
                                    </th>
                                    <th class="text-center th_color">
                                      Status(Admin)
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    class="mt-2"
                                    v-for="sub in subscriber"
                                    :key="sub.id"
                                  >
                                    <td>{{ sub.name }}</td>
                                    <td>{{ sub.subscription_date }}</td>
                                    <td>{{ sub.amount }}NGN</td>
                                    <td>{{ sub.usdt }}</td>
                                    <td>
                                      <div
                                        v-if="
                                          sub.user_confirmation ==
                                          'Payment made'
                                        "
                                        class="pending mt-2 text-center"
                                      >
                                        <p class="text-success py-2">
                                          {{ sub.user_confirmation }}
                                        </p>
                                      </div>
                                      <div v-else class="mt-2 text-center">
                                        <p class="text-warning py-2">
                                          {{ sub.user_confirmation }}
                                        </p>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        v-if="
                                          sub.mm_confirmation ==
                                          'Payment Confirmed'
                                        "
                                        class="pending mt-2 text-center"
                                      >
                                        <p class="text-success py-2">
                                          {{ sub.mm_confirmation }}
                                        </p>
                                      </div>
                                      <div v-else class="mt-2 text-center">
                                        <p class="text-warning py-2">
                                          {{ sub.mm_confirmation }}
                                        </p>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        v-if="
                                          sub.admin_confirmation == 'Approved'
                                        "
                                        class="pending mt-2 text-center"
                                      >
                                        <p class="text-success py-2">
                                          {{ sub.admin_confirmation }}
                                        </p>
                                      </div>
                                      <div v-else class="mt-2 text-center">
                                        <p class="text-warning py-2">
                                          {{ sub.admin_confirmation }}
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </template>
                            </v-simple-table>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat>
                        <v-card-text class="">
                          <div class="admin__transactions_data">
                            <v-simple-table fixed-header height="400px">
                              <template v-slot:default>
                                <thead>
                                  <tr class="">
                                    <th class="text-left th_color">Name</th>
                                    <th class="text-left th_color">Date</th>
                                    <th class="text-left th_color">
                                      Fiat amount
                                    </th>
                                    <th class="text-left th_color">
                                      Crypto amount
                                    </th>

                                    <th class="text-left th_color">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    class="mt-2"
                                    v-for="sub in subscriber"
                                    :key="sub.id"
                                  >
                                    <td v-if="sub.mm_confirmation == 'Pending'">
                                      {{ sub.name }}
                                    </td>
                                    <td v-if="sub.mm_confirmation == 'Pending'">
                                      {{ sub.subscription_date }}
                                    </td>
                                    <td v-if="sub.mm_confirmation == 'Pending'">
                                      {{ sub.amount }}NGN
                                    </td>
                                    <td v-if="sub.mm_confirmation == 'Pending'">
                                      {{ sub.usdt }}
                                    </td>
                                    <td v-if="sub.mm_confirmation == 'Pending'">
                                      <div class="pending mt-2 text-center">
                                        <p class="text-warning py-2">
                                          {{ sub.mm_confirmation }}
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </template>
                            </v-simple-table>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat>
                        <v-card-text class="">
                          <div class="admin__transactions_data">
                            <v-simple-table fixed-header height="400px">
                              <template v-slot:default>
                                <thead>
                                  <tr class="">
                                    <th class="text-left th_color">Name</th>
                                    <th class="text-left th_color">Date</th>
                                    <th class="text-left th_color">
                                      Fiat amount
                                    </th>
                                    <th class="text-left th_color">
                                      Crypto amount
                                    </th>

                                    <th class="text-left th_color">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    class="mt-2"
                                    v-for="sub in subscriber"
                                    :key="sub.id"
                                  >
                                    <td
                                      v-if="
                                        sub.mm_confirmation ==
                                        'Payment Confirmed'
                                      "
                                    >
                                      {{ sub.name }}
                                    </td>
                                    <td
                                      v-if="
                                        sub.mm_confirmation ==
                                        'Payment Confirmed'
                                      "
                                    >
                                      {{ sub.subscription_date }}
                                    </td>
                                    <td
                                      v-if="
                                        sub.mm_confirmation ==
                                        'Payment Confirmed'
                                      "
                                    >
                                      {{ sub.amount }}
                                    </td>
                                    <td
                                      v-if="
                                        sub.mm_confirmation ==
                                        'Payment Confirmed'
                                      "
                                    >
                                      {{ sub.btc }}
                                    </td>
                                    <td
                                      v-if="
                                        sub.mm_confirmation ==
                                        'Payment Confirmed'
                                      "
                                    >
                                      <div class="mt-2">
                                        <p
                                          id="confirmation"
                                          class="text-success py-2"
                                        >
                                          {{ sub.mm_confirmation }}
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </template>
                            </v-simple-table>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </div>
              </div>
            </div>
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
      loading: false,
      tab: null,
      fund_wallet_modal: false,
      subscriber: {},
      market_maker: {},
      wallet_balance_update: {
        wallet_balance: "",
      },
      message: {},
    };
  },

  methods: {
    async getSubscribers() {
      try {
        const response = await this.$axios.get("/getAssignedSubscriber");
        this.subscriber = response.data;

        console.log(this.subscriber);
      } catch (error) {
        console.log(error);
      }
    },
    async getMarketMaker() {
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
      try {
        let res = await this.$axios.get("/getMarketMakerDetail", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        this.market_maker = res.data[0];
        console.log(this.market_maker);
      } catch (error) {
        console.log(error.response);
      }
    },
    async updateWalletBalance() {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          "/updateWalletBalance",
          this.wallet_balance_update
        );
        this.loading = false;
        this.$toast.success("Thank You, Wallet will be Updated Shortly", {
          timeout: 5000,
        });
        this.fund_wallet_modal = !this.fund_wallet_modal;
        console.log(response);
      } catch (error) {
        this.loading = false;
        this.message = error.response.data.message;
        this.$toast.warning(this.message, { timeout: 5000 });
        console.log(error.response.data.message);
      }
    },
  },
  created() {
    this.getMarketMaker();
    this.getSubscribers();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none !important;
}
.dashboard_content {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.wallet__balance__wrap {
  background-color: #f8f7ff;
  border-radius: 10px;
  padding: 20px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.admin__balance__wrap {
  background-image: url("/fcard.png");
  min-height: 30vh;
  width: 400px;
  background-size: cover;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 20px;
}
.admin__wallet__wrap {
  background-image: url("/scard.png");
  min-height: 30vh;
  width: 400px;
  background-size: cover;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 20px;
}
.wallet__amount__card p {
  color: #00e8fe;
  font-size: 25px;
}
.mm__profile__wrap p {
  color: #f00;
  font-size: 13px;
  margin-bottom: 5px;
}
.user_font {
  font-weight: 550;
}
.user_name {
  color: #1d83c5;
}

.glass_card_wrap .write_up_section h5 {
  font-weight: 600;
}
.glass_card_wrap .write_up_section p {
  font-size: 45px;
  font-weight: 600;
}
.glass_card_wrap .write_up_section span {
  padding-top: 10px;
  font-weight: 600;
}
.glass_card_wrap .write_up_section img {
  width: 100%;
}
.glass_card_wrap .precent_wrap {
  margin-top: 5px;
  text-align: center;
  padding: 2px 5px;
  width: 15%;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.23);
}
.glass_card_wrap .precent_wrap p {
  font-size: 15px;
}
.main_card_wrap .write_up_section h6 {
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 1px;
}
.main_card_wrap .write_up_section h2 {
  font-weight: 600;
}
.main_card_wrap .write_up_section p {
  font-size: 12px;
}
.main_card_wrap .write_up_section .v-btn {
  background-color: inherit !important;
  font-size: 18px;
  color: #00e8fe;
  border: 1px solid #00e8fe;
  padding: 25px 10px !important;
  box-shadow: none !important;
  text-transform: none;
  font-weight: 600;
}
.assets_wrap h5 {
  font-weight: 600;
}
.buttons_wrap {
  font-weight: 600;
}

.buttons__wrap .link__buttons {
  background-color: inherit !important;
  border: 1px solid #00e8fe;
  font-size: 16px;
  padding: 7px 10px !important;
  /* font-weight: 600; */
  color: #000;
  border-radius: 5px;
  letter-spacing: 1px;
}
.buttons__wrap .link__button {
  background-color: inherit !important;
  border: 1px solid #00e8fe;
  font-size: 16px;
  padding: 7px 10px !important;
  color: #000;
  border-radius: 5px;
  letter-spacing: 1px;
}
.buttons__wrap .link__buttons:hover {
  background-color: #00e8fe !important;
}
.buttons__wrap .link__button:hover {
  background-color: #00e8fe !important;
}
.buttons_wrap .text_after::after {
  content: "";
  position: absolute;
  left: 0;
  top: 1.5rem;
  width: 1rem;
  height: 2px;
  background-color: #1d83c5;
}
.text_after::after {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInLeft {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slideInLeft {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.asset_wrap {
  height: 135px;
  margin-top: 20px;
  padding: 10px;
  width: 95%;
  font-weight: 600;
}
.first_card_wrap {
  background-image: url("/mocard1.png");
  background-size: 100%;
  background-position-x: 90%;
  background-position-y: 95%;
  border-radius: 7px;
}
.second_card_wrap {
  background-image: url("/mocard2.png");
  background-size: 100%;
  border-radius: 7px;
}
.third_card_wrap {
  background-image: url("/mocard3.png");
  background-size: 100%;
  border-radius: 7px;
}
.naira_wrap img {
  width: 25px;
}
.asset_wrap p {
  font-size: 25px;
  color: #00e8fe;
}
.asset_wrap .coin_name_wrap {
  background-color: #f8f7ff;
  border-radius: 5px;
}
.asset_wrap .coin_name_wrap h6 {
  font-size: 12px;
  padding: 1px 10px;
  margin-top: 2px;
  font-weight: 600;
}
.coin_wrap img {
  width: 25px;
}
.coin_wrap .img img {
  width: 35px;
}
.txn__data {
  border: 1px solid rgba(29, 131, 197, 0.13);
  box-sizing: border-box;
  border-radius: 8px;
  min-height: 100vh;
}
.txn__header h5 {
  font-size: 15px;
}
.txn__data .search__input .form-control {
  background-image: url("/search.png");
  background-position-x: 5px;
  background-position-y: 7px;
  box-shadow: none;
  width: 35%;
  border-radius: 5px;
  padding: 5px 35px;
}
.search__input ::placeholder {
  padding-left: 5px;
}

/* Table */
.admin__transactions {
  background-color: #fff;
  min-height: 100vh;
}
.admin__transactions_wrap .v-slide-group {
  flex-wrap: wrap;
  /* padding: 10px; */
}
.admin__transactions_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active),
.admin__transactions_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-icon,
.admin__transactions_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-btn,
.admin__transactions_wrap .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}
.admin__transactions_wrap .v-tab {
  text-transform: unset;
}
.admin__transactions_data {
  /* background-color: #f8f7ff; */
  border-radius: 10px;
  padding: 20px;
}
.admin__transactions_data .v-data-table--fixed-header > .v-data-table__wrapper {
  background-color: #f8f7ff;
}
.admin__transactions_data .v-data-table > .v-data-table__wrapper > table {
  background-color: #fff;
}
.admin__transactions_data .th_color {
  background-color: #f8f7ff !important;
  border-bottom: none !important;
}
.admin__transactions_data
  .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border: none;
  box-shadow: none;
}
tr {
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
}

/* modal wrap */
.change__password__form {
  background-color: rgba(0, 0, 0, 0.445);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
}
.change__password__form .form-control {
  color: grey;
  min-height: 7vh;
  padding: 10px;
  font-size: 12px;
}
.change__password__form label {
  font-size: 13px;
}
.password__header h6 {
  font-weight: 700;
}
.password__modal {
  width: 20%;
  margin: 100px auto;
  background-color: #fff;
  padding: 10px;
  border-radius: 0;
}
.fund__wallet__text {
  font-size: 13px;
  font-weight: 600;
  margin-top: 5px;
}
.change__password__form p {
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
}
.change__password__form .v-btn {
  background-color: #00e8fe !important;
  font-size: 15px;
  color: #000;
  padding: 5px 10px !important;
  box-shadow: none !important;
  text-transform: none;
  width: 100%;
  margin-top: 10px;
}
.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slideInDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .dashboard_content {
    margin: 0 !important;
    padding: 0;
  }
  .asset_wrap {
    width: 100%;
    height: 100%;
  }
  .m_top {
    margin-top: 20px;
  }
  .glass_card_wrap {
    background-image: url("/glassy.png");
    min-height: 40vh;
    background-size: 500px;
    color: #fff;
    letter-spacing: 1px;
  }
  .main_card_wrap {
    background-image: url("/main.png");
    min-height: 40vh;
    background-size: 500px;
    color: #fff;
    letter-spacing: 1px;
  }
  .glass_card_wrap .write_up_section h5 {
    font-size: 15px;
  }
  .glass_card_wrap .write_up_section p {
    font-size: 35px;
  }
  .glass_card_wrap .write_up_section span {
    padding-top: 10px;
    font-size: 14px;
  }
  .glass_card_wrap .write_up_section img {
    width: 80%;
  }
  .glass_card_wrap .profit_wrap {
    margin-top: 0 !important;
  }
  .glass_card_wrap .precent_wrap {
    margin-top: 5px;

    padding: 2px 5px;
    width: 20%;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.23);
  }
  .glass_card_wrap .precent_wrap p {
    font-size: 14px;
  }

  .main_card_wrap .write_up_section .v-btn {
    font-size: 15px;
    padding: 5px 10px !important;
  }
  .main_asset_wrap {
    margin-top: 10px;
    padding: 10px !important;
  }
  .assets_wrap h5 {
    font-size: 12px;
  }
  .buttons_wrap .mx-3 {
    margin: 3px !important;
  }
  .buttons_wrap .withdrawal_button {
    font-size: 10px;
    padding: 7px 20px !important;
  }
  .buttons_wrap .s {
    font-size: 10px;
    padding: 7px 20px !important;
  }
  .general_coin_wrap {
    margin-top: 10px !important;
  }
  .general_coin_wrap h5 {
    font-size: 15px;
  }
  .first_card_wrap {
    background-image: url("/mocard1.png");
    background-size: 100%;

    border-radius: 10px;
  }
  .admin__wrap {
    margin: 5px;
  }
  .buttons__wrap .link__buttons {
    padding: 6px 5px !important;
    font-size: 11px;
  }
  .buttons__wrap .link__button {
    font-size: 11px;
    padding: 5px !important;
  }
  .fund__wallet__routes {
    margin: 5px !important;
  }
  .theme--light.v-data-table
    > .v-data-table__wrapper
    > table
    > tbody
    > tr:not(:last-child)
    > td:not(.v-data-table__mobile-row),
  .theme--light.v-data-table
    > .v-data-table__wrapper
    > table
    > tbody
    > tr:not(:last-child)
    > th:not(.v-data-table__mobile-row) {
    font-size: 12px;
  }
  .txn__data .search__input .form-control {
    width: 70%;
    border-radius: 5px;
  }
  .admin__balance__wrap,
  .admin__wallet__wrap {
    width: 100%;
  }
  .wallet__balance__wrap {
    padding: 7px;
  }
  .mm__profile__wrap p {
    font-size: 10px;
  }
  .password__modal {
    margin: 40px auto;
    width: 100%;
  }
}
</style>