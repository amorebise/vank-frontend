<template>
  <div class="dashboard w-100">
    <div class="dashboard_content mb-3">
      <user-nav class="dashboard__nav" name="Dashboard" />
      <div class="new__content">
        <div v-if="user" class="d-flex align-items-center mb-2">
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
            <div class="assets__wrap">
              <p role="button">Available Assets</p>
            </div>
            <div class="view__wrap">
              <nuxt-link to="/user_dashboard/assets">
                <p role="button">View all</p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="assets__card mt-2">
          <available-assets />
        </div>

        <!-- Subscribed Assets -->
        <div class="estate__content">
          <div class="view__all__wrap d-flex justify-content-between pt-4 px-1">
            <div class="assets__wrap">
              <p role="button">Your Assets</p>
            </div>
            <div class="view__wrap">
              <nuxt-link to="/user_dashboard/my_assets">
                <p role="button">View all</p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="assets__card mt-2">
          <Subscribed_assets />
        </div>

        <div class="estate__content mt-2">
          <div class="view__all__wrap d-flex justify-content-between pt-4 px-1">
            <div class="assets__wrap">
              <p role="button">Trending Assets</p>
            </div>
            <div class="view__wrap">
              <nuxt-link to="/user_dashboard/trending_assets">
                <p role="button">View all</p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="trend__wrap">
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
                      $router.push(
                        `/user_dashboard/asset_detail/${trending.id}`
                      )
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
          <div class="register_button_wrap text-center mt-3 py-4">
            <nuxt-link
              to="/user_dashboard/fractional_ownership"
              class="assets__link"
            >
              <span class="px-3">Buy Token</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subscribed_assets from "~/components/subscribed_assets.vue";
export default {
  // middleware: "auth",
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
    // makePayment() {
    //   this.my_id = this.user.id;
    //   localStorage.setItem("myId", JSON.stringify(this.my_id));
    //   console.log(this.my_id);
    //   // this.loading = false;
    //   // this.$router.push("/user_dashboard/payment");
    // },
  },
  mounted() {
    // this.makePayment();
    this.getUser();
    this.getTrendingAssets();
  },
  components: { Subscribed_assets },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Karla&family=Lato&family=Nunito&family=Plus+Jakarta+Sans&family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  text-decoration: none !important;
}
.dashboard_content {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.user_font {
  font-weight: 550;
}
.user_name {
  color: #1d83c5;
}
.dashboard_content .view__all__wrap p {
  color: #001214;
  font-size: 13px;
  /* cursor: pointer; */
}
.tq_notification {
  background-color: #00e8fe;
  border-top-left-radius: 7px;
  padding: 10px;
  width: 35%;
}
.asset__content {
  background-image: url("/asset.jpg");
  background-size: cover;
  border-radius: 10px;
  color: #001214;
  position: relative;
  height: 200px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
  /* gap: 10px; */
}
.trending__content {
  /* background-image: url("/asset.jpg"); */
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: #001214;
  position: relative;
  height: 200px;
  transition: ease-in-out 0.3s;
  color: #fff;
  /* display: grid; */
  /* place-items: center; */
  font-weight: 500;
  font-size: 15px;
  /* gap: 10px; */
}
.dashboard_content .general__trends {
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
}
.asset__content2 {
  /* background-image: url("/asset2.jpg"); */
  background-size: cover;
  border-radius: 10px;
  color: #001214;
  position: relative;
  height: 200px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
  /* gap: 10px; */
}
.asset__content3 {
  background-image: url("/asset3.webp");
  background-size: cover;
  border-radius: 10px;
  color: #001214;
  position: relative;
  height: 200px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
  /* gap: 10px; */
}
.asset__content p,
.asset__content2 p,
.asset__content3 p,
.trending__content p {
  opacity: 0;
}
.asset__content:hover,
.trending__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.asset__content:hover p,
.asset__content2:hover p,
.asset__content3:hover p,
.trending__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.asset__content2:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.asset__content3:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.dashboard_content .text__wrap {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.dashboard_content .text__wrap p {
  font-size: 14px;
  font-weight: 500;
  word-spacing: 1px;
}
.dashboard_content .text__wrap span {
  font-size: 14px;
  font-weight: 600;
}
.dashboard_content .text__wrap h6 {
  font-weight: 600;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .dashboard_content {
    margin: 0 !important;
    padding: 0 !important;
  }
  .dashboard_content .new__content {
    padding: 5px;
  }
  .asset_wrap {
    width: 100%;
    height: 100%;
  }
  .m_top {
    margin-top: 20px;
  }
  .glass_card_wrap {
    background-image: url("/glassy.png");
    min-height: 40vh;
    background-size: 500px;
    color: #fff;
    letter-spacing: 1px;
  }
  .main_card_wrap {
    background-image: url("/main.png");
    min-height: 40vh;
    background-size: 500px;
    color: #fff;
    letter-spacing: 1px;
  }
  .glass_card_wrap .write_up_section h5 {
    font-size: 15px;
  }
  .glass_card_wrap .write_up_section p {
    font-size: 35px;
  }
  .glass_card_wrap .write_up_section span {
    padding-top: 10px;
    font-size: 14px;
  }
  .glass_card_wrap .write_up_section img {
    width: 80%;
  }
  .glass_card_wrap .profit_wrap {
    margin-top: 0 !important;
  }
  .glass_card_wrap .precent_wrap {
    margin-top: 5px;

    padding: 2px 5px;
    width: 20%;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.23);
  }
  .glass_card_wrap .precent_wrap p {
    font-size: 14px;
  }

  .main_card_wrap .write_up_section .v-btn {
    font-size: 15px;
    padding: 5px 10px !important;
  }
  .main_asset_wrap {
    margin-top: 10px;
    padding: 10px !important;
  }
  .assets_wrap h5 {
    font-size: 12px;
  }
  .buttons_wrap .mx-3 {
    margin: 3px !important;
  }
  .buttons_wrap .withdrawal_button {
    font-size: 10px;
    padding: 7px 20px !important;
  }
  .buttons_wrap .buy_button {
    font-size: 10px;
    padding: 7px 20px !important;
  }
  .general_coin_wrap {
    margin-top: 10px !important;
  }
  .general_coin_wrap h5 {
    font-size: 15px;
  }
  .first_card_wrap,
  .second_card_wrap,
  .third_card_wrap {
    height: 150px;
    background-size: cover;
    background-position: center;
  }
  .dashboard__wrap .dashboard__nav {
    padding-left: 0 !important;
    padding-right: 15px !important;
  }
  .trend__wrap {
    padding: 15px;
  }
}
</style>