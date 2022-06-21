<template>
  <div>
    <div class="footer_wrap">
      <div class="d-md-flex justify-content-between">
        <div>
          <div class="vank_logo_wrap">
            <img class="img" src="/vannk.svg" alt="" />
          </div>
          <!-- <div class="write_up_section mt-3">
            <div class="">
              <h5 class="">
                Make Smarter Moves, <br />
                <span>Save in Crypto</span>
              </h5>
            </div>
          </div> -->
        </div>
        <div>
          <div class="link_wrapper">
            <h5>Contact</h5>
            <div class="d-flex align-items-center py-2">
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
                  Grand Hubb, 18 1st Avenue, Gwarinpa <br />
                  Estate 900108, Abuja
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center py-2">
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
                <p>hello@vankwallet.com</p>
              </div>
            </div>
            <div class="d-flex align-items-center py-2">
              <div class="address_img">
                <nuxt-img
                  format="webp"
                  quality="90"
                  fit="cover"
                  sizes="xs:45vw sm:30vw md:20vw lg:15vw"
                  src="/phone.png"
                />
              </div>
              <div class="email_content ml-3">
                <p>08135250418</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="link_wrapper">
            <h5>Links</h5>
            <ul>
              <li><nuxt-link to="/" class="links">Home</nuxt-link></li>
              <li>
                <nuxt-link to="/#how_it_works" class="links"
                  >How it Works</nuxt-link
                >
              </li>
              <li><nuxt-link to="/faqs" class="links">FAQs</nuxt-link></li>
              <li><nuxt-link to="/" class="links">Blog</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div>
          <div class="news_letter_wrapper">
            <h5>Newsletter</h5>
            <p>Get to know of our latest updates.</p>
            <div class="subscribe_section d-flex align-items-center">
              <nuxt-img
                format="webp"
                quality="90"
                fit="cover"
                sizes="xs:45vw sm:30vw md:20vw lg:15vw"
                src="/envelope.png"
              />
              <input type="text" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div class="line_section">
        <hr />
      </div>
      <div
        class="
          privacy_terms_section
          d-flex
          text-dark
          justify-content-between
          mt-3
          text-center
        "
      >
        <div class="privacy">
          <p>Privacy & terms</p>
        </div>
        <div class="copyright">
          <p>Copyright @ 2022 All right reserved</p>
        </div>
        <div class="icons d-flex justify-content-center" style="gap: 5px">
          <div class="b__radius">
            <a
              href="https://facebook.com/vankwallet"
              class="mx-1"
              target="_blank"
              ><nuxt-img
                format="webp"
                quality="90"
                fit="cover"
                sizes="xs:45vw sm:30vw md:20vw lg:12vw"
                src="/fb.png"
            /></a>
          </div>

          <div class="b__radius">
            <a
              href="https://twitter.com/vankwallet"
              class="mx-1"
              target="_blank"
              ><nuxt-img
                format="webp"
                quality="90"
                fit="cover"
                sizes="xs:45vw sm:30vw md:20vw lg:12vw"
                src="/twitter.png"
            /></a>
          </div>
          <div class="b__radius">
            <a
              href="https://www.linkedin.com/company/vankwallet"
              target="_blank"
              class="mx-1"
              ><font-awesome-icon
                id="show_password"
                class="bg-red eye_icon"
                :icon="['fas', 'linkedin']"
            /></a>
          </div>
          <div class="b__radius">
            <a
              href="https://tiktok.com/@vankwallet"
              target="_blank"
              class="mx-1"
            >
              <nuxt-img
                format="webp"
                quality="90"
                fit="cover"
                sizes="xs:45vw sm:30vw md:20vw lg:12vw"
                src="/tik_tok.png"
              />
            </a>
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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Karla&family=Lato&family=Nunito&family=Plus+Jakarta+Sans&family=Space+Grotesk&family=Titillium+Web&display=swap");

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none !important;
  font-family: "Plus Jakarta Sans", sans-serif;
}
.footer_wrap {
  background-color: #f8f7ff;
  padding: 100px;
}
.footer_wrap .address_content,
.footer_wrap .email_content {
  line-height: 20px;
}
.vank_logo_wrap .img {
  width: 300px;
}
.write_up_section {
  font-family: "Titillium Web", sans-serif;
  color: #001214;
}
.write_up_section span {
  color: #001214;
}
.write_up_section h5 {
  width: 70%;
  margin-left: auto;
  font-size: 16px;
  font-weight: 400;
}

.link_wrapper h5,
.news_letter_wrapper h5 {
  color: #001214;
  font-weight: 400;
  font-size: 18px;
}
.link_wrapper p {
  font-size: 14px;
}
.news_letter_wrapper p {
  color: #001214;
  margin-top: 7px;
  font-size: 14px;
}
.links {
  color: #001214;
  font-size: 14px;
  line-height: 30px;
}
ul li {
  line-height: 35px;
}
.subscribe_section {
  background-color: #fff;
  padding: 5px 15px;
  margin-top: 15px;
  border-radius: 5px;
  border: 1px solid #00e8fe;
}
.subscribe_section input {
  border: none !important;
  outline: none;
  padding-left: 5px;
}
.subscribe_section input::placeholder {
  font-size: 14px;
}
.subscribe_section button {
  padding: 10px 20px;
  border: 1px solid #00e8fe !important;
  color: #000;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  border: none;
}
.subscribe_section img {
  height: 100%;
}
hr {
  background-color: #00e9fe0f;
  margin-top: 100px;
}
.privacy_terms_section {
  font-size: 15px;
}
.icons .b__radius {
  width: 27px;
  height: 27px;
  border-radius: 100%;
  border: 1px solid #00e8fe;
}

@media (max-width: 768px) {
  .footer_wrap {
    padding: 10px;
  }
  .write_up_section h5 {
    margin-left: 0;
    font-size: 11px;
    font-weight: 400;
  }
  .link_wrapper h5,
  .news_letter_wrapper h5 {
    font-size: 15px;
    margin-top: 15px;
  }

  .news_letter_wrapper p {
    font-size: 13px;
  }
  .links {
    font-size: 13px;
    line-height: 10px;
  }
  .subscribe_section {
    background-color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .subscribe_section input {
    width: 100%;
  }
  .subscribe_section button {
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 13px;
  }
  .subscribe_section input::placeholder {
    font-size: 15px;
    padding-left: 5px;
  }
  .subscribe_section img {
    height: 100%;
  }
  .privacy_terms_section {
    font-size: 11px;
  }
  hr {
    margin-top: 20px;
  }
  .icons a {
    margin: 0 !important;
  }
  .vank_logo_wrap .img {
    width: 250px;
  }
  .icons .b__radius {
    display: grid;
    place-items: center;
  }
}

@media (min-width: 320px) and (max-width: 375px) {
  .subscribe_section button {
    padding: 5px 25px;
    border-radius: 5px;
    font-size: 15px;
  }
  .subscribe_section input {
    width: 100%;
  }
  .vank_logo_wrap .img {
    width: 250px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
}
</style>