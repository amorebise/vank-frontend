<template>
  <div class="w-100">
    <div class="settings">
      <user-nav name="Buy Tokens" />
      <div class="">
        <p>LoT: Pyanko (Min ROI: 9.2% PA</p>
        <div class="token__wrap">
          <div class="row">
            <div class="col-md-6">
              <div class="img_card">
                <div class="asset__content text-center">
                  <div>
                    <p>&#x20A6;1.19K per token</p>
                    <p>75% sold</p>
                    <h4>483m <sup class="font__text">2</sup></h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="description__wrap">
                <form action="">
                  <div class="form-group">
                    <label>Enter Amount (NGN)</label>
                    <input type="number" class="form-control" />
                  </div>
                </form>
                <div class="d-flex">
                  <p>You get</p>
                  <p class="token__box px-3 mx-1"></p>
                  <p>tokens</p>
                </div>
              </div>
            </div>
          </div>
          <div class="register_button_wrap text-center mt-3 py-4">
            <nuxt-link to="/user_dashboard/payment" class="assets__link">
              <span class="px-3">Make Payment</span>
            </nuxt-link>
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
    return {};
  },
  methods: {},
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
.settings {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
}
.settings .asset__content {
  background-image: url("/asset.jpg");
  background-size: cover;
  border-radius: 10px;
  color: #001214;
  position: relative;
  height: 300px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
  border: 5px solid #00e8fe;
  /* gap: 10px; */
}
.settings .asset__content p {
  opacity: 0;
  font-size: 30px;
}
.settings .asset__content h4 {
  opacity: 0;
  color: #00e8fe;
}
.settings .font__text {
  font-size: 10px;
}
.settings .asset__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.settings .asset__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.settings .asset__content:hover h4 {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.settings .description__wrap {
  padding-top: 100px;
}
.settings .description__wrap p {
  line-height: 25px;
  font-weight: 500;
  font-size: 16px;
}
.settings .description__wrap span {
  color: #00e8fe;
}
.settings .token__wrap {
  border: 1px solid #00e8fe;
  padding: 50px 20px;
  border-radius: 5px;
}
.settings label {
  font-size: 14px;
  font-weight: 600;
}
.settings .form-control {
  width: 50%;
  box-shadow: none;
}
.settings .form-control:focus {
  border-color: #0012144b;
}
.settings input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.settings .token__box {
  border: 1px solid #0012142e;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .settings {
    margin-left: 0 !important;
    padding: 0;
  }
  .settings_wrap {
    margin: 10px;
  }
}
</style>