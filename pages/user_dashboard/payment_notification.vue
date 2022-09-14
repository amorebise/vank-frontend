<template>
  <div class="pay_bills_wrap w-100">
    <div class="notification__for__payment">
      <user-nav class="pr-2 notification__nav py-4" name="Make Payment" />
      <div class="payments_wrap subscriber">
        <div class="success__wrap py-5">
          <img src="/success.svg" alt="success image" />
          <h5 style="font-weight: bolder">Payment Successful!!</h5>

          <nuxt-link
            style="font-size: 11px; color: #00e8fe"
            to="/user_dashboard/my_account"
            >Find and Buy more tokens</nuxt-link
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
.notification__for__payment {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
}
.notification__for__payment .success__wrap {
  border: 1px solid #00e8fe;
  width: 50%;
  margin: 40px auto;
  display: grid;
  place-items: center;
  border-radius: 20px;
  height: 300px;
}

.notification__for__payment h5 {
  font-size: 16px;
}

@media (max-width: 768px) {
  .notification__for__payment {
    margin-left: 0 !important;
    padding: 0;
  }
  .payments_wrap {
    margin: 15px;
    padding-top: 70px !important;
  }
  .notification__for__payment .success__wrap {
    width: 100%;
    margin: 20px auto;
  }
  .notification__nav {
    position: fixed;
    background-color: #fff;
    padding: 0 !important;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 232, 254, 0.1) !important;
    z-index: 1000;
  }
}
</style>