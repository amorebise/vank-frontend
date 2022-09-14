<template>
  <div class="pay_bills_wrap w-100">
    <div class="cash__success">
      <user-nav name="Make Payments" />
      <div class="payments_wrap subscriber">
        <div class="token__wrap text-center py-5">
          <img src="/success.svg" alt="success image" />
          <h5 style="font-weight: bolder">
            Transfer to cash wallet <br />
            successful!!
          </h5>

          <nuxt-link
            style="font-size: 11px; color: #00e8fe"
            to="/user_dashboard/cash_subscription_wallet/"
            >Go to cash wallet</nuxt-link
          >
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
.cash__success {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
}
.cash__success .token__wrap {
  border: 1px solid #00e8fe;
  width: 50%;
  margin: 40px auto;
  display: grid;
  place-items: center;
  border-radius: 20px;
  min-height: 300px;
}

.cash__success h5 {
  font-size: 16px;
}

@media (max-width: 768px) {
  .cash__success {
    margin-left: 0 !important;
    padding: 0;
  }
  .payments_wrap {
    margin: 10px;
  }
  .cash__success .token__wrap {
    border: 1px solid #00e8fe;
    width: 100%;
    margin: 20px auto;
    display: grid;
    place-items: center;
    border-radius: 20px;
    min-height: 300px;
  }
}
</style>