<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-5': meeting.done }"
      @click="doneMeeting(meeting.id)"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="meeting.done" color="primary"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title> {{ meeting.title }}</v-list-item-title>
          <!-- <v-list-item-subtitle>{{
                meeting.description
              }}</v-list-item-subtitle> -->
        </v-list-item-content>
        <v-list-item-action v-if="meeting.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon
            >{{ meeting.dueDate | formattedDate }}</v-list-item-action-text
          >
        </v-list-item-action>
        <v-list-item-action>
          <meeting-menu :meeting="meeting" />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider> </v-divider>
  </div>
</template>

<script>
import MeetingMenu from "@/components/Meeting/MeetingMenu.vue";
import { format } from "date-fns";

export default {
  name: "meeting",
  props: ["meeting"],
  filters: {
    formattedDate(value) {
      return format(new Date(value), "MMM do");
    },
  },
  components: {
    MeetingMenu,
  },
  methods: {
    doneMeeting(id) {
      this.$store.commit("doneMeeting", id);
    },
  },
};
</script>

<style></style>
