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

        <div class="transactions_data">
          <div class="body__wrap">
            <v-simple-table fixed-header height="200px">
              <template v-slot:default>
                <thead>
                  <tr
                    style="border-bottom: thin solid rgba(0, 0, 0, 0.12)"
                    class=""
                  >
                    <th class="text-left th_color">SN</th>
                    <th class="text-left th_color">Name</th>
                    <th class="text-left th_color">Phone number</th>
                    <th class="text-left th_color">Transaction</th>
                    <th class="text-left th_color">Amount</th>
                    <!-- <th class="text-left th_color">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="mt-2"
                    style="border-bottom: thin solid rgba(0, 0, 0, 0.12)"
                    @click="viewDetail()"
                  >
                    <td>1</td>
                    <td>Abba Biola</td>
                    <td>08123456789</td>
                    <td>Funded Wallet</td>
                    <td>50,000</td>
                    <!-- <td>
                    <nuxt-link to="/admin_dashboard/dashboard/">
                      View Details</nuxt-link
                    >
                  </td> -->
                  </tr>
                  <!-- <tr v-if="subscribers.length == 0">
                  <td>
                    <p>
                      You do not have any Subscribers.
                      <img class="emoji" src="/sad.png" alt="sad emoji" />
                    </p>
                  </td>
                </tr> -->
                </tbody>

                <tbody>
                  <tr
                    class="mt-2"
                    style="border-bottom: thin solid rgba(0, 0, 0, 0.12)"
                    @click="viewDetail()"
                  >
                    <td>2</td>
                    <td>Biola George</td>
                    <td>08123456789</td>
                    <td>Subscription</td>
                    <td>75,000</td>
                    <!-- <td>
                    <nuxt-link to="/admin_dashboard/user_detail/id">
                      View Details</nuxt-link
                    >
                  </td> -->
                  </tr>
                  <!-- <tr v-if="subscribers.length == 0">
                  <td>
                    <p>
                      You do not have any Subscribers.
                      <img class="emoji" src="/sad.png" alt="sad emoji" />
                    </p>
                  </td>
                </tr> -->
                </tbody>
              </template>
            </v-simple-table>

            <div
              class="view__assets__wrap text-center"
              style="margin-top: -30px"
            >
              <nuxt-link to="/admin_dashboard/users">
                <button class="assets__link">
                  <span class="px-3">View database</span>
                </button>
              </nuxt-link>
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
      user: {},
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
    viewDetail() {
      this.$router.push(`/admin_dashboard/user_detail/id`);
    },
  },
  mounted() {},
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

.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > td:last-child,
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
  > th:last-child,
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > th:not(.v-data-table__mobile-row),
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
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