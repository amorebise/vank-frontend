<template>
  <div>
    <div class="lagos_card">
      <div class="row">
        <div
          v-for="property in lagosProperty"
          :key="property.index"
          class="col-md-4"
        >
          <div
            class="card_wrap"
            @click="$router.push(`/user_dashboard/asset_detail/${property.id}`)"
          >
            <div class="general_trends">
              <div class="sale_notification">
                <span class="text-dark">90% Sold</span>
              </div>
              <div class="opaque_text">
                <p>
                  Coordinates: <br />
                  4724”12.2N 384231.7E
                </p>
              </div>
            </div>

            <div class="text_wrap bg-white px-3 py-2">
              <p>Land in {{ property.layout_name }} - <span>650SQM</span></p>
              <div class="d-flex justify-content-between">
                <h6>FCDA Estate</h6>
                <ion-icon style="color: #00e8fe" name="bookmark-outline" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-5"
        style="display: grid; place-items: center"
        v-if="lagosProperty.length === 0"
      >
        <img style="width: 50px" src="/assets.webp" alt="asset image" />
        <p>No asset to aquire for now</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lagosProperty: {},
    };
  },
  methods: {
    async getLagosAsset() {
      try {
        let response = await this.$axios.get("/getAssetInLagos");
        this.lagosProperty = response.data;
        console.log(this.lagosProperty);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  created() {
    this.getLagosAsset();
  },
};
</script>

<style>
.lagos_card .card_wrap {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
  border-radius: 10px;
  position: relative;
  transition: 1s;
}
.lagos_card .general_trends {
  background-image: url("/asset2.jpg");
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: #001214;
  position: relative;
  /* width: 350px; */
  height: 200px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
}
.lagos_card .general_trends:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
}
.lagos_card .general_trends .opaque_text {
  opacity: 0;
}
.lagos_card .general_trends:hover .opaque_text {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.lagos_card .sale_notification {
  position: absolute;
  z-index: 999;
  background-color: #00e8fe;
  width: 120px;
  height: 50px;
  padding: 10px 20px;
  top: 0;
  left: 0;
  border-top-left-radius: 10px;
  /* opacity: 0; */
}
.lagos_card .text_wrap {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.lagos_card .text_wrap p {
  font-size: 14px;
  font-weight: 500;
  word-spacing: 1px;
}
.lagos_card .text_wrap span {
  font-size: 14px;
  font-weight: 600;
}
.lagos_card .text_wrap h6 {
  font-weight: 600;
  letter-spacing: 1px;
}
</style>