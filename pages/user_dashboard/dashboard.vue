<template>
  <div class="dashboard w-100">
    <div class="dashboard_content">
      <user-nav name="Dashboard" />
      <div class="row">
        <div class="col-md-6">
          <div class="glass_card_wrap mx-2">
            <div class="write_up_section p-4">
              <h5>Wallet Balance</h5>
              <div class="d-flex align-items-center">
                <div>
                  <nuxt-img
                    format="webp"
                    quality="90"
                    fit="cover"
                    src="/light_naira.png"
                  />
                </div>
                <div><p>1,000,000</p></div>
              </div>
              <span>Monthly PnL</span>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="main_card_wrap mx-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none !important;
}
.dashboard_content {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.glass_card_wrap {
  background-image: url("/glassy_card.png");
  min-height: 40vh;
  background-size: contain;

  color: #fff;
}
.main_card_wrap {
  background-image: url("/main.png");
  min-height: 40vh;
  background-size: contain;
}
.glass_card_wrap .write_up_section p {
  font-size: 45px;
}
.glass_card_wrap .write_up_section span {
  padding-top: 10px;
}
.glass_card_wrap .write_up_section img {
  width: 100%;
}

@media (max-width: 768px) {
  .dashboard_content {
    margin: 0 !important;
    padding: 0;
  }
}
</style>