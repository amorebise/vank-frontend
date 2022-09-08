<template>
  <div class="w-100">
    <div class="property pr-3">
      <user-nav class="pr-2 prop__nav py-4" name="Property Details" />
      <div class="mt-5 single__property">
        <div>
          <font-awesome-icon
            @click="back()"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>
        <div class="row mt-3 single__asset__tab">
          <div class="col-md-6">
            <div class="img_card">
              <div
                class="asset__content text-center"
                :style="{ backgroundImage: 'url(' + asset_detail.image + ')' }"
              >
                <div>
                  <!-- <p>&#x20A6;1.19K per unit</p> -->
                  <p>Min ROI: {{ asset_detail.min_roi }}</p>
                  <h4>Whole Price: &#x20A6;{{ asset_detail.whole_price }}</h4>
                  <p>{{ asset_detail.token_name }} Token</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="description__wrap pt-3">
              <p>Token Name: {{ findAsset ? findAsset.token_name : "" }}</p>
              <p>Whole Price: {{ findAsset ? findAsset.whole_price : "" }}</p>
              <p>Token Price: {{ findAsset ? findAsset.token_price : "" }}</p>
              <p>Amount: {{ findAsset ? findAsset.amount : "" }}</p>
              <p>Quantity: {{ findAsset ? findAsset.quantity : "" }}</p>
              <p>
                Current Market Price:
                {{ findAsset ? findAsset.current_market_price : "" }}
              </p>
              <p>
                Current Market Price:
                {{ findAsset ? findAsset.current_token_value : "" }}
                <!-- {{ findAsset ? findAsset.asset_id : "" }} -->
              </p>

              <div class="mt-2">
                <button
                @click="coordinates = !coordinates"
                  class="view__report"
                  style="color: #00e8fe; font-size: 12px"
                >
                  Click to view Coordinates
                </button>
                <div v-show="coordinates">
                  <p>{{ asset_detail.coordinates }}</p>
                </div>
              </div>
              <div>
                <a
                  class="view__report"
                  style="color: #00e8fe; font-size: 12px"
                  :href="asset_detail.due_deligence_report"
                  target="_blank"
                  attributes-list
                  download
                >
                  Click to view due diligence report
                </a>
              </div>
              <div>
                <a
                  class="view__report"
                  style="color: #00e8fe; font-size: 12px"
                  :href="asset_detail.token_audit_report"
                  target="_blank"
                  attributes-list
                  download
                >
                  Click to view due token audit report
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          style="gap: 10px"
          class="
            buy__token__wrap
            d-flex
            justify-content-center
            text-center
            mt-3
            py-4
          "
        >
          <div>
            <nuxt-link
              :to="`/user_dashboard/buy_token/${id}`"
              class="assets__link"
            >
              <span class="px-3">Buy More</span>
            </nuxt-link>
          </div>

          <div>
            <div v-if="user">
              <nuxt-link
                :to="`/user_dashboard/sell/${id}`"
                class="assets__link"
              >
                <span class="px-3">Sell</span>
                <!-- {{ findAsset ? findAsset : "" }} -->
              </nuxt-link>
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
  // middleware: "auth",
  components: { creator_sidebar },
  data() {
    return {
      user: {},
      assets: {},
      asset_detail: {},
      id: this.$route.params.id,
      audit_report: false,
      due__deligence__modal: false,
      coordinates: false
    };
  },
  methods: {
    async getSingleAssetDetail() {
      let response = await this.$axios.get(`/getSingleAsset/${this.id}`);
      this.asset_detail = response.data;
      console.log(this.asset_detail);
    },
    async getAssets() {
      try {
        let response = await this.$axios.get("/getSubscribedAsset");
        // getSubscribedAsset
        this.assets = response.data.slice(0, 3)[0];
        console.log(this.assets);
      } catch (error) {
        console.log(error.response);
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  computed: {
    findAsset() {
      let foundAsset = null;
      if (this.assets.subscriptions) {
        for (let index = 0; index < this.assets.subscriptions.length; index++) {
          const element = this.assets.subscriptions[index];
          console.log(element);
          console.log(this.id);
          console.log(this.id == element.id);
          element.id == this.id ? (foundAsset = element) : "";
        }
        console.log(foundAsset);
        return foundAsset;
      } else {
        return null;
      }
    },
  },
  async created() {
    await this.getAssets();
    this.getSingleAssetDetail();
    console.log(this.assets.subscriptions);
  },
};
</script>
  
  <style>
.property {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
}
.single__property a {
  color: inherit;
}
.property .asset__content {
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
.property .asset__content p {
  opacity: 0;
}
.property .asset__content h4 {
  opacity: 0;
  color: #00e8fe;
}
.property .asset__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.property .asset__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.property .asset__content:hover h4 {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.property .description__wrap p {
  line-height: 10px;
  font-weight: 500;
  font-size: 16px;
}
.property .description__wrap span {
  color: #00e8fe;
}
.single__property .buy__token__wrap .assets__link {
  border: 1px solid #00e8fe;
  padding: 10px 2px;
}
.single__property .buy__token__wrap .assets__link span {
  border: 1px solid #00e8fe;
  padding: 7px 2px;
}

@media (max-width: 768px) {
  .property {
    margin-left: 0 !important;
    padding: 0 !important;
  }
  .single__asset__tab {
    margin-top: 5px !important;
  }
  .settings_wrap {
    margin: 10px;
  }
  .property .asset__content {
    border: none;
    border-radius: 0;
    box-shadow: 2px 2px 2px #303030;
  }
  .property .description__wrap {
    padding-top: 30px !important;
  }
  .property .description__wrap p {
    font-size: 13px;
  }
  .property .description__wrap span {
    font-size: 13px;
  }
  .single__property {
    margin-top: 0 !important;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 80px;
  }
  .description__wrap {
    padding: 10px;
    margin-top: -25px;
  }
  .single__property .buy__token__wrap {
    margin-top: 0 !important;
  }
  .prop__nav {
    position: fixed;
    background-color: #fff;
    padding: 0 !important;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 232, 254, 0.1) !important;
    z-index: 1000;
  }
}
</style>