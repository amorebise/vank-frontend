<template>
  <div class="w-100">
    <div class="but__token__content pr-3">
      <user-nav name="Sell Tokens" />
      <div class="">
        <div>
          <font-awesome-icon
            @click="$router.go(-1)"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>

        <div class="token__wrap py-2">
          <div class="token__p text-center py-3">
            <h4 class="font-weight-bold">
              {{ asset_detail.token_name }} Token
            </h4>
          </div>
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
                    <p>&#x20A6;{{ asset_detail.whole_price }}</p>
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
                <i>You can only sell to VANK for now</i>
                <h6 class="font-weight-bold">Enter quantity of tokens</h6>
                <div class="d-flex value__bar justify-content-between px-1">
                  <form action="">
                    <div class="form-group">
                      <!-- <label>Enter quantity of tokens</label> -->
                      <div class="">
                        <input
                          type="number"
                          v-model="sell_quantity.quantity"
                          class="form-control mt-2"
                        />
                      </div>
                    </div>
                  </form>
                  <button @click="getMaxValue()" style="color: #00e8fe">
                    MAX
                  </button>
                </div>
                <div class="mt-3 py-4">
                  <button
                    @click="executeSell()"
                    type="submit"
                    class="assets__link"
                  >
                    <span class="px-3">Sell</span>
                  </button>
                </div>
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
  middleware: "auth",
  components: { creator_sidebar },
  data() {
    return {
      user: {},
      id: this.$route.params.id,
      max_value: "",
      sell_quantity: {
        quantity: "",
      },
      asset_detail: {},
    };
  },
  methods: {
    async getUser() {
      let auth = this.$auth.$storage._state;
      let token = null;

      for (const key in auth) {
        console.log(key);

        if (key == "_token.local") {
          token = auth[key];
        } else {
          console.log("No");
        }
      }

      console.log(token);

      // console.log(this.$auth.$storage._state._token);
      try {
        let res = await this.$axios.get("/getUser", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });

        this.user = res.data[0];

        console.log(this.user);
      } catch (error) {
        console.log(error.response);
      }
    },
    async sellToken() {
      try {
        let response = await this.$axios.post(
          `/sale/${this.asset_detail.id}`,
          this.sell_quantity
        );
        this.$router.push("/user_dashboard/sell/");
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
    executeSell() {
      let maxValue = this.max_value;
      if (maxValue == 0) {
        this.$toast.warning("You do not have any assets to sell");
      } else {
        this.sellToken();
      }
    },
    async getMaxValue() {
      try {
        let response = await this.$axios.get(
          `/getMaxValue/${this.asset_detail.id}`
        );
        this.max_value = response.data;
        this.sell_quantity.quantity = this.max_value;
        // console.log(this.max_value);
      } catch (error) {
        console.log(error.response);
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getUser();
    this.getSingleAssetDetail();
    this.getMaxValue();
  },
};
</script>

<style>
.but__token__content {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
}
.value__bar {
  border: 1px solid rgba(0, 0, 0, 0.34);
  border-radius: 3px;
  width: 50%;
}
a {
  color: inherit;
}
.but__token__content .description__wrap i {
  font-size: 13px;
  text-decoration: underline !important;
  font-weight: bold;
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
  padding-top: 50px;
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
  border: none;
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
    /* width: 100% !important; */
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
}
</style>