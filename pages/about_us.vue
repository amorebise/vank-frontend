<template>
  <div>
    <header-nav />
    <div class="about_us_wrap mt-5">
      <div class="write_up_wrap text-center">
        <h1>ABOUT US</h1>
        <h5>We Are VANK</h5>
        <p>
          Your banking partner for digital assets. <br />
          VANK enables users to conveniently turn a fraction of <br />
          their savings into higher-yielding digital assets.
        </p>
        <p>
          You can save your money in US Dollars, Crypto <br />
          and Phygital Assets on our App.
        </p>
        <p>You only need your phone to join!</p>
        <p>How cool is that?</p>
      </div>
      <div class="register_wrap text-center mt-4 py-4">
        <nuxt-link to="/sign_up" class="register_link">Join VANK</nuxt-link>
      </div>
    </div>
    <div class="crypto_img_wrap">
      <nuxt-img
        format="webp"
        quality="90"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw"
        src="/vank_about.png"
      />
    </div>
    <footer-section />
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
.about_us_wrap {
  padding: 100px;
  background-image: url("/about.jpeg");
  background-color: rgba(15, 24, 67, 0.78);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  color: #fff;
}
.write_up_wrap h1 {
  color: #00e8fe;
  font-weight: 700;
  font-size: 60px;
  letter-spacing: 7px;
  font-family: "Titillium Web", sans-serif;
}
.write_up_wrap h5 {
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
  word-spacing: 3px;
  letter-spacing: 5px;
}
.write_up_wrap p {
  font-size: 30px;
  margin-top: 10px;
  word-spacing: 2px;
  letter-spacing: 2px;
}
.register_link {
  background-color: #00e8fe;
  padding: 10px;
  color: #000;
  border-radius: 3px;
  font-weight: 600;
}
.register_link:hover {
  background-color: #00e9feb6;
}

@media (max-width: 768px) {
  .about_us_wrap {
    padding: 50px 10px;
  }
  .write_up_wrap h1 {
    font-size: 30px;
  }
  .write_up_wrap h5 {
    font-size: 17px;
    margin-top: 7px;
  }
  .write_up_wrap p {
    font-size: 15px;
    margin-top: 20px;
  }
}
</style>