<template>
  <div class="w-100">
    <div class="property">
      <user-nav name="Property Details" />
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
              <p>Location: {{ asset_detail.location }}</p>
              <p>Layout Name: {{ asset_detail.layout_name }}</p>
              <p>
                Distance to closest built up areas: <br />
                -{{ asset_detail.description1 }}- <br />
                {{ asset_detail.description2 }} <br />
                about {{ asset_detail.description3 }} <br />
                about {{ asset_detail.documentation }}
              </p>
              <p>Population within 20KM radius: Over 200,000</p>
              <!-- <span>Est. minimum return 9.2%PA</span> -->

              <!-- <div>
                <button
                  class="view__report"
                  style="color: #00e8fe; font-size: 12px"
                >
                  Click to view Coordinates
                </button>
              </div> -->
              <div>
                <button
                  @click="due__deligence__modal = !due__deligence__modal"
                  class="view__report"
                  style="color: #00e8fe; font-size: 12px"
                >
                  Click to view due diligence report
                </button>
              </div>
              <div>
                <button
                  @click="audit_report = !audit_report"
                  class="view__report"
                  style="color: #00e8fe; font-size: 12px"
                >
                  Click to view audit report
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="due__deligence__modal">
          <div class="change__password__form" v-show="due__deligence__modal">
            <div class="password__modal slideInDown">
              <div class="text-right">
                <button
                  style="font-size: 16px; font-weight: 600; color: #00e8fe"
                  @click="due__deligence__modal = !due__deligence__modal"
                >
                  x
                </button>
              </div>
              <div>
                <embed
                  :src="asset_detail.token_audit_report"
                  frameBorder="0"
                  scrolling="auto"
                  height="100%"
                  width="100%"
                />
                <!-- <img :src="asset_detail.due_deligence_report" alt="image" /> -->
              </div>
            </div>
          </div>

          <div class="change__password__form" v-show="audit_report">
            <div class="password__modal slideInDown">
              <div class="text-right">
                <button
                  style="font-size: 16px; font-weight: 600; color: #00e8fe"
                  @click="audit_report = !audit_report"
                >
                  x
                </button>
              </div>
              <div>
                <embed
                  :src="asset_detail.token_audit_report"
                  frameBorder="0"
                  scrolling="auto"
                  height="100%"
                  width="100%"
                />
                <!-- <img :src="asset_detail.token_audit_report" alt="image" /> -->
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
              <span class="px-3">Buy Token</span>
            </nuxt-link>
          </div>

          <div>
            <div v-if="user">
              <nuxt-link
                :to="`/user_dashboard/sell/${id}`"
                class="assets__link"
              >
                <span class="px-3">Sell</span>
              </nuxt-link>
            </div>
            <!-- <div v-else>
              <p>p</p>
            </div> -->
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
      asset_detail: {},
      id: this.$route.params.id,
      audit_report: false,
      due__deligence__modal: false,
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

    async getSingleAssetDetail() {
      let response = await this.$axios.get(`/getSingleAsset/${this.id}`);
      this.asset_detail = response.data;
      console.log(this.asset_detail);
    },

    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getUser();
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
  line-height: 15px;
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