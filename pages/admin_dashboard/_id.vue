<template>
  <div class="pay_bills_wrap w-100">
    <div class="users">
      <admin-nav name="Assets" />
      <div class="users_wrap__content">
        <div class="header__wrap">
          <h1>Create Assets</h1>
        </div>
        <!-- <div class="user__info__wrap">
          <div class="user__nfo">
            <h4 class="text-center">User Info</h4>
            <div class="row">
              <div class="col-6">
                <div class="first__info">
                  <p>Name: {{}}</p>
                  <p>Contact: {{}}</p>
                  <p>Email: {{}}</p>
                  <p>Fiat Amount: {{}}</p>
                </div>
              </div>
              <div class="col-6">
                <div class="second__info">
                  <p>Name of Asset: {{}}</p>
                  <p>Usdt Price: {{}}</p>
                  <p>Amount after Charges: {{}}</p>
                  <p>USDT Amount Bought: {{}}</p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="create__asset__wrap">
          <div class="asset__content">
            <form action="" method="post">
              <form action="" method="post" @submit.prevent="createAsset()">
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">BTC</label>
                      <input
                        v-model="asset_data.btc"
                        type="text"
                        class="form-control"
                        placeholder="Enter Asset Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Price</label>
                      <input
                        v-model="asset_data.btc_price"
                        type="number"
                        class="form-control"
                        placeholder="Enter Price"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Average Purchase Price</label>
                      <input
                        v-model="asset_data.btc_avg_purchase_price"
                        type="number"
                        class="form-control"
                        placeholder="Enter Average Purchase Price"
                      />
                    </div>
                  </div>
                  <!-- <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">USDT Price</label>
                      <input
                        v-model="asset_data.usdt_price"
                        type="number"
                        class="form-control"
                        placeholder="Enter Average Purchase Price"
                      />
                    </div>
                  </div> -->
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Coin 1</label>
                      <input
                        v-model="asset_data.coin1"
                        type="text"
                        class="form-control"
                        placeholder="Enter Coin Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Usdt Amount</label>
                      <input
                        v-model="asset_data.coin1_amount"
                        type="number"
                        class="form-control"
                        placeholder="Enter Amount"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Price</label>
                      <input
                        v-model="asset_data.coin1_price"
                        type="number"
                        class="form-control"
                        placeholder="Enter Price"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Average Purchase Price</label>
                      <input
                        v-model="asset_data.coin1_avg_purchase_price"
                        type="number"
                        class="form-control"
                        placeholder="Enter Average Purchase Price"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Coin 2</label>
                      <input
                        v-model="asset_data.coin2"
                        type="text"
                        class="form-control"
                        placeholder="Enter Coin Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Usdt Amount</label>
                      <input
                        v-model="asset_data.coin2_amount"
                        type="number"
                        class="form-control"
                        placeholder="Enter Amount"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Price</label>
                      <input
                        v-model="asset_data.coin2_price"
                        type="number"
                        class="form-control"
                        placeholder="Enter Price"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Average Purchase Price</label>
                      <input
                        v-model="asset_data.coin2_avg_purchase_price"
                        type="number"
                        class="form-control"
                        placeholder="Enter Average Purchase Price"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Coin 3</label>
                      <input
                        v-model="asset_data.coin3"
                        type="text"
                        class="form-control"
                        placeholder="Enter Coin Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Usdt Amount</label>
                      <input
                        v-model="asset_data.coin3_amount"
                        type="number"
                        class="form-control"
                        placeholder="Enter Amount"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Price</label>
                      <input
                        v-model="asset_data.coin3_price"
                        type="number"
                        class="form-control"
                        placeholder="Enter Price"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mx-2 mt-2">
                      <label for="" class="py-2">Average Purchase Price</label>
                      <input
                        v-model="asset_data.coin3_avg_purchase_price"
                        type="number"
                        class="form-control"
                        placeholder="Enter Average Purchase Price"
                      />
                    </div>
                  </div>
                </div>
                <div class="phygital__assets__wrap">
                  <h5 class="text-center">PHYGITAL ASSETS</h5>
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group mx-2 mt-2">
                        <label for="" class="py-2">Asset Name</label>
                        <input
                          v-model="asset_data.asset"
                          type="text"
                          class="form-control"
                          placeholder="Enter Asset Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group mx-2 mt-2">
                        <label for="" class="py-2">Usdt Amount</label>
                        <input
                          v-model="asset_data.asset_amount"
                          type="number"
                          class="form-control"
                          placeholder="Enter Amount"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group mx-2 mt-2">
                        <label for="" class="py-2">Price</label>
                        <input
                          v-model="asset_data.asset_price"
                          type="number"
                          class="form-control"
                          placeholder="Enter Price"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group mx-2 mt-2">
                        <label for="" class="py-2"
                          >Average Purchase Price</label
                        >
                        <input
                          v-model="asset_data.asset_avg_purchase_price"
                          type="number"
                          class="form-control"
                          placeholder="Enter Average Purchase Price"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="submit__button text-center">
                  <v-btn
                    class="register_button"
                    value=""
                    :loading="loading"
                    type="submit"
                    >Create Assets</v-btn
                  >
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import creator_sidebar from "~/components/creator_sidebar.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default {
  components: {
    creator_sidebar,
    Toast,
  },
  data() {
    return {
      subcribers: {},
      id: this.$route.params.id,
      asset_data: {
        coin1: "",
        coin1_amount: "",
        coin1_price: "",
        coin1_avg_purchase_price: "",
        coin2: "",
        coin2_amount: "",
        coin2_price: "",
        coin2_avg_purchase_price: "",
        coin3: "",
        coin3_amount: "",
        coin3_price: "",
        coin3_avg_purchase_price: "",
        asset: "",
        asset_amount: "",
        asset_price: "",
        asset_avg_purchase_price: "",
        btc: "",
        btc_price: "",
        btc_avg_purchase_price: "",
      },
      message: {},
      loading: false,
    };
  },
  methods: {
    async getSubscriptionRequests() {
      try {
        const response = await this.$axios.get("/admin/getSubscriptionRequest");
        this.subcribers = response.data.data;
        console.log(this.subcribers);
      } catch (error) {
        console.log(error);
      }
    },
    async createAsset() {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/admin/updateAsset/${this.id}`,
          this.asset_data
        );
        this.loading = false;
        // this.$router.push('/admin_dashboard/dashboard')
        this.$toast.success("Asset Created", { timeout: 5000 });
        console.log(response);
      } catch (error) {
        this.loading = false;
        console.log(error.response);
        this.message = error.response;
        this.$toast.warning(this.message, { timeout: 5000 });
      } finally {
        this.asset_data = {};
      }
    },
  },
  mounted() {
    this.getSubscriptionRequests();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none !important;
}
.users {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.users_wrap__content {
  padding: 40px 10px;
}
.users_wrap__content .header__wrap h1 {
  font-size: 50px;
  text-align: center;
  font-weight: 600;
  color: #0f1843;
}
.users_wrap__content .user__info__wrap,
.users_wrap__content .create__asset__wrap {
  padding: 10px;
  border-radius: 10px;
  background-color: #f8f7ff;
  margin-top: 10px;
}
.users_wrap__content .user__info__wrap h4 {
  color: #0f1843;
  font-weight: 600;
}
.users_wrap__content .create__asset__wrap .asset__content {
  background-color: #fff;
  padding: 20px;
}
.phygital__assets__wrap h5 {
  color: #00e8fe;
}
.submit__button .v-btn {
  background-color: #00e8fe !important;
  color: #000;
  text-transform: none;
  padding: 20px 30px !important;
  width: 30%;
  font-size: 18px;
  box-shadow: none;
  font-size: 15px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 768px) {
  .users {
    margin-left: 0 !important;
    padding: 0;
  }
  .users_wrap__content {
    padding: 10px;
  }
  .search__bar__wrap .form-control {
    width: 70%;
  }
}
</style>