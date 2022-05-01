<template>
  <v-dialog value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Delete task? </v-card-title>
      <v-card-text
        >Are you sure you want to delete {{ meeting.title }}</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> No </v-btn>
        <v-btn color="red darken-1" text @click="deleteMeeting(meeting.id)">
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogDelete",
  props: ["meeting"],
  methods: {
    deleteMeeting(id) {
      this.$store.dispatch("deleteMeeting", id);
    },
  },
};
</script>

<style></style>
