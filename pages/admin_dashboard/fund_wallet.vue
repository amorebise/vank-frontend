<template>
  <div class="pay_bills_wrap w-100">
    <div class="users">
      <user-nav name="Users" />
      <div class="users_wrap">
        <template>
          <v-tabs v-model="tab" align-with-title>
            <v-tab>All Users</v-tab>
            <v-tab>Subscribers</v-tab>
            <v-tab>Market Makers</v-tab>
          </v-tabs>
        </template>
        <v-tabs-items v-model="tab" class="tab_bg">
          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="transactions_data">
                  <v-simple-table fixed-header height="400px">
                    <template v-slot:default>
                      <thead>
                        <tr class="">
                          <th class="text-left th_color">Action</th>
                          <th class="text-left th_color">First Name</th>
                          <th class="text-left th_color">Last Name</th>
                          <th class="text-left th_color">Email Address</th>
                          <th class="text-left th_color">Phone Number</th>
                          <th class="text-left th_color">House Address</th>
                          <th class="text-left th_color">Country</th>
                          <th class="text-left th_color">State</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="mt-2"
                          v-for="user in users"
                          :key="user.index"
                        >
                          <td><button class="buy__button">Buy</button></td>
                          <td>{{ user.first_name }}</td>
                          <td>{{ user.last_name }}</td>
                          <td>{{ user.email }}</td>
                          <td>{{ user.phone_number }}</td>
                          <td>{{ user.address }}</td>
                          <td>{{ user.country }}</td>
                          <td>{{ user.state }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="transactions_data">
                  <v-simple-table fixed-header height="400px">
                    <template v-slot:default>
                      <thead>
                        <tr class="">
                          <th class="text-left th_color">Action</th>
                          <th class="text-left th_color">First Name</th>
                          <th class="text-left th_color">Last Name</th>
                          <th class="text-left th_color">Email Address</th>
                          <th class="text-left th_color">Phone Number</th>
                          <th class="text-left th_color">House Address</th>
                          <th class="text-left th_color">Country</th>
                          <th class="text-left th_color">State</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="mt-2"
                          v-for="user in users"
                          :key="user.index"
                        >
                          <td><button class="buy__button">Buy</button></td>
                          <td>{{ user.first_name }}</td>
                          <td>{{ user.last_name }}</td>
                          <td>{{ user.email }}</td>
                          <td>{{ user.phone_number }}</td>
                          <td>{{ user.address }}</td>
                          <td>{{ user.country }}</td>
                          <td>{{ user.state }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <div class="transactions_data">
                  <v-simple-table fixed-header height="400px">
                    <template v-slot:default>
                      <thead>
                        <tr class="">
                          <th class="text-left th_color">First Name</th>
                          <th class="text-left th_color">Last Name</th>
                          <th class="text-left th_color">Email Address</th>
                          <th class="text-left th_color">Phone Number</th>
                          <th class="text-left th_color">House Address</th>
                          <th class="text-left th_color">Country</th>
                          <th class="text-left th_color">State</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="mt-2"
                          v-for="user in users"
                          :key="user.index"
                        >
                          <td>{{ user.first_name }}</td>
                          <td>{{ user.last_name }}</td>
                          <td>{{ user.email }}</td>
                          <td>{{ user.phone_number }}</td>
                          <td>{{ user.address }}</td>
                          <td>{{ user.country }}</td>
                          <td>{{ user.state }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
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
      tab: null,
      users: {},
    };
  },
  methods: {
    async getUsers() {
      try {
        const response = await this.$axios.get("/admin/getAllUser");
        this.users = response.data;
        console.log(this.users);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Titillium+Web&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none !important;
}
.users {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.buy__button {
  color: #00e8fe;
}
.users_wrap {
  margin-top: 50px;
}
/* .settings_wrap .v-slide-group__content {
  background-color: #f4ede4;
}
.settings_wrap .theme--light.v-tabs > .v-tabs-bar,
.settings_wrap .v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  background-color: #f4ede4;
} */
.users_wrap .v-slide-group {
  flex-wrap: wrap;
}
.users_wrap .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.users_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-icon,
.users_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-btn,
.users_wrap .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}
.users_wrap .v-tab {
  text-transform: unset;
}

@media (max-width: 768px) {
  .users {
    margin-left: 0 !important;
    padding: 0;
  }
}
</style>