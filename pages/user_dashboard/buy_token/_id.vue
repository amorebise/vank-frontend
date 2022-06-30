<template>
  <div class="w-100">
    <div class="but__token__content">
      <user-nav name="Buy Tokens" />
      <div class="">
        <div class="token__p">
          <p>LoT: Pyanko (Min ROI: 9.2% PA</p>
        </div>
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
          <div class="text-center mt-3 py-4">
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
.but__token__content {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
}
a {
  color: inherit;
}
.but__token__content .asset__content {
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
}
.but__token__content .asset__content p {
  opacity: 0;
  font-size: 30px;
}
.but__token__content .asset__content h4 {
  opacity: 0;
  color: #00e8fe;
}
.but__token__content .font__text {
  font-size: 10px;
}
.but__token__content .asset__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.but__token__content .asset__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.but__token__content .asset__content:hover h4 {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.but__token__content .description__wrap {
  padding-top: 100px;
}
.but__token__content .description__wrap p {
  line-height: 25px;
  font-weight: 500;
  font-size: 16px;
}
.but__token__content .description__wrap span {
  color: #00e8fe;
}
.but__token__content .token__wrap {
  border: 1px solid #00e8fe;
  padding: 50px 20px;
  border-radius: 5px;
}
.but__token__content label {
  font-size: 14px;
  font-weight: 600;
}
.but__token__content .form-control {
  width: 50%;
  box-shadow: none;
}
.but__token__content .form-control:focus {
  border-color: #0012144b;
}
.but__token__content input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.but__token__content .token__box {
  border: 1px solid #0012142e;
  border-radius: 3px;
  width: 100px;
}
.but__token__content .assets__link {
  border: 1px solid #00e8fe;
  padding: 10px 2px;
}
.but__token__content .assets__link span {
  border: 1px solid #00e8fe;
  padding: 7px 2px;
}

@media (max-width: 768px) {
  .but__token__content {
    margin-left: 0 !important;
    padding: 0;
  }
  .settings_wrap {
    margin: 10px;
  }
  .but__token__content .token__wrap {
    margin: 10px;
    padding: 10px;
    border-radius: 0;
  }
  .but__token__content .asset__content {
    background-image: url("/asset.jpg");
    background-size: cover;
    border-radius: 0;
    box-shadow: 2px 2px 2px #303030;
    color: #001214;
    position: relative;
    height: 300px;
    transition: ease-in-out 0.3s;
    color: #fff;
    display: grid;
    place-items: center;
    font-weight: 500;
    font-size: 15px;
    border: none;
    /* gap: 10px; */
  }
  .but__token__content .description__wrap {
    padding-top: 10px;
  }
  .token__p {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>