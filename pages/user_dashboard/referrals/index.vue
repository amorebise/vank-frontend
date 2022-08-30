<template>
  <div class="pay_bills_wrap w-100">
    <div class="referals__wrap">
      <user-nav name="Referral" />

      <div class="referal__body">
        <!-- <div>
          <font-awesome-icon
            @click="$router.go(-1)"
            role="button"
            class="fa-1x text-dark pl-1"
            :icon="['fas', 'arrow-left']"
          />
        </div> -->

        <div class="referal__content">
          <div class="text-center">
            <h4 class="font-weight-bold py-4">Refer a friend and earn cash</h4>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="img__wrap">
                <div class="d-flex pl-5">
                  <img src="/afiliate.svg" alt="referal image" />
                  <img src="/afiliate.svg" alt="referal image" />
                  <img src="/afiliate.svg" alt="referal image" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="limit__wrap">
                <p>
                  There is no limit to how much cash you can earn, copy <br />
                  your unique link below and invite all of your friends
                </p>

                <div class="copy__text">
                  <input
                    class="text"
                    style="width: 100%"
                    type="text"
                    :value="referrals"
                  />
                  <button class="pt-1" @click="copyText()">
                    <ion-icon
                      style="color: #00e8fe"
                      name="copy-outline"
                    ></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wallet__content mt-3">
          <div class="d-flex justify-content-center">
            <h5 v-if="referralBonus">
              You have earned &#8358;{{ referralBonus }} cash
            </h5>
            <h5 v-else>You have no referral bonus</h5>
            <div class="pt-1 pl-1">
              <ion-icon
                style="color: #00e8fe; font-size: 20px"
                name="card-outline"
              ></ion-icon>
            </div>
          </div>

          <div class="register_button_wrap text-center mt-1 py-4">
            <button @click="claimRefBonus()" class="assets__link">
              <span class="px-3">Transfer to Cash Wallet</span>
            </button>
          </div>

          <div class="text-center">
            <i style="font-size: 12px">
              You can only make a transfer when your cash is more than N5,000
            </i>
          </div>
          <div class="text-center">
            <a
              href="api.vankwallet.com/referral-terms-and-conditions/"
              target="_blank"
              style="font-size: 12px"
            >
              view referral terms and conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import creator_sidebar from "~/components/creator_sidebar.vue";
export default {
  middleware: "auth",
  components: { creator_sidebar },
  data() {
    return {
      referrals: {},
      referralBonus: {},
    };
  },
  methods: {
    async getReferrals() {
      let response = await this.$axios.get("/getReferrerUrl");
      this.referrals = response.data.slice(0, 40);
      console.log(this.referrals);
    },
    async getReferralBonus() {
      try {
        let response = await this.$axios.get("/getReferralBonus");
        this.referralBonus = response.data;
        console.log(this.referralBonus);
      } catch (error) {
        console.log(error.response);
      }
    },
    async claimRefBonus() {
      try {
        let response = await this.$axios.post("/claimBonusFromReferralWallet");
        console.log(response);
        if (this.referralBonus.length >= 5000)
          this.$toast.success(
            "Bonus has been transferred to your cash wallet",
            {
              timeout: 4000,
            }
          );
        else {
          this.$toast.warning("Balance must be up to N5000");
        }
        // this.$router.push('/user_dashboard/lagos_property')
      } catch (error) {
        console.log(error.response);
      }
    },
    copyText() {
      let copy_text = document.querySelector(".copy__text");
      copy_text.querySelector("button").addEventListener("click", function () {
        let input = copy_text.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copy_text.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copy_text.classList.remove("active");
        }, 1500);
      });
    },
  },
  created() {
    this.getReferrals();
    this.getReferralBonus();
  },
};
</script>

<style>
.referals__wrap {
  margin-left: 270px;
  background-color: #fff;
  min-height: 100vh;
  padding-right: 10px;
  /* padding: 0 50px; */
}
.ref__link,
.copy__text {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #00e8fe;
  padding: 5px;
  width: 57%;
  border-radius: 5px;
}
.copy__text input {
  font-size: 13px;
  outline: none;
}
.copy__text button:before {
  content: "Copied";
  position: absolute;
  top: -25px;
  right: 0;
  background: #00e8fe;
  padding: 2px 10px;
  font-size: 12px;
  border-radius: 5px;
  display: none;
}

/* .copy__text button:after {
  content: "";
  position: absolute;
  top: -10px;
  right: 25px;
  width: 10px;
  height: 10px;
  background: #00e8fe;
  transform: rotate(45deg);
  display: none;
} */
.copy__text.active button:before {
  display: block;
}
.copy__text.active {
  background-color: transparent;
}
.referals__wrap .referal__content {
  border: 1px solid #00e8fe;
  border-radius: 10px;
  padding: 30px;
}
.referals__wrap .img__wrap img {
  width: 130px;
}
.referals__wrap .limit__wrap p {
  font-size: 14px;
}
.referals__wrap .wallet__content h5 {
  color: #00e8fe;
  font-weight: 600;
}
.referals__wrap i {
  text-decoration: underline !important;
  font-weight: bold;
}

@media (max-width: 768px) {
  .referals__wrap {
    margin-left: 0 !important;
    padding: 0;
  }
  .referals__wrap .referal__body {
    padding: 15px;
  }
  .referals__wrap .img__wrap img {
    width: 100px !important;
  }
  .referals__wrap .img__wrap .pl-5 {
    padding: 0 !important;
  }
  .copy__text {
    width: 100%;
  }
}
</style>