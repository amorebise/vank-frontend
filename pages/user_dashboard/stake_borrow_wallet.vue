<template>
  <div class="w-100">
    <div class="real__estate_wallet">
      <user-nav name="Your Wallet" />
      <div>
        <font-awesome-icon
          @click="back()"
          role="button"
          class="fa-1x text-dark pl-1"
          :icon="['fas', 'arrow-left']"
        />
      </div>
      <div class="d-flex justify-content-center" style="gap: 20px">
        <div class="register_button_wrap text-center mt-3 py-4">
          <nuxt-link to="/user_dashboard/staking__borrow/" class="assets__link">
            <span class="px-3">Staking Wallet</span>
          </nuxt-link>
        </div>
        <div class="register_button_wrap text-center mt-3 py-4">
          <nuxt-link to="/user_dashboard/staking__borrow" class="assets__link">
            <span class="px-3">Borrowing Wallet</span>
          </nuxt-link>
        </div>
      </div>
      <div class="mt-4">
        <h5>
          Estimated Naira Value:
          <span style="color: #00e8fe; font-weight: bolder">380,000NGN</span>
        </h5>
      </div>
      <div class="basket_data">
        <!-- <table class="table">
          <thead>
            <tr>
              <th scope="col">Token</th>
              <th scope="col">Total</th>
              <th scope="col">Value</th>
              <th scope="col">Locked</th>
              <th scope="col">Available</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Pyanko 1</th>
              <td>70,000</td>
              <td>70,000NGN</td>
              <td>0.00</td>
              <td>70,000</td>
            </tr>
            <tr>
              <th scope="row">Epe 3</th>
              <td>178,900</td>
              <td>178,900NGN</td>
              <td>100,000</td>
              <td>78,900</td>
            </tr>
            <tr>
              <th scope="row">Enugu 2</th>
              <td>237,430</td>
              <td>178,900NGN</td>
              <td>237,430</td>
              <td>0.00</td>
            </tr>
          </tbody>
        </table> -->
        <v-simple-table fixed-header height="400px">
          <template v-slot:default>
            <thead>
              <tr class="">
                <th class="text-left th_color">Token</th>
                <th class="text-left th_color">Total</th>

                <th class="text-left th_color">Value</th>
                <th class="text-left th_color">Locked</th>
                <th class="text-left th_color">Available</th>
              </tr>
            </thead>
            <tbody>
              <tr class="mt-2">
                <td>Pyanko 1</td>
                <td>70,000</td>

                <td>70,000NGN</td>
                <td>0.00</td>
                <td>70,000</td>
              </tr>

              <tr class="mt-2">
                <td>Epe 3</td>
                <td>178,900</td>

                <td>178,900NGN</td>
                <td>100,000</td>
                <td>78,900</td>
              </tr>

              <tr class="mt-2">
                <td>Enugu 2</td>
                <td>237,430</td>

                <td>178,900NGN</td>
                <td>237,430</td>
                <td>0.00</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
  .real__estate_wallet {
    margin-left: 0;
    padding: 0;
  }
  .real__estate_wallet h5 {
    font-size: 16px;
    text-align: center;
  }
  .settings_wrap {
    margin: 10px;
  }
}
</style>