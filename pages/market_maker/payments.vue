<template>
  <div class="fund__wallet w-100">
    <div class="fund__wallet__wrap">
      <mm-nav name="Fund Wallet" />
      <div class="fund__wallet__content">
        <div class="txn__header py-3">
          <h5>Transaction History</h5>
        </div>
        <div class="txn__data px-3 py-2">
          <div class="search__bar__wrap">
            <div class="form-group py-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search buyer"
              />
            </div>
          </div>
          <div class="txn__table">
            <div class="txn__table">
              <div class="admin__transactions">
                <div class="admin__transactions_wrap mt-3">
                  <template>
                    <v-tabs class="px-3" v-model="tab" align-with-title>
                      <!-- <v-tab>All transactions</v-tab> -->
                      <v-tab>Pending</v-tab>
                      <v-tab>Completed</v-tab>
                    </v-tabs>
                  </template>
                  <v-tabs-items v-model="tab" class="tab_bg">
                    <v-tab-item>
                      <v-card flat>
                        <v-card-text class="">
                          <div class="admin__transactions_data">
                            <v-simple-table fixed-header height="400px">
                              <template v-slot:default>
                                <thead>
                                  <tr class="">
                                    <th class="text-left th_color">Name</th>
                                    <th class="text-left th_color">Date</th>
                                    <th class="text-left th_color">
                                      Fiat amount
                                    </th>
                                    <!-- <th class="text-left th_color">
                                      USDT Rate
                                    </th> -->

                                    <!-- <th class="text-left th_color">Action</th> -->
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    class="mt-2"
                                    v-for="sub in subscriptions"
                                    :key="sub.id"
                                    @click="getSingleAssignedSubscriber(sub)"
                                  >
                                    <td>{{ sub.name }}</td>
                                    <td>{{ sub.subscription_date }}</td>
                                    <td>{{ sub.amount }}NGN</td>
                                    <!-- <td>
                                      <input
                                        type="number"
                                        class="form-control"
                                        placeholder="Input USDT Rate"
                                        v-model="usdt_data.usdt_rate"
                                      />
                                    </td> -->
                                    <!-- <td>
                                      <v-btn
                                        @click="confirmRequests(sub)"
                                        class="confirm__button px-2 py-1"
                                      >
                                        Confirm
                                      </v-btn>
                                    </td> -->
                                  </tr>
                                  <tr v-if="subscriptions.length == 0">
                                    <td>
                                      <p>No Transactions</p>
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
                          <div class="admin__transactions_data">
                            <v-simple-table fixed-header height="400px">
                              <template v-slot:default>
                                <thead>
                                  <tr class="">
                                    <th class="text-left th_color">Name</th>
                                    <th class="text-left th_color">Date</th>
                                    <th class="text-left th_color">
                                      Fiat amount
                                    </th>
                                    <th class="text-left th_color">
                                      Crypto amount
                                    </th>

                                    <th class="text-left th_color">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    class="mt-2"
                                    v-for="sub in subscriptions"
                                    :key="sub.id"
                                  >
                                    <td>{{ sub.name }}</td>
                                    <td>{{ sub.subscription_date }}</td>
                                    <td>{{ sub.amount }}NGN</td>
                                    <td>{{ sub.usdt }}</td>
                                    <td>
                                      <p class="text-warning py-2">
                                        {{ sub.user_confirmation }}
                                      </p>
                                    </td>
                                  </tr>
                                  <tr v-if="subscriptions.length == 0">
                                    <td>
                                      <p>No Pending Transactions</p>
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
                          <div class="admin__transactions_data">
                            <v-simple-table fixed-header height="400px">
                              <template v-slot:default>
                                <thead>
                                  <tr class="">
                                    <th class="text-left th_color">Name</th>
                                    <th class="text-left th_color">Date</th>
                                    <th class="text-left th_color">
                                      Fiat amount
                                    </th>
                                    <th class="text-left th_color">
                                      Crypto amount
                                    </th>

                                    <th class="text-left th_color">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    class="mt-2"
                                    v-for="sub in subscriptions"
                                    :key="sub.id"
                                  >
                                    <td>{{ sub.name }}</td>
                                    <td>{{ sub.subscription_date }}</td>
                                    <td>{{ sub.amount }}</td>
                                    <td>{{ sub.btc }}</td>
                                    <td>
                                      <div class="success mt-2 text-center">
                                        <p
                                          id="confirmation"
                                          class="text-success bg-success py-2"
                                        >
                                          confirm
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr v-if="subscriptions.length == 0">
                                    <td>
                                      <p>No Transactions</p>
                                    </td>
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
          </div>

          <!-- Single User -->
          <div class="change__password__form" v-show="subscriber_modal">
            <div class="password__modal slideInDown">
              <div class="info__wrap">
                <h6 class="font-weight-bold text-center">
                  PERSONAL INFORMATION
                </h6>
                <div class="info__content mt-4">
                  <div class="d-flex justify-content-between">
                    <h6 class="font-weight-bold font__size">Name:</h6>
                    <p>{{ single_subscriber.name }}</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h6 class="font-weight-bold font__size">
                      Subscription Date:
                    </h6>
                    <p>{{ single_subscriber.subscription_date }}</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h6 class="font-weight-bold font__size">Amount:</h6>
                    <p>{{ single_subscriber.amount }}</p>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Input USDT Rate"
                  v-model="usdt_data.usdt_rate"
                />
                <div class="mx-2">
                  <v-btn
                    @click="confirmRequests(single_subscriber)"
                    class="confirm__button px-2 py-1"
                  >
                    Confirm
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      tab: null,
      subscriberRequest: {},
      subscriptions: {},
      single_subscriber: {},
      subscriber_modal: false,
      usdt_data: {
        usdt_rate: "",
      },
    };
  },
  methods: {
    async getSubscribers() {
      try {
        const response = await this.$axios.get("/getAssignedSubscriber");
        this.subscriptions = response.data;
        console.log(this.subscriptions);
      } catch (error) {
        console.log(error);
      }
    },
    async confirmRequests(single_subscriber) {
      try {
        let user_id = single_subscriber.id;
        const response = await this.$axios.post(
          `/confirmUserPayment/${user_id}`,
          this.usdt_data
        );
        this.subscriber_modal = false;
        this.$toast.success("Subscription Confirmed", { timeout: 5000 });
        console.log(response);
        console.log(this.usdt_data);
      } catch (error) {
        console.log(error);
      }
    },
    async getSingleAssignedSubscriber(sub) {
      try {
        let new_id = sub.id;
        const response = await this.$axios.get(
          `/getSingleAssignedSubscriber/${new_id}`
        );

        this.subscriber_modal = true;
        this.single_subscriber = response.data;
        console.log(this.single_subscriber);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  mounted() {
    this.getSubscribers();
    this.confirmRequests();
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
.fund__wallet__wrap {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.fund__wallet__wrap .form-control {
  box-shadow: none;
  width: 60%;
}
.fund__wallet__wrap .form-control:focus {
  border: 1px solid #3030302b;
}
.fund__wallet__wrap .search__bar__wrap .form-control {
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
.fund__wallet__wrap .search__bar__wrap .form-control:focus {
  border-color: #30303037;
}
.fund__wallet__wrap .search__bar__wrap ::placeholder {
  padding-left: 5px;
  color: #3030305f;
}
.fund__wallet__wrap .txn__data {
  border: 1px solid rgba(29, 131, 197, 0.13);
  box-sizing: border-box;
  border-radius: 8px;
  min-height: 100vh;
}
.fund__wallet__wrap .txn__header h5 {
  font-size: 15px;
}
.confirm__button {
  font-size: 13px !important;
  background-color: #00e8fe !important;
  border-radius: 5px;
  box-shadow: none;
  text-transform: none;
  padding: 0 20px !important;
}
.fund__wallet__wrap .change__password__form {
  background-color: rgba(0, 0, 0, 0.445);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.password__header h6 {
  font-weight: 700;
}
.fund__wallet__wrap .password__modal {
  width: 40%;
  margin: 100px auto;
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 10px;
}
.fund__wallet__wrap .change__password__form p {
  font-size: 15px;
  font-weight: 400;
}
.fund__wallet__wrap .change__password__form .v-btn {
  background-color: #00e8fe !important;
  font-size: 14px;
  color: #000;
  padding: 5px 10px !important;
  box-shadow: none !important;
  text-transform: none;
  width: 100%;
}
.fund__wallet__wrap .change__password__form .cancel_button {
  border: 1px solid #00e8fe;
  color: #00e8fe;
  background-color: #fff !important;
  font-size: 14px;
  padding: 5px 10px !important;
  box-shadow: none !important;
  text-transform: none;
}
.fund__wallet__wrap .cursor {
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
  .fund__wallet__wrap {
    margin: 0 !important;
    padding: 0;
  }
  .fund__wallet__wrap .password__modal {
    width: 100%;
  }
  .fund__wallet__wrap .change__password__form p {
    font-size: 13px;
    font-weight: 400;
  }
  .font__size {
    font-size: 13px;
  }
}
</style>