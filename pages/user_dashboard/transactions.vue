<template>
  <div class="exam_token_wrap w-100">
    <div class="transactions">
      <user-nav name="Transactions" />
      <div class="transactions_wrap mt-3">
        <template>
          <v-tabs class="px-3" v-model="tab" align-with-title>
            <v-tab>Funding Transactions</v-tab>
            <v-tab>Token Transactions</v-tab>
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
                          <th class="text-left th_color">Type/Coin</th>
                          <th class="text-left th_color">Date</th>
                          <th class="text-left th_color">Fiat amount</th>
                          <th class="text-left th_color">Price</th>
                          <!-- <th class="text-left th_color">Crypto amount</th> -->
                          <!-- <th class="text-left th_color">Status</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="newUser" class="mt-2">
                          <td>{{ newUser.coin1 }}</td>
                          <td>{{ newUser.date_created }}</td>
                          <td>{{ newUser.amount_after_charges }}</td>
                          <td>{{ newUser.coin1_price }}</td>
                          <!-- <td>{{ newUser.coin1_amount }}</td> -->
                          <!-- <td>
                            <div class="success mt-2 text-center">
                              <p class="text-success py-2">Completed</p>
                            </div>
                          </td> -->
                        </tr>

                        <tr v-if="newUser" class="py-2">
                          <td>{{ newUser.coin2 }}</td>
                          <td>{{ newUser.date_created }}</td>
                          <td>{{ newUser.amount_after_charges }}</td>
                          <td>{{ newUser.coin2_price }}</td>
                          <!-- <td>{{ newUser.coin1_amount }}</td> -->
                          <!-- <td>
                            <div class="warning mt-2 text-center">
                              <p class="text-warning py-2">Pending</p>
                            </div>
                          </td> -->
                        </tr>

                        <tr v-if="newUser" class="py-2">
                          <td>{{ newUser.coin3 }}</td>
                          <td>{{ newUser.date_created }}</td>
                          <td>{{ newUser.amount_after_charges }}</td>
                          <td>{{ newUser.coin3_price }}</td>
                          <!-- <td>{{ newUser.coin1_amount }}</td> -->
                          <!-- <td>
                            <div class="warning mt-2 text-center">
                              <p class="text-warning py-2">Pending</p>
                            </div>
                          </td> -->
                        </tr>

                        <tr v-else>
                          <td>
                            <p>You have no assets</p>
                          </td>
                        </tr>

                        <!-- <tr class="py-2">
                          <td>{{ newUser.coin3 }}</td>
                          <td>{{ newUser.date_created }}</td>
                          <td>{{ newUser.amount_after_charges }}</td>
                          <td>{{ newUser.coin3_price }}</td>
                          <td>{{ newUser.coin3_amount }}</td>
                          <td>
                            <div class="success mt-2 text-center">
                              <p class="text-success py-2">Completed</p>
                            </div>
                          </td>
                        </tr> -->
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
                          <th class="text-left th_color">Date</th>
                          <th class="text-left th_color">Token</th>
                          <!-- <th class="text-left th_color">Average Price</th> -->
                          <th class="text-left th_color">Amount</th>
                          <th class="text-left th_color">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="newUser" class="mt-2">
                          <td>{{ newUser.date_created }}</td>
                          <td>{{ newUser.coin1 }}</td>
                          <!-- <td>{{ newUser.coin1_avg_purchase_price }}</td> -->
                          <td>{{ newUser.coin1_amount }}</td>
                          <td>{{ newUser.amount_after_charges }}</td>
                        </tr>

                        <tr v-if="newUser" class="py-2">
                          <td>{{ newUser.date_created }}</td>
                          <td>{{ newUser.coin2 }}</td>
                          <!-- <td>{{ newUser.coin2_avg_purchase_price }}</td> -->
                          <td>{{ newUser.coin2_amount }}</td>
                          <td>{{ newUser.amount_after_charges }}</td>
                        </tr>

                        <tr v-if="newUser" class="py-2">
                          <td>{{ newUser.date_created }}</td>
                          <td>{{ newUser.coin3 }}</td>
                          <!-- <td>{{ newUser.coin3_avg_purchase_price }}</td> -->
                          <td>{{ newUser.coin3_amount }}</td>
                          <td>{{ newUser.amount_after_charges }}</td>
                        </tr>
                        <tr v-else>
                          <td>You have no asset</td>
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

<style >
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none !important;
}
.transactions {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.transactions_wrap .v-slide-group {
  flex-wrap: wrap;
  /* padding: 10px; */
}
.transactions_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active),
.transactions_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-icon,
.transactions_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-btn,
.transactions_wrap .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}
.transactions_wrap .v-tab {
  text-transform: unset;
}
.transactions_data {
  background-color: #f8f7ff;
  border-radius: 10px;
  padding: 20px;
}
.transactions_data .v-data-table--fixed-header > .v-data-table__wrapper {
  background-color: #f8f7ff;
}
.transactions_data .v-data-table > .v-data-table__wrapper > table {
  background-color: #fff;
}
.transactions_data .th_color {
  background-color: #f8f7ff !important;
  border-bottom: none !important;
}
.transactions_data
  .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border: none;
  box-shadow: none;
}
/* .transactions_data
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
  border-bottom: none;
} */
tr {
  margin-top: 100px !important;
}
.warning {
  background: rgba(231, 171, 54, 0.1);
  border-radius: 4px;
  font-weight: 600;
}
.warning p {
  padding-top: 10px;
}
.success {
  background: rgba(30, 151, 57, 0.1);
  border-radius: 4px;
  font-weight: 600;
}
.success p {
  padding-top: 10px;
}
@media (max-width: 768px) {
  .transactions {
    margin-left: 0 !important;
    padding: 0;
  }
}
</style>