<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app :mobile-breakpoint="768">
      <v-img
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        src="img/meeting.jpg"
        height="180"
        class="pa-4 pt-7"
      >
        <v-avatar size="70" class="mb-2">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">
          FirstName LastName
        </div>
        <div class="white--text text-subtitle-2">username</div>
      </v-img>

      <v-list dense nav>
        <v-list-item
          :to="item.route"
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#6A76AB"
      dark
      :height="$route.path === '/' ? '205' : '180'"
      prominent
      src="img/meeting.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.9), rgba(25,32,72,.9)"
        ></v-img>
      </template>

      <v-container class="pa-0 pt-2 header-container">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>

          <search />
        </v-row>
        <v-row class="mt-n3">
          <v-app-bar-title class="ml-4 text-h4">{{
            $store.state.appTitle
          }}</v-app-bar-title>
        </v-row>
        <v-row>
          <live-date-time />
        </v-row>
        <v-row class="mt-n5" v-if="$route.path === '/'">
          <add-meeting-input />
        </v-row>
      </v-container>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view> </router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "@/components/Global/Snackbar.vue";
import Search from "@/components/Tools/Search.vue";
import LiveDateTime from "./components/Tools/LiveDateTime.vue";
import AddMeetingInput from "./components/Meeting/AddMeetingInput.vue";

export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Meeting", icon: "mdi-account-multiple", route: "/" },
      { title: "About", icon: "mdi-help-box", route: "/about" },
    ],
  }),

  components: {
    Snackbar,
    Search,
    LiveDateTime,
    AddMeetingInput,
  },
  mounted() {
    this.$store.dispatch("getMeetings");
  },
};
</script>

<style>
.header-container {
  max-width: none !important;
}
.v-app-bar-title__placeholder,
.v-app-bar-title__content {
  overflow: initial !important;
}
</style>
