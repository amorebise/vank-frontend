<template>
  <div class="pay_bills_wrap w-100">
    <div class="fund__wallet">
      <user-nav class="pr-2 fund__wallet__nav py-4" name="Fund my wallet" />
      <div class="fund__wallet__body">
        <div class="shift">
          <font-awesome-icon
            @click="$router.go(-1)"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>
        <div class="payments_wrap subscriber">
          <div class="fund__wrap py-5">
            <div class="form-group mx-2 mt-2">
              <label for="exampleFormControlSelect1" class=""
                >Choose funding method</label
              >
              <select
                class="form-control option-class select"
                id="exampleFormControlSelect1"
                v-model="txn.option"
                required
              >
                <option>Select</option>
                <option
                  v-for="(option, index) in funding_options"
                  :key="index"
                  :value="option"
                  class="colour"
                  id="selectCountry"
                >
                  {{ option }}
                </option>
                <!-- <option value="bank_transfer">Bank Transfer</option> -->
              </select>
            </div>

            <!-- <div class="form-group mx-2 mt-2">
            <label for="" class="">How much do you want to pay?</label>
            <input
              type="number"
              class="form-control"
              placeholder="Enter Amount"
              v-model="wallet.amount"
            />
          </div> -->
            <div class="view__assets__wrap text-center">
              <button @click="goToSelectedTxnType()" class="assets__link">
                <span class="px-3">Next</span>
              </button>
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
      txn: {
        option: "",
      },
      wallet: {
        amount: "",
      },
      funding_options: ["Card Payment", "Bank Transfer"],
    };
  },
  methods: {
    goToSelectedTxnType() {
      // if (this.txn.option == "Card Payment") {
      this.$router.push("/user_dashboard/bank_transfer/");
      // } else {
      // this.topUpCashWallet();
      // }

      // this.$router.push(
      //   this.txn.option == "Card Payment"
      //     ? "/user_dashboard/card_payment/"
      //     : "/user_dashboard/bank_transfer/"
      // );
    },
    async topUpCashWallet() {
      try {
        let response = await this.$axios.post("/topUpCashWallet", this.wallet);
        console.log(response);
        this.saveAmount();
        this.$router.push("/user_dashboard/bank_transfer/");
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
  },
};
</script>

<style>
.fund__wallet {
  margin-left: 270px;
  background-color: #fff;
}
.fund__wallet .fund__wrap {
  border: 1px solid #00e8fe;
  width: 40%;
  margin: 40px auto;
  display: grid;
  place-items: center;
  border-radius: 20px;
  min-height: 25vh;
}
.fund__wallet .form-control {
  width: 250px;
  box-shadow: none;
  font-size: 12px;
}
.fund__wallet label {
  font-size: 13px;
}
.fund__wallet p {
  font-size: 12px;
}
.fund__wallet .select:focus {
  border-color: #3030303a;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 768px) {
  .fund__wallet {
    margin-left: 0 !important;
    padding: 0 !important;
  }
  .fund__wallet .payments_wrap {
    margin: 10px;
  }
  .fund__wallet .fund__wrap {
    width: 100%;
    margin: 20px auto;
  }
  .fund__wallet .fund__wallet__nav {
    position: fixed;
    background-color: #fff;
    padding: 0 !important;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 232, 254, 0.1) !important;
    z-index: 1000;
  }
  .fund__wallet__body {
    padding-top: 70px;
  }
  .shift {
    padding-left: 10px;
  }
}
</style>