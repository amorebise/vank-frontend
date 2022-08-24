<template>
  <div class="w-100">
    <div class="real__estate">
      <header-nav name="Real Estate" />
      <div class="trending__body">
        <div class="back__btn">
          <font-awesome-icon
            @click="$router.go(-1)"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>
        <div class="assets__card mt-2">
          <div class="row">
            <div
              v-for="trending in trendingAssets"
              :key="trending.index"
              class="col-md-4 px-1 mb-2"
            >
              <div class="general__trends">
                <div
                  @click="
                    $router.push(`/user_dashboard/asset_detail/${trending.id}`)
                  "
                  class="trending__content"
                  :style="{ backgroundImage: 'url(' + trending.image + ')' }"
                >
                  <!-- <div class="sale_notification">
                    <span
                      v-if="trending.token_quantity_subscribed.length > 0"
                      style="font-size: 12px; color: red"
                      class="text-dark"
                      >{{ trending.token_quantity_subscribed }} tokens
                      Sold</span
                    >
                    <span v-else style="font-size: 12px" class="text-dark"
                      >{{ trending.token_quantity_subscribed }}% tokens
                      Sold</span
                    >
                  </div> -->
                  <div class="tq_notification">
                    <span
                      v-if="trending.token_quantity_subscribed.length > 0"
                      style="font-size: 12px"
                      class="text-dark"
                      >{{ trending.token_quantity_subscribed }} tokens
                      Sold</span
                    >
                    <span v-else style="font-size: 12px" class="text-dark"
                      >{{ trending.token_quantity_subscribed }}% tokens
                      Sold</span
                    >
                  </div>
                  <div
                    style="
                      display: grid;
                      place-items: center;
                      align-items: center;
                      padding-top: 70px;
                    "
                  >
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
                  <p>
                    Land in {{ trending.layout_name }} -
                    <span v-if="trending.size">{{ trending.size }}SQM</span>
                    <span v-else>650SQM</span>
                  </p>
                  <div class="d-flex justify-content-between">
                    <h6>{{ trending.location }}</h6>
                    <ion-icon
                      @click="bookmark(trending)"
                      style="color: #00e8fe"
                      name="bookmark-outline"
                    />
                    <!-- <ion-icon
                      v-else
                      @click="removeBookmark(trending)"
                      style="color: #00e8fe"
                      name="bookmark"
                    /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center" v-if="trendingAssets.length == 0">
            <img style="width: 50px" src="/assets.webp" alt="asset image" />
            <p>No trending assets</p>
          </div>
        </div>
      </div>
      <footer-section />
    </div>
  </div>
</template>

<script>
import public_assets from "~/components/public_assets.vue";
import Trending from "~/components/trends/trending.vue";
export default {
  components: { public_assets, Trending },
  data() {
    return {
      user: {},
      trendingAssets: {},
      show_bookmark: true,
      hide_bookmark: false,
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
    async bookmark(trending) {
      try {
        let response = await this.$axios.post(`/bookmarkAsset/${trending.id}`);
        this.getTrendingAssets();
        console.log(response);
        this.$toast.success("Asset has been added to your bookmarks", {
          timeout: 5000,
        });
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
    async getTrendingAssets() {
      try {
        let response = await this.$axios.get("/getTrendingAsset");
        this.trendingAssets = response.data;
        console.log(this.trendingAssets);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  created() {
    // this.makePayment();
    this.getUser();
    this.getTrendingAssets();
  },
};
</script>

<style>
.real__estate {
  background-color: #fff;
  min-height: 100vh;
}
.trending__body {
  padding: 120px 100px;
}
.real__estate .new__content {
  padding: 10px 100px;
}
/* .new__content .text__wrap {
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
} */
.real__estate a {
  color: inherit;
}
.real__estate .estate__wrap {
  padding: 200px 100px 10px 100px;
  background-color: #f8feff;
}
.real__estate .estate__wrap h6 {
  font-weight: 600;
}
.real__estate .fractional__wrap {
  background-image: url("/asset.jpg");
  height: 250px;
  background-size: cover;
  border: 5px solid #00e8fe;
}
.real__estate .full__ownership {
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

@media (max-width: 768px) {
  .real__estate {
    margin-left: 0 !important;
    padding: 0;
  }
  .settings_wrap {
    margin: 10px;
  }
  .trending__body {
    padding: 120px 20px;
  }
}
</style>