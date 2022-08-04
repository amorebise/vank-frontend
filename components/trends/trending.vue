<template>
  <div class="trends">
    <div class="assets__card mt-2 px-2">
      <div class="row">
        <div
          v-for="trending in trendingAssets"
          :key="trending.index"
          class="col-md-4 px-1 mb-2"
          @click="$router.push(`/user_dashboard/asset_detail/${trending.id}`)"
        >
          <img :src="trending.image" alt="" />
          <div class="general__trends">
            <div class="trending__content">
              <div>
                <p>Epe</p>
                <p>Lagos</p>
                <p>Token 002</p>
              </div>
            </div>
            <div class="text__wrap bg-white px-3 py-3">
              <p>Land in {{ trending.location }} - <span>650SQM</span></p>
              <div class="d-flex justify-content-between">
                <h6>{{ trending.layout_name }} Estate</h6>
                <ion-icon style="color: #00e8fe" name="bookmark-outline" />
                <!-- <ion-icon style="color: #00e8fe" name="bookmark" /> -->
              </div>
            </div>
          </div>
        </div>
        <div v-if="trendingAssets.length == 0">
          <h1>You currently do not have any assets</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trendingAssets: {},
    };
  },
  methods: {
    async getTrendingAssets() {
      try {
        let response = await this.$axios.get("/getTrendingAsset");
        this.trendingAssets = response.data;
        console.log(this.trendingAssets);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  created() {
    this.getTrendingAssets();
  },
};
</script>

<style>
.trends .general__trends {
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
}
@media (max-width: 768px) {
}
</style>