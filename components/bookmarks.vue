<template>
  <div>
    <div class="lagos_card">
      <div class="row">
        <div v-for="bookmark in myBookmarks" :key="bookmark.index" class="col-md-4">
          <div class="card_wrap">
            <div @click="
              $router.push(`/user_dashboard/asset_detail/${bookmark.asset_id}`)
            " class="general_trends" :style="{ backgroundImage: 'url(' + bookmark.image + ')' }">
              <div class="tq_notification">
                <span v-if="bookmark.token_quantity_subscribed.length > 0" style="font-size: 12px" class="text-dark">{{
                (
                (Number(bookmark.token_quantity_subscribed) /
                Number(bookmark.token_quantity_available)) *
                100
                ).toFixed(0)
                }}
                  % tokens Sold</span>
                <span v-else style="font-size: 12px" class="text-dark">0 token Sold</span>
              </div>
              <div style="line-height: 20px" class="opaque_text">
                <p v-if="bookmark.coordinates">
                  Coordinates: <br />
                  {{ bookmark.coordinates }}
                </p>
                <p v-else>

                  4724”12.2N 384231.7E
                </p>
              </div>
            </div>

            <div class="text_wrap bg-white px-3 py-2">
              <p>
                Land in {{ bookmark.layout_name }} -
                <span>{{ bookmark.size }}SQM</span>
                <!-- <span v-else>650SQM</span> -->
              </p>
              <div class="d-flex justify-content-between">
                <h6>{{ bookmark.location }}</h6>
                <ion-icon @click="removeBookmark(bookmark)" style="color: #00e8fe" name="bookmark" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="display: grid; margin-top: 60px; place-items: center" v-if="myBookmarks.length === 0">
        <ion-icon style="color: #00e8fe; font-size: 100px" name="bookmark-outline" />
        <p>You have no bookmarked asset</p>
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
      payment_collection: {},
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
    async removeBookmark(bookmark) {
      try {
        let response = await this.$axios.post(
          `/removeFromBookmarks/${bookmark.id}`
        );
        this.getMyBookmarks();
        console.log(response);
        this.$toast.success("Property has been removed from bookmarks", {
          timeout: 5000,
        });
      } catch (error) {
        console.log(error.response);
        this.$toast.warning("There's an error somewhere", {
          timeout: 5000,
        });
      }
    },
    async getPaymentCollection() {
      try {
        let response = await this.$axios.post("/paymentCollection");
        this.payment_collection = response.data;
        console.log(this.payment_collection);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  created() {
    this.getMyBookmarks();
    this.getPaymentCollection();
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

  /* width: 350px; */
  height: 200px;
  transition: ease-in-out 0.3s;
  color: #fff;

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