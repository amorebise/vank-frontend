<template>
  <div>
    <div class="footer_wrap">
      <div class="d-md-flex justify-content-between">
        <div>
          <div class="vank_logo_wrap">
            <nuxt-img
              format="webp"
              sizes="xs:35vw sm:30vw md:20vw lg:20vw"
              quality="90"
              fit="cover"
              src="/vank_logo2.png"
            />
          </div>
          <div class="write_up_section mt-3">
            <div class="">
              <h5 class="">
                Make Smarter Moves, <br />
                <span>Save in Crypto</span>
              </h5>
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
              <li><nuxt-link to="/faq" class="links">FAQ</nuxt-link></li>
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
          text-light
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
        <div class="icons">
          <a href="https://facebook.com/vankwallet" class="mx-1" target="_blank"
            ><nuxt-img
              format="webp"
              quality="90"
              fit="cover"
              sizes="xs:45vw sm:30vw md:20vw lg:12vw"
              src="/fb.png"
          /></a>

          <a href="https://twitter.com/vankwallet" class="mx-1" target="_blank"
            ><nuxt-img
              format="webp"
              quality="90"
              fit="cover"
              sizes="xs:45vw sm:30vw md:20vw lg:12vw"
              src="/twitter.png"
          /></a>
          <a href="" class="mx-1"
            ><nuxt-img
              format="webp"
              quality="90"
              fit="cover"
              sizes="xs:45vw sm:30vw md:20vw lg:12vw"
              src="/instagram.png"
          /></a>
          <a href="" class="mx-1">
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
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap");

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none !important;
  font-family: "Space Grotesk", sans-serif;
}
.footer_wrap {
  background-color: #0f1843;
  padding: 100px;
}
.write_up_section {
  font-family: "Titillium Web", sans-serif;
  color: #fff;
}
.write_up_section span {
  color: #00e8fe;
}
.write_up_section h5 {
  width: 60%;
  margin-left: auto;
  font-size: 20px;
  font-weight: 400;
}

.link_wrapper h5,
.news_letter_wrapper h5 {
  color: #00e8fe;
  font-weight: 400;
  font-size: 27px;
}
.news_letter_wrapper p {
  color: #646b87;
  margin-top: 7px;
  font-size: 20px;
}
.links {
  color: #fff;
  font-size: 20px;
  line-height: 55px;
}
ul li {
  line-height: 35px;
}
.subscribe_section {
  background-color: #fff;
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 5px;
}
.subscribe_section input {
  border: none !important;
  outline: none;
  padding-left: 5px;
}
.subscribe_section input::placeholder {
  font-size: 20px;
}
.subscribe_section button {
  padding: 10px 20px;
  background-color: #00e8fe !important;
  color: #000;
  border-radius: 5px;
  font-size: 20px;
  outline: none;
  border: none;
}
.subscribe_section img {
  height: 100%;
}
hr {
  background-color: #f2f5f6;
  margin-top: 100px;
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
    color: #00e8fe;
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
    background-color: #1d83c5;
    color: #fff;
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
}

@media (min-width: 320px) and (max-width: 375px) {
  .subscribe_section button {
    padding: 5px 25px;
    background-color: #1d83c5;
    color: #fff;
    border-radius: 5px;
    font-size: 15px;
  }
  .subscribe_section input {
    width: 100%;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
}
</style>