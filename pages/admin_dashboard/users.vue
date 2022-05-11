<template>
  <div class="pay_bills_wrap w-100">
    <div class="users">
      <admin-nav name="Users" />
      <div class="users_wrap">
        <div class="search__bar__wrap">
          <div class="form-group py-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search Users"
            />
          </div>
        </div>
        <template>
          <v-tabs v-model="tab" align-with-title>
            <!-- <v-tab>All Users</v-tab> -->
            <v-tab>Subscribers</v-tab>
            <v-tab>Market Makers</v-tab>
          </v-tabs>
        </template>
        <v-tabs-items v-model="tab" class="tab_bg">
          <!-- <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="transactions_data">
                  <v-simple-table fixed-header height="400px">
                    <template v-slot:default>
                      <thead>
                        <tr class="">
                          <th class="text-left th_color">First Name</th>
                          <th class="text-left th_color">Last Name</th>
                          <th class="text-left th_color">Email Address</th>
                          <th class="text-left th_color">Phone Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          @click="viewMore(user)"
                          class="mt-2 cursor"
                          v-for="user in users"
                          :key="user.id"
                        >
                          <td>{{ user.first_name }}</td>
                          <td>{{ user.last_name }}</td>
                          <td>{{ user.email }}</td>
                          <td>{{ user.phone_number }}</td>
                          
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item> -->

          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="transactions_data">
                  <v-simple-table fixed-header height="400px">
                    <template v-slot:default>
                      <thead>
                        <tr class="">
                          <th class="text-left th_color">First Name</th>
                          <th class="text-left th_color">Last Name</th>
                          <th class="text-left th_color">Email Address</th>
                          <th class="text-left th_color">Phone Number</th>
                          <!-- <th class="text-left th_color">House Address</th>
                          <th class="text-left th_color">Country</th>
                          <th class="text-left th_color">State</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="mt-2"
                          v-for="subscriber in subscribers"
                          :key="subscriber.id"
                          @click="viewSubscriber(subscriber)"
                        >
                          <td>{{ subscriber.first_name }}</td>
                          <td>{{ subscriber.last_name }}</td>
                          <td>{{ subscriber.email }}</td>
                          <td>{{ subscriber.phone_number }}</td>
                          <!-- <td>{{ subscriber.address }}</td>
                          <td>{{ subscriber.country }}</td>
                          <td>{{ subscriber.state }}</td> -->
                        </tr>
                        <tr v-if="subscribers.length == 0">
                          <td>
                            <p>
                              You do not have any Subscribers.
                              <img
                                class="emoji"
                                src="/sad.png"
                                alt="sad emoji"
                              />
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
                <div class="transactions_data">
                  <v-simple-table fixed-header height="400px">
                    <template v-slot:default>
                      <thead>
                        <tr class="">
                          <th class="text-left th_color">First Name</th>
                          <th class="text-left th_color">Last Name</th>
                          <th class="text-left th_color">Email Address</th>
                          <th class="text-left th_color">Phone Number</th>
                          <!-- <th class="text-left th_color">House Address</th>
                          <th class="text-left th_color">Country</th>
                          <th class="text-left th_color">State</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="mt-2"
                          v-for="market_maker in market_makers"
                          :key="market_maker.id"
                        >
                          <td>{{ market_maker.first_name }}</td>
                          <td>{{ market_maker.last_name }}</td>
                          <td>{{ market_maker.email }}</td>
                          <td>{{ market_maker.phone_number }}</td>
                          <!-- <td>{{ market_maker.address }}</td>
                          <td>{{ market_maker.country }}</td>
                          <td>{{ market_maker.state }}</td> -->
                        </tr>
                        <tr v-if="market_makers.length == 0">
                          <td>
                            <p>
                              You do not have any Market Makers.
                              <img
                                class="emoji"
                                src="/sad.png"
                                alt="sad emoji"
                              />
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
        </v-tabs-items>

        <div class="change__password__form" v-show="subscriber_modal">
          <div class="password__modal slideInDown">
            <div class="info__wrap">
              <h6 class="font-weight-bold text-center">PERSONAL INFORMATION</h6>
              <div class="info__content mt-4">
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">First Name:</h6>
                  <p>{{ single_subscriber.first_name }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">Last Name:</h6>
                  <p>{{ single_subscriber.last_name }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">Email:</h6>
                  <p>{{ single_subscriber.email }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">Phone Number:</h6>
                  <p>{{ single_subscriber.phone_number }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">Address:</h6>
                  <p>{{ single_subscriber.address }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">State:</h6>
                  <p>{{ single_subscriber.state }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">Country:</h6>
                  <p>{{ single_subscriber.country }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">Role:</h6>
                  <p>{{ single_subscriber.role }}</p>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="mx-2">
                <v-btn
                  class="cancel_button"
                  @click="subscriber_modal = !subscriber_modal"
                  >Close</v-btn
                >
              </div>

              <div class="mx-2">
                <v-btn
                  class="cancel_button"
                  :loading="loading"
                  @click="makeNewMarketMaker(single_subscriber)"
                  >Make Market Maker</v-btn
                >
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="change__password__form" v-show="market_maker_modal">
          <div class="password__modal slideInDown">
            <div class="info__wrap">
              <h6 class="font-weight-bold text-center">PERSONAL INFORMATION</h6>
              <div class="info__content mt-4">
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">First Name:</h6>
                  <p>{{ single_market_maker.first_name }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">Last Name:</h6>
                  <p>{{ single_market_maker.last_name }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">Email:</h6>
                  <p>{{ single_market_maker.email }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">Phone Number:</h6>
                  <p>{{ single_market_maker.phone_number }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">Address:</h6>
                  <p>{{ single_market_maker.address }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">State:</h6>
                  <p>{{ single_market_maker.state }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">Country:</h6>
                  <p>{{ single_market_maker.country }}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="font-weight-bold font__size">Role:</h6>
                  <p>{{ single_market_maker.role }}</p>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="mx-2">
                <v-btn
                  class="cancel_button"
                  @click="market_maker_modal = !market_maker_modal"
                  >Close</v-btn
                >
              </div>
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
      users: {},
      loading: false,
      single_subscriber: {},
      single_market_maker: {},
      subscribers: {},
      market_makers: {},
      subscriber_modal: false,
      market_maker_modal: false,
    };
  },
  methods: {
    async getUsers() {
      try {
        const response = await this.$axios.get("/admin/getAllUser");
        this.users = response.data;
        console.log(this.users);
      } catch (error) {
        console.log(error);
      }
    },
    async getMarketMakers() {
      try {
        const response = await this.$axios.get("/admin/getAllMarketMaker");
        this.market_makers = response.data;
        console.log(this.market_makers);
      } catch (error) {
        console.log(error);
      }
    },

    async getAllSubscribers() {
      try {
        const response = await this.$axios.get("/admin/getAllSubscriberUsers");
        this.subscribers = response.data.data;
        console.log(this.subscribers);
      } catch (error) {
        console.log(error);
      }
    },
    async viewSubscriber(subscriber) {
      const new_id = subscriber.id;
      try {
        const response = await this.$axios.get(
          `/admin/getSingleUser/${new_id}`
        );
        this.single_subscriber = response.data.user;
        this.subscriber_modal = !this.subscriber_modal;
        console.log(this.single_subscriber);
      } catch (error) {
        console.log(error.response);
      }
    },

    // async viewMarketMaker(market_maker) {
    //   const mm_id = market_maker.id;
    //   try {
    //     const response = await this.$axios.get(
    //       `/admin/getSingleMarketMaker/${mm_id}`
    //     );
    //     this.single_market_maker = response.data;
    //     this.market_maker_modal = !this.market_maker_modal;
    //     console.log(this.single_market_maker);
    //   } catch (error) {
    //     console.log(error.response);
    //   }
    // },
    async makeNewMarketMaker(single_subscriber) {
      try {
        this.loading = true;
        let user_id = single_subscriber.id;
        const response = this.$axios.post(
          `/admin/makeNewMarketMaker/${user_id}`
        );
        console.log(response);
        this.$toast.success("User is now a Market Maker", { timeout: 5000 });
        this.subscriber_modal = !this.subscriber_modal;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error.response);
      }
    },
  },
  mounted() {
    this.getUsers();
    this.getMarketMakers();
    this.getAllSubscribers();
    this.viewSubscriber();
    // this.viewMarketMaker();
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
.users_wrap .transactions_data td {
  cursor: pointer;
}
.users_wrap .v-slide-group {
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
}
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