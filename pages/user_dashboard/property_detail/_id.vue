<template>
  <div class="w-100">
    <div class="property">
      <user-nav name="Property Details" />
      <div class="mt-5 single__property">
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
        <div class="buy__token__wrap text-center mt-3 py-4">
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
.property {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
}
.single__property a {
  color: inherit;
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
.single__property .buy__token__wrap .assets__link {
  border: 1px solid #00e8fe;
  padding: 10px 2px;
}
.single__property .buy__token__wrap .assets__link span {
  border: 1px solid #00e8fe;
  padding: 7px 2px;
}

@media (max-width: 768px) {
  .property {
    margin-left: 0 !important;
    padding: 0;
  }
  .settings_wrap {
    margin: 10px;
  }
  .property .asset__content {
    border: none;
    border-radius: 0;
    box-shadow: 2px 2px 2px #303030;
  }
  .property .description__wrap p {
    font-size: 13px;
  }
  .property .description__wrap span {
    font-size: 13px;
  }
  .single__property {
    margin-top: 0 !important;
    padding: 20px;
  }
  .description__wrap {
    padding: 10px;
    margin-top: -25px;
  }
  .single__property .buy__token__wrap {
    margin-top: 0 !important;
  }
}
</style>