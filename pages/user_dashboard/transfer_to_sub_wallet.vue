<template>
  <div class="pay_bills_wrap w-100">
    <div class="continue__payments pt-1">
      <user-nav class="payment__nav py-4 pr-3" name="Txn Wallet" />
      <div class="payments_wrap subscriber">
        <div class="token__wrap">
          <p style="font-size: 16px; text-align: center">
            Transaction Successful!!
          </p>
          <div class="return" style="margin-top: -100px">
            <nuxt-link
              style="font-size: 11px; color: #00e8fe"
              to="/user_dashboard/my_account"
              >Return to Dashboard</nuxt-link
            >
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
    return {};
  },
  methods: {},
};
</script>

<style>
.continue__payments {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
}
.continue__payments .token__wrap {
  border: 1px solid #00e8fe;
  width: 50%;
  margin: 40px auto;
  display: grid;
  place-items: center;
  border-radius: 20px;
  min-height: 300px;
}

.continue__payments h5 {
  font-size: 16px;
}

@media (max-width: 768px) {
  .continue__payments {
    margin-left: 0 !important;
    padding: 0;
  }
  .payments_wrap {
    margin: 10px;
  }
  .continue__payments .token__wrap {
    border: 1px solid #00e8fe;
    width: 100%;
    margin: 20px auto;
    display: grid;
    place-items: center;
    border-radius: 20px;
    min-height: 300px;
  }
  .return {
    margin-top: 0 !important;
  }
  .payment__nav {
    position: fixed;
    background-color: #fff;
    padding: 0 !important;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 232, 254, 0.1) !important;
    z-index: 1000;
  }
  .subscriber {
    padding-top: 70px;
  }
}
</style>