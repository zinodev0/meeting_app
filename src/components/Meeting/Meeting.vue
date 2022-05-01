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
          <v-btn icon>
            <v-icon
              @click.stop="deleteMeeting(meeting.id)"
              color="red lighten-1"
              >mdi-delete</v-icon
            >
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider> </v-divider>
  </div>
</template>

<script>
export default {
  name: "meeting",
  props: ["meeting"],
  methods: {
    doneMeeting(id) {
      this.$store.commit("doneMeeting", id);
    },
    deleteMeeting(id) {
      this.$store.commit("deleteMeeting", id);
    },
  },
};
</script>

<style></style>
