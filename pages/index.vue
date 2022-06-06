<template>
  <div class="home_wrap">
    <header-nav />
    <div class="hero_section mt-5">
      <div class="hero__content">
        <h1>Make Smarter Moves,</h1>
        <div
          class="d-flex typed_text align-items-center justify-content-center"
        >
          <h1 class="text-white">Save in #</h1>
          <span class="type"></span>
        </div>
        <div class="registration_wrap text-center mt-4">
          <nuxt-link to="/sign_up" class="reg_link"
            ><span class="text-dark new_signup mx-1"
              >Sign up for free</span
            ></nuxt-link
          >
          <nuxt-link to="/sign_up" class="explore_wrap"
            ><span class="text-dark explore_link mx-1"
              >Explore Assets</span
            ></nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="trending__wrap">
      <div class="py-3 text-center">
        <h1>Trending Assets</h1>
        <p>You can get quality Real Estate from N500</p>
      </div>
      <div
        class="img__wrap d-md-flex justify-content-center px-2"
        style="gap: 10px"
      >
        <div class="mb-2 cardz">
          <div class="sale__notification">
            <p>90% Sold</p>
          </div>
          <v-img
            class="img"
            lazy-src="/first_trend.svg"
            src="/first_trend.svg"
            alt="image"
          />
          <div class="text__wrap bg-white px-3 py-2">
            <p>Land in Abuja - <span>650SQM</span></p>
            <div class="d-flex justify-content-between">
              <h6>FCDA Estate</h6>
              <ion-icon style="color: #00e8fe" name="bookmark-outline" />
            </div>
          </div>
        </div>
        <div class="cardz mb-2">
          <div class="sale__notification">
            <p>50% Sold</p>
          </div>
          <v-img
            class="img"
            lazy-src="/second_trend.svg"
            src="/second_trend.svg"
            alt="image"
          />
          <div class="text__wrap bg-white px-3 py-2">
            <p>Land in Abuja - <span>650SQM</span></p>
            <div class="d-flex justify-content-between">
              <h6>FCDA Estate</h6>
              <ion-icon style="color: #00e8fe" name="bookmark-outline" />
            </div>
          </div>
        </div>
        <div class="cardz mb-2">
          <div class="sale__notification">
            <p>70% Sold</p>
          </div>
          <v-img
            class="img"
            lazy-src="/third_trend.svg"
            src="/third_trend.svg"
            alt="image"
          />
          <div class="text__wrap bg-white px-3 py-1">
            <p>Land in Abuja - <span>650SQM</span></p>
            <div class="d-flex justify-content-between">
              <h6>FCDA Estate</h6>
              <ion-icon style="color: #00e8fe" name="bookmark-outline" />
            </div>
          </div>
        </div>
      </div>
      <div class="view__assets__wrap text-center">
        <button class="assets__link">
          <span class="px-3">View all Assets</span>
        </button>
      </div>
    </div>
    <div class="how_it_works" id="how_it_works">
      <div class="text-center">
        <h1>How VANK Works</h1>
        <h3>
          Simple and easy way to start your <br />
          savings with <span class="vank_capp">VANK</span>
        </h3>
      </div>

      <div class="row mt-5 align-items-center">
        <div class="col-md-6">
          <div class="crypto_bucket_section mx-5 pt-5">
            <v-img src="/iv.png" lazy-src="/iv.png" alt="image" />
          </div>
        </div>
        <div class="col-md-6">
          <div
            class="how_it_works_child d-flex justify-content-center py-4 mb-2"
          >
            <div>
              <div class="img_wrap mt-3">
                <img class="img" src="/add.svg" alt="image" />
              </div>
              <div class="head__wrap">
                <h4>Sign up</h4>
              </div>
              <div class="write_up_wrap ml-3">
                <p>Open an account and fund your wallet</p>
              </div>
            </div>
          </div>
          <div
            class="how_it_works_child d-flex justify-content-center py-4 mb-2"
          >
            <div>
              <div class="img_wrap d-flex justify-content-center mt-3">
                <img class="img" src="/save.svg" alt="image" />
              </div>
              <div class="head__wrap">
                <h4>Buy</h4>
              </div>
              <div class="write_up_wrap ml-3">
                <p>Buy a piece of land</p>
              </div>
            </div>
          </div>
          <div
            class="
              how_it_works_child
              d-flex
              justify-content-center
              align-items-center
              py-4
              mb-2
            "
          >
            <div>
              <div class="img_wrap d-flex justify-content-center">
                <img class="img" src="/bag.svg" alt="image" />
              </div>
              <div class="head__wrap">
                <h4>Make Money</h4>
              </div>
              <div class="write_up_wrap ml-3">
                <p>Save, Borrow Against, or sell at any time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="register_button_wrap text-center mt-3 py-4">
        <nuxt-link to="/sign_up" class="assets__link">
          <span class="px-3">Register with VANK</span>
        </nuxt-link>
      </div>
    </div>
    <div class="why_choose_us py-3">
      <div class="text-center pt-5">
        <h1>Why Choose VANK?</h1>
        <h5>Real Estate is easier with <span class="vank_cap">VANK</span></h5>
      </div>
      <div class="cardds__wrap">
        <div class="row mt-5">
          <div class="col">
            <div class="first__card">
              <div>
                <h5>Convenience</h5>
                <p>
                  With just your <br />
                  mobile phone, you <br />
                  can co-own prime <br />
                  real estate from as <br />
                  low as N500
                </p>
              </div>
            </div>

            <div class="second__card">
              <div>
                <h5>Better Returns</h5>
                <p>
                  You make far more <br />
                  money than <br />
                  leaving your <br />
                  savings in a bank
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="img__section">
              <img src="/iv2.png" alt="" />
            </div>
          </div>
          <div class="col">
            <div class="third__card">
              <div>
                <h5>Instant Cash</h5>
                <p>
                  Turn your assets to <br />
                  cash when you <br />
                  need it
                </p>
              </div>
            </div>

            <div class="fourth__card">
              <div>
                <h5>Borrow at Low Interest</h5>
                <p>
                  Get instant loans at <br />
                  interest rates <br />
                  starting as low as 3%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <cards /> -->
    </div>
    <div class="join_vank_section mt-5">
      <div class="d-flex justify-content-center">
        <h1>
          Earn commission when <br />
          you refer a subscriber
        </h1>
      </div>
      <div class="view__assets__wrap text-center">
        <button class="assets__link">
          <span class="px-3">Get link</span>
        </button>
      </div>
    </div>
    <div class="faqs__wrap">
      <div class="faqs__content py-3">
        <h1>Frequently Asked Questions</h1>
        <h3 class="py-2">Most commonly asked questions about VANK</h3>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q1: How does VANK work?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A1: VANK Wallet enables you put aside part of your savings in real
              estate. You become a part owner of a verified land with potential
              for higher returns and with controlled risk compared to keeping
              your money in the bank or using it for other types of business.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of First Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q2: How can I use VANK?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A2: You can use VANK as a savings medium for higher return. Once
              you have more than N100,000 worth of holdings in your wallet, you
              can take a low interest loan against your holdings.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Second Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q3: How do I make money with VANK
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A3: You make money mostly from the rise in the value of your land
              holding on the VANK wallet. You may choose to sell your holding at
              any time. Other exciting ways for you to make money will be
              unveiled soon.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Third Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q4: What kind of property are listed on VANK?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A4: We currently have land in viable locations in select states in
              Nigeria. After far-reaching due diligence lands are onboarded onto
              the VANK network for subscription by users. We give preference to
              greenfield land which tend to have the greatest potential for
              price gain.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Fourth Question -->
        <div class="register_button_wrap text-center mt-3 py-4">
          <nuxt-link to="/faqs" class="assets__link">
            <span class="px-3">View all FAQs</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <footer-section />
  </div>
