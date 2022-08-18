<template>
  <div class="w-100">
    <div class="single__user__wrap">
      <user-nav name="User Details" />
      <div class="single__wrap">
        <div>
          <font-awesome-icon
            @click="$router.go(-1)"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>
        <div class="mt-5">
          <div class="row">
            <div class="col-md-6">
              <div class="img_card">
                <div class="asset__content text-center"></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="description__wrap">
                <p>
                  Name:
                  <span
                    >{{ singleUser.first_name }}
                    {{ singleUser.last_name }}</span
                  >
                </p>
                <p>
                  Phone: <span>{{ singleUser.phone_number }}</span>
                </p>
                <p>
                  Email: <span>{{ singleUser.email }}</span>
                </p>
                <p>
                  House Address: <span>{{ singleUser.address }}</span>
                </p>
              </div>
              <div class="d-flex radio_b" style="gap: 10px">
                <div class="register_button_wrap text-center mt-3 py-4">
                  <nuxt-link
                    to="/admin_dashboard/transactions"
                    class="assets__link"
                  >
                    <span class="px-3 user__f">Transactions</span>
                  </nuxt-link>
                </div>
                <div class="register_button_wrap text-center mt-3 py-4">
                  <nuxt-link
                    :to="`/admin_dashboard/wallets`"
                    class="assets__link"
                  >
                    <span class="px-3 user__f">View Wallets</span>
                  </nuxt-link>
                </div>
                <div class="register_button_wrap text-center mt-1 py-4">
                  <div
                    @click="show_limit_tab = !show_limit_tab"
                    class="assets__link"
                  >
                    <span class="px-3 user__f">Limit Account</span>
                  </div>
                </div>
                <div v-show="show_limit_tab" class="radio__btn">
                  <div @click="limitWithdrawal()" class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Can't Withdraw
                    </label>
                    <label class="form-check-label" for="exampleRadios1">
                      Allow Withdraw
                    </label>
                  </div>
                  <!-- <div class="form-check">
                    <input
                      @click="limitSubscription()"
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      Can't Sell
                    </label>
                    <label class="form-check-label" for="exampleRadios2">
                      Allow Sell
                    </label>
                  </div> -->
                  <div class="form-check">
                    <input
                      @click="limitSubscription()"
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios3"
                      value="option3"
                    />
                    <label class="form-check-label" for="exampleRadios3">
                      Can't Subscribe
                    </label>
                    <label class="form-check-label" for="exampleRadios3">
                      Allow Subscribe
                    </label>
                  </div>
                  <div @click="limitStake()" class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Can't Stake
                    </label>
                    <label class="form-check-label" for="exampleRadios1">
                      Allow Stake
                    </label>
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
  components: { creator_sidebar },
  data() {
    return {
      show_limit_tab: false,
      id: this.$route.params.id,
      singleUser: {},
    };
  },
  methods: {
    async getSingleUser() {
      try {
        let response = await this.$axios.get(`/admin/getSingleUser/${this.id}`);
        this.singleUser = response.data?.user;
        console.log(this.singleUser);
      } catch (error) {
        console.log(error.response);
      }
    },
    async limitStake() {
      try {
        let response = await this.$axios.post("/admin/limitSubscribeStatus/");
        console.log(response);
        this.run_stake();
      } catch (error) {
        console.log(error.response);
      }
    },
    async limitWithdrawal() {
      try {
        let response = await this.$axios.post("/admin/limitWithdrawStatus/");
        console.log(response);
        this.run_stake();
      } catch (error) {
        console.log(error.response);
      }
    },
    async limitSubscription() {
      try {
        let response = await this.$axios.post("/admin/limitSubscribeStatus/");
        console.log(response);
        this.run_stake();
      } catch (error) {
        console.log(error.response);
      }
    },
    run_stake() {
      this.show_limit_tab = false;
    },
  },
  created() {
    this.getSingleUser();
  },
};
</script>

<style>
.single__user__wrap {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
}
.radio_b {
  position: relative;
}
.radio__btn {
  position: absolute;
  right: 100px;
  background-color: #fff;
  border: 1px solid #00e8fe;
  padding: 20px;
}
.radio__btn .form-check-label {
  font-size: 14px;
}
.single__user__wrap .asset__content {
  background-image: url("/avatar.png");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  color: #001214;
  position: relative;
  height: 450px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
  border: 5px solid #00e8fe;
  /* gap: 10px; */
}
/* .single__user__wrap .asset__content p {
  opacity: 0;
}
.single__user__wrap .asset__content h4 {
  opacity: 0;
  color: #00e8fe;
}
.single__user__wrap .asset__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.single__user__wrap .asset__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.single__user__wrap .asset__content:hover h4 {
  opacity: 1;
  transition: ease-in-out 0.7s;
} */
.single__user__wrap .description__wrap {
  padding-top: 100px;
}
.single__user__wrap .description__wrap p {
  line-height: 25px;
  font-weight: 600;
  font-size: 16px;
}
.single__user__wrap .description__wrap span {
  font-weight: 500;
}

@media (max-width: 768px) {
  .single__user__wrap {
    margin-left: 0 !important;
    padding: 0;
  }
  .single__user__wrap .single__wrap {
    padding: 15px;
  }
  .single__user__wrap .description__wrap {
    padding-top: 10px;
  }
  .single__user__wrap .description__wrap p {
    line-height: 20px;
    font-weight: 600;
    font-size: 14px;
  }
  /* .single__user__wrap .row {
    padding: 0 !important;
  } */
  .single__user__wrap .col-md-6 {
    padding: 10px !important;
  }
  .settings_wrap {
    margin: 10px;
  }
  .single__user__wrap .user__f {
    font-size: 11px !important;
  }
}
</style>