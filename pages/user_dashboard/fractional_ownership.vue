<template>
  <div class="pay_bills_wrap w-100">
    <div class="fractional__ownership__wrap">
      <user-nav class="estate__nav py-4" name="Fractional Ownership" />
      <div class="fractional__bd__wrap">
        <div class="arrow__back">
          <font-awesome-icon @click="back()" role="button" class="fa-1x text-dark pl-1" :icon="['fas', 'arrow-left']" />
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
    </div>
  </div>
</template>

<script>
import creator_sidebar from "~/components/creator_sidebar.vue";
export default {
  // middleware: "auth",
  components: { creator_sidebar },
  data() {
    return {
      lagos_tab: true,
      abuja_tab: false,
      uyo_tab: false,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
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
  },
};
</script>

<style>
.fractional__ownership__wrap {
  margin-left: 270px;
  background-color: #fff;
  height: 100%;
  cursor: pointer;
  /* padding: 0 50px; */
}

.active {
  background-color: #00e8fe;
}

.fractional__ownership__wrap a {
  color: inherit;
}

.fractional__ownership__wrap .header_wrap .lagos__wrap button {
  border: 1px solid #00e8fe;
  padding: 7px;
  border-radius: 10px;
}

/* .fractional__ownership__wrap #lagosBtn {
  background-color: #00e8fe;
} */
/* .fractional__ownership__wrap .header_wrap .lagos__wrap button::active {
  background-color: #00e8fe;
  border: none;
} */
.fractional__ownership__wrap .property__cards {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
  border-radius: 10px;
  position: relative;
  transition: 1s;
}

.fractional__ownership__wrap .property__cards:hover {
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
}

.fractional__ownership__wrap .general__trends {
  box-shadow: 0px 4px 4px rgba(29, 131, 197, 0.22);
  border-radius: 10px;
}

.fractional__ownership__wrap .trending__content {
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

.fractional__ownership__wrap .trending__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
}

.fractional__ownership__wrap .trending__content p {
  opacity: 0;
}

.fractional__ownership__wrap .trending__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}

.fractional__ownership__wrap .trending__content2 {
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

.fractional__ownership__wrap .trending__content2:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
}

.fractional__ownership__wrap .trending__content2 p {
  opacity: 0;
}

.fractional__ownership__wrap .trending__content2:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}

.fractional__ownership__wrap .trending__content3 {
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

.fractional__ownership__wrap .trending__content3:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
}

.fractional__ownership__wrap .trending__content3 p {
  opacity: 0;
}

.fractional__ownership__wrap .trending__content3:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}

/* .fractional__ownership__wrap .text__wrap {
  border-bottom-left-radius: 50px;
} */
.fractional__ownership__wrap .text__wrap p {
  font-size: 14px;
  font-weight: 500;
  word-spacing: 1px;
}

.fractional__ownership__wrap .text__wrap span {
  font-size: 14px;
  font-weight: 600;
}

.fractional__ownership__wrap .text__wrap h6 {
  font-weight: 600;
  letter-spacing: 1px;
}

.fractional__ownership__wrap .sale__notification {
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

.fractional__ownership__wrap .trending__content:hover .sale__notification,
.fractional__ownership__wrap .trending__content2:hover .sale__notification,
.fractional__ownership__wrap .trending__content3:hover .sale__notification {
  opacity: 1;
  transition: ease-in-out 0.7s;
}

@media (max-width: 768px) {
  .fractional__ownership__wrap {
    margin-left: 0 !important;
    padding: 0;
  }

  .fractional__ownership__wrap .trending__content,
  .fractional__ownership__wrap .trending__content2,
  .fractional__ownership__wrap .trending__content3 {
    width: 100%;
  }

  .settings_wrap {
    margin: 10px;
  }

  .fractional__ownership__wrap .header_wrap {
    display: flex;
    justify-content: center;
  }

  .paragrphs {
    text-align: center;
  }

  .arrow__back {
    padding-left: 15px;
  }

  .fractional__bd__wrap {
    padding: 10px;
    padding-top: 70px;
  }
}
</style>