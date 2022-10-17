<template>
  <div class="pay_bills_wrap w-100">
    <div class="users">
      <user-nav class="py-4 available__assets__nav" name="Transactions" />
      <div class="users_wrap">
        <div class="search__bar__wrap">
          <div class="form-group py-3">
            <input type="text" class="form-control" placeholder="Search Users" />
          </div>
        </div>


        <template>
          <v-tabs class="px-3" v-model="tab" align-with-title>
            <v-tab name="stake">Fund Requests</v-tab>
            <!-- <v-tab name="borrow">Subscriptions</v-tab> -->
            <v-tab name="borrow">Sales</v-tab>
            <v-tab name="borrow">Withdrawals</v-tab>
          </v-tabs>
        </template>

        <v-tabs-items v-model="tab" class="tab_bg">
          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="transactions_data">
                  <div class="body__wrap">
                    <v-simple-table fixed-header height="100%">
                      <template v-slot:default>
                        <thead>
                          <tr style="border-bottom: thin solid rgba(0, 0, 0, 0.12)" class="">
                            <th class="text-left th_color">Ref ID</th>
                            <th class="text-left th_color">Date</th>
                            <!-- <th class="text-left th_color">Name</th> -->
                            <!-- <th class="text-left th_color">Phone Number</th> -->
                            <th class="text-left th_color">Status</th>
                            <th class="text-left th_color">Amount(N)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="txns in txn_history.top_ups" :key="txns.index" class="mt-2"
                            style="border-bottom: thin solid rgba(0, 0, 0, 0.12)">
                            <td>{{ txns.reference_id }}</td>
                            <td>
                              {{ txns.date }}
                            </td>
                            <!-- <td>{{ txns.name }}</td> -->
                            <!-- <td>{{ txns.phone_number }}</td> -->
                            <td>
                              <span v-if="txns.status === 'Paid'" class="text-success">{{ txns.status }}</span>
                              <span v-else class="text-warning">{{ txns.status }}</span>
                            </td>
                            <td>{{ txns.amount }}</td>

                          </tr>

                        </tbody>


                      </template>
                    </v-simple-table>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <!-- <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="transactions_data">
                  <div class="body__wrap">
                    <v-simple-table fixed-header height="100%">
                      <template v-slot:default>
                        <thead>
                          <tr style="border-bottom: thin solid rgba(0, 0, 0, 0.12)" class="">
                            <th class="text-left th_color">Ref ID</th>
                            <th class="text-left th_color">Subscription Date</th>
                            <th class="text-left th_color">Name</th>
                            <th class="text-left th_color">Layout Name</th>
                            <th class="text-left th_color">Token Name</th>
                            <th class="text-left th_color">Quantity</th>
                            <th class="text-left th_color">Amount(N)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="mt-2" v-for="txns in txn_history.subscriptions" :key="txns.index"
                            style="border-bottom: thin solid rgba(0, 0, 0, 0.12)">
                            <td>
                              {{ txns.reference_id }}
                            </td>
                            <td>
                              {{ txns.subscription_date }}
                            </td>
                            <td>
                              {{ txns.name }}
                            </td>
                            <td>
                              {{ txns.layout_name }}
                            </td>
                            <td>
                              {{ txns.token_name }}
                            </td>
                            <td>
                              {{ txns.quantity }}
                            </td>
                            <td>
                              {{ txns.amount }}
                            </td>

                          </tr>

                        </tbody>
                      </template>
                    </v-simple-table>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item> -->

          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="transactions_data">
                  <div class="body__wrap">
                    <v-simple-table fixed-header height="100%">
                      <template v-slot:default>
                        <thead>
                          <tr style="border-bottom: thin solid rgba(0, 0, 0, 0.12)" class="">
                            <th class="text-left th_color">Ref ID</th>
                            <th class="text-left th_color">Subscription Date</th>
                            <th class="text-left th_color">Name</th>
                            <th class="text-left th_color">Layout Name</th>
                            <th class="text-left th_color">Token Name</th>
                            <th class="text-left th_color">Quantity</th>
                            <th class="text-left th_color">Amount(N)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="mt-2" v-for="txns in txn_history.sales" :key="txns.index"
                            style="border-bottom: thin solid rgba(0, 0, 0, 0.12)">
                            <td>
                              {{ txns.reference_id }}
                            </td>
                            <td>
                              {{ txns.date }}
                            </td>
                            <td>
                              {{ txns.name }}
                            </td>
                            <td>
                              {{ txns.phone_number }}
                            </td>
                            <td>
                              {{ txns.status }}
                            </td>

                            <td>
                              {{ txns.amount }}
                            </td>

                          </tr>

                          <tr v-if="txn_history.sales.length === 0">
                            <td>No Sales History</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="transactions_data">
                  <div class="body__wrap">
                    <v-simple-table fixed-header height="100%">
                      <template v-slot:default>
                        <thead>
                          <tr style="border-bottom: thin solid rgba(0, 0, 0, 0.12)" class="">
                            <th class="text-left th_color">Ref ID</th>
                            <th class="text-left th_color">Date</th>
                            <th class="text-left th_color">Name</th>
                            <th class="text-left th_color">Status</th>
                            <th class="text-left th_color">Phone Number</th>
                            <th class="text-left th_color">Amount(N)</th>
                            <!-- <th class="text-left th_color">Action</th> -->
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="mt-2" v-for="txns in txn_history.withdrawals" :key="txns.index"
                            style="border-bottom: thin solid rgba(0, 0, 0, 0.12)">
                            <td>
                              {{ txns.reference_id }}
                            </td>
                            <td>
                              {{ txns.date }}
                            </td>
                            <td>
                              {{ txns.name }}
                            </td>
                            <td>
                              {{ txns.phone_number }}
                            </td>
                            <td>
                              {{ txns.status }}
                            </td>

                            <td>
                              {{ txns.amount }}
                            </td>

                          </tr>

                          <tr v-if="txn_history.withdrawals.length === 0">
                            <td>No Withdrawal History</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

      </div>
    </div>
    <div>
      <div class="pop__up"></div>
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
      txn_history: {},
      subscriptionHistory: {},
      withdrawalHistory: {},
      loading: false,
    };
  },
  methods: {
    async getTransactionHistory() {
      try {
        let response = await this.$axios.get("/getHisory");
        this.txn_history = response.data;
        console.log(this.txn_history);
      } catch (error) {
        console.log(response.error);
      }
    },
    async getSubscriptionSum() {
      try {
        let response = await this.$axios.post('/totalUserSubscriptionAmount')
        this.subscriptionHistory = response.data
        console.log(this.subscriptionHistory);
      } catch (error) {
        console.log(error.response);
      }
    },
    async getWithdrawalSum() {
      try {
        let response = await this.$axios.post('/totalUserWithdrawalAmount')
        this.withdrawalHistory = response.data
        console.log(this.withdrawalHistory);
      } catch (error) {
        console.log(error.response);
      }
    },
    // viewDetail(txn_history) {
    //   this.$router.push(`/admin_dashboard/users/${txn_history.id}`);
    //   console.log(txn_history.id);
    // },
  },
  created() {
    this.getTransactionHistory();
    this.getSubscriptionSum();
    this.getWithdrawalSum();
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

.users_wrap .emoji {
  width: 40px;
  margin-top: 5px;
}

.show__pop__up {
  background-color: rgba(0, 0, 0, 0.265);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  display: grid;
  place-items: center;
  /* padding: 40px; */
}

.show__pop__box {
  margin: 40px auto;
  background-color: #fff;
  width: 30%;
  padding: 10px;
  border-radius: 5px;
}

.users_wrap .search__bar__wrap .form-control {
  background-image: url("/search.png");
  background-position-x: 5px;
  background-position-y: 7px;
  box-shadow: none;
  height: 35px !important;
  width: 30%;
  border-radius: 5px;
  padding: 5px 35px;
  font-size: 14px;
  color: #3030305f;
}

.txn__data .search__bar__wrap .form-control:focus {
  border-color: #000;
}

.txn__data .search__bar__wrap ::placeholder {
  padding-left: 5px;
  color: #3030305f;
}

.users_wrap .transactions_data td {
  cursor: pointer;
}

/* .users_wrap .v-slide-group {
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
  } */
.users_wrap .change__password__form {
  background-color: rgba(0, 0, 0, 0.445);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
}

.password__header h6 {
  font-weight: 700;
}

.users_wrap .password__modal {
  width: 40%;
  margin: 100px auto;
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 10px;
}

.users_wrap .change__password__form p {
  font-size: 15px;
  font-weight: 400;
}

.users_wrap .change__password__form .v-btn {
  background-color: #00e8fe !important;
  font-size: 14px;
  color: #000;
  padding: 5px 10px !important;
  box-shadow: none !important;
  text-transform: none;
  width: 100%;
}

.users_wrap .change__password__form .cancel_button {
  border: 1px solid #00e8fe;
  color: #00e8fe;
  background-color: #fff !important;
  font-size: 14px;
  padding: 5px 10px !important;
  box-shadow: none !important;
  text-transform: none;
}

.users_wrap .cursor {
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

.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,
.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),
.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,
.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),
.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th {
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
}

@media (max-width: 768px) {
  .users {
    margin-left: 0 !important;
    padding: 0;
  }

  .users_wrap .password__modal {
    width: 100%;
  }

  .users_wrap .change__password__form p {
    font-size: 13px;
    font-weight: 400;
  }

  .font__size {
    font-size: 13px;
  }
}
</style>