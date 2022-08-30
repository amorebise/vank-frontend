<template>
  <div class="pay_bills_wrap w-100">
    <div class="continue__payments pr-3">
      <user-nav name="Bank Transfer" />
      <div class="payments_wrap subscriber">
        <div class="confirm__wrap py-5">
          <h5 style="font-weight: 400; text-align: center; font-size: 13px">
            Thank you for your payment, <br />
            value will reflect in your wallet <br />
            shortly!
          </h5>

          <nuxt-link
            style="font-size: 12px; color: #00e8fe"
            to="/user_dashboard/my_account"
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
.continue__payments .confirm__wrap {
  border: 1px solid #00e8fe;
  width: 50%;
  margin: 40px auto;
  display: grid;
  place-items: center;
  border-radius: 20px;
}

.continue__payments h5 {
  font-size: 16px;
}

@media (max-width: 768px) {
  .continue__payments {
    padding: 0 !important;
  }
  .continue__payments .confirm__wrap {
    border: 1px solid #00e8fe;
    width: 95%;
    margin: 40px auto;
    box-shadow: none;
  }
}
</style>