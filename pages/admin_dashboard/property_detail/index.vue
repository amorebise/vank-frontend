<template>
  <div class="pay_bills_wrap w-100">
    <div class="users">
      <admin-nav name="Property" />
      <div class="users_wrap">
        <div class="search__bar__wrap">
          <div class="form-group py-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search property by token"
            />
          </div>
        </div>

        <div class="transactions_data">
          <div class="body__wrap">
            <v-simple-table fixed-header height="100%">
              <template v-slot:default>
                <thead>
                  <tr
                    style="border-bottom: thin solid rgba(0, 0, 0, 0.12)"
                    class=""
                  >
                    <th class="text-left th_color">SN</th>
                    <th class="text-left th_color">Property Name</th>
                    <th class="text-left th_color">Location</th>
                    <!-- <th class="text-left th_color">Size</th> -->
                    <th class="text-left th_color">No of tokens</th>
                    <th class="text-left th_color">Subscribed</th>
                    <th class="text-left th_color">Available</th>
                    <th class="text-left th_color">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="asset in available_assets"
                    :key="asset.index"
                    style="border-bottom: thin solid rgba(0, 0, 0, 0.12)"
                    class="mt-2"
                  >
                    <td>{{ asset.id }}</td>
                    <td
                      role="button"
                      @click="
                        $router.push(
                          `/admin_dashboard/property_detail/${asset.id}`
                        )
                      "
                    >
                      {{ asset.token_name }}
                    </td>
                    <td>{{ asset.location }}</td>
                    <td>{{ asset.total_token_quantity }}</td>
                    <td>{{ asset.token_quantity_subscribed }}</td>
                    <td>{{ asset.token_quantity_available }}</td>
                    <!-- <td>50,000</td> -->
                    <td class="pt-3">
                      <p
                        v-if="asset.status === 'Trending'"
                        @click="removeFromTrending(asset)"
                        role="button"
                        style="color: #00e8fe; font-size: 12px"
                      >
                        Remove from trending
                      </p>
                      <p
                        v-else
                        @click="markAsTrending(asset)"
                        role="button"
                        style="color: #00e8fe; font-size: 12px"
                      >
                        Make trending
                      </p>
                    </td>
                  </tr>
                  <tr v-if="available_assets.length == 0">
                    <td class="text-center">
                      You have not added any assets.
                      <!-- <img class="emoji" src="/sad.png" alt="sad emoji" /> -->
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <div class="d-flex justify-content-center mt-5" style="gap: 10px">
              <div
                class="view__assets__wrap text-center"
                style="margin-top: -30px"
              >
                <!-- <nuxt-link to="/admin_dashboard/all_assets">
                  <button class="assets__link">
                    <span class="px-3">View all </span>
                  </button>
                </nuxt-link> -->
              </div>
              <div
                class="view__assets__wrap text-center"
                style="margin-top: -30px"
              >
                <nuxt-link to="/admin_dashboard/add_asset">
                  <button class="assets__link">
                    <span class="px-3">Add new Property</span>
                  </button>
                </nuxt-link>
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
  components: { creator_sidebar },
  data() {
    return {
      tab: null,
      available_assets: {},
      loading: false,
      subscriber_modal: false,
      market_maker_modal: false,
    };
  },
  methods: {
    async showAvailableAssets() {
      try {
        let response = await this.$axios.get("/showAvailableAsset/");
        this.available_assets = response.data;
        console.log(this.available_assets);
      } catch (error) {
        console.log(error.response);
      }
    },
    async markAsTrending(asset) {
      try {
        let response = await this.$axios.post(
          `/admin/markAsTrending/${asset.id}`
        );
        this.showAvailableAssets();
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },
    async removeFromTrending(asset) {
      try {
        let response = await this.$axios.post(
          `/admin/removeFromTrending/${asset.id}`
        );
        this.showAvailableAssets();
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },
    viewDetail() {
      this.$router.push(`/admin_dashboard/property_detail/id`);
    },
  },
  created() {
    this.showAvailableAssets();
  },
};
</script>

<style>
.body__wrap {
  border-radius: 10px;
  border: 1px solid #3030304b;
  padding: 10px;
}
.users {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.users_wrap {
  margin-top: 50px;
}
.users_wrap .emoji {
  width: 40px;
  margin-top: 5px;
}
.users_wrap .transactions_data td {
  cursor: pointer;
}
.users_wrap .v-slide-group {
  flex-wrap: wrap;
}
.users_wrap .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.users_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-icon,
.users_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-btn,
.users_wrap .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}
.users_wrap .v-tab {
  text-transform: unset;
}
.users_wrap .change__password__form {
  background-color: rgba(0, 0, 0, 0.445);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
}

.password__header h6 {
  font-weight: 700;
}
.users_wrap .password__modal {
  width: 40%;
  margin: 100px auto;
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 10px;
}
.users_wrap .change__password__form p {
  font-size: 15px;
  font-weight: 400;
}
.users_wrap .change__password__form .v-btn {
  background-color: #00e8fe !important;
  font-size: 14px;
  color: #000;
  padding: 5px 10px !important;
  box-shadow: none !important;
  text-transform: none;
  width: 100%;
}
.users_wrap .change__password__form .cancel_button {
  border: 1px solid #00e8fe;
  color: #00e8fe;
  background-color: #fff !important;
  font-size: 14px;
  padding: 5px 10px !important;
  box-shadow: none !important;
  text-transform: none;
}
.users_wrap .cursor {
  cursor: pointer;
}
.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slideInDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .users {
    margin-left: 0 !important;
    padding: 0;
  }
  .users_wrap {
    margin-top: 50px;
    padding: 10px;
  }
  .users_wrap .password__modal {
    width: 100%;
  }
  .users_wrap .change__password__form p {
    font-size: 13px;
    font-weight: 400;
  }
  .font__size {
    font-size: 13px;
  }
}
</style>