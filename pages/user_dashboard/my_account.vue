<template>
  <div class="dashboard w-100">
    <div class="dashboard_content mb-3">
      <user-nav class="dashboard__nav" name="Dashboard" />
      <div class="new__content">
        <div v-if="newUser" class="d-flex align-items-center px-1 mb-2">
          <h5 class="user_font">
            Welcome, <span class="user_name">{{ newUser.name }}</span>
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
              <p role="button">Your Assets</p>
            </div>
            <div class="view__wrap">
              <nuxt-link to="/user_dashboard/assets">
                <p role="button">View all</p>
              </nuxt-link>
            </div>
          </div>
          <!-- <div class="overflow"> -->
        </div>
        <div class="assets__card mt-2">
          <div class="row">
            <div class="col-md-4 px-1 mb-2">
              <nuxt-link :to="`/user_dashboard/property_detail/${id}`">
                <div class="asset__content">
                  <div>
                    <p>Pyanko 1</p>
                    <p>Abuja</p>
                    <p>Token 001</p>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="col-md-4 px-1 mb-2">
              <nuxt-link :to="`/user_dashboard/property_detail/${id}`">
                <div class="asset__content2">
                  <div>
                    <p>Epe</p>
                    <p>Lagos</p>
                    <p>Token 002</p>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="col-md-4 px-1 mb-2">
              <nuxt-link :to="`/user_dashboard/property_detail/${id}`">
                <div class="asset__content3">
                  <div>
                    <p>Enugu 2</p>
                    <p>Enugu</p>
                    <p>Token 003</p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
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
          <!-- <div class="overflow"> -->
        </div>
        <div class="assets__card mt-2">
          <div class="row">
            <div class="col-md-4 px-1 mb-2">
              <div class="general__trends">
                <div class="trending__content">
                  <div>
                    <p>Pyanko 1</p>
                    <p>Abuja</p>
                    <p>Token 001</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 px-1 mb-2">
              <div class="general__trends">
                <div class="trending__content">
                  <div>
                    <p>Epe</p>
                    <p>Lagos</p>
                    <p>Token 002</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 px-1 mb-2">
              <div class="general__trends">
                <div class="trending__content">
                  <div>
                    <p>Enugu 2</p>
                    <p>Enugu</p>
                    <p>Token 003</p>
                  </div>
                </div>
                <div class="land__wrap">
                  <p>Land in Abuja</p>
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
export default {
  // middleware: "auth",

  data() {
    return {
      user: {},
      newUser: {},
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
        let res = await this.$axios.get("/getAsset", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });

        this.newUser = res.data[0];

        console.log(this.newUser);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style scoped>
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
  background-image: url("/asset.jpg");
  background-size: cover;
  /* border-radius: 10px; */
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
.general__trends {
}
.asset__content2 {
  background-image: url("/asset2.jpg");
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
/* .asset__content img {
  width: 100%;
  height: 200px;
  border-radius: 20px;
} */

@media (max-width: 768px) {
  .dashboard_content {
    margin: 0 !important;
    padding: 0;
  }
  .dashboard_content .new__content {
    padding: 7px;
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
    padding-left: 0;
    padding-right: 15px !important;
  }
}
</style>