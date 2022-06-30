<template>
  <div class="pay_bills_wrap w-100">
    <div class="fund__wallet">
      <user-nav name="Bank Transfer" />
      <div class="payments_wrap subscriber">
        <div class="bank__wrap py-5">
          <div class="text-center" style="line-height: 13px">
            <p>
              Pay &#8358;1234 to: <br />
              Vank Digital Services
            </p>
            <p>Bank: Access Bank</p>
            <p>Acc No: 1234567890</p>
          </div>
          <div class="view__assets__wrap text-center">
            <nuxt-link to="/user_dashboard/transfer_confirmation">
              <button class="assets__link">
                <span class="px-3" style="font-weight: 400"
                  >I have made full payment</span
                >
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
.fund__wallet {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;

  /* padding: 0 50px; */
}
.fund__wallet .bank__wrap {
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
  .fund__wallet .bank__wrap {
    border: 1px solid #00e8fe;
    width: 100%;
    margin: 40px auto;
    display: grid;
    place-items: center;
    border-radius: 20px;
  }
}
</style>