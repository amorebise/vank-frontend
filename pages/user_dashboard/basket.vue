<template>
  <div class="basket w-100">
    <user-nav name="Basket" />
    <div class="basket_data">
      <v-simple-table fixed-header height="400px">
        <template v-slot:default>
          <thead>
            <tr class="">
              <!-- <th class="text-left th_color">SN</th> -->
              <th class="text-left th_color">Token</th>
              <th class="text-left th_color">Current Price</th>
              <th class="text-left th_color">Average Purchase Price</th>
              <th class="text-left th_color">Quantity</th>
              <!-- <th class="text-left th_color">Current Value</th>
              <th class="text-left th_color">Historic Profit/Loss</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-if="newUser" class="mt-2">
              <!-- <td>1</td> -->
              <td>{{ newUser.coin1 }}</td>
              <td>{{ newUser.coin1_price }}</td>
              <td>{{ newUser.coin1_avg_purchase_price }}</td>
              <td>{{ newUser.coin1_quantity_available }}</td>
              <!-- <td>625USD</td>
              <td class="text-danger">-9%</td> -->
            </tr>

            <tr v-if="newUser" class="mt-2">
              <td>{{ newUser.coin2 }}</td>
              <td>{{ newUser.coin2_price }}</td>
              <td>{{ newUser.coin2_avg_purchase_price }}</td>
              <td>{{ newUser.coin2_quantity_available }}</td>
              <!-- <td>625USD</td>
              <td class="text-danger">-9%</td> -->
            </tr>

            <tr v-if="newUser" class="mt-2">
              <td>{{ newUser.coin3 }}</td>
              <td>{{ newUser.coin3_price }}</td>
              <td>{{ newUser.coin3_avg_purchase_price }}</td>
              <td>{{ newUser.coin3_quantity_available }}</td>
              <!-- <td>625USD</td>
              <td class="text-danger">-9%</td> -->
            </tr>
            <tr v-else class="mt-2">
              <td>You have no asset</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",

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

<style >
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none !important;
}
.basket {
  margin-left: 230px;
  background-color: #fff !important;
  min-height: 100vh;
  padding: 0 50px;
}
.basket_data {
  background-color: #f8f7ff;
  border-radius: 10px;
  padding: 20px;
}
.basket_data .v-data-table--fixed-header > .v-data-table__wrapper {
  background-color: #f8f7ff;
}
.basket_data .v-data-table > .v-data-table__wrapper > table {
  background-color: #fff;
}
.basket_data .th_color {
  background-color: #f8f7ff !important;
  border-bottom: none !important;
}
.basket_data
  .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border: none;
  box-shadow: none;
}
/* .basket_data
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
/* .basket_data .v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
  margin-top: 100px;
} */

@media (max-width: 768px) {
  .basket {
    margin-left: 0 !important;
    padding: 0;
  }
}
</style>