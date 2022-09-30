<template>
  <div class="pay_bills_wrap w-100">
    <div class="users">
      <admin-nav name="Transactions" />
      <div class="users_wrap">
        <div class="search__bar__wrap">
          <div class="form-group py-3">
            <input type="text" class="form-control" placeholder="Search Users" />
          </div>

          <!-- <div class="sort__wrap">
              <span>sort by</span>
            </div> -->
        </div>

        <template>
          <v-tabs class="px-3" v-model="tab" align-with-title>
            <v-tab name="stake">Fund Requests</v-tab>
            <v-tab name="borrow">Subscriptions</v-tab>
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
                    <v-simple-table fixed-header height="200px">
                      <template v-slot:default>
                        <thead>
                          <tr class="">
                            <th class="text-left th_color">Ref ID</th>
                            <th class="text-left th_color">Date</th>
                            <th class="text-left th_color">Name</th>
                            <th class="text-left th_color">Phone Number</th>
                            <th class="text-left th_color">Status</th>

                            <th class="text-left th_color">Amount(N)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style="
                              border-bottom: thin solid rgba(0, 0, 0, 0.12);
                            " class="mt-2" v-for="txn in txns.top_ups" :key="txn.index">
                            <td>
                              {{ txn.reference_id }}
                            </td>
                            <td>
                              {{ txn.date }}
                            </td>
                            <td>
                              {{ txn.name }}
                            </td>
                            <td>
                              {{ txn.phone_number }}
                            </td>
                            <td class="text-success">
                              {{ txn.status }}
                            </td>

                            <td>
                              {{ txn.amount }}
                            </td>

                          </tr>

                          <!-- <tr style="
                              border-bottom: thin solid rgba(0, 0, 0, 0.12);
                            " class="mt-2" v-if="txns.top_ups.length === 0">
                            <td>
                              No funding history
                            </td>
                          </tr> -->
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
                    <v-simple-table fixed-header height="200px">
                      <template v-slot:default>
                        <thead>
                          <tr class="">
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
                          <tr style="
                              border-bottom: thin solid rgba(0, 0, 0, 0.12);
                            " class="mt-2" v-for="txn in txns.subscriptions" :key="txn.index">
                            <td>
                              {{ txn.reference_id }}
                            </td>
                            <td>
                              {{ txn.subscription_date }}
                            </td>
                            <td>
                              {{ txn.name }}
                            </td>
                            <td>
                              {{ txn.layout_name }}
                            </td>
                            <td>
                              {{ txn.token_name }}
                            </td>
                            <td>
                              {{ txn.quantity }}
                            </td>
                            <td>
                              {{ txn.amount }}
                            </td>
                          </tr>

                          <!-- <tr style="
                              border-bottom: thin solid rgba(0, 0, 0, 0.12);
                            " class="mt-2" v-if="txns.subscriptions.length === 0">
                            <td>
                              No subscription history
                            </td>
                          </tr> -->
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
                    <v-simple-table fixed-header height="200px">
                      <template v-slot:default>
                        <thead>
                          <tr class="">
                            <th class="text-left th_color">Ref ID</th>
                            <th class="text-left th_color">Date</th>
                            <th class="text-left th_color">Name</th>
                            <th class="text-left th_color">Status</th>
                            <th class="text-left th_color">Phone Number</th>
                            <th class="text-left th_color">Amount(N)</th>
                            <th class="text-left th_color">Action</th>
                            <!-- <th class="text-left th_color">Comments</th> -->
                          </tr>
                        </thead>
                        <tbody>
                          <tr style="
                              border-bottom: thin solid rgba(0, 0, 0, 0.12);
                            " class="mt-2" v-for="txn in txns.sales" :key="txn.index">
                            <td>
                              {{ txn.reference_id }}
                            </td>
                            <td>
                              {{ txn.date }}
                            </td>
                            <td>
                              {{ txn.name }}
                            </td>
                            <td>
                              {{ txn.phone_number }}
                            </td>
                            <td>
                              {{ txn.status }}
                            </td>

                            <td>
                              {{ txn.amount }}
                            </td>
                          </tr>

                          <tr style="
                              border-bottom: thin solid rgba(0, 0, 0, 0.12);
                            " class="mt-2" v-if="txns.sales.length === 0">
                            <td>
                              No sale history
                            </td>
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
                    <v-simple-table fixed-header height="200px">
                      <template v-slot:default>
                        <thead>
                          <tr class="">
                            <th class="text-left th_color">Ref ID</th>
                            <th class="text-left th_color">Date</th>
                            <th class="text-left th_color">Name</th>
                            <th class="text-left th_color">Status</th>
                            <th class="text-left th_color">Phone Number</th>
                            <th class="text-left th_color">Amount(N)</th>
                            <th class="text-left th_color">Action</th>
                            <!-- <th class="text-left th_color">Comments</th> -->
                          </tr>
                        </thead>
                        <tbody>
                          <tr style="
                              border-bottom: thin solid rgba(0, 0, 0, 0.12);
                            " class="mt-2" v-for="txn in txns.withdrawals" :key="txn.index">
                            <td>
                              {{ txn.reference_id }}
                            </td>
                            <td>
                              {{ txn.date }}
                            </td>
                            <td>
                              {{ txn.name }}
                            </td>
                            <td>
                              {{ txn.phone_number }}
                            </td>
                            <td>
                              {{ txn.status }}
                            </td>

                            <td>
                              {{ txn.amount }}
                            </td>
                          </tr>

                          <tr style="
                              border-bottom: thin solid rgba(0, 0, 0, 0.12);
                            " class="mt-2" v-if="txns.withdrawals.length === 0">
                            <td>
                              No withdrawal history
                            </td>
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


        <!-- <div class="transactions_data">
          <div class="body__wrap">
            <v-simple-table fixed-header height="100%">
              <template v-slot:default>
                <thead>
                  <tr style="border-bottom: thin solid rgba(0, 0, 0, 0.12)" class="">
                    <th class="text-left th_color">SN</th>
                    <th class="text-left th_color">Name</th>
                    <th class="text-left th_color">Transaction Type</th>
                    <th class="text-left th_color">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.index" class="mt-2"
                    style="border-bottom: thin solid rgba(0, 0, 0, 0.12)" @click="viewDetail(user)">
                    <td>{{ user.id }}</td>
                    <td>{{ user.first_name }} {{ user.last_name }}</td>
                    <td>subscription</td>
                    <td>50000</td>
                  </tr>
                  <tr v-if="users.length == 0">
                    <td>
                      <p class="text-center">
                        You have no user.
                        
                      </p>
                    </td>
                  </tr>
                 
                </tbody>
              </template>
            </v-simple-table>

            <div class="view__assets__wrap mt-5 text-center" style="margin-top: -30px">
              <nuxt-link to="/admin_dashboard/users">
                <button class="assets__link">
                  <span class="px-3">View database</span>
                </button>
              </nuxt-link>
            </div>
          </div>
        </div> -->
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
      txns: {},
      id: this.$route.params.id,
      loading: false,
    };
  },
  methods: {
    async getUserTranasactions() {
      try {
        let response = await this.$axios.get(`/admin/getSingleUser/${this.id}`);
        this.txns = response.data.user;
        console.log(this.txns);
      } catch (error) {
        console.log(response.error);
      }
    },
  },
  created() {
    this.getUserTranasactions();
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