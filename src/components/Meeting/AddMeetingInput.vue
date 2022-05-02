<template>
  <div class="input">
    <v-text-field
      v-model="newMeetingTitle"
      @keyup.enter="addMeeting"
      class="pa-3"
      outlined
      label="Add Meeting"
      hide-details
      clearable
    >
      <template v-slot:append>
        <v-icon
          :disabled="invalidMeetingTitle"
          color="primary"
          @click="addMeeting"
          >mdi-plus</v-icon
        >
      </template>
    </v-text-field>
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
