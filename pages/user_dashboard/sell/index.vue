<template>
  <div class="pay_bills_wrap w-100">
    <div class="fund__wallet pr-3">
      <user-nav name="Bank Transfer" />
      <div class="fundz__wrap">
        <div>
          <font-awesome-icon
            @click="back()"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>
        <div class="payments_wrap subscriber px-1">
          <div class="bank__wrap py-5">
            <div class="text-center" style="line-height: 13px">
              <h6>VANK Wallet</h6>
              <p>Guaranty Trust Bank</p>
              <p>00234765376</p>
            </div>
            <div class="view__assets__wrap text-center">
              <div>
                <button @click="returnToDashboard()">
                  <button class="assets__link">
                    <span class="px-3" style="font-weight: 400"
                      >Sell Token</span
                    >
                  </button>
                </button>
              </div>
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
    return {};
  },
  methods: {
    returnToDashboard() {
      this.$router.push("/user_dashboard/my_account/");
      this.$toast.success("Token has been sold", { timeout: 5000 });
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.fund__wallet {
  margin-left: 270px;
  background-color: #fff;
}
.fund__wallet .bank__wrap {
  border: 1px solid #00e8fe;
  width: 50%;
  margin: 100px auto;
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
  .fund__wallet {
    margin-left: 0;
  }
  .fund__wallet .fundz__wrap {
    padding-left: 20px;
  }
  .fund__wallet .bank__wrap {
    border: 1px solid #00e8fe;
    width: 100%;
    margin: 20px auto;
    display: grid;
    place-items: center;
    border-radius: 20px;
  }
}
</style>