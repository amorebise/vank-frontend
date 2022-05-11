<template>
  <div class="pay_bills_wrap w-100">
    <div class="users">
      <admin-nav name="Requests" />
      <div class="users_wrap">
        <div class="search__bar__wrap">
          <div class="form-group py-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search buyer"
            />
          </div>
        </div>
        <template>
          <v-tabs v-model="tab" align-with-title>
            <v-tab>Applications</v-tab>
            <v-tab>Balance Update</v-tab>
            <!-- <v-tab>Market Makers</v-tab> -->
          </v-tabs>
        </template>
        <v-tabs-items v-model="tab" class="tab_bg">
          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="transactions_data">
                  <v-simple-table fixed-header height="400px">
                    <template v-slot:default>
                      <thead>
                        <tr class="">
                          <th class="text-left th_color">First Name</th>
                          <th class="text-left th_color">Email Address</th>
                          <th class="text-left th_color">Phone Number</th>
                          <th class="text-left th_color">Agreement</th>
                          <!-- <th class="text-left th_color">Amin Approval</th> -->
                          <th class="text-left th_color">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="mt-2"
                          v-for="market_maker in market_makers"
                          :key="market_maker.id"
                        >
                          <td>{{ market_maker.first_name }}</td>
                          <td>{{ market_maker.email }}</td>
                          <td>{{ market_maker.phone_number }}</td>
                          <td>{{ market_maker.agreement }}</td>
                          <!-- <td>{{ market_maker.admin_approval }}</td> -->
                          <td>
                            <v-btn
                              @click="approveMarketMaker(market_maker)"
                              class="confirm__button px-3 py-1"
                            >
                              Approve
                            </v-btn>
                          </td>
                        </tr>
                        <tr v-if="market_makers.length == 0">
                          <td><p>No Pending Applications</p></td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="transactions_data">
                  <v-simple-table fixed-header height="400px">
                    <template v-slot:default>
                      <thead>
                        <tr class="">
                          <th class="text-left th_color">Email</th>
                          <th class="text-left th_color">Wallet Address</th>
                          <th class="text-left th_color">Balance Update</th>
                          <th class="text-left th_color">Status</th>
                          <!-- <th class="text-left th_color">Amin Approval</th> -->
                          <th class="text-left th_color">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="mt-2"
                          v-for="mm_request in mm_balance_requests"
                          :key="mm_request.id"
                        >
                          <td>{{ mm_request.email }}</td>
                          <td>{{ mm_request.wallet_address }}</td>
                          <td>{{ mm_request.wallet_balance }}</td>
                          <td>{{ mm_request.admin_approval }}</td>
                          <!-- <td>{{ market_maker.admin_approval }}</td> -->
                          <td>
                            <v-btn
                              @click="updateMarketMakerBalance(mm_request)"
                              class="confirm__button px-3 py-1"
                            >
                              Approve
                            </v-btn>
                          </td>
                        </tr>
                        <tr v-if="mm_balance_requests.length == 0">
                          <td><p>No Pending Requests</p></td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
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
      tab: null,
      loading: false,
      market_makers: {},
      mm_balance_requests: {},
    };
  },
  methods: {
    async getMarketMakerApplication() {
      try {
        const response = await this.$axios.get(
          "/admin/getMarketMakerApplication"
        );
        this.market_makers = response.data;
        console.log(this.market_makers);
      } catch (error) {
        console.log(error);
      }
    },
    async approveMarketMaker(market_maker) {
      try {
        let mm_id = market_maker.id;
        const response = await this.$axios.post(
          `/admin/approveMarketMakerApplication/${mm_id}`
        );
        console.log(response);
        this.$toast.success("Market Maker Approved", { timeout: 5000 });
      } catch (error) {
        console.log(error.response);
      }
    },
    async getMarketMakerBalanceUpdateRequest() {
      try {
        const response = await this.$axios.get(
          "/admin/getMarketMakerBalanceUpdateRequest"
        );
        this.mm_balance_requests = response.data;
        console.log(this.mm_balance_requests);
      } catch (error) {
        console.log(error.response);
      }
    },
    async updateMarketMakerBalance(mm_request) {
      try {
        let mm_request_id = mm_request.id;
        const response = await this.$axios.post(
          `/admin/updateMarketMakerBalance/${mm_request_id}`
        );
        console.log(response);
        this.$toast.success("Balance Updated", { timeout: 5000 });
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  mounted() {
    this.getMarketMakerApplication();
    this.getMarketMakerBalanceUpdateRequest();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none !important;
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
/* .settings_wrap .v-slide-group__content {
  background-color: #f4ede4;
}
.settings_wrap .theme--light.v-tabs > .v-tabs-bar,
.settings_wrap .v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  background-color: #f4ede4;
} */
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
.search__bar__wrap .form-control {
  background-image: url("/search.png");
  background-position-x: 5px;
  background-position-y: 7px;
  box-shadow: none;
  height: 35px;
  width: 30%;
  border-radius: 5px;
  padding: 5px 35px;
  font-size: 14px;
  color: #3030305f;
}
.users_wrap .search__bar__wrap .form-control:focus {
  border-color: #30303037;
}
.users_wrap .search__bar__wrap ::placeholder {
  padding-left: 5px;
  color: #3030305f;
}
.confirm__button {
  font-size: 13px !important;
  background-color: #00e8fe !important;
  border-radius: 5px;
  box-shadow: none;
  text-transform: none;
  padding: 0 20px !important;
}

@media (max-width: 768px) {
  .users {
    margin-left: 0 !important;
    padding: 0;
  }
  .users_wrap {
    padding: 10px;
  }
  .search__bar__wrap .form-control {
    width: 70%;
  }
}
</style>