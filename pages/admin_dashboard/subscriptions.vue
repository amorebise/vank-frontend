<template>
  <div class="exam_token_wrap w-100">
    <div class="cash__sub__wrap">
      <admin-nav name="Subscriptions" />
      <div class="sub__body">
        <div class="transactions_wrap mt-5">
          <div class="shift">
            <div class="search__bar__wrap">
              <div class="form-group py-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search request by name"
                />
              </div>
            </div>
          </div>

          <div class="transactions_data">
            <div class="body__wrap">
              <v-simple-table fixed-header height="200px">
                <template v-slot:default>
                  <thead>
                    <tr class="">
                      <th class="text-left th_color">SN</th>
                      <th class="text-left th_color">Name</th>
                      <th class="text-left th_color">Phone Number</th>
                      <th class="text-left th_color">Token Name</th>
                      <th class="text-left th_color">Amount(N)</th>
                      <th class="text-left th_color">Quantity</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      v-for="subscription in subscriptions"
                      :key="subscription.index"
                      style="border-bottom: thin solid rgba(0, 0, 0, 0.12)"
                      class="mt-2"
                    >
                      <td>2</td>
                      <td>Biola George</td>
                      <td>08123456789</td>
                      <td>{{ subscription.token_name }}</td>
                      <td>{{ subscription.amount }}</td>
                      <td>{{ subscription.quantity }}</td>
                      <!-- <td class="">
                      <div class="d-flex" style="gap: 10px; font-size: 12px">
                        <button class="text-success">Approve</button>
                        <button class="text-danger">Disapprove</button>
                        <button class="text-warning">Pend</button>
                      </div>
                    </td> -->
                    </tr>
                    <div class="text-center" v-if="subscriptions.length === 0">
                      <p>No Active Subscriptions.</p>
                    </div>
                  </tbody>
                </template>
              </v-simple-table>
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
      subscriptions: {},
      success__modal: false,
    };
  },

  methods: {
    async getSubscriptions() {
      try {
        let response = await this.$axios.get("/admin/getAllSubscription");
        this.subscriptions = response.data;
        console.log(this.subscriptions);
      } catch (error) {
        console.log(error);
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getSubscriptions();
  },
};
</script>

<style >
.cash__sub__wrap {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.cash__sub__wrap .v-slide-group {
  flex-wrap: wrap;
  /* padding: 10px; */
}
.cash__sub__wrap .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.cash__sub__wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-icon,
.cash__sub__wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-btn,
.cash__sub__wrap .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}
.cash__sub__wrap .v-tab {
  text-transform: unset;
}
.cash__sub__wrap .transactions_data {
  background-color: #fff;
}
/* .cash__sub__wrap
  .transactions_data
  .v-data-table--fixed-header
  > .v-data-table__wrapper {
  background-color: #f8f7ff;
} */
.cash__sub__wrap
  .transactions_data
  .v-data-table
  > .v-data-table__wrapper
  > table {
  background-color: #fff;
}
.cash__sub__wrap .transactions_data .th_color {
  background-color: #f8f7ff !important;
  border-bottom: none !important;
}
.cash__sub__wrap .choose__txn__wrap {
  border: 1px solid #00e8fe;
  border-radius: 20px;
  margin: 40px auto;
  width: 50%;
  height: 400px;
  padding: 10px 40px;
}
.cash__sub__wrap .choose__txn__wrap .form-control {
  font-size: 13px;
  box-shadow: none;
}
.cash__sub__wrap .choose__txn__wrap .form-control:focus {
  border-color: #30303044;
}
.cash__sub__wrap .pop__up {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #30303044;
  display: grid;
  place-items: center;
}
.cash__sub__wrap .pop__up__content {
  background-color: #fff;
  padding: 15px 30px;
  border-radius: 10px;
}
.cash__sub__wrap .pop__up__content button {
  padding: 3px 10px;
  background-color: #00e8fe;
  border-radius: 5px;
}
.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
.cash__sub__wrap .asset__content {
  background-image: url("/asset.jpg");
  background-size: cover;
  border-radius: 10px;
  color: #001214;
  position: relative;
  height: 300px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
  border: 5px solid #00e8fe;
  /* gap: 10px; */
}
.cash__sub__wrap .asset__content p {
  opacity: 0;
}
.cash__sub__wrap .asset__content h4 {
  opacity: 0;
  color: #00e8fe;
}
.cash__sub__wrap .asset__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.cash__sub__wrap .asset__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.cash__sub__wrap .asset__content:hover h4 {
  opacity: 1;
  transition: ease-in-out 0.7s;
}

/* .transactions_data
  .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border: none;
  box-shadow: none;
} */
/* tr {
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
} */
@media (max-width: 768px) {
  .cash__sub__wrap {
    margin-left: 0 !important;
    padding: 0;
  }
  .cash__sub__wrap .shift {
    padding-left: 10px;
  }
  .sub__body {
    padding: 15px;
  }
}
</style>