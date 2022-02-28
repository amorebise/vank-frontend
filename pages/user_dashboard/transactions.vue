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
                          <th class="text-left th_color">Crypto amount</th>
                          <th class="text-left th_color">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="mt-2">
                          <td>1</td>
                          <td>2022-02-10 10:30:11</td>
                          <td>107,144.40NGN</td>
                          <td>571.30NGN</td>
                          <td>1.87.54USDT</td>
                          <td>
                            <div class="success mt-2 text-center">
                              <p class="text-success py-2">Completed</p>
                            </div>
                          </td>
                        </tr>
                        <tr class="py-2">
                          <td>2</td>
                          <td>2022-02-10 10:30:11</td>
                          <td>920,000.00NGN</td>
                          <td>574.10NGN</td>
                          <td>1.602.50USDT</td>
                          <td>
                            <div class="warning mt-2 text-center">
                              <p class="text-warning py-2">Pending</p>
                            </div>
                          </td>
                        </tr>
                        <tr class="py-2">
                          <td>3</td>
                          <td>2022-02-10 10:30:11</td>
                          <td>200,000.00NGN</td>
                          <td>572.00NGN</td>
                          <td>349.65USDT</td>
                          <td>
                            <div class="success mt-2 text-center">
                              <p class="text-success py-2">Completed</p>
                            </div>
                          </td>
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
                          <th class="text-left th_color">Date</th>
                          <th class="text-left th_color">Token</th>
                          <th class="text-left th_color">Average Price</th>
                          <th class="text-left th_color">Amount</th>
                          <th class="text-left th_color">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="mt-2">
                          <td>03/02/2022</td>
                          <td>XRP</td>
                          <td>0.80USD</td>
                          <td>100</td>
                          <td>80USD</td>
                        </tr>
                        <tr class="py-2">
                          <td>04/02/2022</td>
                          <td>CORN</td>
                          <td>500NGN</td>
                          <td>10</td>
                          <td>5,000NGN</td>
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
    };
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