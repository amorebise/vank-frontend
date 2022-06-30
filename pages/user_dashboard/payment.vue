<template>
  <div class="pay_bills_wrap w-100">
    <div class="payments">
      <user-nav name="Make Payments" />
      <div class="payments_wrap subscriber">
        <div class="token__wrap py-5">
          <h5 class="font-weight-bolder">Payment for Pyanko1 Token</h5>

          <div class="form-group mx-2 mt-2">
            <label for="exampleFormControlSelect1" class="">Pay with</label>
            <select
              class="form-control option-class select"
              id="exampleFormControlSelect1"
              required
            >
              <option class="colour" id="selectCountry">
                <p class="text-danger">Cash Wallet</p>
              </option>
              <option>Take Loan</option>
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
</template>

<script>
import creator_sidebar from "~/components/creator_sidebar.vue";
export default {
  components: { creator_sidebar },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.payments {
  margin-left: 270px;
  background-color: #fff;
}
.payments .token__wrap {
  border: 1px solid #00e8fe;
  width: 70%;
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
    padding: 0;
  }
  .payments_wrap {
    margin: 10px;
  }
  .payments .token__wrap {
    width: 100%;
    border-radius: 0;
    border: none;
    box-shadow: 2px 2px 2px 2px #3030302f;
  }
}
</style>