<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Meeting App </v-list-item-title>
          <v-list-item-subtitle> Made with vue js </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

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
      height="180"
      prominent
      src="img/meeting.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-container class="pa-0 pt-2">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>

          <search />
        </v-row>
        <v-row>
          <v-app-bar-title class="ml-4 text-h4">Welcome .</v-app-bar-title>
        </v-row>
        <v-row>
          <live-date-time />
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
  },
};
</script>
