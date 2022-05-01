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
          <v-list-item-title>{{ meeting.title }}</v-list-item-title>
          <!-- <v-list-item-subtitle>{{
                meeting.description
              }}</v-list-item-subtitle> -->
        </v-list-item-content>
        <v-list-item-action>
          <meeting-menu :meeting="meeting" />
          <!-- <v-btn icon>
            <v-icon @click.stop="dialogs.delete = true" color="red lighten-1"
              >mdi-delete</v-icon
            >
          </v-btn> -->
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider> </v-divider>
  </div>
</template>

<script>
import MeetingMenu from "@/components/Meeting/MeetingMenu.vue";

export default {
  name: "meeting",
  props: ["meeting"],

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
