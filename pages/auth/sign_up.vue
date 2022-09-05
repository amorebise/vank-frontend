<template>
  <div class="registeration_wrap">
    <sign-up-header />
    <div class="registeration_content">
      <div class="header_section text-center">
        <!-- <div v-for="state in states" :key="state.index">
          <p>{{ states }}</p>
        </div> -->
        <h1>Create your Account</h1>
        <h5 class="py-2">
          Let’s get you started on VANK, kindly fill in your details
        </h5>
      </div>
      <div class="form_section mt-5">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form action="" @submit.prevent="handleSubmit(onSubmit)">
            <div class="row">
              <!-- First Name -->
              <div class="col-md-6">
                <div class="form-group mx-2 mt-2">
                  <ValidationProvider
                    name="first name"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="" class="">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="signUp_data.first_name"
                      placeholder="Enter your First Name"
                    />
                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <!-- Middle Name -->
              <div class="col-md-6">
                <div class="form-group mx-2 mt-2">
                  <label for="" class="">Middle Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="signUp_data.mid_name"
                    placeholder="Enter your Middle Name(optional)"
                  />
                </div>
              </div>

              <!-- Last Name -->
              <div class="col-md-6">
                <div class="form-group mx-2 mt-2">
                  <ValidationProvider
                    name="last name"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="" class="">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="signUp_data.last_name"
                      placeholder="Enter your Last Name"
                    />

                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <!-- Email -->
              <div class="col-md-6">
                <div class="form-group mx-2 mt-2">
                  <ValidationProvider
                    name="email"
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <label for="" class="">Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="signUp_data.email"
                      placeholder="Enter your Email Address"
                    />

                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <div>
                    <div v-show="error_message">
                      <span class="errors">{{ mail_error }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Phone Number -->
              <div class="col-md-6">
                <div class="form-group mx-2 mt-2">
                  <ValidationProvider
                    name="phone number"
                    rules="required|integer|max:14"
                    v-slot="{ errors }"
                  >
                    <label for="" class="">Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="signUp_data.phone_number"
                      placeholder="234**********"
                    />
                    <span class="warning"
                      >phone number should contain country code</span
                    >
                    <div v-show="error_message">
                      <span class="errors">{{ phone_number_error }}</span>
                    </div>
                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <!-- Address -->
              <div class="col-md-6">
                <div class="form-group mx-2 mt-2">
                  <ValidationProvider
                    name="address"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="" class="">Full Address</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="signUp_data.address"
                      placeholder="Enter your Address, Street and city"
                    />
                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <!-- Password -->
              <div class="col-md-6">
                <div class="form-group mx-2 mt-2">
                  <ValidationProvider
                    name="password"
                    rules="required|max:30|min:6"
                    v-slot="{ errors }"
                  >
                    <label for="" class="">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="signUp_data.password"
                      placeholder="Create Password"
                    />
                    <span class="errors">{{ errors[0] }}</span>
                    <span class="errors"
                      >password must contain atleast one uppercase letter, one
                      special character, and one number</span
                    >
                  </ValidationProvider>
                </div>
              </div>

              <!-- Confirm Password -->
              <div class="col-md-6">
                <div class="form-group mx-2 mt-2">
                  <ValidationProvider
                    name="confirm password"
                    rules="required|max:30|min:8"
                    v-slot="{ errors }"
                  >
                    <label for="" class="">Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="signUp_data.password_confirmation"
                      placeholder="Re-enter Password again"
                    />
                    <div v-show="error_message">
                      <span class="errors">{{ password_error }}</span>
                    </div>
                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <!-- Country -->
              <div class="col-md-6">
                <div class="form-group mx-2 mt-2">
                  <ValidationProvider
                    name="country"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="exampleFormControlSelect1" class=""
                      >Country</label
                    >
                    <select
                      class="form-control option-class select"
                      id="exampleFormControlSelect1"
                      v-model="signUp_data.country"
                    >
                      <option>Please Select a Country</option>
                      <option
                        class=""
                        id="selectCountry"
                        v-for="country in countries"
                        :key="country.id"
                        :value="country.name"
                      >
                        {{ country.name }}
                      </option>
                    </select>
                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <!-- State -->
              <div class="col-md-6">
                <div class="form-group mx-2 mt-2">
                  <ValidationProvider
                    name="state"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="exampleFormControlSelect1" class=""
                      >State</label
                    >
                    <select
                      class="form-control option-class select"
                      id="stateId"
                      v-model="signUp_data.state"
                    >
                      <option>Please Select a Country</option>
                      <option
                        class=""
                        id="selectState"
                        v-for="state in states"
                        :key="state.index"
                        :value="state"
                      >
                        {{ state }}
                      </option>
                    </select>
                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <!-- Referrals -->
              <!-- <div class="col-md-6">
                <div class="form-group mx-2 mt-2">
                  <label for="" class="">Referral Code</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="signUp_data.referred_by"
                    placeholder="Enter referral code"
                  />
                </div>
              </div> -->

              <div class="col-md-12">
                <div class="form-group mx-4 mt-2">
                  <ValidationProvider
                    name="accept_terms"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div class="pl-2 t_c_wrap d-flex align-items-center">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="signUp_data.agreement"
                        name="checkbox-1"
                      >
                        I have read, understood and accepted the
                        <popup />
                      </b-form-checkbox>
                    </div>
                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
            </div>
            <div class="text-center register_wrap mt-4">
              <v-btn
                class="register_button"
                value=""
                :loading="loading"
                type="submit"
                >Sign up for free</v-btn
              >

              <div class="login_wrap">
                <p>
                  Already have an account?
                  <nuxt-link
                    to="/login"
                    class="text-primary text-decoration-none"
                    >Log in</nuxt-link
                  >
                </p>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
    <!-- <footer-section /> -->
  </div>
</template>

<script>
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import footer_section from "~/components/footer_section.vue";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import Login_header from "~/components/login_header.vue";
// import { states } from "~/states/states.js";
export default {
  data() {
    return {
      states: [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara",
      ],
      signUp_data: {
        first_name: "",
        mid_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone_number: "",
        country: "",
        address: "",
        state: "",
        // referred_by: "",
        agreement: null,
      },
      error_message: false,
      password_error: {},
      mail_error: {},
      phone_number_error: {},
      loading: false,
      // baseUrl: "https://api.vankwallet.com/api/auth/",
      countries: {},
      countryUrl: "https://restcountries.com/v2/all",
      // states: {},
      stateUrl: "https://locus.fkkas.com/api/states",
    };
  },
  methods: {
    async signUp() {
      this.loading = true;
      try {
        const response = await this.$axios.post("/register", this.signUp_data);
        console.log(response);
        this.loading = false;
        this.$router.push("/notifications/signup_notification");
      } catch (error) {
        this.loading = false;
        console.log(error.response);
        this.phone_number_error = error.response.data.errors.phone_number[0];
        this.password_error = error.response.data.errors.password[0];
        this.mail_error = error.response.data.errors.email[0];
        this.error_message = true;
        console.log(this.mail_error);
      }
      this.loading = false;
    },
    onSubmit() {
      this.signUp();
    },
    async getCountry() {
      try {
        const response = await this.$axios.get(this.countryUrl);
        this.countries = response.data;
        console.log(this.countries);
      } catch (error) {
        console.log(error.response);
      }
    },
    async get_states() {
      try {
        const response = await this.$axios.get(this.stateUrl);
        this.states = response.data.data;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  mounted() {
    this.getCountry();
    this.get_states();
  },
  components: {
    Toast,
    footer_section,
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
    Login_header,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.registeration_content {
  margin: 40px auto;
  width: 70%;
}
.registeration_content h1 {
  color: #0f1842;
  font-size: 76px;
  font-weight: bold;
  font-family: "Titillium Web", sans-serif;
}
.registeration_content h5 {
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
  padding: 25px 30px !important;
  width: 30%;
  font-size: 18px;
}

.errors {
  color: red;
  font-size: 10px;
}
.warning {
  color: #000;
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
  .registeration_content {
    /* margin: 10px; */
    width: 100%;
  }
  .registeration_content .form-group {
    margin-top: 10px !important;
  }
  .col-md-6 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .registeration_content h1 {
    font-size: 30px;
  }
  .registeration_content h5 {
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