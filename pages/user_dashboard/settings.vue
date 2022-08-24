<template>
  <div class="pay_bills_wrap w-100">
    <div class="settings">
      <user-nav name="Settings" />
      <div class="settings_wrap subscriber">
        <div class="update__password__wrap py-2">
          <div class="edit__wrap text-right">
            <button class="text-right" @click="profile_modal = !profile_modal">
              Edit Profile
            </button>
          </div>
        </div>
        <div class="change__password__form" v-show="profile_modal">
          <div class="password__modal slideInDown">
            <form action="" method="post" @submit.prevent="edit_profile()">
              <div class="form-group">
                <label class="" for="">Email</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  v-model="update_profile.email"
                  placeholder="Enter New Email"
                />
              </div>
              <div class="form-group">
                <label class="" for="">Phone Number</label>
                <input
                  required
                  type="number"
                  class="form-control"
                  v-model="update_profile.phone_number"
                  placeholder="Enter New Phone Number"
                />
              </div>

              <div class="d-flex justify-content-center">
                <div class="mx-2">
                  <v-btn
                    class="cancel_button"
                    @click="profile_modal = !profile_modal"
                    >Cancel</v-btn
                  >
                </div>
                <div class="mx-2">
                  <v-btn
                    class="login_button"
                    :loading="loading"
                    value="Update"
                    type="submit"
                    >Update</v-btn
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="update__password__wrap d-flex justify-content-between py-2">
          <div class="text-wrap">
            <h5>Change Password</h5>
            <p>Set a new password</p>
          </div>
          <div class="edit__wrap">
            <button @click="show_modal = !show_modal">Edit</button>
          </div>
        </div>

        <div class="change__password__form" v-show="show_modal">
          <div class="password__modal slideInDown">
            <form action="" method="post" @submit.prevent="change_password()">
              <div class="form-group">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="password__header">
                    <h6>Edit New Password</h6>
                  </div>
                </div>

                <label class="" for="">Enter Old Password</label>
                <input
                  required
                  type="password"
                  class="form-control"
                  v-model="password_change.current_password"
                  placeholder="Enter Current Password"
                />
              </div>
              <div class="form-group">
                <label class="" for="">Enter New Password</label>
                <input
                  required
                  type="password"
                  class="form-control"
                  v-model="password_change.password"
                  placeholder="Enter New Password"
                />
              </div>
              <div class="form-group">
                <label class="" for="">Confirm New Password</label>
                <input
                  required
                  type="password"
                  class="form-control"
                  v-model="password_change.password_confirmation"
                  placeholder="Confirm Password"
                />
              </div>
              <div class="d-flex justify-content-center">
                <div class="mx-2">
                  <v-btn class="cancel_button" @click="show_modal = !show_modal"
                    >Cancel</v-btn
                  >
                </div>
                <div class="mx-2">
                  <v-btn
                    class="login_button"
                    :loading="loading"
                    value="Update"
                    type="submit"
                    >Update</v-btn
                  >
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="change__password__form" v-show="show_payment_modal">
          <div class="password__modal slideInDown">
            <form action="" method="post" @submit.prevent="change_password()">
              <div class="form-group">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="password__header">
                    <h6>Edit New Password</h6>
                  </div>
                </div>

                <label class="" for="">Enter Bvn</label>
                <input
                  required
                  type="number"
                  class="form-control"
                  v-model="verification.bvn_number"
                  placeholder="Enter your BVN"
                />
              </div>
              <div class="form-group">
                <label class="" for="">Enter Bank Name</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  v-model="verification.bank"
                  placeholder="Enter Bank Name"
                />
              </div>
              <div class="form-group">
                <label class="" for="">Enter Account Number</label>
                <input
                  required
                  type="number"
                  class="form-control"
                  v-model="verification.account_number"
                  placeholder="Enter Account Number"
                />
              </div>
              <div class="d-flex justify-content-center">
                <div class="mx-2">
                  <v-btn
                    class="cancel_button"
                    @click="show_payment_modal = !show_payment_modal"
                    >Cancel</v-btn
                  >
                </div>
                <div class="mx-2">
                  <v-btn
                    @click="updateBankDetails()"
                    class="login_button"
                    :loading="loading"
                    value="Update"
                    type="submit"
                    >Update</v-btn
                  >
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- <div class="update__password__wrap d-flex justify-content-between py-2">
          <div class="text-wrap">
            <h5>Next of Kin</h5>
            <p>Add your next of kin</p>
          </div>
          <div class="edit__wrap">
            <button>Edit</button>
          </div>
        </div> -->
        <div class="update__password__wrap d-flex justify-content-between py-2">
          <div class="text-wrap">
            <h5>Payments</h5>
            <p>Payments</p>
          </div>
          <div class="edit__wrap">
            <button @click="show_payment_modal = !show_payment_modal">
              Edit
            </button>
          </div>
        </div>
        <div class="update__password__wrap d-flex justify-content-between">
          <div class="text-wrap">
            <h5>Verification</h5>
            <p>KYC Documents</p>
          </div>
          <div class="edit__wrap">
            <nuxt-link class="kyc_link" to="/kyc/kyc">Next</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import creator_sidebar from "~/components/creator_sidebar.vue";