</template>

<script>
import header_nav from "~/components/header_nav.vue";
export default {
  components: { header_nav },
  name: "IndexPage",
  data() {
    return {
      // btc_cap: {},
      // btc_price: "",
      // eth_cap: {},
      // eth_price: "",
      // bnb_cap: {},
      // bnb_price: "",
      // bit_percent_change: "",
      // eth_percent_change: "",
      // bnb_percent_change: "",
      // bnb: {},
      // btc: {},
      // eth: {},
      // new_btc: {},
      // new_eth: {},
      // new_bnb: {},
      // cryptoUrl: "https://data.messari.io/api/v1/assets/",
    };
  },
  methods: {
    // async get_btc() {
    //   const res = await this.$axios.get(this.cryptoUrl + "btc/metrics");

    //   this.btc_cap = res.data;
    //   this.btc = this.btc_cap.data.market_data;
    //   this.btc_price = this.btc.price_usd.toFixed(2);
    //   this.new_btc = this.btc.percent_change_usd_last_24_hours;
    //   this.bit_percent_change = this.new_btc.toFixed(2);
    //   if (this.bit_percent_change < 1) {
    //     document.getElementById("btc_percent").style.color = "red";
    //   } else {
    //     document.getElementById("btc_percent").style.color = "green";
    //   }
    // },
    // async get_eth() {
    //   const res = await this.$axios.get(this.cryptoUrl + "eth/metrics");

    //   this.eth_cap = res.data;
    //   this.eth = this.eth_cap.data.market_data;
    //   this.eth_price = this.eth.price_usd.toFixed(2);
    //   this.new_eth = this.eth.percent_change_usd_last_24_hours;
    //   this.eth_percent_change = this.new_eth.toFixed(2);
    //   if (this.eth_percent_change < 1) {
    //     document.getElementById("eth_percent").style.color = "red";
    //   } else {
    //     document.getElementById("eth_percent").style.color = "green";
    //   }
    // },
    // async show_bnb() {
    //   const response = await this.$axios.get(
    //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin"
    //   );
    //   this.bnb = response.data;
    //   this.bnb_cap = this.bnb[0];
    //   this.bnb_price = this.bnb_cap.current_price;
    //   this.bnb_percent_change =
    //     this.bnb_cap.price_change_percentage_24h.toFixed(2);
    //   if (this.bnb_percent_change < 1) {
    //     document.getElementById("bnb_percent").style.color = "red";
    //   } else {
    //     document.getElementById("bnb_percent").style.color = "green";
    //   }
    // },

    typed_text() {
      var typed = new Typed(".type", {
        strings: ["Real Estate", "US Dollars"],
        showCursor: false,
        typeSpeed: 150,
        backSpeed: 70,
        loop: true,
      });
    },
  },
  mounted() {
    this.typed_text();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Karla&family=Lato&family=Nunito&family=Plus+Jakarta+Sans&family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  text-decoration: none !important;
}
.home_wrap {
  background-color: #fff;
}
.hero_section {
  padding: 100px;
  background-image: url("/new_bg.png");
  background-size: cover;
  min-height: 100vh;
  color: #fff;
}
.hero_section h1 {
  text-align: center;
  font-size: 56px;
  font-weight: 700;
  font-family: "Titillium Web", sans-serif;
}
.hero_section span {
  color: #00e8fe;
}
.hero_section .hero__content {
  padding-top: 200px;
}
/* .trending__wrap {
  text-align: center;
} */
.trending__wrap h1 {
  color: #0f1843;
  font-weight: 600;
}
.trending__wrap p {
  color: #04363a;
  font-weight: 500;
  font-size: 20px;
}
.trending__wrap .text__wrap {
  border-bottom-left-radius: 50px;
}
.trending__wrap .text__wrap p {
  font-size: 14px;
  font-weight: 500;
  word-spacing: 1px;
}
.trending__wrap .text__wrap span {
  font-size: 14px;
  font-weight: 600;
}
.trending__wrap .text__wrap h6 {
  font-weight: 600;
  letter-spacing: 1px;
}
.view__assets__wrap {
  margin-top: 20px;
}
.view__assets__wrap .assets__link {
  border: 1px solid #00e8fe;
  padding: 10px 2px;
  border-radius: 4px;
}
.register_button_wrap .assets__link {
  border: 1px solid #00e8fe;
  padding: 12px 2px;
}
.register_button_wrap .assets__link span {
  color: #001214;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid #00e8fe;
  padding: 10px 5px;
  font-size: 14px;
}
.view__assets__wrap .assets__link span {
  background-color: #fff;
  border: 1px solid #00e8fe;
  padding: 10px 2px;
  font-size: 14px;
}
.img__wrap {
  position: relative;
}
.img__wrap .cardz {
  background-color: #ffff;
  border-top-right-radius: 35px;
  border-bottom-left-radius: 30px;
  box-shadow: 1px 2px 1px #c5cbcc;
}
.img__wrap .sale__notification {
  position: absolute;
  z-index: 999;
  background-color: #00e8fe;
  width: 120px;
  height: 50px;
  padding: 10px 20px;
}
.img__wrap .sale__notification p {
  color: #04363a;
  font-size: 16px;
}
.img__wrap .img {
  border-top-right-radius: 40px;
}
.reg_link {
  border: 1px solid #ffff;
  color: #000;
  border-radius: 5px;
  padding: 10px 0;
  font-size: 18px;
}
.explore_wrap {
  border: 1px solid #00e8fe;
  color: #000;
  border-radius: 5px;
  padding: 10px 0;
  font-size: 18px;
}
.new_signup {
  background-color: #00e8fe;
  padding: 7px 25px;
  border-radius: 4px;
}
.new_signup:hover {
  background-color: #00e9feb2;
}
.explore_link {
  background-color: #fff;
  padding: 7px 25px;
  border-radius: 4px;
}
.explore_link:hover {
  background-color: rgba(255, 255, 255, 0.508);
}
.typed_text {
  height: 50px;
  padding: 10px;
}
.typed_text span {
  /* margin-top: 10px; */
}
.typed_text h1 {
  color: #00e8fe;
}
.typed_text span {
  font-size: 50px;
  font-weight: bold;
  cursor: none !important;
}
.vank_cap {
  color: #00e8fe;
}
.vank_capp {
  color: #0f1843;
}
.card_shadow {
  height: 100%;
  width: 90%;
  box-shadow: 2px 15px 35px rgba(0, 0, 0, 0.25);
}
.bitcoin_card,
.etherium_card,
.bitcash_card {
  border: 3px solid #00e8fe;
  height: 90%;
  border-radius: 15px;
  padding: 20px 50px;
}
hr {
  background-color: #c5cbcc70 !important;
  margin-top: 20px;
}
.grey_bg {
  height: 5%;
  padding: 0 5px;
  background-color: #c5cbcc;
  font-size: 14px;
  border-radius: 5px;
  color: #000;
}
.wallet_icon {
  background-color: #2a304c;
  font-size: 50px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(30deg);
}
.purple_text {
  font-size: 25px;
  align-self: center;
}
.btc_arrow {
  width: 50px !important;
  height: 2rem !important;
}
.convenience_wrap img {
  height: 100px !important;
}
.experience_wrap {
  height: 100%;
}
.token_v_wrap {
  background-image: url("/token_v.png");
  background-size: contain;
  /* height: 150px; */
}
.managed_risk_wrap {
  background-image: url("/managed_risk.png");
  background-size: contain;
  /* height: 150px; */
}
.card_section {
  margin-top: 100px;
}
.card_section img {
  width: 100%;
}
/* .charts {
  height: 100%;
} */
.how_it_works {
  padding: 40px 100px;
  background-color: #fff;
}
.how_it_works h1 {
  color: #0f1843;
  font-weight: 600;
  font-size: 56px;
}
.how_it_works p,
.how_it_works h3 {
  margin-top: 20px;
  font-size: 23px;
  font-weight: 500;
}
.cards_img {
  height: 200px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.register_button {
  background-color: #00e8fe;
  padding: 10px 20px;
  color: #000;
  border-radius: 5px;
  font-size: 20px;
}
.register_button:hover {
  background-color: #00e9fea8;
}
.join_vank_section {
  background-image: url("/commission.png");
  background-blend-mode: overlay;
  min-height: 70vh;
  background-size: cover;
  padding: 150px 10px;
}
.join_vank_section h1 {
  text-align: center;
  color: #00e8fe;
}
.why_choose_us {
  background-image: url("/fmf.webp");
  background-size: cover;
  background-blend-mode: overlay;
  min-height: 100vh;
  background-color: rgba(15, 24, 67, 0.53);
  margin-top: 100px;
  border: 10px solid #00e8fe;
  border-radius: 10px;
  padding: 30px 100px;
}
.why_choose_us h1 {
  color: #f2f5f6;
  font-weight: 700;
  font-size: 56px;
  /* padding-top: 40px; */
}
.why_choose_us h5 {
  font-weight: 500;
  margin-top: 20px;
  color: #fff;
}
.why_choose_us .first__card {
  display: grid;
  place-items: center;
}
/* .why_choose_us .third__card {
  display: flex;
  justify-content: center;
} */
.why_choose_us .fourth__card {
  margin-top: 150px;
}
.why_choose_us .first__card h5,
.why_choose_us .second__card h5,
.why_choose_us .third__card h5,
.why_choose_us .fourth__card h5 {
  color: #00e8fe;
  font-size: 18px;
}
.why_choose_us .first__card p,
.why_choose_us .second__card p,
.third__card p,
.why_choose_us .fourth__card p {
  color: #f2f5f6;
  font-size: 16px;
}
.why_choose_us .second__card {
  margin-top: 100px;
  display: grid;
  place-items: center;
}
.why_choose_us .img__section img {
  width: 100%;
}
.how_it_works_child {
  border: 1px solid #00e8fe;
  border-radius: 10px;
  width: 320px;
  margin-bottom: 10px;
  text-align: center;
}
.how_it_works .head__wrap h4 {
  font-size: 16px;
  font-weight: 600;
}
.how_it_works .write_up_wrap p {
  font-size: 13px;
}
.how_it_works_child .img_wrap .img {
  width: 60px;
}

.faqs__wrap {
  padding: 0 100px;
  background-color: #f8feff;
}
.faqs__content {
  margin: 0 auto;
  background-color: #f8feff !important;
  width: 70%;
}
.faqs__content h1 {
  font-size: 52px;
  font-weight: bold;
  color: #0f1843;
}
.faqs__wrap .theme--light.v-expansion-panels .v-expansion-panel {
  border-radius: 0 !important;
  box-shadow: none !important;
  border: none !important;
}
.faqs__wrap .v-expansion-panel-header {
  justify-content: space-between !important;
  background-color: #f8feff !important;
  border-bottom: 1px solid #b6858530 !important;
  border-right: none !important;
  border-radius: 0px !important;
  box-shadow: none !important;
  padding: 30px 20px !important;
}
.faqs__wrap .v-expansion-panel-content__wrap {
  background-color: #f2f5f7 !important;

  border-bottom: 1px solid #30303030 !important;
  padding: 30px 20px !important;
}
.faqs__wrap .v-expansion-panel::before {
  box-shadow: none !important;
}

@media (max-width: 767px) {
  .hero_section {
    padding: 30px 10px;
    min-height: 50vh;
  }

  .hero_section .hero__content {
    padding-top: 150px;
  }
  .trending__wrap {
    display: unset;
  }
  .trending__wrap h1 {
    font-size: 25px;
  }
  .trending__wrap p {
    font-size: 16px;
  }

  .img__wrap .img {
    width: 100%;
  }
  .hero_section h1,
  .typed_text span {
    font-size: 25px;
    margin-top: 15px;
  }
  .card_section {
    margin-top: 0;
  }
  .card_section img {
    width: 100%;
  }
  .reg_link,
  .new_signup,
  .explore_wrap {
    font-size: 13px;
  }
  .register_button {
    font-size: 15px;
  }
  .bitcoin_card,
  .etherium_card,
  .bitcash_card {
    border-radius: 15px;
    padding: 20px;
  }
  .crypto_bucket_section {
    margin: 0 !important;
    height: 100%;
  }
  /* .how_it_works_child {
    margin: 0 !important;
  } */
  .how .env_input {
    width: 40%;
    padding: 4px 8px;
  }
  .env_input::placeholder {
    font-size: 11px;
  }
  .how_it_works {
    padding: 10px;
  }
  .how_it_works h1 {
    font-size: 25px;
    padding-top: 10px;
  }
  .how_it_works h3 {
    font-size: 15px;
  }
  .how_it_works p {
    font-size: 15px;
  }
  .cards_img {
    max-width: 100% !important;
  }
  .how_it_works_child {
    width: 100%;
  }

  .why_choose_us {
    padding: 10px;
  }
  .why_choose_us h1 {
    font-size: 20px;
  }
  .why_choose_us h5 {
    margin-top: 15px;
    font-size: 13px;
  }
  .why_choose_us {
    min-height: 50vh;
  }

  .why_choose_us .first__card {
    display: grid;
    place-items: center;
  }
  .why_choose_us .first__card h5,
  .why_choose_us .second__card h5,
  .why_choose_us .third__card h5,
  .why_choose_us .fourth__card h5 {
    color: #00e8fe;
    font-size: 15px;
  }
  .why_choose_us .first__card p,
  .why_choose_us .second__card p,
  .why_choose_us .third__card p,
  .why_choose_us .fourth__card p {
    color: #f2f5f6;
    font-size: 13px;
  }
  .why_choose_us .second__card,
  .why_choose_us .fourth__card {
    margin-top: 0;
    display: grid;
    place-items: center;
  }

  .why_choose_us .img__section {
    display: none;
  }
  .faqs__wrap {
    padding: 10px;
  }
  .faqs__wrap .v-expansion-panel-header,
  .faqs__wrap .v-expansion-panel-content__wrap {
    font-size: 13px;
  }

  .faqs__content {
    margin: 0;
    width: 100%;
    padding: 7px !important;
  }
  .faqs__content h1 {
    font-size: 27px;
  }
  .faqs__content h3 {
    font-size: 15px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .card_shadow {
    height: 300px;
  }
}
</style>
