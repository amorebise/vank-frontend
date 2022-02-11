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
              Q1. What is the minimum amount of money I can save per month?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              The minimum amount of money you can commit to saving is N5,000
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of First Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q2: What is the maximum amount I can save per month?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              The maximum amount you can save per month is N2,000,000
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Second Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q3: Can I withdraw my tokens to my private wallet?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Yes, you may withdraw your tokens to your private wallet
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Third Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q4: What is USDT?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              USDT is a crypto version of the US Dollar
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Fourth Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q5: What is vUSDT?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              vUSDT is the USDT used on the VANK platform
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Fifth Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q6: What is a VANK Basket?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              When you choose the VANK Basket plan, we will spread your savings
              across high potential crypto assets. The composition of these
              assets will vary from month to month. The crypto that we buy for
              you in any month is the VANK Basket for that month.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Sixth Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q7: How much money can I make?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              How much money you can make using our model depends on how long
              you are willing to hold your crypto. But generally, you’ll be in a
              better position than keeping your savings in Naira.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Seventh Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q8: VANK says it runs a risk-controlled model. What does that
              mean?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Our model manages risks by allowing subscribers set aside only a
              fraction of their monthly savings to buy crypto. We also ensure
              projects are vetted and have a ready market for subscribers to
              sell.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Eighth Question -->
        <!-- Ninth Question -->
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Q9: What if I want to sell the crypto in my VANK Wallet?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              We can buy from you right in your VANK Wallet or you can withdraw
              to sell on an exchange
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- End of Eighth Question -->
      </div>
    </div>

    <footer-section />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none !important;
}
.faq_wrapper {
  padding: 0 100px;
  background-color: #101944;
}
.faq_content {
  margin: 0 auto;
  width: 100%;
  border-top: 1px solid #30303030;
}
.faq_content h1 {
  font-size: 72px;
  font-weight: bold;
  color: #0f1843;
  font-family: "Titillium Web", sans-serif;
}
.faq_wrapper .theme--light.v-expansion-panels .v-expansion-panel {
  border-radius: 0 !important;
  box-shadow: none !important;
  border: none !important;
}
.faq_wrapper .v-expansion-panel-header {
  justify-content: space-between !important;
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