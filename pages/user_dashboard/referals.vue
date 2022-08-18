<template>
  <div class="pay_bills_wrap w-100">
    <div class="referals__wrap">
      <user-nav name="Referral" />

      <div class="referal__body">
        <!-- <div>
          <font-awesome-icon
            @click="$router.go(-1)"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div> -->

        <div class="referal__content">
          <div class="text-center">
            <h4 class="font-weight-bold py-4">Refer a friend and earn cash</h4>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="img__wrap">
                <div class="d-flex pl-5">
                  <img src="/afiliate.svg" alt="referal image" />
                  <img src="/afiliate.svg" alt="referal image" />
                  <img src="/afiliate.svg" alt="referal image" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="limit__wrap">
                <p>
                  There is no limit to how much cash you can earn, copy <br />
                  your unique link below and invite all of your friends
                </p>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                    ref__link
                    px-1
                    pt-2
                  "
                >
                  <div>
                    <p>{{ referrals }}</p>
                  </div>
                  <div>
                    <p>
                      <ion-icon
                        style="color: #00e8fe"
                        name="copy-outline"
                      ></ion-icon>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wallet__content mt-3">
          <div class="d-flex justify-content-center">
            <h5>You have earned &#8358;20,000 cash</h5>
            <div class="pt-1 pl-1">
              <ion-icon
                style="color: #00e8fe; font-size: 20px"
                name="card-outline"
              ></ion-icon>
            </div>
          </div>

          <div class="register_button_wrap text-center mt-1 py-4">
            <nuxt-link to="/user_dashboard/lagos_property" class="assets__link">
              <span class="px-3">Transfer to Cash Wallet</span>
            </nuxt-link>
          </div>

          <div class="text-center">
            <i style="font-size: 12px">
              You can only make a transfer when your cash is more than N5,000
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import creator_sidebar from "~/components/creator_sidebar.vue";
export default {
  middleware: "auth",
  components: { creator_sidebar },
  data() {
    return {
      referrals: {},
    };
  },
  methods: {
    async getReferrals() {
      let response = await this.$axios.get("/getReferrerUrl");
      this.referrals = response.data.slice(0, 40);
      console.log(this.referrals);
    },
  },
  created() {
    this.getReferrals();
  },
};
</script>

<style>
.referals__wrap {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
  padding-right: 10px;
  /* padding: 0 50px; */
}
.ref__link {
  border: 1px solid #00e8fe;
  width: 70%;
}
.referals__wrap .referal__content {
  border: 1px solid #00e8fe;
  border-radius: 10px;
  padding: 30px;
}
.referals__wrap .img__wrap img {
  width: 130px;
}
.referals__wrap .limit__wrap p {
  font-size: 14px;
}
.referals__wrap .wallet__content h5 {
  color: #00e8fe;
  font-weight: 600;
}
.referals__wrap i {
  text-decoration: underline !important;
  font-weight: bold;
}

@media (max-width: 768px) {
  .referals__wrap {
    margin-left: 0 !important;
    padding: 0;
  }
  .referals__wrap .referal__body {
    padding: 15px;
  }
  .referals__wrap .img__wrap img {
    width: 100px !important;
  }
  .referals__wrap .img__wrap .pl-5 {
    padding: 0 !important;
  }
}
</style>