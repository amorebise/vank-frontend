<template>
  <div>
    <div class="celebrity-card-section row pt-3 mt-5">
      <div class="col-md-3 mb-3">
        <div class="box" data-aos="fade-up">
          <div class="div">
            <v-img
              class="artiste_img"
              lazy-src="/cofi.png"
              src="/cofi.png"
              alt="image"
            />
          </div>
          <div class="px-1 text_section">
            <h5 class="font-weight-bold mt-2">Convenience</h5>
            <p class="py-1">
              Easy subscription and access to your wallet balance without
              stress.
            </p>
          </div>
        </div>
      </div>

      <!-- Second Card -->
      <div class="col-md-3 mb-3">
        <div class="box" data-aos="fade-right">
          <v-img
            class="artiste_img"
            lazy-src="/company.jpg"
            src="/company.jpg"
            alt="image"
          ></v-img>
          <div class="px-1 text_section">
            <h5 class="font-weight-bold mt-2">Experience</h5>
            <p class="py-1">
              Over 10 years experience in Crypto, providing the best service at
              a good price.
            </p>
          </div>
        </div>
      </div>

      <!-- Third Card -->
      <div class="col-md-3 mb-3">
        <div class="box" data-aos="fade-up">
          <v-img
            class="artiste_img"
            lazy-src="/tokv.png"
            src="/tokv.png"
            alt="image"
          ></v-img>
          <div class="px-1 text_section">
            <h5 class="font-weight-bold mt-2">Token Variety</h5>
            <p class="py-1">Get carefully selected tokens in your wallet.</p>
          </div>
        </div>
      </div>

      <!-- Fourth Card -->
      <div class="col-md-3 mb-3">
        <div class="box" data-aos="fade-right">
          <v-img
            class="artiste_img"
            lazy-src="/manage_risk.jpg"
            src="manage_risk.jpg"
            alt="image"
          ></v-img>

          <div class="px-1 text_section">
            <h5 class="font-weight-bold mt-2">Managed Risk</h5>
            <p class="py-1">
              A front seat into prized crypto Private Sales with managed risk
              exposure.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  position: relative;
  transition: 1s;
  border-radius: 20px;
  width: 98%;
}
.box:hover {
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
}
.box p {
  font-size: 13px;
}
.artiste_img {
  width: 100%;
  height: 200px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.artist-name {
  position: absolute;
  bottom: -17px;
  width: 100%;
}
.text_section {
  min-height: 18vh;
  padding-top: 20px;
}
@media (max-width: 768px) {
  .box {
    width: 100%;
  }
  .artiste_img {
    height: 100%;
  }
}

/* @media (min-width: 769px) and (max-width: 1024px) {
  .artiste_img {
    height: 150px;
  }
} */
</style>