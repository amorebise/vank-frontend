<template>
  <div class="w-100">
    <div class="but__token__content pr-3 py-3">
      <user-nav class="estate__nav py-3" name="Buy Token" />
      <div class="buy__tokkn__body">
        <div class="back__btn">
          <font-awesome-icon
            @click="back()"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>
        <div class="token__p mt-4">
          <p>
            LoT: {{ asset_detail.token_name }} (Min ROI:
            {{ asset_detail.min_roi }}%)
          </p>
        </div>
        <div class="token__wrap">
          <div class="row">
            <div class="col-md-6">
              <div class="img_card">
                <div
                  class="asset__content text-center"
                  :style="{
                    backgroundImage: 'url(' + asset_detail.image + ')',
                  }"
                >
                  <div>
                    <p>&#x20A6;{{ asset_detail.token_price }}K per token</p>
                    <p>
                      {{ asset_detail.token_quantity_subscribed }} tokens sold
                    </p>
                    <h4>483m <sup class="font__text">2</sup></h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="description__wrap">
                <form action="">
                  <div class="form-group">
                    <label>Enter Amount (NGN)</label>
                    <input
                      @keypress="converter()"
                      v-model="buy_amount.amount"
                      type="number"
                      class="form-control buy__input"
                    />
                  </div>
                </form>
                <div class="d-flex">
                  <p>You get</p>
                  <p class="token__box px-3 mx-1">
                    {{ token_quantity }}
                  </p>
                  <p>tokens</p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-3 py-4">
            <button @click="executeBuy()" class="assets__link">
              <span class="px-3">Make Payment</span>
            </button>
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
      id: this.$route.params.id,
      asset_detail: {},
      token_quantity: "",
      amount: {},
      cash_wallet_ballance: {},
      buy_amount: {
        amount: "",
      },
    };
  },
  methods: {
    converter() {
      let assetSum = this.asset_detail.token_price;
      let buyAmount = this.buy_amount.amount;
      this.token_quantity = buyAmount / assetSum;
    },
    executeBuy() {
      let buyBalance = this.cash_wallet_ballance.subscription_wallet_balance;
      if (Number(buyBalance) == 0) {
        this.$toast.warning(
          "You have to fund subscription wallet to buy asset"
        );
      } else {
        this.makePayment();
        // alert("Hi");
      }
    },
    async requestSubscription() {
      try {
        let response = await this.$axios.post(
          `/requestSubscription/${this.asset_detail.id}`,
          this.buy_amount
        );
        this.$router.push("/user_dashboard/payment");
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },
    async getSingleAssetDetail() {
      let response = await this.$axios.get(`/getSingleAsset/${this.id}`);
      this.asset_detail = response.data;
      console.log(this.asset_detail);
    },
    // async getTokenQuantity() {
    //   try {
    //     let response = await this.$axios.post(
    //       `/getTokenQuantity/`,
    //       this.buy_amount
    //     );
    //     this.buy_amount = this.token_quantity;
    //     this.token_quantity = response.data;
    //     console.log(this.token_quantity);
    //   } catch (error) {
    //     console.log(error.response);
    //   }
    // },
    makePayment() {
      this.requestSubscription();
      this.amount = this.buy_amount;
      this.token_name = this.asset_detail;
      localStorage.setItem("marketMakerKey", JSON.stringify(this.amount));
      localStorage.setItem("tokenName", JSON.stringify(this.token_name));
      console.log(this.amount);
      console.log(this.token_name);
      this.loading = false;
      this.$router.push("/user_dashboard/payment");
    },
    async getCashWalletBallance() {
      let response = await this.$axios.get("/getWalletBalance");
      this.cash_wallet_ballance = response.data;
      console.log(this.cash_wallet_ballance);
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getSingleAssetDetail();

    this.getCashWalletBallance();
  },
};
</script>

<style>
.but__token__content {
  margin-left: 270px;
  background-color: #fff;
  height: 100%;
}
a {
  color: inherit;
}
.buy__input {
  border: 1px solid #30303058 !important;
}
.but__token__content .asset__content {
  /* background-image: url("/asset.jpg"); */
  background-size: cover;
  border-radius: 10px;
  color: #001214;
  position: relative;
  height: 300px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
  border: 5px solid #00e8fe;
}
.but__token__content .asset__content p {
  opacity: 0;
  font-size: 30px;
}
.but__token__content .asset__content h4 {
  opacity: 0;
  color: #00e8fe;
}
.but__token__content .font__text {
  font-size: 10px;
}
.but__token__content .asset__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.but__token__content .asset__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.but__token__content .asset__content:hover h4 {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.but__token__content .description__wrap {
  padding-top: 30px !important;
}
.but__token__content .description__wrap p {
  line-height: 25px;
  font-weight: 500;
  font-size: 16px;
}
.but__token__content .description__wrap span {
  color: #00e8fe;
}
.but__token__content .token__wrap {
  border: 1px solid #00e8fe;
  padding: 50px 20px;
  border-radius: 5px;
}
.but__token__content label {
  font-size: 14px;
  font-weight: 600;
}
.but__token__content .form-control {
  width: 50%;
  box-shadow: none;
}
.but__token__content .form-control:focus {
  border-color: #0012144b;
}
.but__token__content input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.but__token__content .token__box {
  border: 1px solid #0012142e;
  border-radius: 3px;
  width: 100px;
}
.but__token__content .assets__link {
  border: 1px solid #00e8fe;
  padding: 10px 2px;
}
.but__token__content .assets__link span {
  border: 1px solid #00e8fe;
  padding: 7px 2px;
}

@media (max-width: 768px) {
  .but__token__content {
    margin-left: 0 !important;
    padding: 0 !important;
  }
  .settings_wrap {
    margin: 10px;
  }
  .but__token__content .token__wrap {
    margin: 10px;
    padding: 10px;
    border-radius: 0;
  }
  .but__token__content .asset__content {
    background-image: url("/asset.jpg");
    background-size: cover;
    border-radius: 0;
    box-shadow: 2px 2px 2px #303030;
    color: #001214;
    position: relative;
    height: 300px;
    transition: ease-in-out 0.3s;
    color: #fff;
    display: grid;
    place-items: center;
    font-weight: 500;
    font-size: 15px;
    border: none;
    /* gap: 10px; */
  }
  .but__token__content .description__wrap {
    padding-top: 10px;
  }
  .token__p {
    padding-left: 20px;
    padding-right: 20px;
  }
  .back__btn {
    padding-left: 15px;
  }
  .buy__tokkn__body {
    padding-top: 70px;
  }
}
</style>