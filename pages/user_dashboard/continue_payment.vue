<template>
  <div class="pay_bills_wrap w-100">
    <div class="continue__payments">
      <user-nav
        class="pr-2 notification__nav py-4"
        name="Make Payments/Cash Wallet"
      />
      <div class="continue__body">
        <div class="">
          <font-awesome-icon
            @click="back()"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>
        <div class="">
          <div class="pay__wrap py-5">
            <h5>
              &#8358;{{ selected_amount.amount }} will be deducted from your
              <br />
              cash wallet for {{ token_name.token_name }} tokens
            </h5>
            <div class="view__assets__wrap text-center">
              <button
                @click="$router.push('/user_dashboard/payment_notification/')"
                class="assets__link"
              >
                <span class="px-3" style="font-weight: 400">Make Payment</span>
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
      selected_amount: {},
      token_name: "",
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
.continue__payments {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
}
.continue__payments .pay__wrap {
  border: 1px solid #00e8fe;
  width: 50%;
  margin: 40px auto;
  display: grid;
  place-items: center;
  border-radius: 20px;
  min-height: 300px;
}
a {
  color: inherit;
}
.continue__payments h5 {
  font-size: 16px;
}
.continue__payments .assets__link {
  border: 1px solid #00e8fe;
  padding: 10px 2px;
}
.continue__payments .assets__link span {
  border: 1px solid #00e8fe;
  padding: 10px 2px;
}

@media (max-width: 768px) {
  .continue__payments {
    margin-left: 0 !important;
    padding: 0;
  }
  .payments_wrap {
    margin: 10px;
  }
  .continue__payments .pay__wrap {
    width: 100%;
    margin: 0 !important;
  }
  .continue__body {
    padding: 20px !important;
    padding-top: 80px !important;
  }
}
</style>