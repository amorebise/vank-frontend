<template>
  <div class="pay_bills_wrap w-100">
    <div class="settings">
      <user-nav class="setting__nav py-4" name="Settings" />
      <div class="settings__gen__wrap">
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
                  <input required type="text" class="form-control" v-model="update_profile.email"
                    placeholder="Enter New Email" />
                </div>
                <div class="form-group">
                  <label class="" for="">Phone Number</label>
                  <input required type="number" class="form-control" v-model="update_profile.phone_number"
                    placeholder="Enter New Phone Number" />
                </div>

                <div class="d-flex justify-content-center">
                  <div class="mx-2">
                    <v-btn class="cancel_button" @click="profile_modal = !profile_modal">Cancel</v-btn>
                  </div>
                  <div class="mx-2">
                    <v-btn class="login_button" :loading="loading" value="Update" type="submit">Update</v-btn>
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
                  <input required type="password" class="form-control" v-model="password_change.current_password"
                    placeholder="Enter Current Password" />
                </div>
                <div class="form-group">
                  <label class="" for="">Enter New Password</label>
                  <input required type="password" class="form-control" v-model="password_change.password"
                    placeholder="Enter New Password" />
                </div>
                <div class="form-group">
                  <label class="" for="">Confirm New Password</label>
                  <input required type="password" class="form-control" v-model="password_change.password_confirmation"
                    placeholder="Confirm Password" />
                </div>
                <div class="d-flex justify-content-center">
                  <div class="mx-2">
                    <v-btn class="cancel_button" @click="show_modal = !show_modal">Cancel</v-btn>
                  </div>
                  <div class="mx-2">
                    <v-btn class="login_button" :loading="loading" value="Update" type="submit">Update</v-btn>
                  </div>
                </div>
              </form>
            </div>
          </div>


          <div class="change__password__form" v-show="show_payment_modal">
            <div class="password__modal slideInDown">
              <form action="" method="post" @submit.prevent="updateBankDetails()">
                <div class="form-group">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="password__header">
                      <h6>Enter Bank Details</h6>
                    </div>
                  </div>

                  <label class="" for="">Enter Bvn</label>
                  <input required type="number" class="form-control" v-model="verification.bvn_number"
                    placeholder="Enter your BVN" />
                </div>
                <div class="form-group">

                  <label for="exampleFormControlSelect1" class="">Enter Bank Name</label>
                  <select class="form-control option-class select" id="exampleFormControlSelect1"
                    v-model="verification.bank">
                    <option>Select Bank</option>
                    <option class="" id="selectCountry" v-for="bank in banks" :key="bank.index" :value="bank.name+'/'+bank.code">
                      {{ bank.name }}
                    </option>
                  </select>

                </div>
                <div class="form-group">
                  <label class="" for="">Enter Account Number</label>
                  <input required type="number" class="form-control" v-model="verification.account_number"
                    placeholder="Enter Account Number" />
                </div>
                <div class="d-flex justify-content-center">
                  <div class="mx-2">
                    <v-btn class="cancel_button" @click="show_payment_modal = !show_payment_modal">Cancel</v-btn>
                  </div>
                  <div class="mx-2">
                    <v-btn class="login_button" :loading="loading" value="Update" type="submit">Update</v-btn>
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
            <div class="text-wrap payment__content">
              <h5>Payments</h5>
              <div class="pt-2">
                <p>Update Bank Details</p>
                <!-- <span style="font-size: 13px" class="text-danger">N/B: create a reserved account after updating your
                  bank
                  details below
                </span> -->
              </div>
            </div>
            <div class="edit__wrap">
              <button @click="show_payment_modal = !show_payment_modal">
                Edit
              </button>
            </div>
          </div>

          <div>
            <div class="notify__user">

            </div>
          </div>

          <div v-if="reserved_acct" class="update__password__wrap d-flex justify-content-between py-2">
            <div class="text-wrap">
              <h5>View Reserve Account</h5>
            </div>
            <div class="edit__wrap">
              <button @click="show_bank_modal = !show_bank_modal">View</button>
            </div>
          </div>

          <!-- <div v-else class="update__password__wrap d-flex justify-content-between py-2">
            <div class="text-wrap">
              <h5>Create Reserve Account</h5>
            </div>
            <div class="edit__wrap">
              <button @click="createReservedAccount()">Create</button>
            </div>
          </div> -->


          <div class="change__password__form" v-show="show_bank_modal">
            <div class="slideInDown">
              <div class="detailed__content">
                <div class="cancel__wrap text-right">
                  <h6 @click="show_bank_modal = !show_bank_modal">x</h6>
                </div>
                <div class="text-center pb-2">
                  <h4>Reserve Account Details</h4>
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <h6>Account Name:</h6>
                  </div>
                  <div>
                    <p>{{reserved_acct.account_name}}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <h6>Account Number:</h6>
                  </div>
                  <div>
                    <p>{{reserved_acct.account_number}}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <h6>Bank Name:</h6>
                  </div>
                  <div>
                    <p>{{reserved_acct.bank_name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="update__password__wrap d-flex justify-content-between mt-2">
            <div class="text-wrap pt-2">
              <h5>View Bank Details</h5>
            </div>
            <div class="edit__wrap">
              <button @click="show_account_modal = !show_account_modal">View</button>
            </div>
          </div>

          <div class="change__password__form" v-show="show_account_modal">
            <div class="slideInDown">
              <div class="detailed__content">
                <div class="cancel__wrap text-right">
                  <h6 @click="show_account_modal = !show_account_modal">x</h6>
                </div>
                <div class="text-center pb-2">
                  <h4>Bank Details</h4>
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <h6>Account Name:</h6>
                  </div>
                  <div>
                    <p>{{user.first_name}} {{user.last_name}}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <h6>Account Number:</h6>
                  </div>
                  <div>
                    <p>{{user.account_number}}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <h6>Bank Name:</h6>
                  </div>
                  <div>
                    <p>{{user.bank}}</p>
                  </div>
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
import creator_sidebar from "~/components/creator_sidebar.vue";
export default {
  middleware: "auth",
  components: { creator_sidebar },
  data() {
    return {
      profile_modal: false,
      show_modal: false,
      show_bank_modal: false,
      show_account_modal: false,
      tab: null,
      loading: false,
      show_payment_modal: false,
      user: {},
      bank_error_message: '',
      reserved_acct: {},
      banks: {},
      update_profile: {
        email: "",
        phone_number: "",
      },
      verification: {
        account_number: "",
        bank: "",
        bvn_number: "",
        // bvn_code: "",
      },
      password_change: {
        current_password: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    async getUser() {
      let auth = this.$auth.$storage._state;
      let token = null;
      for (const key in auth) {
        console.log(key);
        if (key == "_token.local") {
          token = auth[key];
        } else {
          console.log("No");
        }
      }
      console.log(token);
      // console.log(this.$auth.$storage._state._token);
      try {
        let res = await this.$axios.get("/getUser", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        this.user = res.data[0];
        console.log(this.user);
      } catch (error) {
        console.log(error.response);
      }
    },
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

    async getBanks() {
      try {
        let response = await this.$axios.get('/getBanks')
        this.banks = response.data.data

        this.verification.bank_code = response.data.data.bank_code;
        console.log(this.verification.bank_code);
        console.log(this.banks)
      }
      catch (error) {
        console.log(error.response)
      }
    },
    async updateBankDetails() {
      try {

        let response = await this.$axios.post(
          "/verifyNationalIdentity",
          this.verification
        );
        this.$toast.success("BVN Verification Completed Successfully", {
          timeout: 5000,
        });
        this.show_payment_modal = !this.show_payment_modal;
        this.verification = {}
        console.log(response);
      } catch (error) {
        this.$toast.warning("Your personal Information does not match your BVN information", {
          timeout: 5000,
        });
        console.log(error.response);
      }
    },
    async getReseervedAcct() {
      try {
        let response = await this.$axios.get('/getReservedAccount')
        this.reserved_acct = response.data
        console.log(this.reserved_acct);
      }
      catch (error) {
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
        this.show_modal = !this.show_modal
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

  created() {
    this.getBanks()
    this.getUser()
    this.getReseervedAcct()
  }
};
</script>

<style>
.settings {
  margin-left: 230px;
  background-color: #fff;
  height: 100%;
  padding: 0 50px;
}

.settings__gen__wrap {
  padding-top: 50px;
}

.payment__content {
  line-height: 5px;
}

.detailed__content {
  background-color: #f8f7ff;
  border-radius: 5px;
  width: 30%;
  padding: 20px;
  margin: 100px auto;
}

.detailed__content h4 {
  font-weight: 600;
}

.detailed__content h6 {
  font-weight: 600;
  cursor: pointer;
}

.detailed__content p {
  font-size: 13px !important;
  font-weight: 400 !important;
}

.settings_wrap {
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

.settings_wrap .v-slide-group {
  flex-wrap: wrap;
}

.settings_wrap .theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),
.settings_wrap .theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon,
.settings_wrap .theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,
.settings_wrap .theme--light.v-tabs>.v-tabs-bar .v-tab--disabled {
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
  /* min-height: 7vh; */
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
  width: 25%;
  margin: 100px auto;
  background-color: #fff;
  padding: 30px 10px;
  border-radius: 3px;
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
    padding: 0 !important;
  }

  .settings_wrap {
    margin: 0;
  }

  .detailed__content {
    background-color: #f8f7ff;
    width: 100%;
    padding: 20px;
  }

  .change__password__form {
    padding: 10px;
  }

  .password__modal {
    width: 100%;
    margin: 60px auto;
  }

  .update__password__wrap h5,
  .update__password__wrap p,
  .edit__wrap button,
  .kyc_link {
    font-size: 13px;
  }

  .settings .setting__nav {
    position: fixed;
    background-color: #fff;
    padding: 0 !important;
    padding-right: 10px !important;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 232, 254, 0.15) !important;
    z-index: 1000;
  }

  .settings__gen__wrap {
    padding: 90px 15px;
  }

  .payment__content {
    line-height: 15px;
  }
}
</style>