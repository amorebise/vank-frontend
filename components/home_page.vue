<div class="hero_section mt-5">
      <div class="hero__content">
        <h1>Make Smarter Moves,</h1>
        <div
          class="d-flex typed_text align-items-center justify-content-center"
        >
          <h1 class="text-white">Save in #</h1>
          <span class="type"></span>
        </div>
        <div class="registration_wrap text-center mt-4">
          <nuxt-link to="/sign_up" class="reg_link"
            ><span class="text-dark new_signup mx-1"
              >Sign up for free</span
            ></nuxt-link
          >
          <nuxt-link to="/real_estate" class="explore_wrap"
            ><span class="text-dark explore_link mx-1"
              >Explore Assets</span
            ></nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="trending__wrap py-2">
      <div class="py-3 text-center">
        <h1>Trending Assets</h1>
        <p>You can get quality Real Estate from N500</p>
      </div>
      <div
        class="img__wrap d-md-flex justify-content-center px-2"
        style="gap: 10px"
      >
        <div class="mb-2 cardz">
          <div class="sale__notification">
            <p>90% Sold</p>
          </div>
          <v-img
            class="img"
            lazy-src="/first_trend.svg"
            src="/first_trend.svg"
            alt="image"
          />
          <div class="text__wrap bg-white px-3 py-2">
            <p>Land in Abuja - <span>650SQM</span></p>
            <div class="d-flex justify-content-between">
              <h6>FCDA Estate</h6>
              <ion-icon style="color: #00e8fe" name="bookmark-outline" />
            </div>
          </div>
        </div>
        <div class="cardz mb-2">
          <div class="sale__notification">
            <p>50% Sold</p>
          </div>
          <v-img
            class="img"
            lazy-src="/second_trend.svg"
            src="/second_trend.svg"
            alt="image"
          />
          <div class="text__wrap bg-white px-3 py-2">
            <p>Land in Abuja - <span>650SQM</span></p>
            <div class="d-flex justify-content-between">
              <h6>FCDA Estate</h6>
              <ion-icon style="color: #00e8fe" name="bookmark-outline" />
            </div>
          </div>
        </div>
        <div class="cardz mb-2">
          <div class="sale__notification">
            <p>70% Sold</p>
          </div>
          <v-img
            class="img"
            lazy-src="/third_trend.svg"
            src="/third_trend.svg"
            alt="image"
          />
          <div class="text__wrap bg-white px-3 py-1">
            <p>Land in Abuja - <span>650SQM</span></p>
            <div class="d-flex justify-content-between">
              <h6>FCDA Estate</h6>
              <ion-icon style="color: #00e8fe" name="bookmark-outline" />
            </div>
          </div>
        </div>
      </div>
      <div class="view__assets__wrap text-center">
        <nuxt-link to="/user_dashboard/my_account">
          <button class="assets__link">
            <span class="px-3">View all Assets</span>
          </button>
        </nuxt-link>
      </div>
    </div>
    <div class="how_it_works" id="how_it_works">
      <div class="text-center">
        <h1>How VANK Works</h1>
        <h3>
          Simple and easy way to start your <br />
          savings with <span class="vank_capp">VANK</span>
        </h3>
      </div>

      <div class="row mt-5 align-items-center">
        <div class="col-md-6">
          <div class="crypto_bucket_section mx-5 pt-5">
            <v-img src="/iv.png" lazy-src="/iv.png" alt="image" />
          </div>
        </div>
        <div class="col-md-6">
          <div
            class="how_it_works_child d-flex justify-content-center py-4 mb-2"
          >
            <div>
              <div class="img_wrap mt-3">
                <img class="img" src="/add.svg" alt="image" />
              </div>
              <div class="head__wrap">
                <h4>Sign up</h4>
              </div>
              <div class="write_up_wrap ml-3">
                <p>Open an account and fund your wallet</p>
              </div>
            </div>
          </div>
          <div
            class="how_it_works_child d-flex justify-content-center py-4 mb-2"
          >
            <div>
              <div class="img_wrap d-flex justify-content-center mt-3">
                <img class="img" src="/save.svg" alt="image" />
              </div>
              <div class="head__wrap">
                <h4>Buy</h4>
              </div>
              <div class="write_up_wrap ml-3">
                <p>Buy a piece of land</p>
              </div>
            </div>
          </div>
          <div
            class="
              how_it_works_child
              d-flex
              justify-content-center
              align-items-center
              py-4
              mb-2
            "
          >
            <div>
              <div class="img_wrap d-flex justify-content-center">
                <img class="img" src="/bag.svg" alt="image" />
              </div>
              <div class="head__wrap">
                <h4>Make Money</h4>
              </div>
              <div class="write_up_wrap ml-3">
                <p>Save, Borrow Against, or sell at any time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="register_button_wrap text-center mt-3 py-4">
        <nuxt-link to="/sign_up" class="assets__link">
          <span class="px-3">Register with VANK</span>
        </nuxt-link>
      </div>
    </div>
    <div class="why_choose_us py-3">
      <div class="text-center pt-5">
        <h1>Why Choose VANK?</h1>
        <h5>Real Estate is easier with <span class="vank_cap">VANK</span></h5>
      </div>
      <div class="cardds__wrap">
        <div class="row mt-5">
          <div class="col">
            <div class="first__card">
              <div>
                <h5>Convenience</h5>
                <p>
                  With just your <br />
                  mobile phone, you <br />
                  can co-own prime <br />
                  real estate from as <br />
                  low as N500
                </p>
              </div>
            </div>

            <div class="second__card">
              <div>
                <h5>Better Returns</h5>
                <p>
                  You make far more <br />
                  money than <br />
                  leaving your <br />
                  savings in a bank
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="img__section">
              <img src="/iv2.png" alt="" />
            </div>
          </div>
          <div class="col">
            <div class="third__card">
              <div>
                <h5>Instant Cash</h5>
                <p>
                  Turn your assets to <br />
                  cash when you <br />
                  need it
                </p>
              </div>
            </div>

            <div class="fourth__card">
              <div>
                <h5>Borrow at Low Interest</h5>
                <p>
                  Get instant loans at <br />
                  interest rates <br />
                  starting as low as 3%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <cards /> -->
    </div>
    <div class="join_vank_section mt-5">
      <div class="d-flex justify-content-center">
        <h1>
          Earn commission when <br />
          you refer a subscriber
        </h1>
      </div>
      <div class="view__assets__wrap text-center">
        <button class="assets__link">
          <span class="px-3">Get link</span>
        </button>
      </div>
    </div>
    <div class="faqs__wrap">
      <div class="faqs__content py-3">
        <h1>Frequently Asked Questions</h1>
        <h3 class="py-2 text-center">
          Most commonly asked questions about VANK
        </h3>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q1: How does VANK work?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A1: VANK Wallet enables you put aside part of your savings in real
              estate. You become a part owner of a verified land with potential
              for higher returns and with controlled risk compared to keeping
              your money in the bank or using it for other types of business.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of First Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q2: How can I use VANK?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A2: You can use VANK as a savings medium for higher return. Once
              you have more than N100,000 worth of holdings in your wallet, you
              can take a low interest loan against your holdings.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Second Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q3: How do I make money with VANK
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A3: You make money mostly from the rise in the value of your land
              holding on the VANK wallet. You may choose to sell your holding at
              any time. Other exciting ways for you to make money will be
              unveiled soon.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Third Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q4: What kind of property are listed on VANK?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A4: We currently have land in viable locations in select states in
              Nigeria. After far-reaching due diligence lands are onboarded onto
              the VANK network for subscription by users. We give preference to
              greenfield land which tend to have the greatest potential for
              price gain.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Fourth Question -->
        <div class="register_button_wrap text-center mt-3 py-4">
          <nuxt-link to="/faqs" class="assets__link">
            <span class="px-3">View all FAQs</span>
          </nuxt-link>
        </div>
      </div>
    </div>