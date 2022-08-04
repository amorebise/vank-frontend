<template>
  <div class="pay_bills_wrap w-100">
    <div class="bookmarks__wrap">
      <user-nav class="text-dark" name="My Bookmarks" />

      <div>
        <font-awesome-icon
          @click="$router.go(-1)"
          role="button"
          class="fa-1x text-dark pl-1"
          :icon="['fas', 'arrow-left']"
        />
      </div>
      <div class="location__table__lagos mt-2">
        <div class="asset_cards">
          <bookmarks />
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
.bookmarks__wrap {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
  /* padding: 0 50px; */
}
.bookmarks__wrap a {
  color: inherit;
}
.bookmarks__wrap .header_wrap .lagos__wrap button {
  border: 1px solid #00e8fe;
  padding: 7px;
  border-radius: 10px;
}
/* .bookmarks__wrap .header_wrap .lagos__wrap button:hover {
  background-color: #00e8fe;
  border: none;
} */
.bookmarks__wrap .property__cards {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
  border-radius: 10px;
  position: relative;
  transition: 1s;
}
.bookmarks__wrap .property__cards:hover {
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
}
.bookmarks__wrap .general__trends {
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
  border-radius: 10px;
}
.bookmarks__wrap .trending__content {
  background-image: url("/asset2.jpg");
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: #001214;
  position: relative;
  width: 350px;
  height: 200px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
}
.bookmarks__wrap .trending__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
}
.bookmarks__wrap .trending__content p {
  opacity: 0;
}
.bookmarks__wrap .trending__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.bookmarks__wrap .trending__content2 {
  background-image: url("/asset.jpg");
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: #001214;
  position: relative;
  width: 350px;
  height: 200px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
}
.bookmarks__wrap .trending__content2:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
}
.bookmarks__wrap .trending__content2 p {
  opacity: 0;
}
.bookmarks__wrap .trending__content2:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.bookmarks__wrap .trending__content3 {
  background-image: url("/asset3.webp");
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: #001214;
  position: relative;
  width: 350px;
  height: 200px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
}
.bookmarks__wrap .trending__content3:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
}
.bookmarks__wrap .trending__content3 p {
  opacity: 0;
}
.bookmarks__wrap .trending__content3:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.bookmarks__wrap .text__wrap {
  border-bottom-left-radius: 50px;
}
.bookmarks__wrap .text__wrap p {
  font-size: 14px;
  font-weight: 500;
  word-spacing: 1px;
}
.bookmarks__wrap .text__wrap span {
  font-size: 14px;
  font-weight: 600;
}
.bookmarks__wrap .text__wrap h6 {
  font-weight: 600;
  letter-spacing: 1px;
}
.bookmarks__wrap .sale__notification {
  position: absolute;
  z-index: 999;
  background-color: #00e8fe;
  width: 120px;
  height: 50px;
  padding: 10px 20px;
  top: 0;
  left: 0;
  border-top-left-radius: 10px;
  opacity: 0;
}
.bookmarks__wrap .trending__content:hover .sale__notification,
.bookmarks__wrap .trending__content2:hover .sale__notification,
.bookmarks__wrap .trending__content3:hover .sale__notification {
  /* opacity: 1; */
  transition: ease-in-out 0.7s;
}
@media (max-width: 768px) {
  .bookmarks__wrap {
    margin-left: 0 !important;
    padding: 0;
  }
  .bookmarks__wrap .trending__content,
  .bookmarks__wrap .trending__content2,
  .bookmarks__wrap .trending__content3 {
    width: 100%;
  }
  .settings_wrap {
    margin: 10px;
  }
  .bookmarks__wrap .header_wrap {
    display: flex;
    justify-content: center;
  }
  .paragrphs {
    text-align: center;
  }
}
</style>