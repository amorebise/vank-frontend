<template>
  <div class="w-100">
    <div class="real__estate">
      <header-nav name="Real Estate" />
      <div class="estate__wrap">
        <div class="row">
          <div class="col-md-6">
            <nuxt-link to="/user_dashboard/fractional_ownership">
              <div>
                <h6>Fractional Ownership</h6>
                <div class="fractional__wrap"></div>
                <p class="full__text px-2 py-1">
                  Group Ownership of Real Estate
                </p>
                <p class="full__text px-2 py-1">
                  Join other people to co-own <br />
                  property, benefit from price <br />
                  appreciation, and use as collateral for <br />
                  loan
                </p>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-6">
            <div>
              <h6>Full Ownership</h6>
              <div class="full__ownership">
                <div class="coming__soon">
                  <div class="button__wrap">
                    <button class="mx-1 my-1 p-1">Coming Soon</button>
                  </div>
                </div>
              </div>
              <p class="full__text px-2 py-1">
                Fully own real estate listed in this category
              </p>
            </div>
          </div>
        </div>
        <div class="register_button_wrap text-center mt-3 py-4">
          <nuxt-link
            to="/user_dashboard/fractional_ownership"
            class="assets__link"
          >
            <span class="px-3">View Fractional Property</span>
          </nuxt-link>
        </div>
      </div>
      <footer-section />
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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Karla&family=Lato&family=Nunito&family=Plus+Jakarta+Sans&family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  text-decoration: none !important;
}
.real__estate {
  background-color: #fff;
  min-height: 100vh;
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
  .settings_wrap {
    margin: 10px;
  }
}
</style>