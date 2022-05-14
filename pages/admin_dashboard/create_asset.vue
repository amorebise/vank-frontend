<template>
  <div class="pay_bills_wrap w-100">
    <div class="users">
      <admin-nav name="Users" />
      <div class="back__button">
        <span @click="back()" class="back__link">back to dashboard</span>
      </div>
      <div class="create__assets__wrap">
        <template>
          <v-tabs v-model="tab" align-with-title>
            <v-tab>Subscription Requests</v-tab>
            <!-- <v-tab>Subscribers</v-tab>
            <v-tab>Market Makers</v-tab> -->
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
                          <th class="text-left th_color">Name</th>
                          <th class="text-left th_color">Email Address</th>
                          <th class="text-left th_color">Phone Number</th>
                          <th class="text-left th_color">Available USDT</th>
                          <th class="text-left th_color">Amount</th>

                          <th class="text-left th_color">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="mt-2"
                          v-for="subscription in subscriptions"
                          :key="subscription.id"
                        >
                          <td>{{ subscription.name }}</td>

                          <td>{{ subscription.email }}</td>
                          <td>{{ subscription.phone_number }}</td>
                          <td class="text-center">
                            {{ subscription.usdt_amount_available }}
                          </td>
                          <td>{{ subscription.amount }}</td>
                          <td>
                            <nuxt-link
                              :to="'/admin_dashboard/' + subscription.id"
                              class="buy__button"
                              >Create Asset</nuxt-link
                            >
                          </td>
                        </tr>
                        <tr
                          class="mt-2 d-flex justify-content-center"
                          v-if="subscriptions.length == 0"
                        >
                          <p class="">No Subscription Requests</p>
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
  components: { creator_sidebar },
  data() {
    return {
      tab: null,
      subscriptions: {},
    };
  },
  methods: {
    async getSubscriptionRequests() {
      try {
        const response = await this.$axios.get("/admin/getSubscriptionRequest");
        this.subscriptions = response.data.data;
        console.log(this.subscriptions);
      } catch (error) {
        console.log(error.response);
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.getSubscriptionRequests();
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
.buy__button {
  color: #00e8fe;
}
.back__link {
  font-size: 12px;
  color: blue;
  cursor: pointer;
  font-style: italic;
}
.create__assets__wrap {
  margin-top: 50px;
}
.create__assets__wrap .v-slide-group {
  flex-wrap: wrap;
}
.create__assets__wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active),
.create__assets__wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-icon,
.create__assets__wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-btn,
.create__assets__wrap .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}
.create__assets__wrap .v-tab {
  text-transform: unset;
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > td:not(.v-data-table__mobile-row),
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > th:not(.v-data-table__mobile-row) {
  font-size: 13px;
}

@media (max-width: 768px) {
  .users {
    margin-left: 0 !important;
    padding: 0;
  }
}
</style>