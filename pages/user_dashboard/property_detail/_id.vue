<template>
  <div class="w-100">
    <div class="property">
      <user-nav name="Property Details" />
      <div class="mt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="img_card">
              <div class="asset__content text-center">
                <div>
                  <p>&#x20A6;1.19K per unit</p>
                  <p>Min ROI: 9.2%PA</p>
                  <h4>Whole Price: &#x20A6;950,000</h4>
                  <p>Pyanko 1 Token</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="description__wrap">
              <p>Location: Karshi(Abuja/Nassarawa)</p>
              <p>Layout Name: Pyanko</p>
              <p>
                Distance to closest built up areas: <br />
                -2KM to Navy Estate- <br />
                about 4KM to Karshi <br />
                about 3.5KM to Orozo <br />
                about 3KM to Apo
              </p>
              <p>Population within 20KM radius: Over 200,000</p>
              <span>Est. minimum return 9.2%PA</span>
            </div>
          </div>
        </div>
        <div class="register_button_wrap text-center mt-3 py-4">
          <nuxt-link
            :to="`/user_dashboard/buy_token/${id}`"
            class="assets__link"
          >
            <span class="px-3">Buy Token</span>
          </nuxt-link>
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
.property {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
}
.property .asset__content {
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
.property .asset__content p {
  opacity: 0;
}
.property .asset__content h4 {
  opacity: 0;
  color: #00e8fe;
}
.property .asset__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.property .asset__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.property .asset__content:hover h4 {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.property .description__wrap p {
  line-height: 25px;
  font-weight: 500;
  font-size: 16px;
}
.property .description__wrap span {
  color: #00e8fe;
}

@media (max-width: 768px) {
  .property {
    margin-left: 0 !important;
    padding: 0;
  }
  .settings_wrap {
    margin: 10px;
  }
}
</style>