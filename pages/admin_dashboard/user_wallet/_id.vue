<template>
  <div class="dashboard w-100">
    <div class="dashboard_content">
      <admin-nav name="Wallet" />
      <div>
        <font-awesome-icon
          @click="$router.go(-1)"
          role="button"
          class="fa-1x text-dark pl-1"
          :icon="['fas', 'arrow-left']"
        />
      </div>
      <div class="admin__wrap">
        <div class="wallet__balance__wrap">
          <div class="admin__card__wrap row align-items-center">
            <div class="col-md-4 d-flex justify-content-center">
              <div class="admin__balance__wrap mb-2 px-3 py-2">
                <div class="header__section d-flex align-items-center py-3">
                  <nuxt-img
                    format="webp"
                    sizes="xs:35vw sm:30vw md:20vw lg:2vw"
                    quality="90"
                    fit="cover"
                    src="/light_vank.png"
                    alt="image"
                  />
                  <h5 style="color: #00e8fe; padding-top: 5px">VANK</h5>
                </div>
                <div
                  class="wallet__amount__cardmt-2 mt-5"
                  style="line-height: 2px"
                >
                  <p>Subscription</p>
                </div>
                <span>&#8358;X, 123,000</span>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
              <div class="admin__balance__wrap mb-2 px-3 py-2">
                <div class="header__section d-flex align-items-center py-3">
                  <nuxt-img
                    format="webp"
                    sizes="xs:35vw sm:30vw md:20vw lg:2vw"
                    quality="90"
                    fit="cover"
                    src="/light_vank.png"
                    alt="image"
                  />
                  <h5 style="color: #00e8fe; padding-top: 5px">VANK</h5>
                </div>
                <div
                  class="wallet__amount__cardmt-2 mt-5"
                  style="line-height: 2px"
                >
                  <p>Withdrawal</p>
                </div>
                <span>&#8358;B, 123,000</span>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
              <div class="admin__balance__wrap mb-2 px-3 py-2">
                <div class="header__section d-flex align-items-center py-3">
                  <nuxt-img
                    format="webp"
                    sizes="xs:35vw sm:30vw md:20vw lg:2vw"
                    quality="90"
                    fit="cover"
                    src="/light_vank.png"
                    alt="image"
                  />
                  <h5 style="color: #00e8fe; padding-top: 5px">VANK</h5>
                </div>
                <div
                  class="wallet__amount__cardmt-2 mt-5"
                  style="line-height: 2px"
                >
                  <p>Staking</p>
                </div>
                <span>47</span>
              </div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div class="admin__wallet__wrap mb-2 px-3 py-2">
                <div class="header__section d-flex align-items-center py-3">
                  <nuxt-img
                    format="webp"
                    sizes="xs:35vw sm:30vw md:20vw lg:2vw"
                    quality="90"
                    fit="cover"
                    src="/light_vank.png"
                    alt="image"
                  />
                  <h5 style="color: #00e8fe; padding-top: 5px">VANK</h5>
                </div>
                <div
                  class="wallet__amount__cardmt-2 mt-5"
                  style="line-height: 2px"
                >
                  <p>Borrowing</p>
                </div>
                <span>2,750</span>
              </div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div class="admin__wallet__wrap mb-2 px-3 py-2">
                <div class="header__section d-flex align-items-center py-3">
                  <nuxt-img
                    format="webp"
                    sizes="xs:35vw sm:30vw md:20vw lg:2vw"
                    quality="90"
                    fit="cover"
                    src="/light_vank.png"
                    alt="image"
                  />
                  <h5 style="color: #00e8fe; padding-top: 5px">VANK</h5>
                </div>
                <div
                  class="wallet__amount__cardmt-2 mt-5"
                  style="line-height: 2px"
                >
                  <p>Funding</p>
                </div>
                <span>&#8358;X,123,000</span>
              </div>
            </div>

            <!-- <div class="col-md-4 d-flex justify-content-center">
                <div class="admin__wallet__wrap mb-2 px-3 py-2">
                  <div class="header__section d-flex align-items-center py-3">
                    <nuxt-img
                      format="webp"
                      sizes="xs:35vw sm:30vw md:20vw lg:2vw"
                      quality="90"
                      fit="cover"
                      src="/light_vank.png"
                      alt="image"
                    />
                    <h5 style="color: #00e8fe; padding-top: 5px">VANK</h5>
                  </div>
                  <div
                    class="wallet__amount__cardmt-2 mt-5"
                    style="line-height: 2px"
                  >
                    <p>Active Staking</p>
                  </div>
                  <span>&#8358;X,123,000</span>
                </div>
              </div> -->
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
      tab: null,
      wallets: {},
    };
  },

  methods: {
    // async getAllSubscription() {
    //   try {
    //     const response = await this.$axios.get("/admin/getAllSubscription");
    //     this.subscriptions = response.data;
    //     console.log(this.subscriptions);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async getTotalUserNumber() {
    //   try {
    //     const response = await this.$axios.post("/admin/getTotalUserNumber");
    //     this.total_subscribers = response.data;
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error.response);
    //   }
    // },
    // async sumAllAsset() {
    //   try {
    //     const response = await this.$axios.post("/admin/sumAllAsset");
    //     console.log(response);
    //     this.total_asset = response.data;
    //   } catch (error) {
    //     console.log(error.response);
    //   }
    // },
  },
  // created() {
  //   this.getAllSubscription();
  //   this.getTotalUserNumber();
  //   this.sumAllAsset();
  // },
};
</script>
  
  <style>
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
.admin__balance__wrap {
  background-image: url("/card1.png");
  min-height: 30vh;
  background-size: cover;
  width: 400px;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 10px;
}
.admin__wallet__wrap {
  background-image: url("/card2.png");
  min-height: 30vh;
  background-size: cover;
  width: 400px;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 10px;
}

