<template>
  <v-container class="px-0" fluid>
    <v-row>
      <v-col class="mx-auto" cols="12" sm="9">
        <v-text-field
          v-model="newMeetingTitle"
          @keyup.enter="addMeeting"
          class="pa-3 field-add-meeting"
          outlined
          placeholder="Add Meeting"
          hide-details
          clearable
        >
          <template v-slot:append>
            <v-icon :disabled="invalidMeetingTitle" @click="addMeeting"
              >mdi-plus</v-icon
            >
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AddMeetingInput",
  data() {
    return {
      newMeetingTitle: "",
    };
  },

  computed: {
    invalidMeetingTitle() {
      return !this.newMeetingTitle;
    },
  },

  methods: {
    addMeeting() {
      if (!this.invalidMeetingTitle) {
        this.$store.dispatch("addMeeting", this.newMeetingTitle);
        this.newMeetingTitle = "";
      }
    },
  },
};
</script>

<style>
.field-add-meeting.v-input--is-focused .v-input__slot {
  background: #3a4577 !important;
}
</style>
