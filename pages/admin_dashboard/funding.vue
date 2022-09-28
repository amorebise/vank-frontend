<template>
  <div class="exam_token_wrap w-100">
    <div class="cash__sub__wrap">
      <admin-nav name="Fundings" />
      <!-- <div>
        <font-awesome-icon
          @click="back()"
          role="button"
          class="fa-1x text-dark pl-1"
          :icon="['fas', 'arrow-left']"
        />
      </div> -->
      <div class="transactions_wrap mt-5">
        <div class="shift">
          <div class="search__bar__wrap">
            <div class="form-group py-3">
              <input type="text" class="form-control funding__bar" placeholder="Search request by name" />
            </div>
          </div>
        </div>
        <template>
          <v-tabs class="px-3" v-model="tab" align-with-title>
            <v-tab name="stake">Active</v-tab>
            <v-tab name="borrow">Pending</v-tab>
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
                            " class="mt-2" v-for="funding in fundings" :key="funding.index">
                            <td v-if="funding.admin_status === 'confirmed'">
                              {{ funding.reference_id }}
                            </td>
                            <td v-if="funding.admin_status === 'confirmed'">
                              {{ funding.date }}
                            </td>
                            <td v-if="funding.admin_status === 'confirmed'">
                              {{ funding.name }}
                            </td>
                            <td v-if="funding.admin_status === 'confirmed'">
                              {{ funding.phone_number }}
                            </td>
                            <td v-if="funding.admin_status === 'confirmed'" class="text-success">
                              {{ funding.status }}
                            </td>

                            <td v-if="funding.admin_status === 'confirmed'">
                              {{ funding.amount }}
                            </td>
                            <!-- <td class="text-center" v-else>
                              You currently do not have any Funding requests.
                            </td> -->
                            <!-- <td class="pt-1">
                              <div
                                class="d-flex"
                                style="gap: 10px; font-size: 12px"
                              >
                                <button style="color: green" class="">
                                  Approve
                                </button>
                                <button class="text-danger">Disapprove</button>
                                <button class="text-warning">Pend</button>
                              </div>
                            </td> -->
                          </tr>
                        </tbody>
                        <!-- <tbody>
                          <tr>
                            <td class="text-center" v-else>
                              You currently do not have any Funding requests.
                            </td>
                          </tr>
                        </tbody> -->
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
                            " class="mt-2" v-for="funding in fundings" :key="funding.index">
                            <td v-if="funding.admin_status === 'pending'">
                              {{ funding.reference_id }}
                            </td>
                            <td v-if="funding.admin_status === 'pending'">
                              {{ funding.date }}
                            </td>
                            <td v-if="funding.admin_status === 'pending'">
                              {{ funding.name }}
                            </td>
                            <td v-if="funding.admin_status === 'pending'">
                              {{ funding.phone_number }}
                            </td>
                            <td v-if="funding.admin_status === 'pending'">
                              {{ funding.status }}
                            </td>

                            <td v-if="funding.admin_status === 'pending'">
                              {{ funding.amount }}
                            </td>
                            <td v-if="funding.admin_status === 'pending'" class="pt-1">
                              <div class="d-flex" style="gap: 10px; font-size: 12px">
                                <button @click="
                                  fund_wallet_modal = !fund_wallet_modal
                                " style="color: green" class="">
                                  Approve
                                </button>
                              </div>
                            </td>

                            <!-- <td class="text-center" v-else>
                              You currently do not have any pending requests.
                            </td> -->
                            <!-- <td @click="fund_wallet_modal = !fund_wallet_modal">
                              <button style="color: #00e8fe; font-size: 12px">
                                Add Comment
                              </button>
                            </td> -->
                          </tr>
                          <!-- <div class="text-center" v-if="fundings.length === 0">
                            <p>
                              You currently do not have any Funding requests.
                            </p>
                          </div> -->
                        </tbody>
                      </template>
                    </v-simple-table>

                    <div>
                      <div v-for="funding in fundings" :key="funding.index" v-show="fund_wallet_modal" class="pop__up">
                        <div class="pop__up__content zoomIn">
                          <div class="text-right">
                            <p role="button" @click="fund_wallet_modal = !fund_wallet_modal" style="font-size: 20px">
                              &times;
                            </p>
                          </div>
                          <div class="text-center">
                            <form action="">
                              <div class="">
                                <div class="form-group mx-2 mt-2">
                                  <label style="font-size: 12px" for="" class="text-left">Enter Comment for User</label>

                                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"
                                    v-model="wallet.admin_comment">
                                  </textarea>
                                </div>
                              </div>

                              <div class="form-group mx-2 mt-2">
                                <label style="font-size: 12px; text-align: left" for="" class="text-left">What is your
                                  transaction amount?</label>
                                <input style="font-size: 12px" type="number" class="form-control"
                                  placeholder="Enter Amount" v-model="wallet.amount" />
                              </div>
                              <div class="
                                  register_button_wrap
                                  text-center
                                  mt-3
                                  py-4
                                ">
                                <span role="button" @click="approveTopupRequest(funding)" class="assets__link">
                                  <span class="px-3">Fund Wallet</span>
                                </span>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
      success__modal: false,
      fundings: {},
      wallet: {
        amount: "",
        admin_comment: "",
      },
      fund_wallet_modal: false,
    };
  },

  methods: {
    async getTopRequest() {
      try {
        let response = await this.$axios.get("/admin/getTopUpRequest");
        this.fundings = response.data;
        console.log(this.fundings);
      } catch (error) {
        console.log(error.response);
      }
    },
    async approveTopupRequest(funding) {
      try {
        let response = await this.$axios.post(
          `/admin/updateUserBalance/${funding.id}`,
          this.wallet
        );
        this.getTopRequest();
        this.$toast.success("fund request approved", { timeout: 5000 });
        this.fund_wallet_modal = !this.fund_wallet_modal;
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getTopRequest();
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

.cash__sub__wrap .theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),
.cash__sub__wrap .theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon,
.cash__sub__wrap .theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,
.cash__sub__wrap .theme--light.v-tabs>.v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}

.funding__bar {
  width: 25%;
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
.cash__sub__wrap .transactions_data .v-data-table>.v-data-table__wrapper>table {
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
  width: 35%;
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

  .cash__sub__wrap .pop__up__content {
    width: 90%;
  }
}
</style>