<template>
  <div class="exam_token_wrap w-100">
    <div class="card_payment">
      <user-nav name="Wallets" />
      <div>
        <font-awesome-icon
          @click="back()"
          role="button"
          class="fa-1x text-dark pl-1"
          :icon="['fas', 'arrow-left']"
        />
      </div>
      <div class="transactions_wrap mt-3">
        <div class="new__staking__wrap">
          <div class="text-center">
            <h6 class="font-weight-bolder">Enter your card information</h6>
            <p>Pay: &#8358;{{ amount }}</p>
          </div>
          <!-- <div class="form-group row mx-2 mt-2">
            <div class="col-6">
              <label for="" class="">Bank</label>
            </div>
            <div class="col-6">

          </div>
          </div> -->
          <!-- <div class="form-group row mx-2 mt-2">
            <div class="col-6">
              <label for="" class="">Card Number</label>
            </div>
            <div class="col-6">
              <input type="number" class="form-control" />
            </div>
          </div>
          <div class="form-group row mx-2 mt-2">
            <div class="col-6">
              <label for="" class="">CVC</label>
            </div>
            <div class="col-6">
              <input style="width: 40%" type="number" class="form-control" />
            </div>
          </div> -->

          <div class="view__assets__wrap text-center">
            <!-- <nuxt-link to="/user_dashboard/staking_notification"> -->
              <button @click="makePayment()" class="assets__link">
                <span class="px-3">Make Payment</span>
              </button>
            <!-- </nuxt-link> -->
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
      tab: null,
      success__modal: false,
      amount: "",
      amount_raw: "",
    };
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
     setAmount() {
      let myAmount = localStorage.getItem("marketMakerKey");
      let amount_parsed = JSON.parse(myAmount);
      this.amount_raw = amount_parsed;
      console.log(amount_parsed);
      this.amount = amount_parsed.amount;
     },
     async makePayment(){
        try {
        let response = await this.$axios.post(
          "/paymentCollection",this.amount_raw);
        // this.banks = response.data.data;

        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
     }
  },
  mounted(){
    this.setAmount();

  }
};
</script>

<style >
.card_payment {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.card_payment .new__staking__wrap {
  margin: 40px auto;
  border: 1px solid #00e8fe;
  padding: 30px 30px;
  width: 50%;
  border-radius: 10px;
}
.card_payment .form-control {
  font-size: 12px;
  border: 1px solid #3030303c !important;
}

.card_payment label {
  font-size: 12px;
}

.card_payment .transactions_data {
  background-color: #fff;
}

.card_payment .choose__txn__wrap {
  border: 1px solid #00e8fe;
  border-radius: 20px;
  margin: 40px auto;
  width: 50%;
  height: 400px;
  padding: 10px 40px;
}
.card_payment .choose__txn__wrap .form-control {
  font-size: 13px;
  box-shadow: none;
}

@media (max-width: 768px) {
  .card_payment {
    margin-left: 0 !important;
    padding: 0;
  }
  .card_payment .new__staking__wrap {
    margin: 40px auto;
    border: 1px solid #00e8fe;
    padding: 30px 30px;
    width: 95%;
    border-radius: 10px;
  }
}
</style>