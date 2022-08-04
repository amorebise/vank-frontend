<template>
  <div>
    <div class="lagos_card">
      <div class="row">
        <div
          v-for="bookmark in myBookmarks"
          :key="bookmark.index"
          class="col-md-4"
        >
          <div
            class="card_wrap"
            @click="
              $router.push(
                `/user_dashboard/lagos_property_detail/${bookmark.id}`
              )
            "
          >
            <div
              class="general_trends"
              :style="{ backgroundImage: 'url(' + bookmark.image + ')' }"
            >
              <div class="sale_notification">
                <span style="font-size: 12px" class="text-dark"
                  >{{ bookmark.token_quantity_subscribed }} tokens Sold</span
                >
              </div>
              <div class="opaque_text">
                <p>
                  Coordinates: <br />
                  4724”12.2N 384231.7E
                </p>
              </div>
            </div>

            <div class="text_wrap bg-white px-3 py-2">
              <p>Land in {{ bookmark.layout_name }} - <span>650SQM</span></p>
              <div class="d-flex justify-content-between">
                <h6>{{ bookmark.location }} Estate</h6>
                <ion-icon style="color: #00e8fe" name="bookmark" />
              </div>
            </div>
          </div>
          <div
            style="display: grid; place-items: center"
            v-if="myBookmarks.length === 0"
          >
            <p>No asset to aquire for now</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // components: { creator_sidebar },
  data() {
    return {
      myBookmarks: {},
    };
  },
  methods: {
    async getMyBookmarks() {
      try {
        let response = await this.$axios.get("/getMyBookMarks");
        this.myBookmarks = response.data;
        console.log(this.myBookmarks);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  created() {
    this.getMyBookmarks();
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
</style>