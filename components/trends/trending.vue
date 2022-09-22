<template>
  <div class="trends">
    <div class="assets__card mt-2 px-2">
      <div class="row">
        <div v-for="trending in trendingAssets" :key="trending.index" class="col-md-4 px-1 mb-2">
          <div class="general__trends">
            <div @click="
              $router.push(`/user_dashboard/asset_detail/${trending.id}`)
            " role="button" class="trending__content" :style="{ backgroundImage: 'url(' + trending.image + ')' }">
              <div class="tq_notification">
                <span v-if="trending.current_market_price.length > 0" style="font-size: 12px" class="text-dark">
                  <!-- {{ showPercentSold }}  -->
                  {{
                  (
                  (Number(trending.token_quantity_subscribed) /
                  Number(trending.current_market_price)) *
                  100
                  ).toFixed(0)
                  }}% tokens Sold
                </span>
                <span v-else style="font-size: 12px" class="text-dark">0 token Sold</span>
              </div>
              <div style="
                        display: grid;
                        place-items: center;
                        align-items: center;
                        padding-top: 70px;
                      ">
                <p v-if="trending.coordinates">
                  {{ trending.coordinates }}
                </p>
                <p v-else>
                  Coordinates: <br />
                  4724’12.2N 384231.7E
                </p>
              </div>
            </div>
            <div class="text__wrap bg-white px-3 py-3">
              <p>Land in {{ trending.layout_name }} - <span>650SQM</span></p>
              <div class="d-flex justify-content-between">
                <h6>{{ trending.location }}</h6>
                <ion-icon v-if="trending.bookmarkStatus == ''" @click="bookmark(trending)" style="color: #00e8fe"
                  name="bookmark-outline" />
                <ion-icon v-else @click="removeBookmark(trending)" style="color: #00e8fe" name="bookmark" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="display: grid; place-items: center" v-if="trendingAssets.length == 0">
        <img style="width: 50px" src="/assets.webp" alt="asset image" />
        <p>You do not have any assets.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trendingAssets: {},
    };
  },
  methods: {
    async getTrendingAssets() {
      try {
        let response = await this.$axios.get("/getTrendingAsset");
        this.trendingAssets = response.data;
        console.log(this.trendingAssets);
      } catch (error) {
        console.log(error.response);
      }
    },
    async bookmark(trending) {
      try {
        let response = await this.$axios.post(`/bookmarkAsset/${trending.id}`);
        this.getTrendingAssets();
        console.log(response);
        this.$toast.success("Property has been bookmarked", { timeout: 5000 });
      } catch (error) {
        console.log(error.response);
        this.$toast.warning(
          "Ooops!!! You have to register inorder to bookmark",
          {
            timeout: 5000,
          }
        );
        this.$router.push("/sign_up");
      }
    },
    async removeBookmark(trending) {
      try {
        let response = await this.$axios.post(
          `/removeFromBookmarks/${trending.id}`
        );
        this.getTrendingAssets();
        console.log(response);
        this.$toast.success("Property has been removed from bookmarks", {
          timeout: 5000,
        });
      } catch (error) {
        console.log(error.response);
        this.$toast.warning("There's an error somewhere", {
          timeout: 5000,
        });
      }
    },
  },
  created() {
    this.getTrendingAssets();
  },
};
</script>

<style>
.trends .general__trends .text__wrap {
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
}

/* .general__trends .text__wrap {
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
} */
@media (max-width: 768px) {}
</style>