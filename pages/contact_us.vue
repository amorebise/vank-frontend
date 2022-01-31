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
                  <!-- <label for="exampleFormControlTextarea1">Bio*</label> -->

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
                    sizes="xs:45vw sm:30vw md:20vw lg:12vw"
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
                    sizes="xs:45vw sm:30vw md:20vw lg:12vw"
                    src="/phone.png"
                  />
                </div>
                <div class="address_content ml-3">
                  <p>+234 081-1236-4568</p>
                </div>
              </div>
              <div class="d-flex align-items-center py-3">
                <div class="address_img">
                  <nuxt-img
                    format="webp"
                    quality="90"
                    fit="cover"
                    sizes="xs:45vw sm:30vw md:20vw lg:12vw"
                    src="/env.png"
                  />
                </div>
                <div class="address_content ml-3">
                  <p>hello@info.vank.com</p>
                </div>
              </div>
            </div>
            <new-pop />

            <div class="link_section"></div>
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
:root {
  --first_color: #1d83c5;
  --input_color: grey;
  --border_color: rgba(128, 128, 128, 0.56);
  --normal_font_size: 1rem;
  --small_font_size: 0.75rem;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  /* font-size: var(--normal_font_size); */
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
  font-size: var("--normal_font_size");
  border: 1px solid var("--border_color");
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
  font-size: var("--normal_font_size");
  transition: 0.3s;
}
.email_form_label {
  position: absolute;
  left: 0.8rem;
  top: 0.75rem;
  padding: 0 0.25rem;
  background-color: #fff;
  font-size: var("--normal_font_size");
  transition: 0.3s;
}
.form_input:focus + .form_label {
  top: -0.5rem;
  left: 0.8rem;
  color: var("--first_color");
  font-size: var("--small_font_size");
  font-weight: 500;
  z-index: 10;
}
.email_form_input:focus + .email_form_label {
  top: -0.5rem;
  left: 0.8rem;
  color: var("--first_color");
  font-size: var("--small_font_size");
  font-weight: 500;
  z-index: 10;
}

.form_input:not(:placeholder-shown).form_input:not(:focus) + .form_label {
  top: -0.5rem;
  left: 0.8rem;
  font-size: var("--normal_font_size");
  font-weight: 500;
  z-index: 10;
}
.email_form_input:not(:placeholder-shown).email_form_input:not(:focus)
  + .email_form_label {
  top: -0.5rem;
  left: 0.8rem;
  font-size: var("--normal_font_size");
  font-weight: 500;
  z-index: 10;
}

.form_input:focus {
  border: 1px solid #1d83c5;
}
.email_form_input:focus,
textarea {
  border: 1px solid #1d83c5 !important;
}

.contact_us_wrap {
  margin: 40px auto;
  width: 70%;
}
.contact_us_wrap h1 {
  color: #101a46;
  font-size: 60px;
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
  border: 1px solid var("--border_color") !important;
  box-shadow: none !important;
}
.v-btn {
  background-color: #00e8fe !important;
  color: #000 !important;
  text-transform: none;
  padding: 25px 30px !important;
  width: 30%;
  font-size: 20px;
  width: 80%;
}

@media (max-width: 768px) {
  .form_input,
  textarea,
  .v-btn {
    width: 100%;
  }
}
</style>