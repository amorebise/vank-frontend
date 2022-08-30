<template>
  <div class="pay_bills_wrap w-100">
    <div class="users">
      <admin-nav name="Sale Reqs" />
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

        <div class="transactions_data">
          <div class="body__wrap">
            <v-simple-table fixed-header height="200px">
              <template v-slot:default>
                <thead>
                  <tr class="">
                    <!-- <th class="text-left th_color">SN</th>
                    <th class="text-left th_color">Date</th> -->
                    <th class="text-left th_color">Name</th>
                    <th class="text-left th_color">Token</th>
                    <th class="text-left th_color">Quantity</th>
                    <th class="text-left th_color">Amount(N)</th>
                    <th class="text-left th_color">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="saleRequest in saleRequests"
                    :key="saleRequest.index"
                    style="border-bottom: thin solid rgba(0, 0, 0, 0.12)"
                    class="mt-2"
                  >
                    <!-- <td>1</td>
                    <td>22.10.2022 10:29</td> -->
                    <td>{{ saleRequest.name }}</td>
                    <td>{{ saleRequest.token_name }}</td>
                    <td>{{ saleRequest.quantity }}</td>
                    <td>{{ saleRequest.token_value }}</td>
                    <td class="pt-1">
                      <button
                        @click="approveSaleRequest(saleRequest)"
                        class="text-success"
                      >
                        Confirm
                      </button>
                    </td>
                  </tr>
                  <div class="text-center" v-if="saleRequests.length === 0">
                    <p>You currently do not have any sell requests.</p>
                  </div>
                </tbody>
              </template>
            </v-simple-table>
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
      loading: false,
      saleRequests: {},
    };
  },
  methods: {
    async getSaleRequests() {
      try {
        const response = await this.$axios.get("/admin/getSaleRequest");
        this.saleRequests = response.data;
        console.log(this.saleRequests);
      } catch (error) {
        console.log(error);
      }
    },
    async approveSaleRequest(saleRequest) {
      try {
        let token_id = saleRequest.id;
        const response = await this.$axios.post(
          `/admin/approveSaleRequest/${token_id}`
        );
        this.$toast.success("Token Sale Confirmed", { timeout: 5000 });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getSaleRequests();
  },
};
</script>

<style>
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