<template>
  <div class="update__profile w-100">
    <div class="update__profile__wrap">
      <mm-nav name="Profile" />
      <div class="update__profile__content">
        <div class="header_section text-center">
          <h1>Update Profile</h1>
        </div>
        <div class="form_section mt-5">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form action="" @submit.prevent="handleSubmit(updateMMProfile)">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mx-2">
                    <ValidationProvider
                      name="wallet address"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <label for="" class="py-1">Wallet Address</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="mm_data.wallet_id"
                        placeholder="Enter your Wallet Address"
                      />
                      <span class="errors">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
                <!-- <div class="col-md-6">
                  <div class="form-group mx-2">
                    <ValidationProvider
                      name="wallet balance"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <label for="" class="py-1">Wallet Balance</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="mm_data.wallet_balance"
                        placeholder="Enter your Wallet Balance"
                      />
                      <span class="errors">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div> -->
                <div class="col-md-6">
                  <div class="form-group mx-2">
                    <ValidationProvider
                      name="bank name"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <label for="" class="py-1">Bank Name</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="mm_data.bank_name"
                        placeholder="Enter your Bank Name"
                      />
                      <span class="errors">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mx-2 py-3">
                    <ValidationProvider
                      name="account number"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <label for="" class="py-1">Account Number</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="mm_data.account_no"
                        placeholder="Enter your Account Number"
                      />
                      <span class="errors">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>

                <!-- <div class="col-md-6"> -->
                <div class="form-group mx-4">
                  <ValidationProvider
                    name="accept_terms"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div class="t_c_wrap mt-1 mx-2">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="mm_data.agreement"
                        name="checkbox-1"
                        value="accepted"
                      >
                        <div class="">
                          <span
                            >I have read, understood and accepted the terms and
                            conditions</span
                          >
                        </div>
                        <!-- <popup /> -->
                      </b-form-checkbox>
                    </div>
                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <!-- </div> -->
                </div>
              </div>
              <div class="text-center register_wrap mt-4">
                <v-btn
                  class="register_button"
                  value=""
                  :loading="loading"
                  type="submit"
                  >Update Profile</v-btn
                >
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  data() {
    return {
      loading: false,

      mm_data: {
        wallet_id: "",
        account_no: "",
        bank_name: "",
        agreement: null,
      },
    };
  },
  methods: {
    async updateMMProfile() {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          "/marketMakerUpdate",
          this.mm_data
        );
        this.$toast.success("Profile Update Successful", { timeout: 5000 });
        console.log(response);
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      } finally {
        this.mm_data = {};
      }
    },
    // onSubmit() {
    //   this.updateMMProfile();
    // },
  },
  components: {
    Toast,
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
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
.update__profile__wrap {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.update__profile__content {
  margin: 40px auto;
  width: 70%;
}
.update__profile__content h1 {
  color: #0f1842;
  font-size: 76px;
  font-weight: bold;
  font-family: "Titillium Web", sans-serif;
}
.update__profile__content h5 {
  font-size: 16px;
}

.form_section .form-control {
  cursor: pointer;
  box-shadow: none;
  color: grey;
  min-height: 7vh;
  padding: 10px;
}
.form_section .form-control:focus {
  border-color: #c5cbcc;
}
.account_color {
  color: #1d83c5;
  font-size: 11px;
}
.form_section select {
  -webkit-appearance: revert;
}
.form_section .form-control::placeholder {
  font-size: 14px;
}
.register_button {
  background-color: #1d83c5 !important;
  color: #fff;
  border-radius: 5px;
}
.v-btn {
  background-color: #00e8fe !important;
  color: #000;
  text-transform: none;
  padding: 20px 30px !important;
  width: 40%;
  font-size: 15px;
  box-shadow: none;
}

.errors {
  color: red;
  font-size: 10px;
}
.custom-control-label::after {
  cursor: pointer !important;
}
.t_c_wrap {
  font-size: 12px;
}
.t_c_wrap span {
  cursor: pointer !important;
  font-size: 12px;
}
.custom-control-label::after {
  cursor: pointer !important;
}

@media (max-width: 768px) {
  .update__profile__wrap {
    margin: 0 !important;
    padding: 0;
  }
  .update__profile__content {
    /* margin: 10px; */
    width: 100%;
  }
  .update__profile__content h1 {
    font-size: 30px;
  }
  .update__profile__content h5 {
    font-size: 13px;
  }
  label {
    font-size: 11px;
  }
  .form-control {
    font-size: 11px;
  }
  .v-btn {
    padding: 25px 30px !important;
    width: 100%;
    font-size: 20px;
  }
  .account_color {
    font-size: 10px;
  }
  .register_wrap {
    padding: 10px;
    font-size: 12px;
  }
  .t_c_wrap {
    font-size: 9px;
  }
  .v-btn {
    font-size: 15px;
  }
}
</style>