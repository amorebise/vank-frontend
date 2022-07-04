<template>
  <div class="pay_bills_wrap w-100">
    <div class="fractional__ownership__wrap">
      <user-nav name="Assets" />

      <div>
        <font-awesome-icon
          @click="$router.go(-1)"
          role="button"
          class="fa-1x text-dark pl-1"
          :icon="['fas', 'arrow-left']"
        />
      </div>
      <div class="location__table__lagos mt-2">
        <div class="card__wrap">
          <div
            class="img__wrap d-md-flex justify-content-between px-2"
            style="gap: 10px"
          >
            <nuxt-link :to="`/user_dashboard/property_detail/${id}`">
              <div class="mb-2 property__cards">
                <div class="general__trends">
                  <div class="trending__content">
                    <div class="sale__notification">
                      <span class="text-dark">90% Sold</span>
                    </div>
                    <div>
                      <p>
                        Coordinates: <br />
                        4724”12.2N 384231.7E
                      </p>
                    </div>
                  </div>
                </div>

                <div class="text__wrap bg-white px-3 py-2">
                  <p>Land in Abuja - <span>650SQM</span></p>
                  <div class="d-flex justify-content-between">
                    <h6>FCDA Estate</h6>
                    <!-- <ion-icon style="color: #00e8fe" name="bookmark-outline" /> -->
                  </div>
                </div>
              </div>
            </nuxt-link>
            <div class="property__cards mb-2">
              <div class="general__trends">
                <div class="trending__content2">
                  <!-- <div class="sale__notification">
                    <span class="text-dark">50% Sold</span>
                  </div> -->
                  <div>
                    <p>
                      Coordinates: <br />
                      4724”12.2N 384231.7E
                    </p>
                  </div>
                </div>
              </div>

              <div class="text__wrap bg-white px-3 py-2">
                <p>Land in Abuja - <span>650SQM</span></p>
                <div class="d-flex justify-content-between">
                  <h6>FCDA Estate</h6>
                  <!-- <ion-icon style="color: #00e8fe" name="bookmark-outline" /> -->
                </div>
              </div>
            </div>
            <div class="property__cards mb-2">
              <div class="general__trends">
                <div class="trending__content3">
                  <!-- <div class="sale__notification">
                    <span class="text-dark">90% Sold</span>
                  </div> -->
                  <div>
                    <p>
                      Coordinates: <br />
                      4724”12.2N 384231.7E
                    </p>
                  </div>
                </div>
              </div>

              <div class="text__wrap bg-white px-3 py-1">
                <p>Land in Abuja - <span>650SQM</span></p>
                <div class="d-flex justify-content-between">
                  <h6>FCDA Estate</h6>
                  <!-- <ion-icon style="color: #00e8fe" name="bookmark-outline" /> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card__wrap">
          <div
            class="img__wrap d-md-flex justify-content-between px-2"
            style="gap: 10px"
          >
            <div class="mb-2 property__cards">
              <div class="general__trends">
                <div class="trending__content">
                  <!-- <div class="sale__notification">
                    <span class="text-dark">90% Sold</span>
                  </div> -->
                  <div>
                    <p>
                      Coordinates: <br />
                      4724”12.2N 384231.7E
                    </p>
                  </div>
                </div>
              </div>

              <div class="text__wrap bg-white px-3 py-2">
                <p>Land in Abuja - <span>650SQM</span></p>
                <div class="d-flex justify-content-between">
                  <h6>FCDA Estate</h6>
                  <!-- <ion-icon style="color: #00e8fe" name="bookmark-outline" /> -->
                </div>
              </div>
            </div>
            <div class="property__cards mb-2">
              <div class="general__trends">
                <div class="trending__content2">
                  <div class="sale__notification">
                    <span class="text-dark">50% Sold</span>
                  </div>
                  <div>
                    <p>
                      Coordinates: <br />
                      4724”12.2N 384231.7E
                    </p>
                  </div>
                </div>
              </div>

              <div class="text__wrap bg-white px-3 py-2">
                <p>Land in Abuja - <span>650SQM</span></p>
                <div class="d-flex justify-content-between">
                  <h6>FCDA Estate</h6>
                  <!-- <ion-icon style="color: #00e8fe" name="bookmark-outline" /> -->
                </div>
              </div>
            </div>
            <div class="property__cards mb-2">
              <div class="general__trends">
                <div class="trending__content3">
                  <div class="sale__notification">
                    <span class="text-dark">90% Sold</span>
                  </div>
                  <div>
                    <p>
                      Coordinates: <br />
                      4724”12.2N 384231.7E
                    </p>
                  </div>
                </div>
              </div>

              <div class="text__wrap bg-white px-3 py-1">
                <p>Land in Abuja - <span>650SQM</span></p>
                <div class="d-flex justify-content-between">
                  <h6>FCDA Estate</h6>
                  <!-- <ion-icon style="color: #00e8fe" name="bookmark-outline" /> -->
                </div>
              </div>
            </div>
          </div>
          <div class="register_button_wrap text-center mt-3 py-4">
            <nuxt-link to="/user_dashboard/lagos_property" class="assets__link">
              <span class="px-3">View all Property in this Location</span>
            </nuxt-link>
          </div>
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
    return {};
  },
  methods: {},
};
</script>

<style>
.fractional__ownership__wrap {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
  /* padding: 0 50px; */
}
.fractional__ownership__wrap a {
  color: inherit;
}
.fractional__ownership__wrap .header_wrap .lagos__wrap button {
  border: 1px solid #00e8fe;
  padding: 7px;
  border-radius: 10px;
}
.fractional__ownership__wrap .header_wrap .lagos__wrap button:hover {
  background-color: #00e8fe;
  border: none;
}
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
.fractional__ownership__wrap .text__wrap {
  border-bottom-left-radius: 50px;
}
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
}
</style>