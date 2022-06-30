<template>
  <div class="exam_token_wrap w-100">
    <div class="new__staking">
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
                <div class="new__staking__wrap">
                  <div class="text-center">
                    <h6 class="font-weight-bolder">New Staking</h6>
                  </div>
                  <div class="form-group mx-2 mt-4">
                    <label for="exampleFormControlSelect1" class=""
                      >Stake</label
                    >
                    <select
                      class="form-control option-class select"
                      id="exampleFormControlSelect1"
                      required
                    >
                      <option>Select</option>
                      <option class="colour" id="selectCountry">
                        <p class="text-danger">Card payment</p>
                      </option>
                      <option>Bank Transfer</option>
                    </select>
                  </div>

                  <div class="form-group mx-2 mt-2">
                    <label for="" class="">Choose Duration</label>
                    <div class="max__wrap d-flex justify-content-between">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter quantity to stake"
                        style="border: none"
                      />
                      <p class="px-1" style="color: #00e8fe">max</p>
                    </div>
                  </div>

                  <div class="form-group mx-2">
                    <label for="exampleFormControlSelect1" class=""
                      >Choose Duration</label
                    >
                    <select
                      class="form-control option-class select"
                      id="exampleFormControlSelect1"
                      required
                    >
                      <option>Select</option>
                      <option class="colour" id="selectCountry">
                        <p class="text-danger">Card payment</p>
                      </option>
                      <option>Bank Transfer</option>
                    </select>
                  </div>
                  <div>You get NX1234 at the end of the period</div>
                  <div class="view__assets__wrap text-center">
                    <nuxt-link to="/user_dashboard/staking_notification">
                      <button class="assets__link">
                        <span class="px-3">Submit</span>
                      </button>
                    </nuxt-link>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="new__staking__wrap">
                  <!-- <div class="text-center">
                    <h6 class="font-weight-bolder">New Staking</h6>
                  </div> -->
                  <div class="form-group mx-2 mt-4">
                    <label for="exampleFormControlSelect1" class=""
                      >Choose asset to use as collateral</label
                    >
                    <select
                      class="form-control option-class select"
                      id="exampleFormControlSelect1"
                      required
                    >
                      <option>Select</option>
                      <option class="colour" id="selectCountry">
                        <p class="text-danger">Card payment</p>
                      </option>
                      <option>Bank Transfer</option>
                    </select>
                  </div>

                  <div class="form-group mx-2 mt-2">
                    <label for="" class=""
                      >How much do you want to borrow?</label
                    >
                    <div class="max__wrap d-flex justify-content-between">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter quantity to stake"
                        style="border: none"
                      />
                      <p class="px-1" style="color: #00e8fe">max</p>
                    </div>
                  </div>

                  <div class="view__assets__wrap text-center">
                    <nuxt-link to="/user_dashboard/borrow_notification">
                      <button class="assets__link">
                        <span class="px-3">Next</span>
                      </button>
                    </nuxt-link>
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
.new__staking {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.new__staking .new__staking__wrap {
  margin: 40px auto;
  /* height: 400px; */
  border: 1px solid #00e8fe;
  padding: 30px 30px;
  width: 50%;
  border-radius: 10px;
}
.new__staking .form-control {
  width: 80%;
  font-size: 12px;
}
.new__staking .max__wrap {
  border: 1px solid #3030303e;
  border-radius: 5px;
  width: 80%;
}
.new__staking .v-slide-group {
  flex-wrap: wrap;
  /* padding: 10px; */
}
.new__staking .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.new__staking
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-icon,
.new__staking
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-btn,
.new__staking .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}
.new__staking .v-tab {
  text-transform: unset;
}
.new__staking .transactions_data {
  background-color: #fff;
}
.new__staking
  .transactions_data
  .v-data-table--fixed-header
  > .v-data-table__wrapper {
  /* background-color: #f8f7ff; */
}
.new__staking
  .transactions_data
  .v-data-table
  > .v-data-table__wrapper
  > table {
  background-color: #fff;
}
.new__staking .transactions_data .th_color {
  background-color: #f8f7ff !important;
  border-bottom: none !important;
}
.new__staking .choose__txn__wrap {
  border: 1px solid #00e8fe;
  border-radius: 20px;
  margin: 40px auto;
  width: 50%;
  height: 400px;
  padding: 10px 40px;
}
.new__staking .choose__txn__wrap .form-control {
  font-size: 13px;
  box-shadow: none;
}
.new__staking .choose__txn__wrap .form-control:focus {
  border-color: #30303044;
}
.new__staking .pop__up {
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
.new__staking .pop__up__content {
  background-color: #fff;
  padding: 15px 30px;
  border-radius: 10px;
}
.new__staking .pop__up__content button {
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
.new__staking .asset__content {
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
.new__staking .asset__content p {
  opacity: 0;
}
.new__staking .asset__content h4 {
  opacity: 0;
  color: #00e8fe;
}
.new__staking .asset__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.new__staking .asset__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.new__staking .asset__content:hover h4 {
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
  .new__staking {
    margin-left: 0 !important;
    padding: 0;
  }
  .new__staking .new__staking__wrap {
    margin: 40px auto;
    border: 1px solid #00e8fe;
    padding: 30px 30px;
    width: 100%;
    border-radius: 10px;
  }
}
</style>