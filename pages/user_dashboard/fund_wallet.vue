<template>
  <div class="pay_bills_wrap w-100">
    <div class="fund__wallet">
      <user-nav name="Fund my wallet" />
      <div class="payments_wrap subscriber">
        <div class="token__wrap py-5">
          <div class="form-group mx-2 mt-2">
            <label for="exampleFormControlSelect1" class=""
              >Choose funding method</label
            >
            <select
              class="form-control option-class select"
              id="exampleFormControlSelect1"
              required
            >
              <option>Select</option>
              <option class="colour" id="selectCountry">
                <p class="text-danger">Card payment</p>
              </option>
              <option>Bank Transfer</option>
            </select>
          </div>

          <div class="form-group mx-2 mt-2">
            <label for="" class="">How much do you want to pay?</label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter Amount"
            />
          </div>
          <div class="view__assets__wrap text-center">
            <nuxt-link to="/user_dashboard/bank_transfer">
              <button class="assets__link">
                <span class="px-3">Next</span>
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
.fund__wallet {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;

  /* padding: 0 50px; */
}
.fund__wallet .token__wrap {
  border: 1px solid #00e8fe;
  width: 70%;
  margin: 40px auto;
  display: grid;
  place-items: center;
  border-radius: 20px;
  min-height: 25vh;
}
.fund__wallet .form-control {
  width: 250px;
  box-shadow: none;
  font-size: 12px;
}
.fund__wallet label {
  font-size: 13px;
}
.fund__wallet p {
  font-size: 12px;
}
.fund__wallet .select:focus {
  border-color: #3030303a;
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