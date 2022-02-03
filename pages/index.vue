<template>
  <div class="home_wrap">
    <header-nav />
    <div class="hero_section">
      <h1>Make Smarter Moves,</h1>
      <div class="d-flex typed_text align-items-center justify-content-center">
        <h1>Save in #</h1>
        <span class="type"></span>
      </div>
      <div class="registration_wrap text-center mt-4">
        <nuxt-link to="/sign_up" class="reg_link">Sign up for free</nuxt-link>
      </div>
      <div class="card_section">
        <div class="row">
          <div class="col-md-4">
            <div class="bitcoin_card mt-3 mx-2" data-aos="fade-up">
              <v-img lazy-src="/bitcoin.png" src="/bitcoin.png" alt="image" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="etherium_card mt-3 mx-2" data-aos="fade-up">
              <v-img lazy-src="/ether.png" src="/ether.png" alt="image" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="bitcash_card mt-3 mx-2" data-aos="fade-up">
              <v-img lazy-src="/bitcash.png" src="/bitcash.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="how_it_works" id="how_it_works">
      <div class="text-center">
        <h1>How VANK Works</h1>
        <h3>
          Simple and easy way to start your <br />
          savings with <span class="vank_cap">VANK</span>
        </h3>
      </div>

      <div class="row mt-5 align-items-center">
        <div class="col-md-6">
          <div class="crypto_bucket_section mx-5">
            <v-img src="/bitbucket.png" lazy-src="/bitbucket.png" alt="image" />
          </div>
        </div>
        <div class="col-md-6" data-aos="fade-up">
          <div class="how_it_works_child d-flex align-items-center">
            <div class="img_wrap mt-3">
              <v-img
                lazy-src="/grey_contact.png"
                src="/grey_contact.png"
                alt="image"
              />
            </div>
            <div class="write_up_wrap ml-3">
              <p>Sign up and choose a monthly savings plan.</p>
            </div>
          </div>
          <div class="how_it_works_child d-flex align-items-center">
            <div class="img_wrap mt-3">
              <v-img lazy-src="/hands.png" src="/hands.png" alt="image" />
            </div>
            <div class="write_up_wrap ml-3">
              <p>We turn your savings into your preferred assets.</p>
            </div>
          </div>
          <div class="how_it_works_child d-flex align-items-center">
            <div class="img_wrap mt-3">
              <v-img
                lazy-src="/money_bagg.png"
                src="/money_bagg.png"
                alt="image"
              />
            </div>
            <div class="write_up_wrap ml-3">
              <p>
                With us you get superior returns then leaving all <br />
                your money in the bank
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="register_button_wrap text-center mt-3 py-4">
        <nuxt-link to="/sign_up" class="register_button"
          >Start your savings with VANK</nuxt-link
        >
      </div>
    </div>
    <div class="why_choose_us">
      <div class="text-center">
        <h1>Why Choose Us</h1>
        <h5>
          You get amazing benefits when <br />
          you save with <span class="vank_cap">VANK</span>
        </h5>
      </div>
      <cards />
    </div>
    <div class="join_vank_section">
      <nuxt-img
        format="webp"
        quality="90"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw"
        src="/vank_home.png"
      />
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
      btc: "",
      eth: "",
      bnb: "",
      cryptoUrl: "https://api.coingecko.com/api/v3/coins/",
    };
  },
  methods: {
    async get_btc_price() {
      const response = await this.$axios.get(
        this.cryptoUrl + "markets?vs_currency=usd&ids=bitcoin"
      );
      this.btc = response;
      console.log(this.btc.data);
    },
    async get_eth_price() {
      const response = await this.$axios.get(
        this.cryptoUrl + "markets?vs_currency=usd&ids=ethereum"
      );
      this.eth = response;
      console.log(this.eth.data);
    },
    async get_bnb_price() {
      const response = await this.$axios.get(
        this.cryptoUrl + "markets?vs_currency=usd&ids=binancecoin"
      );
      this.bnb = response;
      console.log(this.bnb.data);
    },
    typed_text() {
      var typed = new Typed(".type", {
        strings: ["Crypto", "USDollars", "Digital Assets"],
        showCursor: false,
        typeSpeed: 150,
        backSpeed: 70,
        loop: true,
      });
    },
  },
  mounted() {
    this.typed_text();
    this.get_btc_price();
    this.get_eth_price();
    this.get_bnb_price();
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
.home_wrap {
  background-color: #0d153a;
}
.hero_section {
  padding: 100px;
  background-image: url("/vank_hero.jpg");
  background-size: cover;
  min-height: 100vh;
  color: #fff;
}
.hero_section h1 {
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  font-family: "Titillium Web", sans-serif;
}
.hero_section span {
  color: #00e8fe;
}
.reg_link {
  background-color: #00e8fe;
  padding: 10px 20px;
  color: #000;
  border-radius: 5px;
  font-size: 18px;
}
.reg_link:hover {
  background-color: #00e9feb2;
}
.typed_text {
  height: 100px;
  padding: 10px;
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
  color: #1d83c5;
}
.card_shadow {
  height: 100%;
  width: 90%;
  box-shadow: 2px 15px 35px rgba(0, 0, 0, 0.25);
}
/* .convenience_wrap {
  background-image: url("/convenience.png");
  background-size: contain;
  height: 150px;
} */
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
  margin-top: 200px;
}
.card_section img {
  width: 100%;
}
.how_it_works {
  padding: 40px 100px;
  background-color: #fff;
}
.how_it_works h1 {
  color: #1d83c5;
  font-weight: 600;
  font-size: 56px;
}
.how_it_works p,
.how_it_works h3 {
  margin-top: 20px;
  font-size: 23px;
  font-weight: 600;
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

.why_choose_us {
  padding: 40px 100px;
  background-color: #fff;
  margin-top: 100px;
}
.why_choose_us h1 {
  color: #1d83c5;
  font-weight: 700;
  font-size: 56px;
}
.why_choose_us h5 {
  font-weight: 600;
  margin-top: 20px;
}

/* .join_vank_section {
  background-image: url("/vank_home.png");
  min-height: 100vh;
  background-size: cover;
  margin-top: 100px;
} */

@media (max-width: 767px) {
  .hero_section {
    padding: 10px;
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
  .reg_link {
    font-size: 15px;
  }
  .register_button {
    font-size: 15px;
  }
  .crypto_bucket_section {
    margin: 0 !important;
    height: 100%;
  }
  .how_it_works_child {
    margin: 0 !important;
  }
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
  .join_vank_section img {
    /* width: 100%; */
    /* height: 220px; */
    /* object-fit: fill; */
  }

  .why_choose_us {
    padding: 10px;
  }
  .why_choose_us h1 {
    font-size: 30px;
  }
  .why_choose_us h5 {
    margin-top: 15px;
    font-size: 15px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .card_shadow {
    height: 300px;
  }
}
</style>
