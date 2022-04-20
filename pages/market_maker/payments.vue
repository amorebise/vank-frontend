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
                      <v-tab>All transactions</v-tab>
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
                                    <th class="text-left th_color">
                                      Crypto amount
                                    </th>
                                    <th class="text-left th_color">Action</th>
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
                                      <!-- <p class="text-warning py-2">
                                        {{ sub.user_confirmation }}
                                      </p> -->
                                      <v-btn
                                        @click="confirmRequests(sub)"
                                        :loading="loading"
                                        class="confirm__button px-2 py-1"
                                      >
                                        Confirm
                                      </v-btn>
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

                                    <th class="text-left th_color">
                                      Status(User)
                                    </th>
                                    <th class="text-left th_color">
                                      Status(MM)
                                    </th>
                                    <th class="text-left th_color">
                                      Status(Admin)
                                    </th>
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
    async confirmRequests(sub) {
      try {
        this.loading = true;
        let user_id = sub.id;
        const response = await this.$axios.post(
          `/confirmUserPayment/${user_id}`
        );
        this.$toast.success("Subscription Confirmed", { timeout: 5000 });
        console.log(response);
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },
  mounted() {
    this.getSubscribers();
    this.confirmRequests();
  },
};
</script>

<style scoped>
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

@media (max-width: 768px) {
  .fund__wallet__wrap {
    margin: 0 !important;
    padding: 0;
  }
}
</style>