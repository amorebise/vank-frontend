<template>
  <div>
    <header-nav />
    <div class="faq_wrapper mt-5">
      <div class="faq_content bg-white py-5 px-5">
        <div class="text-center">
          <h1>Frequently Asked Questions</h1>
          <h3 class="py-2">Most commonly asked questions about VANK</h3>
        </div>

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
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q5: Can I verify the land I want to buy into?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A5: Yes. We will provide all the information you need to verify
              the land at the relevant registry and on the ground.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Fifth Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q6: Does VANK organize a viewing tour of the land onboarded to the
              network?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A6: Given the model that we operate, we are currently unable to
              arrange a viewing for every individual subscriber. But subscribers
              looking to commit a sizable sum of at least N2M to subscribe can
              book to join a scheduled tour.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Sixth Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q7: When I subscribe into a land, do I own it? Can I build on it?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A7: When you buy into a land, you become a part owner of the
              property to share in its price appreciation if you choose to sell.
              You also share from any income that may come from the land if it
              becomes productive in the future through lease or business
              activity of any kind. However, you may not take possession of the
              land as you are only a part owner.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Seventh Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q8: Can I buy a full plot of land?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A8: We will be unveiling a product for full ownership soon.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Eighth Question -->
        <!-- Ninth Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q9: How do I sell my land?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A9: You can currently sell your land back to us at market rate. We
              charge a fee for the service.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of ninth Question -->
        <!-- tenth Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q10: How do I monitor the price of my lands bought on the VANK
              wallet
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A10: The wallet will be updated with pricing information for every
              land on the VANK network. Live prices may be available where
              possible
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of tenth Question -->
        <!-- eleventh Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q11: Can I use my land as collateral?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A11: Yes. You can use your land holdings in your wallet as
              collateral for loan on the platform.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of eleventh Question -->
        <!-- twelvth Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q12: Can I transfer ownership of my land to family?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A12: Yes. You may transfer title to family after verification
              which can take up to 3 months.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of twelvth Question -->
        <!-- thirteenth Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q13: What does it mean to 'stake' my token
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A13: Staking means you lock-in your land for a period and commit
              to not sell it. We pay you a guaranteed at the expiration of your
              chosen lock-in period.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of fourteenth Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q14: What does it mean to 'lock' or 'unlock' my token?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A14: The land you buy are represented in tokens. There are
              transactions you may undertake on VANK wallet that will lock-in
              your land tokens. Such transactions are Staking transactions and
              Borrowing transactions. You can choose to unlock your land tokens
              at any time by either ending the Staking contract or repaying your
              loan.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of fourteenth Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q15: Is VANK regulated?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              A15: VANK is working on securing regulatory approval for its
              unique business model. We will keep you informed of progress. But
              be aware that your money is secured as long as the land it buys
              into is secured. This is the reason we buy only duly vetted and
              viable land.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of fifteenth Question -->
      </div>
    </div>

    <footer-section />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Karla&family=Lato&family=Nunito&family=Plus+Jakarta+Sans&family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  text-decoration: none !important;
}
.faq_wrapper {
  padding: 0 100px;
  background-color: #f8feff;
}
.faq_content {
  margin: 0 auto;
  background-color: #f8feff !important;
  width: 100%;
  border-top: 1px solid #30303030;
}
.faq_content h1 {
  font-size: 52px;
  font-weight: bold;
  color: #0f1843;
}
.faq_wrapper .theme--light.v-expansion-panels .v-expansion-panel {
  border-radius: 0 !important;
  box-shadow: none !important;
  border: none !important;
}
.faq_wrapper .v-expansion-panel-header {
  justify-content: space-between !important;
  background-color: #f8feff !important;
  border-bottom: 1px solid #b6858530 !important;
  border-right: none !important;
  border-radius: 0px !important;
  box-shadow: none !important;
  padding: 30px 20px !important;
}
.faq_wrapper .v-expansion-panel-content__wrap {
  background-color: #f2f5f7 !important;

  border-bottom: 1px solid #30303030 !important;
  padding: 30px 20px !important;
}
.faq_wrapper .v-expansion-panel::before {
  box-shadow: none !important;
}

@media (max-width: 768px) {
  .faq_wrapper {
    padding: 10px;
  }
  .faq_wrapper .v-expansion-panel-header,
  .faq_wrapper .v-expansion-panel-content__wrap {
    font-size: 13px;
  }

  .faq_content {
    margin: 0;
    width: 100%;
    padding: 7px !important;
  }
  .faq_content h1 {
    font-size: 27px;
  }
  .faq_content h3 {
    font-size: 15px;
  }
}
</style>