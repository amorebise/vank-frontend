<template>
  <div>
    <header-nav />
    <div class="contact_us_wrap">
      <div class="contact_us_content text-center">
        <h1>Get In Touch</h1>
      </div>
      <div class="form_section mt-5">
        <h5>Leave us a message</h5>
        <div class="row">
          <div class="col-md-6">
            <div class="l_form mt-3">
              <form action="" class="form">
                <div class="form_div">
                  <input
                    type="text"
                    class="form_input"
                    placeholder="Name"
                    required
                  />
                  <label for="" class="form_label">Name</label>
                </div>

                <div class="email_form_div">
                  <input
                    required
                    type="text"
                    class="email_form_input"
                    placeholder="Email Address"
                  />
                  <label for="" class="email_form_label">Email Address</label>
                </div>

                <div class="form-group py-2">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="7"
                    required
                  >
                  </textarea>
                </div>
                <div class="message_button mt-4">
                  <v-btn class="login_button" value="Login" type="submit"
                    >Send Message</v-btn
                  >
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <div class="location_content">
              <div class="d-flex align-items-center py-3">
                <div class="address_img">
                  <nuxt-img
                    format="webp"
                    quality="90"
                    fit="cover"
                    sizes="xs:45vw sm:30vw md:20vw lg:15vw"
                    src="/location.png"
                  />
                </div>
                <div class="address_content ml-3">
                  <p>
                    Grand Hubb, 18 1st Avenue, Gwarinpa Estate <br />
                    900108, Abuja
                  </p>
                </div>
              </div>

              <div class="d-flex align-items-center py-3">
                <div class="address_img">
                  <nuxt-img
                    format="webp"
                    quality="90"
                    fit="cover"
                    sizes="xs:45vw sm:30vw md:20vw lg:15vw"
                    src="/env.png"
                  />
                </div>
                <div class="email_content ml-3">
                  <p>hello@info.vank.com</p>
                </div>
              </div>
            </div>

            <div class="link_section mt-3">
              <a
                href="https://facebook.com/vankwallet"
                class="mx-2"
                target="_blank"
                ><nuxt-img
                  format="webp"
                  quality="90"
                  fit="cover"
                  sizes="xs:45vw sm:30vw md:20vw lg:12vw"
                  src="/facebuk.png"
              /></a>

              <a
                href="https://twitter.com/vankwallet"
                class="mx-2"
                target="_blank"
                ><nuxt-img
                  format="webp"
                  quality="90"
                  fit="cover"
                  sizes="xs:45vw sm:30vw md:20vw lg:12vw"
                  src="/twitterr.png"
              /></a>
              <a href="" class="mx-2"
                ><nuxt-img
                  format="webp"
                  quality="90"
                  fit="cover"
                  sizes="xs:45vw sm:30vw md:20vw lg:12vw"
                  src="/instagramm.png"
              /></a>
              <a href="" class="mx-2">
                <nuxt-img
                  format="webp"
                  quality="90"
                  fit="cover"
                  sizes="xs:45vw sm:30vw md:20vw lg:12vw"
                  src="/tiktuk.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-section />
  </div>
</template>

<script>
import footer_section from "~/components/footer_section.vue";
export default {
  components: { footer_section },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
}
.address_content p,
.email_content p {
  font-size: 15px;
}

.form_div,
.email_form_div {
  position: relative;
  height: 48px;
  margin-bottom: 1.5rem;
}
.form_input,
.email_form_input {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  font-size: 1rem;
  border: 1px solid rgba(128, 128, 128, 0.56);
  border-radius: 0.3rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
}
.form_label {
  position: absolute;
  left: 0.85rem;
  top: 0.75rem;
  padding: 0 0.25rem;
  background-color: #fff;
  font-size: 1rem;
  transition: 0.3s;
}
.email_form_label {
  position: absolute;
  left: 0.8rem;
  top: 0.75rem;
  padding: 0 0.25rem;
  background-color: #fff;
  font-size: 1rem;
  transition: 0.3s;
}
.form_input:focus + .form_label {
  top: -0.5rem;
  left: 0.8rem;
  color: #333f47;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
}
.email_form_input:focus + .email_form_label {
  top: -0.5rem;
  left: 0.8rem;
  color: #333f47;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
}

.form_input:not(:placeholder-shown).form_input:not(:focus) + .form_label {
  top: -0.5rem;
  left: 0.8rem;
  font-size: 1rem;
  font-weight: 500;
  z-index: 10;
}
.email_form_input:not(:placeholder-shown).email_form_input:not(:focus)
  + .email_form_label {
  top: -0.5rem;
  left: 0.8rem;
  font-size: 1rem;
  font-weight: 500;
  z-index: 10;
}

.contact_us_wrap {
  margin: 40px auto;
  width: 70%;
}
.contact_us_wrap h1 {
  color: #101a46;
  font-size: 56px;
  font-weight: bold;
  word-spacing: 10px;
}

.form_section h5 {
  font-weight: bold;
  word-spacing: 5px;
  letter-spacing: 2px;
}
.location_content {
  margin-top: 40px;
}
textarea {
  width: 80%;
  border: 1px solid rgba(128, 128, 128, 0.56) !important;
  box-shadow: none !important;
}
.v-btn {
  background-color: #00e8fe !important;
  color: #000 !important;
  text-transform: none;
  padding: 25px 30px !important;
  width: 30%;
  font-size: 18px;
  width: 80%;
}

@media (max-width: 768px) {
  .contact_us_wrap {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
  .form_input,
  textarea,
  .v-btn {
    width: 100%;
  }
  .form_input,
  .email_form_input {
    width: 100%;
  }
  .contact_us_wrap h1 {
    font-size: 30px;
  }
}
</style>