<template>
  <div class="w-100">
    <div class="real__estate_wallet">
      <user-nav name="Real Estate" />
      <div>
        <font-awesome-icon
          @click="back()"
          role="button"
          class="fa-1x text-dark pl-1"
          :icon="['fas', 'arrow-left']"
        />
      </div>
      <div class="estate__wrap px-1 mt-4">
        <h6>My Subscription ...</h6>
        <div class="row">
          <div class="col-md-6">
            <img src="/real.svg" alt="" />
            <div class="token__box">
              <p class="full__text px-2 py-1">KARSHI 02 Tokens</p>
            </div>
          </div>
          <div class="col-md-6">
            <div>
              <img src="/real.png" alt="" />
              <div class="token__box">
                <p class="full__text px-2 py-1">EPE 3 Tokens</p>
              </div>
            </div>
          </div>
        </div>
        <div class="register_button_wrap text-center mt-3 py-4">
          <nuxt-link
            to="/user_dashboard/fractional_ownership"
            class="assets__link"
          >
            <span class="px-3">Go to my Real Estate Wallet</span>
          </nuxt-link>
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
.real__estate_wallet {
  margin-left: 270px;
}
.real__estate_wallet .real__estate {
  background-color: #fff;
  min-height: 100vh;
}
.real__estate_wallet .real__estate a {
  color: inherit;
}
.real__estate_wallet .real__estate .estate__wrap {
  padding: 200px 100px 10px 100px;
  background-color: #f8feff;
}
.real__estate_wallet .real__estate .estate__wrap h6 {
  font-weight: 600;
}
.real__estate_wallet .real__estate .fractional__wrap {
  background-image: url("/asset.jpg");
  height: 250px;
  background-size: cover;
  border: 5px solid #00e8fe;
}
.real__estate_wallet .real__estate .full__ownership {
  background-image: url("/asset.jpg");
  height: 250px;
  background-size: cover;
  border: 5px solid #00e8fe;
  display: grid;
  place-items: center;
}
.real__estate .full__text {
  font-size: 14px;
  font-weight: 500;
}
.real__estate .full__ownership .button__wrap {
  border: 1px solid #fff;
  color: #00e8fe;
  font-size: 13px;
  border-radius: 2px;
}
.real__estate .full__ownership .button__wrap button {
  background-color: #ebfdff;
}
.token__box {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 232, 254, 0.15);
  padding: 10px;
}
.real__estate_wallet img {
  width: 100%;
}

@media (max-width: 768px) {
  .real__estate {
    margin-left: 0 !important;
    padding: 0;
  }
  .settings_wrap {
    margin: 10px;
  }
}
</style>