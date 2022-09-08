<template>
  <div class="w-100">
    <div class="real__estate">
      <header-nav name="Real Estate" />
      <!-- <user-nav name="Fractional Ownership" /> -->
      <div class="real__estate__fraction">
        <div class="arrow__back">
          <font-awesome-icon
            @click="$router.go(-1)"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div>
        <div class="header_wrap d-flex px-1 mt-3">
          <div class="lagos__wrap">
            <button @click="show_lagos()" class="toggle__btn" id="lagosBtn">
              Lagos
            </button>
          </div>
          <div class="lagos__wrap px-3">
            <button id="abujaBtn" class="toggle__btn" @click="show_abuja()">
              Abuja
            </button>
          </div>
          <div class="lagos__wrap">
            <button id="uyoBtn" class="toggle__btn" @click="show_uyo()">
              Uyo
            </button>
          </div>
        </div>
        <div v-show="lagos_tab" class="location__table__lagos mt-2">
          <p class="px-2 paragrphs">Find verified property in Lagos</p>
          <lagos-card />
        </div>
        <div v-show="abuja_tab" class="location__table__abuja mt-2">
          <p class="paragrphs">Find verified property in Abuja</p>
          <abuja-card />
        </div>
        <div v-show="uyo_tab" class="location__table__uyo mt-2">
          <p class="paragrphs">Find verified property in Uyo</p>
          <uyo-card />
        </div>
      </div>
      <footer-section />
    </div>
  </div>
</template>

<script>
import public_assets from "~/components/public_assets.vue";
export default {
  components: { public_assets },
  data() {
    return {
      user: {},
      lagos_tab: true,
      abuja_tab: false,
      uyo_tab: false,
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
    show_lagos() {
      const callToActionBtns = document.querySelectorAll(".toggle__btn");

      callToActionBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          callToActionBtns.forEach((f) => f.classList.remove("active"));
          e.target.classList.toggle("active");
        });
      });
      this.lagos_tab = true;
      this.abuja_tab = false;
      this.uyo_tab = false;
    },
    show_abuja() {
      const callToActionBtns = document.querySelectorAll(".toggle__btn");

      callToActionBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          callToActionBtns.forEach((f) => f.classList.remove("active"));
          e.target.classList.toggle("active");
        });
      });
      this.lagos_tab = false;
      this.abuja_tab = true;
      this.uyo_tab = false;
    },
    show_uyo() {
      const callToActionBtns = document.querySelectorAll(".toggle__btn");

      callToActionBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          callToActionBtns.forEach((f) => f.classList.remove("active"));
          e.target.classList.toggle("active");
        });
      });
      this.lagos_tab = false;
      this.abuja_tab = false;
      this.uyo_tab = true;
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
.active {
  background-color: #00e8fe;
}
.real__estate__fraction {
  padding: 120px 100px;
}
.real__estate__fraction a {
  color: inherit;
}
.real__estate__fraction .header_wrap .lagos__wrap button {
  border: 1px solid #00e8fe;
  padding: 7px;
  border-radius: 10px;
}
/* .real__estate__fraction #lagosBtn {
  background-color: #00e8fe;
} */
/* .real__estate__fraction .header_wrap .lagos__wrap button::active {
  background-color: #00e8fe;
  border: none;
} */
.real__estate__fraction .property__cards {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
  border-radius: 10px;
  position: relative;
  transition: 1s;
}
.real__estate__fraction .property__cards:hover {
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
}
.real__estate__fraction .general__trends {
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
  border-radius: 10px;
}
.real__estate__fraction .trending__content {
  background-image: url("/asset2.jpg");
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: #001214;

  width: 350px;
  height: 200px;
  transition: ease-in-out 0.3s;
  color: #fff;

  font-weight: 500;
  font-size: 15px;
}
.real__estate__fraction .trending__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
}
.real__estate__fraction .trending__content p {
  opacity: 0;
}
.real__estate__fraction .trending__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.real__estate__fraction .trending__content2 {
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
.real__estate__fraction .trending__content2:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
}
.real__estate__fraction .trending__content2 p {
  opacity: 0;
}
.real__estate__fraction .trending__content2:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.real__estate__fraction .trending__content3 {
  background-image: url("/asset3.webp");
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: #001214;
  width: 350px;
  height: 200px;
  transition: ease-in-out 0.3s;
  color: #fff;
  font-weight: 500;
  font-size: 15px;
}
.real__estate__fraction .trending__content3:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
}
.real__estate__fraction .trending__content3 p {
  opacity: 0;
}
.real__estate__fraction .trending__content3:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
/* .real__estate__fraction .text__wrap {
  border-bottom-left-radius: 50px;
} */
.real__estate__fraction .text__wrap p {
  font-size: 14px;
  font-weight: 500;
  word-spacing: 1px;
}
.real__estate__fraction .text__wrap span {
  font-size: 14px;
  font-weight: 600;
}
.real__estate__fraction .text__wrap h6 {
  font-weight: 600;
  letter-spacing: 1px;
}
.real__estate__fraction .sale__notification {
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
.real__estate__fraction .trending__content:hover .sale__notification,
.real__estate__fraction .trending__content2:hover .sale__notification,
.real__estate__fraction .trending__content3:hover .sale__notification {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.real__estate {
  background-color: #fff;
  min-height: 100vh;
}
.real__estate .new__content {
  padding: 10px 100px;
}
.text__wrap {
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
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
  .real__estate__fraction {
    padding: 80px 10px;
  }
  .settings_wrap {
    margin: 10px;
  }
  .real__estate .new__content {
    padding: 10px !important;
  }
  .real__estate__fraction .trending__content,
  .real__estate__fraction .trending__content2,
  .real__estate__fraction .trending__content3 {
    width: 100%;
  }
  .settings_wrap {
    margin: 10px;
  }
  .real__estate__fraction .header_wrap {
    display: flex;
    justify-content: center;
  }
  .paragrphs {
    text-align: center;
  }
  .arrow__back {
    padding-left: 15px;
  }
}
</style>