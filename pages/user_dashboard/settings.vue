<template>
  <div class="pay_bills_wrap w-100">
    <div class="settings">
      <user-nav name="Settings" />
      <div class="settings_wrap">
        <template>
          <v-tabs v-model="tab" align-with-title>
            <v-tab>Change Password</v-tab>
            <v-tab>Item Two</v-tab>
            <v-tab>Item Three</v-tab>
          </v-tabs>
        </template>
        <v-tabs-items v-model="tab" class="tab_bg">
          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <p>
                  HI,
                  <nuxt-img
                    format="webp"
                    quality="90"
                    fit="cover"
                    sizes="xs:35vw sm:30vw md:20vw lg:8vw"
                    src="/emoji.png"
                  />
                  nothing to see here for now
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <p>
                  HI,
                  <nuxt-img
                    format="webp"
                    quality="90"
                    fit="cover"
                    sizes="xs:35vw sm:30vw md:20vw lg:8vw"
                    src="/emoji.png"
                  />
                  nothing to see here for now
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text class="">
                <p>
                  HI,
                  <nuxt-img
                    format="webp"
                    quality="90"
                    fit="cover"
                    sizes="xs:35vw sm:30vw md:20vw lg:8vw"
                    src="/emoji.png"
                  />
                  nothing to see here for now
                </p>
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
    };
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
.settings {
  margin-left: 230px;
  background-color: #fff;
  min-height: 100vh;
  padding: 0 50px;
}
.settings_wrap {
  margin-top: 50px;
}
/* .settings_wrap .v-slide-group__content {
  background-color: #f4ede4;
}
.settings_wrap .theme--light.v-tabs > .v-tabs-bar,
.settings_wrap .v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  background-color: #f4ede4;
} */
.settings_wrap .v-slide-group {
  flex-wrap: wrap;
}
.settings_wrap .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.settings_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-icon,
.settings_wrap
  .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active)
  > .v-btn,
.settings_wrap .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #55174f;
  font-variant: normal;
}
.settings_wrap .v-tab {
  text-transform: unset;
}

@media (max-width: 768px) {
  .settings {
    margin-left: 0 !important;
    padding: 0;
  }
}
</style>