<template>
  <div class="w-100">
    <div class="real__estate_wallet">
      <user-nav class="pr-2 estate__nav py-4" name="Real Estate" />
      <div class="real__wallet">
        <div>
          <font-awesome-icon
            @click="back()"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>
        <div class="estate__wrap px-1 mt-4">
          <h6>My Subscription ...</h6>
          <div class="row">
            <div
              class="col-md-4"
              v-for="property in assets.subscriptions"
              :key="property.index"
              @click="$router.push(`/user_dashboard/my_assets/${property.id}`)"
            >
              <div class="imgage__bg">
                <div
                  class="asset__bg"
                  :style="{ backgroundImage: 'url(' + property.image + ')' }"
                >
                  <div>
                    <div class="opaque_text">
                      <p v-if="property.layout_name">
                        {{ property.layout_name }}
                      </p>
                      <p v-else>Epe</p>
                      <div>
                        <p v-if="property.location">
                          {{ property.location }}
                        </p>
                        <p v-else>Lagos</p>
                      </div>
                      <div>
                        <p v-if="property.token_name">
                          {{ property.token_name }}
                        </p>
                        <p v-else>token 001</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="token__box">
                  <p class="full__text px-2 py-1" v-if="property.token_name">
                    {{ property.token_name }} Token
                  </p>
                  <p class="full__text px-2 py-1" v-else>KARSHI 02 Token</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style="display: grid; place-items: center"
            class="pt-5"
            v-if="assets.subscriptions == 0"
          >
            <img style="width: 50px" src="/assets.webp" alt="asset image" />
            <p>You have not bought any assets yet.</p>
          </div>
          <div
            style="gap: 10px"
            class="
              register_button_wrap
              d-flex
              justify-content-center
              align-items-center
              mt-3
              py-4
            "
          >
            <nuxt-link
              to="/user_dashboard/fractional_ownership"
              class="assets__link"
            >
              <span class="px-3">Go to my Real Estate Wallet</span>
            </nuxt-link>
            <!-- <div v-if="user">
              <nuxt-link
                :to="`/user_dashboard/sell/${id}`"
                class="assets__link"
              >
                <span class="px-3">Sell</span>
              </nuxt-link>
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
  components: { creator_sidebar },
  data() {
    return {
      user: {},
      assets: {},
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
    back() {
      this.$router.go(-1);
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
  },
  created() {
    this.getUser();
    this.getAssets();
  },
};
</script>

<style>
.real__estate_wallet {
  margin-left: 270px;
}
.asset__bg {
  border: 2px solid #00e8fe;
  height: 200px;
  cursor: pointer;
  display: grid;
  place-items: center;
  background-size: cover;
}
.asset__bg p {
  opacity: 0;
  color: #fff;
  line-height: 2px;
  font-size: 13px;
  transition: 1s;
}
.asset__bg:hover {
  background-color: rgba(0, 0, 0, 0.291);
  background-blend-mode: overlay;
  transition: 1s;
}
.asset__bg:hover p {
  opacity: 1;
}
.real__estate_wallet .real__estate {
  background-color: #fff;
  min-height: 100vh;
}
.real__estate_wallet .real__estate a {
  color: inherit;
}
.real__estate_wallet .real__estate .estate__wrap {
  padding: 200px 100px 10px 100px;
  background-color: #f8feff;
}
.real__estate_wallet .real__estate .estate__wrap h6 {
  font-weight: 600;
}
.real__estate_wallet .real__estate .fractional__wrap {
  background-image: url("/asset.jpg");
  height: 250px;
  background-size: cover;
  border: 5px solid #00e8fe;
}
.real__estate_wallet .real__estate .full__ownership {
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
.token__box {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 232, 254, 0.15);
  padding: 10px;
  cursor: pointer;
}
.real__estate_wallet img {
  width: 100%;
}

@media (max-width: 768px) {
  .real__estate {
    margin-left: 0 !important;
    padding: 0;
  }
  .real__estate_wallet {
    margin-left: 0 !important;
  }
  .real__wallet {
    padding: 10px;
    padding-top: 80px;
  }
  .settings_wrap {
    margin: 10px;
  }
  .estate__nav {
    position: fixed;
    background-color: #fff;
    padding: 0 !important;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 232, 254, 0.1) !important;
    z-index: 1000;
  }
}
</style>