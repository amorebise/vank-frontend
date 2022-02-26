<template>
  <div class="dashboard w-100">
    <div class="dashboard_content">
      <user-nav name="Dashboard" />
      <div class="row">
        <div class="col-md-6">
          <div class="glass_card_wrap mx-2 mb-2">
            <div class="write_up_section p-4">
              <h5>Wallet Balance</h5>
              <!-- {{ user.first_name }} -->
              <div class="d-flex align-items-center pt-3">
                <div class="">
                  <nuxt-img
                    format="webp"
                    quality="90"
                    fit="cover"
                    src="/light_naira.png"
                  />
                </div>
                <div>
                  <p>{{ newUser.amount }}</p>
                </div>
                <!-- {{ newUser.name }} -->
              </div>
              <div class="profit_wrap mt-4">
                <span>Monthly PnL</span>
                <div class="precent_wrap">
                  <p class="percent_p">+10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="main_card_wrap mx-2 mb-2">
            <div class="write_up_section p-4">
              <h6>VANK 2.0</h6>
              <h2 class="py-2">SHARES</h2>
              <p>
                Make smart moves <br />
                with VANK Shares
              </p>
              <div class="mt-4 pt-2">
                <v-btn class="coming_soon_button" value="Withdraw" type="submit"
                  >Coming Soon</v-btn
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          d-flex
          justify-content-between
          align-items-center
          main_asset_wrap
          pl-2
        "
      >
        <div class="assets_wrap">
          <h5>Your Assets</h5>
        </div>
        <div class="buttons_wrap d-flex align-items-center">
          <div class="buy_button_wrap mx-2">
            <nuxt-link to="/subscription_page" class="buy_button"
              >Buy Now</nuxt-link
            >
          </div>
          <div class="withdraw_button_wrap mx-2">
            <nuxt-link to="/withdrawal_page" class="withdrawal_button"
              >Withdraw</nuxt-link
            >
          </div>
          <div class="buy_button_wrap mx-2">
            <nuxt-link to="/buy_more" class="buy_button">Buy More</nuxt-link>
          </div>
        </div>
      </div>
      <div class="row general_coin_wrap mt-5 mx-2 py-3">
        <div class="col-md-4 m_top">
          <div>
            <h5 class="text_after">{{ newUser.coin2 }}</h5>
            <div class="asset_wrap">
              <div class="d-flex align-items-center">
                <div class="coin_wrap">
                  <nuxt-img
                    format="webp"
                    sizes="xs:35vw sm:30vw md:20vw lg:13vw"
                    quality="90"
                    fit="cover"
                    src="/tether.png"
                    alt="image"
                  />
                </div>
                <div class="coin_name_wrap mx-2">
                  <h6>{{ newUser.coin2 }}</h6>
                  <!-- {{ user.name }} -->
                </div>
              </div>
              <div class="d-flex align-items-center pt-3">
                <div class="">
                  <nuxt-img
                    format="webp"
                    quality="90"
                    fit="cover"
                    src="/blue_naira.png"
                  />
                </div>
                <div>
                  <p>{{ newUser.coin1_amount_bought }}</p>
                </div>
              </div>
              <span>Total Investment</span>
            </div>
          </div>
        </div>
        <div class="col-md-4 m_top">
          <div>
            <h5 class="text_after">{{ newUser.coin1 }}</h5>
            <div class="asset_wrap">
              <div class="d-flex align-items-center">
                <div class="coin_wrap">
                  <nuxt-img
                    format="webp"
                    sizes="xs:35vw sm:30vw md:20vw lg:6vw"
                    quality="90"
                    fit="cover"
                    src="/btc.png"
                    alt="image"
                  />
                </div>
                <div class="coin_name_wrap mx-2">
                  <h6>{{ newUser.coin1 }}</h6>
                </div>
              </div>
              <div class="d-flex align-items-center pt-3">
                <div class="">
                  <nuxt-img
                    format="webp"
                    quality="90"
                    fit="cover"
                    src="/blue_naira.png"
                  />
                </div>
                <div>
                  <p>{{ newUser.coin1_amount_bought }}</p>
                </div>
              </div>
              <span>Total Investment</span>
            </div>
          </div>
        </div>
        <div class="col-md-4 m_top">
          <h5 class="text_after">PHYGITAL</h5>
          <div class="asset_wrap">
            <div class="d-flex align-items-center">
              <div class="coin_wrap">
                <nuxt-img
                  format="webp"
                  sizes="xs:35vw sm:30vw md:20vw lg:15vw"
                  quality="90"
                  fit="cover"
                  src="/phygi.png"
                  alt="image"
                />
              </div>
              <div class="coin_name_wrap mx-2">
                <h6>{{ newUser.asset }}</h6>
              </div>
            </div>
            <div class="d-flex align-items-center pt-3">
              <div class="">
                <nuxt-img
                  format="webp"
                  quality="90"
                  fit="cover"
                  src="/blue_naira.png"
                />
              </div>
              <div>
                <p>{{ newUser.asset_amount_bought }}</p>
              </div>
            </div>
            <span>Total Investment</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // middleware: "auth",

  data() {
    return {
      user: {},
      newUser: {},
    };
  },

  methods: {
    getUser() {
      this.$axios
        .get("/getAsset", {
          headers: {
            Authorization: `token ${localStorage.getItem("auth.jwt")}`,
          },
        })
        .then((response) => {
          this.user = response.data.data;
          console.log(this.user[0]);
          this.newUser = this.user[0];
        });
    },
    // created() {
    //   const user = this.$store.getters.getUser;
    //   console.log(user);
    //   this.username = user.name;
    // },
  },
  created() {
    this.getUser();
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
.dashboard_content {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.glass_card_wrap {
  background-image: url("/glassy.png");
  min-height: 40vh;
  background-size: contain;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 20px;
}
.main_card_wrap {
  background-image: url("/main.png");
  min-height: 40vh;
  background-size: contain;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 20px;
}
.glass_card_wrap .write_up_section h5 {
  font-weight: 600;
}
.glass_card_wrap .write_up_section p {
  font-size: 45px;
  font-weight: 600;
}
.glass_card_wrap .write_up_section span {
  padding-top: 10px;
  font-weight: 600;
}
.glass_card_wrap .write_up_section img {
  width: 100%;
}
.glass_card_wrap .precent_wrap {
  margin-top: 5px;
  text-align: center;
  padding: 2px 5px;
  width: 15%;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.23);
}
.glass_card_wrap .precent_wrap p {
  font-size: 15px;
}
.main_card_wrap .write_up_section h6 {
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 1px;
}
.main_card_wrap .write_up_section h2 {
  font-weight: 600;
}
.main_card_wrap .write_up_section p {
  font-size: 12px;
}
.main_card_wrap .write_up_section .v-btn {
  background-color: #00e8fe !important;
  font-size: 18px;
  padding: 25px 10px !important;
  box-shadow: none !important;
  text-transform: none;
  font-weight: 600;
}
.assets_wrap h5 {
  font-weight: 600;
}
.buttons_wrap {
  font-weight: 600;
}
.buttons_wrap .withdrawal_button {
  background-color: #00e8fe !important;
  font-size: 16px;
  padding: 13px 20px !important;
  font-weight: 600;
  color: #333f47;
  border-radius: 5px;
  letter-spacing: 1px;
}
.buttons_wrap .buy_button {
  background-color: #c5cbcc !important;
  font-size: 16px;
  padding: 13px 20px !important;
  font-weight: 600;
  color: #333f47;
  border-radius: 5px;
  letter-spacing: 1px;
}
.text_after::after {
  content: "";
  position: absolute;
  left: 0;
  top: 1.5rem;
  width: 1rem;
  height: 2px;
  background-color: #00e8fe;
}
.text_after::after {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInLeft {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slideInLeft {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.asset_wrap {
  border: 1px solid #1797ec;
  min-height: 20vh;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  width: 70%;
  font-weight: 600;
}
.asset_wrap p {
  font-size: 25px;
  color: #1d83c5;
}
.asset_wrap .coin_name_wrap {
  background-color: #c5cbcc;
  border-radius: 5px;
}
.asset_wrap .coin_name_wrap h6 {
  font-size: 12px;
  padding: 1px 10px;
  margin-top: 2px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .dashboard_content {
    margin: 0 !important;
    padding: 0;
  }
  .asset_wrap {
    width: 100%;
  }
  .m_top {
    margin-top: 20px;
  }
  .glass_card_wrap {
    background-image: url("/glassy.png");
    min-height: 40vh;
    background-size: 500px;
    color: #fff;
    letter-spacing: 1px;
  }
  .main_card_wrap {
    background-image: url("/main.png");
    min-height: 40vh;
    background-size: 500px;
    color: #fff;
    letter-spacing: 1px;
  }
  .glass_card_wrap .write_up_section h5 {
    font-size: 15px;
  }
  .glass_card_wrap .write_up_section p {
    font-size: 35px;
  }
  .glass_card_wrap .write_up_section span {
    padding-top: 10px;
    font-size: 14px;
  }
  .glass_card_wrap .write_up_section img {
    width: 80%;
  }
  .glass_card_wrap .profit_wrap {
    margin-top: 0 !important;
  }
  .glass_card_wrap .precent_wrap {
    margin-top: 5px;

    padding: 2px 5px;
    width: 20%;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.23);
  }
  .glass_card_wrap .precent_wrap p {
    font-size: 14px;
  }
  .main_card_wrap .write_up_section .v-btn {
    background-color: #00e8fe !important;
    font-size: 15px;
    padding: 15px 10px !important;
    box-shadow: none !important;
    text-transform: none;
    font-weight: 600;
  }
  .main_asset_wrap {
    margin-top: 10px;
    padding: 10px !important;
  }
  .assets_wrap h5 {
    font-size: 10px;
  }
  .buttons_wrap .mx-3 {
    margin: 3px !important;
  }
  .buttons_wrap .withdrawal_button {
    font-size: 10px;
    padding: 4px 5px !important;
    font-weight: 600;
    color: #333f47;
    border-radius: 5px;
    letter-spacing: 1px;
  }
  .buttons_wrap .buy_button {
    font-size: 10px;
    padding: 4px 5px !important;
  }
  .general_coin_wrap {
    margin-top: 10px !important;
  }
  .general_coin_wrap h5 {
    font-size: 15px;
  }
}
</style>