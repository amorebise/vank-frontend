<template>
  <div class="w-100">
    <div class="real__estate">
      <header-nav name="Real Estate" />
      <div class="asset__body">
        <div class="back__btn">
          <font-awesome-icon
            @click="$router.go(-1)"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>
        <div class="pt-3">
          <Available_assets />
        </div>
      </div>
      <footer-section />
    </div>
  </div>
</template>

<script>
import Available_assets from "~/components/available_assets.vue";
export default {
  components: { Available_assets },
  data() {
    return {
      user: {},
      trendingAssets: {},
      show_bookmark: true,
      hide_bookmark: false,
    };
  },
  methods: {
    async getUser() {
      let auth = this.$auth.$storage._state;
      let token = null;

      for (const key in auth) {
        console.log(key);

        if (key == "_token.local") {
          token = auth[key];
        } else {
          console.log("No");
        }
      }

      console.log(token);

      // console.log(this.$auth.$storage._state._token);
      try {
        let res = await this.$axios.get("/getUser", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });

        this.user = res.data[0];

        console.log(this.user);
      } catch (error) {
        console.log(error.response);
      }
    },
    async bookmark(trending) {
      try {
        let response = await this.$axios.post(`/bookmarkAsset/${trending.id}`);
        this.getTrendingAssets();
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
        this.$router.push("/sign_up");
      }
    },
    async removeBookmark(trending) {
      try {
        let response = await this.$axios.post(
          `/removeFromBookmarks/${trending.id}`
        );
        this.getTrendingAssets();
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
    // this.makePayment();
    this.getUser();
    this.getTrendingAssets();
  },
};
</script>

<style>
.real__estate {
  background-color: #fff;
  min-height: 100vh;
}
.asset__body {
  padding: 120px 100px;
}
.real__estate .new__content {
  padding: 10px 100px;
}
.real__estate a {
  color: inherit;
}
.real__estate .estate__wrap {
  padding: 200px 100px 10px 100px;
  background-color: #f8feff;
}
.real__estate .estate__wrap h6 {
  font-weight: 600;
}
.real__estate .fractional__wrap {
  background-image: url("/asset.jpg");
  height: 250px;
  background-size: cover;
  border: 5px solid #00e8fe;
}
.real__estate .full__ownership {
  background-image: url("/asset.jpg");
  height: 250px;
  background-size: cover;
  border: 5px solid #00e8fe;
  display: grid;
  place-items: center;
}
.real__estate .full__text {
  font-size: 14px;
  font-weight: 500;
}
.real__estate .full__ownership .button__wrap {
  border: 1px solid #fff;
  color: #00e8fe;
  font-size: 13px;
  border-radius: 2px;
}
.real__estate .full__ownership .button__wrap button {
  background-color: #ebfdff;
}

@media (max-width: 768px) {
  .real__estate {
    margin-left: 0 !important;
    padding: 0;
  }
  .asset__body {
    padding: 100px 10px;
  }
  .settings_wrap {
    margin: 10px;
  }
}
</style>