<template>
  <div class="w-100">
    <div class="property">
      <user-nav class="pr-2" name="Property Details" />
      <div class="mt-5 single__property">
        <div>
          <font-awesome-icon
            @click="back()"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="img_card">
              <div
                class="asset__content text-center"
                :style="{ backgroundImage: 'url(' + asset_detail.image + ')' }"
              >
                <div>
                  <p>Min ROI: {{ asset_detail.min_roi }}</p>
                  <h4>Whole Price: &#x20A6;{{ asset_detail.whole_price }}</h4>
                  <p>{{ asset_detail.token_name }} Token</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="description__wrap pt-3">
              <p>Name: {{ asset_detail.layout_name }}</p>
              <p>Location: {{ asset_detail.location }}</p>
              <p>Size: {{ asset_detail.size }}</p>
              <p>Title: {{ asset_detail.documentation }}</p>
              <p>Distance to closest built up areas:</p>
              <p>-{{ asset_detail.description1 }}-</p>
              <p>{{ asset_detail.description2 }}</p>

              <p>Population within 20KM radius: Over 200,000</p>
              <div class="d-flex align-items-center">
                <div>
                  <button
                    class="view__report"
                    style="color: #00e8fe; font-size: 12px"
                  >
                    Click to view Coordinates
                  </button>
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

        <div class="text-center">
          <div class="register_button_wrap text-center mt-1 py-4">
            <span
              @click="edit_asset = !edit_asset"
              role="button"
              class="assets__link"
            >
              <span class="px-3">Edit Property</span>
            </span>
          </div>
        </div>
        <div class="due__deligence__modal">
          <div class="change__password__form" v-show="edit_asset">
            <div class="password__modal slideInDown">
              <div class="text-right">
                <button
                  style="font-size: 16px; font-weight: 600; color: #00e8fe"
                  @click="edit_asset = !edit_asset"
                >
                  x
                </button>
              </div>
              <div>
                <div class="form-group mx-2 mt-2">
                  <label for="" class="">Currren Market Price</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="asset.current_market_price"
                    placeholder="Enter Price"
                  />

                  <div class="register_button_wrap text-center mt-1 py-4">
                    <span
                      @click="updateAsset()"
                      role="button"
                      class="assets__link"
                    >
                      <span class="px-3">Update</span>
                    </span>
                  </div>
                </div>
                <!-- <img :src="asset_detail.due_deligence_report" alt="image" /> -->
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
      asset_detail: {},
      asset: {
        current_market_price: "",
      },
      id: this.$route.params.id,
      due__deligence__modal: false,
      audit_report: false,
      edit_asset: false,
    };
  },
  methods: {
    async getSingleAssetDetail() {
      let response = await this.$axios.get(`/getSingleAsset/${this.id}`);
      this.asset_detail = response.data;
      console.log(this.asset_detail);
    },
    async updateAsset() {
      try {
        let response = await this.$axios.post(
          `/admin/updateAsset/${this.id}`,
          this.asset
        );
        this.edit_asset = !this.edit_asset;
        this.$toast.success("asset updated successfully", { timeout: 5000 });
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getSingleAssetDetail();
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
.view__report {
  text-decoration: underline !important;
}
.change__password__form {
  background-color: rgba(0, 0, 0, 0.445);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
}
.password__modal {
  width: 20%;
  margin: 100px auto;
  background-color: #fff;
  padding: 10px !important;
  border-radius: 5px;
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
  font-size: 14px;
}
.property .description__wrap span {
  color: #00e8fe;
  font-size: 12px;
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
    padding: 0;
  }
  .settings_wrap {
    margin: 10px;
  }
  .property .asset__content {
    border: none;
    border-radius: 0;
    box-shadow: 2px 2px 2px #303030;
  }
  .property .description__wrap p {
    font-size: 13px;
  }
  .property .description__wrap span {
    font-size: 13px;
  }
  .single__property {
    margin-top: 0 !important;
    padding: 20px;
  }
  .description__wrap {
    padding: 10px;
    margin-top: -25px;
  }
  .single__property .buy__token__wrap {
    margin-top: 0 !important;
  }
}
</style>