<template>
  <div>
    <div class="transactions_data">
      <v-simple-table fixed-header height="400px">
        <template v-slot:default>
          <thead>
            <tr class="">
              <th class="text-left th_color">ID</th>
              <th class="text-left th_color">mm_identification</th>
              <th class="text-left th_color">first_name</th>
              <th class="text-left th_color">last_name</th>
              <th class="text-left th_color">bank_name</th>
              <th class="text-left th_color">account_no</th>
              <th class="text-left th_color">phone_number</th>
              <th class="text-left th_color">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="mt-2">
              <td v-for="data in market_makers" :key="data">{{ data }}</td>
              <td>
                <button class="confirm__button px-3 py-1" @click="updateBuy()">
                  Confirm
                </button>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <!-- {{ market_makers }} -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      market_makers: {},
    };
  },
  methods: {
    async updateBuy() {
      try {
        const mm_id = this.market_makers.id;
        const response = await this.$axios.post(`/updateSubsription/${mm_id}`);
        console.log(response);
        console.log(mm_id);
        this.$router.push("/subscription_notification");
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    let markmm = localStorage.getItem("marketMakerKey");
    this.market_makers = JSON.parse(markmm)[1][0];
    console.log(this.market_makers);
    console.log(this.market_makers.id);
  },
};
</script>

<style >
.confirm__button {
  background-color: #00e8fe;
  border-radius: 5px;
}
</style>