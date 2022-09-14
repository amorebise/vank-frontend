<template>
  <div>
    <div class="asset_cards">
      <div class="row">
        <div v-for="property in assets" :key="property.index" class="col-md-4">
          <div
            class="card_wrap mb-2"
            @click="$router.push(`/user_dashboard/asset_detail/${property.id}`)"
          >
            <div
              class="general_trends"
              :style="{ backgroundImage: 'url(' + property.image + ')' }"
            >
              <div class=" asset_text">
                <p v-if="property.layout_name">
                  {{ property.layout_name }}
                </p>
                <p v-else>Epe</p>
                <div>
                  <p v-if="property.location">
                    {{ property.location }}
                  </p>
                  <p v-else>Lagos</p>
                </div>
                <div>
                  <p v-if="property.token_name">
                    {{ property.token_name }}
                  </p>
                  <p v-else>token 001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style="display: grid; place-items: center"
        v-if="assets.length === 0"
      >
        <img style="width: 50px" src="/assets.webp" alt="asset image" />
        <p>You do not have any assets.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      assets: {},
    };
  },
  methods: {
    async getAssets() {
      try {
        let response = await this.$axios.get("/showAvailableAsset");
        // getSubscribedAsset
        this.assets = response.data.slice(0, 3);
        console.log(this.assets);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  created() {
    this.getAssets();
  },
};
</script>

<style>
.asset_cards .card_wrap {
  background: #ffffff;
  border-radius: 10px;
  position: relative;
  transition: 1s;
  cursor: pointer;
}
.asset_cards .general_trends {
  background-size: cover;
  border-radius: 10px;
  color: #001214;
  height: 200px;
  transition: ease-in-out 0.3s;
  color: #fff;
  font-weight: 500;
  font-size: 15px;
}
.asset_cards .general_trends:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
}
.asset_cards .general_trends .opaque_text {
  font-size: 13px;
  line-height: 3px;
  opacity: 0;
  display: grid;
  place-items: center;
  padding-top: 30px;
}
.asset_text {
  font-size: 13px;
  line-height: 3px;
  opacity: 0;
  display: grid;
  place-items: center;
  padding-top: 70px;
}
.asset_cards .general_trends:hover .opaque_text {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.asset_cards .general_trends:hover .asset_text {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.asset_cards .sale_notification {
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
.asset_cards .text_wrap {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.asset_cards .text_wrap p {
  font-size: 14px;
  font-weight: 500;
  word-spacing: 1px;
}
.asset_cards .text_wrap span {
  font-size: 14px;
  font-weight: 600;
}
.asset_cards .text_wrap h6 {
  font-weight: 600;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .asset_cards {
    padding: 7px;
  }
}
</style>