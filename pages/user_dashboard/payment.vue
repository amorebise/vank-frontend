<template>
  <div class="pay_bills_wrap w-100">
    <div class="payments pr-3">
      <user-nav class="pr-2 notification__nav py-4" name="Make Payments" />
      <div class="payments__body">
        <div class="">
          <font-awesome-icon
            @click="back()"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>
        <div class="">
          <div class="token__wrap py-5">
            <h5 class="font-weight-bolder">
              Payment for {{ token_name.token_name }} Token
            </h5>

            <div class="form-group mx-2 mt-2">
              <label for="exampleFormControlSelect1" class="">Pay with</label>
              <select
                class="form-control option-class select"
                id="exampleFormControlSelect1"
                required
              >
                <option>select..</option>
                <option class="colour" id="selectCountry">Subscription Wallet</option>
                <!-- <option>Take Loan</option> -->
              </select>
            </div>
            <div class="view__assets__wrap text-center">
              <nuxt-link to="/user_dashboard/continue_payment">
                <button class="assets__link">
                  <span class="px-3">Next</span>
                </button>
              </nuxt-link>
            </div>

            <!-- <div
            class="take__loan__wrap d-flex align-items-center mt-3"
            style="gap: 10px"
          >
            <p><img style="width: 10px" src="/star.svg" alt="" /> Take loan</p>
            <div class="">
              <p>
                When you take a loan, you need to <br />
                transfer funds from your cash wallet to <br />
                your subscription wallet (NGN) to buy <br />
                token
              </p>
            </div>
          </div> -->
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
      token_name: {},
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    showAmount() {
      let markmm = localStorage.getItem("marketMakerKey");
      let tkn = localStorage.getItem("tokenName");
      this.selected_amount = JSON.parse(markmm);
      this.token_name = JSON.parse(tkn);
      console.log(this.selected_amount);
      // console.log(this.selected_amount.id);
    },
  },
  created() {
    this.showAmount();
  },
};
</script>

<style>
.payments {
  margin-left: 270px;
  background-color: #fff;
}
.payments .token__wrap {
  border: 1px solid #00e8fe;
  width: 50%;
  margin: 40px auto;
  display: grid;
  place-items: center;
  border-radius: 20px;
  min-height: 25vh;
}
.payments .select {
  width: 250px;
  box-shadow: none;
  font-size: 12px;
}
.payments label {
  font-size: 13px;
}
.payments p {
  font-size: 12px;
}
.payments .select:focus {
  border-color: #3030303a;
}

@media (max-width: 768px) {
  .payments {
    margin-left: 0 !important;
    padding: 0 !important;
  }
  .payments_wrap {
    margin: 10px;
  }
  .payments .token__wrap {
    width: 100%;
    margin-top: 5px;
  }
  .payments__body {
    padding: 20px !important;
    padding-top: 80px !important;
  }
}
</style>