<template>
  <div class="pay_bills_wrap w-100">
    <div class="fund__wallet pr-3">
      <user-nav class="estate__nav py-4" name="Bank Transfer" />
      <div class="fundz__wrap">
        <div>
          <font-awesome-icon @click="back()" role="button" class="fa-1x text-dark pl-1" :icon="['fas', 'arrow-left']" />
        </div>
        <div class="payments_wrap subscriber px-1">
          <div class="bank__wrap py-5">
            <div class="text-center" style="line-height: 13px">
              <p>Pay &#8358;{{ selected_amount.amount }} to:</p>
              <!-- <p>Vank Digital Services</p> -->

              <p>Bank: {{reserved_acct.bank_name}}</p>
              <p>Acc No: {{reserved_acct.account_number}}</p>
            </div>
            <div class="view__assets__wrap text-center">
              <div>
                <span style="font-size: 8px; color: red">Disclaimer: Be sure to make payment before clicking on the
                  button below</span>
              </div>
              <div>
                <!-- <nuxt-link to="/user_dashboard/transfer_confirmation"> -->
                <button @click="confirmPayment()" class="assets__link">
                  <span class="px-3" style="font-weight: 400">I have made full payment</span>
                </button>
                <!-- </nuxt-link> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import creator_sidebar from "~/components/creator_sidebar.vue";
export default {
  components: { creator_sidebar },
  data() {
    return {
      reserved_acct: {},
      selected_amount: {},
    };
  },
  methods: {
    async confirmPayment() {
      try {
        let response = await this.$axios.post("/confirmPayment");
        console.log(response);
        this.$router.push("/user_dashboard/transfer_confirmation");
      } catch (error) {
        console.log(error.response);
      }
    },
    async getReseervedAcct() {
      try {
        let response = await this.$axios.get('/getReservedAccount')
        this.reserved_acct = response.data
        console.log(this.reserved_acct);
      }
      catch (error) {
        console.log(error.response);
      }
    },
    showAmount() {
      let markmm = localStorage.getItem("marketMakerKey");
      this.selected_amount = JSON.parse(markmm);
      console.log(this.selected_amount);
      // console.log(this.selected_amount.id);
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.showAmount();
    this.getReseervedAcct()
  },
};
</script>

<style>
.fund__wallet {
  margin-left: 270px;
  background-color: #fff;
}

.fund__wallet .bank__wrap {
  border: 1px solid #00e8fe;
  width: 50%;
  margin: 100px auto;
  display: grid;
  place-items: center;
  border-radius: 20px;
  min-height: 25vh;
}

.fund__wallet .form-control {
  width: 250px;
  box-shadow: none;
  font-size: 12px;
}

.fund__wallet label {
  font-size: 13px;
}

.fund__wallet p {
  font-size: 12px;
}

.fund__wallet .select:focus {
  border-color: #3030303a;
}

@media (max-width: 768px) {
  .fund__wallet {
    margin-left: 0;
    /* padding: 0 !important; */
  }

  .fund__wallet .fundz__wrap {
    padding-left: 20px;
  }

  .fund__wallet .bank__wrap {
    border: 1px solid #00e8fe;
    width: 100%;
    margin: 20px auto;
    display: grid;
    place-items: center;
    border-radius: 20px;
  }
}
</style>