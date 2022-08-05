<template>
  <div class="pay_bills_wrap w-100">
    <div class="users">
      <admin-nav name="Referral Wallet" />
      <div class="users_wrap">
        <div class="search__bar__wrap">
          <div class="form-group py-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search property by token"
            />
          </div>
        </div>

        <div class="transactions_data">
          <div class="body__wrap">
            <v-simple-table fixed-header height="100%">
              <template v-slot:default>
                <thead>
                  <tr
                    style="border-bottom: thin solid rgba(0, 0, 0, 0.12)"
                    class=""
                  >
                    <th class="text-left th_color">SN</th>
                    <th class="text-left th_color">User</th>
                    <th class="text-left th_color">Referral Amount (N)</th>

                    <th class="text-left th_color">Payment Amount (N)</th>
                    <th class="text-left th_color">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="referral in referrals"
                    :key="referral.index"
                    style="border-bottom: thin solid rgba(0, 0, 0, 0.12)"
                    class="mt-2"
                  >
                    <td>{{ referral }}</td>
                    <td>{{ referral }}</td>
                    <td>{{ referral }}</td>
                    <td>{{ referral }}</td>
                    <td>{{ referral }}</td>
                  </tr>
                  <tr v-if="referrals.length == 0">
                    <td>
                      <p class="text-center">You have no referrals.</p>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
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
      referrals: {},
      loading: false,
      subscriber_modal: false,
      market_maker_modal: false,
    };
  },
  methods: {
    async getReferrals() {
      try {
        let response = await this.$axios.get("/admin/getAllReferrals/");
        this.referrals = response.data;
        console.log(this.referrals);
      } catch (error) {
        console.log(error.response);
      }
    },

    viewDetail() {
      this.$router.push(`/admin_dashboard/referrals/id`);
    },
  },
  created() {
    this.getReferrals();
  },
};
</script>

<style>
.body__wrap {
  border-radius: 10px;
  border: 1px solid #3030304b;
  padding: 10px;
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
  .users_wrap {
    margin-top: 50px;
    padding: 10px;
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