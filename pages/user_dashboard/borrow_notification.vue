<template>
  <div class="pay_bills_wrap w-100">
    <div class="continue__payments">
      <user-nav name="Staking/Borrowing" />
      <div class="payments_wrap subscriber">
        <div class="token__wrap py-5">
          <img src="/success.svg" alt="success image" />
          <h5 style="font-weight: bolder">Congratulations!</h5>
          <p style="font-size: 12px; text-align: center">
            Your loan request is processing <br />
            and will be sent to your Cash <br />
            Wallet shortly
          </p>
          <nuxt-link
            style="font-size: 11px; color: #00e8fe"
            to="/user_dashboard/wallets/"
            >Return to Dashboard</nuxt-link
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
.continue__payments {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;

  /* padding: 0 50px; */
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
  .settings {
    margin-left: 0 !important;
    padding: 0;
  }
  .payments_wrap {
    margin: 10px;
  }
}
</style>