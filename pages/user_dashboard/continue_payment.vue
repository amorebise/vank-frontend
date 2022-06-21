<template>
  <div class="pay_bills_wrap w-100">
    <div class="continue__payments">
      <user-nav name="Make Payments" />
      <div class="payments_wrap subscriber">
        <div class="token__wrap py-5">
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
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Karla&family=Lato&family=Nunito&family=Plus+Jakarta+Sans&family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  text-decoration: none !important;
}
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