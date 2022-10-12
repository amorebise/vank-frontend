<template>
  <div>
    <header-nav />
    <div class="about_us_wrap mt-5">
      <div class="hero__section">
        <div class="text-center">
          <h1>ABOUT</h1>
          <nuxt-img format="webp" style="width: 250px" quality="90" src="/v.svg" />
        </div>
      </div>
      <div class="we__are__vank">
        <div class="row">
          <div class="col-md-6">
            <div class="bg__img  mb-2">
              <!-- <img src="/elipsis.svg" alt="" /> -->
              <nuxt-img class="elips" format="webp" style="width: 150px" quality="90" src="/elipsis.svg" />
              <div class="property__wrap">
                <nuxt-img format="webp" style="width: 350px" quality="90" src="/propty.svg" />
              </div>
              <div class="elips__wrap">
                <nuxt-img class="elips" format="webp" style="width: 150px" quality="90" src="/elipsis.svg" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text__wrap  mb-2">
              <h1>We Are <span style="color: #00e8fe">VANK</span></h1>
              <p>
                Your trusted wallet for digitized real estate. <br />
                VANK enables users to conveniently turn a fraction <br />
                of their savings into higher-yielding digital assets. <br />
                You can save your money in US Dollars, Crypto and <br />
                Phygital Assets on our App. You only need your phone <br />
                to join!
              </p>
              <p>How cool is that?</p>
              <div class="register_wrap mt-3 py-4">
                <nuxt-link to="/auth/sign_up" class="register_link">Join VANK</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="value__section">
        <div class="row go__down">
          <div class="col-md-4 d-flex mb-2 justify-content-center">
            <div style="text-align: center" class="value__cards">
              <div class="pt-2">
                <nuxt-img format="webp" style="width: 150px" quality="90" src="/glass.svg" />
                <h6>Vision</h6>
                <div class="mt-4">
                  <p>
                    To be the leading bank for real estate and digital assets in
                    africa
                  </p>
                </div>
                <p></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex mb-2 justify-content-center">
            <div style="text-align: center" class="value__cards">
              <div class="pt-2">
                <nuxt-img format="webp" style="width: 100px" quality="90" src="/share.svg" />
                <div class="mt-3">
                  <h6>Mission</h6>
                  <div class="mt-4">
                    <p>
                      To offer the most secure <br />
                      wallet for high yielding real estate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex mb-2 justify-content-center">
            <div style="text-align: center" class="value__cards">
              <div class="pt-2">
                <nuxt-img format="webp" style="width: 100px" quality="90" src="/value.svg" />
                <div class="mt-3">
                  <h6>Core Values</h6>
                  <div class="mt-4">
                    <p>Trust</p>
                    <p>Community</p>
                    <p>Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="blue__elips">
          <img src="/blue_elips.svg" alt="" />
        </div>
      </div>
    </div>

    <footer-section />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Karla&family=Lato&family=Nunito&family=Plus+Jakarta+Sans&family=Space+Grotesk&family=Titillium+Web&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  text-decoration: none !important;
}

.about_us_wrap .hero__section {
  padding: 100px;
  background-image: url("/abt_us.png");
  background-color: rgba(15, 24, 67, 0.55);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  height: 450px;
  color: #fff;
  display: grid;
  place-items: center;
}

.about_us_wrap .value__section {
  position: relative;
  background-color: #0b1e51;
  margin-top: 170px;
  padding: 40px;
  /* height: 100%; */
}

/* .about_us_wrap .blue__elips {
  position: absolute;
} */
.about_us_wrap .blue__elips img {
  position: absolute;
  right: 0;
  top: 250px;
  z-index: 10;
  width: 150px;
}

.about_us_wrap .go__down {
  /* margin-top: 150px; */
}

.about_us_wrap .value__section .value__cards {
  position: relative;
  border-radius: 10px;
  width: 90%;
  height: 350px;
  background-color: #fff;
  z-index: 1000;
  padding: 10px;
}

.about_us_wrap .bg__img {
  padding: 100px;
  position: relative;
}

.about_us_wrap .text__wrap {
  padding-top: 150px;
}

.about_us_wrap .text__wrap h1 {
  font-weight: 600;
}

.about_us_wrap .text__wrap p {
  letter-spacing: 2px;
  margin-top: 20px;
}

.about_us_wrap .bg__img .property__wrap {
  position: absolute;
  top: 165px;
  left: 140px;
  z-index: 1000;
}

.about_us_wrap .bg__img .elips__wrap {
  position: absolute;
  top: 410px;
  right: 145px;
}

.about_us_wrap .hero__section h1 {
  color: #00e8fe;
  font-weight: 700;
  font-size: 60px;
  letter-spacing: 7px;
  font-family: "Titillium Web", sans-serif;
}

.write_up_wrap h5 {
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
  word-spacing: 3px;
  letter-spacing: 5px;
}

.write_up_wrap p {
  font-size: 30px;
  margin-top: 10px;
  word-spacing: 2px;
  letter-spacing: 2px;
}

.register_link {
  background-color: #00e8fe;
  padding: 10px;
  color: #000;
  border-radius: 3px;
  font-weight: 600;
}

.register_link:hover {
  background-color: #00e9feb6;
}

@media (max-width: 768px) {
  .about_us_wrap .hero__section {
    padding: 10px;
  }

  .write_up_wrap h1 {
    font-size: 30px;
  }

  .write_up_wrap h5 {
    font-size: 17px;
    margin-top: 7px;
  }

  .write_up_wrap p {
    font-size: 15px;
    margin-top: 20px;
  }

  .elips {
    display: none;
  }

  .about_us_wrap .bg__img {
    padding: 0;
    margin-top: 10px;
    position: unset;
  }

  .about_us_wrap .bg__img .property__wrap {
    position: unset;
    z-index: 1000;
  }

  .about_us_wrap .text__wrap {
    padding-top: 10px;
  }

  .about_us_wrap .text__wrap h1 {
    font-size: 30px;
  }

  .about_us_wrap .text__wrap p {
    font-size: 12px;
    letter-spacing: 1px;
  }

  .about_us_wrap .we__are__vank {
    padding: 10px;
  }

  .about_us_wrap .value__section {
    margin-top: 10px;
    padding: 10px;
    /* height: 100%; */
  }

  .about_us_wrap .value__section .value__cards {
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 1000;
  }
}
</style>