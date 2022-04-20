<template>
  <div class="registeration_wrap px-5">
    <admin-nav name="MM" />
    <div class="back__button px-3">
      <span @click="back()" class="back__link">back to dashboard</span>
    </div>
    <div class="registeration_content">
      <div class="header_section text-center">
        <h1>Add Market Maker</h1>
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
                      v-model="market_maker_data.first_name"
                      placeholder="Enter your First Name"
                    />
                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
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
                      v-model="market_maker_data.last_name"
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
                      type="text"
                      class="form-control"
                      v-model="market_maker_data.email"
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
                      v-model="market_maker_data.phone_number"
                      placeholder="Enter your Phone Number"
                    />
                    <span class="errors">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <!-- Address -->
              <div class="col-md-12">
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
                      v-model="market_maker_data.address"
                      placeholder="Enter your Adrress, Street and city"
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
                      v-model="market_maker_data.country"
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
                      v-model="market_maker_data.state"
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
            </div>
            <div class="text-center register_wrap mt-4">
              <v-btn
                class="register_button"
                value=""
                :loading="loading"
                type="submit"
                >Add Market Maker</v-btn
              >
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
      market_maker_data: {
        first_name: "",
        mid_name: "",
        last_name: "",
        email: "",

        phone_number: "",
        country: "",

        state: "",
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
          "/admin/createMarketMaker",
          this.market_maker_data
        );
        this.$toast.success(
          "Registration Successful, Market Maker Has Been Added",
          {
            timeout: 5000,
          }
        );
        console.log(response);
        this.loading = false;
        this.$router.push("/admin_dashboard/dashboard");
        // this.signUp_data = {};
      } catch (error) {
        console.log(error.response);
        this.loading = false;
      } finally {
        this.market_maker_data = {};
      }
    },
    back() {
      this.$router.go(-1);
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
.registeration_wrap {
  margin-left: 230px;
}
.registeration_content {
  margin: 40px auto;
  width: 70%;
}
.registeration_content h1 {
  color: #0f1842;
  font-size: 50px;
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
  font-size: 12px;
}
.form_section .form-control:focus {
  border-color: #c5cbcc;
}
.form_section label {
  font-size: 15px;
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
.back__link {
  font-size: 12px;
  color: blue;
  cursor: pointer;
  font-style: italic;
}

@media (max-width: 768px) {
  .registeration_wrap {
    margin: 0 !important;
    padding: 0 !important;
  }
  .register_wrap {
    margin: 0 !important;
  }
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