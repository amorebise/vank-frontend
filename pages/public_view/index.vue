<template>
  <div class="w-100">
    <div class="real__estate">
      <header-nav name="Real Estate" />
      <div class="new__content">
        <div v-if="user" class="d-flex align-items-center px-1 mb-2">
          <h5 class="">
            Welcome, <span class="user_name">{{ user.first_name }}</span>
          </h5>
          <!-- <div class="ml-1">
          <nuxt-img format="webp" quality="90" fit="cover" src="/emoji.png" />
        </div> -->
        </div>
        <div v-else class="d-flex align-items-center px-3 mb-2">
          <h5>Welcome</h5>
          <!-- <div class="ml-1">
          <nuxt-img format="webp" quality="90" fit="cover" src="/emoji.png" />
        </div> -->
        </div>

        <div class="estate__content">
          <div class="view__all__wrap d-flex justify-content-between pt-4 px-1">
            <div class="assets__wrap pt-5">
              <button>Assets</button>
            </div>
            <div class="view__wrap pt-5">
              <nuxt-link to="/public_view/available_assets/">
                <button>View all</button>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="assets__card mt-2">
          <public-assets />
        </div>

        <div class="estate__content mt-2">
          <div class="view__all__wrap d-flex justify-content-between pt-4 px-1">
            <div class="assets__wrap">
              <button>Trending Assets</button>
            </div>
            <div class="view__wrap">
              <nuxt-link to="/public_view/trending_assets/">
                <button>View all</button>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="assets__card mt-2 mx-2">
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
                    <span v-if="trending.size">{{ trending.size }}</span>
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
        <!-- <div class="register_button_wrap text-center mt-3 py-4">
          <nuxt-link
            to="/user_dashboard/fractional_ownership"
            class="assets__link"
          >
            <span class="px-3">Buy Token</span>
          </nuxt-link>
        </div> -->
      </div>
      <!-- <div class="estate__wrap">
        <div class="row">
          <div class="col-md-6">
            <nuxt-link to="/user_dashboard/fractional_ownership">
              <div>
                <h6>Fractional Ownership</h6>
                <div class="fractional__wrap"></div>
                <p class="full__text px-2 py-1">
                  Group Ownership of Real Estate
                </p>
                <p class="full__text px-2 py-1">
                  Join other people to co-own <br />
                  property, benefit from price <br />
                  appreciation, and use as collateral for <br />
                  loan
                </p>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-6">
            <div>
              <h6>Full Ownership</h6>
              <div class="full__ownership">
                <div class="coming__soon">
                  <div class="button__wrap">
                    <button class="mx-1 my-1 p-1">Coming Soon</button>
                  </div>
                </div>
              </div>
              <p class="full__text px-2 py-1">
                Fully own real estate listed in this category
              </p>
            </div>
          </div>
        </div>
        <div class="register_button_wrap text-center mt-3 py-4">
          <nuxt-link
            to="/user_dashboard/fractional_ownership"
            class="assets__link"
          >
            <span class="px-3">View Fractional Property</span>
          </nuxt-link>
        </div>
      </div> -->
      <footer-section />
    </div>
  </div>
</template>

<script>
import public_assets from "~/components/public_assets.vue";
export default {
  components: { public_assets },
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
.real__estate .new__content {
  padding: 10px 100px;
}
.text__wrap {
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
}
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
  .real__estate .new__content {
    padding: 10px !important;
  }
}
</style>