export default {
  middleware: "auth",
  components: { creator_sidebar },
  data() {
    return {
      profile_modal: false,
      show_modal: false,
      tab: null,
      loading: false,
      show_payment_modal: false,
      update_profile: {
        email: "",
        phone_number: "",
      },
      verification: {
        account_number: "",
        bank: "",
        bvn_number: "",
      },
      password_change: {
        current_password: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    async edit_profile() {
      try {
        const response = await this.$axios.post(
          "/updateUserDetail",
          this.update_profile
        );
        console.log(response);
        this.$toast.success("Profile Updated", { timeout: 5000 });
      } catch (error) {
        console.log(error.response);
      }
    },
    async updateBankDetails() {
      try {
        let response = await this.$axios.post(
          "/verifyNationalIdentity",
          this.verification
        );
        this.show_payment_modal = !this.show_payment_modal;
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },
    async change_password() {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          "/changePassword",
          this.password_change
        );
        this.$toast.success("Password Changed Successfully", {
          timeout: 5000,
        });
        this.loading = false;
        console.log(response);
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },
};
</script>

<style>
.settings {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.settings_wrap {
  margin-top: 50px;
  border-radius: 10px;
  background-color: #f8f7ff;
  padding: 10px;
}
.settings_wrap h5 {
  font-weight: 600;
  font-size: 15px;
}
.settings_wrap p {
  font-size: 15px;
}
.edit__wrap button {
  background-color: #fff;
  border: 1px solid #00e8fe;
  font-size: 15px;
  border-radius: 5px;
  padding: 5px 10px;
}
.kyc_link {
  background-color: #fff;
  border: 1px solid #00e8fe;
  font-size: 15px;
  border-radius: 5px;
  padding: 5px 10px;
  color: #000;
}
/* .update__password__wrap {
} */
/* .settings_wrap .v-slide-group__content {
  background-color: #f4ede4;
}
.settings_wrap .theme--light.v-tabs > .v-tabs-bar,
.settings_wrap .v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  background-color: #f4ede4;
} */
.settings_wrap .v-slide-group {
  flex-wrap: wrap;
}
.settings_wrap .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.settings_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-icon,
.settings_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-btn,
.settings_wrap .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}
.settings_wrap .v-tab {
  text-transform: unset;
}
.change__password__form {
  background-color: rgba(0, 0, 0, 0.445);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
}
.change__password__form .form-control {
  color: grey;
  min-height: 7vh;
  padding: 10px;
  font-size: 13px;
}
.change__password__form label {
  font-size: 13px;
}
.password__header h6 {
  font-weight: 700;
}
.password__modal {
  width: 20%;
  margin: 100px auto;
  background-color: #fff;
  padding: 30px 10px;
}
.change__password__form p {
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
}
.change__password__form .login_button {
  background-color: #00e8fe !important;
  font-size: 14px;
  color: #000;
  padding: 5px 10px !important;
  box-shadow: none !important;
  text-transform: none;
  /* width: 100%; */
}
.change__password__form .cancel_button {
  border: 1px solid #00e8fe;
  color: #00e8fe;
  font-size: 14px;
  padding: 5px 10px !important;
  box-shadow: none !important;
  text-transform: none;
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
  .settings {
    margin-left: 0 !important;
    padding: 0;
  }
  .settings_wrap {
    margin: 10px;
  }
  .change__password__form {
    padding: 10px;
  }
  .password__modal {
    width: 100%;
    margin: 40px auto;
  }
  .update__password__wrap h5,
  .update__password__wrap p,
  .edit__wrap button,
  .kyc_link {
    font-size: 13px;
  }
}
</style>