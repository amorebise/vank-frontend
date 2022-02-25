<template>
  <div class="basket w-100">
    <user-nav name="Basket" />
    <div class="basket_data">
      <v-simple-table fixed-header height="400px">
        <template v-slot:default>
          <thead>
            <tr class="">
              <th class="text-left th_color">SN</th>
              <th class="text-left th_color">Token</th>
              <th class="text-left th_color">Current Price</th>
              <th class="text-left th_color">Average Purchase Price</th>
              <th class="text-left th_color">Quantity</th>
              <th class="text-left th_color">Current Value</th>
              <th class="text-left th_color">Historic Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            <tr class="mt-2">
              <td>1</td>
              <td>HIGH</td>
              <td>6.25USD</td>
              <td>8.92</td>
              <td>100</td>
              <td>625USD</td>
              <td class="text-danger">-9%</td>
            </tr>
            <tr class="py-2">
              <td>2</td>
              <td>DOT</td>
              <td>22.41USD</td>
              <td>18.40</td>
              <td>50</td>
              <td>1,120USD</td>
              <td class="text-success">+21%</td>
            </tr>
            <tr class="py-2 bg-success">
              <td>3</td>
              <td>CORN</td>
              <td>500NGN</td>
              <td>350</td>
              <td>2000</td>
              <td>1,000,000NGN</td>
              <td class="text-success">+42%</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
.basket_data
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
}
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