<template>
  <div>
    <div class="lagos_card">
      <div class="row">
        <div
          v-for="property in uyoProperty"
          :key="property.index"
          class="col-md-4"
        >
          <div class="card_wrap">
            <div
              @click="
                $router.push(`/user_dashboard/asset_detail/${property.id}`)
              "
              class="general_trends"
              :style="{ backgroundImage: 'url(' + property.image + ')' }"
            >
              <div class="sale_notification">
                <span
                  v-if="property.token_quantity_subscribed.length > 0"
                  style="font-size: 12px"
                  class="text-dark"
                  >{{ property.token_quantity_subscribed }} tokens Sold</span
                >
                <span v-else style="font-size: 12px" class="text-dark"
                  >{{ property.token_quantity_subscribed }}% tokens Sold</span
                >
              </div>
              <div class="opaque_text">
                <p v-if="property.coordinates">{{ property.coordinates }}</p>
                <p v-else>
                  Coordinates: <br />
                  4724”12.2N 384231.7E
                </p>
              </div>
            </div>

            <div class="text_wrap bg-white px-3 py-2">
              <p>
                Land in {{ property.layout_name }} -
                <span v-if="property.size">{{ property.size }}SQM</span>
                <span v-else>650SQM</span>
              </p>
              <div class="d-flex justify-content-between">
                <h6>{{ property.location }}</h6>
                <ion-icon
                  @click="bookmark(property)"
                  style="color: #00e8fe"
                  name="bookmark-outline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style="display: grid; margin-top: 50px; place-items: center"
        v-if="uyoProperty.length === 0"
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
      uyoProperty: {},
    };
  },
  methods: {
    async getUyoAsset() {
      try {
        let response = await this.$axios.get("/getAssetInUyo");
        this.uyoProperty = response.data;
        console.log(this.uyoProperty);
      } catch (error) {
        console.log(error.response);
      }
    },
    async bookmark(property) {
      try {
        let response = await this.$axios.post(`/bookmarkAsset/${property.id}`);
        console.log(response);
        this.$toast.success("Asset has been added to your bookmarks", {
          timeout: 5000,
        });
      } catch (error) {
        console.log(error.response);
        this.$toast.warning(
          "Ooops!!! You have to register inorder to bookmark",
          {
            timeout: 5000,
          }
        );
        // this.$router.push("/sign_up");
      }
    },
  },
  created() {
    this.getUyoAsset();
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
  /* background-image: url("/asset2.jpg"); */
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

@media (max-width: 768px) {
  .lagos_card {
    padding: 7px;
  }
}
</style>