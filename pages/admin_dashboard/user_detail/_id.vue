<template>
  <div class="w-100">
    <div class="single__user__wrap">
      <user-nav name="User Details" />
      <div class="mt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="img_card">
              <div class="asset__content text-center">
                <!-- <div>
                  <p>&#x20A6;1.19K per unit</p>
                  <p>Min ROI: 9.2%PA</p>
                  <h4>Whole Price: &#x20A6;950,000</h4>
                  <p>Pyanko 1 Token</p>
                </div> -->
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="description__wrap">
              <p>Name: <span>Abba Bola</span></p>
              <p>Phone: <span>08123456789</span></p>
              <p>Email: <span>abba@gmail.com</span></p>
              <p>
                House Address: <span>No 1 Hamza Zayyad Close Ikeja Lagos</span>
              </p>
            </div>
            <div class="d-flex" style="gap: 10px">
              <div class="register_button_wrap text-center mt-3 py-4">
                <nuxt-link
                  :to="`/user_dashboard/buy_token/${id}`"
                  class="assets__link"
                >
                  <span class="px-3">Transactions</span>
                </nuxt-link>
              </div>
              <div class="register_button_wrap text-center mt-3 py-4">
                <nuxt-link
                  :to="`/user_dashboard/buy_token/${id}`"
                  class="assets__link"
                >
                  <span class="px-3">View Wallets</span>
                </nuxt-link>
              </div>
              <div class="register_button_wrap text-center mt-3 py-4">
                <nuxt-link
                  :to="`/user_dashboard/buy_token/${id}`"
                  class="assets__link"
                >
                  <span class="px-3">Limit Account</span>
                </nuxt-link>
              </div>
            </div>
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
.single__user__wrap {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
}
.single__user__wrap .asset__content {
  background-image: url("/beaut.avif");
  background-size: cover;
  border-radius: 10px;
  color: #001214;
  position: relative;
  height: 450px;
  transition: ease-in-out 0.3s;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: 15px;
  border: 5px solid #00e8fe;
  /* gap: 10px; */
}
/* .single__user__wrap .asset__content p {
  opacity: 0;
}
.single__user__wrap .asset__content h4 {
  opacity: 0;
  color: #00e8fe;
}
.single__user__wrap .asset__content:hover {
  background-color: rgba(0, 0, 0, 0.34);
  background-blend-mode: overlay;
  z-index: 999;
}
.single__user__wrap .asset__content:hover p {
  opacity: 1;
  transition: ease-in-out 0.7s;
}
.single__user__wrap .asset__content:hover h4 {
  opacity: 1;
  transition: ease-in-out 0.7s;
} */
.single__user__wrap .description__wrap {
  padding-top: 100px;
}
.single__user__wrap .description__wrap p {
  line-height: 25px;
  font-weight: 600;
  font-size: 16px;
}
.single__user__wrap .description__wrap span {
  font-weight: 500;
}

@media (max-width: 768px) {
  .single__user__wrap {
    margin-left: 0 !important;
    padding: 0;
  }
  .settings_wrap {
    margin: 10px;
  }
}
</style>