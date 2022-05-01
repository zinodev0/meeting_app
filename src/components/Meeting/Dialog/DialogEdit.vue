<template>
  <v-dialog value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Edit Meeting </v-card-title>
      <v-card-text
        >Edit the Title of:
        <v-text-field v-model="meetingTitle" @keyup.enter="saveMeeting" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> Cancel </v-btn>
        <v-btn
          :disabled="meetingTitleInvalid"
          color="green darken-1"
          text
          @click="saveMeeting"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogEdit",
  props: ["meeting"],
  data: () => ({
    meetingTitle: null,
  }),
  computed: {
    meetingTitleInvalid() {
      return !this.meetingTitle || this.meetingTitle === this.meeting.title;
    },
  },

  methods: {
    saveMeeting() {
      if (!this.meetingTitleInvalid) {
        let payload = {
          id: this.meeting.id,
          title: this.meetingTitle,
        };
        this.$store.commit("updateMeetingTitle", payload);
        this.$emit("close");
      }
    },
  },
  mounted() {
    this.meetingTitle = this.meeting.title;
  },
};
</script>

<style></style>
