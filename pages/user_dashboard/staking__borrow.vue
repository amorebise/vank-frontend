<template>
  <div class="exam_token_wrap w-100">
    <div class="cash__sub__wrap">
      <user-nav name="Wallets" />
      <div class="transactions_wrap mt-3">
        <template>
          <v-tabs class="px-3" v-model="tab" align-with-title>
            <v-tab>Staking Wallet</v-tab>
            <v-tab>Borrowing Wallet</v-tab>
          </v-tabs>
        </template>
        <v-tabs-items v-model="tab" class="tab_bg">
          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="register_button_wrap text-center mt-3 py-4">
                  <nuxt-link
                    :to="`/user_dashboard/staking_borrowing/${id}`"
                    class="assets__link"
                  >
                    <span class="px-3" style="font-size: 14px"
                      >+ Create New Staking Transaction</span
                    >
                  </nuxt-link>
                </div>
                <div>
                  <h6>Your Stakings</h6>
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="img_card">
                        <div class="asset__content text-center">
                          <div>
                            <p>Land Asset: Epe3</p>
                            <p>Value Locked: &#x20A6; 100,000</p>
                            <p>Status: Locked until Dec. 31</p>
                          </div>
                        </div>
                        <div class="register_button_wrap text-center mt-3 py-4">
                          <nuxt-link
                            to="/user_dashboard/staking__borrow/"
                            class="assets__link"
                          >
                            <span class="px-3" style="font-size: 14px"
                              >Click to Unlock</span
                            >
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="img_card">
                        <div class="asset__content text-center">
                          <div>
                            <p>Land Asset: Epe3</p>
                            <p>Value Locked: &#x20A6; 100,000</p>
                            <p>Status: Locked until Dec. 31</p>
                          </div>
                        </div>
                        <div class="register_button_wrap text-center mt-3 py-4">
                          <nuxt-link
                            to="/user_dashboard/staking__borrow/"
                            class="assets__link"
                          >
                            <span class="px-3" style="font-size: 14px"
                              >Click to Unlock</span
                            >
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="img_card">
                        <div class="asset__content text-center">
                          <div>
                            <p>Land Asset: Epe3</p>
                            <p>Value Locked: &#x20A6; 100,000</p>
                            <p>Status: Locked until Dec. 31</p>
                          </div>
                        </div>
                      </div>
                      <div class="register_button_wrap text-center mt-3 py-4">
                        <nuxt-link
                          to="/user_dashboard/staking__borrow/"
                          class="assets__link"
                        >
                          <span class="px-3" style="font-size: 14px"
                            >Click to Unlock</span
                          >
                        </nuxt-link>
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
                  <div class="register_button_wrap text-center mt-3 py-4">
                    <nuxt-link
                      :to="`/user_dashboard/staking_borrowing/${id}`"
                      class="assets__link"
                    >
                      <span class="px-3" style="font-size: 14px"
                        >+ Create New Borrowing Transaction</span
                      >
                    </nuxt-link>
                  </div>
                  <div>
                    <h6>Your Borrowings</h6>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="img_card">
                          <div class="asset__content text-center">
                            <div>
                              <p>Your Loan: &#x20A6; 150,000</p>
                              <p>Value Locked: &#x20A6; 237,430</p>
                              <p>Status: Locked until Sep. 30, 2023</p>
                            </div>
                          </div>
                          <div
                            class="register_button_wrap text-center mt-3 py-4"
                          >
                            <nuxt-link
                              to="/user_dashboard/staking__borrow/"
                              class="assets__link"
                            >
                              <span class="px-3" style="font-size: 14px"
                                >Repay to Unlock</span
                              >
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="img_card">
                          <div class="asset__content text-center">
                            <div>
                              <p>Your Loan: &#x20A6; 150,000</p>
                              <p>Value Locked: &#x20A6; 237,430</p>
                              <p>Status: Locked until Sep. 30, 2023</p>
                            </div>
                          </div>
                          <div
                            class="register_button_wrap text-center mt-3 py-4"
                          >
                            <nuxt-link
                              to="/user_dashboard/staking__borrow/"
                              class="assets__link"
                            >
                              <span class="px-3" style="font-size: 14px"
                                >Repay to Unlock</span
                              >
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="img_card">
                          <div class="asset__content text-center">
                            <div>
                              <p>Your Loan: &#x20A6; 150,000</p>
                              <p>Value Locked: &#x20A6; 237,430</p>
                              <p>Status: Locked until Sep. 30, 2023</p>
                            </div>
                          </div>
                        </div>
                        <div class="register_button_wrap text-center mt-3 py-4">
                          <nuxt-link
                            to="/user_dashboard/staking__borrow/"
                            class="assets__link"
                          >
                            <span class="px-3" style="font-size: 14px"
                              >Repay to Unlock</span
                            >
                          </nuxt-link>
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
</template>

<script>
import creator_sidebar from "~/components/creator_sidebar.vue";
export default {
  components: { creator_sidebar },
  data() {
    return {
      tab: null,
      success__modal: false,
    };
  },

  methods: {},
};
</script>

<style >
.cash__sub__wrap {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.cash__sub__wrap .v-slide-group {
  flex-wrap: wrap;
  /* padding: 10px; */
}
.cash__sub__wrap .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.cash__sub__wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-icon,
.cash__sub__wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-btn,
.cash__sub__wrap .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}
.cash__sub__wrap .v-tab {
  text-transform: unset;
}
.cash__sub__wrap .transactions_data {
  background-color: #fff;
}
.cash__sub__wrap
  .transactions_data
  .v-data-table--fixed-header
  > .v-data-table__wrapper {
  /* background-color: #f8f7ff; */
}
.cash__sub__wrap
  .transactions_data
  .v-data-table
  > .v-data-table__wrapper
  > table {
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
  height: 400px;
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
.cash__sub__wrap .asset__content {
  background-image: url("/asset.jpg");
  background-size: cover;
  border-radius: 10px;
  color: #001214;
  position: relative;
  height: 300px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
  border: 5px solid #00e8fe;
  /* gap: 10px; */
}
.cash__sub__wrap .asset__content p {
  opacity: 0;
}
.cash__sub__wrap .asset__content h4 {
  opacity: 0;
  color: #00e8fe;
}
.cash__sub__wrap .asset__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.cash__sub__wrap .asset__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.cash__sub__wrap .asset__content:hover h4 {
  opacity: 1;
  transition: ease-in-out 0.7s;
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
  .transactions {
    margin-left: 0 !important;
    padding: 0;
  }
}
</style>