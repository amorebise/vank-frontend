<template>
  <div>
    <user-nav-component />

    <div class="withdraw_wrap">
      <div class="d-flex">
        <div class="arrow_wrap"></div>
        <div class="withdraw_wrap">
          <h5>
            <nuxt-link to="/user_dashboard/dashboard"
              ><font-awesome-icon
                class="fa-1x text-white bg-primary"
                :icon="['fas', 'arrow-left']"
              />
            </nuxt-link>

            <span>Withdraw</span>
          </h5>
        </div>
      </div>

      <div class="select_wrap">
        <div class="mt-3">
          <form action="" @submit.prevent="withdraw_asset()">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Select Asset</label>
              <select
                class="form-control"
                v-model="withdrawal_request.asset"
                id="exampleFormControlSelect1"
              >
                <option value="dent">dent</option>
                <option value="second_asset">BTC</option>
                <option value="third_asset">PHYGITAL</option>
              </select>
            </div>
            <!-- <div class="form-group mx-2 mt-2">
              <label for="exampleFormControlSelect1" class="py-2">State</label>
              <select
                class="form-control option-class select"
                id="exampleFormControlSelect1"
                v-model="withdrawal_request.asset"
                required
              >
                <option>Please Select a Country</option>
                <option
                  class="colour"
                  id="selectCountry"
                  v-for="asset in assets"
                  :key="asset.id"
                  :value="asset.name"
                >
                  <p class="text-danger">{{ asset.name }}</p>
                </option>
              </select>
            </div> -->
            <div class="form-group mt-3">
              <label class="" for="">Receiving Wallet </label>
              <p class="py-1">
                Ensure wallet address is correct and on the right network
              </p>
              <input
                required
                type="text"
                v-model="withdrawal_request.receiving_wallet"
                class="form-control"
                placeholder=""
              />
            </div>
            <!-- Amount -->
            <div class="form-group mt-3">
              <label class="py-1" for="">Enter Amount</label>
              <input
                required
                type="text"
                v-model="withdrawal_request.amount"
                class="form-control"
                placeholder=""
              />
              <p class="transc_text pt-2">
                For this transaction, you will be charged VANK Fees of 1.5% and
                you will receive YYYY
              </p>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="vank_basket_plan"
                v-model="withdrawal_request.confirm_wallet"
                required
              />
              <label class="form-check-label" for="inlineCheckbox3"
                >I have confirmed that the wallet address is on the right
                network</label
              >
            </div>
            <div class="mt-3">
              <v-btn
                class="login_button w-100"
                :loading="loading"
                value="Buy Now"
                type="submit"
                >Continue</v-btn
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
      withdrawal_request: {
        asset: "",
        receiving_wallet: "",
        amount: "",
        confirm_wallet: null,
      },
      assets: {},
    };
  },

  methods: {
    async withdraw_asset() {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          "/withdraw",
          this.withdrawal_request
        );
        console.log(response);
        this.$router.push("/verification_page");
      } catch (error) {
        this.loading = false;
        console.log(error.response);
      } finally {
        this.withdrawal_request = {};
      }
    },
    async getAssetForWithdrawal() {
      try {
        const response = await this.$axios.get("/getAssetForWithdrawal");
        this.assets = response.data;
        console.log(this.assets);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  mounted() {
    this.getAssetForWithdrawal();
  },
};
</script>

<style>
.withdraw_wrap {
  padding: 20px 100px;
}
.withdraw_wrap h5 {
  color: #1d83c5;
}
.select_wrap {
  margin: 0 auto;
  width: 35%;
}
.select_wrap p {
  color: #1d83c5;
  font-size: 11px;
  margin-bottom: 0;
}
.select_wrap label {
  font-size: 15px;
  margin-bottom: 0;
}
.select_wrap .form-control {
  height: calc(2.2em + 0.75rem + 2px);
}
.select_wrap select {
  -webkit-appearance: revert;
  box-shadow: none !important;
  cursor: pointer;
  font-size: 14px;
}
.select_wrap .form-control {
  box-shadow: none;
}
.select_wrap .form-control:focus {
  border-color: rgba(128, 128, 128, 0.479);
}
.transc_text {
  color: #333f47 !important;
  font-size: 17px;
}
.form-check-label {
  font-size: 10px !important;
}
.select_wrap .v-btn {
  background-color: #00e8fe !important;
  text-transform: none;
  height: 50px !important;
  font-size: 18px;
  box-shadow: none;
}

@media (max-width: 768px) {
  .withdraw_wrap {
    padding: 10px;
    margin-top: 20px;
  }
  .select_wrap {
    width: 100%;
  }
}
</style>