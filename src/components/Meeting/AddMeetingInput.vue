<template>
  <div class="input">
    <v-text-field
      v-model="newMeetingTitle"
      @click:append="addMeeting"
      @keyup.enter="addMeeting"
      class="pa-3"
      outlined
      label="Add Meeting"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "AddMeetingInput",
  data() {
    return {
      newMeetingTitle: "",
    };
  },

  methods: {
    addMeeting() {
      this.$store.commit("addMeeting", this.newMeetingTitle);
      this.newMeetingTitle = "";
    },
    doneMeeting(id) {
      this.$store.commit("doneMeeting", id);
    },
    deleteMeeting(id) {
      this.$store.commit("deleteMeeting", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 60%;
  margin: auto;
}

@media screen and (max-width: 600px) {
  .input {
    width: 90%;
  }
}
</style>