.txn__data .search__bar__wrap .form-control {
  background-image: url("/search.png");
  background-position-x: 5px;
  background-position-y: 7px;
  box-shadow: none;
  height: 35px !important;
  width: 30%;
  border-radius: 5px;
  padding: 5px 35px;
  font-size: 14px;
  color: #3030305f;
}
.txn__data .search__bar__wrap .form-control:focus {
  border-color: #30303037;
}
.txn__data .search__bar__wrap ::placeholder {
  padding-left: 5px;
  color: #3030305f;
}
.txn__data .txn__data {
  border: 1px solid rgba(29, 131, 197, 0.13);
  box-sizing: border-box;
  border-radius: 8px;
  min-height: 100vh;
}
.txn__data .txn__header h5 {
  font-size: 15px;
}
.wallet__amount__card img {
  width: 25px;
  height: 23px;
  margin-top: -15px;
}
.wallet__amount__card p {
  color: #00e8fe;
  font-size: 25px;
  padding-left: 10px;
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
.buttons__wrap .link__buttons:hover {
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
.search__input .form-control {
  background-image: url("/search.png");
  background-position-x: 5px;
  background-position-y: 7px;
  box-shadow: none;
  height: 35px !important;
  width: 35%;
  border-radius: 5px;
  padding: 5px 35px;
}
.search__input ::placeholder {
  padding-left: 5px;
}
.dashboard_content
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active),
.dashboard_content
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-icon,
.dashboard_content
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-btn,
.dashboard_content .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}
.dashboard_content .v-tab {
  text-transform: unset;
}

@media (max-width: 768px) {
  .dashboard_content {
    margin: 0 !important;
    padding: 0;
  }
  .admin__wrap {
    margin: 10px;
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
  .txn__data .search__bar__wrap .form-control {
    height: 35px !important;
    width: 70%;
    border-radius: 5px;
    padding: 5px 35px;
  }
  .wallet__balance__wrap {
    padding: 7px;
  }
  .buttons__wrap .link__buttons {
    font-size: 13px;
    padding: 5px 7px !important;
  }
  .admin__balance__wrap,
  .admin__wallet__wrap {
    width: 100%;
  }
}
</style>