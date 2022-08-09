<template>
  <div class="pay_bills_wrap w-100">
    <div class="continue__payments">
      <user-nav name="Make Payments" />
      <div class="back__btn">
        <font-awesome-icon
          @click="back()"
          role="button"
          class="fa-1x text-dark pl-1"
          :icon="['fas', 'arrow-left']"
        />
      </div>
      <div class="payments_wrap subscriber">
        <div class="pay__wrap py-5">
          <h5>
            &#8358;1234 will be deducted from your <br />
            cash wallet for Pyanko1 tokens
          </h5>
          <div class="view__assets__wrap text-center">
            <nuxt-link to="/user_dashboard/payment_notification">
              <button class="assets__link">
                <span class="px-3" style="font-weight: 400">Make Payment</span>
              </button>
            </nuxt-link>
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
  methods: {
    back() {
      this.$router.go(-1);
    },
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
    margin: 20px auto;
  }
}
</style>