<template>
  <div class="registeration_wrap">
    <sign-up-header />
    <div class="registeration_content">
      <div class="header_section text-center">
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
                    <label for="" class="py-2">First Name</label>
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
                  <label for="" class="py-2">Middle Name</label>
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
                    <label for="" class="py-2">Last Name</label>
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
                    <label for="" class="py-2">Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="signUp_data.email"
                      placeholder="Enter your Email Address"
                    />
                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
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
                    <label for="" class="py-2">Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="signUp_data.phone_number"
                      placeholder="Enter your Phone Number"
                    />
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
                    <label for="" class="py-2">Full Address</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="signUp_data.address"
                      placeholder="Enter your Adrress, Street and city"
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
                    <label for="" class="py-2">Password</label>
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
                    <label for="" class="py-2">Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="signUp_data.password_confirmation"
                      placeholder="Re-enter Password again"
                    />
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
                    <label for="exampleFormControlSelect1" class="py-2"
                      >Country</label
                    >
                    <select
                      class="form-control option-class select"
                      id="exampleFormControlSelect1"
                      v-model="signUp_data.country"
                      required
                    >
                      <option>Please Select a Country</option>
                      <option
                        class="colour"
                        id="selectCountry"
                        v-for="country in countries"
                        :key="country.id"
                        :value="country.name"
                      >
                        <p class="text-danger">{{ country.name }}</p>
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
                    <label for="exampleFormControlSelect1" class="py-2"
                      >State</label
                    >
                    <select
                      class="form-control option-class select"
                      id="exampleFormControlSelect1"
                      v-model="signUp_data.state"
                      required
                    >
                      <option>Please Select a Country</option>
                      <option
                        class="colour"
                        id="selectCountry"
                        v-for="state in states"
                        :key="state.id"
                        :value="state.name"
                      >
                        <p class="text-danger">{{ state.name }}</p>
                      </option>
                    </select>
                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="col-md-6">
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
export default {
  data() {
    return {
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
        agreement: null,
      },
      loading: false,
      // baseUrl: "https://api.vankwallet.com/api/auth/",
      countries: {},
      countryUrl: "https://restcountries.com/v2/all",
      states: {},
      stateUrl: "https://locus.fkkas.com/api/states",
    };
  },
  methods: {
    async signUp() {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          "/marketMakerAplication",
          this.signUp_data
        );
        this.$toast.success(
          "Application Successful, Check Your Mail For Verification",
          {
            timeout: 5000,
          }
        );

        console.log(response);
        this.loading = false;
        this.$router.push("/");
      } catch (error) {
        console.log(error.response);
        this.loading = false;
      } finally {
        this.signUp_data = {};
      }
    },
    onSubmit() {
      this.signUp();
    },
    async getCountry() {
      try {
        const response = await this.$axios.get(this.countryUrl);
        this.countries = response.data;
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
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none !important;
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